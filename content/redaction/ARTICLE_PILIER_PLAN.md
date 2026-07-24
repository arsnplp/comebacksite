# Plan de renforcement — Article pilier Wallet

Statut : **appliqué** (voir `content/blog/carte-fidelite-apple-wallet-google-wallet.mdx`).

## Nouvelle structure H2/H3 (cible 2000-2500 mots, livré : voir RAPPORT_CONTENU.md pour le compte final)

1. Intro (inchangée dans l'esprit, légèrement étendue)
2. ## Le Wallet, c'est quoi exactement ?
3. ## Côté client : mettre une carte de fidélité sur son Wallet, étape par étape
   - Reprend et détaille l'ancienne section « un scan, et c'est dans la poche »
   - Reformulée pour capter « mettre carte fidélité sur wallet » et « carte de fidélité sur téléphone »
   - ### Sur iPhone (Apple Wallet)
   - ### Sur Android (Google Wallet)
4. ## Comment intégrer une carte de fidélité à Apple Wallet et Google Wallet en 5 étapes (côté commerçant)
   - Liste numérotée, sert de support visuel au schema HowTo
5. ## Côté commerçant : un tampon en 2 secondes (conservée, légèrement enrichie)
6. ## Apple Wallet vs Google Wallet : le comparatif
   - Tableau markdown (rendu par le CSS `prose` déjà en place) : parc installé, déclenchement, mode hors-ligne, notifications, ce que ça change pour le commerçant
   - Capte « carte de fidélité iphone » et les différences techniques iOS/Android
7. ## Les notifications : le superpouvoir du pass Wallet (conservée)
8. ## Comeback selon votre métier
   - Paragraphe + liens vers les 8 pages `/carte-fidelite/*`
9. ## Questions fréquentes (nouvelle section, alimente le schema FAQPage)
10. ## Carte Wallet Comeback : ce qu'il faut retenir (conclusion, mot-clé dans l'intertitre, remplace l'ancien titre générique)

## FAQ retenue (5 questions, formulées sur les vraies requêtes)

1. Comment mettre une carte de fidélité sur mon iPhone ?
2. Comment ajouter une carte de fidélité sur Google Wallet ?
3. Une carte de fidélité Wallet fonctionne-t-elle sans connexion internet ?
4. Que se passe-t-il si mon client change de téléphone ?
5. Une carte de fidélité Wallet coûte-t-elle plus cher qu'une carte papier ou une application ?

## Schemas ajoutés

- `FAQPage` : généré automatiquement par le gabarit blog à partir d'un champ `faq` ajouté au frontmatter (voir `lib/blog.ts`), rendu aussi en accordéon visible (composant `Accordion`, cohérent avec les pages secteurs).
- `HowTo` : généré à partir d'un champ `howTo` ajouté au frontmatter (nom + étapes), reprenant la section « Comment intégrer... en 5 étapes ».
- `BlogPosting` : conservé tel quel.

## Visuels

Pas d'image ajoutée : le site n'utilise aucune photo ni capture d'écran (design system 100 % iconographie maison + composants, voir `components/ui/Icon.tsx`). Le comparatif Apple Wallet vs Google Wallet est rendu en tableau structuré plutôt qu'en image : plus accessible, indexable par Google, et cohérent avec le reste du site. Fabriquer une fausse capture d'écran du produit aurait été trompeur.

## Maillage interne

- **Sortant depuis l'article** : les 8 pages secteurs (`/carte-fidelite/*`), `/fonctionnalites`, `/carte-fidelite-papier-ou-digitale`, `/tarifs`, `https://app.getcomeback.fr/login`.
- **Entrant vers l'article** : lien ajouté dans les `seoBlocks` des 5 pages verticales retravaillées (Axe C) et dans `/fonctionnalites`, avec une ancre descriptive (« comment la carte s'ajoute à Apple Wallet et Google Wallet »).
