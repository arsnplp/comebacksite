import type { Metadata } from "next";

/** Configuration globale du site — une seule source de vérité. */
export const site = {
  name: "Comeback",
  url: "https://getcomeback.fr",
  title: "Carte de fidélité en ligne pour commerçants | Comeback",
  description:
    "Créez votre carte de fidélité digitale en 10 minutes. Vos clients l'ajoutent en 1 scan et reviennent 2 fois plus souvent. Essai gratuit 3 mois.",
  locale: "fr_FR",
  // [PLACEHOLDER] — comptes réseaux sociaux à créer / confirmer
  sameAs: [
    "https://www.linkedin.com/company/getcomeback",
    "https://www.instagram.com/getcomeback.fr",
  ],
} as const;

/**
 * Routes du site incluses dans le sitemap.
 * ⚠️ Ajouter chaque nouvelle page ici au fur et à mesure des étapes.
 * (Les articles de blog sont ajoutés dynamiquement dans app/sitemap.ts.)
 */
export const routes: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/fonctionnalites", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tarifs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/demo", priority: 0.7, changeFrequency: "monthly" },
  { path: "/affiliation", priority: 0.7, changeFrequency: "monthly" },
  { path: "/temoignages", priority: 0.7, changeFrequency: "weekly" },
  { path: "/secteurs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/carte-fidelite/restaurant", priority: 0.8, changeFrequency: "monthly" },
  { path: "/carte-fidelite/coiffeur", priority: 0.8, changeFrequency: "monthly" },
  { path: "/carte-fidelite/boulangerie", priority: 0.8, changeFrequency: "monthly" },
  { path: "/carte-fidelite/boutique", priority: 0.8, changeFrequency: "monthly" },
  { path: "/carte-fidelite/institut-beaute", priority: 0.8, changeFrequency: "monthly" },
  { path: "/carte-fidelite/cafe-bar", priority: 0.8, changeFrequency: "monthly" },
  { path: "/carte-fidelite/food-truck", priority: 0.8, changeFrequency: "monthly" },
  { path: "/carte-fidelite/franchise", priority: 0.8, changeFrequency: "monthly" },
  { path: "/calculateur", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/guide-fidelisation", priority: 0.6, changeFrequency: "monthly" },
  { path: "/glossaire-fidelisation", priority: 0.6, changeFrequency: "monthly" },
  { path: "/carte-fidelite-papier-ou-digitale", priority: 0.6, changeFrequency: "monthly" },
  { path: "/a-propos", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/mentions-legales", priority: 0.3, changeFrequency: "monthly" },
  { path: "/politique-confidentialite", priority: 0.3, changeFrequency: "monthly" },
  { path: "/cgv", priority: 0.3, changeFrequency: "monthly" },
];

type PageMeta = {
  title: string;
  description: string;
  /** Chemin canonique, ex. "/tarifs" */
  path: string;
  /** Image OG spécifique (sinon l'image par défaut du site) */
  ogImage?: string;
  /**
   * true = titre utilisé tel quel (sans le suffixe "| Comeback" du template).
   * À utiliser quand le titre contient déjà la marque (ex. homepage).
   */
  absoluteTitle?: boolean;
};

/** Construit les métadonnées complètes d'une page (canonical, OG, Twitter). */
export function pageMetadata({ title, description, path, ogImage, absoluteTitle = false }: PageMeta): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [
        {
          url: ogImage ?? "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Comeback : la carte de fidélité digitale qui fait revenir vos clients",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
