import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../i18n/context";

export const Faq: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeader command="cat faq.md" title={t.faq.heading} />

        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <ScrollReveal key={item.q} delay={index * 0.06}>
                <div className="panel overflow-hidden transition-colors duration-300 hover:border-mint/40">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center gap-4 p-6 text-left"
                    >
                      <span className="flex-1 font-semibold text-white">{item.q}</span>
                      <span
                        aria-hidden="true"
                        className={`shrink-0 font-mono text-xl text-mint transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-slate-400">{item.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
