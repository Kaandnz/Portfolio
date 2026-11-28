"use client";

import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolioData";
import LanguageLink from "@/components/ui/LanguageLink";

/**
 * Sticky translucent navigation bar: clean wordmark, serene section links,
 * fixed-order TR/EN switcher, and compact contact pill.
 */
export default function Navbar() {
  const { language, t } = useLanguage();

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#own", label: t.nav.own },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
  ];

  const langControls = (["tr", "en"] as const).map((code, idx) => {
    const label = code === language ? t.lang.code : t.lang.switchToCode;
    return (
      <span key={code} className="inline-flex items-center">
        {idx > 0 && (
          <span aria-hidden="true" className="px-1 text-ink-muted/60">
            /
          </span>
        )}
        {code === language ? (
          <span aria-current="true" className="data-mono px-1 text-[12px] font-medium text-ink">
            {label}
            <span className="sr-only"> ({t.lang.name})</span>
          </span>
        ) : (
          <LanguageLink className="data-mono inline-flex min-h-9 items-center px-1 text-[12px] font-medium text-ink-muted transition-colors duration-(--duration-snap) hover:text-ink">
            {label}
            <span className="sr-only"> ({t.lang.switchTo})</span>
          </LanguageLink>
        )}
      </span>
    );
  });

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/82 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only-focusable absolute top-2 left-4 z-50 inline-flex min-h-10 items-center rounded-full border border-line-strong bg-surface-elevated px-4 text-[13px] font-medium text-ink"
      >
        {t.a11y.skipToContent}
      </a>

      <div className="page-shell flex h-14 items-center justify-between gap-4">
        <div className="flex min-w-0 items-baseline gap-2.5">
          <a
            href="#main"
            className="truncate text-[15px] font-semibold tracking-[-0.02em] text-ink transition-opacity hover:opacity-85"
          >
            {personalInfo.name}
          </a>
          <span aria-hidden="true" className="hidden text-ink-muted/50 sm:inline">
            ·
          </span>
          <span className="hidden truncate text-[12.5px] text-ink-muted sm:inline">{t.hero.location}</span>
        </div>

        <nav aria-label={t.a11y.sections} className="hidden min-[900px]:block">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13.5px] font-medium text-ink-secondary transition-colors duration-(--duration-snap) hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <div className="flex items-center">{langControls}</div>
          <a
            href="#contact"
            className="inline-flex min-h-9 items-center rounded-full bg-ink px-3.5 text-[13px] font-medium text-canvas transition-opacity duration-(--duration-snap) hover:opacity-90"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>

      <nav
        aria-label={t.a11y.sections}
        className="border-t border-line/70 min-[900px]:hidden"
      >
        <ul className="page-shell flex items-center gap-5 overflow-x-auto py-2 whitespace-nowrap [scrollbar-width:none]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[12.5px] font-medium text-ink-secondary transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
