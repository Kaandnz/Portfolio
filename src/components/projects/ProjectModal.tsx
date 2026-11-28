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

/** Frame for a portrait phone screen: the average landscape ratio across all screenshots. */
const portraitFrame = frameRatio(Object.values(projectImages));

/** Field labels print without the trailing colon some keys carry. */
const field = (label: string) => label.replace(/\s*:\s*$/, "");

/** One ruled row of the case-study form: label cell, then its content. */
function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-x-6 gap-y-1.5 border-b border-hairline py-4 last:border-b-0 min-[600px]:grid-cols-[150px_minmax(0,1fr)]">
      <h3 className="form-label pt-[3px]">{label}</h3>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function ProjectModal({
  project,
  kind,
  number,
  onClose,
  returnFocusTo,
}: {
  project: ProjectItem | null;
  kind: "work" | "own";
  number: number;
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

  // Fires for the close button, Esc and a click on the dimmed set alike.
  const handleClose = () => {
    onClose();
    const opener = returnFocusTo.current;
    if (opener && document.activeElement !== opener) opener.focus({ preventScroll: true });
  };

  // A click that lands on the backdrop targets the dialog itself, outside its box.
  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    const dialog = event.currentTarget;
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    const inside =
      event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
    if (!inside) dialog.close();
  };

  const canary = kind === "own";
  const paper = canary ? "bg-ply-canary" : "bg-ply-white";
  const image = project ? projectImages[project.id] : undefined;
  const features = project?.caseStudy.keyFeatures[language] ?? [];

  return (
    <dialog
      ref={ref}
      aria-labelledby={TITLE_ID}
      onClose={handleClose}
      onClick={handleClick}
      className={cn(styles.sheet, paper)}
    >
      {project && (
        <>
          <div
            className={cn(
              "sticky top-0 z-10 flex items-center justify-between gap-4 border-b-[1.5px] border-ink px-5 py-0.5 max-[599px]:px-3",
              paper,
            )}
          >
            <span className="form-label">
              {canary ? (
                <>
                  {t.form.copy} 2 <span className="form-label-secondary">/ {t.projects.ownTitle}</span>
                </>
              ) : (
                <>
                  {t.form.item} {String(number).padStart(2, "0")} <span className="form-label-secondary">/ Düzey</span>
                </>
              )}
            </span>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="form-label -mr-2 inline-flex min-h-11 cursor-pointer items-center gap-1.5 px-2 text-[13px] text-carbon hover:bg-carbon/8 active:bg-carbon/15"
            >
              <X size={16} strokeWidth={2} aria-hidden="true" />
              {t.a11y.close}
            </button>
          </div>

          <div className="px-5 pt-5 pb-7 max-[599px]:px-3">
            <h2
              id={TITLE_ID}
              className="text-[clamp(26px,4.2vw,36px)] leading-[1.05] font-extrabold tracking-[-0.015em] text-balance [font-stretch:112%]"
            >
              {pick(project.title, language)}
            </h2>
            <p className="typed mt-2">
              {project.category[language]} · {project.year}
            </p>

            {image && (
              <ProjectShot
                className="mt-5"
                image={image}
                alt={image.alt[language]}
                ratio={image.shape === "portrait" ? portraitFrame : image.width / image.height}
                loading="eager"
                decoding="auto"
              />
            )}

            <div className="mt-6 border-y-[1.5px] border-ink">
              <Row label={t.projects.theVision}>
                <p className="max-w-[65ch] text-base leading-[1.55]">{project.caseStudy.overview[language]}</p>
              </Row>
              <Row label={t.projects.theChallenge}>
                <p className="max-w-[65ch] text-base leading-[1.55]">{project.caseStudy.challenge[language]}</p>
              </Row>
              <Row label={t.projects.theSolution}>
                <p className="max-w-[65ch] text-base leading-[1.55]">{project.caseStudy.solution[language]}</p>
              </Row>
              {features.length > 0 && (
                <Row label={t.projects.keyHighlights}>
                  <ul className="max-w-[65ch] list-[square] space-y-1.5 pl-5 text-base leading-[1.5] marker:text-ink">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </Row>
              )}
              {project.caseStudy.metrics.length > 0 && (
                <Row label={t.projects.verifiedMetrics}>
                  <dl className="max-w-[65ch]">
                    {project.caseStudy.metrics.map((metric) => (
                      <div
                        key={metric.label.en}
                        className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 border-b border-hairline py-1.5 first:pt-0 last:border-b-0 last:pb-0"
                      >
                        <dt className="form-label form-label-secondary">{metric.label[language]}</dt>
                        <dd className="typed">{pick(metric.value, language)}</dd>
                      </div>
                    ))}
                  </dl>
                </Row>
              )}
              <Row label={field(t.projects.techStack)}>
                <p className="typed max-w-[65ch]">{project.technologies.join(" · ")}</p>
              </Row>
              {(project.liveUrl || project.githubUrl) && (
                <Row label={field(t.projects.externalDestinations)}>
                  <div className="-mt-2.5 -mb-2 flex flex-wrap items-center gap-x-6">
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
