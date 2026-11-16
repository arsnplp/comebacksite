#!/usr/bin/env bash
# Installe le déploiement automatique de getcomeback.fr sur le VPS.
#
# À lancer UNE fois, sur le VPS, en root (sudo). Le script :
#   1. retrouve le dossier du site (clone git de arsnplp/comebacksite) ;
#   2. retrouve comment le site tourne (pm2 ou service systemd) ;
#   3. installe /usr/local/bin/deploy-comebacksite.sh ;
#   4. ajoute une tâche cron (/etc/cron.d/comebacksite-deploy) qui l'appelle
#      toutes les 2 minutes ;
#   5. lance un premier déploiement.
#
# Il ne touche ni à nginx, ni au DNS, ni aux autres sites. S'il a le moindre
# doute (dossier introuvable, plusieurs candidats, mode de lancement inconnu),
# il s'arrête sans rien installer et affiche ce qu'il a trouvé.
#
# Ensuite, tout commit poussé sur main part en production en 2 à 5 minutes :
#   git reset --hard origin/main, npm ci (si package-lock a changé),
#   npm run build, redémarrage. Si le build échoue, retour à la version
#   précédente. Journal : /var/log/comebacksite-deploy.log
#
# Désinstaller : rm /etc/cron.d/comebacksite-deploy /usr/local/bin/deploy-comebacksite.sh
#
# Forcer le dossier si la détection échoue :  APP_DIR=/chemin sudo -E bash install-auto-deploy.sh

set -euo pipefail

REPO_MATCH="arsnplp/comebacksite"
BRANCH="main"
DEPLOY_BIN="/usr/local/bin/deploy-comebacksite.sh"
CRON_FILE="/etc/cron.d/comebacksite-deploy"
LOG="/var/log/comebacksite-deploy.log"
STATE="/var/lib/comebacksite-deploy"

stop() { echo; echo "ARRÊT, rien n'a été installé : $*"; echo "Copie tout ce qui est affiché ci-dessus à Claude."; exit 2; }

[ "$(id -u)" = "0" ] || { echo "Lance ce script en root : sudo bash $0"; exit 1; }
command -v python3 >/dev/null || stop "python3 absent."
command -v flock >/dev/null || stop "flock absent (paquet util-linux)."

# Charge nvm si l'utilisateur s'en sert (cron n'a pas le PATH interactif).
PRELUDE='export NVM_DIR="$HOME/.nvm"; if [ -s "$NVM_DIR/nvm.sh" ]; then . "$NVM_DIR/nvm.sh" >/dev/null 2>&1; fi; export PATH="$PATH:/usr/local/bin:/usr/bin:/bin"; '
as_user() { # as_user <utilisateur> <commande>
  if [ "$1" = "root" ]; then HOME=/root bash -c "${PRELUDE}$2"; else sudo -u "$1" -H bash -c "${PRELUDE}$2"; fi
}

echo "== 1. Dossier du site"
if [ -z "${APP_DIR:-}" ]; then
  CANDS=()
  while IFS= read -r g; do
    if grep -qi "$REPO_MATCH" "$g/config" 2>/dev/null; then CANDS+=("$(dirname "$g")"); fi
  done < <(find /var/www /home /root /srv /opt -maxdepth 5 -type d -name .git -not -path '*/node_modules/*' 2>/dev/null || true)
  printf '   candidat : %s\n' "${CANDS[@]:-aucun}"
  [ "${#CANDS[@]}" -eq 1 ] || stop "il faut exactement un clone de $REPO_MATCH (trouvé : ${#CANDS[@]}). Si le site est envoyé sur le serveur sans git, dis-le à Claude."
  APP_DIR="${CANDS[0]}"
fi
[ -d "$APP_DIR/.git" ] || stop "$APP_DIR n'est pas un clone git."
OWNER="${RUN_AS:-$(stat -c %U "$APP_DIR")}"
if ! id "$OWNER" >/dev/null 2>&1; then
  echo "   propriétaire du dossier sans compte sur ce serveur ($OWNER) : les commandes tourneront en root"
  OWNER="root"
fi
# Le dossier peut appartenir à un autre identifiant que celui qui lance git.
PRELUDE="${PRELUDE}export GIT_CONFIG_COUNT=1 GIT_CONFIG_KEY_0=safe.directory GIT_CONFIG_VALUE_0=$(printf '%q' "$APP_DIR"); "
echo "   dossier : $APP_DIR (commandes lancées en : $OWNER)"

echo "== 2. État git"
as_user "$OWNER" "git -C '$APP_DIR' fetch -q origin $BRANCH" || stop "git fetch impossible depuis le serveur."
CUR_BRANCH="$(as_user "$OWNER" "git -C '$APP_DIR' rev-parse --abbrev-ref HEAD")"
echo "   branche : $CUR_BRANCH"
echo "   version : $(as_user "$OWNER" "git -C '$APP_DIR' log --oneline -1")"
echo "   main    : $(as_user "$OWNER" "git -C '$APP_DIR' log --oneline -1 origin/$BRANCH")"
[ "$CUR_BRANCH" = "$BRANCH" ] || stop "le serveur est sur la branche '$CUR_BRANCH', pas sur $BRANCH."
as_user "$OWNER" "git -C '$APP_DIR' merge-base --is-ancestor HEAD origin/$BRANCH" \
  || stop "le serveur a des commits qui ne sont pas sur origin/$BRANCH."
LOCAL_CHANGES="$(as_user "$OWNER" "git -C '$APP_DIR' status --porcelain --untracked-files=no")"
if [ -n "$LOCAL_CHANGES" ]; then
  echo "   fichiers suivis modifiés sur le serveur (sauvegardés en .patch avant d'être écrasés) :"
  echo "$LOCAL_CHANGES" | sed 's/^/     /'
fi

echo "== 3. Node"
NPM_PATH="$(as_user "$OWNER" "command -v npm" || true)"
[ -n "$NPM_PATH" ] || stop "npm introuvable pour l'utilisateur $OWNER."
echo "   npm : $NPM_PATH ($(as_user "$OWNER" "node -v"))"

echo "== 4. Mode de lancement"
RESTART_USER=""; RESTART_CMD=""
USERS="$OWNER"; [ "$OWNER" = "root" ] || USERS="$OWNER root"
for u in $USERS; do
  JLIST="$(as_user "$u" "command -v pm2 >/dev/null 2>&1 && pm2 jlist 2>/dev/null" || true)"
  [ -n "$JLIST" ] || continue
  NAMES="$(APP_DIR="$APP_DIR" python3 -c '
import json, os, sys
raw = sys.stdin.read()
i = raw.find("[")
try:
    procs = json.loads(raw[i:]) if i >= 0 else []
except Exception:
    procs = []
app = os.path.realpath(os.environ["APP_DIR"])
for p in procs:
    cwd = os.path.realpath((p.get("pm2_env") or {}).get("pm_cwd") or "")
    if cwd == app:
        print(p.get("name"))
' <<<"$JLIST")"
  COUNT="$(printf '%s' "$NAMES" | grep -c . || true)"
  if [ "$COUNT" = "1" ]; then
    RESTART_USER="$u"; RESTART_CMD="pm2 restart $(printf '%q' "$NAMES") --update-env"
    echo "   pm2 (utilisateur $u), processus : $NAMES"
    break
  elif [ "$COUNT" != "0" ]; then
    stop "plusieurs processus pm2 tournent dans $APP_DIR : $(echo "$NAMES" | tr '\n' ' ')"
  fi
done
if [ -z "$RESTART_CMD" ]; then
  UNITS="$(grep -l -- "$APP_DIR" /etc/systemd/system/*.service 2>/dev/null || true)"
  COUNT="$(printf '%s' "$UNITS" | grep -c . || true)"
  if [ "$COUNT" = "1" ]; then
    UNIT="$(basename "$UNITS")"
    RESTART_USER="root"; RESTART_CMD="systemctl restart $(printf '%q' "$UNIT")"
    echo "   systemd : $UNIT"
  fi
fi
[ -n "$RESTART_CMD" ] || stop "impossible de savoir comment le site est lancé (ni pm2 ni service systemd pointant sur $APP_DIR)."

echo "== 5. Installation"
mkdir -p "$STATE"
{
  echo '#!/usr/bin/env bash'
  echo '# Généré par scripts/vps/install-auto-deploy.sh (dépôt comebacksite). Ne pas éditer à la main.'
  echo 'set -uo pipefail'
  printf 'APP_DIR=%q\nOWNER=%q\nBRANCH=%q\nRESTART_USER=%q\nRESTART_CMD=%q\nLOG=%q\nSTATE=%q\n' \
    "$APP_DIR" "$OWNER" "$BRANCH" "$RESTART_USER" "$RESTART_CMD" "$LOG" "$STATE"
  printf 'PRELUDE=%q\n' "$PRELUDE"
  cat <<'DEPLOY'
export PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
mkdir -p "$STATE"
exec 9>/var/lock/comebacksite-deploy.lock
flock -n 9 || exit 0

as_user() {
  if [ "$1" = "root" ]; then HOME=/root bash -c "${PRELUDE}$2"; else sudo -u "$1" -H bash -c "${PRELUDE}$2"; fi
}
log() { echo "$(date -Iseconds) $*" >> "$LOG"; }

as_user "$OWNER" "git -C '$APP_DIR' fetch -q origin $BRANCH" 2>>"$LOG" || { log "git fetch impossible"; exit 1; }
BEFORE="$(as_user "$OWNER" "git -C '$APP_DIR' rev-parse HEAD")"
AFTER="$(as_user "$OWNER" "git -C '$APP_DIR' rev-parse origin/$BRANCH")"
[ -n "$BEFORE" ] && [ -n "$AFTER" ] || { log "version illisible"; exit 1; }
[ "$BEFORE" = "$AFTER" ] && exit 0
# Un commit dont le build a déjà échoué n'est pas retenté toutes les 2 minutes.
if [ -f "$STATE/failed" ] && [ "$(cat "$STATE/failed")" = "$AFTER" ]; then exit 0; fi

if ! as_user "$OWNER" "git -C '$APP_DIR' merge-base --is-ancestor HEAD origin/$BRANCH"; then
  log "le serveur a divergé de origin/$BRANCH, déploiement ignoré pour $AFTER"
  echo "$AFTER" > "$STATE/failed"; exit 1
fi

if [ -n "$(as_user "$OWNER" "git -C '$APP_DIR' status --porcelain --untracked-files=no")" ]; then
  PATCH="$STATE/modifs-locales-$(date +%Y%m%d-%H%M%S).patch"
  as_user "$OWNER" "git -C '$APP_DIR' diff HEAD" > "$PATCH" 2>/dev/null
  log "fichiers modifiés sur le serveur sauvegardés dans $PATCH puis écrasés"
fi

build() { # build <commit> <commit précédent>
  local install=""
  if ! as_user "$OWNER" "git -C '$APP_DIR' diff --quiet $2 $1 -- package-lock.json package.json"; then
    install="npm ci --no-audit --no-fund && "
  fi
  as_user "$OWNER" "cd '$APP_DIR' && git reset -q --hard $1 && ${install}npm run build" >> "$LOG" 2>&1
}

log "déploiement $BEFORE -> $AFTER"
if build "$AFTER" "$BEFORE"; then
  if as_user "$RESTART_USER" "$RESTART_CMD" >> "$LOG" 2>&1; then
    rm -f "$STATE/failed"
    log "OK, en ligne : $AFTER"
  else
    log "ÉCHEC du redémarrage ($RESTART_CMD)"; exit 1
  fi
else
  log "ÉCHEC du build de $AFTER, retour à $BEFORE"
  echo "$AFTER" > "$STATE/failed"
  if build "$BEFORE" "$AFTER"; then
    as_user "$RESTART_USER" "$RESTART_CMD" >> "$LOG" 2>&1
    log "version précédente rétablie : $BEFORE"
  else
    log "ÉCHEC du retour arrière, intervention manuelle nécessaire"
  fi
  exit 1
fi
DEPLOY
} > "$DEPLOY_BIN"
chmod 755 "$DEPLOY_BIN"
bash -n "$DEPLOY_BIN" || { rm -f "$DEPLOY_BIN"; stop "script de déploiement invalide."; }
touch "$LOG"

printf 'SHELL=/bin/bash\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n*/2 * * * * root %s\n' "$DEPLOY_BIN" > "$CRON_FILE"
chmod 644 "$CRON_FILE"
echo "   script : $DEPLOY_BIN"
echo "   cron   : $CRON_FILE (toutes les 2 minutes)"

echo "== 6. Premier déploiement (build en cours, 1 à 3 minutes)"
"$DEPLOY_BIN" || true
echo "--- fin du journal ---"
tail -n 15 "$LOG" || true
echo
echo "Installé. Version en ligne : $(as_user "$OWNER" "git -C '$APP_DIR' log --oneline -1")"
