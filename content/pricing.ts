/**
 * Plans tarifaires (grille mise à jour le 6 août 2026 : baisse Pro/Business).
 *
 * Le claim « rentabilisé dès 1 client fidélisé par mois » se base sur :
 * plan Pro 9,99 €/mois ÷ panier moyen ~25 € < 1 visite supplémentaire
 * par mois. Le plan Starter est gratuit, sans coût à amortir.
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

/** "9,99" plutôt que "9.99" — affichage des prix à la française. */
export function formatPlanPrice(price: number): string {
  return price.toLocaleString("fr-FR", { maximumFractionDigits: 2 });
}

export const plans: Plan[] = [
  {
    name: "Starter",
    price: 0,
    period: "/mois",
    equivalent: "Gratuit, sans engagement",
    description: "Idéal pour démarrer.",
    features: [
      "30 clients maximum",
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
    cta: "Essayer gratuitement",
  },
  {
    name: "Pro",
    price: 9.99,
    period: "/mois",
    equivalent: "Sans engagement",
    description: "Le choix des commerçants actifs.",
    features: [
      "100 clients maximum",
      "10 000 notifications par mois",
      "2 cartes de fidélité",
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
    price: 39.99,
    period: "/mois",
    equivalent: "Sans engagement",
    description: "Pour les enseignes en croissance.",
    features: [
      "Clients illimités",
      "Notifications illimitées",
      "2 cartes de fidélité",
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
