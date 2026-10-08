"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_EVENT, getConsent, type ConsentChoice } from "@/lib/consent";
import { META_PIXEL_ID } from "@/lib/meta-pixel";

/** Charge le snippet officiel fbevents.js, une seule fois. */
function loadPixel(id: string) {
  if (window.fbq) return;
  /* eslint-disable */
  // Snippet officiel Meta, réécrit sans document.write
  const n: any = function (...args: unknown[]) {
    n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
  };
  if (!window._fbq) window._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);
  /* eslint-enable */
  n("init", id);
}

/**
 * Meta Pixel soumis au consentement (CNIL) :
 * - rien n'est chargé tant que le visiteur n'a pas cliqué « Accepter » ;
 * - PageView envoyé au chargement puis à chaque changement de page (App Router).
 */
export function MetaPixel() {
  const pathname = usePathname();
  const [granted, setGranted] = useState(false);
  const lastTracked = useRef<string | null>(null);

  useEffect(() => {
    setGranted(getConsent() === "granted");
    const onChange = (e: Event) => setGranted((e as CustomEvent<ConsentChoice>).detail === "granted");
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (!META_PIXEL_ID || !granted) return;
    loadPixel(META_PIXEL_ID);
    if (lastTracked.current === pathname) return;
    lastTracked.current = pathname;
    window.fbq?.("track", "PageView");
  }, [granted, pathname]);

  return null;
}
