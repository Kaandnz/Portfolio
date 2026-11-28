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
    <section id="contact" className="page-shell pt-8 pb-16 min-[900px]:pt-12" aria-labelledby="contact-title">
      <div className="surface-card rounded-2xl p-6 min-[900px]:p-10">
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-center">
          <div>
            <h2
              id="contact-title"
              className="text-[clamp(28px,3.6vw,42px)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance"
            >
              <span className="block text-ink">{t.contact.heading1}</span>
              <span className="block text-ink-secondary">{t.contact.heading2}</span>
            </h2>
            <p className="mt-3 max-w-[50ch] text-[15.5px] leading-[1.6] text-ink-secondary">{t.contact.subtitle}</p>
          </div>

          <div>
            <div className="overflow-hidden rounded-xl border border-line bg-canvas/70">
              <p
                id="contact-channels"
                className="border-b border-line px-4 py-2.5 text-[12px] font-medium text-ink-muted"
              >
                {t.contact.channelsTitle}
              </p>

              <ul aria-labelledby="contact-channels">
                <li className="flex flex-wrap items-stretch bg-ink text-canvas">
                  <a
                    href={mailtoHref}
                    className="group flex min-h-13 min-w-0 flex-1 flex-wrap items-center justify-between gap-x-4 gap-y-0.5 px-4 py-2.5 transition-colors hover:bg-white/90"
                  >
                    <span className="inline-flex items-center gap-2 text-[14.5px] font-semibold">
                      <Mail size={16} strokeWidth={2} aria-hidden="true" />
                      {t.contact.emailMe}
                    </span>
                    <span className="data-mono min-w-0 text-[12.5px] font-medium break-all text-canvas/80">
                      {personalInfo.email}
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={copy}
                    aria-label={copyState === "copied" ? undefined : t.contact.copyEmailLabel}
                    className="inline-flex min-h-13 shrink-0 cursor-pointer items-center justify-center gap-1.5 border-l border-canvas/15 bg-black/5 px-4 text-[12.5px] font-medium text-canvas transition-colors hover:bg-black/10"
                  >
                    {copyState === "copied" ? (
                      <Check aria-hidden="true" size={14} strokeWidth={2.2} />
                    ) : (
                      <Copy aria-hidden="true" size={14} strokeWidth={2} />
                    )}
                    <span>{copyState === "copied" ? t.contact.copied : t.contact.copyEmail}</span>
                  </button>
                </li>

                {secondary.map((channel) => (
                  <li key={channel.key} className="border-t border-line">
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 flex-wrap items-center justify-between gap-x-4 gap-y-0.5 px-4 py-2.5 transition-colors duration-(--duration-snap) hover:bg-white/[0.03]"
                    >
                      <span lang="en" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink">
                        {channel.label}
                        <ArrowUpRight size={13} strokeWidth={1.8} aria-hidden="true" className="text-ink-muted" />
                      </span>
                      <span
                        className={
                          channel.monoValue
                            ? "data-mono min-w-0 text-[12.5px] break-all text-ink-secondary"
                            : "text-[13.5px] font-medium text-accent"
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

            <p role="status" className="mt-3 min-h-[1.5em] text-[13.5px] leading-[1.5]">
              {copyState === "copied" && <span className="text-emerald">{t.contact.copiedStatus}</span>}
              {copyState === "failed" && (
                <>
                  {t.contact.copyFailed}{" "}
                  <span className="data-mono text-ink select-all">{personalInfo.email}</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
