import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { homeFaq } from "@/content/faq";

/** Section 8 — FAQ : objections + SEO (le JSON-LD FAQPage est émis par la page). */
export function FAQSection() {
  return (
    <section className="bg-cream-2 py-20 sm:py-28" aria-labelledby="faq-title">
      <Container className="max-w-4xl">
        <SectionHeader
          eyebrow="Questions fréquentes"
          title="Tout ce que vous vous demandez avant d'essayer"
          lead="Et si la réponse n'y est pas : arsene.lecoq@getcomeback.fr, un humain vous répond."
        />
        <Accordion items={homeFaq} />
      </Container>
    </section>
  );
}
