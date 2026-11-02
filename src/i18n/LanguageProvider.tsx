import React, { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./context";
import { translations, type Language } from "./translations";

const STORAGE_KEY = "preferred-language";

/** Maps a BCP 47 tag prefix onto one of the site's languages. */
const matchLanguage = (tag: string): Language | null => {
  const lower = tag.toLowerCase();
  if (lower.startsWith("zh")) return "zh";
  // "in" is the legacy tag some browsers still report for Indonesian.
  if (lower.startsWith("id") || lower.startsWith("in")) return "id";
  if (lower.startsWith("en")) return "en";
  return null;
};

const detectInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && stored in translations) return stored as Language;

  // Honour the visitor's order of preference, not ours.
  const browserLanguages = window.navigator.languages ?? [window.navigator.language];
  for (const tag of browserLanguages) {
    const match = tag ? matchLanguage(tag) : null;
    if (match) return match;
  }

  return "en";
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = translations[language];

  // Keep the document in sync so screen readers, search engines and the browser
  // tab reflect the selected language.
  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
  }, [t]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
