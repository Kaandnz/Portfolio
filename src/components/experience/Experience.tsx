"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { pick } from "@/lib/i18n";
import { educationData, experienceData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

function LedgerRow({
  first,
  aside,
  children,
  side,
}: {
  first?: boolean;
  aside: ReactNode;
  children: ReactNode;
  side: ReactNode;
}) {
  return (
    <li
      className={cn(
        "grid md:grid-cols-[minmax(176px,14rem)_minmax(0,1fr)] xl:grid-cols-[14.5rem_minmax(0,1fr)_minmax(15rem,19rem)]",
        !first && "border-t-2 border-stock/35",
      )}
    >
      <div className="border-b border-rule-dark px-4 pt-3.5 pb-3 md:row-span-2 md:border-r-2 md:border-b-0 md:border-stock/35 md:py-4 xl:row-span-1">
        {aside}
      </div>
      <div className="min-w-0 px-4 pt-3.5 pb-3 md:pt-4 xl:pb-5">{children}</div>
      <div className="min-w-0 px-4 pb-5 md:col-start-2 xl:col-start-3 xl:row-start-1 xl:border-l-2 xl:border-stock/35 xl:py-4">
        {side}
      </div>
    </li>
  );
}

export default function Experience() {
  const { language, t } = useLanguage();

  const fields = [
    { label: t.about.statYearsLabel, value: t.about.statYears },
    { label: t.about.statStackLabel, value: t.about.statStack },
    { label: t.about.statQualityLabel, value: t.about.statQuality },
  ];

  return (
    <section
      id="experience"
      className="mt-10 border-2 border-stock/40 bg-press p-4 min-[900px]:p-7"
      aria-labelledby="experience-title"
    >
      <h2
        id="experience-title"
        className="display-bill text-[clamp(34px,4vw,48px)] leading-[0.95] font-bold tracking-[-0.01em] text-balance text-yellow"
      >
        {t.experience.heading1} {t.experience.heading2}
      </h2>
      <p className="mt-3 max-w-[65ch] text-[16px] leading-[1.55] text-paper-muted">{t.about.description}</p>

      <dl className="mt-6 grid border-2 border-stock/40 bg-press-deep sm:grid-cols-3">
        {fields.map((field, i) => (
          <div
            key={field.label}
            className={cn(
              "flex items-baseline justify-between gap-4 px-4 py-3 sm:block",
              i > 0 && "border-t-2 border-stock/40 sm:border-t-0 sm:border-l-2",
            )}
          >
            <dt className="text-[12px] font-bold tracking-[0.06em] text-paper-muted uppercase">{field.label}</dt>
            <dd className="data-mono shrink-0 text-[16px] font-bold text-yellow sm:mt-1.5">{field.value}</dd>
          </div>
        ))}
      </dl>

      <ol className="mt-5 border-2 border-stock/40">
        {experienceData.map((job, i) => (
          <LedgerRow
            key={job.id}
            first={i === 0}
            aside={
              <>
                <p className="data-mono text-[13.5px] font-bold text-yellow">{job.period[language]}</p>
                <p className="mt-1 text-[14px] leading-snug text-paper-muted">{job.location[language]}</p>
              </>
            }
            side={
              <>
                <p className="text-[12px] font-bold tracking-[0.06em] text-paper-muted uppercase">{t.form.stack}</p>
                <p className="data-mono mt-1.5 text-[13px] leading-[1.5] break-words text-stock">
                  {job.technologies.join("\u00a0· ")}
                </p>
              </>
            }
          >
            <h3 className="text-[21px] leading-tight font-extrabold tracking-[-0.01em] text-stock">
              {job.role[language]}
            </h3>
            <p className="mt-0.5 text-[16px] font-bold text-vermilion">{pick(job.company, language)}</p>
            <p className="mt-3 max-w-[68ch] text-[15.5px] leading-[1.55] text-stock/95">{job.description[language]}</p>
            <ul className="mt-3 grid max-w-[68ch] list-[square] gap-1.5 pl-5 text-[15px] leading-[1.5] text-paper-muted marker:text-yellow">
              {job.achievements[language].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </LedgerRow>
        ))}

        <LedgerRow
          aside={
            <p className="text-[12.5px] font-extrabold tracking-[0.07em] text-yellow uppercase">{t.form.education}</p>
          }
          side={
            <p className="flex items-baseline gap-3">
              <span className="text-[12px] font-bold tracking-[0.06em] text-paper-muted uppercase">
                {t.about.gpaLabel}
              </span>
              <span className="data-mono text-[15px] font-bold text-yellow">{educationData.gpa}</span>
            </p>
          }
        >
          <h3 className="text-[21px] leading-tight font-extrabold tracking-[-0.01em] text-stock">
            {educationData.degree[language]}
          </h3>
          <p className="mt-0.5 text-[16px] font-bold text-vermilion">{educationData.school[language]}</p>
          <p className="mt-3 max-w-[68ch] text-[15.5px] leading-[1.55] text-stock/95">
            {educationData.details[language]}
          </p>
        </LedgerRow>
      </ol>
    </section>
  );
}
