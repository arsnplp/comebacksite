import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  /** hover = légère élévation au survol */
  hover?: boolean;
};

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`group rounded-3xl bg-white shadow-card ring-1 ring-ink/5 ${
        hover
          ? "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg hover:ring-leaf-200"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
