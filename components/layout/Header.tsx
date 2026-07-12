"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { CTALink } from "@/components/ui/CTALink";
import { sectors } from "@/content/sectors";

const navLinks = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/affiliation", label: "Affiliation" },
  { href: "/blog", label: "Blog" },
];

/** Header sticky : se compacte au scroll, dropdown Secteurs, menu mobile. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le dropdown Secteurs au clic extérieur / Échap
  useEffect(() => {
    if (!sectorsOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setSectorsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSectorsOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [sectorsOpen]);

  // Verrouille le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Soulignement animé : un trait or grandit depuis la gauche au survol */
  const linkCls =
    "relative rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink after:absolute after:inset-x-3.5 after:bottom-0.5 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-gold-500 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-ink/5 bg-cream/90 shadow-sm backdrop-blur-md" : "bg-cream"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`flex items-center rounded-lg transition-all duration-300 ${scrolled ? "py-2.5" : "py-4"}`}
          aria-label="Comeback, retour à l'accueil"
        >
          <Logo />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          <Link href="/fonctionnalites" className={linkCls}>
            Fonctionnalités
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className={`${linkCls} inline-flex items-center gap-1`}
              aria-expanded={sectorsOpen}
              aria-haspopup="true"
              onClick={() => setSectorsOpen((o) => !o)}
            >
              Secteurs
              <svg
                viewBox="0 0 16 16"
                className={`h-3.5 w-3.5 transition-transform ${sectorsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {sectorsOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-card-lg ring-1 ring-ink/5">
                <ul>
                  {sectors.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/secteurs/${s.slug}`}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-leaf-50"
                        onClick={() => setSectorsOpen(false)}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-1 border-t border-ink/5 pt-1">
                  <Link
                    href="/secteurs"
                    className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-leaf-700 transition-colors hover:bg-leaf-50"
                    onClick={() => setSectorsOpen(false)}
                  >
                    Tous les secteurs →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
            <Link key={l.href} href={l.href} className={linkCls}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTALink href="https://app.getcomeback.fr/login" position="header" size="md">
            Essai gratuit 30 jours
          </CTALink>
        </div>

        {/* Burger mobile */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="menu-mobile"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="max-h-[calc(100dvh-64px)] overflow-y-auto border-t border-ink/5 bg-cream px-4 pb-8 pt-4 lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-xl px-4 py-3 text-lg font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 px-4 text-sm font-semibold uppercase tracking-wider text-ink-soft">Secteurs</p>
          <ul className="mt-1 grid grid-cols-2 gap-1">
            {sectors.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/secteurs/${s.slug}`}
                  className="block rounded-xl px-4 py-2.5 text-[0.95rem] font-medium text-ink-soft"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 px-4">
            <CTALink href="https://app.getcomeback.fr/login" position="mobile-menu" className="w-full">
              Essayer gratuitement 30 jours
            </CTALink>
            <p className="mt-3 text-center text-sm text-ink-soft">Sans carte bancaire · Sans engagement</p>
          </div>
        </nav>
      )}
    </header>
  );
}
