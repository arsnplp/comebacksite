"use client";

import { useRef, useState } from "react";
import { Slider } from "@/components/ui/Slider";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { CTALink } from "@/components/ui/CTALink";
import { estimateLostRevenue, roundToHundred, formatEuros } from "@/lib/calculator";
import { trackEvent } from "@/lib/analytics";
import { plans } from "@/content/pricing";

/**
 * Calculateur complet de la page /calculateur.
 * Même modèle que le mini-calculateur de la homepage (lib/calculator.ts),
 * avec le détail mensuel et la comparaison au coût de l'abonnement.
 */
export function FullCalculator() {
  const [clientsPerWeek, setClientsPerWeek] = useState(250);
  const [basket, setBasket] = useState(15);
  const usedRef = useRef(false);

  const lostPerYear = roundToHundred(estimateLostRevenue(clientsPerWeek, basket));
  const lostPerMonth = Math.round(lostPerYear / 12);

  const starter = plans.find((p) => p.name === "Starter");
  const yearlyPlanCost = (starter?.price ?? 19) * 12;
  const roiMultiple = Math.max(1, Math.round(lostPerYear / yearlyPlanCost));

  const onUse = <T,>(setter: (v: T) => void) => (v: T) => {
    if (!usedRef.current) {
      usedRef.current = true;
      trackEvent("calculator_used", { location: "page" });
    }
    setter(v);
  };

  return (
    <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-card-lg ring-1 ring-ink/5 sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-0">
        {/* Entrées */}
        <div className="space-y-9 lg:pr-12">
          <Slider
            id="full-calc-clients"
            label="Clients servis par semaine"
            min={20}
            max={2000}
            step={10}
            value={clientsPerWeek}
            onChange={onUse(setClientsPerWeek)}
            displayValue={`${clientsPerWeek} clients`}
          />
          <Slider
            id="full-calc-basket"
            label="Panier moyen"
            min={5}
            max={100}
            value={basket}
            onChange={onUse(setBasket)}
            displayValue={`${basket} €`}
          />
          <div className="rounded-2xl bg-cream-2 p-5 text-sm leading-relaxed text-ink-soft">
            <p className="font-semibold text-ink">Comment lire ce résultat</p>
            <p className="mt-1.5">
              C&apos;est une estimation volontairement prudente du chiffre d&apos;affaires que des clients
              déjà conquis ne dépensent pas chez vous, faute d&apos;une raison de revenir plus souvent. La
              méthodologie complète est détaillée sous le calculateur.
            </p>
          </div>
        </div>

        {/* Résultat, façon ticket de caisse */}
        <div className="flex flex-col justify-center border-t-2 border-dashed border-ink/15 pt-10 lg:border-l-2 lg:border-t-0 lg:pl-12 lg:pt-0">
          <p className="text-center text-base font-medium text-ink-soft">
            Chaque année, vous laissez filer environ
          </p>
          <p className="my-4 text-center font-display text-5xl font-extrabold tracking-tight text-ember-600 sm:text-6xl">
            <AnimatedNumber value={lostPerYear} kind="euros" />
          </p>
          <dl className="mx-auto w-full max-w-sm space-y-2.5 border-t border-ink/10 pt-5 text-[0.95rem]">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-ink-soft">Soit par mois</dt>
              <dd className="font-display text-lg font-bold text-ink tabular-nums">
                {formatEuros(lostPerMonth)}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="text-ink-soft">Abonnement Starter par an</dt>
              <dd className="font-display text-lg font-bold text-ink tabular-nums">
                {formatEuros(yearlyPlanCost)}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 rounded-xl bg-leaf-50 px-3 py-2 ring-1 ring-leaf-200">
              <dt className="font-medium text-leaf-800">Potentiel vs coût de l&apos;outil</dt>
              <dd className="font-display text-lg font-bold text-leaf-800 tabular-nums">
                {roiMultiple} fois
              </dd>
            </div>
          </dl>
          <div className="mt-8 text-center">
            <CTALink href="/essai-gratuit" position="calculator-page" size="xl">
              Récupérer ce CA, 30 jours gratuits
            </CTALink>
            <p className="mt-3 text-sm text-ink-soft">Sans carte bancaire, résultats mesurés dans votre dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
