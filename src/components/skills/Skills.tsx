"use client";

import { useLanguage } from "@/context/LanguageContext";
import { skillsGrouped } from "@/data/portfolioData";
import { pick } from "@/lib/i18n";

export default function Skills() {
  const { language, t } = useLanguage();
  const groups = Object.entries(skillsGrouped);

  return (
    <section
      id="skills"
      className="sheet-stock mt-10 border-2 border-stock bg-stock p-4 text-ink min-[900px]:p-7"
      aria-labelledby="skills-title"
    >
      <h2
        id="skills-title"
        className="display-bill text-[clamp(34px,4vw,48px)] leading-[0.95] font-bold tracking-[-0.01em] text-balance text-ink"
      >
        {t.skills.heading1} {t.skills.heading2}
      </h2>
      <p className="mt-3 max-w-[65ch] text-[16px] leading-[1.55] text-ink-muted">{t.skills.subtitle}</p>

      <dl className="mt-6 grid border-t-2 border-l-2 border-ink lg:grid-cols-2">
        {groups.map(([key, group]) => (
          <div
            key={key}
            className="grid gap-x-4 gap-y-1.5 border-r-2 border-b-2 border-ink bg-stock px-4 py-3.5 sm:grid-cols-[10rem_1fr]"
          >
            <dt className="text-[12.5px] font-extrabold tracking-[0.06em] text-vermilion-ink uppercase sm:pt-0.5">
              {group.title[language]}
            </dt>
            <dd className="min-w-0 text-[15px] leading-[1.5] font-medium break-words text-ink">
              {group.skills.map((skill) => pick(skill, language)).join("\u00a0· ")}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
