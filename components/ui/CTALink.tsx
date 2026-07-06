"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import { buttonClasses } from "@/components/ui/Button";

type CTALinkProps = {
  children: ReactNode;
  href: string;
  /** Position du CTA pour l'analytics : "header", "hero", "calculator"… */
  position: string;
  variant?: "primary" | "dark" | "ghost" | "light";
  size?: "md" | "lg" | "xl";
  className?: string;
  /** false pour masquer la flèche animée au survol */
  withArrow?: boolean;
};

/** Lien-bouton tracké — à utiliser pour tous les CTA de conversion. */
export function CTALink({
  children,
  href,
  position,
  variant = "primary",
  size = "lg",
  className = "",
  withArrow = true,
}: CTALinkProps) {
  return (
    <Link
      href={href}
      className={buttonClasses(variant, size, className)}
      onClick={() => trackEvent("cta_click", { position })}
    >
      {children}
      {withArrow && (
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="h-4 w-0 -translate-x-1.5 opacity-0 transition-all duration-300 ease-out group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:w-4 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
        >
          <path
            d="M3 10h13m-5-5 5 5-5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
}
