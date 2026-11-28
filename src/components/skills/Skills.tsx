"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skillsGrouped } from "@/data/portfolioData";
import { pick } from "@/lib/i18n";

/*
 * Skills as a ruled field table: each group's title is the printed field label,
 * its skills one typed line. Two columns of fields from 1024px, one below.
 */
export default function Skills() {
  const { language, t } = useLanguage();
  const groups = Object.entries(skillsGrouped);

  return (
    <section id="skills" className="ply" aria-labelledby="skills-title">
      <h2
        id="skills-title"
        className="text-[clamp(28px,3.2vw,40px)] leading-[1.02] font-extrabold tracking-[-0.02em] text-balance [font-stretch:112%]"
      >
        {t.skills.heading1} {t.skills.heading2}
      </h2>
      <p className="mt-3 max-w-[65ch] text-[16.5px] leading-[1.55]">{t.skills.subtitle}</p>

      {/* The outer frame is drawn by the cells' own rules so the grid never doubles a line. */}
      <dl className="mt-6 grid border-t-[1.5px] border-l-[1.5px] border-ink lg:grid-cols-2">
        {groups.map(([key, group]) => (
          <div
            key={key}
            className="grid gap-x-4 gap-y-1.5 border-r-[1.5px] border-b-[1.5px] border-ink px-4 py-3 sm:grid-cols-[9.5rem_1fr]"
          >
            <dt className="form-label sm:pt-0.5">{group.title[language]}</dt>
            <dd className="typed min-w-0 break-words">
              {group.skills.map((skill) => pick(skill, language)).join("\u00a0· ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
