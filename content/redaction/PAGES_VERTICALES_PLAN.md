# Plan d'enrichissement — Pages verticales (Axe C)

Statut : **appliqué** dans `content/sectors/details.ts` et `app/carte-fidelite/[slug]/page.tsx`.

Pages ciblées (positions GSC fournies) : `/carte-fidelite/franchise` (8,3), `/carte-fidelite/boutique` (7,5), `/carte-fidelite/cafe-bar` (9,5), `/carte-fidelite/boulangerie` (35,5), `/carte-fidelite/coiffeur` (48,8).

## Constat commun avant enrichissement

Les 5 pages étaient entre 920 et 1033 mots, avec une structure déjà solide (problèmes du quotidien, récompenses, étapes, témoignage, 2 blocs SEO, FAQ à 4 questions) mais deux angles manquaient systématiquement : un paragraphe frontal sur l'enjeu de fidélisation propre au métier (formulé comme tel, avec le vocabulaire métier), et une 5e question FAQ. Le maillage vers l'article pilier Wallet et vers les autres articles de blog était également absent.

## Traitement appliqué, par page

Pour chacune des 5 pages :

1. **Nouveau bloc SEO** ajouté en tête de `seoBlocks` : « Les enjeux de fidélisation propres à [métier] », qui nomme explicitement l'enjeu métier (rotation forte en coiffure, fréquence quotidienne en boulangerie, rituel matinal en café-bar, panier moyen plus élevé en boutique, uniformité multi-points en franchise), avec 2 à 3 cas d'usage concrets et une métrique marquée `[À CHIFFRER]` quand aucune source publique fiable n'était disponible (aucune statistique n'a été inventée).
2. **5e question FAQ** ajoutée à chaque page, ciblée sur une objection métier non couverte par les 4 questions existantes.
3. **Maillage sortant** ajouté dans le dernier paragraphe du bloc « Pour aller plus loin » : lien vers l'article pilier `/carte-fidelite-apple-wallet-google-wallet` et vers 2 articles de blog pertinents (existants ou nouveaux, Axe B), en plus des liens déjà présents (`/guide-fidelisation`, `/carte-fidelite-papier-ou-digitale`, `/calculateur`).
4. **Meta title / meta description** : vérifiées, déjà dans la fourchette 50-60 / 140-155 caractères pour les 5 pages (aucune retouche nécessaire, confirmé par mesure de caractères).

## Schemas

- `BreadcrumbList` : déjà généré automatiquement sur ces pages via le composant partagé `Breadcrumbs` (utilisé par `PageHero`) — rien à ajouter.
- `FAQPage` : déjà généré depuis `sector.faq` — enrichi mécaniquement par le passage à 5 questions.
- `Service` : **ajouté** dans `app/carte-fidelite/[slug]/page.tsx`, généré pour les 8 pages secteurs (pas seulement les 5 ciblées, par cohérence), avec nom, description, zone desservie (France) et renvoi vers le fournisseur (Organization Comeback).

## Visuels

Comme pour l'article pilier, aucune image n'a été ajoutée : le design system du site n'utilise que des icônes vectorielles maison, jamais de photo ni de capture d'écran. Ajouter des visuels génériques aurait dégradé la cohérence visuelle sans bénéfice SEO réel (les icônes existantes ont déjà un attribut `aria-hidden`, elles ne portent pas de poids SEO par alt texte de toute façon).

## Maillage entrant vers ces pages

Déjà assuré par : le hub `/secteurs`, le footer (colonne Secteurs, sur toutes les pages du site), et désormais l'article pilier Wallet (nouvelle section « Comeback selon votre métier ») et le nouvel article Axe B `/blog/carte-fidelite-multi-etablissements` (vers `/carte-fidelite/franchise`).
