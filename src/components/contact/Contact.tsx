"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolioData";
import { copyToClipboard, displayUrl, type CopyState } from "@/lib/clipboard";
import { mailtoHref, whatsappHref } from "@/lib/contact";

/*
 * Direct channels only: every row is a working link. Email is the primary
 * action; the copy button reports exactly what happened (never a fake success).
 */
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
      // The value is a plain-language prompt, not data, so it is set in the sans.
      typedValue: false,
    },
    {
      key: "linkedin",
      href: personalInfo.linkedin,
      label: t.contact.linkedinLabel,
      value: displayUrl(personalInfo.linkedin),
      typedValue: true,
    },
    {
      key: "github",
      href: personalInfo.github,
      label: t.contact.githubLabel,
      value: displayUrl(personalInfo.github),
      typedValue: true,
    },
  ];

  return (
    <section id="contact" className="ply" aria-labelledby="contact-title">
      <div className="grid gap-x-10 gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:items-start">
        <div>
          <h2
            id="contact-title"
            className="text-[clamp(28px,3.2vw,40px)] leading-[1.02] font-extrabold tracking-[-0.02em] text-balance [font-stretch:112%]"
          >
            {t.contact.heading1} <span className="sm:block">{t.contact.heading2}</span>
          </h2>
          <p className="mt-3 max-w-[60ch] text-[16.5px] leading-[1.55]">{t.contact.subtitle}</p>
        </div>

        <div>
          <div className="border-[1.5px] border-ink">
            <p id="contact-channels" className="form-label border-b-[1.5px] border-ink px-4 pt-2.5 pb-2">
              {t.contact.channelsTitle}
            </p>
            <ul aria-labelledby="contact-channels">
              <li className="flex bg-carbon text-ply-white">
                <a
                  href={mailtoHref}
                  className="group flex min-h-14 min-w-0 flex-1 flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-3"
                >
                  <span className="text-[16.5px] font-bold group-hover:underline">{t.contact.emailMe}</span>
                  <span className="typed min-w-0 break-all text-carbon-tint">{personalInfo.email}</span>
                </a>
                <button
                  type="button"
                  onClick={copy}
                  aria-label={copyState === "copied" ? undefined : t.contact.copyEmailLabel}
                  className="min-h-14 min-w-[6.5rem] shrink-0 cursor-pointer border-l-[1.5px] border-carbon-tint px-4 text-[13px] font-bold tracking-[0.06em] uppercase [font-stretch:75%] hover:underline"
                >
                  {copyState === "copied" ? t.contact.copied : t.contact.copyEmail}
                </button>
              </li>
              {secondary.map((channel) => (
                <li key={channel.key} className="border-t-[1.5px] border-ink">
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-12 flex-wrap items-center justify-between gap-x-4 gap-y-0.5 px-4 py-2.5 transition-colors duration-(--duration-press) hover:bg-carbon/[0.07]"
                  >
                    <span
                      lang="en"
                      className={channel.key === "github" ? "text-[16px] font-semibold" : "text-[16px] font-bold"}
                    >
                      {channel.label}
                    </span>
                    <span
                      className={
                        channel.typedValue ? "typed min-w-0 break-all" : "text-[15px] font-medium text-carbon"
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
            {copyState === "copied" && <span className="text-ink">{t.contact.copiedStatus}</span>}
            {copyState === "failed" && (
              <>
                {t.contact.copyFailed} <span className="typed select-all">{personalInfo.email}</span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
