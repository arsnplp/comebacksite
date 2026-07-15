import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Icon, type IconName } from "@/components/ui/Icon";
import { StampCheck } from "@/components/ui/Stamps";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Réserver une démo : Comeback en 20 minutes, avec vos questions",
  description:
    "Réservez une démonstration de 20 minutes de la carte de fidélité digitale Comeback : le parcours client réel, le dashboard, et les réponses à vos questions. Sans engagement.",
  path: "/demo",
});

const demoContent: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "smartphone",
    title: "Le parcours client, en conditions réelles",
    text: "Vous scannez, vous ajoutez la carte à votre propre téléphone, vous recevez la notification. Comme vos clients le feront.",
  },
  {
    icon: "chart",
    title: "Le dashboard avec des données concrètes",
    text: "Visites, clients fidélisés, chiffre d'affaires généré : vous voyez exactement ce que vous piloterez au quotidien.",
  },
  {
    icon: "message",
    title: "Vos questions, votre cas particulier",
    text: "Récompense adaptée à votre métier, transition depuis vos cartes papier, cas multi-établissements : on regarde votre situation.",
  },
];

export default function DemoPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="dot-grid pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] lg:block"
        aria-hidden="true"
      />
      <Container wide className="relative pb-20 pt-8 sm:pb-28 sm:pt-10">
        <Breadcrumbs items={[{ label: "Démo", href: "/demo" }]} />

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Badge variant="gold" className="mb-6">
              20 minutes, en visio, sans engagement
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              Voyez Comeback tourner <span className="hl-gold">avant de vous lancer</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft text-pretty sm:text-xl">
              Un membre de l&apos;équipe vous montre le produit en vrai, répond à vos questions et vous aide
              à choisir la bonne mécanique pour votre commerce. Pas de tunnel commercial, promis.
            </p>

            <div className="mt-10 space-y-6">
              {demoContent.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-leaf-50 text-leaf-700 ring-1 ring-leaf-200">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold">{item.title}</h2>
                    <p className="mt-1 text-ink-soft">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 rounded-2xl bg-leaf-50 p-5 text-ink-soft ring-1 ring-leaf-200">
              Pressé ? Pas besoin de démo pour commencer :{" "}
              <Link href="https://app.getcomeback.fr/login" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
                l&apos;essai gratuit de 3 mois
              </Link>{" "}
              se lance seul, en 10 minutes.
            </p>
          </div>

          <div>
            <div className="rounded-3xl bg-white p-6 shadow-card-lg ring-1 ring-ink/5 sm:p-8">
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-700">
                <StampCheck className="h-5 w-5" />
                Réserver ma démo
              </p>
              <h2 className="font-display text-2xl font-bold">Choisissons un créneau</h2>
              <p className="mb-6 mt-1.5 text-sm text-ink-soft">
                Nous revenons vers vous sous 24 h ouvrées avec des propositions de créneaux.
              </p>
              <LeadForm kind="demo" submitLabel="Réserver ma démo de 20 minutes" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
