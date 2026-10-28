import { CTALink } from "@/components/ui/CTALink";
import { CTA_LABEL, signupUrl } from "@/lib/links";
import type { BillingCycle } from "@/content/pricing";

type TrialCTAProps = {
  /** Position du CTA pour l'analytics : "header", "hero", "pricing"… */
  position: string;
  variant?: "primary" | "dark" | "ghost" | "light";
  size?: "md" | "lg" | "xl";
  className?: string;
  /** Période choisie dans le sélecteur de prix : transmise à l'inscription. */
  billing?: BillingCycle;
};

/**
 * Le seul CTA du site : l'essai gratuit de 30 jours, qui ouvre la création
 * de compte dans l'app. Même libellé et même destination partout (règle de
 * l'un) : ne pas créer de variante ailleurs.
 */
export function TrialCTA({ position, variant = "primary", size = "lg", className = "", billing }: TrialCTAProps) {
  return (
    <CTALink href={signupUrl(billing)} position={position} variant={variant} size={size} className={className}>
      {CTA_LABEL}
    </CTALink>
  );
}
