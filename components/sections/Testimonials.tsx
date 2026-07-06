import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Stagger } from "@/components/ui/Stagger";
import { testimonials } from "@/content/testimonials";

/** Section 4 — Preuve sociale locale, la métrique en gros. */
export function Testimonials() {
  return (
    <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="testimonials-title">
      <Container>
        <SectionHeader
          eyebrow="Ils l'ont fait"
          title="Des commerçants comme vous. Des résultats comme ça."
          highlight="Des résultats comme ça."
        />

        <Stagger className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <Card key={t.name} hover className="flex h-full flex-col p-8">
              {/* La métrique d'abord — c'est elle qui vend */}
              <p className="font-display text-4xl font-extrabold tracking-tight text-ember-600">
                {t.metric}
              </p>
              <p className="mt-1 font-medium text-ink">{t.metricLabel}</p>

              <blockquote className="mt-5 flex-1 text-ink-soft">« {t.quote} »</blockquote>

              <footer className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                {/* [PLACEHOLDER] — photo du commerçant devant sa boutique */}
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf-100 font-display text-sm font-bold text-leaf-800"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <div className="text-sm">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-ink-soft">
                    {t.business} · {t.city}
                  </p>
                </div>
              </footer>
            </Card>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <Button href="/temoignages" variant="ghost">
            Lire tous les témoignages
          </Button>
        </div>
      </Container>
    </section>
  );
}
