"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, BarChart3, Layers, Terminal } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { type ProjectItem } from "@/data/portfolioData";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Save exact scroll position before locking
    const scrollY = window.scrollY;

    // Rigid body lock: prevents any background movement on desktop & mobile
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Pause Lenis smooth scrolling if running
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.stop();
    }

    window.addEventListener("keydown", handleKeyDown);

    // Reset modal scroll position to top whenever opened
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }

    return () => {
      // Release body lock
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      // Restore scroll position
      window.scrollTo(0, scrollY);

      // Resume Lenis and re-sync
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.start();
        window.__lenis.scrollTo(scrollY, { immediate: true });
      }

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!isMounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <div
          ref={scrollContainerRef}
          data-lenis-prevent
          onWheel={(e) => {
            e.stopPropagation();
          }}
          onTouchMove={(e) => {
            e.stopPropagation();
          }}
          className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-md"
        >
          {/* Centering wrapper that catches clicks outside the card */}
          <div
            className="min-h-full flex items-end sm:items-center justify-center p-0 sm:p-6 lg:p-10"
            onClick={onClose}
          >
            {/* Modal Sheet Card */}
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 35, opacity: 0, scale: 0.98 }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 320,
                mass: 0.8,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-4xl my-auto rounded-t-3xl sm:rounded-3xl apple-glass shadow-2xl border border-white/[0.12] p-6 sm:p-8 md:p-10 pointer-events-auto"
            >
              {/* Sheet Handle for Mobile */}
              <div className="sm:hidden flex justify-center pb-4">
                <div className="w-12 h-1.5 rounded-full bg-white/20" />
              </div>

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest mb-1">
                  <span>{project.category[language]}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 mt-1">
                  {project.tagline[language]}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white/70 hover:text-white transition-colors"
                aria-label={language === "tr" ? "Detayları Kapat" : "Close Case Study"}
                data-cursor="pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Project Image Banner */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden my-6 border border-white/[0.08] bg-black/50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* External Links Bar */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex flex-wrap items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-8">
                <span className="text-xs text-white/50 font-mono uppercase tracking-wider">
                  {t.projects.externalDestinations}
                </span>
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-sky-400 transition-colors shadow-md active:scale-[0.98]"
                      data-cursor="external"
                    >
                      <span>{t.projects.launchSite}</span>
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-medium border border-white/[0.1] transition-colors active:scale-[0.98]"
                      data-cursor="external"
                    >
                      <GithubIcon size={14} />
                      <span>{t.projects.githubRepo}</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Case Study Deep Dive */}
            <div className="space-y-8 text-sm md:text-base text-white/80 leading-relaxed">
              {/* Overview */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
                  <Terminal size={14} className="text-sky-400" />
                  <span>{t.projects.theVision}</span>
                </h4>
                <p className="text-white/80">{project.caseStudy.overview[language]}</p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2">
                    {t.projects.theChallenge}
                  </h4>
                  <p className="text-xs md:text-sm text-white/70">
                    {project.caseStudy.challenge[language]}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                    {t.projects.theSolution}
                  </h4>
                  <p className="text-xs md:text-sm text-white/70">
                    {project.caseStudy.solution[language]}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                  <Layers size={14} className="text-sky-400" />
                  <span>{t.projects.keyHighlights}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.keyFeatures[language].map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                    >
                      <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 mb-3">
                  <BarChart3 size={14} className="text-sky-400" />
                  <span>{t.projects.verifiedMetrics}</span>
                </h4>
                <div
                  className={`grid gap-4 ${
                    project.caseStudy.metrics.length === 4
                      ? "grid-cols-2 sm:grid-cols-4"
                      : project.caseStudy.metrics.length === 2
                      ? "grid-cols-2"
                      : "grid-cols-3"
                  }`}
                >
                  {project.caseStudy.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
                    >
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        {typeof metric.value === "string" ? metric.value : metric.value[language]}
                      </div>
                      <div className="text-[11px] text-white/40 mt-1 uppercase font-mono">
                        {metric.label[language]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pill Cloud */}
              <div className="pt-4 border-t border-white/[0.08]">
                <span className="text-xs text-white/40 font-mono block mb-2">
                  {t.projects.techStack}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-white/80 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Close / Return Button */}
              <div className="pt-6 border-t border-white/[0.08] flex justify-end">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-medium border border-white/[0.1] transition-colors"
                  data-cursor="pointer"
                  aria-label={language === "tr" ? "Detayları Kapat" : "Close"}
                >
                  <X size={14} />
                  <span>{language === "tr" ? "Kapat" : "Close"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )}
  </AnimatePresence>,
  document.body
);
}

