"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, OPEN_PREFERENCES_EVENT, setConsent } from "@/lib/consent";
import { META_PIXEL_ID } from "@/lib/meta-pixel";

/**
 * Bannière de consentement (CNIL) : « Accepter » et « Refuser » au même niveau,
 * aucun traceur publicitaire avant acceptation. Rouvrable depuis le footer.
 */
export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!META_PIXEL_ID) return;
    if (getConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (choice: "granted" | "denied") => {
    setConsent(choice);
    setOpen(false);
  };

  const btn =
    "inline-flex min-h-11 flex-1 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf-600 sm:flex-none";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-3xl bg-white p-5 shadow-card-lg ring-1 ring-ink/10 sm:inset-x-auto sm:bottom-5 sm:left-5 sm:p-6"
    >
      <p id="consent-title" className="font-display text-lg font-bold text-ink">
        Vos préférences de cookies
      </p>
      <p className="mt-2 text-sm text-ink-soft">
        Avec votre accord, nous utilisons le pixel Meta pour mesurer l&apos;efficacité de nos publicités sur
        Facebook et Instagram. Refuser n&apos;a aucun impact sur votre navigation.{" "}
        <Link href="/politique-confidentialite" className="font-medium text-leaf-700 underline underline-offset-2">
          En savoir plus
        </Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button type="button" onClick={() => choose("denied")} className={`${btn} bg-leaf-50 text-leaf-800 ring-1 ring-leaf-200 hover:bg-leaf-100`}>
          Refuser
        </button>
        <button type="button" onClick={() => choose("granted")} className={`${btn} bg-leaf-700 text-white hover:bg-leaf-800`}>
          Accepter
        </button>
      </div>
    </div>
  );
}

/** Lien « Gérer les cookies » pour le footer (client). */
export function ManageCookiesButton({ className = "" }: { className?: string }) {
  if (!META_PIXEL_ID) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
      className={className}
    >
      Gérer les cookies
    </button>
  );
}
