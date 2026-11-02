import React from "react";
import { useLanguage } from "../i18n/context";

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-base/60 py-10 backdrop-blur">
      <div className="mx-auto max-w-6xl px-8 text-center">
        <p className="text-sm text-slate-400">{t.footer.rights(new Date().getFullYear())}</p>
      </div>
    </footer>
  );
};
