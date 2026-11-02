import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";

export const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-8 py-20">
      <div className="panel max-w-lg p-10 text-center">
        <p className="font-mono text-6xl font-bold text-mint">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white">{t.notFound.heading}</h1>
        <p className="mt-3 text-slate-400">{t.notFound.body}</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-pill bg-mint px-7 py-3 font-semibold text-deep transition-all duration-300 hover:shadow-[0_0_30px_-6px_rgba(18,247,214,.8)]"
        >
          {t.notFound.back}
        </Link>
      </div>
    </section>
  );
};
