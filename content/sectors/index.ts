/**
 * Liste des secteurs — alimente la nav, le footer et le hub /secteurs.
 * Le contenu complet de chaque page sectorielle (1200+ mots) sera ajouté
 * dans des fichiers dédiés à l'étape « pages sectorielles ».
 */
export type SectorSummary = {
  slug: string;
  /** Libellé court pour la nav et le footer */
  label: string;
  /** Accroche d'une ligne pour le hub et les cartes */
  pitch: string;
};

export const sectors: SectorSummary[] = [
  {
    slug: "restaurant",
    label: "Restaurant",
    pitch: "Faites revenir vos clients à table plus souvent.",
  },
  {
    slug: "coiffeur",
    label: "Salon de coiffure",
    pitch: "Raccourcissez le délai entre deux rendez-vous.",
  },
  {
    slug: "boulangerie",
    label: "Boulangerie",
    pitch: "Transformez les passants en habitués du matin.",
  },
  {
    slug: "boutique",
    label: "Boutique & commerce",
    pitch: "Augmentez la fréquence d'achat de vos clients.",
  },
  {
    slug: "institut-beaute",
    label: "Institut de beauté",
    pitch: "Fidélisez entre deux soins, sans relance manuelle.",
  },
  {
    slug: "cafe-bar",
    label: "Café & bar",
    pitch: "Le 10e café offert, sans carte en carton.",
  },
  {
    slug: "food-truck",
    label: "Food truck",
    pitch: "Vos clients vous suivent, où que vous soyez.",
  },
  {
    slug: "franchise",
    label: "Franchise & réseaux",
    pitch: "Un programme commun, des stats par établissement.",
  },
];
