"use client";

// The top ply (#work: the header band passed in as `lead`, then the Düzey line
// items) and the canary ply (#own: own products). One case-study dialog serves both.
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

  const openCase = (project: ProjectItem) => (button: HTMLButtonElement) => {
    opener.current = button;
    setOpen(project);
  };

  return (
    <>
      <div className="ply-stack">
        <section id="work" className="ply" aria-labelledby="work-title">
          {lead}

          <div className="mt-4 border-[1.5px] border-ink">
            <h2 id="work-title" className="form-label border-b-[1.5px] border-ink px-3.5 py-2 text-[13px]">
              {t.projects.workTitle}
            </h2>
            <div className="grid min-[900px]:grid-cols-2">
              {work.map((p, i) => (
                <LineItem
                  key={p.id}
                  project={p}
                  number={String(i + 1).padStart(2, "0")}
                  ratio={workRatio}
                  loading={i === 0 ? "lcp" : i === 1 ? "eager" : "lazy"}
                  onOpen={openCase(p)}
                  className={
                    i > 0
                      ? "border-t-[1.5px] border-ink min-[900px]:border-t-0 min-[900px]:border-l-[1.5px]"
                      : undefined
                  }
                />
              ))}
            </div>
          </div>

          <div className="tear" aria-hidden="true" />
        </section>
      </div>

      <section id="own" className="ply ply-canary" aria-labelledby="own-title">
        <h2
          id="own-title"
          className="text-[clamp(24px,3vw,30px)] leading-[1.1] font-extrabold tracking-[-0.015em] text-balance [font-stretch:112%]"
        >
          {t.projects.ownTitle}
        </h2>
        <p className="mt-1.5 max-w-[70ch] text-[15px] leading-[1.45] text-ink-soft">{t.projects.subtitle}</p>

        <div className="mt-4 grid border-t-[1.5px] border-l-[1.5px] border-ink min-[600px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {own.map((p) => (
            <ProductCell key={p.id} project={p} ratio={ownRatio} onOpen={openCase(p)} />
          ))}
        </div>
        {/* Copy designation printed in the sheet's corner, like a carbon set's ply mark. */}
        <span aria-hidden="true" className="ply-mark form-label">
          {t.form.copy} 2
        </span>
      </section>

      <ProjectModal
        project={open}
        kind={open && isWork(open) ? "work" : "own"}
        number={open ? (isWork(open) ? work.indexOf(open) : own.indexOf(open)) + 1 : 0}
        onClose={() => setOpen(null)}
        returnFocusTo={opener}
      />
    </>
  );
}
