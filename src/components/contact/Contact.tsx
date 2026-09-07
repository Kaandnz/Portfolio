"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Send, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import MagneticButton from "../ui/MagneticButton";
import confetti from "canvas-confetti";
import { personalInfo } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#818cf8", "#34d399", "#ffffff"],
    });
    setTimeout(() => setCopied(false), 2600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Massive Editorial Call to Action */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-mono">
                <Sparkles size={14} />
                <span>{t.contact.badge}</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-white leading-[0.98]">
                {t.contact.heading1} <br />
                <span className="text-white/40">{t.contact.heading2}</span>
              </h2>

              <p className="max-w-xl text-base md:text-lg text-white/60 leading-relaxed pt-2">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Email Action Bar */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-wrap items-center gap-4">
                {/* Magnetic Copy Email Button */}
                <MagneticButton onClick={handleCopyEmail} data-cursor="pointer">
                  <div className="flex items-center gap-3 px-7 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-sky-400 transition-colors duration-300 shadow-[0_15px_35px_rgba(255,255,255,0.15)] active:scale-[0.97]">
                    {copied ? (
                      <>
                        <Check size={16} className="text-black" />
                        <span>{personalInfo.email} ({t.hero.copied})</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="text-black" />
                        <span>{personalInfo.email}</span>
                      </>
                    )}
                  </div>
                </MagneticButton>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs uppercase tracking-wider text-white/40 font-mono">
                  Profiles:
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-white/70 hover:text-white text-xs font-mono transition-colors"
                  data-cursor="pointer"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-white/70 hover:text-white text-xs font-mono transition-colors"
                  data-cursor="pointer"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Apple-Glass Interactive Contact Form */}
          <div className="lg:col-span-5">
            <div className="p-8 md:p-10 rounded-3xl apple-glass border border-white/[0.08] relative">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-sm text-white/60 max-w-xs mx-auto leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="text-xs text-sky-400 hover:underline pt-2 inline-block font-mono"
                  >
                    ← {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 font-mono mb-2">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-sky-400/60 focus:bg-white/[0.06] text-white text-sm outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 font-mono mb-2">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-sky-400/60 focus:bg-white/[0.06] text-white text-sm outline-none transition-all placeholder:text-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/60 font-mono mb-2">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-sky-400/60 focus:bg-white/[0.06] text-white text-sm outline-none transition-all placeholder:text-white/20 resize-none"
                    />
                  </div>

                  <MagneticButton type="submit" disabled={loading} data-cursor="pointer" className="w-full">
                    <div className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-black font-semibold text-sm transition-colors duration-200 active:scale-[0.98] cursor-pointer">
                      {loading ? (
                        <span>{t.contact.sendingBtn}</span>
                      ) : (
                        <>
                          <span>{t.contact.sendBtn}</span>
                          <Send size={15} />
                        </>
                      )}
                    </div>
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
