"use client";

import { useState } from "react";
import { FolderGit2 } from "lucide-react";
import { projectsData, type ProjectItem } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400 font-mono mb-3">
              <FolderGit2 size={14} />
              <span>{t.projects.badge} ({projectsData.length.toString().padStart(2, "0")})</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white display-title">
              {t.projects.heading1} <br />
              <span className="text-white/40">{t.projects.heading2}</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/50 leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="flex flex-col">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal Sheet */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
