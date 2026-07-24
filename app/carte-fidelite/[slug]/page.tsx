import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTALink } from "@/components/ui/CTALink";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, IconTile } from "@/components/ui/Icon";
import { LinkedParagraph } from "@/components/ui/LinkedParagraph";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";
import { sectorDetails, getSectorDetail } from "@/content/sectors/details";
import { testimonials } from "@/content/testimonials";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return sectorDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorDetail(slug);
  if (!sector) return {};
  return pageMetadata({
    title: sector.metaTitle,
    description: sector.metaDescription,
    path: `/carte-fidelite/${sector.slug}`,
    absoluteTitle: true,
  });
}

export default async function SectorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const sector = getSectorDetail(slug);
  if (!sector) notFound();

  const testimonial = testimonials.find((t) => t.sectorSlug === sector.slug);
  const otherSectors = sectorDetails.filter((s) => s.slug !== sector.slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sector.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Carte de fidélité digitale pour ${sector.label.toLowerCase()}`,
    name: sector.metaTitle,
    description: sector.metaDescription,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "France" },
    url: `${site.url}/carte-fidelite/${sector.slug}`,
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />

      <PageHero
        crumbs={[
          { label: "Secteurs", href: "/secteurs" },
          { label: sector.label, href: `/carte-fidelite/${sector.slug}` },
        ]}
        eyebrow={sector.label}
        title={sector.h1}
        highlight={sector.h1Highlight}
        lead={sector.intro}
      >
        <CTALink href="https://app.getcomeback.fr/login" position={`secteur-${sector.slug}-hero`} size="xl">
          Essayer gratuitement 30 jours
        </CTALink>
        <CTALink href="/demo" position={`secteur-${sector.slug}-hero-demo`} variant="ghost" size="xl">
          Réserver une démo
        </CTALink>
      </PageHero>

      <div className="pb-6">
        <Container wide className="flex flex-wrap justify-center gap-2">
          <Badge>Sans application à télécharger</Badge>
          <Badge>Installé en 10 minutes</Badge>
          <Badge>30 jours gratuits, sans CB</Badge>
        </Container>
      </div>

      {/* Les problèmes du quotidien */}
      <section className="py-16 sm:py-20" aria-labelledby="pains-title">
        <Container>
          <SectionHeader
            eyebrow="Votre quotidien"
            title={`${sector.label} : trois problèmes que vous connaissez par cœur`}
            highlight="par cœur"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {sector.pains.map((pain, i) => (
              <Reveal key={pain.title} delayMs={i * 100} className="h-full">
                <Card hover className="h-full p-8">
                  <IconTile name={sector.icon} tone={i === 1 ? "gold" : "leaf"} className="mb-5" />
                  <h3 className="font-display text-lg font-bold">{pain.title}</h3>
                  <p className="mt-2.5 text-ink-soft">{pain.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Récompenses adaptées au métier */}
      <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="rewards-title">
        <Container>
          <SectionHeader
            eyebrow="Les mécaniques qui marchent"
            title={`Des récompenses pensées pour votre ${sector.label.toLowerCase()}`}
            highlight="pensées pour"
            lead="Vous choisissez la mécanique en 2 clics et pouvez l'ajuster à tout moment. Voici celles qui font leurs preuves dans votre métier."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {sector.rewards.map((reward, i) => (
              <Reveal key={reward.mechanic} delayMs={(i % 2) * 100} className="h-full">
                <div className="flex h-full items-start gap-5 rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink/5">
                  <IconTile name="gift" tone="gold" />
                  <div>
                    <h3 className="font-display text-lg font-bold">{reward.mechanic}</h3>
                    <p className="mt-1.5 text-[0.95rem] text-ink-soft">{reward.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Lancement en 3 étapes */}
      <section className="py-20 sm:py-28" aria-labelledby="steps-title">
        <Container>
          <SectionHeader
            eyebrow="Comment ça se lance"
            title={`Votre carte de fidélité ${sector.label.toLowerCase()} opérationnelle en 10 minutes`}
            highlight="10 minutes"
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {sector.steps.map((step, i) => (
              <li key={step.title} className="h-full">
                <Card hover className="relative h-full overflow-hidden p-8">
                  <span
                    className="pointer-events-none absolute -right-3 -top-7 font-display text-[7.5rem] font-extrabold leading-none text-leaf-100"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="relative mb-5 inline-flex h-10 items-center rounded-full bg-leaf-50 px-4 text-sm font-bold text-leaf-800 ring-1 ring-leaf-200">
                    Étape {i + 1}
                  </span>
                  <h3 className="relative font-display text-xl font-bold">{step.title}</h3>
                  <p className="relative mt-3 text-ink-soft">{step.text}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Témoignage du secteur */}
      {testimonial && (
        <section className="pb-20 sm:pb-28" aria-labelledby="testimonial-title">
          <h2 id="testimonial-title" className="sr-only">
            {`Témoignage : ${sector.label}`}
          </h2>
          <Container className="max-w-4xl">
            <figure className="relative overflow-hidden rounded-3xl bg-leaf-950 p-8 text-white sm:p-12">
              <div className="dot-grid-dark pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="relative grid items-center gap-8 sm:grid-cols-[auto_1fr]">
                <p className="text-center sm:text-left">
                  <span className="font-display text-5xl font-extrabold tracking-tight text-gold-400">
                    {testimonial.metric}
                  </span>
                  <span className="mt-1 block max-w-[12rem] text-sm text-leaf-200">{testimonial.metricLabel}</span>
                </p>
                <div>
                  <blockquote>
                    <p className="text-lg text-leaf-100 sm:text-xl">&laquo;&nbsp;{testimonial.quote}&nbsp;&raquo;</p>
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-leaf-200">
                    {testimonial.name}, {testimonial.business}, {testimonial.city}
                  </figcaption>
                </div>
              </div>
            </figure>
          </Container>
        </section>
      )}

      {/* Contenu long SEO */}
      <section className="pb-20 sm:pb-28" aria-label="En savoir plus">
        <Container className="max-w-3xl space-y-14">
          {sector.seoBlocks.map((block) => (
            <div key={block.title}>
              <h2 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                {block.title}
              </h2>
              {block.paragraphs.map((p, i) => (
                <LinkedParagraph key={i} text={p} className="mt-5 text-lg leading-relaxed text-ink-soft" />
              ))}
            </div>
          ))}
          <p className="rounded-2xl bg-leaf-50 p-6 text-ink-soft ring-1 ring-leaf-200">
            Pour aller plus loin : consultez le{" "}
            <Link href="/guide-fidelisation" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              guide complet de la fidélisation
            </Link>
            , comparez{" "}
            <Link href="/carte-fidelite-papier-ou-digitale" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              carte papier et carte digitale
            </Link>{" "}
            ou estimez votre potentiel avec le{" "}
            <Link href="/calculateur" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              calculateur de CA
            </Link>
            . Pour le détail technique, notre article sur{" "}
            <Link
              href="/blog/carte-fidelite-apple-wallet-google-wallet"
              className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800"
            >
              le fonctionnement de la carte Apple Wallet et Google Wallet
            </Link>{" "}
            explique chaque étape, et la page{" "}
            <Link href="/fonctionnalites" className="font-semibold text-leaf-700 underline underline-offset-4 hover:text-leaf-800">
              fonctionnalités
            </Link>{" "}
            liste tout ce que la carte permet de faire.
          </p>
        </Container>
      </section>

      {/* FAQ secteur */}
      <section className="pb-20 sm:pb-28" aria-labelledby="faq-sector-title">
        <Container className="max-w-4xl">
          <SectionHeader eyebrow="Questions fréquentes" title={`Vos questions, spécial ${sector.label.toLowerCase()}`} />
          <Accordion items={sector.faq} />
        </Container>
      </section>

      {/* Autres secteurs */}
      <section className="bg-cream-2 py-16 sm:py-20" aria-label="Comeback dans les autres métiers">
        <Container>
          <p className="mb-8 text-center font-display text-2xl font-bold tracking-tight">
            Comeback dans les autres métiers
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {otherSectors.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/carte-fidelite/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-medium text-ink shadow-card ring-1 ring-ink/5 transition-all hover:-translate-y-0.5 hover:shadow-card-lg"
                >
                  <Icon name={s.icon} className="h-4.5 w-4.5 text-leaf-700" />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
