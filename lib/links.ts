/**
 * Liens vers l'application, centralisés ici pour qu'un seul endroit
 * décide où mènent les CTA.
 *
 * `plan=free` ouvre la création de compte avec l'essai de 30 jours au
 * niveau Business (carte demandée, 0 € prélevé). Sans ce paramètre, la page
 * d'inscription de l'app renvoie vers ses tarifs : ne jamais l'enlever.
 */
export const SIGNUP_URL = "https://app.getcomeback.fr/signup?plan=free";

/**
 * Inscription avec une période de facturation choisie sur le site : l'app la
 * reprend et c'est elle qui est facturée au terme de l'essai. `plan=free`
 * reste en premier, toujours présent.
 */
export function signupUrl(billing?: "monthly" | "quarterly" | "annual"): string {
  return billing && billing !== "monthly" ? `${SIGNUP_URL}&billing=${billing}` : SIGNUP_URL;
}

/** Connexion des commerçants déjà inscrits (lien de navigation, pas un CTA). */
export const LOGIN_URL = "https://app.getcomeback.fr/login";

/**
 * Inscription directe au plan Pro, payé dès l'inscription (sans essai).
 * Seule exception au CTA unique, sur la carte Pro uniquement : l'essai
 * gratuit passe toujours par Business.
 */
export function proSignupUrl(billing?: "monthly" | "quarterly" | "annual"): string {
  const base = "https://app.getcomeback.fr/signup?plan=pro";
  return billing && billing !== "monthly" ? `${base}&billing=${billing}` : base;
}

/** Libellé unique du CTA, identique sur tout le site. */
export const CTA_LABEL = "Créer ma carte gratuitement";

/** Réassurance affichée sous le CTA, identique partout. */
export const CTA_REASSURANCE = "30 jours gratuits · 0 € aujourd'hui · Résiliable en 1 clic";

/** Prix des plans, alignés sur l'app (lib/pricing.ts côté app). */
export const BUSINESS_PRICE_LABEL = "29,99 €";

const BILLING_KEY = "comeback_billing";

/**
 * Retient la période choisie dans le sélecteur de prix, pour que tous les
 * CTA de la page (en-tête, bouton mobile collant…) la transmettent aussi.
 * Stockage de session : rien ne survit à la fermeture de l'onglet.
 */
export function rememberBillingCycle(cycle: "monthly" | "quarterly" | "annual"): void {
  try {
    sessionStorage.setItem(BILLING_KEY, cycle);
  } catch {
    /* navigation privée stricte : le CTA de la carte garde la période */
  }
}

/** Lien d'inscription complété par la période retenue, s'il n'en a pas déjà. */
export function withRememberedBilling(href: string): string {
  if (!href.startsWith(SIGNUP_URL) || href.includes("billing=")) return href;
  try {
    const cycle = sessionStorage.getItem(BILLING_KEY);
    if (cycle === "quarterly" || cycle === "annual") return signupUrl(cycle);
  } catch {
    /* rien de retenu */
  }
  return href;
}
