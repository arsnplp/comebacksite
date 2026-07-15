import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { sectors } from "@/content/sectors";

/**
 * Footer = outil de maillage interne : chaque page sectorielle et
 * ressource y est liée depuis toutes les pages du site.
 */
export function Footer() {
  const columns: { title: string; links: { href: string; label: string }[] }[] = [
    {
      title: "Produit",
      links: [
        { href: "/fonctionnalites", label: "Fonctionnalités" },
        { href: "/tarifs", label: "Tarifs" },
        { href: "/temoignages", label: "Témoignages" },
        { href: "/demo", label: "Réserver une démo" },
        { href: "https://app.getcomeback.fr/login", label: "Essai gratuit 3 mois" },
      ],
    },
    {
      title: "Secteurs",
      links: sectors.map((s) => ({
        href: `/carte-fidelite/${s.slug}`,
        label: `Fidélité ${s.label.toLowerCase()}`,
      })),
    },
    {
      title: "Ressources",
      links: [
        { href: "/blog", label: "Blog" },
        { href: "/guide-fidelisation", label: "Guide de la fidélisation" },
        { href: "/glossaire-fidelisation", label: "Glossaire" },
        { href: "/calculateur", label: "Calculateur de CA perdu" },
        { href: "/carte-fidelite-papier-ou-digitale", label: "Carte papier vs digitale" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { href: "/a-propos", label: "À propos" },
        { href: "/affiliation", label: "Affiliation" },
        { href: "/contact", label: "Contact" },
        { href: "/mentions-legales", label: "Mentions légales" },
        { href: "/politique-confidentialite", label: "Confidentialité (RGPD)" },
        { href: "/cgv", label: "CGV" },
      ],
    },
  ];

  return (
    <footer className="bg-leaf-950 text-leaf-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-leaf-200">
              La carte de fidélité digitale qui fait revenir vos clients. Et votre CA avec.
            </p>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/5 px-4 py-2 text-sm text-leaf-200 ring-1 ring-white/10">
              <svg viewBox="0 0 21 15" className="h-3.5 w-5 shrink-0 rounded-[3px]" aria-hidden="true">
                <rect width="7" height="15" fill="#7A89C9" />
                <rect x="7" width="7" height="15" fill="#F4F5F0" />
                <rect x="14" width="7" height="15" fill="#DB7A80" />
              </svg>
              Conçu en France pour les commerçants indépendants
            </p>
          </div>

          <nav aria-label="Liens du pied de page" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold-400">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="rounded text-[0.95rem] text-leaf-200 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-leaf-300 sm:flex-row">
          <p>© {new Date().getFullYear()} Comeback · getcomeback.fr</p>
          <p>Vos clients reviennent. Votre CA aussi.</p>
        </div>
      </div>
    </footer>
  );
}
