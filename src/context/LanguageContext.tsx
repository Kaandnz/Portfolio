"use client";

import { createContext, useContext, type ReactNode } from "react";
import { getDictionary, languagePaths, type Dictionary, type Language } from "@/lib/i18n";

export type { Language } from "@/lib/i18n";

interface LanguageContextType {
  /** Fixed per route: "/" is Turkish, "/en/" is English. */
  language: Language;
  /** The other language. */
  otherLanguage: Language;
  /** Path of the same page in the other language. */
  otherHref: string;
  /** UI copy for the current language (translations.ts). */
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ language, children }: { language: Language; children: ReactNode }) {
  const otherLanguage: Language = language === "tr" ? "en" : "tr";
  return (
    <LanguageContext.Provider
      value={{ language, otherLanguage, otherHref: languagePaths[otherLanguage], t: getDictionary(language) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
