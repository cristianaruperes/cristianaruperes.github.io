import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../i18n/context";

const EMAIL = "cristianaruperes@gmail.com";

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeader command="./contact --say-hello" title={t.contact.heading} />

        <ScrollReveal>
          <div className="panel relative overflow-hidden p-8 sm:p-12">
            {/* Soft wash, echoing the hero */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mint/10 blur-3xl"
            />

            <div className="relative">
              <p className="max-w-2xl leading-relaxed text-slate-300 sm:text-lg">
                {t.contact.intro}
              </p>

              <dl className="mt-10 grid gap-8 sm:grid-cols-3">
                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    {t.contact.emailLabel}
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="break-all font-medium text-mint transition-opacity duration-300 hover:opacity-80"
                    >
                      {EMAIL}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    {t.contact.locationLabel}
                  </dt>
                  <dd className="mt-2 font-medium text-slate-200">{t.contact.locationValue}</dd>
                </div>

                <div>
                  <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">
                    {t.contact.socialLabel}
                  </dt>
                  <dd className="mt-2 flex gap-4">
                    <a
                      href="https://github.com/cristianaruperes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-200 transition-colors duration-300 hover:text-mint"
                    >
                      {t.sidebar.github}
                    </a>
                    <a
                      href="https://www.linkedin.com/in/cristian-aruperes/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-slate-200 transition-colors duration-300 hover:text-mint"
                    >
                      {t.sidebar.linkedin}
                    </a>
                  </dd>
                </div>
              </dl>

              <a
                href={`mailto:${EMAIL}`}
                className="group mt-10 inline-flex items-center gap-2 rounded-pill bg-mint px-8 py-3.5 font-semibold text-deep transition-all duration-300 hover:shadow-[0_0_30px_-6px_rgba(18,247,214,.8)]"
              >
                {t.contact.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
