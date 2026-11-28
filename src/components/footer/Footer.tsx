"use client";

import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolioData";

/* Plain lines on the desk below the form set. The year is fixed at build time. */
export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="form-set pt-0 pb-10 sm:pb-12">
      <div className="flex flex-col gap-x-8 gap-y-3 border-t-[1.5px] border-ink pt-3 text-[13px] leading-[1.5] text-ink-soft sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p>
            <span className="font-semibold text-ink">{personalInfo.name}</span> · {t.footer.role}
          </p>
          <p>
            © {year} · {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
        <a
          href="#main"
          className="-my-2.5 inline-flex min-h-11 shrink-0 items-center self-start font-semibold text-ink underline decoration-[1.5px] underline-offset-[0.2em] hover:decoration-[2.5px]"
        >
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
