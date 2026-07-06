import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { RevenueTeaser } from "@/components/sections/RevenueTeaser";
import { Steps } from "@/components/sections/Steps";
import { Testimonials } from "@/components/sections/Testimonials";
import { Benefits } from "@/components/sections/Benefits";
import { DashboardProof } from "@/components/sections/DashboardProof";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, site } from "@/lib/seo";
import { homeFaq } from "@/content/faq";
import { plans } from "@/content/pricing";

export const metadata: Metadata = pageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  url: site.url,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: site.description,
  offers: plans
    .filter((p) => p.price !== null)
    .map((p) => ({
      "@type": "Offer",
      name: p.name,
      price: p.price,
      priceCurrency: "EUR",
    })),
  // aggregateRating : à activer quand les premiers avis vérifiés seront collectés
  // aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Hero />
      <RevenueTeaser />
      <Steps />
      <Testimonials />
      <Benefits />
      <DashboardProof />
      <PricingPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
