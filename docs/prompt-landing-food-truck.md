# Prompt : landing page food truck pour les Meta Ads

> À donner tel quel à Claude Code, ouvert sur le repo `arsnplp/comebacksite`.

---

## Ta mission

Construis une landing page dédiée aux food trucks qui arrivent depuis mes
Meta Ads. Elle doit être **la plus simple, la plus claire et la plus rapide
possible**, avec un seul objectif : que le visiteur clique sur le CTA et crée
son compte avec l'essai gratuit de 30 jours.

Avant de coder, lis `CLAUDE.md` à la racine du repo : il contient les règles
du site. Ce prompt les complète.

Tu travailles sur une branche `landing-food-truck`, tu fais un build propre,
tu vérifies la page en capture d'écran mobile (390 px) et desktop (1366 px),
puis tu pousses la branche sur GitHub. Tu ne déploies rien : c'est moi qui
mets en ligne.

---

## 1. Récap : où en est Comeback

- **Produit** : carte de fidélité digitale dans Apple Wallet et Google
  Wallet, ajoutée en un scan de QR code, sans application à télécharger. Le
  commerçant envoie des notifications sur l'écran verrouillé de ses clients,
  relance les inactifs automatiquement, et voit le CA généré dans un dashboard.
- **Ce qui a été décidé sur le site** :
  - plus d'offre gratuite affichée : tout passe par **30 jours d'essai sur le
    plan Business**, carte bancaire demandée, **0 € prélevé aujourd'hui**,
    résiliable en un clic avant la fin ;
  - **un seul CTA partout**, le composant `TrialCTA`, libellé « Créer ma carte
    gratuitement », qui mène à `https://app.getcomeback.fr/signup?plan=free`
    (création de compte, jamais la connexion) ;
  - **une seule carte de fidélité par commerce**, sur tous les plans ;
  - **installation offerte** : après l'inscription, j'appelle le commerçant
    pour configurer sa carte avec lui (10 minutes) ;
  - **aucune preuve inventée** : les faux témoignages, faux logos et chiffres
    non mesurés ont été retirés. On n'en remet pas ;
  - pas de tiret cadratin « — » dans les textes.
- **Prix** : toujours les lire dans `content/pricing.ts`, ne jamais les écrire
  en dur (une nouvelle grille est en préparation).
- **Fonctionnalités utiles pour un food truck** : notifications sur l'écran
  verrouillé, relances automatiques, carte qui remonte quand le client passe à
  moins de 100 m (iPhone uniquement), mini-jeux (roue, carte à gratter,
  coffres, joués avec les points), parrainage client, plusieurs camions gérés
  depuis un seul compte, affiche de comptoir A4 avec QR code générée par l'app.
- **Acquisition** : Meta Ads à petit budget ciblant les food trucks, plus du
  cold call dans des villes de 30 000 habitants ou moins. Les créas dont je
  dispose : une vidéo en motion design et un visuel fixe.

---

## 2. La stratégie marketing de la page

### Le visiteur
- Un gérant de food truck, sur son téléphone, entre deux services, qui vient
  de voir une pub Facebook ou Instagram. Il a 5 secondes d'attention.
- **Niveau de conscience** : il connaît la carte de fidélité papier (ou n'en a
  pas), il ne sait pas qu'une carte dans le Wallet existe. Il n'est pas en
  train de chercher un logiciel.
- **Marché sophistiqué** : plusieurs concurrents entre 25 et 40 € par mois.
  On ne se bat pas sur le prix, on se bat sur le résultat, la simplicité et
  l'accompagnement humain.

### Le problème DUR à adresser
- **L'angle est la croissance du chiffre d'affaires, pas la rétention.** Un
  food truck ne se dit pas « j'ai un problème de fidélisation ». Il se dit
  « je veux plus de monde au camion, plus souvent ».
- Sa vraie douleur : il change d'emplacement, ses clients ne savent pas où il
  est aujourd'hui, et il n'a **aucun moyen de les prévenir**. Les réseaux
  sociaux ne touchent qu'une partie de ses clients, de façon aléatoire.
- Ses moments forts : le jour de marché, la reprise de saison, un nouvel
  emplacement, un menu du jour.

### Recontextualisation et mécanisme
- Ce qu'il croit : « il me faut plus de nouveaux clients » ou « il me faut une
  carte de fidélité ».
- Le vrai sujet : ses clients ont aimé, mais **ils oublient** et ne savent pas
  où le trouver. Il lui faut un canal direct vers leur téléphone.
- **Le mécanisme** : sa carte de fidélité vit dans le téléphone de ses clients,
  et chaque notification arrive **sur leur écran verrouillé**, gratuitement et
  sans limite. C'est l'équivalent d'un SMS à tous ses clients, sans payer de SMS.

### L'offre (ce que le visiteur obtient en cliquant)
- Résultat : des clients qui le suivent d'un emplacement à l'autre et
  reviennent plus souvent.
- Expérience : sa carte à ses couleurs, active le jour même, et l'affiche de
  comptoir prête à imprimer.
- Certitude : 30 jours gratuits, 0 € aujourd'hui, résiliable en un clic, et
  l'installation faite avec lui au téléphone.

### Les objections à lever, dans cet ordre
1. « Mes clients ne vont pas télécharger une appli. » → Aucune appli : un scan,
   et la carte est dans leur Wallet.
2. « Je n'ai pas le temps / je ne suis pas à l'aise avec la technique. » →
   On la configure avec vous au téléphone, 10 minutes.
3. « Ça va me coûter. » → 0 € aujourd'hui, 30 jours pour juger avec vos vrais
   clients, résiliable en un clic.
4. « Pourquoi une carte bancaire ? » → Pour que votre carte ne s'arrête pas au
   31e jour si ça marche. Rien n'est prélevé pendant l'essai.
5. « Et si j'ai plusieurs camions ? » → Un seul compte pour tous vos camions.

### Ton
- Vouvoiement, phrases courtes, mots simples (niveau CE2), verbes d'action.
- On parle de **moments concrets**, pas de concepts : « Vendredi midi, vous
  êtes au marché de la place. Vos 200 clients le savent avant 11 h. »
- Toujours « vous » plutôt que « nous ».
- Aucune promesse chiffrée qu'on ne peut pas prouver (pas de « 2× plus de
  clients »).

---

## 3. Ce que dit la veille sur les landing pages qui convertissent

Ordres de grandeur issus d'études publiées par des éditeurs de CRO, à prendre
comme des repères et non comme des garanties.

**Message match avec la pub : le premier levier.**
- Le titre de la page reprend la promesse de la pub, idéalement mot pour mot.
  Le visuel principal reprend celui de la pub. Le libellé du CTA est le même.
- Un simple réalignement du titre sur la pub fait gagner couramment 20 à 40 %
  de conversions.
- Test des 5 secondes : en 5 secondes, le visiteur doit savoir ce que c'est,
  pour qui, et quoi faire.

**Une seule offre, un seul CTA, aucune fuite.**
- Les pages à offre unique convertissent beaucoup mieux que les pages à offres
  multiples (écart mesuré jusqu'à 266 %).
- **Pas de menu de navigation, pas de footer chargé, pas de liens sortants**
  hors mentions légales et confidentialité.
- Même libellé et même couleur de CTA partout sur la page. Le répéter après
  chaque section clé et en bas de page.
- Un libellé orienté bénéfice et à la première personne (« Créer ma carte
  gratuitement ») bat les libellés génériques (« S'inscrire », « Envoyer »).

**Mobile d'abord.**
- Sur Meta, plus de 80 % du trafic arrive sur mobile.
- CTA visible sans scroller sur un écran de 375 px, zones tactiles d'au moins
  44 px, barre CTA collante en bas de l'écran après le premier écran.

**Vitesse.**
- Le rebond augmente d'environ 32 % au-delà de 3 s de chargement et double à
  5 s. Les pages qui chargent en 2,5 s environ convertissent deux fois mieux.
- Objectifs : Lighthouse mobile ≥ 90, LCP < 2,5 s, CLS < 0,1, INP < 200 ms.

**Friction minimale.**
- Pas de formulaire sur la landing : le CTA mène directement à l'inscription
  de l'app.
- La réassurance (« 30 jours gratuits · 0 € aujourd'hui · Résiliable en
  1 clic ») se place **juste sous le bouton**, pas dans une FAQ.
- Dire ce qui se passe après le clic (« 2 minutes pour créer votre compte, puis
  on vous appelle pour installer votre carte »).

**Montrer le produit.**
- Une courte vidéo produit (30 à 90 s) ou un visuel du téléphone avec la carte
  et la notification améliore nettement la conversion.
- Montrer avant de demander : le visiteur doit voir la carte et la notification
  sur un écran verrouillé dès le premier écran.

**Preuve sociale.**
- Une preuve précise placée près du CTA augmente la conversion de 12 à 34 %.
  **On n'a pas encore de vrais témoignages** : n'en invente aucun. À la place,
  utilise des preuves vérifiables (fondateur joignable, installation faite avec
  vous, Apple Wallet et Google Wallet, données exportables, conçu en France)
  et prévois un emplacement vide prêt à recevoir de vrais témoignages plus tard.

**Repère de performance.**
- Une landing d'essai SaaS correcte convertit entre 4 et 10 % des visiteurs.
  Avec la carte bancaire demandée, le taux de démarrage est plus bas (2 à 3 %
  en moyenne) mais la conversion en payant est bien meilleure (environ 50 %).
  La page doit donc rassurer très clairement sur le « 0 € aujourd'hui ».

---

## 4. La page à construire, section par section

Route : **`/lp/food-truck`**. Elle est en `noindex, nofollow` pour ne pas
concurrencer la page SEO existante `/carte-fidelite/food-truck`, qui reste
telle quelle. Ajoute-la au `robots.txt` en `Disallow` et ne la mets pas dans
le sitemap.

Mise en page : une colonne sur mobile, deux colonnes sur desktop pour le hero
uniquement. Reprends les tokens de design existants (couleurs, fontes,
`Container`, `Badge`, `TrialCTA`), sans nouvelle dépendance.

### En-tête minimal
- Le logo seul, non cliquable ou cliquable vers la même page. Pas de menu, pas
  de « Se connecter ».

### Section 1 : Hero (tout doit tenir dans le premier écran mobile)
- **Titre (H1), 8 mots maximum, qui reprend la pub.** Propositions :
  - « Vos clients vous suivent, où que vous soyez. »
  - « Prévenez tous vos clients de votre emplacement du jour. »
  - Mets le titre dans une constante en haut du fichier pour que je puisse le
    caler mot pour mot sur ma pub.
- **Sous-titre, une ou deux phrases** : « Votre carte de fidélité dans leur
  téléphone. En un clic, ils reçoivent votre emplacement et votre menu du jour
  sur leur écran verrouillé. »
- **CTA** : `TrialCTA` (taille xl, pleine largeur sur mobile).
- **Réassurance** juste dessous : la constante `CTA_REASSURANCE` de
  `lib/links.ts`.
- **Visuel** : un téléphone avec la carte Comeback à l'écran et une
  notification visible sur l'écran verrouillé (par exemple « Le Camion Doré ·
  Aujourd'hui 11 h 30, place du Marché »). Construis-le en HTML et CSS
  (comme les mockups existants dans `components/mockups/`) plutôt qu'en grosse
  image, pour la vitesse. N'utilise pas `telheader.png` (on y voit d'autres
  cartes du Wallet). Nom du food truck fictif clairement générique.

### Section 2 : Comment ça marche, en 3 étapes
1. « On crée votre carte ensemble » : au téléphone, 10 minutes, à vos couleurs.
2. « Vos clients scannent au camion » : l'affiche avec QR code est prête à
   imprimer, la carte s'ajoute au Wallet, sans appli.
3. « Vous les prévenez en un clic » : emplacement du jour, menu, offre, ils
   reçoivent tout sur leur écran verrouillé.
- CTA répété sous les étapes.

### Section 3 : Les moments où ça rapporte (le cœur de la page)
Trois ou quatre cartes courtes, chacune un moment concret :
- **Le changement d'emplacement** : « Mardi au marché, jeudi devant la zone
  d'activité. Vos clients savent où vous trouver sans chercher sur Instagram. »
- **La reprise de saison** : « Le premier jour, tous vos habitués reçoivent un
  message. Vous ne repartez pas de zéro. »
- **Le client qui ne revient plus** : « Pas venu depuis trois semaines ? Une
  relance part toute seule, avec un petit avantage. »
- **Le service calme** : « Une heure creuse ? Un message, un dessert offert,
  et le camion se remplit. »
- Option : une ligne sur les mini-jeux et le parrainage, sans en faire une
  section à part.

### Section 4 : Ce que ça vous coûte (simple, pas un tableau)
- « 30 jours gratuits. 0 € aujourd'hui. Ensuite à partir de X € par mois,
  résiliable en un clic. » X est le prix du plan Pro lu dans
  `content/pricing.ts`.
- Une phrase sur la carte bancaire : « On vous demande une carte pour que votre
  programme continue sans coupure si ça marche. Rien n'est prélevé pendant
  30 jours. »
- « Plusieurs camions ? Un seul compte pour tous. »
- CTA.

### Section 5 : Le fondateur (preuve honnête)
- Courte citation d'Arsène Lecoq, fondateur : « Chaque food truck qui démarre,
  je l'installe moi-même au téléphone. Si vous avez une question, c'est moi qui
  réponds. » Avec une photo si une image `public/arsene.jpg` existe, sinon un
  simple monogramme.
- Les garanties en ligne de puces : Apple Wallet et Google Wallet · Aucune appli
  à télécharger · Données exportables · Conçu en France.
- Prévois un composant `ProofSlot` vide (non rendu tant qu'il n'y a pas de
  données) pour ajouter de vrais témoignages plus tard.

### Section 6 : FAQ courte (4 questions maximum, en accordéon)
- Mes clients doivent-ils télécharger une application ?
- Combien de temps pour démarrer ?
- Pourquoi une carte bancaire pour l'essai ?
- Je peux arrêter quand je veux ?

### Section 7 : CTA final
- Titre : « Votre prochain service peut déjà être plein de clients fidèles. »
  (ou une variante plus courte)
- `TrialCTA` + réassurance.

### Pied de page minimal
- © Comeback · Mentions légales · Confidentialité. Rien d'autre.

### Barre CTA collante mobile
- Réutilise ou adapte `StickyMobileCTA` : elle apparaît après le hero et se
  cache près du CTA final.

---

## 5. Exigences techniques

- **Lien du CTA** : `SIGNUP_URL` de `lib/links.ts`. Fais suivre les paramètres
  d'URL de la landing (`utm_source`, `utm_medium`, `utm_campaign`,
  `utm_content`, `fbclid`) vers ce lien, **sans jamais retirer `plan=free`**.
  Fais-le côté client dans un petit composant, en gardant `TrialCTA` comme
  base.
- **Tracking** : chaque clic CTA envoie `trackEvent("cta_click", { position })`
  avec une position différente par emplacement (`lp-ft-hero`, `lp-ft-steps`,
  etc.). Prépare l'emplacement du **pixel Meta** : un composant qui charge le
  pixel uniquement si `NEXT_PUBLIC_META_PIXEL_ID` est défini, envoie
  `PageView` au chargement et `Lead` au clic sur le CTA. Ne mets aucun ID en
  dur. L'événement de conversion réel (démarrage d'essai) sera envoyé par
  l'app plus tard, ce n'est pas à faire ici.
- **Performance** : page statique, aucune vidéo en lecture automatique dans le
  premier écran, images en `next/image` avec tailles déclarées, aucune
  bibliothèque d'animation ajoutée. Vise Lighthouse mobile ≥ 90.
- **Accessibilité** : contrastes suffisants, boutons de 44 px minimum, un seul
  H1, ordre de titres logique, textes alternatifs.
- **SEO** : `noindex, nofollow`, exclue du sitemap, `Disallow` dans
  `robots.txt`. Titre de page et description renseignés quand même (ils
  servent au partage).
- **Pas de tiret cadratin** dans les textes. Pas de chiffre inventé. Pas de
  nom de vrai client.

---

## 6. Liste de contrôle avant de pousser

- [ ] En 5 secondes sur mobile : on comprend ce que c'est, pour qui, et quoi
      faire.
- [ ] Le CTA est visible sans scroller sur un écran de 375 × 667.
- [ ] Il n'y a qu'un seul type de bouton sur toute la page, toujours le même
      libellé, et tous mènent à `signup?plan=free` avec les UTM conservés.
- [ ] La réassurance « 0 € aujourd'hui » est sous chaque CTA principal.
- [ ] Aucun lien de navigation qui fait sortir de la page, hors mentions
      légales et confidentialité.
- [ ] Aucune preuve, aucun chiffre et aucun témoignage inventé.
- [ ] Aucun tiret cadratin.
- [ ] Build OK, captures mobile et desktop vérifiées, Lighthouse mobile ≥ 90.
- [ ] Branche `landing-food-truck` poussée sur GitHub. Dis-moi l'URL à mettre
      dans mes pubs et ce que je dois faire pour la mise en ligne.

À la fin, donne-moi aussi **trois variantes de titre** à tester dans un
second temps, une seule variable à la fois (titre d'abord, puis visuel, puis
libellé du CTA).
