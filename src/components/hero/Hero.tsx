"use client";

import { useLanguage } from "@/context/LanguageContext";
import { pick } from "@/lib/i18n";
import { experienceData, personalInfo } from "@/data/portfolioData";
import LanguageLink from "@/components/ui/LanguageLink";
import HeroContact from "./HeroContact";

/** A printed checkbox: an ink square, filled with a carbon mark when ticked. */
function CheckMark({ on }: { on: boolean }) {
  return (
    <span aria-hidden="true" className="inline-grid size-3.5 place-items-center border-[1.5px] border-ink">
      {on && <span className="size-2 bg-carbon" />}
    </span>
  );
}

/**
 * The header band of the top copy: identity, typed fields and contact in one
 * ruled row. Projects places it at the top of the #work ply.
 */
export default function Hero() {
  const { language, t } = useLanguage();
  const [now, before] = experienceData;

  const entry = (e: (typeof experienceData)[number]) => `${pick(e.company, language)} · ${e.role[language]} · ${e.period[language]}`;

  const fields = [
    { label: t.form.now, value: entry(now) },
    { label: t.form.stack, value: t.hero.stack },
    { label: t.form.before, value: entry(before), desktopOnly: true },
  ];

  // Fixed order TR, EN on both pages; only the other language is a link.
  const marks = (["tr", "en"] as const).map((code) => {
    const label = code === language ? t.lang.code : t.lang.switchToCode;
    if (code === language) {
      return (
        <span key={code} aria-current="true" className="form-label inline-flex items-center gap-1.5">
          <CheckMark on />
          {label}{" "}
          <span className="sr-only">{t.lang.name}</span>
        </span>
      );
    }
    return (
      <LanguageLink
        key={code}
        className="form-label relative inline-flex items-center gap-1.5 hover:underline after:absolute after:-inset-x-2 after:-inset-y-3.5 after:content-['']"
      >
        <CheckMark on={false} />
        {label}{" "}
        <span className="sr-only">{t.lang.switchTo}</span>
      </LanguageLink>
    );
  });

  return (
    <header
      className="form-rule grid bg-ply-white min-[900px]:grid-cols-[1.2fr_1fr] min-[1200px]:grid-cols-[1.25fr_1fr_300px]"
    >
      {/* Identity */}
      <div className="pb-4">
        {/* Ruled form header strip: the form's title and the language boxes share one row. */}
        <div className="mb-2.5 flex items-center justify-between gap-4 border-b-[1.5px] border-ink px-3.5 py-2 min-[900px]:px-[18px]">
          <p className="text-[13px] leading-[1.35] font-extrabold tracking-[0.1em] text-ink uppercase [font-stretch:100%] min-[900px]:tracking-[0.16em] min-[900px]:[font-stretch:125%]">
            {t.form.title}
          </p>
          <div className="flex shrink-0 gap-3 pt-px">
            {marks}
          </div>
        </div>
        <h1 className="px-3.5 pt-0.5 min-[900px]:px-[18px] text-[clamp(42px,4.8vw,70px)] leading-[1] font-extrabold tracking-[-0.025em] text-type [font-stretch:112%]">
          {personalInfo.name}
        </h1>
        <p className="mt-2 px-3.5 text-[18px] leading-snug font-medium text-type min-[900px]:px-[18px] min-[900px]:text-[19px]">
          {personalInfo.title[language]} · {t.hero.location}
        </p>
      </div>

      {/* Typed fields */}
      <div className="border-t-[1.5px] border-ink px-3.5 pt-1.5 pb-2 max-[899px]:order-3 min-[900px]:border-t-0 min-[900px]:border-l-[1.5px] min-[900px]:px-[18px] min-[900px]:pt-1.5 min-[900px]:pb-2">
        <dl className="grid grid-cols-[max-content_1fr] gap-x-4">
          {fields.map((f) => (
            <div
              key={f.label}
              className={`col-span-2 grid grid-cols-subgrid border-hairline py-1 not-first:border-t ${
                f.desktopOnly ? "max-[899px]:hidden" : ""
              }`}
            >
              <dt className="form-label pt-0.5">{f.label}</dt>
              <dd className="typed min-w-0 leading-[1.3] break-words">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Contact */}
      <HeroContact className="border-t-[1.5px] border-ink max-[899px]:order-2 min-[900px]:col-span-2 min-[1200px]:col-span-1 min-[1200px]:border-t-0 min-[1200px]:border-l-[1.5px]" />
    </header>
  );
}
