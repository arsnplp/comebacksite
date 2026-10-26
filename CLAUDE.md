# Comeback : site vitrine (getcomeback.fr)

Comeback est un SaaS français de carte de fidélité digitale pour commerçants
indépendants. La carte s'ajoute dans Apple Wallet ou Google Wallet en un scan
de QR code, sans application. Le commerçant envoie des notifications sur
l'écran verrouillé de ses clients et suit le CA généré dans un dashboard.
Fondateur : Arsène Lecoq (arsene.lecoq@getcomeback.fr).

Ce repo est le site vitrine (Next.js 15, Tailwind 4, MDX pour le blog).
L'app est un autre repo (arsnplp/combeckapp, app.getcomeback.fr).

## Règles à respecter

- **Un seul CTA sur tout le site** : composant `TrialCTA`
  (`components/ui/TrialCTA.tsx`). Libellé, destination et réassurance sont
  centralisés dans `lib/links.ts` :
  - libellé : « Créer ma carte gratuitement »
  - destination : `https://app.getcomeback.fr/signup?plan=free` (création de
    compte avec l'essai). Ne jamais pointer un CTA vers `/login`, et ne jamais
    retirer `?plan=free` (sans lui, l'app renvoie vers ses tarifs).
  - réassurance : « 30 jours gratuits · 0 € aujourd'hui · Résiliable en 1 clic »
  - pas de second bouton concurrent (démo, contact…) au même niveau.
- **Pas d'offre gratuite affichée.** Tout commence par l'essai de 30 jours sur
  le plan Business : carte bancaire demandée, 0 € prélevé. Avant la fin, le
  commerçant garde Business, passe sur Pro ou résilie en un clic. Sans action,
  Business continue.
- **Une seule carte de fidélité par commerce**, sur tous les plans.
- **Installation offerte** : après l'inscription, Arsène appelle le commerçant
  pour configurer la carte avec lui (10 minutes).
- **Aucune preuve inventée** : pas de faux témoignages, faux logos clients,
  nombre de clients ou statistique non mesurés. Les témoignages fictifs ont
  été retirés volontairement.
- **Pas de tiret cadratin « — » dans les textes du site.**
- Affiliation, page démo et page témoignages ont été retirées (redirections
  dans `next.config.mjs`). Ne pas les réintroduire.
- Chaque modification est poussée sur GitHub. Le déploiement est fait par
  Arsène, pas depuis ici.

## Offres (source : `content/pricing.ts`)

Sur `main` : Pro 9,99 € TTC/mois (100 clients), Business 39,99 € TTC/mois
(illimité). Nouvelle grille prête sur la branche `nouvelle-grille-tarifaire`,
pas encore en ligne : Pro 14,99 € (300 clients), Business 29,99 €. Toujours
lire les prix dans `content/pricing.ts` plutôt que de les écrire en dur.

Inclus dans les deux plans : Apple et Google Wallet, affiche de comptoir A4
avec QR code générée par l'app, notifications sur l'écran verrouillé, relances
automatiques des clients inactifs, carte qui remonte quand le client passe à
moins de 100 m de la boutique (iPhone uniquement), mini-jeux (roue de la
fortune, carte à gratter, coffres mystère, joués avec les points), parrainage
client, export CSV, mode multi-établissements (franchise, plusieurs camions).

## Food trucks

- Cible prioritaire de l'acquisition : Meta Ads (formulaires instantanés qui
  renvoient vers l'inscription) et cold call dans des villes de 30 000
  habitants ou moins, hors food trucks uniquement B2B ou événementiels.
- Angle : **croissance du chiffre d'affaires**, pas « résoudre un problème de
  rétention ». Le food truck veut que ses clients le suivent et reviennent.
- Arguments forts : prévenir tous ses clients de l'emplacement du jour en une
  notification, relancer en début de saison, plusieurs camions gérés depuis un
  seul compte.
- Page existante : `app/carte-fidelite/food-truck/page.tsx`
  (image `public/headerfoodtruck.png`). Une landing dédiée aux pubs doit
  reprendre la promesse et le visuel de la pub, avec le même CTA unique.

## Repères marketing

- Hero de la home : « Transformez chaque passage en client fidèle ».
- Mécanisme différenciant : un canal direct et gratuit vers l'écran verrouillé
  du client (l'équivalent d'un SMS, sans payer de SMS).
- Concurrents directs entre 25 et 40 € par mois (Fidoly, Waly, FidWallet,
  Stamp Me). Ne pas se battre sur le prix, mais sur l'accompagnement.
- Pas encore de pixel Meta ni d'API Conversions : à ajouter pour que les pubs
  puissent optimiser sur les démarrages d'essai.
