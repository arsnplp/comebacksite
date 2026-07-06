/**
 * Plausible Analytics (privacy-first, sans cookie → pas de bannière).
 * Ne charge RIEN tant que NEXT_PUBLIC_PLAUSIBLE_DOMAIN n'est pas défini.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  return <script defer data-domain={domain} src="https://plausible.io/js/script.js" />;
}
