import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../i18n/context";

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const education = t.education.items;

  return (
    <section id="education" className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeader command="cat education.yml" title={t.education.heading} />

        <div className="space-y-6">
          {education.map((edu, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <div className="panel p-8 transition-colors duration-300 hover:border-mint/40">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <span className="whitespace-nowrap rounded-pill border border-white/10 bg-white/5 px-4 py-1 font-mono text-small text-slate-300">
                    {edu.period}
                  </span>
                </div>
                <p className="font-semibold text-mint">{edu.school}</p>
                {edu.note && <p className="mt-3 leading-relaxed text-slate-400">{edu.note}</p>}
                {edu.honor && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-pill border border-brand-js/40 bg-brand-js/10 px-4 py-1.5 text-sm font-medium text-brand-js">
                    <span aria-hidden="true">★</span>
                    {edu.honor}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
