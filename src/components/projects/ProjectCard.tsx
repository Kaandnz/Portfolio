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
 * Editorial alternating horizontal row for Düzey production systems.
 * Pairs verified technical architecture specs with an unretouched screenshot stage.
 */
export function EnterpriseFeature({
  project,
  ratio,
  loading,
  reverse = false,
  onOpen,
}: {
  project: ProjectItem;
  ratio: number;
  loading: ShotLoading;
  reverse?: boolean;
  onOpen: Opener;
}) {
  const { language, t } = useLanguage();
  const image = projectImages[project.id];
  const titleId = `${project.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="grid items-center gap-8 border-t border-line py-10 lg:grid-cols-12 lg:gap-12 lg:py-14"
    >
      <div className={cn("min-w-0 lg:col-span-5", reverse && "lg:order-2")}>
        <p className="data-mono text-[12px] font-medium text-accent">
          Düzey · {project.year}
        </p>

        <h3
          id={titleId}
          className="mt-2.5 text-[clamp(22px,2.4vw,28px)] leading-[1.2] font-semibold tracking-[-0.025em] text-balance text-ink"
        >
          {pick(project.title, language)}
        </h3>

        <p className="mt-3 max-w-[54ch] text-[15px] leading-[1.6] text-ink-secondary">
          {project.description[language]}
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-4 border-y border-line py-3.5">
          {project.caseStudy.metrics.slice(0, 3).map((m) => (
            <div key={m.label.en} className="min-w-0">
              <dt className="truncate text-[11px] font-medium text-ink-muted">{m.label[language]}</dt>
              <dd className="data-mono mt-0.5 truncate text-[12.5px] font-medium text-ink">
                {pick(m.value, language)}
              </dd>
            </div>
          ))}
        </dl>

        <p className="data-mono mt-4 text-[12px] leading-[1.6] text-ink-muted">
          {project.technologies.slice(0, 5).join(" · ")}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CaseStudyButton surface="elevated" onOpen={onOpen} describedBy={titleId} />
          {project.liveUrl && (
            <ExternalLink href={project.liveUrl}>
              {project.liveLabel?.[language] ?? t.projects.liveSite}
            </ExternalLink>
          )}
        </div>
      </div>

      <div className={cn("min-w-0 lg:col-span-7", reverse && "lg:order-1")}>
        <div className="surface-card rounded-2xl p-2 sm:p-2.5">
          {image && (
            <ProjectShot
              image={image}
              alt={image.alt[language]}
              ratio={ratio}
              loading={loading}
              className="rounded-xl border-line/70"
            />
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * Calm dark product card for personal software ships across Web, AI, Android, and macOS.
 */
export function ProductCell({
  project,
  ratio,
  featured = false,
  onOpen,
}: {
  project: ProjectItem;
  ratio: number;
  featured?: boolean;
  onOpen: Opener;
}) {
  const { language, t } = useLanguage();
  const image = projectImages[project.id];
  const titleId = `${project.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className="surface-card surface-card-interactive flex min-w-0 flex-col rounded-[14px] p-4 sm:p-5"
    >
      {image && (
        <ProjectShot
          image={image}
          alt={image.alt[language]}
          ratio={ratio}
          loading="eager"
        />
      )}

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="truncate text-[12px] font-medium text-ink-muted">{project.category[language]}</span>
        <span className="data-mono shrink-0 text-[12px] text-ink-muted">{project.year}</span>
      </div>

      <h3
        id={titleId}
        className={cn(
          "mt-1.5 font-semibold tracking-[-0.02em] text-balance text-ink",
          featured ? "text-[19px] leading-[1.3] sm:text-[21px]" : "text-[17.5px] leading-[1.32]",
        )}
      >
        {pick(project.title, language)}
      </h3>

      <p className="mt-2 line-clamp-2 text-[14px] leading-[1.55] text-ink-secondary">
        {project.tagline[language]}
      </p>

      <p className="data-mono mt-3 truncate text-[12px] text-ink-muted">
        {project.technologies.slice(0, 3).join(" · ")}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-line pt-4">
        <CaseStudyButton surface="dark" onOpen={onOpen} describedBy={titleId} className="px-3 text-[12.5px]" />
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap items-center gap-x-3">
            {project.liveUrl && (
              <ExternalLink href={project.liveUrl} className="text-[13px]">
                {project.liveLabel?.[language] ?? t.projects.liveSite}
              </ExternalLink>
            )}
            {project.githubUrl && (
              <ExternalLink href={project.githubUrl} lang="en" className="text-[13px]">
                {t.contact.githubLabel}
              </ExternalLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
