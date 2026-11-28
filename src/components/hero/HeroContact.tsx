"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolioData";
import { copyToClipboard, type CopyState } from "@/lib/clipboard";
import { mailtoHref, whatsappHref } from "@/lib/contact";

/**
 * Direct contact controls in the top billboard: primary email action with copy
 * button and selectable failure fallback, followed by WhatsApp, LinkedIn, GitHub.
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
    <div className="flex flex-col gap-2 min-[900px]:gap-2.5">
      <div className="btn-register flex items-stretch border-2 border-yellow bg-yellow text-ink">
        <a
          href={mailtoHref}
          className="group flex min-h-11 min-w-0 flex-1 flex-wrap items-center justify-between gap-x-2.5 gap-y-0.5 px-3 py-1.5 min-[900px]:min-h-12 min-[900px]:px-3.5 min-[900px]:py-2"
        >
          <span className="inline-flex items-center gap-1.5 text-[14.5px] font-extrabold group-hover:underline min-[900px]:gap-2 min-[900px]:text-[15px]">
            <Mail size={15} strokeWidth={2.2} aria-hidden="true" />
            {t.contact.emailMe}
          </span>
          <span className="data-mono min-w-0 text-[12px] font-bold break-all text-ink/90 min-[900px]:text-[12.5px]">
            {personalInfo.email}
          </span>
        </a>

        <button
          type="button"
          onClick={onCopy}
          aria-label={copy === "copied" ? t.contact.copied : t.contact.copyEmailLabel}
          className="inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 border-l-2 border-ink px-3 text-[12px] font-bold tracking-[0.06em] uppercase transition-colors duration-(--duration-snap) hover:bg-ink hover:text-yellow min-[900px]:min-h-12"
        >
          {copy === "copied" ? (
            <Check aria-hidden="true" size={14} strokeWidth={2.2} />
          ) : (
            <Copy aria-hidden="true" size={14} strokeWidth={2.2} />
          )}
          <span className="sr-only sm:not-sr-only">{copy === "copied" ? t.contact.copied : t.contact.copyEmail}</span>
        </button>
      </div>

      <ul className="grid grid-cols-3 gap-1.5 min-[900px]:gap-2">
        {secondary.map((c) => (
          <li key={c.key} className="flex">
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-10 flex-1 items-center justify-center gap-1 border border-rule-dark bg-press-deep px-2 text-[12.5px] font-bold text-stock transition-colors duration-(--duration-snap) hover:border-yellow hover:text-yellow min-[900px]:min-h-11 min-[900px]:text-[13px]"
            >
              <span lang="en">{c.label}</span>
              <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" className="shrink-0 text-yellow" />
              <span className="sr-only"> {t.a11y.newTab}</span>
            </a>
          </li>
        ))}
      </ul>

      <p
        role="status"
        className={
          copy === "failed"
            ? "border border-vermilion bg-press-deep px-3 py-2 text-[13.5px] leading-snug text-stock"
            : "sr-only"
        }
      >
        {copy === "copied" && t.contact.copiedStatus}
        {copy === "failed" && (
          <>
            {t.contact.copyFailed}{" "}
            <span className="data-mono text-[13px] text-yellow break-all select-all">{personalInfo.email}</span>
          </>
        )}
      </p>
    </div>
  );
}
