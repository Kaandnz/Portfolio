"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Copy, Check, ExternalLink, Sparkles, MapPin, Globe } from "lucide-react";
import AmbientCanvas from "./AmbientCanvas";
import MagneticButton from "../ui/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  const [copied, setCopied] = useState(false);
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-12 overflow-hidden select-none">
      {/* Interactive Background Particle & Gradient Canvas */}
      <AmbientCanvas />

      {/* Top Meta Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 text-xs tracking-wider uppercase text-white/50">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/90 font-semibold">{personalInfo.name}</span>
          <span className="text-white/30">•</span>
          <span>{personalInfo.title[language]}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 font-mono text-[11px] text-white/60"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={12} className="text-sky-400" />
            <span>{t.hero.location}</span>
          </span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-1.5">
            <Globe size={12} className="text-emerald-400" />
            <span>{time ? `${time} TRT` : "00:00:00"}</span>
          </span>
        </motion.div>
      </div>

      {/* Centerpiece Hero Statement with Optical Typography */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 md:py-16">
        <div className="flex flex-col gap-5 md:gap-7">
          {/* Subtle Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] w-fit text-xs text-white/70"
          >
            <Sparkles size={13} className="text-sky-400" />
            <span>{t.hero.tag}</span>
          </motion.div>

          {/* Staggered Giant Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-[-0.035em] leading-[0.98]"
            >
              {t.hero.headline1}
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-white/40 tracking-[-0.035em] leading-[0.98]"
            >
              {t.hero.headline2}
            </motion.h1>
          </div>

          {/* Subtitle & Philosophy from CV */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl text-base md:text-lg text-white/60 font-normal leading-relaxed mt-1"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Interactive CTAs with Magnetic Physics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {/* Primary Action */}
            <MagneticButton as="a" href="#projects" data-cursor="pointer">
              <div className="group flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-sky-400 hover:text-black transition-colors duration-300 shadow-[0_12px_30px_rgba(255,255,255,0.15)] active:scale-[0.97]">
                <span>{t.hero.exploreBtn}</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </div>
            </MagneticButton>

            {/* Copy Email Button */}
            <MagneticButton onClick={handleCopyEmail} data-cursor="pointer">
              <div className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white/90 text-sm font-medium transition-all duration-300 active:scale-[0.97]">
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="text-emerald-400">{t.hero.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} className="text-white/60" />
                    <span>{t.hero.copyEmail}</span>
                  </>
                )}
              </div>
            </MagneticButton>

            {/* Direct Contact Button */}
            <MagneticButton as="a" href="#contact" data-cursor="pointer">
              <div className="flex items-center gap-2 px-5 py-3.5 rounded-full text-white/60 hover:text-white text-sm transition-colors active:scale-[0.97]">
                <span>{t.hero.contactBtn}</span>
                <ExternalLink size={14} />
              </div>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom Status & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-end justify-between text-xs text-white/40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center gap-6 font-mono"
        >
          <span>.NET Core • C# • SQL Server • Microservices</span>
          <span className="hidden sm:inline">Jenkins CI/CD • ELK Stack</span>
        </motion.div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          data-cursor="pointer"
        >
          <span className="text-[11px] uppercase tracking-wider font-mono">{t.hero.scrollHint}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
