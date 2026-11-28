"use client";

import { useLanguage } from "@/context/LanguageContext";
import { pick } from "@/lib/i18n";
import { experienceData, personalInfo } from "@/data/portfolioData";
import HeroContact from "./HeroContact";

const stackTags = [
  ".NET Core / C#",
  "Java Spring Boot",
  "Angular · React",
  "PostgreSQL · SQL Server",
  "SAP & Panorama",
];

/**
 * Top billboard: dual-track billing and core stack tags on the left, current
 * Düzey role and direct contact actions on the right.
 */
export default function Hero() {
  const { language, t } = useLanguage();
  const [now] = experienceData;

  return (
    <section
      aria-labelledby="hero-name"
      className="grid border-2 border-stock bg-press min-[960px]:grid-cols-[1.32fr_0.68fr]"
    >
      <div className="p-3 min-[900px]:px-6 min-[900px]:py-5">
        <h1
          id="hero-name"
          className="display-bill text-[clamp(42px,6.2vw,86px)] leading-[0.88] font-bold tracking-[-0.015em] text-yellow"
        >
          {personalInfo.name}
        </h1>

        <p className="display-bill mt-1 text-[18.5px] leading-[1.02] font-bold tracking-[0.01em] text-vermilion min-[480px]:text-[24px] min-[900px]:mt-2 min-[900px]:text-[clamp(24px,2.8vw,38px)] min-[900px]:leading-[0.98]">
          {t.hero.doubleBillLeft}
          <span aria-hidden="true" className="mx-1.5 text-[0.72em] text-stock min-[900px]:mx-2">
            +
          </span>
          <span className="sr-only"> + </span>
          {t.hero.doubleBillRight}
        </p>

        <ul aria-label={t.form.stack} className="mt-2.5 flex flex-wrap gap-1.5 min-[900px]:mt-4 min-[900px]:gap-2">
          {stackTags.map((tag, index) => (
            <li
              key={tag}
              className={`ballyhoo-tag max-[639px]:px-2 max-[639px]:py-0.5 ${
                index % 2 === 0 ? "ballyhoo-tag-odd" : "ballyhoo-tag-even"
              }`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col justify-between gap-2.5 border-t-2 border-vermilion bg-press p-3 min-[960px]:gap-4 min-[960px]:border-t-0 min-[960px]:border-l-2 min-[960px]:px-5 min-[960px]:py-5">
        <div>
          <p className="text-[14.5px] leading-snug font-bold text-stock min-[900px]:text-[16px]">
            {personalInfo.title[language]} · {t.hero.location}
          </p>
          <p className="mt-0.5 text-[13.5px] leading-[1.4] text-paper-muted min-[900px]:mt-1 min-[900px]:text-[14.5px]">
            {pick(now.company, language)} ({now.period[language]}) · {t.nav.available}
          </p>
        </div>

        <HeroContact />
      </div>
    </section>
  );
}
