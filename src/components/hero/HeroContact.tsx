"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolioData";
import { copyToClipboard, type CopyState } from "@/lib/clipboard";
import { mailtoHref, whatsappHref } from "@/lib/contact";

/**
 * Primary email + copy segmented pill, explore anchor, and subtle secondary
 * direct channels cleanly grouped for fast recruiter scanning.
 */
export default function HeroContact() {
  const { t } = useLanguage();
  const [copy, setCopy] = useState<CopyState>("idle");
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const onCopy = async () => {
    window.clearTimeout(resetTimer.current);
    const ok = await copyToClipboard(personalInfo.email);
    setCopy(ok ? "copied" : "failed");
    if (ok) resetTimer.current = window.setTimeout(() => setCopy("idle"), 2500);
  };

  const secondary = [
    { key: "whatsapp", href: whatsappHref(t.contact.whatsappGreeting), label: t.contact.whatsappLabel },
    { key: "linkedin", href: personalInfo.linkedin, label: t.contact.linkedinLabel },
    { key: "github", href: personalInfo.github, label: t.contact.githubLabel },
  ];

  return (
    <div className="mt-5 flex flex-col items-center gap-3.5">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <div className="inline-flex items-stretch overflow-hidden rounded-full border border-line-strong bg-ink text-canvas shadow-sm">
          <a
            href={mailtoHref}
            className="inline-flex min-h-11 items-center gap-2 px-4 text-[13.5px] font-medium transition-colors duration-(--duration-snap) hover:bg-white/90 sm:px-5"
          >
            <Mail size={15} strokeWidth={2} aria-hidden="true" />
            <span>{t.contact.emailMe}</span>
            <span className="data-mono hidden border-l border-canvas/15 pl-2.5 text-[12px] text-canvas/75 sm:inline">
              {personalInfo.email}
            </span>
          </a>

          <button
            type="button"
            onClick={onCopy}
            aria-label={copy === "copied" ? t.contact.copied : t.contact.copyEmailLabel}
            className="inline-flex min-h-11 cursor-pointer items-center gap-1.5 border-l border-canvas/15 bg-black/5 px-3.5 text-[12.5px] font-medium text-canvas transition-colors duration-(--duration-snap) hover:bg-black/10"
          >
            {copy === "copied" ? (
              <Check aria-hidden="true" size={14} strokeWidth={2.2} />
            ) : (
              <Copy aria-hidden="true" size={14} strokeWidth={2} />
            )}
            <span className="sr-only sm:not-sr-only">{copy === "copied" ? t.contact.copied : t.contact.copyEmail}</span>
          </button>
        </div>

        <a
          href="#work"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface-elevated/90 px-5 text-[13.5px] font-medium text-ink transition-colors duration-(--duration-snap) hover:border-line-strong hover:bg-surface-elevated"
        >
          <span>{t.hero.exploreWork}</span>
          <ArrowDown size={14} strokeWidth={2} aria-hidden="true" className="text-ink-secondary" />
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-ink-secondary">
        {secondary.map((c) => (
          <a
            key={c.key}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-9 items-center gap-1 transition-colors duration-(--duration-snap) hover:text-ink"
          >
            <span lang="en">{c.label}</span>
            <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden="true" className="text-ink-muted" />
            <span className="sr-only"> {t.a11y.newTab}</span>
          </a>
        ))}
      </div>

      <p
        role="status"
        className={
          copy === "failed"
            ? "rounded-lg border border-line-strong bg-surface px-3.5 py-2 text-[13px] text-ink"
            : "sr-only"
        }
      >
        {copy === "copied" && t.contact.copiedStatus}
        {copy === "failed" && (
          <>
            {t.contact.copyFailed}{" "}
            <span className="data-mono text-ink select-all">{personalInfo.email}</span>
          </>
        )}
      </p>
    </div>
  );
}
