"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { pick } from "@/lib/i18n";
import { educationData, experienceData } from "@/data/portfolioData";

function TimelineRow({
  aside,
  children,
}: {
  aside: ReactNode;
  children: ReactNode;
}) {
  return (
    <li className="grid gap-x-10 gap-y-3 border-t border-line py-8 md:grid-cols-[220px_minmax(0,1fr)]">
      <div className="min-w-0">{aside}</div>
      <div className="min-w-0">{children}</div>
    </li>
  );
}

/**
 * Clean Stripe/Linear career and education ledger preceded by verified portfolio counts.
 */
export default function Experience() {
  const { language, t } = useLanguage();

  const stats = [
    { label: t.about.statYearsLabel, value: t.about.statYears },
    { label: t.about.statEnterpriseLabel, value: "2" },
    { label: t.about.statOwnLabel, value: "8" },
    { label: t.about.statQualityLabel, value: t.about.statQuality },
  ];

  return (
    <section
      id="experience"
      className="page-shell border-t border-line pt-14 pb-10 min-[900px]:pt-20"
      aria-labelledby="experience-title"
    >
      <div className="max-w-[66ch]">
        <h2
          id="experience-title"
          className="text-[clamp(26px,3.4vw,38px)] leading-[1.12] font-semibold tracking-[-0.03em] text-ink"
        >
          {t.experience.heading1} {t.experience.heading2}
        </h2>
        <p className="mt-2.5 text-[15.5px] leading-[1.6] text-ink-secondary">{t.about.description}</p>
      </div>

      <dl className="surface-card mt-8 grid grid-cols-2 overflow-hidden rounded-xl sm:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-4 py-4 sm:px-5 ${i > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : ""} ${i === 1 ? "border-l border-line" : ""}`}
          >
            <dt className="text-[12px] text-ink-muted">{stat.label}</dt>
            <dd className="data-mono mt-1 text-[20px] font-medium tracking-[-0.02em] text-ink">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <ol className="mt-8 border-b border-line">
        {experienceData.map((job) => (
          <TimelineRow
            key={job.id}
            aside={
              <>
                <p className="data-mono text-[12.5px] font-medium text-accent">{job.period[language]}</p>
                <p className="mt-1 text-[13px] text-ink-muted">{job.location[language]}</p>
              </>
            }
          >
            <h3 className="text-[19px] leading-snug font-semibold tracking-[-0.015em] text-ink">
              {job.role[language]}
            </h3>
            <p className="mt-0.5 text-[14.5px] font-medium text-ink-secondary">{pick(job.company, language)}</p>

            <p className="mt-3 max-w-[68ch] text-[15px] leading-[1.6] text-ink-secondary">{job.description[language]}</p>

            <ul className="mt-3 grid max-w-[68ch] list-disc gap-1.5 pl-4 text-[14.5px] leading-[1.58] text-ink-secondary/90 marker:text-ink-muted">
              {job.achievements[language].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="data-mono mt-4 text-[12px] leading-[1.6] text-ink-muted">
              {job.technologies.join(" · ")}
            </p>
          </TimelineRow>
        ))}

        <TimelineRow
          aside={
            <>
              <p className="data-mono text-[12.5px] font-medium text-accent">{t.form.education}</p>
              <p className="data-mono mt-1 text-[13px] text-ink-muted">
                {t.about.gpaLabel}: {educationData.gpa}
              </p>
            </>
          }
        >
          <h3 className="text-[19px] leading-snug font-semibold tracking-[-0.015em] text-ink">
            {educationData.degree[language]}
          </h3>
          <p className="mt-0.5 text-[14.5px] font-medium text-ink-secondary">{educationData.school[language]}</p>
          <p className="mt-3 max-w-[68ch] text-[15px] leading-[1.6] text-ink-secondary">
            {educationData.details[language]}
          </p>
        </TimelineRow>
      </ol>
    </section>
  );
}
