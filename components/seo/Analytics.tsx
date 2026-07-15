import Script from "next/script";

/**
 * Analytics, activable par variable d'environnement (rien ne charge sinon) :
 * - NEXT_PUBLIC_PLAUSIBLE_DOMAIN : Plausible (sans cookie, pas de bannière)
 * - NEXT_PUBLIC_GA_ID : Google Analytics 4 (id "G-XXXXXXX")
 * Les événements custom sont envoyés aux deux via lib/analytics.ts.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {domain && <script defer data-domain={domain} src="https://plausible.io/js/script.js" />}
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
        </>
      )}
    </>
  );
}
