"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Server, Database, Activity, ShieldCheck, Wrench, Layers, Globe } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
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
        <SectionHeader
          icon={Cpu}
          badge={t.skills.badge}
          heading1={t.skills.heading1}
          heading2={t.skills.heading2}
          subtitle={t.skills.subtitle}
          className="mb-12"
        />

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
                aria-pressed={isSelected}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-300 border ${
                  isSelected
                    ? "text-black border-transparent"
                    : "bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border-white/[0.06]"
                }`}
                data-cursor="pointer"
              >
                {isSelected && (
                  <motion.span
                    layoutId="skillCategoryPill"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_8px_24px_rgba(255,255,255,0.14)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={14} className="relative z-10" />
                <span className="relative z-10">{cat.data.title[language]}</span>
                <span
                  className={`relative z-10 font-mono text-[10px] ${
                    isSelected ? "text-black/50" : "text-white/30"
                  }`}
                >
                  {cat.data.skills.length.toString().padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey + language}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.18 } }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.035 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
          >
            {currentCategory.data.skills.map((skill, i) => {
              const skillName = typeof skill === "string" ? skill : skill[language];
              const skillKey = typeof skill === "string" ? skill : skill.en;
              return (
                <motion.div
                  key={skillKey}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="relative overflow-hidden px-5 py-4 md:px-6 md:py-5 rounded-2xl apple-glass-subtle specular-border border border-white/[0.06] hover:border-sky-400/30 hover:bg-white/[0.05] transition-colors duration-300 flex items-center gap-4 group"
                >
                  {/* Hover glow sweeping in from the left edge */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-sky-400/[0.09] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <span className="relative font-mono text-[11px] text-white/30 group-hover:text-sky-400 transition-colors tabular-nums">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="relative text-[15px] md:text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                    {skillName}
                  </span>
                  <span
                    aria-hidden
                    className="relative ml-auto w-1.5 h-1.5 rounded-full bg-white/15 group-hover:bg-sky-400 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.9)] transition-all duration-300"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
