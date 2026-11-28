"use client";

import { useLanguage } from "@/context/LanguageContext";

/**
 * Skip link plus a slim section index printed on the desk above the form set.
 * Not sticky; the language switch lives in the Hero band.
 */
export default function Navbar() {
  const { t } = useLanguage();

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#own", label: t.nav.own },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="relative mx-auto max-w-(--container) px-(--gutter-mobile) min-[900px]:px-(--gutter)">
      <a
        href="#main"
        className="sr-only-focusable form-label absolute top-2 left-2 z-50 inline-flex min-h-11 items-center bg-ply-white px-3 text-[13px] text-carbon underline form-rule"
      >
        {t.a11y.skipToContent}
      </a>

      <div className="flex flex-nowrap items-center justify-between gap-x-6">
        <nav aria-label={t.a11y.sections} className="min-w-0 max-w-full">
          <ul className="-mx-1.5 flex flex-nowrap overflow-x-auto whitespace-nowrap [scrollbar-width:none] min-[900px]:-mx-2.5 min-[900px]:overflow-visible">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="form-label inline-flex min-h-11 items-center px-1.5 text-[13px] hover:underline min-[900px]:min-h-9 min-[900px]:px-2.5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="hidden items-baseline gap-2 min-[900px]:flex">
          <span className="form-label">{t.form.status}</span>
          <span className="text-[14px] font-medium text-ink-soft">{t.nav.available}</span>
        </p>
      </div>
    </header>
  );
}
