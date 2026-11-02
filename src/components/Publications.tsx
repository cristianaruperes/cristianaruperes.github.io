import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../i18n/context";

/**
 * Where each paper can be read, lining up with `t.publications.items` by index.
 * URLs stay untranslated. Leave an entry empty and no link is rendered.
 */
const publicationLinks: string[] = [
  // Lung Nodule Analysis in CT Images — ICMHI 2024, published by ACM
  "https://dl.acm.org/doi/10.1145/3673971.3673994",
  // Web Portal for Higher Education in North Sulawesi — Corisindo
  "https://ejournal.raharja.ac.id/index.php/corisindo/article/view/1912"
];

export const Publications: React.FC = () => {
  const { t } = useLanguage();
  const { items: publications, certifications, languages } = t.publications;

  return (
    <section id="publications" className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeader command="cat papers/*.bib" title={t.publications.heading} />

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <div className="panel border-l-2 border-l-mint p-8 transition-colors duration-300 hover:border-mint/40">
                <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                  <h3 className="min-w-[16rem] flex-1 text-xl font-bold text-white">{pub.title}</h3>
                  <span className="whitespace-nowrap rounded-pill border border-white/10 bg-white/5 px-4 py-1 font-mono text-small text-slate-300">
                    {pub.date}
                  </span>
                </div>
                <p className="mb-3 font-semibold text-mint">{pub.venue}</p>
                <p className="leading-relaxed text-slate-400">{pub.abstract}</p>

                {publicationLinks[index] && (
                  <a
                    href={publicationLinks[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-mint transition-all duration-300 hover:gap-3"
                  >
                    {t.publications.viewPaper}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ScrollReveal delay={0.3}>
            <div className="panel h-full p-6">
              <h3 className="mb-4 text-xl font-bold text-white">
                {t.publications.certificationsHeading}
              </h3>
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <p className="font-medium leading-snug text-slate-200">{cert.name}</p>
                  <p className="mt-1 font-mono text-small text-slate-500">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="panel h-full p-6">
              <h3 className="mb-4 text-xl font-bold text-white">
                {t.publications.languagesHeading}
              </h3>
              <ul className="space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex justify-between gap-4">
                    <span className="font-medium text-slate-200">{lang.name}</span>
                    <span className="text-right font-mono text-small text-slate-500">
                      {lang.level}
                    </span>
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
