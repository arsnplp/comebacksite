"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  /**
   * Format d'affichage (prop sérialisable : utilisable depuis un composant
   * serveur) : "int" → 1 234 · "euros" → 1 234 €
   */
  kind?: "int" | "euros";
  className?: string;
  durationMs?: number;
};

const formatters = {
  int: (n: number) => new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n),
  euros: (n: number) =>
    new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n),
};

/**
 * Compteur animé : démarre quand l'élément entre dans le viewport
 * (IntersectionObserver), puis suit chaque changement de `value`.
 * Respecte prefers-reduced-motion (affichage instantané).
 */
export function AnimatedNumber({ value, kind = "int", className = "", durationMs = 900 }: AnimatedNumberProps) {
  const format = formatters[kind];
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const currentRef = useRef(0);
  const startedRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animateTo = (target: number) => {
      cancelAnimationFrame(rafRef.current);
      if (reduced) {
        currentRef.current = target;
        setDisplay(target);
        return;
      }
      const from = currentRef.current;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        const next = from + (target - from) * eased;
        currentRef.current = next;
        setDisplay(next);
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    if (startedRef.current) {
      animateTo(value);
      return () => cancelAnimationFrame(rafRef.current);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startedRef.current = true;
          io.disconnect();
          animateTo(value);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {format(Math.round(display))}
    </span>
  );
}
