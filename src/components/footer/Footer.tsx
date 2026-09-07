"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const [time, setTime] = useState<string>("");
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/Istanbul",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-20 border-t border-white/[0.08] bg-[#070709] text-xs text-white/50">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Local Time */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span>{personalInfo.name}</span>
              <span className="text-white/30">•</span>
              <span className="text-xs font-normal text-white/60">{personalInfo.title[language]}</span>
            </div>
            <div className="font-mono text-[11px] text-white/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Istanbul, TR // {time || "12:00:00"} TRT (GMT+3)</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              data-cursor="external"
            >
              GitHub
            </a>
            <span className="text-white/20">/</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              data-cursor="external"
            >
              LinkedIn
            </a>
            <span className="text-white/20">/</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
              data-cursor="pointer"
            >
              Email
            </a>
          </div>

          {/* Back to Top Button */}
          <MagneticButton onClick={scrollToTop} data-cursor="pointer">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full apple-glass-subtle hover:apple-glass text-white/70 hover:text-white transition-colors active:scale-[0.97]">
              <span>{t.footer.backToTop}</span>
              <ArrowUp size={13} />
            </div>
          </MagneticButton>
        </div>

        {/* Legal & Tech Credit */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. {t.footer.rights}
          </div>
          <div>
            {t.footer.builtWith}
          </div>
        </div>
      </div>
    </footer>
  );
}
