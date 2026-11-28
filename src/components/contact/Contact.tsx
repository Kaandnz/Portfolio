"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolioData";
import { copyToClipboard, displayUrl, type CopyState } from "@/lib/clipboard";
import { mailtoHref, whatsappHref } from "@/lib/contact";

export default function Contact() {
  const { t } = useLanguage();
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const copy = async () => {
    if (timer.current) clearTimeout(timer.current);
    const ok = await copyToClipboard(personalInfo.email);
    setCopyState(ok ? "copied" : "failed");
    if (ok) timer.current = setTimeout(() => setCopyState("idle"), 2600);
  };

  const secondary = [
    {
      key: "whatsapp",
      href: whatsappHref(t.contact.whatsappGreeting),
      label: t.contact.whatsappLabel,
      value: t.contact.whatsappValue,
      monoValue: false,
    },
    {
      key: "linkedin",
      href: personalInfo.linkedin,
      label: t.contact.linkedinLabel,
      value: displayUrl(personalInfo.linkedin),
      monoValue: true,
    },
    {
      key: "github",
      href: personalInfo.github,
      label: t.contact.githubLabel,
      value: displayUrl(personalInfo.github),
      monoValue: true,
    },
  ];

  return (
    <section
      id="contact"
      className="mt-10 border-2 border-yellow bg-press p-4 min-[900px]:p-7"
      aria-labelledby="contact-title"
    >
      <div className="grid gap-x-10 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-center">
        <div>
          <h2
            id="contact-title"
            className="display-bill text-[clamp(36px,4.2vw,54px)] leading-[1.08] font-bold tracking-[-0.01em] text-balance text-yellow"
          >
            {t.contact.heading1} <span className="text-stock sm:block">{t.contact.heading2}</span>
          </h2>
          <p className="mt-3 max-w-[56ch] text-[16px] leading-[1.55] text-paper-muted">{t.contact.subtitle}</p>
        </div>

        <div>
          <div className="border-2 border-stock bg-raven">
            <p
              id="contact-channels"
              className="border-b-2 border-stock/35 px-4 pt-2.5 pb-2 text-[12px] font-extrabold tracking-[0.08em] text-paper-muted uppercase"
            >
              {t.contact.channelsTitle}
            </p>
            <ul aria-labelledby="contact-channels">
              <li className="btn-register flex bg-yellow text-ink">
                <a
                  href={mailtoHref}
                  className="group flex min-h-14 min-w-0 flex-1 flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-3"
                >
                  <span className="inline-flex items-center gap-2 text-[16.5px] font-extrabold group-hover:underline">
                    <Mail size={17} strokeWidth={2.2} aria-hidden="true" />
                    {t.contact.emailMe}
                  </span>
                  <span className="data-mono min-w-0 text-[13.5px] font-bold break-all text-ink/90">
                    {personalInfo.email}
                  </span>
                </a>
                <button
                  type="button"
                  onClick={copy}
                  aria-label={copyState === "copied" ? undefined : t.contact.copyEmailLabel}
                  className="inline-flex min-h-14 min-w-[6.75rem] shrink-0 cursor-pointer items-center justify-center gap-1.5 border-l-2 border-ink px-4 text-[12.5px] font-bold tracking-[0.06em] uppercase transition-colors duration-(--duration-snap) hover:bg-ink hover:text-yellow"
                >
                  {copyState === "copied" ? (
                    <Check aria-hidden="true" size={14} strokeWidth={2.2} />
                  ) : (
                    <Copy aria-hidden="true" size={14} strokeWidth={2.2} />
                  )}
                  {copyState === "copied" ? t.contact.copied : t.contact.copyEmail}
                </button>
              </li>

              {secondary.map((channel) => (
                <li key={channel.key} className="border-t border-rule-dark bg-press">
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 flex-wrap items-center justify-between gap-x-4 gap-y-0.5 px-4 py-2.5 transition-colors duration-(--duration-snap) hover:bg-press-deep hover:text-yellow"
                  >
                    <span lang="en" className="inline-flex items-center gap-1.5 text-[16px] font-bold">
                      {channel.label}
                      <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" className="text-yellow" />
                    </span>
                    <span
                      className={
                        channel.monoValue
                          ? "data-mono min-w-0 text-[13.5px] break-all text-paper-muted"
                          : "text-[15px] font-semibold text-yellow"
                      }
                    >
                      {channel.value}
                    </span>
                    <span className="sr-only">{t.a11y.newTab}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p role="status" className="mt-3 min-h-[1.55em] text-[15px] leading-[1.55]">
            {copyState === "copied" && <span className="font-semibold text-yellow">{t.contact.copiedStatus}</span>}
            {copyState === "failed" && (
              <>
                {t.contact.copyFailed}{" "}
                <span className="data-mono text-yellow select-all">{personalInfo.email}</span>
              </>
            )}
          </p>
        </div>
      </div>

      <div aria-hidden="true" className="halftone-band mt-5 h-4 border-y border-rule-dark" />
    </section>
  );
}
