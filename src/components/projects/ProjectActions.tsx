"use client";

import { type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export type ActionSurface = "dark" | "stock";

/** Opens the project case study dialog. */
export function CaseStudyButton({
  onOpen,
  describedBy,
  surface = "dark",
  className,
}: {
  onOpen: (opener: HTMLButtonElement) => void;
  describedBy: string;
  surface?: ActionSurface;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      aria-describedby={describedBy}
      onClick={(event) => onOpen(event.currentTarget)}
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center px-3.5 text-[12.5px] font-bold tracking-[0.06em] uppercase transition-colors duration-(--duration-snap)",
        surface === "dark"
          ? "border-2 border-yellow bg-press-deep text-yellow hover:bg-yellow hover:text-ink"
          : "border-2 border-ink bg-ink text-yellow hover:border-vermilion-fill hover:bg-vermilion-fill hover:text-white",
        className,
      )}
    >
      {t.projects.caseStudy}
    </button>
  );
}

/** External link to a live product or GitHub repo. */
export function ExternalLink({
  href,
  children,
  lang,
  surface = "dark",
  className,
}: {
  href: string;
  children: ReactNode;
  lang?: string;
  surface?: ActionSurface;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-11 items-center gap-1 px-1.5 text-[14.5px] font-bold underline underline-offset-[0.2em] transition-colors duration-(--duration-snap)",
        surface === "dark"
          ? "text-stock decoration-yellow hover:text-yellow"
          : "text-ink decoration-vermilion-ink hover:text-vermilion-ink",
        className,
      )}
    >
      <span lang={lang}>{children}</span>
      <ArrowUpRight size={15} strokeWidth={2.2} aria-hidden="true" className="shrink-0" />
      <span className="sr-only"> {t.a11y.newTab}</span>
    </a>
  );
}
