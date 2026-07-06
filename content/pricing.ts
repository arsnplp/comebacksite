/**
 * Plans tarifaires.
 * ⚠️ [PLACEHOLDER] — montants à confirmer avant mise en ligne.
 *
 * Le claim « rentabilisé dès 2 clients fidélisés par mois » se base sur :
 * plan Essentiel 29 €/mois ÷ panier moyen ~25 € ≈ 1,2 panier → arrondi
 * prudent à 2 visites supplémentaires par mois. Ajuster si les prix changent.
 */
export type Plan = {
  name: string;
  price: number | null; // null = sur devis
  period: string;
  /** Reformulation concrète du prix, ex. "moins d'1 € par jour" */
  equivalent: string;
  description: string;
  features: string[];
  recommended: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Essentiel",
    price: 29,
    period: "/mois",
    equivalent: "Moins d'1 € par jour",
    description: "Pour lancer votre carte et faire revenir vos clients.",
    features: [
      "Carte de fidélité Apple Wallet & Google Wallet",
      "Clients et tampons illimités",
      "QR code comptoir prêt à imprimer",
      "Notification automatique de récompense",
      "Dashboard : visites, clients, CA généré",
    ],
    recommended: false,
    cta: "Commencer l'essai gratuit",
  },
  {
    name: "Pro",
    price: 59,
    period: "/mois",
    equivalent: "Moins qu'un café par jour",
    description: "Pour relancer, animer et remplir les jours creux.",
    features: [
      "Tout le plan Essentiel",
      "Relance automatique des clients inactifs",
      "Promos flash envoyées en 2 clics",
      "Offre anniversaire automatique",
      "Export de votre fichier client (Excel)",
      "Support prioritaire 7j/7",
    ],
    recommended: true,
    cta: "Commencer l'essai gratuit",
  },
  {
    name: "Réseau",
    price: null,
    period: "",
    equivalent: "Tarif dégressif par établissement",
    description: "Pour les franchises et multi-établissements.",
    features: [
      "Tout le plan Pro",
      "Programme commun multi-établissements",
      "Statistiques par point de vente",
      "Accompagnement dédié au déploiement",
    ],
    recommended: false,
    cta: "Parler à un conseiller",
  },
];
