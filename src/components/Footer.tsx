import React from "react";
import { useLanguage } from "../i18n/context";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="text-slate-600 text-sm">
          {t.footer.rights(new Date().getFullYear())}
        </p>
        <p className="text-slate-400 text-xs mt-2">
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
};