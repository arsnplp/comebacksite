# Guide de rédaction du blog Comeback

Ce guide s'applique à tout article publié dans `content/blog/`. Il est écrit pour un rédacteur automatisé : chaque règle est obligatoire.

## Contexte produit

Comeback est un SaaS français de carte de fidélité digitale (Apple Wallet et Google Wallet) pour commerçants indépendants : le client scanne un QR code au comptoir, ajoute la carte à son téléphone, cumule des tampons et reçoit des notifications. Plans : Starter 19 €, Pro 49 € (recommandé), Business 99 € HT/mois, 3 mois d'essai gratuit sans carte bancaire. Le blog s'adresse aux commerçants (restaurateurs, coiffeurs, boulangers, instituts de beauté, cafés, boutiques, food trucks, franchises) qui cherchent à faire revenir leurs clients et augmenter leur chiffre d'affaires.

## Format du fichier

Un fichier par article : `content/blog/<slug>.mdx`. Le slug devient l'URL `/blog/<slug>`.

- Slug : kebab-case, sans accent, 3 à 6 mots, contient le mot-clé principal. Exemple : `fideliser-clients-coiffeur`.
- Frontmatter obligatoire, exactement ces champs :

```yaml
---
title: "Titre de 50 à 65 caractères contenant le mot-clé principal"
description: "Méta-description de 140 à 155 caractères, avec le mot-clé, orientée bénéfice, qui donne envie de cliquer."
date: "YYYY-MM-DD"
category: "Une catégorie"
readingMinutes: 7
---
```

- `category` : une seule valeur parmi : Fidélisation, Marketing local, Chiffre d'affaires, Restauration, Coiffure et beauté, Commerce de détail.
- `readingMinutes` : nombre de mots divisé par 220, arrondi.
- Corps : markdown pur uniquement (titres `##` et `###`, listes, gras, liens). JAMAIS de composant React, JAMAIS de HTML brut, et éviter les caractères `<`, `>` et `{` dans le texte (MDX les interprète).

## Règles de style (non négociables)

- Français, tutoiement interdit : on vouvoie le commerçant.
- AUCUN emoji, nulle part.
- AUCUN tiret cadratin « — » ni demi-cadratin « – » : remplacer par une virgule, deux-points ou un point.
- Ton concret et direct, sans jargon marketing creux. Des exemples chiffrés réalistes (paniers moyens, fréquences de visite) plutôt que des généralités.
- Connecteurs logiques : viser environ 30 % des phrases reliées par un connecteur, en VARIANT (d'abord, ensuite, enfin, en effet, par exemple, autrement dit, en revanche, c'est pourquoi, résultat, de plus, concrètement). Jamais deux fois le même connecteur dans un paragraphe.
- Impératif : chaque article contient plusieurs phrases à l'impératif qui s'adressent au commerçant (« Calculez... », « Posez... », « Comparez... », « Commencez par... »), en particulier dans les passages de conseil et la conclusion.
- Pas de promesses absolues ni de chiffres inventés présentés comme des études. Les ordres de grandeur sont introduits par « en général », « souvent », « à titre d'exemple ».

## Structure de l'article

- 800 à 1 200 mots : la densité prime sur la longueur.
- Introduction de 3 à 5 phrases : le problème du commerçant, formulé avec empathie, puis la promesse de l'article.
- 4 à 7 sections `##` avec des intertitres descriptifs (qui contiennent des variantes du mot-clé quand c'est naturel). Sous-sections `###` si utile.
- Au moins une liste à puces ou une liste numérotée.
- Une section finale `##` de conclusion courte qui résume et ouvre vers Comeback SANS être un argumentaire commercial : une ou deux phrases de transition suffisent (un bloc de CTA est déjà ajouté automatiquement sous l'article).
- L'intertitre de conclusion est UNIQUE et contient le mot-clé ou une variante (ex. « Fidéliser en boulangerie : ce qu'il faut retenir »). JAMAIS de titre générique type « En résumé », « Conclusion », « Pour finir » : des intertitres identiques d'un article à l'autre brouillent l'indexation.

## SEO

- Le mot-clé principal apparaît : dans le title, le slug, la description, le premier paragraphe, et au moins un intertitre `##`.
- Utiliser des variantes sémantiques naturelles du mot-clé (pas de bourrage).
- Maillage interne obligatoire, 4 à 6 liens répartis dans le corps du texte, en markdown relatif :
  - au moins 1 page secteur pertinente : `/carte-fidelite/restaurant`, `/carte-fidelite/coiffeur`, `/carte-fidelite/boulangerie`, `/carte-fidelite/institut-beaute`, `/carte-fidelite/cafe-bar`, `/carte-fidelite/boutique`, `/carte-fidelite/food-truck`, `/carte-fidelite/franchise`
  - au moins 1 lien vers `/calculateur` ou `/tarifs` ou `/fonctionnalites`
  - au moins 1 autre article du blog : `/blog/<slug existant>` (lister les fichiers de `content/blog/` pour choisir le plus pertinent)
  - les ancres de liens sont descriptives (jamais « cliquez ici »)
- Ne jamais réécrire un sujet déjà traité par une page du site (les pages secteurs, le comparatif `/carte-fidelite-papier-ou-digitale`, le guide `/guide-fidelisation`) : l'article doit viser un mot-clé distinct et renvoyer vers ces pages.

## Vérification avant publication

1. Relire le frontmatter : longueurs du title et de la description, date du jour, catégorie valide.
2. Vérifier qu'aucun « — », « – » ni emoji ne s'est glissé dans le texte.
3. `npm install` puis `npm run build` doivent passer sans erreur ni warning MDX. Si le build échoue, corriger avant de pousser ; ne jamais pousser un build cassé.
