/**
 * Plans tarifaires (grille mise à jour le 15 juillet 2026).
 *
 * Le claim « rentabilisé dès 2 clients fidélisés par mois » se base sur :
 * plan Pro 49 €/mois ÷ panier moyen ~25 € ≈ 2 visites supplémentaires
 * par mois. Au plan Starter (19 €), une seule visite suffit.
 */
export type Plan = {
  name: string;
  price: number | null; // null = sur devis
  period: string;
  /** Ligne courte affichée sous le prix, ex. "Sans engagement" */
  equivalent: string;
  description: string;
  features: string[];
  /** Fonctionnalités non incluses, affichées grisées sur les cartes */
  missing?: string[];
  recommended: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: 19,
    period: "/mois",
    equivalent: "Sans engagement",
    description: "Idéal pour démarrer.",
    features: [
      "50 clients maximum",
      "1 000 notifications par mois",
      "1 carte de fidélité",
      "Ciblage basique : tous les clients",
      "Statistiques sur les 7 derniers jours",
      "Support par email",
    ],
    missing: [
      "Notifications automatiques",
      "Export CSV",
    ],
    recommended: false,
    cta: "Choisir Starter",
  },
  {
    name: "Pro",
    price: 49,
    period: "/mois",
    equivalent: "Sans engagement",
    description: "Le choix des commerçants actifs.",
    features: [
      "Clients illimités",
      "50 000 notifications par mois",
      "3 cartes de fidélité",
      "Ciblage avancé : par rang client, inactifs",
      "Notifications automatiques récurrentes",
      "Statistiques sur tout l'historique",
      "Export CSV de votre fichier client",
      "Support email prioritaire",
    ],
    recommended: true,
    cta: "Choisir Pro",
  },
  {
    name: "Business",
    price: 99,
    period: "/mois",
    equivalent: "Sans engagement",
    description: "Pour les enseignes en croissance.",
    features: [
      "Clients illimités",
      "Notifications illimitées",
      "Cartes de fidélité illimitées",
      "Ciblage avancé : par rang client, inactifs",
      "Notifications automatiques récurrentes",
      "Statistiques sur tout l'historique",
      "Export CSV de votre fichier client",
      "Support dédié, réponse sous 4 h",
    ],
    recommended: false,
    cta: "Choisir Business",
  },
];
