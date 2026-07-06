/**
 * Témoignages clients.
 * ⚠️ [PLACEHOLDER] — TOUS les témoignages ci-dessous sont fictifs et à
 * remplacer par de vrais témoignages (avec accord écrit du commerçant).
 * Le champ `placeholder: true` sert de garde-fou : le retirer une fois
 * le témoignage vérifié.
 */
export type Testimonial = {
  /** La métrique mise en avant, ex. "+18 %" */
  metric: string;
  /** Ce que mesure la métrique, ex. "de panier moyen en 3 mois" */
  metricLabel: string;
  quote: string;
  name: string;
  business: string;
  city: string;
  sectorSlug: string;
  placeholder: boolean;
};

export const testimonials: Testimonial[] = [
  {
    metric: "+18 %",
    metricLabel: "de panier moyen en 3 mois",
    quote:
      "On a lancé la carte un mardi matin. Le soir même, 40 clients l'avaient dans leur téléphone. Maintenant, ils prennent le sandwich ET le dessert pour avoir leur tampon.",
    name: "Camille R.",
    business: "Boulangerie du Marché",
    city: "Lyon",
    sectorSlug: "boulangerie",
    placeholder: true,
  },
  {
    metric: "+2,3",
    metricLabel: "visites/mois par client fidélisé",
    quote:
      "Mes habituées reviennent plus vite entre deux couleurs. La relance automatique fait le travail à ma place. Moi, je coiffe.",
    name: "Sonia M.",
    business: "Salon L'Atelier",
    city: "Bordeaux",
    sectorSlug: "coiffeur",
    placeholder: true,
  },
  {
    metric: "412",
    metricLabel: "clients inscrits le premier mois",
    quote:
      "Je pensais que personne ne scannerait. En un mois : 412 inscrits. Le QR code est posé à côté de la caisse, c'est tout.",
    name: "Karim B.",
    business: "Restaurant Le Comptoir",
    city: "Lille",
    sectorSlug: "restaurant",
    placeholder: true,
  },
  {
    metric: "x2",
    metricLabel: "de fréquence sur les habitués",
    quote:
      "Le 10e café offert existait déjà en carton, mais tout le monde perdait sa carte. Depuis qu'elle est dans le téléphone, les habitués passent deux fois plus souvent.",
    name: "Théo L.",
    business: "Café Prosper",
    city: "Nantes",
    sectorSlug: "cafe-bar",
    placeholder: true,
  },
  {
    metric: "31 %",
    metricLabel: "des clientes reviennent sous 30 jours",
    quote:
      "L'offre anniversaire est redoutable : les clientes reviennent avec une amie. Et je n'ai rien à gérer, tout part tout seul.",
    name: "Nadia F.",
    business: "Institut Éclat",
    city: "Toulouse",
    sectorSlug: "institut-beaute",
    placeholder: true,
  },
  {
    metric: "+640 €",
    metricLabel: "de CA fidélité mesuré le 2e mois",
    quote:
      "Ce que j'aime, c'est le chiffre en euros sur le dashboard. Je sais exactement ce que la carte me rapporte, et ça couvre l'abonnement dès la première semaine.",
    name: "Claire D.",
    business: "Maison Lila",
    city: "Rennes",
    sectorSlug: "boutique",
    placeholder: true,
  },
];
