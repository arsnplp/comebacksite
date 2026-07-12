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
    ];
  },
};

export default nextConfig;
