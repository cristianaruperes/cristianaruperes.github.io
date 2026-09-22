import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "../i18n/context";

export const Education: React.FC = () => {
  const { t } = useLanguage();
  const education = t.education.items;

  return (
    <section id="education" className="bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">{t.education.heading}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{edu.degree}</h3>
                  <span className="px-4 py-1 bg-white text-blue-800 rounded-full text-sm font-medium whitespace-nowrap shadow-sm">
                    {edu.period}
                  </span>
                </div>
                <p className="text-blue-600 font-semibold">{edu.school}</p>
                {edu.note && <p className="text-slate-600 mt-3 leading-relaxed">{edu.note}</p>}
                {edu.honor && (
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5">
                    <span>★</span>
                    {edu.honor}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
