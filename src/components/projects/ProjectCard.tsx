"use client";

import { type ProjectItem } from "@/data/portfolioData";
import { projectImages } from "@/data/projectImages";
import { useLanguage } from "@/context/LanguageContext";
import { pick } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import ProjectShot, { type ShotLoading } from "./ProjectShot";
import { CaseStudyButton, ExternalLink } from "./ProjectActions";

type Opener = (opener: HTMLButtonElement) => void;

/**
 * A Düzey line item on the top ply: field row (item number, year), the
 * screenshot, title, one plain line, the stack as typed, and the actions.
 */
export function LineItem({
  project,
  number,
  ratio,
  loading,
  onOpen,
  className,
}: {
  project: ProjectItem;
  number: string;
  ratio: number;
  loading: ShotLoading;
  onOpen: Opener;
  className?: string;
}) {
  const { language, t } = useLanguage();
  const image = projectImages[project.id];
  const titleId = `${project.id}-title`;

  return (
    <article aria-labelledby={titleId} className={cn("flex min-w-0 flex-col px-3.5 pt-3 pb-3", className)}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="form-label">
          {t.form.item} {number}
        </span>
        <span className="typed">
          <span className="sr-only">{t.form.year}: </span>
          {project.year}
        </span>
      </div>

      {image && <ProjectShot image={image} alt={image.alt[language]} ratio={ratio} loading={loading} />}

      <h3 id={titleId} className="mt-3 text-[21px] leading-tight font-bold tracking-[-0.01em] text-balance">
        {pick(project.title, language)}
      </h3>
      <p className="mt-1 max-w-[60ch] text-[15px] leading-[1.45]">{project.tagline[language]}</p>
      <p className="typed mt-2">{project.technologies.slice(0, 4).join(" · ")}</p>

      <div className="mt-auto flex flex-wrap items-center gap-x-6 pt-1">
        <CaseStudyButton onOpen={onOpen} describedBy={titleId} />
        {project.liveUrl && (
          <ExternalLink href={project.liveUrl}>{project.liveLabel?.[language] ?? t.projects.liveSite}</ExternalLink>
        )}
      </div>
    </article>
  );
}

/**
 * One own product in the canary grid: screenshot, title, a typed meta line
 * (key stack · year), the open button and live/GitHub links. The rules on the
 * right and bottom of each cell meet the grid's left and top rules.
 */
export function ProductCell({
  project,
  ratio,
  onOpen,
}: {
  project: ProjectItem;
  ratio: number;
  onOpen: Opener;
}) {
  const { language, t } = useLanguage();
  const image = projectImages[project.id];
  const titleId = `${project.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="flex min-w-0 flex-col border-r-[1.5px] border-b-[1.5px] border-ink px-2.5 pt-2.5 pb-2"
    >
      {image && <ProjectShot image={image} alt={image.alt[language]} ratio={ratio} />}

      <h3 id={titleId} className="mt-3 text-base leading-snug font-bold text-balance">
        {pick(project.title, language)}
      </h3>
      <p className="typed mt-0.5 text-[13px]">
        {project.technologies.slice(0, 2).join(" · ")} · {project.year}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 pt-1">
        <CaseStudyButton onOpen={onOpen} describedBy={titleId} />
        {project.liveUrl && (
          <ExternalLink href={project.liveUrl}>{project.liveLabel?.[language] ?? t.projects.liveSite}</ExternalLink>
        )}
        {project.githubUrl && (
          <ExternalLink href={project.githubUrl} lang="en">
            {t.contact.githubLabel}
          </ExternalLink>
        )}
      </div>
    </article>
  );
}
