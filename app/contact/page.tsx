import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { StampCheck } from "@/components/ui/Stamps";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact : une question sur Comeback ? Réponse sous 24 h",
  description:
    "Une question sur la carte de fidélité digitale Comeback, les tarifs ou votre cas particulier ? Écrivez-nous : nous répondons sous 24 h ouvrées.",
  path: "/contact",
});

const CONTACT_EMAIL = "arsene.lecoq@getcomeback.fr";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: CONTACT_EMAIL,
    availableLanguage: "French",
  },
};

const otherChannels: { icon: IconName; title: string; text: string; href: string; linkLabel: string }[] = [
  {
    icon: "calendar",
    title: "Vous préférez en parler de vive voix ?",
    text: "Réservez une démo de 20 minutes : produit en conditions réelles et réponses en direct.",
    href: "/demo",
    linkLabel: "Réserver une démo",
  },
  {
    icon: "zap",
    title: "Vous voulez juste essayer ?",
    text: "L'essai gratuit se lance sans rendez-vous et sans carte bancaire, en 10 minutes.",
    href: "https://app.getcomeback.fr/login",
    linkLabel: "Commencer l'essai gratuit",
  },
  {
    icon: "book",
    title: "Votre réponse est peut-être déjà écrite",
    text: "Installation, Wallet, données, résiliation : les questions les plus fréquentes ont leur réponse.",
    href: "/#faq",
    linkLabel: "Lire la FAQ",
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <JsonLd data={contactJsonLd} />
      <Container wide className="relative pb-20 pt-8 sm:pb-28 sm:pt-10">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

        <div className="mt-10 grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-700">
              <StampCheck className="h-5 w-5" />
              Contact
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              Une question ? On vous répond <span className="hl-gold">sous 24 h</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft text-pretty">
              Tarifs, cas particulier, presse ou partenariat : écrivez-nous via le formulaire ou
              directement par email à{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
                {CONTACT_EMAIL}
              </a>
              .
            </p>

            <div className="mt-10 space-y-6">
              {otherChannels.map((c) => (
                <div key={c.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-leaf-50 text-leaf-700 ring-1 ring-leaf-200">
                    <Icon name={c.icon} />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold">{c.title}</h2>
                    <p className="mt-1 text-ink-soft">{c.text}</p>
                    <Link href={c.href} className="mt-1.5 inline-flex items-center gap-1.5 font-semibold text-leaf-700 hover:text-leaf-800">
                      {c.linkLabel}
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-3xl bg-white p-6 shadow-card-lg ring-1 ring-ink/5 sm:p-8">
              <h2 className="font-display text-2xl font-bold">Envoyez-nous un message</h2>
              <p className="mb-6 mt-1.5 text-sm text-ink-soft">
                Réponse sous 24 h ouvrées, par un humain de l&apos;équipe.
              </p>
              <LeadForm kind="contact" submitLabel="Envoyer mon message" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
