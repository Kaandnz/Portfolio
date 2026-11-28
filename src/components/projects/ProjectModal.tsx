"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode, type RefObject } from "react";
import { X } from "lucide-react";
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

function Row({ label, dark, children }: { label: string; dark: boolean; children: ReactNode }) {
  return (
    <section
      className={cn(
        "grid gap-x-6 gap-y-1.5 border-b py-4 last:border-b-0 min-[600px]:grid-cols-[155px_minmax(0,1fr)]",
        dark ? "border-rule-dark" : "border-rule-light",
      )}
    >
      <h3
        className={cn(
          "pt-[3px] text-[12px] font-extrabold tracking-[0.08em] uppercase",
          dark ? "text-yellow" : "text-vermilion-ink",
        )}
      >
        {label}
      </h3>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function ProjectModal({
  project,
  kind,
  onClose,
  returnFocusTo,
}: {
  project: ProjectItem | null;
  kind: "work" | "own";
  onClose: () => void;
  returnFocusTo: RefObject<HTMLElement | null>;
}) {
  const { language, t } = useLanguage();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
    }
    if (!project && dialog.open) dialog.close();
  }, [project]);

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
      event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
    if (!inside) dialog.close();
  };

  const dark = kind === "work";
  const surface = dark ? "bg-press text-stock border-2 border-yellow" : "sheet-stock bg-stock text-ink border-2 border-ink";
  const image = project ? projectImages[project.id] : undefined;
  const features = project?.caseStudy.keyFeatures[language] ?? [];

  return (
    <dialog
      ref={ref}
      aria-labelledby={TITLE_ID}
      onClose={handleClose}
      onClick={handleClick}
      className={cn(styles.sheet, surface)}
    >
      {project && (
        <>
          <div
            className={cn(
              "sticky top-0 z-10 flex items-center justify-end border-b-2 px-5 py-1 max-[599px]:px-3",
              dark ? "border-yellow bg-press" : "border-ink bg-stock",
            )}
          >
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className={cn(
                "-mr-2 inline-flex min-h-11 cursor-pointer items-center gap-1.5 px-3 text-[12.5px] font-bold tracking-[0.06em] uppercase transition-colors duration-(--duration-snap)",
                dark
                  ? "text-yellow hover:bg-yellow hover:text-ink"
                  : "bg-ink text-yellow hover:bg-vermilion-fill hover:text-white",
              )}
            >
              <X size={16} strokeWidth={2.2} aria-hidden="true" />
              {t.a11y.close}
            </button>
          </div>

          <div className="px-5 pt-5 pb-7 max-[599px]:px-3">
            <h2
              id={TITLE_ID}
              className={cn(
                "display-bill text-[clamp(28px,4vw,42px)] leading-[1.06] font-bold tracking-[-0.01em] text-balance",
                dark ? "text-yellow" : "text-ink",
              )}
            >
              {pick(project.title, language)}
            </h2>
            <p className={cn("data-mono mt-2 text-[13.5px] font-medium", dark ? "text-paper-muted" : "text-vermilion-ink")}>
              {dark ? "Düzey" : t.projects.ownTitle} · {project.category[language]} · {project.year}
            </p>

            {image && (
              <ProjectShot
                className={cn("mt-5", dark ? "border-stock" : "border-ink bg-press")}
                image={image}
                alt={image.alt[language]}
                ratio={image.shape === "portrait" ? portraitFrame : image.width / image.height}
                loading="eager"
                decoding="auto"
              />
            )}

            <div className={cn("mt-6 border-y-2", dark ? "border-yellow" : "border-ink")}>
              <Row label={t.projects.theVision} dark={dark}>
                <p className="max-w-[65ch] text-[15.5px] leading-[1.55]">{project.caseStudy.overview[language]}</p>
              </Row>
              <Row label={t.projects.theChallenge} dark={dark}>
                <p className="max-w-[65ch] text-[15.5px] leading-[1.55]">{project.caseStudy.challenge[language]}</p>
              </Row>
              <Row label={t.projects.theSolution} dark={dark}>
                <p className="max-w-[65ch] text-[15.5px] leading-[1.55]">{project.caseStudy.solution[language]}</p>
              </Row>
              {features.length > 0 && (
                <Row label={t.projects.keyHighlights} dark={dark}>
                  <ul
                    className={cn(
                      "max-w-[65ch] list-[square] space-y-1.5 pl-5 text-[15.5px] leading-[1.5]",
                      dark ? "marker:text-yellow" : "marker:text-vermilion-ink",
                    )}
                  >
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </Row>
              )}
              {project.caseStudy.metrics.length > 0 && (
                <Row label={t.projects.verifiedMetrics} dark={dark}>
                  <dl className="max-w-[65ch]">
                    {project.caseStudy.metrics.map((metric) => (
                      <div
                        key={metric.label.en}
                        className={cn(
                          "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 border-b py-1.5 first:pt-0 last:border-b-0 last:pb-0",
                          dark ? "border-rule-dark" : "border-rule-light",
                        )}
                      >
                        <dt className={cn("text-[12.5px] font-bold uppercase", dark ? "text-paper-muted" : "text-ink-muted")}>
                          {metric.label[language]}
                        </dt>
                        <dd className={cn("data-mono text-[13.5px] font-bold", dark ? "text-yellow" : "text-ink")}>
                          {pick(metric.value, language)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Row>
              )}
              <Row label={field(t.projects.techStack)} dark={dark}>
                <p className={cn("data-mono max-w-[65ch] text-[13.5px]", dark ? "text-stock" : "text-ink")}>
                  {project.technologies.join(" · ")}
                </p>
              </Row>
              {(project.liveUrl || project.githubUrl) && (
                <Row label={field(t.projects.externalDestinations)} dark={dark}>
                  <div className="-my-2 flex flex-wrap items-center gap-x-6">
                    {project.liveUrl && (
                      <ExternalLink surface={dark ? "dark" : "stock"} href={project.liveUrl}>
                        {project.liveLabel?.[language] ?? t.projects.launchSite}
                      </ExternalLink>
                    )}
                    {project.githubUrl && (
                      <ExternalLink surface={dark ? "dark" : "stock"} href={project.githubUrl} lang="en">
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
