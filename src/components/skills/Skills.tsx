"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skillsGrouped } from "@/data/portfolioData";
import { pick } from "@/lib/i18n";

/**
 * Clean 2-column technical specification matrix: crisp typographic grouping
 * without gray pill clutter so engineering leads can scan capabilities quickly.
 */
export default function Skills() {
  const { language, t } = useLanguage();
  const groups = Object.entries(skillsGrouped);

  return (
    <section
      id="skills"
      className="page-shell pt-14 pb-12 min-[900px]:pt-20"
      aria-labelledby="skills-title"
    >
      <div className="max-w-[66ch]">
        <h2
          id="skills-title"
          className="text-[clamp(26px,3.4vw,38px)] leading-[1.12] font-semibold tracking-[-0.03em] text-ink"
        >
          {t.skills.heading1} {t.skills.heading2}
        </h2>
        <p className="mt-2.5 text-[15.5px] leading-[1.6] text-ink-secondary">{t.skills.subtitle}</p>
      </div>

      <dl className="mt-8 grid border-t border-line lg:grid-cols-2">
        {groups.map(([key, group], idx) => (
          <div
            key={key}
            className={`border-b border-line py-5 ${idx % 2 === 0 ? "lg:pr-8" : "lg:border-l lg:pl-8"}`}
          >
            <dt className="data-mono text-[12px] font-medium text-accent">{group.title[language]}</dt>
            <dd className="mt-2 text-[14.5px] leading-[1.65] text-ink-secondary">
              {group.skills.map((skill) => pick(skill, language)).join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
