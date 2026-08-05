import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";
import { IconTile, type IconName } from "@/components/ui/Icon";
import { CTALink } from "@/components/ui/CTALink";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Connexion : commerçant, client ou affilié",
  description:
    "Accédez à votre espace Comeback : dashboard commerçant, cartes de fidélité client ou espace partenaire affilié.",
  path: "/connexion",
});

const profiles: {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  cta: string;
  footer?: { label: string; href: string };
}[] = [
  {
    icon: "store",
    title: "Commerçant",
    description: "Gérez vos cartes de fidélité, vos clients et vos statistiques depuis votre dashboard.",
    href: "https://app.getcomeback.fr/login",
    cta: "Me connecter",
    footer: { label: "Pas encore de compte ? Essai gratuit", href: "https://app.getcomeback.fr/login" },
  },
  {
    icon: "card",
    title: "Client",
    description: "Consultez vos cartes de fidélité, vos tampons et vos récompenses en cours.",
    href: "https://app.getcomeback.fr/client/cards",
    cta: "Voir mes cartes",
  },
  {
    icon: "trend",
    title: "Affilié",
    description: "Suivez vos filleuls, votre palier et vos commissions depuis votre espace partenaire.",
    href: "https://app.getcomeback.fr/affilies",
    cta: "Me connecter",
    footer: { label: "Pas encore partenaire ? Inscription gratuite", href: "/affiliation" },
  },
];

export default function ConnexionPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Connexion", href: "/connexion" }]}
        eyebrow="Connexion"
        title="Connectez-vous à votre espace Comeback"
        lead="Trois espaces, trois usages : choisissez celui qui vous correspond."
      />

      <section className="pb-20 sm:pb-28" aria-label="Choisir son espace de connexion">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {profiles.map((p) => (
              <Card key={p.title} hover className="flex h-full flex-col p-8 text-center">
                <IconTile name={p.icon} className="mx-auto" />
                <h2 className="mt-5 font-display text-xl font-bold">{p.title}</h2>
                <p className="mt-2.5 flex-1 text-ink-soft">{p.description}</p>
                <div className="mt-6">
                  <CTALink href={p.href} position={`connexion-${p.title.toLowerCase()}`} className="w-full">
                    {p.cta}
                  </CTALink>
                </div>
                {p.footer && (
                  <Link
                    href={p.footer.href}
                    className="mt-4 text-sm font-medium text-leaf-700 underline underline-offset-4 hover:text-leaf-800"
                  >
                    {p.footer.label}
                  </Link>
                )}
              </Card>
            ))}
          </div>

          <p className="mt-12 text-center text-ink-soft">
            Une question sur votre accès ?{" "}
            <Link href="/contact" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              Contactez-nous
            </Link>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
