"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="page-shell border-t border-line py-8">
      <div className="flex flex-col gap-x-8 gap-y-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-[13.5px] text-ink-secondary">
            <span className="font-medium text-ink">{personalInfo.name}</span> · {t.footer.role} · © {year} ·{" "}
            {t.footer.rights}
          </p>
          <p className="mt-1 text-[12.5px] text-ink-muted">{t.footer.builtWith}</p>
        </div>

        <a
          href="#main"
          className="inline-flex min-h-10 shrink-0 items-center gap-1.5 self-start text-[13px] font-medium text-ink-secondary transition-colors hover:text-ink"
        >
          <span>{t.footer.backToTop}</span>
          <ArrowUp size={13} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
