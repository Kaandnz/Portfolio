"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, GraduationCap } from "lucide-react";
import { experienceData, educationData } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-mono mb-3">
              <Briefcase size={14} />
              <span>{t.experience.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white display-title">
              {t.experience.heading1} <br />
              <span className="text-white/40">{t.experience.heading2}</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/50 leading-relaxed">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Minimal Timeline */}
        <div className="relative border-l border-white/[0.1] ml-4 md:ml-8 pl-8 md:pl-16 space-y-16">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-sky-400 group-hover:bg-sky-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {exp.role[language]}
                  </h3>
                  <span className="text-sm font-medium text-white/60">
                    @ {exp.company}
                  </span>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs text-white/50">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                    {exp.period[language]}
                  </span>
                  <span>{exp.location[language]}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-white/70 max-w-3xl leading-relaxed mb-4">
                {exp.description[language]}
              </p>

              {/* Core Achievements */}
              <div className="space-y-2 mb-5">
                {exp.achievements[language].map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-white/60">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Education Timeline Node */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group pt-4"
          >
            <div className="absolute -left-[41px] md:-left-[73px] top-5 w-4 h-4 rounded-full bg-black border-2 border-purple-400 group-hover:bg-purple-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(168,85,247,0.5)]" />

            <div className="p-6 rounded-2xl apple-glass-subtle border border-white/[0.06] max-w-3xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {educationData.degree[language]}
                    </h3>
                    <p className="text-xs text-white/60">
                      {educationData.school[language]}
                    </p>
                  </div>
                </div>

                <div className="font-mono text-xs text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                  GPA: {educationData.gpa}
                </div>
              </div>
              <p className="text-xs md:text-sm text-white/60 mt-3 leading-relaxed">
                {educationData.details[language]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
