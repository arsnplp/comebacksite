import type { IconName } from "@/components/ui/Icon";
import type { FaqItem } from "@/content/faq";

/**
 * Contenu complet des pages sectorielles /secteurs/[slug].
 * Chaque entrée alimente : metadata, H1, sections et FAQ (avec JSON-LD).
 * Les slugs doivent rester alignés avec content/sectors/index.ts.
 */
export type SectorDetail = {
  slug: string;
  label: string;
  icon: IconName;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1Highlight: string;
  intro: string;
  /** Les 3 problèmes du quotidien auxquels la page répond */
  pains: { title: string; text: string }[];
  /** Exemples de mécaniques de récompense adaptées au métier */
  rewards: { mechanic: string; note: string }[];
  /** Les 3 étapes de lancement, formulées pour le métier */
  steps: { title: string; text: string }[];
  /** Blocs de contenu SEO longs (H2 + paragraphes) */
  seoBlocks: { title: string; paragraphs: string[] }[];
  faq: FaqItem[];
};

export const sectorDetails: SectorDetail[] = [
  /* ---------------------------------------------------------------- */
  /* Restaurant                                                        */
  /* ---------------------------------------------------------------- */
  {
    slug: "restaurant",
    label: "Restaurant",
    icon: "utensils",
    metaTitle: "Carte de fidélité restaurant : faites revenir vos clients à table",
    metaDescription:
      "Créez la carte de fidélité digitale de votre restaurant en 10 minutes. Vos clients l'ajoutent à leur téléphone en 1 scan, reviennent plus souvent et remplissent vos services creux. Essai gratuit 30 jours.",
    h1: "La carte de fidélité qui remplit votre restaurant, midi et soir",
    h1Highlight: "remplit votre restaurant",
    intro:
      "Un client satisfait qui ne revient jamais, c'est la banalité du métier : il a aimé, puis il a oublié. Comeback met votre restaurant dans la poche de vos clients, les fait revenir plus vite et transforme les tables vides des services creux en chiffre d'affaires.",
    pains: [
      {
        title: "Des clients ravis qui ne reviennent jamais",
        text: "Ils ont complimenté le plat, laissé un pourboire, promis de revenir. Sans rappel au bon moment, la concurrence d'à côté récupère leur prochain déjeuner.",
      },
      {
        title: "Des services creux impossibles à remplir",
        text: "Le mardi soir et les débuts de semaine plombent votre moyenne. Une promo flash envoyée à vos fidèles remplit des tables qui seraient restées vides.",
      },
      {
        title: "Aucun fichier client, donc aucun levier",
        text: "Vous connaissez les visages, pas les noms. Sans base client, impossible de prévenir, relancer ou inviter qui que ce soit.",
      },
    ],
    rewards: [
      { mechanic: "Le 10e repas offert", note: "Le grand classique, efficace sur la clientèle du midi." },
      { mechanic: "Un dessert offert au 5e passage", note: "Palier rapide : la récompense arrive vite, l'habitude s'installe." },
      { mechanic: "L'apéritif offert dès le 3e dîner", note: "Oriente les fidèles vers les services du soir, plus margés." },
      { mechanic: "Une offre anniversaire automatique", note: "Le client revient accompagné : couverts en plus, sans effort." },
    ],
    steps: [
      {
        title: "Créez votre carte en 10 minutes",
        text: "Choisissez la récompense qui colle à votre carte et vos marges. Ajoutez votre logo et vos couleurs, c'est prêt.",
      },
      {
        title: "Posez le QR code où vos clients paient",
        text: "Comptoir, porte-addition ou table : le client scanne pendant l'encaissement, la carte est dans son Wallet avant de sortir.",
      },
      {
        title: "Laissez les relances travailler",
        text: "Client pas revenu depuis 3 semaines ? Il reçoit un rappel discret sur son téléphone. Vous, vous restez en cuisine.",
      },
    ],
    seoBlocks: [
      {
        title: "Pourquoi un programme de fidélité change l'économie d'un restaurant",
        paragraphs: [
          "Acquérir un nouveau client coûte cher : visibilité sur les plateformes, commissions de livraison, publicité locale. Fidéliser un client existant coûte une fraction de ce montant, et un habitué dépense davantage à chaque visite : il connaît la carte, ose le plat du jour, ajoute le café. En augmentant simplement la fréquence de visite de vos clients existants, vous augmentez votre chiffre d'affaires sans dépenser un euro de plus en publicité.",
          "C'est encore plus vrai en restauration, où la décision se joue à l'habitude et à la proximité. Le client qui a votre carte dans son téléphone pense à vous au moment où il se demande où déjeuner. La notification qui lui rappelle qu'il ne lui manque que deux tampons arrive exactement dans ce moment de décision.",
        ],
      },
      {
        title: "Carte papier, application ou carte Wallet : que choisir pour un restaurant ?",
        paragraphs: [
          "La carte en carton se perd, s'oublie dans une autre veste et se fraude avec un tampon acheté en ligne. L'application dédiée, elle, demande un téléchargement et un compte : la grande majorité des clients abandonne avant la fin. La carte Wallet combine le meilleur des deux : aucune installation, un scan de 10 secondes, et elle vit dans Apple Wallet ou Google Wallet, déjà présents sur tous les téléphones.",
          "Pour un restaurant, la différence se mesure au taux d'adoption : proposer la carte pendant l'encaissement prend quelques secondes et fonctionne même en plein service. Notre comparatif détaillé entre carte papier et carte digitale chiffre précisément l'écart.",
        ],
      },
    ],
    faq: [
      {
        question: "Comment valider un tampon en plein service ?",
        answer:
          "En 2 secondes, pendant l'encaissement : le client présente sa carte Wallet, vous scannez son code avec votre téléphone et le tampon s'ajoute instantanément. Pas de matériel dédié, pas de file qui s'allonge, et vos serveurs n'ont rien à retenir.",
      },
      {
        question: "Est-ce que ça fonctionne aussi pour la vente à emporter et la livraison ?",
        answer:
          "Oui pour la vente à emporter : le client scanne au comptoir comme en salle. Pour la livraison via des plateformes, le contact direct n'existe pas, et c'est justement l'intérêt du programme : faire revenir ces clients en direct, sans commission.",
      },
      {
        question: "Quelle récompense choisir pour un restaurant ?",
        answer:
          "La règle simple : un palier atteignable en 4 à 8 semaines pour un habitué. Pour une brasserie du midi, le 10e repas offert fonctionne très bien. Pour un restaurant du soir, un palier plus court (dessert ou apéritif au 5e passage) installe l'habitude plus vite. Vous pouvez ajuster la mécanique à tout moment.",
      },
      {
        question: "J'ai deux établissements, puis-je faire un programme commun ?",
        answer:
          "Oui, avec le plan Business : les cartes y sont illimitées, vous créez donc un programme commun valable dans vos établissements. C'est la formule des groupes et des franchises.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Salon de coiffure                                                 */
  /* ---------------------------------------------------------------- */
  {
    slug: "coiffeur",
    label: "Salon de coiffure",
    icon: "scissors",
    metaTitle: "Carte de fidélité salon de coiffure : des rendez-vous plus rapprochés",
    metaDescription:
      "La carte de fidélité digitale pour coiffeurs : vos clientes reviennent plus vite entre deux rendez-vous grâce aux relances automatiques. Installation en 10 minutes, essai gratuit 30 jours sans CB.",
    h1: "La carte de fidélité qui raccourcit le temps entre deux rendez-vous",
    h1Highlight: "raccourcit le temps",
    intro:
      "Le vrai concurrent d'un salon de coiffure, ce n'est pas le salon d'en face : c'est le temps. Chaque semaine gagnée entre deux rendez-vous, multipliée par toute votre clientèle, représente des milliers d'euros par an. Comeback relance vos clientes au bon moment, automatiquement.",
    pains: [
      {
        title: "Des visites qui s'espacent sans que personne ne s'en rende compte",
        text: "Une cliente qui passait toutes les 6 semaines glisse à 8, puis 10. Personne ne le voit, et l'agenda se vide doucement. La relance automatique la fait revenir avant.",
      },
      {
        title: "Des creux d'agenda en début de semaine",
        text: "Mardi matin vide, samedi saturé. Une promo flash réservée à vos fidèles déplace des rendez-vous vers les heures creuses.",
      },
      {
        title: "Une clientèle qui zappe à la première promo concurrente",
        text: "Sans lien direct entre deux visites, la porte est ouverte aux offres des autres. Une carte dans le téléphone entretient l'attachement au salon.",
      },
    ],
    rewards: [
      { mechanic: "-20 % au 5e rendez-vous", note: "Palier rapide, parfait pour ancrer la régularité." },
      { mechanic: "Un soin profond offert au 8e rendez-vous", note: "Fait découvrir une prestation à forte marge." },
      { mechanic: "Un produit offert au 10e passage", note: "Écoule le stock et crée l'habitude d'acheter des produits au salon." },
      { mechanic: "-15 % le mois de l'anniversaire", note: "Envoyée automatiquement, sans y penser." },
    ],
    steps: [
      {
        title: "Créez votre carte entre deux clientes",
        text: "10 minutes suffisent : votre récompense, vos couleurs, votre logo. Aucune compétence technique.",
      },
      {
        title: "Posez le QR code à la caisse et au bac",
        text: "La cliente scanne pendant que vous encaissez ou pendant la pose. Sa carte est dans son téléphone avant le brushing.",
      },
      {
        title: "Les relances entretiennent l'agenda",
        text: "Cliente pas revenue depuis 6 semaines ? Elle reçoit une notification discrète. Vous coiffez, Comeback relance.",
      },
    ],
    seoBlocks: [
      {
        title: "Fidéliser en coiffure : la fréquence vaut plus que le panier",
        paragraphs: [
          "En coiffure, le panier moyen varie peu d'une visite à l'autre : le levier de chiffre d'affaires, c'est la fréquence. Une cliente qui revient toutes les 6 semaines au lieu de 8 représente près de 30 % de visites en plus sur l'année, sans le moindre rendez-vous supplémentaire à trouver ailleurs. C'est exactement ce que travaille un programme de fidélité bien réglé : raccourcir, même légèrement, le délai entre deux visites.",
          "La mécanique des tampons y contribue en rendant la prochaine récompense visible : à 3 tampons du soin offert, on ne laisse pas passer 10 semaines. Les relances automatiques font le reste, en rappelant votre salon au moment où la cliente commence à y penser.",
        ],
      },
      {
        title: "Pourquoi une carte Wallet plutôt qu'une carte cartonnée au salon",
        paragraphs: [
          "La carte cartonnée dort dans un portefeuille, quand elle n'est pas perdue. La carte Wallet vit dans le téléphone, se met à jour à chaque tampon et peut envoyer des notifications : rappel de rendez-vous à prendre, récompense qui approche, offre anniversaire. Aucune application à installer, aucun compte à créer : vos clientes scannent une fois et c'est réglé.",
          "Côté salon, vous gagnez un fichier client qui se construit tout seul : prénom, fréquence, prestations. De quoi savoir enfin qui sont vos clientes régulières, lesquelles décrochent, et ce que la fidélité rapporte réellement en euros.",
        ],
      },
    ],
    faq: [
      {
        question: "Au bout de combien de temps une cliente inactive est-elle relancée ?",
        answer:
          "C'est vous qui choisissez le délai, en fonction de votre rythme de clientèle : 5 semaines pour une clientèle coloration, 8 pour une clientèle coupe. La relance part automatiquement, une seule fois, avec un message que vous pouvez personnaliser.",
      },
      {
        question: "Est-ce adapté à un barbier ou à un salon mixte ?",
        answer:
          "Oui. La mécanique s'adapte à la fréquence de chaque activité : les visites barbier étant plus rapprochées, un palier de 10 passages fonctionne bien, quand un salon femme privilégiera un palier plus court. Vous pouvez aussi jouer sur des récompenses différentes selon la prestation.",
      },
      {
        question: "Les ventes de produits comptent-elles dans les tampons ?",
        answer:
          "C'est vous qui décidez : vous pouvez tamponner uniquement les prestations, ou aussi les achats de produits pour encourager la vente au salon. Beaucoup de salons offrent d'ailleurs un produit en récompense, ce qui crée l'habitude d'en acheter.",
      },
      {
        question: "Mes clientes plus âgées vont-elles y arriver ?",
        answer:
          "Si elles savent prendre une photo, elles savent ajouter la carte : on scanne le QR code avec l'appareil photo, on appuie sur « Ajouter », c'est terminé. Et pour les rares clientes sans smartphone, rien ne vous empêche de garder quelques cartes papier en parallèle.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Boulangerie                                                       */
  /* ---------------------------------------------------------------- */
  {
    slug: "boulangerie",
    label: "Boulangerie",
    icon: "bread",
    metaTitle: "Carte de fidélité boulangerie : transformez les passants en habitués",
    metaDescription:
      "Carte de fidélité digitale pour boulangerie-pâtisserie : vos clients la gardent dans leur téléphone et reviennent chaque matin. Tampon en 2 secondes, même en plein rush. Essai gratuit 30 jours.",
    h1: "La carte de fidélité qui transforme les passants en habitués du matin",
    h1Highlight: "habitués du matin",
    intro:
      "Entre le supermarché, le point chaud de la gare et la boulangerie du bout de la rue, vos clients ont l'embarras du choix chaque matin. Comeback leur donne une raison concrète de pousser votre porte plutôt qu'une autre, et un rappel quand ils commencent à l'oublier.",
    pains: [
      {
        title: "Des dizaines de passants, peu d'habitués",
        text: "Beaucoup de clients n'achètent qu'une baguette, une fois de temps en temps. Un palier de récompense rapide les fait revenir chez vous plutôt qu'ailleurs.",
      },
      {
        title: "Pas le temps de gérer quoi que ce soit en plein rush",
        text: "À 8 h, chaque seconde compte. Le tampon Comeback se valide en 2 secondes pendant l'encaissement, sans ralentir la file.",
      },
      {
        title: "Les cartes en carton qui traînent et se perdent",
        text: "Distribuées par centaines, tamponnées de travers, perdues aussitôt. La carte digitale, elle, reste dans le téléphone et se met à jour toute seule.",
      },
    ],
    rewards: [
      { mechanic: "La 10e baguette offerte", note: "L'incontournable : palier court, retour quasi quotidien." },
      { mechanic: "10 viennoiseries = 1 offerte", note: "Valorise le petit plaisir du week-end." },
      { mechanic: "Une formule déjeuner offerte au 8e passage", note: "Fidélise la clientèle du midi, au panier plus élevé." },
      { mechanic: "Une pâtisserie offerte pour l'anniversaire", note: "Le client revient et repart rarement avec une seule pâtisserie." },
    ],
    steps: [
      {
        title: "Créez votre carte après la fermeture",
        text: "10 minutes un après-midi calme : récompense, logo, couleurs. Votre carte est prête pour le rush du lendemain.",
      },
      {
        title: "Posez le QR code à côté de la caisse",
        text: "Les clients scannent en attendant leur monnaie. À ce rythme, les premières dizaines d'inscrits arrivent dans la semaine.",
      },
      {
        title: "Les habitudes s'installent toutes seules",
        text: "Tampon à chaque passage, notification quand la récompense approche, relance si le client déserte. Vous, vous boulangez.",
      },
    ],
    seoBlocks: [
      {
        title: "La fidélité en boulangerie : de petits paniers, un énorme enjeu",
        paragraphs: [
          "Un panier de boulangerie paraît modeste, mais la fréquence change tout : un client qui passe 4 fois par semaine à 3 euros pèse plus de 600 euros par an. Le vrai sujet n'est donc pas le panier moyen, c'est le nombre de matins où il choisit votre boulangerie plutôt qu'une autre. Quelques passages de plus par mois et par client, multipliés par des centaines de clients, représentent des milliers d'euros de chiffre d'affaires annuel.",
          "C'est aussi le secteur où la carte de fidélité papier montre le plus vite ses limites : distribuée en masse, elle finit froissée ou perdue, et personne ne sait combien circulent ni ce qu'elles rapportent. La version digitale donne enfin des chiffres : combien d'inscrits, combien de visites, combien d'euros générés.",
        ],
      },
      {
        title: "Un programme pensé pour tenir la cadence du comptoir",
        paragraphs: [
          "Une boulangerie encaisse vite, et un programme de fidélité n'a le droit de rien ralentir. C'est pourquoi tout se joue en 2 secondes : le client montre sa carte, vous scannez, le tampon est ajouté. Pas de nom à chercher dans une liste, pas de carte à tamponner à l'encre, pas de calcul de points.",
          "Et quand la journée s'annonce calme ou qu'il reste des invendus à écouler en fin d'après-midi, une promo flash envoyée à vos fidèles ramène du monde avant la fermeture. C'est votre meilleur canal : des clients qui vous connaissent déjà, à 200 mètres de votre boutique.",
        ],
      },
    ],
    faq: [
      {
        question: "Le tampon ne va-t-il pas ralentir la file le matin ?",
        answer:
          "Non : la validation prend 2 secondes, pendant le rendu de monnaie ou le paiement carte. Beaucoup de boulangeries ne proposent d'ailleurs le scan d'inscription qu'aux heures calmes, et se contentent de tamponner les clients déjà inscrits pendant le rush.",
      },
      {
        question: "Mes clients achètent pour quelques euros : quelle récompense choisir ?",
        answer:
          "Restez sur un palier court et une récompense simple : la 10e baguette ou la 10e viennoiserie offerte. Le coût réel est faible (le coût matière d'une baguette), mais la promesse est très lisible pour le client, et c'est la lisibilité qui fait revenir.",
      },
      {
        question: "Est-ce que ça vaut le coup si j'ai déjà beaucoup de passage ?",
        answer:
          "C'est justement là que le levier est le plus fort : chaque point de fréquence gagné sur un flux important se compte en milliers d'euros. Le programme transforme un passage anonyme en client identifié que vous pouvez faire revenir, notamment sur les créneaux plus calmes de l'après-midi.",
      },
      {
        question: "Puis-je réserver certaines offres à mes clients fidèles ?",
        answer:
          "Oui, c'est le principe des promos flash : elles ne partent qu'aux clients inscrits à votre carte. Une fournée spéciale, des invendus en fin de journée, une nouveauté à faire goûter : vos fidèles sont prévenus en premier, et ils le savent.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Boutique & commerce                                               */
  /* ---------------------------------------------------------------- */
  {
    slug: "boutique",
    label: "Boutique & commerce",
    icon: "bag",
    metaTitle: "Programme de fidélité boutique : augmentez la fréquence d'achat",
    metaDescription:
      "Carte de fidélité digitale pour boutiques et commerces de détail : faites revenir vos clients sans casser vos prix, construisez votre fichier client et mesurez le CA généré. Essai 30 jours gratuit.",
    h1: "La carte de fidélité qui fait racheter chez vous, pas chez les autres",
    h1Highlight: "racheter chez vous",
    intro:
      "En boutique, le plus dur n'est pas de vendre : c'est de revoir le client. Entre deux achats, il est exposé à toutes les vitrines et à tout internet. Comeback maintient le lien, sans casser vos prix ni dépendre des réseaux sociaux.",
    pains: [
      {
        title: "Des clients qui achètent une fois et disparaissent",
        text: "Une belle vente, un client content, puis plus rien. Sans rappel, le prochain achat se fera ailleurs, souvent en ligne.",
      },
      {
        title: "Les promos qui rognent la marge sans fidéliser",
        text: "Les soldes attirent des chasseurs de prix, pas des habitués. Une récompense au 5e achat récompense la fidélité plutôt que l'opportunisme.",
      },
      {
        title: "Un compte Instagram qui ne touche presque personne",
        text: "L'algorithme montre vos posts à une fraction de vos abonnés. La notification Wallet, elle, arrive sur l'écran de verrouillage de tous vos clients inscrits.",
      },
    ],
    rewards: [
      { mechanic: "-10 % au 5e achat", note: "Simple, lisible, et la remise ne s'applique qu'aux fidèles." },
      { mechanic: "Un cadeau au 8e passage", note: "Un accessoire ou une petite pièce : fort effet perçu, coût maîtrisé." },
      { mechanic: "Vente privée réservée aux fidèles", note: "Via promo flash : vos clients inscrits sont invités en premier." },
      { mechanic: "-15 % le mois de l'anniversaire", note: "Un rendez-vous annuel qui déclenche presque toujours une visite." },
    ],
    steps: [
      {
        title: "Créez votre carte à votre image",
        text: "Logo, couleurs, récompense : la carte ressemble à votre boutique, pas à un coupon générique.",
      },
      {
        title: "Proposez le scan à l'encaissement",
        text: "Le moment idéal : le client vient d'acheter, il est content, il scanne. 10 secondes, sans créer de compte.",
      },
      {
        title: "Faites-les revenir à volonté",
        text: "Nouvelle collection, vente privée, réassort d'un best-seller : prévenez vos fidèles en 2 clics et regardez la boutique se remplir.",
      },
    ],
    seoBlocks: [
      {
        title: "Fidéliser en boutique sans brader : le rôle du programme",
        paragraphs: [
          "La tentation classique pour faire revenir un client, c'est la remise permanente. Elle fonctionne, mais elle détruit la marge et habitue la clientèle à ne plus acheter au prix normal. Un programme de fidélité inverse la logique : l'avantage se mérite au fil des passages, il récompense un comportement (revenir) plutôt qu'un statut (passer par là un jour de solde).",
          "Le second bénéfice est moins visible mais plus précieux : le fichier client. Chaque scan enrichit une base qui vous appartient, avec prénom et historique de visites. Le jour où vous ouvrez un deuxième point de vente, lancez un site ou organisez un événement, ce fichier vaut de l'or, et il est exportable en un clic.",
        ],
      },
      {
        title: "Le canal direct que ni l'algorithme ni la boîte spam ne filtrent",
        paragraphs: [
          "Les boutiques indépendantes dépendent trop souvent d'Instagram pour communiquer, avec une portée qui fond d'année en année. L'email, lui, finit en promotion ou en spam. La notification Wallet est différente : elle est liée à une carte que le client a volontairement ajoutée, elle arrive sur l'écran de verrouillage, et elle n'est en concurrence avec rien d'autre à cet instant.",
          "Utilisée avec parcimonie (une vente privée, une nouveauté, une offre anniversaire), elle obtient des taux de retour dont les autres canaux ne peuvent que rêver, sans coût d'envoi et sans agence.",
        ],
      },
    ],
    faq: [
      {
        question: "Mes clients n'achètent que quelques fois par an : le programme a-t-il un sens ?",
        answer:
          "Oui, en adaptant le palier : pour une fréquence faible, visez 4 ou 5 achats plutôt que 10, et complétez avec l'offre anniversaire et les ventes privées, qui créent des occasions de visite entre deux achats naturels. L'enjeu est de rester présent dans le téléphone du client toute l'année.",
      },
      {
        question: "Puis-je faire des tampons en fonction du montant dépensé ?",
        answer:
          "La mécanique standard est au passage : un achat, un tampon, ce qui est le plus simple à comprendre pour le client. Vous pouvez fixer un minimum d'achat pour valider le tampon si votre panier varie beaucoup.",
      },
      {
        question: "Est-ce compatible avec mon logiciel de caisse ?",
        answer:
          "Comeback fonctionne à côté de votre caisse, quelle qu'elle soit : aucune intégration n'est nécessaire. Le scan se fait avec un téléphone, la caisse continue de faire son travail.",
      },
      {
        question: "Que se passe-t-il si un client rend un article ?",
        answer:
          "Vous gardez la main : un tampon peut être retiré aussi simplement qu'il a été ajouté, directement depuis votre espace. En pratique, les retours sont rares et la plupart des boutiques n'y touchent pas.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Institut de beauté                                                */
  /* ---------------------------------------------------------------- */
  {
    slug: "institut-beaute",
    label: "Institut de beauté",
    icon: "spark",
    metaTitle: "Carte de fidélité institut de beauté : fidélisez entre deux soins",
    metaDescription:
      "Carte de fidélité digitale pour instituts de beauté et spas : relances automatiques entre deux soins, offre anniversaire, cures valorisées. Vos clientes reviennent sans relance manuelle. Essai 30 jours.",
    h1: "La carte de fidélité qui ramène vos clientes avant qu'elles n'aillent voir ailleurs",
    h1Highlight: "avant qu'elles n'aillent voir ailleurs",
    intro:
      "Entre deux soins, il se passe des semaines. Assez pour qu'une offre concurrente, un institut plus proche du nouveau travail ou un simple oubli vous fasse perdre une cliente régulière. Comeback entretient le lien pendant ces semaines-là, automatiquement.",
    pains: [
      {
        title: "Des semaines de silence entre deux rendez-vous",
        text: "Personne ne relance vos clientes entre deux épilations ou deux soins visage. La relance automatique le fait, avec le bon timing et sans paraître insistante.",
      },
      {
        title: "Des cures commencées, jamais terminées",
        text: "La cliente fait deux séances sur six puis abandonne. La carte à tampons rend la progression visible et donne envie d'aller au bout.",
      },
      {
        title: "Une concurrence agressive sur les prix",
        text: "Plutôt que de vous aligner sur les instituts low cost, récompensez la régularité : vos clientes fidèles obtiennent des avantages que les chasseurs de promo n'auront jamais.",
      },
    ],
    rewards: [
      { mechanic: "Un soin express offert au 10e rendez-vous", note: "Fait découvrir une prestation complémentaire." },
      { mechanic: "-20 % sur la 6e séance d'une cure", note: "Encourage à terminer les cures entamées." },
      { mechanic: "Un produit cabine offert au 8e passage", note: "Valorise vos produits et prépare la vente au comptoir." },
      { mechanic: "Une attention le mois de l'anniversaire", note: "Les clientes reviennent souvent accompagnées." },
    ],
    steps: [
      {
        title: "Créez une carte aussi soignée que votre institut",
        text: "Vos couleurs, votre logo, votre récompense : la carte prolonge l'expérience de votre cabine dans leur téléphone.",
      },
      {
        title: "Faites scanner à l'accueil ou en cabine",
        text: "Après le soin, au moment du règlement : 10 secondes, pas d'application, pas de formulaire.",
      },
      {
        title: "Le programme entretient la relation",
        text: "Rappel quand la récompense approche, relance en cas d'absence prolongée, offre anniversaire : tout part automatiquement.",
      },
    ],
    seoBlocks: [
      {
        title: "La régularité, premier levier de chiffre d'affaires d'un institut",
        paragraphs: [
          "Le chiffre d'affaires d'un institut repose sur un petit nombre de clientes régulières : celles qui viennent chaque mois pèsent plusieurs fois plus lourd que les clientes occasionnelles. Or cette régularité est fragile : un déménagement, un changement d'emploi du temps, une période chargée, et le rythme se casse sans bruit. Le rôle du programme de fidélité est précisément de protéger cette régularité, en rendant chaque visite un peu plus gratifiante que la précédente.",
          "La carte à tampons digitale ajoute un élément que le papier n'a jamais eu : la visibilité. La cliente voit sa progression dans son téléphone, reçoit un signe quand la récompense approche, et un rappel discret si elle laisse passer trop de temps. Rien d'intrusif : juste ce qu'il faut pour rester l'institut de référence.",
        ],
      },
      {
        title: "Un outil qui respecte l'image de votre institut",
        paragraphs: [
          "Dans les métiers de la beauté, l'image compte autant que le geste : difficile d'imaginer tendre une carte en carton mal découpée dans un institut premium. La carte Wallet est à l'inverse un objet soigné, personnalisé à vos couleurs, qui vit dans le même téléphone que les cartes d'embarquement et les billets de spectacle.",
          "Et parce que vos clientes vous confient des informations personnelles, l'hébergement des données en Europe et la conformité RGPD ne sont pas des options : elles sont intégrées dès la conception. Vos données ne sont jamais revendues et restent exportables à tout moment.",
        ],
      },
    ],
    faq: [
      {
        question: "Les relances ne risquent-elles pas de paraître insistantes ?",
        answer:
          "Non : la relance d'inactivité ne part qu'une fois, après un délai que vous choisissez, avec un message à votre ton. C'est l'équivalent digital du « On ne vous a pas vue depuis un moment » dit avec le sourire, pas une campagne de harcèlement.",
      },
      {
        question: "Puis-je différencier les soins dans le programme ?",
        answer:
          "Oui : vous décidez ce qui donne droit à un tampon (toutes les prestations, ou seulement certaines) et la récompense peut mettre en avant une prestation que vous voulez développer, comme un soin visage ou un modelage.",
      },
      {
        question: "Comment le programme aide-t-il à vendre mes produits ?",
        answer:
          "Deux mécaniques fonctionnent bien : offrir un produit en récompense de fidélité, ce qui le fait découvrir, et annoncer les nouveautés produits en promo flash à vos clientes inscrites. Dans les deux cas, la vente au comptoir suit naturellement.",
      },
      {
        question: "Je travaille seule : est-ce que ça ne va pas me rajouter du travail ?",
        answer:
          "C'est l'inverse : le programme automatise ce que vous n'avez pas le temps de faire (relancer, souhaiter les anniversaires, prévenir des offres). Votre seul geste au quotidien, c'est le scan de 2 secondes à l'encaissement.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Café & bar                                                        */
  /* ---------------------------------------------------------------- */
  {
    slug: "cafe-bar",
    label: "Café & bar",
    icon: "coffee",
    metaTitle: "Carte de fidélité café et bar : le 10e café offert, sans carton",
    metaDescription:
      "La carte de fidélité digitale pour cafés, coffee shops et bars : le 10e café offert dans Apple Wallet et Google Wallet, sans carte en carton perdue ni tampon fraudé. Essai gratuit 30 jours sans CB.",
    h1: "Le 10e café offert, enfin sans carte en carton",
    h1Highlight: "sans carte en carton",
    intro:
      "Le 10e café offert est probablement le programme de fidélité le plus connu au monde. Son seul défaut : le carton, perdu, oublié, tamponné de travers ou fraudé. Comeback garde la mécanique que tout le monde comprend et la met dans le téléphone de vos clients.",
    pains: [
      {
        title: "Les cartes en carton perdues ou oubliées",
        text: "La moitié des cartes distribuées ne reviennent jamais. Dans le Wallet, la carte est toujours là, avec le compte de tampons à jour.",
      },
      {
        title: "Les tampons frauduleux",
        text: "Un tampon similaire s'achète en ligne pour quelques euros. Le tampon digital, lui, ne se falsifie pas : c'est vous qui validez chaque passage.",
      },
      {
        title: "Des après-midi calmes et des tables vides",
        text: "Votre rush du matin ne remplit pas l'après-midi. Une promo flash envoyée aux fidèles (boisson à moitié prix de 15 h à 17 h) réveille les heures creuses.",
      },
    ],
    rewards: [
      { mechanic: "10 cafés = 1 offert", note: "La mécanique universelle, comprise en une seconde." },
      { mechanic: "Une pâtisserie offerte au 8e passage", note: "Pousse le duo café + douceur qui fait grimper le panier." },
      { mechanic: "Happy hour réservée aux fidèles", note: "Via promo flash : le bar se remplit avant l'heure de pointe." },
      { mechanic: "Un cocktail offert pour l'anniversaire", note: "Personne ne vient boire son cocktail d'anniversaire seul." },
    ],
    steps: [
      {
        title: "Créez votre carte pendant la plonge",
        text: "10 minutes, votre logo, votre récompense. Le classique 10 + 1 se configure en deux clics.",
      },
      {
        title: "Collez le QR code sur le comptoir",
        text: "À côté de la caisse ou du terminal de paiement : le client scanne en attendant son café, la carte est dans son Wallet.",
      },
      {
        title: "Tamponnez en 2 secondes",
        text: "Un scan pendant l'encaissement, même en plein rush. Le reste (rappels, relances, anniversaires) part tout seul.",
      },
    ],
    seoBlocks: [
      {
        title: "Pourquoi le 10e café offert fonctionne toujours aussi bien",
        paragraphs: [
          "La force du 10 + 1, c'est sa lisibilité : le client sait exactement ce qu'il doit faire et ce qu'il va gagner. Sur un produit à forte marge comme le café, offrir la 11e tasse coûte quelques dizaines de centimes pour dix passages encaissés : c'est l'un des meilleurs rapports coût/effet du commerce de proximité.",
          "Le passage au digital ne change pas la mécanique, il enlève les frictions : plus de carte oubliée (elle est dans le téléphone), plus de fraude (le tampon est validé par vous), et surtout un compteur visible qui crée l'envie de compléter la série. À 8 tampons sur 10, votre café gagne systématiquement l'arbitrage face au concurrent d'en face.",
        ],
      },
      {
        title: "Du coffee shop au bar de quartier : la même mécanique, d'autres réglages",
        paragraphs: [
          "Un coffee shop joue la fréquence quotidienne : palier court, récompense simple, tampon éclair au comptoir. Un bar joue plutôt la soirée : palier plus long, récompense plus festive, et des promos flash pour animer les débuts de semaine. Dans les deux cas, le fichier client construit au fil des scans devient l'outil d'animation le plus direct dont vous disposez.",
          "C'est aussi une protection : si vous déménagez, changez d'horaires ou lancez une nouvelle carte, vous pouvez prévenir tous vos habitués en une notification. Essayez de faire ça avec des cartes en carton.",
        ],
      },
    ],
    faq: [
      {
        question: "Comment éviter qu'un client se fasse tamponner deux fois pour un seul café ?",
        answer:
          "C'est vous (ou votre équipe) qui validez chaque tampon par un scan : sans validation de votre côté, rien ne s'ajoute. Contrairement au carton et à son tampon encreur, il n'y a physiquement aucun moyen de tricher.",
      },
      {
        question: "Puis-je reprendre les cartes en carton déjà en circulation ?",
        answer:
          "Oui, faites simple : quand un client présente une carte papier entamée, créditez-lui le même nombre de tampons sur sa carte digitale au moment de l'inscription. La transition se fait en douceur, sans léser personne.",
      },
      {
        question: "Ça marche aussi pour un bar qui ne sert pas de café ?",
        answer:
          "Bien sûr : la mécanique s'applique à n'importe quelle consommation. Palier au 8e ou 10e passage, récompense à votre image (une pinte, un cocktail signature, une planche à partager) : c'est vous qui définissez la règle du jeu.",
      },
      {
        question: "Et si mes clients viennent en groupe ?",
        answer:
          "Chaque client a sa propre carte : dans une tournée de quatre cafés, chacun peut faire tamponner la sienne. C'est d'ailleurs un accélérateur d'inscriptions : le premier qui scanne montre aux autres comment faire.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Food truck                                                        */
  /* ---------------------------------------------------------------- */
  {
    slug: "food-truck",
    label: "Food truck",
    icon: "truck",
    metaTitle: "Carte de fidélité food truck : vos clients vous suivent partout",
    metaDescription:
      "Carte de fidélité digitale pour food trucks : vos clients savent où vous êtes, reviennent plus souvent et sont prévenus de vos emplacements en une notification. Essai gratuit 30 jours sans CB.",
    h1: "La carte de fidélité qui fait suivre votre food truck à la trace",
    h1Highlight: "à la trace",
    intro:
      "Un food truck a un problème que les restaurants n'ont pas : votre adresse change. Vos meilleurs clients peuvent vous perdre du jour au lendemain, simplement parce qu'ils ne savent pas où vous êtes mardi prochain. Comeback les garde attachés à votre cuisine, où que vous soyez garé.",
    pains: [
      {
        title: "Des clients qui vous perdent de vue",
        text: "Un emplacement qui change, un marché annulé, et un habitué disparaît. Une notification suffit à lui dire où vous trouver cette semaine.",
      },
      {
        title: "Une clientèle à reconstruire à chaque emplacement",
        text: "La carte suit le client, pas l'adresse : vos fidèles du mardi midi en zone d'activité restent vos fidèles le samedi au marché.",
      },
      {
        title: "La météo qui décide de votre journée",
        text: "Un mardi pluvieux s'annonce ? Une promo flash le matin même à vos fidèles du secteur peut sauver le service.",
      },
    ],
    rewards: [
      { mechanic: "Le 10e menu offert", note: "Palier classique, adapté au rythme hebdomadaire des habitués." },
      { mechanic: "Une boisson offerte au 5e passage", note: "Palier court pour installer l'habitude dès le premier mois." },
      { mechanic: "Dessert offert le jour de l'anniversaire", note: "Une attention qui fait parler autour du truck." },
      { mechanic: "Annonce des emplacements en avant-première", note: "Via promo flash : vos fidèles savent avant tout le monde." },
    ],
    steps: [
      {
        title: "Créez votre carte entre deux services",
        text: "10 minutes sur votre téléphone : votre logo, votre récompense, vos couleurs. Rien à installer dans le camion.",
      },
      {
        title: "Affichez le QR code sur le passe-plat",
        text: "Les clients scannent en attendant leur commande, le moment parfait : ils ont le téléphone en main et quelques minutes devant eux.",
      },
      {
        title: "Emmenez vos fidèles partout",
        text: "Nouvel emplacement, changement d'horaire, plat du jour : prévenez tous vos clients en une notification, où qu'ils soient.",
      },
    ],
    seoBlocks: [
      {
        title: "Fidéliser sans adresse fixe : le défi particulier du food truck",
        paragraphs: [
          "Le commerce ambulant repose sur un paradoxe : votre force, c'est d'aller chercher les clients là où ils sont, mais chaque déplacement met votre clientèle à zéro si personne ne sait où vous retrouver. Les réseaux sociaux ne résolvent qu'à moitié le problème : l'algorithme décide qui voit vos publications, et vos clients les plus fidèles ne sont pas forcément vos abonnés les plus actifs.",
          "La carte de fidélité digitale attaque le problème à la racine : chaque client qui scanne devient joignable directement, par une notification qui arrive sur son écran de verrouillage. Votre emplacement du jour, vos horaires, votre plat de la semaine : l'information part une fois et touche tout le monde.",
        ],
      },
      {
        title: "La file d'attente, votre meilleur moment pour recruter des fidèles",
        paragraphs: [
          "Un food truck a un atout que peu de commerces possèdent : un temps d'attente pendant lequel le client a son téléphone en main. C'est le moment idéal pour proposer le scan : le QR code affiché sur le camion, une phrase (« Scannez, le 10e menu est offert »), et l'inscription se fait pendant que la commande chauffe.",
          "À ce rythme, un truck qui sert 80 clients par service construit un fichier de plusieurs centaines de fidèles en quelques semaines. Un capital qui vous suit dans chaque nouveau spot, et que ni la pluie ni un changement d'emplacement ne peuvent effacer.",
        ],
      },
    ],
    faq: [
      {
        question: "Comment mes clients savent-ils où je serai cette semaine ?",
        answer:
          "Envoyez une promo flash en début de semaine avec vos emplacements : elle arrive en notification sur le téléphone de tous vos clients inscrits. Ceux qui vous cherchaient savent immédiatement où vous trouver.",
      },
      {
        question: "Le scan fonctionne-t-il sans wifi, sur un marché ou une zone industrielle ?",
        answer:
          "Oui : la validation passe par votre téléphone et sa connexion mobile, comme votre terminal de paiement. Et la carte du client, une fois ajoutée à son Wallet, reste visible même sans réseau.",
      },
      {
        question: "J'ai deux camions : puis-je faire une seule carte ?",
        answer:
          "Oui, avec le plan Business : une carte commune valable aux deux camions, et un suivi complet de vos clients pour savoir qui revient et à quelle fréquence.",
      },
      {
        question: "Mes clients changent selon les emplacements : le programme reste-t-il pertinent ?",
        answer:
          "Chaque emplacement a ses habitués : les bureaux du mardi, le marché du samedi. Le programme fidélise chaque micro-clientèle sur son créneau, et vous donne pour la première fois une vision d'ensemble : qui revient, où, à quelle fréquence.",
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Franchise & réseaux                                               */
  /* ---------------------------------------------------------------- */
  {
    slug: "franchise",
    label: "Franchise & réseaux",
    icon: "building",
    metaTitle: "Programme de fidélité franchise : une carte commune, des stats par site",
    metaDescription:
      "Programme de fidélité multi-établissements pour franchises et réseaux : une carte commune à l'enseigne, des statistiques par point de vente et un déploiement accompagné. Demandez une démo.",
    h1: "Un programme de fidélité commun. Des chiffres par établissement.",
    h1Highlight: "par établissement",
    intro:
      "Déployer la fidélité à l'échelle d'un réseau pose deux exigences contradictoires : une expérience client identique partout, et un pilotage précis site par site. Comeback réconcilie les deux, avec un déploiement qui ne demande ni matériel ni intégration caisse.",
    pains: [
      {
        title: "Une expérience client incohérente entre les sites",
        text: "Chaque établissement bricole sa carte en carton dans son coin. Avec une carte commune à l'enseigne, le client vit la même expérience partout.",
      },
      {
        title: "Aucune visibilité consolidée sur la fidélité",
        text: "Impossible de comparer les sites ou de mesurer l'effet réseau. Le dashboard consolide tout, avec le détail par point de vente.",
      },
      {
        title: "Des animations nationales lourdes à orchestrer",
        text: "Une opération d'enseigne part en une notification vers tous les clients du réseau, ou seulement ceux d'une région. Sans imprimer un seul support.",
      },
    ],
    rewards: [
      { mechanic: "Mécanique commune à l'enseigne", note: "Le même palier et la même récompense partout : lisible pour le client, simple à animer." },
      { mechanic: "Carte valable dans tout le réseau", note: "Le client de passage tamponne dans n'importe quel établissement." },
      { mechanic: "Offres locales ciblées", note: "Chaque site peut animer sa zone via des promos flash locales." },
      { mechanic: "Opérations nationales en un envoi", note: "Anniversaire de l'enseigne, nouveauté au menu : tout le réseau prévenu en 2 clics." },
    ],
    steps: [
      {
        title: "Cadrez le programme avec notre équipe",
        text: "Mécanique, charte, règles réseau : notre accompagnement dédié transforme vos choix d'enseigne en programme prêt à déployer.",
      },
      {
        title: "Déployez site par site, sans matériel",
        text: "Chaque établissement reçoit son QR code et ses accès. Aucune intégration caisse, aucune formation lourde : un site est opérationnel en une journée.",
      },
      {
        title: "Pilotez au niveau réseau et par site",
        text: "Inscriptions, visites, CA fidélité : les chiffres remontent en continu, consolidés et par établissement. Les comparaisons parlent d'elles-mêmes.",
      },
    ],
    seoBlocks: [
      {
        title: "Pourquoi centraliser la fidélité à l'échelle du réseau",
        paragraphs: [
          "Tant que chaque établissement gère sa propre carte, l'enseigne ne capitalise rien : le client fidèle d'un site est un inconnu dans le site voisin, les données restent éparpillées, et aucune animation nationale n'est possible. Un programme centralisé transforme cette collection d'initiatives locales en actif d'enseigne : une base client unifiée, une expérience homogène et un levier d'animation qui touche tout le réseau en un envoi.",
          "Pour les franchisés, le bénéfice est immédiat : un outil clé en main, une mécanique qui a fait ses preuves ailleurs dans le réseau, et des chiffres pour se comparer. Pour la tête de réseau, c'est une donnée stratégique nouvelle : la fidélité mesurée site par site, en euros.",
        ],
      },
      {
        title: "Un déploiement pensé pour le terrain",
        paragraphs: [
          "Les projets de fidélité en réseau échouent rarement sur la technique : ils échouent sur l'adoption terrain. C'est pourquoi Comeback ne demande ni matériel, ni intégration caisse, ni formation longue : un QR code sur le comptoir et un téléphone suffisent. Un établissement qui rejoint le programme est opérationnel le jour même.",
          "Le support dédié du plan Business couvre le cadrage de la mécanique, le déploiement progressif et l'animation dans la durée : les établissements pilotes d'abord, la généralisation ensuite, avec des points d'étape sur les chiffres réels.",
        ],
      },
    ],
    faq: [
      {
        question: "Un client peut-il cumuler des tampons dans plusieurs établissements ?",
        answer:
          "Oui, c'est le principe de la carte d'enseigne : le client tamponne dans n'importe quel point de vente du réseau, et sa progression le suit. Les statistiques attribuent chaque visite au bon établissement.",
      },
      {
        question: "Chaque franchisé peut-il envoyer ses propres offres ?",
        answer:
          "Selon les règles que vous définissez : vous pouvez réserver les envois à la tête de réseau, les déléguer aux sites pour leur zone, ou combiner les deux (opérations nationales + animations locales). L'outil s'adapte à votre gouvernance.",
      },
      {
        question: "Comment se passe la facturation pour un réseau ?",
        answer:
          "Le plan Business est à 99 € HT par mois, avec clients, cartes et notifications illimités : un seul abonnement couvre tout le réseau. Pour une organisation particulière (facturation répartie par site, très grand réseau), contactez-nous.",
      },
      {
        question: "Combien de temps faut-il pour équiper un réseau complet ?",
        answer:
          "Le déploiement technique d'un site se fait en une journée. Pour un réseau, le rythme dépend surtout de votre plan d'animation : la plupart des enseignes lancent quelques sites pilotes sur un mois, puis généralisent sur un trimestre avec notre accompagnement.",
      },
    ],
  },
];

/** Accès direct à un secteur par slug. */
export function getSectorDetail(slug: string): SectorDetail | undefined {
  return sectorDetails.find((s) => s.slug === slug);
}
