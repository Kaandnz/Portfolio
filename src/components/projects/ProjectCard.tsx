"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, BookOpen } from "lucide-react";
import { GithubIcon } from "../ui/Icons";
import { type ProjectItem } from "@/data/portfolioData";
import MagneticButton from "../ui/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onOpenModal: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center py-16 md:py-24 border-b border-white/[0.06] last:border-b-0"
    >
      {/* Project Visual / Image Showcase */}
      <div
        className={`lg:col-span-7 ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div
          onClick={() => onOpenModal(project)}
          className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden apple-glass-subtle border border-white/[0.1] group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          data-cursor="project"
          data-cursor-label={`${t.projects.caseStudy} ↗`}
        >
          {/* Background Ambient Glow */}
          <div
            className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 60% 40%, ${project.accentColor} 0%, transparent 70%)`,
            }}
          />

          {/* Project Render Image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 55vw"
          />

          {/* Frosted Floating Pill on Image */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 px-3 py-1.5 rounded-full apple-glass-pill text-[11px] font-mono text-white/80">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            />
            <span>{project.category[language]}</span>
          </div>

          {/* Hover Overlay Hint */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold shadow-xl">
              <span>{t.projects.caseStudy}</span>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Project Narrative & Outbound Links */}
      <div
        className={`lg:col-span-5 flex flex-col justify-center gap-6 ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {/* Meta Bar */}
        <div className="flex items-center gap-3 text-xs font-mono text-white/40 tracking-wider">
          <span className="text-white/80">0{index + 1}</span>
          <span>{"//"}</span>
          <span>{project.year}</span>
          <span>•</span>
          <span className="text-sky-400">{project.role[language]}</span>
        </div>

        {/* Project Title */}
        <div className="space-y-2">
          <h3
            onClick={() => onOpenModal(project)}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-[-0.03em] hover:text-sky-300 transition-colors cursor-pointer"
            data-cursor="pointer"
          >
            {project.title}
          </h3>
          <p className="text-sm md:text-base font-medium text-white/70">
            {project.tagline[language]}
          </p>
        </div>

        {/* Short Editorial Description */}
        <p className="text-sm md:text-base text-white/50 leading-relaxed">
          {project.description[language]}
        </p>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-white/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2.5 py-1 rounded-full bg-white/[0.02] text-xs font-mono text-white/40">
              +{project.technologies.length - 5} {language === "tr" ? "daha" : "more"}
            </span>
          )}
        </div>

        {/* Interactive Action Links: External Live Site, GitHub, Case Study */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          {project.liveUrl && (
            <MagneticButton
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="external"
            >
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-sky-400 transition-all duration-300 shadow-[0_8px_20px_rgba(255,255,255,0.12)] active:scale-[0.97]">
                <span>{t.projects.visitLive}</span>
                <ExternalLink size={13} />
              </div>
            </MagneticButton>
          )}

          {/* GitHub Source Link */}
          {project.githubUrl && (
            <MagneticButton
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="external"
            >
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-white/80 hover:text-white text-xs font-medium transition-all active:scale-[0.97]">
                <GithubIcon size={14} />
                <span>{t.projects.source}</span>
              </div>
            </MagneticButton>
          )}

          {/* Deep Dive Case Study Trigger */}
          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-white/50 hover:text-white text-xs transition-colors active:scale-[0.97]"
            data-cursor="pointer"
          >
            <BookOpen size={14} />
            <span>{t.projects.caseStudy}</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
