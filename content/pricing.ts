/**
 * Plans tarifaires (grille confirmée juillet 2026).
 *
 * Le claim « rentabilisé dès 2 clients fidélisés par mois » se base sur :
 * plan Pro 49 €/mois ÷ panier moyen ~25 € ≈ 2 visites supplémentaires
 * par mois. Au plan Starter (19 €), une seule visite suffit.
 */
export type Plan = {
  name: string;
  price: number | null; // null = sur devis
  period: string;
  /** Reformulation concrète du prix, ex. "moins d'1 € par jour" */
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
    equivalent: "Moins d'1 € par jour",
    description: "Pour démarrer votre programme de fidélité.",
    features: [
      "150 clients enregistrés",
      "10 000 notifications par mois",
      "1 carte de fidélité",
      "Ciblage basique : tous les clients",
      "Statistiques sur les 7 derniers jours",
      "Support par email",
    ],
    missing: [
      "Parrainage avec bonus",
      "Notifications automatiques",
      "Export CSV",
    ],
    recommended: false,
    cta: "Commencer l'essai gratuit",
  },
  {
    name: "Pro",
    price: 49,
    period: "/mois",
    equivalent: "Rentabilisé dès 2 clients fidélisés par mois",
    description: "Pour relancer, cibler et automatiser vos campagnes.",
    features: [
      "Clients illimités",
      "50 000 notifications par mois",
      "3 cartes de fidélité",
      "Ciblage avancé : par rang, clients inactifs",
      "Parrainage avec bonus",
      "Notifications automatiques récurrentes",
      "Export CSV de votre fichier client",
      "Statistiques sur tout l'historique",
      "Support email prioritaire",
    ],
    recommended: true,
    cta: "Commencer l'essai gratuit",
  },
  {
    name: "Business",
    price: 99,
    period: "/mois",
    equivalent: "Tout illimité, aucun plafond",
    description: "Pour les enseignes en croissance.",
    features: [
      "Clients illimités",
      "Notifications illimitées",
      "Cartes de fidélité illimitées",
      "Ciblage avancé : par rang, clients inactifs",
      "Parrainage avec bonus",
      "Notifications automatiques récurrentes",
      "Export CSV de votre fichier client",
      "Statistiques complètes sur 2 ans",
      "Support dédié, réponse sous 4 h",
    ],
    recommended: false,
    cta: "Commencer l'essai gratuit",
  },
];
