"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { pick } from "@/lib/i18n";
import { educationData, experienceData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

/*
 * Pink copy of the set: experience and education as ruled form rows
 * (period | entry | stack). The former About copy is the lede; its stats are
 * plain form fields in one ruled row.
 */

function FormRow({
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
        !first && "border-t-[1.5px] border-ink",
      )}
    >
      <div className="border-b border-hairline px-4 pt-3 pb-2.5 md:row-span-2 md:border-r-[1.5px] md:border-b-0 md:border-ink md:py-4 xl:row-span-1">
        {aside}
      </div>
      <div className="min-w-0 px-4 pt-3 pb-3 md:pt-4 xl:pb-5">{children}</div>
      <div className="min-w-0 px-4 pb-5 md:col-start-2 xl:col-start-3 xl:row-start-1 xl:border-l-[1.5px] xl:border-ink xl:py-4">
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
    <section id="experience" className="ply ply-pink" aria-labelledby="experience-title">
      <h2
        id="experience-title"
        className="text-[clamp(28px,3.2vw,40px)] leading-[1.02] font-extrabold tracking-[-0.02em] text-balance [font-stretch:112%]"
      >
        {t.experience.heading1} {t.experience.heading2}
      </h2>
      <p className="mt-3 max-w-[65ch] text-[16.5px] leading-[1.55]">{t.about.description}</p>

      <dl className="mt-6 grid border-[1.5px] border-ink sm:grid-cols-3">
        {fields.map((field, i) => (
          <div
            key={field.label}
            className={cn(
              "flex items-baseline justify-between gap-4 px-4 py-3 sm:block",
              i > 0 && "border-t-[1.5px] border-ink sm:border-t-0 sm:border-l-[1.5px]",
            )}
          >
            <dt className="form-label">{field.label}</dt>
            <dd className="typed shrink-0 sm:mt-1.5">{field.value}</dd>
          </div>
        ))}
      </dl>

      <ol className="mt-5 border-[1.5px] border-ink">
        {experienceData.map((job, i) => (
          <FormRow
            key={job.id}
            first={i === 0}
            aside={
              <>
                <p className="typed">{job.period[language]}</p>
                <p className="mt-1 text-[14px] leading-snug text-ink-soft">{job.location[language]}</p>
              </>
            }
            side={
              <>
                <p className="form-label">{t.form.stack}</p>
                <p className="typed mt-1.5 break-words">{job.technologies.join("\u00a0· ")}</p>
              </>
            }
          >
            <h3 className="text-[20px] leading-tight font-bold tracking-[-0.01em]">{job.role[language]}</h3>
            <p className="mt-0.5 text-[16px] font-medium text-ink-soft">{pick(job.company, language)}</p>
            <p className="mt-3 max-w-[70ch] text-[15.5px] leading-[1.55]">{job.description[language]}</p>
            <ul className="mt-3 grid max-w-[70ch] list-[square] gap-1.5 pl-5 text-[15px] leading-[1.5] marker:text-ink">
              {job.achievements[language].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FormRow>
        ))}

        <FormRow
          aside={<p className="form-label">{t.form.education}</p>}
          side={
            <p className="flex items-baseline gap-3">
              <span className="form-label">{t.about.gpaLabel}</span>
              <span className="typed">{educationData.gpa}</span>
            </p>
          }
        >
          <h3 className="text-[20px] leading-tight font-bold tracking-[-0.01em]">{educationData.degree[language]}</h3>
          <p className="mt-0.5 text-[16px] font-medium text-ink-soft">{educationData.school[language]}</p>
          <p className="mt-3 max-w-[70ch] text-[15.5px] leading-[1.55]">{educationData.details[language]}</p>
        </FormRow>
      </ol>
      {/* Copy designation printed in the sheet's corner, like a carbon set's ply mark. */}
      <span aria-hidden="true" className="ply-mark form-label">
        {t.form.copy} 3
      </span>
    </section>
  );
}
