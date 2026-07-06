import type { CSSProperties } from "react";
import { Badge } from "@/components/ui/Badge";
import { CTALink } from "@/components/ui/CTALink";
import { Container } from "@/components/ui/Container";
import { PhoneWalletMockup } from "@/components/mockups/PhoneWalletMockup";

/* [PLACEHOLDER] — remplacer par de vrais noms/logos de clients */
const trustedShops = [
  "Boulangerie Martin",
  "Le Comptoir",
  "Salon L'Atelier",
  "Café Prosper",
  "Maison Lila",
  "Institut Éclat",
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
                Carte de fidélité digitale, sans application à télécharger
              </Badge>
            </div>

            <h1
              className="anim-rise font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
              style={{ "--rise-delay": "90ms" } as CSSProperties}
            >
              Vos clients reviennent <span className="hl-gold">2× plus souvent</span>. Votre CA augmente
              sans dépenser en pub.
            </h1>

            <p
              className="anim-rise mt-6 max-w-xl text-lg text-ink-soft text-pretty sm:text-xl"
              style={{ "--rise-delay": "180ms" } as CSSProperties}
            >
              Comeback crée votre carte de fidélité digitale en 10 minutes. Vos clients l&apos;ajoutent à
              leur téléphone en 1 scan. Ils reviennent, vous encaissez.
            </p>

            <div
              className="anim-rise mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              style={{ "--rise-delay": "270ms" } as CSSProperties}
            >
              <CTALink href="/essai-gratuit" position="hero" size="xl">
                Essayer gratuitement 30 jours
              </CTALink>
              <CTALink href="/demo" position="hero-demo" variant="ghost" size="xl" withArrow={false}>
                <svg viewBox="0 0 20 20" className="h-5 w-5 text-leaf-700" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M8 6.8v6.4l5.2-3.2L8 6.8Z" fill="currentColor" />
                </svg>
                Voir une démo (2 min)
              </CTALink>
            </div>

            <div
              className="anim-rise mt-5 flex flex-wrap gap-2"
              style={{ "--rise-delay": "360ms" } as CSSProperties}
            >
              <Badge>Sans carte bancaire</Badge>
              <Badge>Sans engagement</Badge>
              <Badge>Installé en 10 min</Badge>
            </div>
          </div>

          {/* Colonne visuelle */}
          <div className="anim-rise relative" style={{ "--rise-delay": "200ms" } as CSSProperties}>
            <div
              className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf-100 opacity-70 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <PhoneWalletMockup />
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

        {/* Barre de confiance — bandeau défilant, en pause au survol */}
        <div className="anim-rise mt-16 border-t border-ink/10 pt-8 lg:mt-20" style={{ "--rise-delay": "450ms" } as CSSProperties}>
          {/* [PLACEHOLDER] — remplacer par le vrai nombre de commerçants clients */}
          <p className="text-center text-sm font-medium text-ink-soft">
            Déjà 150+ commerçants font revenir leurs clients avec Comeback
          </p>
          <div className="mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
            <ul className="anim-marquee flex w-max items-center">
              {[...trustedShops, ...trustedShops].map((name, i) => (
                <li
                  key={`${name}-${i}`}
                  aria-hidden={i >= trustedShops.length || undefined}
                  className="mr-12 whitespace-nowrap font-display text-base font-semibold text-ink/35"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
