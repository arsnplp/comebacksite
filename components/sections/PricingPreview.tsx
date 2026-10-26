import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrialCTA } from "@/components/ui/TrialCTA";
import { Stagger } from "@/components/ui/Stagger";
import { plans, formatPlanPrice } from "@/content/pricing";
import { CTA_REASSURANCE } from "@/lib/links";

/** Aperçu des tarifs : deux plans, un seul point d'entrée (l'essai). */
export function PricingPreview() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="pricing-title">
      <Container className="max-w-5xl">
        <SectionHeader
          eyebrow="Combien ça coûte"
          title="30 jours pour tester. Ensuite, deux plans simples."
          highlight="30 jours pour tester"
          lead="L'essai vous donne tout le plan Business. Avant la fin, vous gardez Business, vous passez sur Pro ou vous arrêtez en un clic. Installation offerte dans les deux cas."
        />

        <Stagger className="grid items-stretch gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
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
              <p className="mt-5">
                <span className="font-display text-4xl font-extrabold tracking-tight">
                  {formatPlanPrice(plan.price)}&nbsp;€
                </span>
                <span className="text-ink-soft">{plan.period}</span>
              </p>
              <p className="mt-1 text-sm font-semibold text-ember-600">Sans engagement</p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-leaf-600" aria-hidden="true">
                      <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Stagger>

        <div className="mt-10 flex flex-col items-center gap-3">
          <TrialCTA position="pricing-preview" size="xl" />
          <p className="text-sm text-ink-soft">{CTA_REASSURANCE}</p>
          <Link
            href="/tarifs"
            className="mt-2 font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800"
          >
            Voir le détail des plans et le déroulé de l&apos;essai
          </Link>
        </div>
      </Container>
    </section>
  );
}
