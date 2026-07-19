import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTALink } from "@/components/ui/CTALink";
import { Stagger } from "@/components/ui/Stagger";
import { plans } from "@/content/pricing";

/** Section 7 — Aperçu des tarifs, reformulés en équivalents concrets. */
export function PricingPreview() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="pricing-title">
      <Container>
        <SectionHeader
          eyebrow="Combien ça coûte"
          title="Un tarif simple. Rentabilisé dès 2 clients fidélisés par mois."
          highlight="2 clients fidélisés"
          lead="30 jours gratuits avec toutes les fonctionnalités Business, sans carte bancaire. Ensuite :"
        />

        <Stagger className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                plan.recommended
                  ? "z-10 bg-gradient-to-b from-leaf-50/70 to-white shadow-card-lg ring-2 ring-leaf-600 lg:scale-[1.05]"
                  : "bg-white shadow-card ring-1 ring-ink/5 hover:shadow-card-lg"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-leaf-700 px-4 py-1 text-sm font-semibold text-white shadow-md">
                  Recommandé
                </span>
              )}
              <h3 className="font-display text-lg font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{plan.description}</p>
              <p className="mt-5">
                {plan.price !== null ? (
                  <>
                    <span className="font-display text-4xl font-extrabold tracking-tight">
                      {plan.price}&nbsp;€
                    </span>
                    <span className="text-ink-soft">{plan.period}</span>
                  </>
                ) : (
                  <span className="font-display text-4xl font-extrabold tracking-tight">Sur devis</span>
                )}
              </p>
              <p className="mt-1 text-sm font-semibold text-ember-600">{plan.equivalent}</p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-ink-soft">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-leaf-600" aria-hidden="true">
                      <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
                {plan.missing?.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-ink/35">
                    <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-ink/20" aria-hidden="true">
                      <path d="M4 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CTALink
                  href={plan.price !== null ? "https://app.getcomeback.fr/login" : "/demo"}
                  position={`pricing-${plan.name.toLowerCase()}`}
                  variant={plan.recommended ? "primary" : "ghost"}
                  className="w-full"
                >
                  {plan.cta}
                </CTALink>
              </div>
            </div>
          ))}
        </Stagger>

        <p className="mt-10 text-center">
          <Link
            href="/tarifs"
            className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800"
          >
            Voir le détail complet des tarifs →
          </Link>
        </p>
      </Container>
    </section>
  );
}
