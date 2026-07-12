"use client";

import { useEffect, useRef, useState } from "react";
import { Slider } from "@/components/ui/Slider";
import { CTALink } from "@/components/ui/CTALink";
import { trackEvent } from "@/lib/analytics";

/**
 * Simulateur de gains du programme d'affiliation.
 * Paliers officiels : Bronze 20 % (0-100 € générés/mois),
 * Gold 35 % (100-500 €), Platinum 50 % (500 € et plus).
 * Défaut : 49 commerces au plan Pro (49 €) = 2 401 € générés,
 * palier Platinum, soit 1 200,50 € de commission mensuelle.
 */

const PLANS = [
  { name: "Starter", price: 19 },
  { name: "Pro", price: 49 },
  { name: "Business", price: 99 },
] as const;

type Tier = { name: string; rate: number; chipCls: string };

const TIERS: { min: number; tier: Tier }[] = [
  { min: 500, tier: { name: "Platinum", rate: 50, chipCls: "bg-leaf-800 text-white ring-1 ring-leaf-800" } },
  { min: 100, tier: { name: "Gold", rate: 35, chipCls: "bg-gold-100 text-gold-700 ring-1 ring-gold-300" } },
  { min: 0, tier: { name: "Bronze", rate: 20, chipCls: "bg-ember-600/10 text-ember-600 ring-1 ring-ember-600/25" } },
];

function tierFor(generated: number): Tier {
  return TIERS.find((t) => generated >= t.min)!.tier;
}

/** "1 200,50 €" avec centimes seulement si nécessaire. */
function euros(n: number): string {
  const cents = Math.round(n * 100) % 100 !== 0;
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  }).format(n);
}

/** Compteur animé au centime près (même esprit que AnimatedNumber). */
function AnimatedEuros({ value, className = "" }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const currentRef = useRef(0);
  const startedRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animateTo = (target: number) => {
      cancelAnimationFrame(rafRef.current);
      if (reduced) {
        currentRef.current = target;
        setDisplay(target);
        return;
      }
      const from = currentRef.current;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 800, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const next = from + (target - from) * eased;
        currentRef.current = next;
        setDisplay(next);
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    if (startedRef.current) {
      animateTo(value);
      return () => cancelAnimationFrame(rafRef.current);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startedRef.current = true;
          io.disconnect();
          animateTo(value);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {euros(Math.round(display * 100) / 100)}
    </span>
  );
}

export function AffiliateSimulator() {
  const [shops, setShops] = useState(49);
  const [planIdx, setPlanIdx] = useState(1);
  const usedRef = useRef(false);

  const generated = shops * PLANS[planIdx].price;
  const tier = tierFor(generated);
  const monthly = (generated * tier.rate) / 100;
  const yearly = monthly * 12;
  const nextTier = TIERS.filter((t) => t.min > generated).pop();

  const onUse = <T,>(setter: (v: T) => void) => (v: T) => {
    if (!usedRef.current) {
      usedRef.current = true;
      trackEvent("affiliate_simulator_used", { location: "affiliation" });
    }
    setter(v);
  };

  return (
    <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-card-lg ring-1 ring-ink/5 sm:p-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-0">
        {/* Entrées */}
        <div className="space-y-9 lg:pr-12">
          <Slider
            id="affiliate-shops"
            label="Commerces abonnés grâce à vous"
            min={1}
            max={60}
            value={shops}
            onChange={onUse(setShops)}
            displayValue={`${shops} commerce${shops > 1 ? "s" : ""}`}
          />

          <div>
            <p className="mb-2 font-medium text-ink">Abonnement moyen de vos commerces</p>
            <div className="grid grid-cols-3 gap-2" role="group" aria-label="Abonnement moyen">
              {PLANS.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  aria-pressed={planIdx === i}
                  onClick={() => onUse(setPlanIdx)(i)}
                  className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    planIdx === i
                      ? "bg-leaf-700 text-white"
                      : "bg-cream-2 text-ink-soft ring-1 ring-ink/10 hover:text-ink"
                  }`}
                >
                  {p.name}
                  <span className="block text-xs font-normal opacity-80">{p.price} € / mois</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-cream-2 p-5 text-sm leading-relaxed text-ink-soft">
            <p className="font-semibold text-ink">Comment ça se calcule</p>
            <p className="mt-1.5">
              Votre palier dépend du total payé chaque mois par vos commerces actifs. Plus ils sont
              nombreux, plus votre pourcentage grimpe : 20, 35 puis 50 %.
            </p>
          </div>
        </div>

        {/* Résultat, façon ticket de caisse */}
        <div className="flex flex-col justify-center border-t-2 border-dashed border-ink/15 pt-10 lg:border-l-2 lg:border-t-0 lg:pl-12 lg:pt-0">
          <div className="flex items-center justify-center gap-2.5">
            <span className={`rounded-full px-3.5 py-1 text-sm font-semibold ${tier.chipCls}`}>
              Palier {tier.name}
            </span>
            <span className="text-sm font-medium text-ink-soft">{tier.rate} % de commission</span>
          </div>

          <p className="mt-6 text-center text-base font-medium text-ink-soft">
            Vos commerces paient {euros(generated)} par mois. Vous touchez
          </p>
          <p className="my-3 text-center font-display text-5xl font-extrabold tracking-tight text-leaf-700 sm:text-6xl">
            <AnimatedEuros value={monthly} />
          </p>
          <p className="text-center text-base font-medium text-ink-soft">
            par mois, soit <span className="font-bold text-ink">{euros(yearly)} par an</span>
          </p>

          {nextTier && (
            <p className="mx-auto mt-5 rounded-xl bg-gold-100 px-4 py-2 text-center text-sm font-medium text-gold-700 ring-1 ring-gold-300">
              Encore {euros(nextTier.min - generated)} générés et vous passez
              {" "}{nextTier.tier.name} ({nextTier.tier.rate} %)
            </p>
          )}

          <div className="mt-8 text-center">
            <CTALink
              href="https://app.getcomeback.fr/affilies/inscription"
              position="affiliation-simulator"
              size="xl"
            >
              Devenir partenaire, c&apos;est gratuit
            </CTALink>
            <p className="mt-3 text-sm text-ink-soft">
              Versé chaque mois, tant que vos commerces restent abonnés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
