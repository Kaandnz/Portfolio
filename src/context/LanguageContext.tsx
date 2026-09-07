"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  useEffect(() => {
    // Check saved language or browser preference
    const saved = localStorage.getItem("preferred_lang") as Language | null;
    if (saved === "tr" || saved === "en") {
      setLanguage(saved);
    } else if (typeof navigator !== "undefined" && navigator.language.startsWith("tr")) {
      setLanguage("tr");
      queueMicrotask(() => {
        setLanguage(saved);
      });
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("preferred_lang", lang);
  };

  const toggleLanguage = () => {
    const next = language === "tr" ? "en" : "tr";
    handleSetLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage }}>
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

