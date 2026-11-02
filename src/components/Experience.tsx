import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../i18n/context";

/** Tech stacks stay untranslated — they line up with t.experience.items by index. */
const experienceSkills: string[][] = [
  ["LLM (Claude, GPT, Gemini, Llama)", "RAG", "MCP", ".NET", "C#", "SQL Server", "Power BI", "n8n", "REST API"],
  ["TensorFlow", "Keras", "Python", "NumPy", "Matplotlib", "Medical Image Segmentation", "Deep Learning"],
  ["React.js", "JavaScript", "HTML", "Azure", "JIRA", "Git", "REST API"],
  ["PHP", "Laravel", "MySQL", "WordPress", "Bootstrap", "OAuth", "Git"]
];

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  // The current role starts open; the rest expand on demand.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const experiences = t.experience.items.map((item, index) => ({
    ...item,
    skills: experienceSkills[index] ?? []
  }));

  return (
    <section id="experience" className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeader command="git log --author=cris" title={t.experience.heading} />

        {/* Vertical rail running the length of the timeline. */}
        <div className="relative pl-8 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-mint/60 before:via-white/15 before:to-transparent sm:pl-12">
          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const isOpen = openIndex === index;
              const panelId = `experience-panel-${index}`;

              return (
                <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                  <div className="relative">
                    {/* Node on the rail. */}
                    <span
                      className={`absolute -left-8 top-8 h-3.5 w-3.5 rounded-full border-2 bg-deep transition-colors duration-300 sm:-left-12 ${
                        isOpen ? "border-mint" : "border-white/25"
                      }`}
                    />

                    <div className="panel overflow-hidden transition-colors duration-300 hover:border-mint/40">
                      <h3>
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          className="flex w-full items-start gap-4 p-6 text-left sm:p-8"
                        >
                          <span className="flex-1">
                            <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                              <span className="text-xl font-bold text-white sm:text-2xl">
                                {exp.title}
                              </span>
                              <span className="font-mono text-small text-slate-500">
                                {exp.period}
                              </span>
                            </span>
                            <span className="mt-1 block font-semibold text-mint">
                              {exp.company}{" "}
                              <span className="font-normal text-slate-500">· {exp.type}</span>
                            </span>
                          </span>

                          {/* Chevron */}
                          <svg
                            aria-hidden="true"
                            className={`mt-1 h-5 w-5 shrink-0 text-mint transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      </h3>

                      {/* Collapsing panel: the grid trick animates to the content's
                          natural height without hard-coding one. */}
                      <div
                        id={panelId}
                        role="region"
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : // `invisible` keeps the collapsed copy out of the tab
                              // order and the accessibility tree, unlike `hidden`,
                              // which would cancel the animation.
                              "invisible grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                            <p className="mb-4 font-mono text-small text-slate-500">
                              {exp.location}
                            </p>

                            <ul className="mb-5 space-y-2">
                              {exp.highlights.map((point, i) => (
                                <li key={i} className="flex gap-3 leading-relaxed text-slate-300">
                                  <span className="mt-1.5 shrink-0 text-mint">▸</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="rounded-pill border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-400"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
