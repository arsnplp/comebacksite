import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/seo";

export type Crumb = {
  label: string;
  href: string;
};

/**
 * Fil d'Ariane visible + balisage BreadcrumbList (SEO).
 * « Accueil » est ajouté automatiquement en première position.
 */
export function Breadcrumbs({ items, className = "" }: { items: Crumb[]; className?: string }) {
  const all: Crumb[] = [{ label: "Accueil", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${site.url}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  return (
    <nav aria-label="Fil d'Ariane" className={`text-sm ${className}`}>
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((crumb, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-ink-faint" aria-hidden="true">
                  <path d="m6 4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {isLast ? (
                <span aria-current="page" className="font-medium text-ink">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="rounded text-ink-soft transition-colors hover:text-ink">
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
