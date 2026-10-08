/**
 * Tracking centralisé, provider branchable (Plausible par défaut).
 * Plausible : aucun cookie. Meta Pixel : uniquement après consentement
 * (voir lib/consent.ts et components/layout/ConsentBanner.tsx).
 * Le script n'est chargé que si NEXT_PUBLIC_PLAUSIBLE_DOMAIN est défini
 * (voir components/seo/Analytics.tsx).
 */

import { fbTrack, fbTrackCustom } from "@/lib/meta-pixel";

type EventName =
  | "cta_click" // props: { position: "header" | "hero" | "calculator" | ... }
  | "calculator_used"
  | "affiliate_simulator_used"
  | "lead_submitted"
  | "scroll_75";

type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (name: string, options?: { props?: EventProps }) => void;
    gtag?: (command: "event", name: string, params?: EventProps) => void;
  }
}

export function trackEvent(name: EventName, props?: EventProps): void {
  if (typeof window === "undefined") return;
  window.plausible?.(name, props ? { props } : undefined);
  window.gtag?.("event", name, props);
  // Meta Pixel (no-op tant que le visiteur n'a pas accepté les cookies)
  if (name === "lead_submitted") fbTrack("Lead", props);
  else if (name === "cta_click") fbTrackCustom("CTAClick", props);
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", name, props ?? {});
  }
}
