"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Check, Copy, Mail, MessageCircle, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import MagneticButton from "../ui/MagneticButton";
import { personalInfo } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

type CopyState = "idle" | "copied" | "failed";

/** Clipboard API first, legacy execCommand second; resolves false when both are unavailable or denied. */
async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the legacy path
  }
  try {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(field);
    return ok;
  } catch {
    return false;
  }
}

/** "https://www.linkedin.com/in/ka%C4%9Fandeniz/" -> "linkedin.com/in/kağandeniz" */
function displayUrl(url: string): string {
  try {
    const { hostname, pathname } = new URL(url);
    return `${hostname.replace(/^www\./, "")}${decodeURIComponent(pathname).replace(/\/$/, "")}`;
  } catch {
    return url;
  }
}

interface ChannelProps {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  newTabHint: string;
  mono?: boolean;
  dim?: boolean;
}

function Channel({ href, icon, label, value, newTabHint, mono = false, dim = false }: ChannelProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="pointer"
        className="group flex items-center gap-4 rounded-xl px-3 py-3.5 -mx-3 transition-colors duration-200 hover:bg-white/[0.04]"
      >
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-white/70 transition-colors duration-200 group-hover:text-sky-400"
        >
          {icon}
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          {/* Platform names are brands: lang="en" keeps uppercase "LinkedIn" from becoming "LİNKEDİN" under lang="tr". */}
          <span lang="en" className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/40">
            {label}
          </span>
          <span
            className={`[overflow-wrap:anywhere] ${mono ? "font-mono text-sm" : "text-[15px]"} ${
              dim ? "text-white/60" : "text-white/90"
            } transition-colors duration-200 group-hover:text-white`}
          >
            {/* URLs may wrap after a slash on narrow screens instead of mid-word. */}
            {value.split("/").map((part, i) => (
              <span key={i}>
                {i > 0 && "/"}
                {i > 0 && <wbr />}
                {part}
              </span>
            ))}
          </span>
        </span>
        <ArrowUpRight
          aria-hidden
          size={16}
          className="shrink-0 text-white/30 transition-colors duration-200 group-hover:text-sky-400"
        />
        <span className="sr-only">{newTabHint}</span>
      </a>
    </li>
  );
}

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(personalInfo.email);
    setCopyState(ok ? "copied" : "failed");
    if (resetTimer.current) clearTimeout(resetTimer.current);
    if (ok) resetTimer.current = setTimeout(() => setCopyState("idle"), 2600);
  };

  const whatsappHref = `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    t.whatsappGreeting,
  )}`;

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] overflow-hidden">
      {/* Background Glow */}
      <div aria-hidden className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: headline and the primary email action */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-mono">
                <Sparkles size={14} aria-hidden />
                <span>{t.badge}</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.035em] text-white leading-[1.02] text-balance">
                {t.heading1} <br />
                <span className="text-gradient-accent">{t.heading2}</span>
              </h2>

              <p className="max-w-xl text-base md:text-lg text-white/60 leading-relaxed pt-2">{t.subtitle}</p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex flex-wrap items-center gap-3">
                <MagneticButton as="a" href={`mailto:${personalInfo.email}`} data-cursor="pointer">
                  <span className="flex items-center gap-3 px-7 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-sky-400 transition-colors duration-300 shadow-[0_12px_30px_rgba(255,255,255,0.15)] active:scale-[0.97]">
                    <Mail size={16} aria-hidden />
                    <span className="sr-only">{t.emailMe}: </span>
                    <span>{personalInfo.email}</span>
                  </span>
                </MagneticButton>

                <MagneticButton onClick={handleCopyEmail} data-cursor="pointer" ariaLabel={t.copyEmailLabel}>
                  <span className="flex items-center gap-2 px-5 py-4 rounded-full apple-glass-pill text-white/80 hover:text-white text-sm font-medium transition-colors duration-200">
                    {copyState === "copied" ? (
                      <Check size={15} aria-hidden className="text-sky-400" />
                    ) : (
                      <Copy size={15} aria-hidden />
                    )}
                    <span aria-hidden>{copyState === "copied" ? t.copied : t.copyEmail}</span>
                  </span>
                </MagneticButton>
              </div>

              <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm text-white/60">
                {copyState === "copied" && <span className="sr-only">{t.copiedStatus}</span>}
                {copyState === "failed" && (
                  <>
                    {t.copyFailed}{" "}
                    <span className="font-mono text-white/90 select-all">{personalInfo.email}</span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Right Column: direct channels */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl apple-glass specular-border border border-white/[0.08] relative">
              <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-white/60 mb-4">{t.channelsTitle}</h3>
              <ul className="divide-y divide-white/[0.06]">
                <Channel
                  href={whatsappHref}
                  icon={<MessageCircle size={18} />}
                  label={t.whatsappLabel}
                  value={t.whatsappValue}
                  newTabHint={t.newTab}
                />
                <Channel
                  href={personalInfo.linkedin}
                  icon={<LinkedinIcon size={18} />}
                  label={t.linkedinLabel}
                  value={displayUrl(personalInfo.linkedin)}
                  newTabHint={t.newTab}
                  mono
                />
                <Channel
                  href={personalInfo.github}
                  icon={<GithubIcon size={18} />}
                  label={t.githubLabel}
                  value={displayUrl(personalInfo.github)}
                  newTabHint={t.newTab}
                  mono
                  dim
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
