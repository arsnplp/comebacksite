import type { CSSProperties } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { TrialCTA } from "@/components/ui/TrialCTA";
import { Container } from "@/components/ui/Container";

/** Garanties vérifiables, à la place d'une fausse liste de clients. */
const facts = [
  "Apple Wallet et Google Wallet",
  "Aucune appli à télécharger",
  "Installée avec vous en 10 min",
  "Données exportables à tout moment",
  "Conçu en France",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Trame de points décorative */}
      <div className="dot-grid pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] lg:block" />

      <Container wide className="relative pb-16 pt-12 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Colonne texte — entrée en cascade au chargement */}
          <div>
            <div className="anim-rise">
              <Badge variant="gold" className="mb-6">
                La carte de fidélité qui vit dans le téléphone de vos clients
              </Badge>
            </div>

            <h1
              className="anim-rise font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
              style={{ "--rise-delay": "90ms" } as CSSProperties}
            >
              Transformez chaque passage en <span className="hl-gold">client fidèle</span>.
            </h1>

            <p
              className="anim-rise mt-6 max-w-xl text-lg text-ink-soft text-pretty sm:text-xl"
              style={{ "--rise-delay": "180ms" } as CSSProperties}
            >
              Un scan au comptoir et votre carte s&apos;installe dans leur Wallet. Ensuite, vous leur parlez
              directement sur l&apos;écran verrouillé : récompense à portée de main, client absent depuis trois
              semaines, jour creux à remplir. Ils reviennent, vous le voyez en euros.
            </p>

            <div
              className="anim-rise mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              style={{ "--rise-delay": "270ms" } as CSSProperties}
            >
              <TrialCTA position="hero" size="xl" />
            </div>

            <div
              className="anim-rise mt-5 flex flex-wrap gap-2"
              style={{ "--rise-delay": "360ms" } as CSSProperties}
            >
              <Badge variant="gold">0 € aujourd&apos;hui</Badge>
              <Badge>Résiliable en 1 clic</Badge>
              <Badge>Installation offerte</Badge>
            </div>
          </div>

          {/* Colonne visuelle — masquée sur mobile/tablette, trop encombrante sous lg */}
          <div className="anim-rise relative hidden lg:block" style={{ "--rise-delay": "200ms" } as CSSProperties}>
            <div
              className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf-100 opacity-70 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <Image
                src="/telheader.png"
                alt="Carte de fidélité Comeback ajoutée dans Apple Wallet sur un iPhone"
                width={1024}
                height={1536}
                priority
                className="mx-auto h-auto w-full max-w-[360px] drop-shadow-2xl"
              />
              {/* Chip flottante — arrive comme un coup de tampon */}
              <div
                className="anim-stamp absolute -right-2 bottom-14 hidden rounded-2xl bg-white px-4 py-2.5 shadow-card-lg ring-1 ring-ink/5 sm:block"
                style={{ "--rise-delay": "900ms" } as CSSProperties}
              >
                <p className="text-sm font-semibold text-ink">
                  Carte ajoutée <span className="text-leaf-600">✓</span>
                </p>
                <p className="text-xs text-ink-soft">en 1 scan, sans appli</p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de garanties : uniquement des faits vérifiables */}
        <div className="anim-rise mt-16 border-t border-ink/10 pt-8 lg:mt-20" style={{ "--rise-delay": "450ms" } as CSSProperties}>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {facts.map((fact) => (
              <li key={fact} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-leaf-600" aria-hidden="true">
                  <path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
