"use client";

import { useState, type FormEvent } from "react";
import { buttonClasses } from "@/components/ui/Button";
import { StampCheck } from "@/components/ui/Stamps";
import { trackEvent } from "@/lib/analytics";
import { sectors } from "@/content/sectors";

type LeadFormProps = {
  /** trial = essai gratuit · demo = réservation de démo · contact = message libre */
  kind: "trial" | "demo" | "contact";
  submitLabel: string;
};

type Status = "idle" | "sending" | "success" | "error";

/**
 * Formulaire de capture de leads (essai, démo, contact).
 * [PLACEHOLDER] — brancher NEXT_PUBLIC_LEAD_ENDPOINT (Formspree, API interne…)
 * dans .env : sans endpoint configuré, le formulaire affiche l'état de succès
 * en local mais n'envoie rien (un avertissement est loggé en console).
 */
export function LeadForm({ kind, submitLabel }: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot anti-spam : un humain ne remplit jamais ce champ caché
    if (data.website) return;

    setStatus("sending");
    const endpoint = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...data, kind }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        console.warn("[LeadForm] NEXT_PUBLIC_LEAD_ENDPOINT non configuré : lead non envoyé.", { kind, data });
      }
      trackEvent("lead_submitted", { kind });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-leaf-50 p-8 text-center ring-1 ring-leaf-200 sm:p-10" role="status">
        <StampCheck className="mx-auto h-14 w-14 text-leaf-700" />
        <h3 className="mt-5 font-display text-2xl font-bold">C&apos;est noté !</h3>
        <p className="mx-auto mt-2 max-w-sm text-ink-soft">
          {kind === "demo"
            ? "Nous revenons vers vous sous 24 h ouvrées pour fixer le créneau de votre démo."
            : kind === "contact"
              ? "Votre message est bien parti. Nous répondons sous 24 h ouvrées."
              : "Nous vous envoyons votre accès par email dans les prochaines minutes. Pensez à vérifier vos indésirables."}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink-faint transition-colors focus:border-leaf-600 focus:outline-none focus:ring-2 focus:ring-leaf-200";
  const labelCls = "mb-1.5 block font-medium text-ink";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      {/* Honeypot invisible (anti-spam) */}
      <div className="hidden" aria-hidden="true">
        <label>
          Ne pas remplir ce champ
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${kind}-name`} className={labelCls}>
            Votre prénom et nom
          </label>
          <input id={`${kind}-name`} name="name" type="text" required autoComplete="name" placeholder="Camille Roux" className={inputCls} />
        </div>
        <div>
          <label htmlFor={`${kind}-business`} className={labelCls}>
            Nom de votre commerce
          </label>
          <input id={`${kind}-business`} name="business" type="text" required autoComplete="organization" placeholder="Boulangerie du Marché" className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor={`${kind}-sector`} className={labelCls}>
          Votre secteur
        </label>
        <div className="relative">
          <select id={`${kind}-sector`} name="sector" required defaultValue="" className={`${inputCls} appearance-none pr-10`}>
            <option value="" disabled>
              Choisissez votre métier
            </option>
            {sectors.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.label}
              </option>
            ))}
            <option value="autre">Autre commerce</option>
          </select>
          <svg
            viewBox="0 0 16 16"
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
            aria-hidden="true"
          >
            <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${kind}-email`} className={labelCls}>
            Email professionnel
          </label>
          <input id={`${kind}-email`} name="email" type="email" required autoComplete="email" placeholder="vous@votrecommerce.fr" className={inputCls} />
        </div>
        <div>
          <label htmlFor={`${kind}-phone`} className={labelCls}>
            Téléphone <span className="font-normal text-ink-faint">(facultatif)</span>
          </label>
          <input id={`${kind}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="06 12 34 56 78" className={inputCls} />
        </div>
      </div>

      {kind === "contact" && (
        <div>
          <label htmlFor="contact-message" className={labelCls}>
            Votre message
          </label>
          <textarea id="contact-message" name="message" required rows={5} placeholder="Posez-nous votre question…" className={inputCls} />
        </div>
      )}

      {status === "error" && (
        <p className="rounded-2xl bg-ember-600/10 px-4 py-3 text-sm font-medium text-ember-700" role="alert">
          L&apos;envoi a échoué. Réessayez dans un instant, ou écrivez-nous directement à arsene.lecoq@getcomeback.fr.
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className={buttonClasses("primary", "xl", "w-full disabled:cursor-wait disabled:opacity-70")}>
        {status === "sending" ? "Envoi en cours…" : submitLabel}
      </button>

      <p className="text-center text-xs leading-relaxed text-ink-soft">
        En envoyant ce formulaire, vous acceptez d&apos;être recontacté au sujet de votre demande. Données
        hébergées en Europe, jamais revendues. Voir notre{" "}
        <a href="/politique-confidentialite" className="underline underline-offset-2 hover:text-ink">
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  );
}
