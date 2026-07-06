import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { StampCheck } from "@/components/ui/Stamps";
import { Breadcrumbs, type Crumb } from "@/components/seo/Breadcrumbs";

type PageHeroProps = {
  /** Fil d'Ariane (sans « Accueil », ajouté automatiquement) */
  crumbs?: Crumb[];
  eyebrow?: string;
  title: string;
  /** Sous-chaîne exacte du titre surlignée au marqueur ambre */
  highlight?: string;
  lead?: string;
  /** CTA, badges… affichés sous le chapeau */
  children?: ReactNode;
  align?: "center" | "left";
};

/** En-tête standard des pages intérieures : fil d'Ariane, H1 display, chapeau. */
export function PageHero({ crumbs, eyebrow, title, highlight, lead, children, align = "center" }: PageHeroProps) {
  const centered = align === "center";

  let titleContent: ReactNode = title;
  if (highlight && title.includes(highlight)) {
    const [before, after] = title.split(highlight);
    titleContent = (
      <>
        {before}
        <span className="hl-gold">{highlight}</span>
        {after}
      </>
    );
  }

  return (
    <section className="relative overflow-hidden">
      <div
        className="dot-grid pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] lg:block"
        aria-hidden="true"
      />
      <Container wide className="relative pb-12 pt-8 sm:pb-16 sm:pt-10">
        {crumbs && crumbs.length > 0 && <Breadcrumbs items={crumbs} className={centered ? "justify-center" : ""} />}
        <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${crumbs ? "mt-8 sm:mt-10" : "mt-2"}`}>
          {eyebrow && (
            <p
              className={`mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-700 ${
                centered ? "justify-center" : ""
              }`}
            >
              <StampCheck className="h-5 w-5" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            {titleContent}
          </h1>
          {lead && <p className={`mt-6 text-lg text-ink-soft text-pretty sm:text-xl ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{lead}</p>}
          {children && (
            <div className={`mt-8 flex flex-col gap-4 sm:flex-row sm:items-center ${centered ? "items-center justify-center" : "items-start"}`}>
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
