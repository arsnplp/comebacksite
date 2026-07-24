# Audit de l'article pilier — Carte de fidélité Apple Wallet / Google Wallet

Article : `/blog/carte-fidelite-apple-wallet-google-wallet`
Position GSC actuelle : 25, 214 impressions/mois, 0 clic.

## État avant renforcement

- **Longueur** : 774 mots (corps markdown).
- **Structure Hn** :
  - H1 (généré par le gabarit à partir du frontmatter) : « Carte de fidélité dans Apple Wallet et Google Wallet : comment ça marche »
  - H2 : Le Wallet, c'est quoi exactement ? / Côté client : un scan, et c'est dans la poche / Côté commerçant : un tampon en 2 secondes / Les notifications : le superpouvoir du pass Wallet / Apple Wallet ou Google Wallet, faut-il choisir ? / Ce qu'il faut retenir
  - Aucun H3.
- **Schemas présents** : `BlogPosting` uniquement (title, description, date, auteur, éditeur).
- **Maillage interne sortant** : 3 liens (`/fonctionnalites`, `/carte-fidelite-papier-ou-digitale`, app login). Aucun lien vers les pages secteurs.
- **Maillage interne entrant** : aucune page du site ne pointe vers cet article (vérifié par recherche du slug dans `app/` et `content/`).

## Mots-clés GSC : couverts vs manqués

| Requête GSC | Couverte ? | Où / commentaire |
| --- | --- | --- |
| carte de fidélité wallet | Oui | Titre, description, H2 « Le Wallet, c'est quoi exactement » |
| apple wallet carte de fidélité | Oui | Répété dans plusieurs paragraphes |
| google wallet carte de fidélité | Oui | Systématiquement associé à Apple Wallet dans le texte |
| mettre carte fidélité sur wallet | Partiel | Le parcours d'ajout est décrit (section « un scan, et c'est dans la poche ») mais aucun titre ni intertitre ne reprend la formulation « mettre... sur » |
| carte de fidélité iphone | Non | Aucune occurrence du mot « iPhone » dans le texte |
| carte de fidélité sur téléphone | Non | Le texte dit « smartphone » et « téléphone » de façon générique, jamais accolé au mot-clé exact « carte de fidélité sur téléphone » |

## Éléments SEO manquants (avant renforcement)

1. **FAQ absente** : aucune section FAQ, donc aucun schema `FAQPage`. C'est la lacune la plus coûteuse pour un article informationnel : les questions à réponse directe (rich snippets, People Also Ask) ne sont pas capturées.
2. **Pas de schema `HowTo`** : l'article décrit un parcours (« un scan, et c'est dans la poche ») mais sans le baliser comme une procédure, alors que la requête « mettre carte fidélité sur wallet » est une intention procédurale typique.
3. **Pas de comparatif structuré** Apple Wallet vs Google Wallet : la différence est évoquée en un paragraphe, sans tableau ni éléments distinctifs (mots-clés iOS/Android absents).
4. **Aucun maillage entrant** : les 8 pages secteurs et `/fonctionnalites` ne renvoient jamais vers cet article, alors qu'il est le contenu le plus légitime pour expliquer le fonctionnement technique du Wallet.
5. **Pas de cas d'usage par métier** : l'article reste générique, sans lien vers les pages `/carte-fidelite/*`, alors que c'est un point de bascule naturel vers la conversion.
6. **`readingMinutes` sous-évalué** (6 min pour 774 mots, cohérent, mais deviendra faux après extension si non recalculé).

## Conclusion de l'audit

L'article couvre bien le cœur sémantique (« Wallet », « Apple/Google Wallet ») mais rate les formulations orientées appareil (iPhone, téléphone) et les intentions procédurales (« mettre sur »). Il manque surtout de profondeur (774 mots pour une requête concurrentielle) et de signaux structurés (FAQ, HowTo). Voir `ARTICLE_PILIER_PLAN.md` pour le plan de renforcement appliqué.
