"use client";

import { useId, useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

/**
 * Accordéon accessible (FAQ) : un seul panneau ouvert à la fois,
 * navigation clavier native (boutons), animation grid-rows sans layout shift.
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-ink/10 rounded-3xl bg-white shadow-card ring-1 ring-ink/5">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-ink transition-colors hover:bg-leaf-50/50 sm:px-8"
              >
                <span className="text-base sm:text-lg">{item.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-leaf-700 ring-1 ring-leaf-200 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 16 16" className="h-4 w-4">
                    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-ink-soft sm:px-8 sm:text-lg">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
