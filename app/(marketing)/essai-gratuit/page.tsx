import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { StampCheck } from "@/components/ui/Stamps";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { LeadForm } from "@/components/forms/LeadForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Essai gratuit 30 jours : lancez votre carte de fidélité aujourd'hui",
  description:
    "Créez la carte de fidélité digitale de votre commerce et testez Comeback pendant 30 jours, gratuitement, sans carte bancaire et sans engagement. Votre carte peut être active ce soir.",
  path: "/essai-gratuit",
});

const timeline = [
  {
    title: "Vous recevez votre accès par email",
    text: "Dans les minutes qui suivent, avec un guide de démarrage de 5 minutes.",
  },
  {
    title: "Vous créez votre carte en 10 minutes",
    text: "Récompense, logo, couleurs. Vous imprimez votre QR code et le posez sur le comptoir.",
  },
  {
    title: "Vos premiers clients scannent le jour même",
    text: "Et pendant 30 jours, votre dashboard mesure ce que la fidélité vous rapporte, en euros.",
  },
];

const reassurances = [
  "Sans carte bancaire : rien à annuler si vous arrêtez",
  "Toutes les fonctionnalités du plan Pro incluses pendant l'essai",
  "Vos données restent à vous, exportables à tout moment",
];

export default function TrialPage() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="dot-grid pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)] lg:block"
        aria-hidden="true"
      />
      <Container wide className="relative pb-20 pt-8 sm:pb-28 sm:pt-10">
        <Breadcrumbs items={[{ label: "Essai gratuit", href: "/essai-gratuit" }]} />

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Colonne pitch */}
          <div>
            <Badge variant="gold" className="mb-6">
              30 jours gratuits, sans carte bancaire
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              Votre carte de fidélité peut être <span className="hl-gold">active ce soir</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft text-pretty sm:text-xl">
              Remplissez le formulaire, recevez votre accès, créez votre carte. Pendant 30 jours, vous
              mesurez ce que la fidélité rapporte à votre commerce. Ensuite, vous décidez.
            </p>

            <ol className="mt-10 space-y-6">
              {timeline.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-leaf-700 font-display text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold">{item.title}</h2>
                    <p className="mt-1 text-ink-soft">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="mt-10 space-y-3 border-t border-ink/10 pt-8">
              {reassurances.map((r) => (
                <li key={r} className="flex items-start gap-3 text-ink-soft">
                  <Icon name="checkCircle" className="mt-0.5 h-5 w-5 shrink-0 text-leaf-600" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne formulaire */}
          <div>
            <div className="rounded-3xl bg-white p-6 shadow-card-lg ring-1 ring-ink/5 sm:p-8">
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-700">
                <StampCheck className="h-5 w-5" />
                Commencer l&apos;essai
              </p>
              <h2 className="font-display text-2xl font-bold">Dites-nous qui vous êtes</h2>
              <p className="mb-6 mt-1.5 text-sm text-ink-soft">
                30 secondes de formulaire, 0 carte bancaire demandée.
              </p>
              <LeadForm kind="trial" submitLabel="Recevoir mon accès gratuit" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
