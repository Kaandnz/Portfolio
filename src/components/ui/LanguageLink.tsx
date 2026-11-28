"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGE_STORAGE_KEY } from "@/lib/i18n";

/**
 * A real link to the same page in the other language. Clicking it saves the
 * choice, so the pre-paint redirect on "/" respects it next time.
 * Pass `children` to render custom content; `className` styles the anchor.
 */
export default function LanguageLink({ className, children }: { className?: string; children?: ReactNode }) {
  const { otherLanguage, otherHref, t } = useLanguage();

  const remember = () => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, otherLanguage);
    } catch {
      // storage blocked: the link still works, the choice just isn't remembered
    }
  };

  return (
    <a
      href={otherHref}
      hrefLang={otherLanguage}
      lang={otherLanguage}
      onClick={remember}
      className={className}
    >
      {children ?? t.lang.switchTo}
    </a>
  );
}
