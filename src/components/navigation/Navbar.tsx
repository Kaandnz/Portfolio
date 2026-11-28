"use client";

import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolioData";
import LanguageLink from "@/components/ui/LanguageLink";

/**
 * Slim top header bar: identity mark, section navigation, fixed-order TR/EN
 * language link, and direct contact anchor.
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
          <span aria-hidden="true" className="px-1 text-paper-muted/60">
            /
          </span>
        )}
        {code === language ? (
          <span aria-current="true" className="data-mono px-1 text-[12.5px] font-bold text-yellow">
            {label}
            <span className="sr-only"> ({t.lang.name})</span>
          </span>
        ) : (
          <LanguageLink className="data-mono relative inline-flex min-h-11 items-center px-1 text-[12.5px] font-bold text-paper-muted transition-colors duration-(--duration-snap) hover:text-stock hover:underline min-[900px]:min-h-9">
            {label}
            <span className="sr-only"> ({t.lang.switchTo})</span>
          </LanguageLink>
        )}
      </span>
    );
  });

  return (
    <header className="broadside-frame relative">
      <a
        href="#main"
        className="sr-only-focusable absolute top-2 left-3 z-50 inline-flex min-h-11 items-center border-2 border-ink bg-yellow px-3 text-[13px] font-bold text-ink underline"
      >
        {t.a11y.skipToContent}
      </a>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b-2 border-yellow py-1.5 min-[900px]:flex-nowrap min-[900px]:py-2.5">
        <div className="flex items-baseline gap-2.5">
          <a
            href="#main"
            className="display-bill text-[20px] leading-none font-bold tracking-[0.04em] text-yellow hover:text-yellow-hot min-[900px]:text-[21px]"
          >
            {personalInfo.name}
          </a>
          <span className="data-mono hidden text-[12px] text-paper-muted sm:inline">
            {"// "}
            {t.hero.location}
          </span>
        </div>

        <nav aria-label={t.a11y.sections} className="order-3 w-full min-w-0 min-[900px]:order-2 min-[900px]:w-auto">
          <ul className="-mx-1 flex flex-nowrap items-center gap-0.5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] sm:-mx-2 min-[900px]:mx-0 min-[900px]:gap-5 min-[900px]:overflow-visible">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-9 items-center px-1 text-[12px] font-bold tracking-[0.04em] text-stock uppercase transition-colors duration-(--duration-snap) hover:text-yellow sm:px-2 sm:tracking-[0.06em] min-[900px]:px-1 min-[900px]:text-[12.5px] min-[900px]:tracking-[0.07em]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="order-2 flex shrink-0 items-center gap-3 min-[900px]:order-3">
          <div className="flex items-center">{langControls}</div>
          <a
            href="#contact"
            className="inline-flex min-h-9 items-center bg-vermilion-fill px-3 text-[12px] font-bold tracking-[0.07em] text-white uppercase transition-colors duration-(--duration-snap) hover:bg-yellow hover:text-ink min-[900px]:min-h-10 min-[900px]:px-3.5 min-[900px]:text-[12.5px]"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
