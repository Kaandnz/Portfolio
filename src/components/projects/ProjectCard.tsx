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
 * Featured enterprise bill card for a Düzey system. Screenshots stay
 * unretouched inside clean cream frames with zero overlay copy.
 */
export function LineItem({
  project,
  accent,
  ratio,
  loading,
  onOpen,
  className,
}: {
  project: ProjectItem;
  accent: "yellow" | "vermilion";
  ratio: number;
  loading: ShotLoading;
  onOpen: Opener;
  className?: string;
}) {
  const { language, t } = useLanguage();
  const image = projectImages[project.id];
  const titleId = `${project.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "flex min-w-0 flex-col border-2 bg-press p-3 min-[900px]:p-5",
        accent === "yellow" ? "border-yellow" : "border-vermilion",
        className,
      )}
    >
      {image && (
        <ProjectShot
          image={image}
          alt={image.alt[language]}
          ratio={ratio}
          loading={loading}
          className="border-stock"
        />
      )}

      <h3
        id={titleId}
        className="mt-2.5 text-[20px] leading-[1.15] font-extrabold tracking-[-0.01em] text-balance text-stock min-[900px]:mt-3.5 min-[900px]:text-[22px] min-[1200px]:text-[24px]"
      >
        {pick(project.title, language)}
      </h3>

      <p className="mt-1 max-w-[60ch] text-[14px] leading-[1.42] text-paper-muted min-[900px]:mt-1.5 min-[900px]:text-[14.5px]">
        {project.tagline[language]}
      </p>

      <p className="data-mono mt-2 text-[12px] font-medium text-yellow min-[900px]:mt-2.5 min-[900px]:text-[12.5px]">
        Düzey · {project.year} · {project.technologies.slice(0, 4).join(" · ")}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-rule-dark pt-2.5 min-[900px]:pt-3.5">
        <CaseStudyButton surface="dark" onOpen={onOpen} describedBy={titleId} />
        {project.liveUrl && (
          <ExternalLink surface="dark" href={project.liveUrl}>
            {project.liveLabel?.[language] ?? t.projects.liveSite}
          </ExternalLink>
        )}
      </div>
    </article>
  );
}

/**
 * Own product cell on warm cream stock: crisp screenshot frame, title,
 * mono data line, case-study trigger, and live/repo links.
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
      className="flex min-w-0 flex-col border-r-2 border-b-2 border-ink bg-stock p-3.5"
    >
      {image && (
        <ProjectShot
          image={image}
          alt={image.alt[language]}
          ratio={ratio}
          loading="eager"
          className="border-ink bg-press"
        />
      )}

      <h3 id={titleId} className="mt-3 text-[17.5px] leading-snug font-extrabold text-balance text-ink">
        {pick(project.title, language)}
      </h3>

      <p className="data-mono mt-1 text-[12px] font-bold text-vermilion-ink">
        {project.technologies.slice(0, 2).join(" · ")} · {project.year}
      </p>

      <div className="mt-auto flex flex-col items-start gap-1.5 pt-3">
        <CaseStudyButton surface="stock" onOpen={onOpen} describedBy={titleId} className="px-2.5 text-[12px]" />
        {(project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap items-center gap-x-2">
            {project.liveUrl && (
              <ExternalLink surface="stock" href={project.liveUrl} className="px-1 text-[13.5px]">
                {project.liveLabel?.[language] ?? t.projects.liveSite}
              </ExternalLink>
            )}
            {project.githubUrl && (
              <ExternalLink surface="stock" href={project.githubUrl} lang="en" className="px-1 text-[13.5px]">
                {t.contact.githubLabel}
              </ExternalLink>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
