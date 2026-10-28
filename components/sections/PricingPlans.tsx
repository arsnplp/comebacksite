"use client";

import { useState } from "react";
import { TrialCTA } from "@/components/ui/TrialCTA";
import { trackEvent } from "@/lib/analytics";
import { rememberBillingCycle } from "@/lib/links";
import {
  BILLING_CYCLES,
  CYCLE_LABEL,
  CYCLE_PER,
  cycleDiscountPercent,
  cycleMonthly,
  cycleSavings,
  formatPlanPrice,
  plans,
  type BillingCycle,
  type Plan,
} from "@/content/pricing";

const euros = (n: number) => `${formatPlanPrice(n)} €`;

/** Sélecteur Mensuel / Trimestriel / Annuel, remise calculée depuis la grille. */
function CycleSwitch({ value, onChange }: { value: BillingCycle; onChange: (c: BillingCycle) => void }) {
  const business = plans.find((p) => p.recommended) ?? plans[0];
  return (
    <div
      role="radiogroup"
      aria-label="Période de facturation"
      className="mx-auto flex w-full max-w-md items-center gap-1 rounded-full bg-white p-1.5 shadow-card ring-1 ring-ink/5 sm:w-auto"
    >
      {BILLING_CYCLES.map((cycle) => {
        const active = value === cycle;
        const percent = cycleDiscountPercent(business, cycle);
        return (
          <button
            key={cycle}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(cycle)}
            className={`flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2.5 text-sm font-semibold transition-colors sm:flex-none sm:px-5 ${
              active ? "bg-leaf-700 text-white shadow-md" : "text-ink-soft hover:text-ink"
            }`}
          >
            {CYCLE_LABEL[cycle]}
            {percent > 0 && (
              <span
                className={`rounded-full px-1.5 py-0.5 text-xs font-bold ${
                  active ? "bg-white/20 text-white" : "bg-leaf-50 text-leaf-700"
                }`}
              >
                -{percent}&nbsp;%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

/** Prix d'un plan pour la période : prix barré, équivalent mensuel, économie. */
function PlanPrice({ plan, cycle }: { plan: Plan; cycle: BillingCycle }) {
  const discounted = cycle !== "monthly";
  return (
    <div className="mt-5">
      <p className="flex flex-wrap items-baseline gap-x-2">
        {discounted && (
          <span className="text-xl font-semibold text-ink/30 line-through decoration-2">{euros(plan.prices.monthly)}</span>
        )}
        <span className="font-display text-4xl font-extrabold tracking-tight">{euros(cycleMonthly(plan, cycle))}</span>
        <span className="text-ink-soft">/mois TTC</span>
      </p>
      {discounted ? (
        <p className="mt-1.5 flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-ink">
            Facturé {euros(plan.prices[cycle])} par {CYCLE_PER[cycle]}
          </span>
          <span className="rounded-full bg-ink px-2.5 py-0.5 text-xs font-bold text-leaf-200">
            Vous économisez {euros(cycleSavings(plan, cycle))}
          </span>
        </p>
      ) : (
        <p className="mt-1.5 text-sm font-semibold text-ember-600">Sans engagement, résiliable en 1 clic</p>
      )}
    </div>
  );
}

const Check = () => (
  <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-leaf-600" aria-hidden="true">
    <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Cartes de prix avec choix de la période. La période choisie suit le
 * commerçant jusqu'à l'inscription (`billing` dans le lien du CTA) : c'est
 * elle qui est facturée au terme des 30 jours d'essai.
 *
 * - `full` (page Tarifs) : toutes les fonctionnalités, un CTA par carte ;
 * - `preview` (accueil) : 4 fonctionnalités, un seul CTA sous les cartes.
 */
export function PricingPlans({
  variant = "full",
  reassurance,
}: {
  variant?: "full" | "preview";
  reassurance: string;
}) {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const choose = (c: BillingCycle) => {
    setCycle(c);
    rememberBillingCycle(c);
    trackEvent("billing_cycle", { cycle: c });
  };
  const full = variant === "full";

  return (
    <div>
      <div className="mb-10 flex flex-col items-center gap-3">
        <CycleSwitch value={cycle} onChange={choose} />
        <p className="max-w-lg text-center text-sm text-ink-soft" aria-live="polite">
          {cycle === "monthly"
            ? "Payez mois par mois, arrêtez quand vous voulez."
            : `Les 30 jours d'essai restent gratuits. La formule ${cycle === "quarterly" ? "trimestrielle" : "annuelle"} démarre ensuite, seulement si vous continuez.`}
        </p>
      </div>

      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
              plan.recommended
                ? "z-10 bg-gradient-to-b from-leaf-50/70 to-white shadow-card-lg ring-2 ring-leaf-600"
                : "bg-white shadow-card ring-1 ring-ink/5 hover:shadow-card-lg"
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-leaf-700 px-4 py-1 text-sm font-semibold text-white shadow-md">
                Inclus dans l&apos;essai
              </span>
            )}
            <h3 className="font-display text-xl font-bold">{plan.name}</h3>
            <p className="mt-1 text-sm font-medium text-ink">{plan.audience}</p>
            <PlanPrice plan={plan} cycle={cycle} />
            {full && <p className="mt-4 text-[0.95rem] text-ink-soft">{plan.description}</p>}

            <ul className="mt-6 flex-1 space-y-2.5">
              {(full ? plan.features : plan.features.slice(0, 4)).map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                  <Check />
                  {f}
                </li>
              ))}
            </ul>

            {full && (
              <div className="mt-8">
                <TrialCTA
                  position={`tarifs-${plan.name.toLowerCase()}`}
                  variant={plan.recommended ? "primary" : "ghost"}
                  className="w-full"
                  billing={cycle}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {full ? (
        <p className="mt-8 text-center text-sm text-ink-soft">{reassurance}</p>
      ) : (
        <div className="mt-10 flex flex-col items-center gap-3">
          <TrialCTA position="pricing-preview" size="xl" billing={cycle} />
          <p className="text-sm text-ink-soft">{reassurance}</p>
        </div>
      )}
    </div>
  );
}
