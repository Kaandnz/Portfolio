"use client";

import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="broadside-frame pt-0 pb-12">
      <div className="flex flex-col gap-x-8 gap-y-3 border-t-2 border-vermilion pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="display-bill text-[15px] tracking-[0.06em] text-paper-muted">
            <span className="text-stock">{personalInfo.name}</span> · {t.footer.role} · © {year} · {t.footer.rights}
          </p>
          <p className="mt-1 text-[13px] text-paper-muted">{t.footer.builtWith}</p>
        </div>
        <a
          href="#main"
          className="-my-2 inline-flex min-h-11 shrink-0 items-center self-start text-[13px] font-bold tracking-[0.08em] text-yellow uppercase underline decoration-vermilion decoration-2 underline-offset-[0.22em] hover:text-stock"
        >
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  );
}
