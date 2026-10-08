/**
 * Consentement aux traceurs publicitaires (Meta Pixel).
 * Conforme CNIL : rien n'est chargé avant un choix explicite « Accepter ».
 * Le choix est conservé 6 mois dans le navigateur, puis redemandé.
 */

export type ConsentChoice = "granted" | "denied";

const STORAGE_KEY = "comeback-consent";
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182; // ~6 mois (recommandation CNIL)
export const CONSENT_EVENT = "comeback:consent";
export const OPEN_PREFERENCES_EVENT = "comeback:open-consent";

type Stored = { choice: ConsentChoice; at: number };

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw) as Stored;
    if (!stored?.choice || Date.now() - stored.at > MAX_AGE_MS) return null;
    return stored.choice;
  } catch {
    return null;
  }
}

export function setConsent(choice: ConsentChoice): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: Date.now() } satisfies Stored));
  } catch {
    /* stockage indisponible (navigation privée…) : le choix vaut pour la page en cours */
  }
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_EVENT, { detail: choice }));
}

/** Rouvre la bannière (lien « Gérer les cookies » du footer). */
export function openConsentPreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
