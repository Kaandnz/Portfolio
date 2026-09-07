"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import MagneticButton from "../ui/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { personalInfo } from "@/data/portfolioData";
//
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { name: t.nav.work, href: "#projects" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-center p-4 md:p-6 pointer-events-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-6 px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "apple-glass-pill shadow-[0_12px_32px_rgba(0,0,0,0.75)] border-white/[0.12]"
              : "bg-black/40 backdrop-blur-md border border-white/[0.08]"
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            data-cursor="pointer"
          >
            <div className="w-7 h-7 rounded-full bg-white/[0.08] border border-white/20 flex items-center justify-center text-xs font-semibold text-white group-hover:border-sky-400/60 group-hover:bg-sky-400/10 transition-colors">
              KD
            </div>
            <span className="text-xs md:text-sm font-medium tracking-tight text-white/90 group-hover:text-white transition-colors whitespace-nowrap">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 text-xs font-medium text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-all"
                data-cursor="pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section: Language Switcher & Availability & Socials */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Apple-style Language Toggle [TR | EN] */}
            <div className="flex items-center p-0.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-[11px] font-mono">
              <button
                onClick={() => setLanguage("tr")}
                className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
                  language === "tr"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
                aria-label="Türkçe"
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 rounded-full transition-all duration-200 ${
                  language === "en"
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            {/* Availability Status Indicator */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-[11px] text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.nav.available}</span>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-1 text-white/60 pl-1 border-l border-white/[0.08]">
              <MagneticButton
                as="a"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-colors"
                data-cursor="external"
              >
                <GithubIcon size={15} />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full hover:text-white hover:bg-white/[0.08] transition-colors"
                data-cursor="external"
              >
                <LinkedinIcon size={15} />
              </MagneticButton>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Apple-style Interruptible Spring Drawer for Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 340,
            }}
            className="fixed inset-x-4 top-20 z-40 md:hidden apple-glass rounded-2xl p-6 shadow-2xl border border-white/[0.12]"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span className="text-xs font-medium text-white/40 uppercase tracking-widest">
                  {language === "tr" ? "MENÜ" : "NAVIGATION"}
                </span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.nav.available}
                </div>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-lg font-medium text-white/90 hover:text-white transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={16} className="text-white/40" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-white/40">
                  {language === "tr" ? "Sosyal Bağlantılar" : "Social Links"}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-xs flex items-center gap-1"
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-xs flex items-center gap-1"
                  >
                    <LinkedinIcon size={14} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
