"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/data/portfolioData";
import { copyToClipboard, displayUrl, type CopyState } from "@/lib/clipboard";
import { mailtoHref, whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Channel = {
  key: string;
  href: string;
  name: ReactNode;
  value: string;
  external?: boolean;
  primary?: boolean;
};

/** "linkedin.com/in/kağandeniz" -> "in/kağandeniz" */
const linkedinValue = displayUrl(personalInfo.linkedin).replace(/^[^/]+\//, "");
const githubValue = displayUrl(personalInfo.github).replace(/^[^/]+\//, "");

/**
 * Contact cell of the header band: email as the carbon-filled primary row,
 * then WhatsApp, LinkedIn and GitHub. Rows stack at >=1200px, run as four
 * cells at 640-1199px and as a 2x2 grid on phones.
 */
export default function HeroContact({ className }: { className?: string }) {
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

  const channels: Channel[] = [
    { key: "email", href: mailtoHref, name: t.contact.emailMe, value: personalInfo.email, primary: true },
    {
      key: "whatsapp",
      href: whatsappHref(t.contact.whatsappGreeting),
      name: <span lang="en">{t.contact.whatsappLabel}</span>,
      value: t.contact.whatsappValue,
      external: true,
    },
    {
      key: "linkedin",
      href: personalInfo.linkedin,
      name: <span lang="en">{t.contact.linkedinLabel}</span>,
      value: linkedinValue,
      external: true,
    },
    {
      key: "github",
      href: personalInfo.github,
      name: <span lang="en">{t.contact.githubLabel}</span>,
      value: githubValue,
      external: true,
    },
  ];

  return (
    <div className={cn("flex flex-col", className)}>
      <div className="hidden items-center justify-between gap-3 border-b-[1.5px] border-ink py-1 pr-2 pl-4 min-[900px]:flex">
        <p id="hero-contact-label" className="form-label">
          {t.form.contact}
        </p>
        <button
          type="button"
          onClick={onCopy}
          aria-label={copy === "copied" ? undefined : t.contact.copyEmailLabel}
          className="form-label relative inline-flex min-h-6 cursor-pointer items-center gap-1.5 px-2 text-carbon hover:bg-carbon/7 after:absolute after:-inset-y-2.5 after:inset-x-0 after:content-['']"
        >
          {copy === "copied" ? (
            <Check aria-hidden="true" size={14} strokeWidth={2} />
          ) : (
            <Copy aria-hidden="true" size={14} strokeWidth={2} />
          )}
          {copy === "copied" ? t.contact.copied : t.contact.copyEmail}
        </button>
      </div>

      <ul
        aria-labelledby="hero-contact-label"
        className="grid flex-1 grid-cols-2 gap-px bg-hairline sm:grid-cols-4 min-[1200px]:flex min-[1200px]:flex-col"
      >
        {channels.map((c) => (
          <li key={c.key} className={cn("flex min-[1200px]:flex-1", c.primary ? "bg-carbon" : "bg-ply-white")}>
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={cn(
                "group flex min-h-11 flex-1 flex-col justify-center gap-x-3 gap-y-0.5 px-3 py-2.5 pointer-fine:min-h-10 min-[1200px]:py-2",
                "min-[900px]:px-4 min-[1200px]:flex-row min-[1200px]:items-center min-[1200px]:justify-between",
                c.primary ? "text-white" : "text-type hover:bg-carbon/7",
              )}
            >
              <span
                className={cn(
                  "text-[15.5px] leading-tight font-bold",
                  c.primary && "decoration-carbon-tint group-hover:underline",
                )}
              >
                {c.name}
              </span>{" "}
              <span
                className={cn(
                  "typed hidden text-[13.5px] whitespace-nowrap min-[900px]:block",
                  c.primary && "text-carbon-tint",
                )}
              >
                {c.value}
              </span>
              {c.external && <span className="sr-only"> {t.a11y.newTab}</span>}
            </a>
          </li>
        ))}
      </ul>

      <p
        role="status"
        className={
          copy === "failed"
            ? "border-t-[1.5px] border-ink px-4 py-2 text-[14px] leading-snug text-type"
            : "sr-only"
        }
      >
        {copy === "copied" && t.contact.copiedStatus}
        {copy === "failed" && (
          <>
            {t.contact.copyFailed} <span className="typed text-[13.5px] break-all select-all">{personalInfo.email}</span>
          </>
        )}
      </p>
    </div>
  );
}
