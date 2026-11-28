"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { experienceData, projectsData, type ProjectItem } from "@/data/portfolioData";
import { projectImages } from "@/data/projectImages";
import { pick } from "@/lib/i18n";
import ProjectShot from "@/components/projects/ProjectShot";
import HeroContact from "./HeroContact";

const showcaseIds = ["duzey-route-opt", "duzey-sfa-b2b", "dailyrota", "squadvoice"] as const;

const tabShortLabel: Record<(typeof showcaseIds)[number], { tr: string; en: string }> = {
  "duzey-route-opt": { tr: "Filo & Rota · Düzey", en: "Fleet & Route · Düzey" },
  "duzey-sfa-b2b": { tr: "B2B & E-Ticaret · Düzey", en: "B2B & E-Commerce · Düzey" },
  dailyrota: { tr: "Rota · DailyTracker", en: "Rota · DailyTracker" },
  squadvoice: { tr: "SquadVoice", en: "SquadVoice" },
};

/**
 * Hero band with Linear-inspired studio radial light, clear positioning statement,
 * direct recruiter contact pill, and an interactive product showcase stage.
 */
export default function Hero({
  onOpenProject,
}: {
  onOpenProject: (project: ProjectItem, trigger: HTMLButtonElement) => void;
}) {
  const { language, t } = useLanguage();
  const [activeId, setActiveId] = useState<(typeof showcaseIds)[number]>("duzey-route-opt");
  const [now] = experienceData;

  const activeProject = projectsData.find((p) => p.id === activeId) ?? projectsData[1];
  const activeImage = projectImages[activeProject.id];
  const activeTitle = pick(activeProject.title, language);

  return (
    <section aria-labelledby="hero-heading" className="hero-glow relative pt-8 pb-6 min-[900px]:pt-10 min-[900px]:pb-10">
      <div className="page-shell">
        <div className="mx-auto max-w-[780px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/85 px-3.5 py-1 text-[12.5px] font-medium text-ink-secondary">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald" />
            <span>
              {pick(now.company, language)} · {t.hero.location} · {t.nav.available}
            </span>
          </div>

          <h1
            id="hero-heading"
            className="mt-4 text-[clamp(34px,4.8vw,58px)] leading-[1.06] font-semibold tracking-[-0.035em] text-balance"
          >
            <span className="block text-ink">{t.hero.titleLine1}</span>
            <span className="block text-ink-secondary">{t.hero.titleLine2}</span>
          </h1>

          <p className="mx-auto mt-3.5 max-w-[62ch] text-[15.5px] leading-[1.58] text-ink-secondary min-[900px]:text-[16.5px]">
            {t.hero.subtitle}
          </p>

          <HeroContact />
        </div>

        {/* Interactive showcase switcher */}
        <div className="mx-auto mt-7 max-w-[900px]">
          <div
            role="tablist"
            aria-label={t.projects.heading1}
            className="mx-auto mb-3 flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-line bg-surface/90 p-1 sm:rounded-full"
          >
            {showcaseIds.map((id) => {
              const selected = id === activeId;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(id)}
                  className={`relative cursor-pointer rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors duration-(--duration-snap) ${
                    selected ? "text-ink" : "text-ink-muted hover:text-ink-secondary"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="hero-stage-tab"
                      transition={{ type: "spring", bounce: 0.16, duration: 0.36 }}
                      className="absolute inset-0 rounded-full border border-line-strong bg-surface-elevated"
                    />
                  )}
                  <span className="relative z-10">{tabShortLabel[id][language]}</span>
                </button>
              );
            })}
          </div>

          <div className="surface-card overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-line bg-surface-elevated/55 px-4 py-2.5">
              <p className="data-mono min-w-0 truncate text-[12px] text-ink-secondary">
                {activeTitle} · {activeProject.year}
              </p>

              <button
                type="button"
                aria-haspopup="dialog"
                onClick={(e) => onOpenProject(activeProject, e.currentTarget)}
                className="inline-flex shrink-0 cursor-pointer items-center gap-1 text-[12.5px] font-medium text-ink transition-colors hover:text-accent"
              >
                <span>{t.projects.caseStudy}</span>
                <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-hidden bg-stage p-2 sm:p-3">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeImage && (
                    <ProjectShot
                      image={activeImage}
                      alt={activeImage.alt[language]}
                      ratio={16 / 9}
                      loading="lcp"
                      className="max-h-[460px] w-full rounded-lg border border-line/80"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
