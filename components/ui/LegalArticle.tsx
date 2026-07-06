import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export type LegalSection = {
  title: string;
  /** Chaque entrée : paragraphe (string) ou liste à puces */
  body: (string | { list: string[] })[];
};

type LegalArticleProps = {
  title: string;
  /** Date de dernière mise à jour, affichée sous le titre (ex. "4 juillet 2026") */
  updated: string;
  crumbLabel: string;
  crumbHref: string;
  intro?: string;
  sections: LegalSection[];
};

/** Gabarit commun des pages légales : sobre, lisible, hiérarchie nette. */
export function LegalArticle({ title, updated, crumbLabel, crumbHref, intro, sections }: LegalArticleProps) {
  return (
    <Container className="max-w-3xl pb-20 pt-8 sm:pb-28 sm:pt-10">
      <Breadcrumbs items={[{ label: crumbLabel, href: crumbHref }]} />
      <h1 className="mt-10 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-ink-soft">Dernière mise à jour : {updated}</p>
      {intro && <p className="mt-6 text-lg leading-relaxed text-ink-soft">{intro}</p>}

      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{section.title}</h2>
            <div className="mt-3 space-y-3">
              {section.body.map((block, i) =>
                typeof block === "string" ? (
                  <p key={i} className="leading-relaxed text-ink-soft">
                    {block}
                  </p>
                ) : (
                  <ul key={i} className="list-disc space-y-1.5 pl-6 text-ink-soft marker:text-leaf-600">
                    {block.list.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
