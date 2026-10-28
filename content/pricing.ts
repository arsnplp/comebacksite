/**
 * Plans tarifaires, alignés sur l'app (lib/plan-limits.ts et lib/trial.ts).
 *
 * Plus de plan gratuit affiché : tout commence par l'essai de 30 jours au
 * niveau Business (carte demandée, 0 € prélevé). Avant la fin, le
 * commerçant garde Business, bascule sur Pro ou résilie en un clic.
 *
 * Le claim « rentabilisé dès 2 clients fidélisés par mois » se base sur :
 * plan Business 29,99 €/mois ÷ panier moyen ~20 € = 1,5 visite.
 */
/**
 * Périodes de facturation, alignées sur l'app (lib/pricing.ts côté app) :
 * mensuel au prix plein, trimestriel environ -11 %, annuel environ -20 %.
 * Les montants sont ceux de Stripe, au centime : le prix affiché est le prix
 * facturé.
 */
export type BillingCycle = "monthly" | "quarterly" | "annual";

export const BILLING_CYCLES: BillingCycle[] = ["monthly", "quarterly", "annual"];

export const CYCLE_MONTHS: Record<BillingCycle, number> = { monthly: 1, quarterly: 3, annual: 12 };

export const CYCLE_LABEL: Record<BillingCycle, string> = {
  monthly: "Mensuel",
  quarterly: "Trimestriel",
  annual: "Annuel",
};

/** « par mois », « par trimestre », « par an ». */
export const CYCLE_PER: Record<BillingCycle, string> = {
  monthly: "mois",
  quarterly: "trimestre",
  annual: "an",
};

export type Plan = {
  name: string;
  /** Prix mensuel TTC (prix plein). Gardé pour les textes et le JSON-LD. */
  price: number;
  /** Montant TTC facturé à chaque période. */
  prices: Record<BillingCycle, number>;
  period: string;
  /** Pour qui, en une ligne. */
  audience: string;
  description: string;
  features: string[];
  recommended: boolean;
};

/** "9,99" plutôt que "9.99" : affichage des prix à la française. */
export function formatPlanPrice(price: number): string {
  return price.toLocaleString("fr-FR", { minimumFractionDigits: price % 1 ? 2 : 0, maximumFractionDigits: 2 });
}

const cents = (n: number) => Math.round(n * 100) / 100;

/** Équivalent mensuel d'une période (39,99 € par trimestre → 13,33 €). */
export function cycleMonthly(plan: Plan, cycle: BillingCycle): number {
  return cents(plan.prices[cycle] / CYCLE_MONTHS[cycle]);
}

/** Même durée au tarif mensuel : le prix barré. */
export function cycleFullPrice(plan: Plan, cycle: BillingCycle): number {
  return cents(plan.prices.monthly * CYCLE_MONTHS[cycle]);
}

/** Économie sur une période par rapport au mensuel. */
export function cycleSavings(plan: Plan, cycle: BillingCycle): number {
  return cents(cycleFullPrice(plan, cycle) - plan.prices[cycle]);
}

/** Remise arrondie en pourcentage (trimestriel 11, annuel 20). */
export function cycleDiscountPercent(plan: Plan, cycle: BillingCycle): number {
  const full = cycleFullPrice(plan, cycle);
  return full > 0 ? Math.round((cycleSavings(plan, cycle) / full) * 100) : 0;
}

export const TRIAL_DAYS = 30;

export const plans: Plan[] = [
  {
    name: "Pro",
    price: 14.99,
    prices: { monthly: 14.99, quarterly: 39.99, annual: 144 },
    period: "/mois TTC",
    audience: "Pour démarrer avec un petit fichier client",
    description: "Jusqu'à 300 clients inscrits sur votre carte.",
    features: [
      "300 clients inscrits",
      "10 000 notifications par mois",
      "3 comptes employés",
      "Relances automatiques des clients inactifs",
      "Ciblage par rang client et par inactivité",
      "Export CSV de votre fichier client",
      "Support email prioritaire",
    ],
    recommended: false,
  },
  {
    name: "Business",
    price: 29.99,
    prices: { monthly: 29.99, quarterly: 79.99, annual: 288 },
    period: "/mois TTC",
    audience: "Pour un commerce avec du passage tous les jours",
    description: "Sans limite de clients ni de notifications. Le plan de l'essai.",
    features: [
      "Clients inscrits illimités",
      "Notifications illimitées",
      "Comptes employés illimités",
      "Relances automatiques des clients inactifs",
      "Ciblage par rang client et par inactivité",
      "Export CSV de votre fichier client",
      "Support dédié, réponse sous 4 h",
    ],
    recommended: true,
  },
];

/** Inclus dans les deux plans : ce qui fait la différence au quotidien. */
export const includedEverywhere: { title: string; text: string }[] = [
  {
    title: "Installation faite avec vous",
    text: "Après l'inscription, on vous appelle pour régler votre carte. 10 minutes, offert.",
  },
  {
    title: "Affiche de comptoir prête à imprimer",
    text: "Une affiche A4 avec votre QR code, générée à vos couleurs.",
  },
  {
    title: "Apple Wallet et Google Wallet",
    text: "Vos clients ajoutent la carte en un scan, sans télécharger d'application.",
  },
  {
    title: "Notifications sur l'écran verrouillé",
    text: "Récompense disponible, offre du jour, jour creux : vous les prévenez en 2 clics.",
  },
  {
    title: "Carte qui s'affiche près de chez vous",
    text: "Sur iPhone, la carte remonte quand le client passe à moins de 100 mètres.",
  },
  {
    title: "Mini-jeux",
    text: "Roue de la fortune, carte à gratter, coffres mystère : vos clients jouent leurs points.",
  },
  {
    title: "Parrainage client",
    text: "Vos clients fidèles font venir leurs proches, et sont récompensés.",
  },
  {
    title: "Vos données vous appartiennent",
    text: "Fichier client exportable à tout moment, conforme au RGPD.",
  },
];
