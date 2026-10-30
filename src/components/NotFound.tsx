import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";

export const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-8 py-20">
      <div className="text-center">
        <p className="text-6xl font-bold text-blue-600">404</p>
        <h1 className="mt-4 text-3xl font-bold text-slate-900">{t.notFound.heading}</h1>
        <p className="mt-3 text-slate-500">{t.notFound.body}</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700"
        >
          {t.notFound.back}
        </Link>
      </div>
    </section>
  );
};
