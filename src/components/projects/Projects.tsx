"use client";

import { useState, useCallback } from "react";
import { FolderGit2 } from "lucide-react";
import { projectsData, type ProjectItem } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeader from "../ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const handleOpenModal = useCallback((p: ProjectItem) => {
    setActiveModalProject(p);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveModalProject(null);
  }, []);

  return (
    <section id="projects" className="relative py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          icon={FolderGit2}
          badge={`${t.projects.badge} (${projectsData.length.toString().padStart(2, "0")})`}
          heading1={t.projects.heading1}
          heading2={t.projects.heading2}
          subtitle={t.projects.subtitle}
          className="mb-10 md:mb-12"
        />

        {/* Featured Projects List */}
        <div className="flex flex-col">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal Sheet */}
      <ProjectModal
        project={activeModalProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}
