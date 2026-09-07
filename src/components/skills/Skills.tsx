"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, CheckCircle2, Server, Database, Activity, ShieldCheck, Wrench, Layers, Globe } from "lucide-react";
import { skillsGrouped } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import TechMarquee from "./TechMarquee";

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  const categories = [
    { key: "backend", icon: Server, data: skillsGrouped.backend },
    { key: "enterprise", icon: Layers, data: skillsGrouped.enterprise },
    { key: "frontend", icon: Globe, data: skillsGrouped.frontend },
    { key: "database", icon: Database, data: skillsGrouped.database },
    { key: "devops", icon: Activity, data: skillsGrouped.devops },
    { key: "testing", icon: ShieldCheck, data: skillsGrouped.testing },
    { key: "tools", icon: Wrench, data: skillsGrouped.tools },
  ];

  const [activeKey, setActiveKey] = useState("backend");
  const currentCategory = categories.find((c) => c.key === activeKey) || categories[0];

  return (
    <section id="skills" className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-mono mb-3">
              <Cpu size={14} />
              <span>{t.skills.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white display-title">
              {t.skills.heading1} <br />
              <span className="text-white/40">{t.skills.heading2}</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/50 leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Kinetic Typography Marquee */}
        <TechMarquee />

        {/* Interactive Category Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-8 pb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeKey === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveKey(cat.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-white text-black shadow-lg scale-[1.02]"
                    : "bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
                data-cursor="pointer"
              >
                <Icon size={14} />
                <span>{cat.data.title[language]}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey + language}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {currentCategory.data.skills.map((skill: string) => (
              <div
                key={skill}
                className="p-6 rounded-2xl apple-glass-subtle hover:apple-glass border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 flex items-center justify-between gap-3 group"
                data-cursor="pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-base font-semibold text-white group-hover:text-sky-300 transition-colors">
                    {skill}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 uppercase">
                  {language === "tr" ? "Aktif" : "Production"}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
