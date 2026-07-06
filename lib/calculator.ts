/**
 * Modèle d'estimation du CA récupérable grâce à un programme de fidélité.
 *
 * Tous les coefficients sont volontairement PRUDENTS et ajustables ici.
 * La méthodologie complète est affichée en toutes lettres sur /calculateur.
 */
export const COEFFICIENTS = {
  /** Semaines d'activité par an. */
  WEEKS_PER_YEAR: 52,

  /**
   * Part des clients qui ne reviendraient (davantage) qu'avec un programme
   * de fidélité actif. [SOURCE : étude à insérer]
   */
  LOYALTY_SENSITIVE_SHARE: 0.25,

  /**
   * Part des visites supplémentaires réellement récupérables sur ce segment
   * (toutes ne le sont pas : occasionnels, touristes, déménagements…).
   * [SOURCE : étude à insérer]
   */
  RECOVERABLE_VISIT_SHARE: 0.3,
} as const;

/**
 * CA annuel « laissé filer » sans programme de fidélité.
 * clients/semaine × 52 × panier moyen × 25 % × 30 %
 */
export function estimateLostRevenue(clientsPerWeek: number, averageBasket: number): number {
  const { WEEKS_PER_YEAR, LOYALTY_SENSITIVE_SHARE, RECOVERABLE_VISIT_SHARE } = COEFFICIENTS;
  return (
    clientsPerWeek * WEEKS_PER_YEAR * averageBasket * LOYALTY_SENSITIVE_SHARE * RECOVERABLE_VISIT_SHARE
  );
}

/** Arrondi à la centaine — un chiffre trop précis serait moins crédible. */
export function roundToHundred(value: number): number {
  return Math.round(value / 100) * 100;
}

/** "12 400 €" — format monétaire français sans décimales. */
export function formatEuros(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

/** "1 234" — format nombre français. */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(value);
}
