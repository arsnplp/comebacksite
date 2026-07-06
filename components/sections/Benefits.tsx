import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Stagger } from "@/components/ui/Stagger";

/* Icônes maison, trait 1.8, cohérentes avec le motif tampon */
function Icon({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-50 text-leaf-700 ring-1 ring-leaf-200 transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

const benefits = [
  {
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 10h18M7 15h4" />
      </>
    ),
    title: "Ils n'oublient jamais leur carte",
    text: "Elle vit dans leur téléphone, dans le Wallet, avec vos couleurs. Impossible à perdre au fond d'un sac.",
  },
  {
    icon: (
      <>
        <path d="M12 4a6 6 0 0 0-6 6v3l-1.5 3h15L18 13v-3a6 6 0 0 0-6-6Z" />
        <path d="M10 19a2 2 0 0 0 4 0" />
      </>
    ),
    title: "Ils reviennent avant d'aller chez le concurrent",
    text: "Notification automatique quand ils ne sont pas venus depuis X jours. Vous restez dans leur poche, et dans leur tête.",
  },
  {
    icon: (
      <>
        <circle cx="9" cy="8.5" r="3.5" />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
        <circle cx="17" cy="9.5" r="2.5" />
        <path d="M15.5 14.5a4.5 4.5 0 0 1 5 4.5" />
      </>
    ),
    title: "Vous savez enfin qui sont vos clients",
    text: "Prénoms, fréquence, dépenses : votre fichier client se construit tout seul, à chaque scan.",
  },
  {
    icon: (
      <>
        <path d="M4 19V9m5.3 10V5m5.4 14v-8m5.3 8V11" />
      </>
    ),
    title: "Le CA généré, en euros, sur un écran",
    text: "Pas de vanity metrics. Votre dashboard vous dit ce que la fidélité vous rapporte, en euros.",
  },
  {
    icon: (
      <>
        <path d="M6 20c8 0 13-5 13-14-9 0-14 5-14 13" />
        <path d="M6 20c0-6 3-10 8-12" />
      </>
    ),
    title: "Zéro carte imprimée, zéro tampon perdu",
    text: "Fini le papier. Écologique, et impossible à frauder avec un tampon acheté sur internet.",
  },
  {
    icon: (
      <>
        <path d="M4 11v3l10 4V6L4 11Z" />
        <path d="M14 8.5c2 .5 3 1.5 3 3s-1 2.5-3 3" />
        <path d="M6 15.5V18a1.5 1.5 0 0 0 3 0v-1.4" />
      </>
    ),
    title: "Vos promos envoyées en 30 secondes",
    text: "Une offre flash un jour de pluie ? Notifiez tous vos clients en 2 clics, sans imprimer un seul flyer.",
  },
];

/** Section 5 — Bénéfices : titre = résultat, description = comment. */
export function Benefits() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="benefits-title">
      <Container>
        <SectionHeader
          eyebrow="Ce que vous y gagnez"
          title="Tout ce qu'il faut pour faire revenir vos clients. Rien de plus."
          highlight="faire revenir vos clients"
        />
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title} hover className="h-full p-8">
              <Icon>{b.icon}</Icon>
              <h3 className="font-display text-lg font-bold">{b.title}</h3>
              <p className="mt-2.5 text-ink-soft">{b.text}</p>
            </Card>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
