"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode, type RefObject } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { type ProjectItem } from "@/data/portfolioData";
import { projectImages } from "@/data/projectImages";
import { useLanguage } from "@/context/LanguageContext";
import { pick } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import ProjectShot, { frameRatio } from "./ProjectShot";
import { ExternalLink } from "./ProjectActions";
import styles from "./ProjectModal.module.css";

const TITLE_ID = "case-study-title";

const portraitFrame = frameRatio(Object.values(projectImages));

const field = (label: string) => label.replace(/\s*:\s*$/, "");

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-x-6 gap-y-2 border-b border-line py-4 last:border-b-0 min-[640px]:grid-cols-[165px_minmax(0,1fr)]">
      <h3 className="pt-0.5 text-[12px] font-medium tracking-[0.02em] text-ink-muted">{label}</h3>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function ProjectModal({
  project,
  index,
  total,
  onStep,
  onClose,
  returnFocusTo,
}: {
  project: ProjectItem | null;
  index: number;
  total: number;
  onStep: (delta: number) => void;
  onClose: () => void;
  returnFocusTo: RefObject<HTMLElement | null>;
}) {
  const { language, t } = useLanguage();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (project && dialog.open) dialog.scrollTop = 0;
    if (!project && dialog.open) dialog.close();
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onStep(-1);
      if (e.key === "ArrowRight") onStep(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, onStep]);

  const handleClose = () => {
    onClose();
    const opener = returnFocusTo.current;
    if (opener && document.activeElement !== opener) opener.focus({ preventScroll: true });
  };

  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    const dialog = event.currentTarget;
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    const inside =
      event.clientX >= box.left &&
      event.clientX <= box.right &&
      event.clientY >= box.top &&
      event.clientY <= box.bottom;
    if (!inside) dialog.close();
  };

  const image = project ? projectImages[project.id] : undefined;
  const features = project?.caseStudy.keyFeatures[language] ?? [];
  const trackLabel = project?.id.startsWith("duzey-") ? "Düzey" : t.projects.ownTitle;

  return (
    <dialog
      ref={ref}
      aria-labelledby={TITLE_ID}
      onClose={handleClose}
      onClick={handleClick}
      className={cn(styles.sheet, "border border-line-strong bg-surface text-ink")}
    >
      {project && (
        <>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-surface/90 px-4 py-2.5 backdrop-blur-md sm:px-6">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onStep(-1)}
                className="inline-flex min-h-9 cursor-pointer items-center gap-1 rounded-lg border border-line bg-surface-elevated/80 px-2.5 text-[12px] font-medium text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
              >
                <ChevronLeft size={14} strokeWidth={2} aria-hidden="true" />
                <span className="hidden sm:inline">{t.projects.prevProject}</span>
              </button>

              <span className="data-mono px-1 text-[12px] text-ink-muted">
                {String(index + 1).padStart(2, "0")} / {total}
              </span>

              <button
                type="button"
                onClick={() => onStep(1)}
                className="inline-flex min-h-9 cursor-pointer items-center gap-1 rounded-lg border border-line bg-surface-elevated/80 px-2.5 text-[12px] font-medium text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
              >
                <span className="hidden sm:inline">{t.projects.nextProject}</span>
                <ChevronRight size={14} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-lg border border-line bg-surface-elevated/80 px-3 text-[12.5px] font-medium text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
            >
              <X size={15} strokeWidth={2} aria-hidden="true" />
              <span>{t.a11y.close}</span>
            </button>
          </div>

          <div className="px-5 pt-6 pb-8 sm:px-7">
            <h2
              id={TITLE_ID}
              className="text-[clamp(24px,3.2vw,34px)] leading-[1.16] font-semibold tracking-[-0.03em] text-balance text-ink"
            >
              {pick(project.title, language)}
            </h2>
            <p className="data-mono mt-2 text-[12.5px] text-accent">
              {trackLabel} · {project.category[language]} · {project.year}
            </p>

            {image && (
              <ProjectShot
                className="mt-5 border-line-strong"
                image={image}
                alt={image.alt[language]}
                ratio={image.shape === "portrait" ? portraitFrame : image.width / image.height}
                loading="eager"
                decoding="auto"
              />
            )}

            <div className="mt-6 border-t border-line">
              <Row label={t.projects.theVision}>
                <p className="max-w-[65ch] text-[15px] leading-[1.6] text-ink">{project.caseStudy.overview[language]}</p>
              </Row>

              <Row label={t.projects.theChallenge}>
                <p className="max-w-[65ch] text-[15px] leading-[1.6] text-ink-secondary">
                  {project.caseStudy.challenge[language]}
                </p>
              </Row>

              <Row label={t.projects.theSolution}>
                <p className="max-w-[65ch] text-[15px] leading-[1.6] text-ink-secondary">
                  {project.caseStudy.solution[language]}
                </p>
              </Row>

              {features.length > 0 && (
                <Row label={t.projects.keyHighlights}>
                  <ul className="max-w-[65ch] list-disc space-y-1.5 pl-4 text-[14.5px] leading-[1.58] text-ink-secondary marker:text-ink-muted">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </Row>
              )}

              {project.caseStudy.metrics.length > 0 && (
                <Row label={t.projects.verifiedMetrics}>
                  <dl className="grid max-w-[65ch] gap-3 sm:grid-cols-2">
                    {project.caseStudy.metrics.map((metric) => (
                      <div
                        key={metric.label.en}
                        className="rounded-lg border border-line bg-surface-elevated/60 px-3.5 py-2.5"
                      >
                        <dt className="text-[11.5px] text-ink-muted">{metric.label[language]}</dt>
                        <dd className="data-mono mt-0.5 text-[13px] font-medium text-ink">
                          {pick(metric.value, language)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Row>
              )}

              <Row label={field(t.projects.techStack)}>
                <p className="data-mono max-w-[65ch] text-[13px] leading-[1.6] text-ink-secondary">
                  {project.technologies.join(" · ")}
                </p>
              </Row>

              {(project.liveUrl || project.githubUrl) && (
                <Row label={field(t.projects.externalDestinations)}>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    {project.liveUrl && (
                      <ExternalLink href={project.liveUrl}>
                        {project.liveLabel?.[language] ?? t.projects.launchSite}
                      </ExternalLink>
                    )}
                    {project.githubUrl && (
                      <ExternalLink href={project.githubUrl} lang="en">
                        {t.projects.githubRepo}
                      </ExternalLink>
                    )}
                  </div>
                </Row>
              )}
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
