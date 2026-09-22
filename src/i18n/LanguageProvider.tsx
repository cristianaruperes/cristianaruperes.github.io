import React, { useCallback, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./context";
import { translations, type Language } from "./translations";

const STORAGE_KEY = "preferred-language";

const detectInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "zh") return stored;

  const browserLanguages = window.navigator.languages ?? [window.navigator.language];
  return browserLanguages.some((lang) => lang?.toLowerCase().startsWith("zh")) ? "zh" : "en";
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
