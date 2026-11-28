import { translations } from "@/data/translations";

export const locales = ["tr", "en"] as const;
export type Language = (typeof locales)[number];
export const defaultLanguage: Language = "tr";

/** Static paths: Turkish lives at "/", English at "/en/" (trailingSlash is on). */
export const languagePaths: Record<Language, string> = { tr: "/", en: "/en/" };

/** localStorage key kept from the previous site so returning visitors keep their choice. */
export const LANGUAGE_STORAGE_KEY = "preferred_lang";

export type Dictionary = (typeof translations)["tr"];

export function getDictionary(lang: Language): Dictionary {
  return translations[lang];
}

/** Optional catch-all segment -> language. `undefined` is "/", ["en"] is "/en/". */
export function languageFromSegments(segments: string[] | undefined): Language | null {
  if (!segments || segments.length === 0) return "tr";
  if (segments.length === 1 && segments[0] === "en") return "en";
  return null;
}

/** Picks one side of a `{ tr, en }` pair; plain strings pass through. */
export function pick<T>(value: T | { tr: T; en: T }, lang: Language): T {
  if (value && typeof value === "object" && "tr" in (value as object) && "en" in (value as object)) {
    return (value as { tr: T; en: T })[lang];
  }
  return value as T;
}

/**
 * Runs before first paint on "/" only. Sends a visitor to /en/ when they saved
 * English earlier, or when they have no saved choice and their browser language
 * is not Turkish. Crawlers are never redirected, so both pages stay indexable.
 */
export const languageRedirectScript = `(function(){try{var k=${JSON.stringify(
  LANGUAGE_STORAGE_KEY,
)};var s=localStorage.getItem(k);var ua=navigator.userAgent||"";if(/bot|crawl|spider|slurp|lighthouse/i.test(ua))return;var l=(navigator.languages&&navigator.languages[0])||navigator.language||"";if(s==="en"||(!s&&!/^tr/i.test(l))){location.replace("/en/"+location.hash);}}catch(e){}})();`;
