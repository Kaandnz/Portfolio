"use client";

import { type ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export type ActionSurface = "dark" | "elevated";

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
        "group inline-flex min-h-10 cursor-pointer items-center gap-1.5 rounded-lg border px-3.5 text-[13px] font-medium transition-colors duration-(--duration-snap)",
        surface === "elevated"
          ? "border-line-strong bg-surface-elevated text-ink hover:border-white/30 hover:bg-white/10"
          : "border-line bg-surface-elevated/70 text-ink hover:border-line-strong hover:text-white",
        className,
      )}
    >
      <span>{t.projects.caseStudy}</span>
      <ArrowRight
        size={13}
        strokeWidth={2}
        aria-hidden="true"
        className="text-ink-muted transition-transform duration-(--duration-snap) group-hover:translate-x-0.5 group-hover:text-ink"
      />
    </button>
  );
}

/** Quiet external link to a deployed site or GitHub repository. */
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
      className={cn(
        "inline-flex min-h-10 items-center gap-1 px-1 text-[13.5px] font-medium text-ink-secondary transition-colors duration-(--duration-snap) hover:text-ink",
        className,
      )}
    >
      <span lang={lang}>{children}</span>
      <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" className="shrink-0 text-ink-muted" />
      <span className="sr-only"> {t.a11y.newTab}</span>
    </a>
  );
}
