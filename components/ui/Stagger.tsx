"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

type StaggerProps = {
  children: ReactNode[] | ReactNode;
  /** Classes du conteneur (c'est lui qui porte la grille) */
  className?: string;
  /** Décalage entre chaque enfant, en ms */
  staggerDelay?: number;
  /** Distance de translation initiale, en px */
  distance?: number;
};

/**
 * Révélation en cascade au scroll : chaque enfant apparaît l'un après
 * l'autre quand le conteneur entre dans le viewport.
 * Adapté du composant « Stagger List » (@afridho, 21st.dev) à notre DA :
 * easing spring, une seule apparition, respect de prefers-reduced-motion.
 */
export function Stagger({ children, className = "", staggerDelay = 110, distance = 26 }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          setShown(true);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <div
          className="h-full"
          style={
            reduced
              ? undefined
              : {
                  opacity: shown ? 1 : 0,
                  transform: shown ? "translate3d(0,0,0)" : `translate3d(0, ${distance}px, 0)`,
                  transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${i * staggerDelay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * staggerDelay}ms`,
                }
          }
        >
          {child}
        </div>
      ))}
    </div>
  );
}
