/**
 * Meta Pixel (Facebook / Instagram Ads).
 * ID public par défaut, surchargeable via NEXT_PUBLIC_META_PIXEL_ID
 * (mettre "off" pour désactiver complètement le pixel et la bannière).
 * Le script n'est chargé qu'après consentement : voir components/seo/MetaPixel.tsx.
 */
const envId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
export const META_PIXEL_ID: string | null = envId === "off" ? null : envId || "2032959891425972";

type FbqParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    fbq?: (command: "init" | "track" | "trackCustom" | "consent", nameOrId: string, params?: FbqParams) => void;
    _fbq?: unknown;
  }
}

/** Événement standard Meta (PageView, Lead, CompleteRegistration…). No-op sans consentement. */
export function fbTrack(event: string, params?: FbqParams): void {
  if (typeof window === "undefined") return;
  window.fbq?.("track", event, params);
}

/** Événement personnalisé Meta. No-op sans consentement. */
export function fbTrackCustom(event: string, params?: FbqParams): void {
  if (typeof window === "undefined") return;
  window.fbq?.("trackCustom", event, params);
}
