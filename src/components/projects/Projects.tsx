"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projectsData, type ProjectItem } from "@/data/portfolioData";
import { projectImages } from "@/data/projectImages";
import { useLanguage } from "@/context/LanguageContext";
import Hero from "@/components/hero/Hero";
import { EnterpriseFeature, ProductCell } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { frameRatio } from "./ProjectShot";

type OwnFilter = "all" | "webai" | "native";

const isWork = (p: ProjectItem) => p.id.startsWith("duzey-");
const work = [
  projectsData.find((p) => p.id === "duzey-route-opt")!,
  projectsData.find((p) => p.id === "duzey-sfa-b2b")!,
];
const own = projectsData.filter((p) => !isWork(p));
const modalOrder = [...work, ...own];

const webAiIds = new Set(["dailyrota", "squadvoice", "sql-game", "elementa"]);
const nativeIds = new Set(["koi-theme", "dnz-market", "nodoomscroll", "sql-formatter"]);

const workRatio = frameRatio(work.map((p) => projectImages[p.id]));
const ownRatio = frameRatio(own.map((p) => projectImages[p.id]));

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<OwnFilter>("all");
  const [open, setOpen] = useState<ProjectItem | null>(null);
  const opener = useRef<HTMLElement | null>(null);

  const openCase = (project: ProjectItem, button: HTMLButtonElement) => {
    opener.current = button;
    setOpen(project);
  };

  const openIdx = open ? modalOrder.findIndex((p) => p.id === open.id) : -1;

  const stepModal = (delta: number) => {
    if (openIdx < 0) return;
    const nextIdx = (openIdx + delta + modalOrder.length) % modalOrder.length;
    setOpen(modalOrder[nextIdx]);
  };

  const filters: { id: OwnFilter; label: string; count: number }[] = [
    { id: "all", label: t.projects.filterAll, count: own.length },
    { id: "webai", label: t.projects.filterWebAi, count: 4 },
    { id: "native", label: t.projects.filterNative, count: 4 },
  ];

  const filteredOwn =
    filter === "webai"
      ? own.filter((p) => webAiIds.has(p.id))
      : filter === "native"
        ? own.filter((p) => nativeIds.has(p.id))
        : own;

  return (
    <>
      <Hero onOpenProject={openCase} />

      <section id="work" className="page-shell pt-14 pb-8 min-[900px]:pt-20" aria-labelledby="work-title">
        <div className="mb-8 max-w-[66ch]">
          <h2
            id="work-title"
            className="text-[clamp(26px,3.4vw,38px)] leading-[1.12] font-semibold tracking-[-0.03em] text-ink"
          >
            {t.projects.workTitle}
          </h2>
          <p className="mt-2.5 text-[15.5px] leading-[1.6] text-ink-secondary">{t.projects.workSubtitle}</p>
        </div>

        <div>
          {work.map((project, index) => (
            <EnterpriseFeature
              key={project.id}
              project={project}
              ratio={workRatio}
              loading={index === 0 ? "eager" : "lazy"}
              reverse={index % 2 === 1}
              onOpen={(btn) => openCase(project, btn)}
            />
          ))}
        </div>
      </section>

      <section id="own" className="page-shell border-t border-line pt-14 pb-12 min-[900px]:pt-20" aria-labelledby="own-title">
        <div className="flex flex-col justify-between gap-6 min-[860px]:flex-row min-[860px]:items-end">
          <div className="max-w-[58ch]">
            <h2
              id="own-title"
              className="text-[clamp(26px,3.4vw,38px)] leading-[1.12] font-semibold tracking-[-0.03em] text-ink"
            >
              {t.projects.ownTitle}
            </h2>
            <p className="mt-2.5 text-[15.5px] leading-[1.6] text-ink-secondary">{t.projects.subtitle}</p>
          </div>

          <div
            role="tablist"
            aria-label={t.projects.ownTitle}
            className="inline-flex w-fit max-w-full flex-wrap items-center gap-1 rounded-2xl border border-line bg-surface p-1 sm:rounded-full"
          >
            {filters.map((item) => {
              const selected = item.id === filter;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setFilter(item.id)}
                  className={`relative inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-(--duration-snap) ${
                    selected ? "text-ink" : "text-ink-muted hover:text-ink-secondary"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="own-filter-pill"
                      transition={{ type: "spring", bounce: 0.16, duration: 0.34 }}
                      className="absolute inset-0 rounded-full border border-line-strong bg-surface-elevated"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  <span className="data-mono relative z-10 text-[11.5px] text-ink-muted">{item.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            {filter === "all" ? (
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredOwn.slice(0, 2).map((p) => (
                    <ProductCell
                      key={p.id}
                      project={p}
                      ratio={ownRatio}
                      featured
                      onOpen={(btn) => openCase(p, btn)}
                    />
                  ))}
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredOwn.slice(2).map((p) => (
                    <ProductCell key={p.id} project={p} ratio={ownRatio} onOpen={(btn) => openCase(p, btn)} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {filteredOwn.map((p) => (
                  <ProductCell key={p.id} project={p} ratio={ownRatio} featured onOpen={(btn) => openCase(p, btn)} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      <ProjectModal
        project={open}
        index={openIdx}
        total={modalOrder.length}
        onStep={stepModal}
        onClose={() => setOpen(null)}
        returnFocusTo={opener}
      />
    </>
  );
}
