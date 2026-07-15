import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Un package-lock.json existe dans le dossier parent : on fixe la racine ici
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Liens courts des partenaires : l'attribution est gérée côté app
      {
        source: "/ref/:code",
        destination: "https://app.getcomeback.fr/ref/:code",
        permanent: true,
      },
      {
        source: "/partenaires",
        destination: "/affiliation",
        permanent: true,
      },
      // URLs renommées le 15 juillet 2026 (mots-clés dans l'URL)
      {
        source: "/secteurs/:slug",
        destination: "/carte-fidelite/:slug",
        permanent: true,
      },
      {
        source: "/ressources/guide-fidelisation",
        destination: "/guide-fidelisation",
        permanent: true,
      },
      {
        source: "/ressources/glossaire",
        destination: "/glossaire-fidelisation",
        permanent: true,
      },
      {
        source: "/comparatifs/carte-papier-vs-digitale",
        destination: "/carte-fidelite-papier-ou-digitale",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
