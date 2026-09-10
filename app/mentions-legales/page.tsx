import type { Metadata } from "next";
import { LegalArticle, type LegalSection } from "@/components/ui/LegalArticle";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site getcomeback.fr : éditeur, hébergeur, propriété intellectuelle et contact.",
  path: "/mentions-legales",
});

const sections: LegalSection[] = [
  {
    title: "1. Éditeur du site",
    body: [
      "Le site getcomeback.fr est édité par NAIROX FORMATION, société par actions simplifiée (SAS) au capital de 200 euros, immatriculée au RCS de Nanterre sous le numéro 995 237 567, dont le siège social est situé 53 rue des Alouettes, 92000 Nanterre.",
      {
        list: [
          "SIRET (siège) : 995 237 567 00012",
          "Code APE / NAF : 8559A (formation continue d'adultes)",
          "Numéro de TVA intracommunautaire : FR42995237567",
        ],
      },
      "Directeur de la publication : Arsène Lecoq, Président de NAIROX FORMATION.",
      "Contact : arsene.lecoq@getcomeback.fr.",
    ],
  },
  {
    title: "2. Hébergement",
    body: [
      "Le site est hébergé par Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre, dans le respect des mesures d'encadrement des transferts de données prévues par le RGPD.",
    ],
  },
  {
    title: "3. Propriété intellectuelle",
    body: [
      "L'ensemble des éléments du site (textes, visuels, logos, marque Comeback, charte graphique, code) est protégé par le droit de la propriété intellectuelle et reste la propriété exclusive de l'éditeur, sauf mention contraire.",
      "Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite et constitue une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.",
    ],
  },
  {
    title: "4. Responsabilité",
    body: [
      "L'éditeur s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site, sans pouvoir la garantir. Les informations fournies le sont à titre indicatif et ne dispensent pas d'une analyse personnalisée. L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de son utilisation.",
      "Le site peut contenir des liens vers des sites tiers : l'éditeur n'exerce aucun contrôle sur leur contenu et décline toute responsabilité à leur égard.",
    ],
  },
  {
    title: "5. Données personnelles",
    body: [
      "Le traitement des données personnelles collectées via le site est décrit dans la politique de confidentialité, accessible à l'adresse getcomeback.fr/politique-confidentialite.",
    ],
  },
];

export default function LegalNoticePage() {
  return (
    <LegalArticle
      title="Mentions légales"
      updated="10 septembre 2026"
      crumbLabel="Mentions légales"
      crumbHref="/mentions-legales"
      sections={sections}
    />
  );
}
