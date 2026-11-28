"use client";

import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

/* Shared hit area: 44px tall, flat carbon tint on hover, a darker tint while pressed. */
const control =
  "-mx-2 inline-flex min-h-11 items-center gap-1 px-2 hover:bg-carbon/8 active:bg-carbon/15";

/** The case-study opener: condensed caps in carbon over a carbon rule. */
export function CaseStudyButton({
  onOpen,
  describedBy,
  className,
}: {
  onOpen: (opener: HTMLButtonElement) => void;
  describedBy: string;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-describedby={describedBy}
      onClick={(event) => onOpen(event.currentTarget)}
      className={cn(control, "cursor-pointer text-carbon", className)}
    >
      <span className="border-b-[1.5px] border-carbon text-[13px] leading-[1.35] font-bold tracking-[0.05em] uppercase [font-stretch:75%]">
        {t.projects.caseStudy}
      </span>
    </button>
  );
}

/** A real link to a live site or repository; opens in a new tab and says so. */
export function ExternalLink({
  href,
  children,
  lang,
  className,
}: {
  href: string;
  children: ReactNode;
  lang?: string;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(control, "text-[15px] font-medium text-ink underline", className)}
    >
      <span lang={lang}>{children}</span>
      <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" className="shrink-0" />
      <span className="sr-only"> {t.a11y.newTab}</span>
    </a>
  );
}
