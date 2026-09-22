import React from "react";
import { useLanguage } from "../i18n/context";
import type { Language } from "../i18n/translations";

interface LanguageSwitcherProps {
  /** Extra classes for placement — the component itself is layout-agnostic. */
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = "" }) => {
  const { language, setLanguage, t } = useLanguage();

  const options: { value: Language; label: string }[] = [
    { value: "en", label: t.languageSwitcher.en },
    { value: "zh", label: t.languageSwitcher.zh },
  ];

  return (
    <div
      role="group"
      aria-label={t.languageSwitcher.label}
      className={`inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1 shadow-sm backdrop-blur ${className}`}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          lang={option.value === "zh" ? "zh-Hant" : "en"}
          onClick={() => setLanguage(option.value)}
          aria-pressed={language === option.value}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
            language === option.value
              ? "bg-blue-600 text-white shadow"
              : "text-slate-500 hover:text-blue-600"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
