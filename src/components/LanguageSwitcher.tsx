import React from "react";
import { useLanguage } from "../i18n/context";
import type { Language } from "../i18n/translations";

interface LanguageSwitcherProps {
  /** Extra classes for placement — the component itself is layout-agnostic. */
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = "" }) => {
  const { language, setLanguage, t } = useLanguage();

  const options: { value: Language; label: string; lang: string }[] = [
    { value: "en", label: t.languageSwitcher.en, lang: "en" },
    { value: "zh", label: t.languageSwitcher.zh, lang: "zh-Hant" },
    { value: "id", label: t.languageSwitcher.id, lang: "id" },
  ];

  return (
    <div
      role="group"
      aria-label={t.languageSwitcher.label}
      className={`inline-flex items-center gap-1 rounded-full border border-white/10 bg-base/90 p-1 shadow-lg backdrop-blur ${className}`}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          lang={option.lang}
          onClick={() => setLanguage(option.value)}
          aria-pressed={language === option.value}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
            language === option.value
              ? "bg-mint text-deep shadow"
              : "text-slate-400 hover:text-mint"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
