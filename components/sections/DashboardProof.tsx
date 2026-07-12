import type { CSSProperties } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CTALink } from "@/components/ui/CTALink";
import { StampCheck } from "@/components/ui/Stamps";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardMockup } from "@/components/mockups/DashboardMockup";

/** Section 6 — Le dashboard : l'essai qui rend accro. */
export function DashboardProof() {
  return (
    <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="dashboard-title">
      <Container wide>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Mockup + note autocollante */}
          <div className="relative order-2 lg:order-1">
            <Reveal>
              <DashboardMockup />
              <div className="anim-stamp absolute -top-4 right-4 rounded-xl bg-gold-300 px-4 py-2 shadow-card sm:-right-3" style={{ "--rise-delay": "500ms" } as CSSProperties}>
                <p className="text-sm font-bold text-ink">Vos vraies données pendant l&apos;essai</p>
              </div>
              <p className="mt-3 text-center text-xs text-ink-soft">
                Aperçu du dashboard (données de démonstration)
              </p>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-700">
              <StampCheck className="h-5 w-5" />
              Votre tableau de bord
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Dès le premier jour, vous voyez <span className="hl-gold">la machine tourner</span>.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Pendant l&apos;essai gratuit, ce ne sont pas des chiffres de démo : ce sont{" "}
              <strong className="text-ink">vos</strong> clients, <strong className="text-ink">vos</strong>{" "}
              visites, <strong className="text-ink">votre</strong> CA.
            </p>
            <p className="mt-4 text-lg text-ink-soft">
              Au bout de 30 jours, vous saurez exactement ce que Comeback vous rapporte. C&apos;est vous
              qui déciderez.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Clients inscrits en temps réel</Badge>
              <Badge>Visites comptées à chaque scan</Badge>
              <Badge>CA généré, en euros</Badge>
            </div>
            <div className="mt-8">
              <CTALink href="https://app.getcomeback.fr/login" position="dashboard">
                Voir mes chiffres pendant 30 jours
              </CTALink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
