import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "../i18n/context";

export const Publications: React.FC = () => {
  const { t } = useLanguage();
  const { items: publications, certifications, languages } = t.publications;

  return (
    <section id="publications" className="bg-slate-50 py-20 px-8">
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">{t.publications.heading}</h2>
        </ScrollReveal>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-indigo-500">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 flex-1 min-w-[16rem]">{pub.title}</h3>
                  <span className="px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium whitespace-nowrap">
                    {pub.date}
                  </span>
                </div>
                <p className="text-indigo-600 font-semibold mb-3">{pub.venue}</p>
                <p className="text-slate-600 leading-relaxed">{pub.abstract}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <ScrollReveal delay={0.3}>
            <div className="bg-white p-6 rounded-2xl shadow-md h-full">
              <h3 className="font-bold text-slate-900 text-xl mb-4">{t.publications.certificationsHeading}</h3>
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <p className="text-slate-800 font-medium leading-snug">{cert.name}</p>
                  <p className="text-slate-500 text-sm mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-white p-6 rounded-2xl shadow-md h-full">
              <h3 className="font-bold text-slate-900 text-xl mb-4">{t.publications.languagesHeading}</h3>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex justify-between gap-4">
                    <span className="text-slate-800 font-medium">{lang.name}</span>
                    <span className="text-slate-500 text-sm text-right">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
