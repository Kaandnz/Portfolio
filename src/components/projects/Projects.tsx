"use client";

import { useRef, useState, type ReactNode } from "react";
import { projectsData, type ProjectItem } from "@/data/portfolioData";
import { projectImages } from "@/data/projectImages";
import { useLanguage } from "@/context/LanguageContext";
import { LineItem, ProductCell } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { frameRatio } from "./ProjectShot";

const isWork = (p: ProjectItem) => p.id.startsWith("duzey-");

const work = projectsData.filter(isWork);
const own = projectsData.filter((p) => !isWork(p));
const workRatio = frameRatio(work.map((p) => projectImages[p.id]));
const ownRatio = frameRatio(own.map((p) => projectImages[p.id]));

export default function Projects({ lead }: { lead: ReactNode }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState<ProjectItem | null>(null);
  const opener = useRef<HTMLElement | null>(null);

  const openCase = (project: ProjectItem, button: HTMLButtonElement) => {
    opener.current = button;
    setOpen(project);
  };

  return (
    <>
      {lead}

      <section id="work" className="mt-3 min-[900px]:mt-4" aria-labelledby="work-title">
        <h2 id="work-title" className="sr-only">
          {t.projects.workTitle}
        </h2>

        <div className="grid items-stretch gap-3 min-[960px]:grid-cols-[1fr_auto_1fr] min-[960px]:gap-3.5">
          <LineItem
            project={work[0]}
            accent="yellow"
            ratio={workRatio}
            loading="lcp"
            onOpen={(btn) => openCase(work[0], btn)}
          />

          <div aria-hidden="true" className="flex items-center justify-center py-0.5 min-[960px]:px-1">
            <span className="display-bill inline-block border-2 border-stock bg-vermilion-fill px-3 py-2 text-[26px] leading-none font-bold text-yellow min-[960px]:-rotate-3">
              {t.hero.doubleBillPlus}
            </span>
          </div>

          <LineItem
            project={work[1]}
            accent="vermilion"
            ratio={workRatio}
            loading="eager"
            onOpen={(btn) => openCase(work[1], btn)}
          />
        </div>
      </section>

      <section
        id="own"
        className="sheet-stock mt-5 border-2 border-stock bg-stock p-4 text-ink min-[900px]:p-6"
        aria-labelledby="own-title"
      >
        <div className="flex flex-col gap-2 border-b-2 border-ink pb-4 min-[900px]:flex-row min-[900px]:items-end min-[900px]:justify-between">
          <h2
            id="own-title"
            className="display-bill text-[clamp(34px,4vw,48px)] leading-[0.95] font-bold tracking-[-0.01em] text-vermilion-ink"
          >
            {t.projects.ownTitle}
          </h2>
          <p className="max-w-[58ch] text-[15px] leading-[1.45] text-ink-muted">{t.projects.subtitle}</p>
        </div>

        <div className="mt-5 grid border-t-2 border-l-2 border-ink min-[600px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {own.map((p) => (
            <ProductCell key={p.id} project={p} ratio={ownRatio} onOpen={(btn) => openCase(p, btn)} />
          ))}
        </div>
      </section>

      <ProjectModal
        project={open}
        kind={open && isWork(open) ? "work" : "own"}
        onClose={() => setOpen(null)}
        returnFocusTo={opener}
      />
    </>
  );
}
