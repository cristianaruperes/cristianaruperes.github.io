import React from "react";
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
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={0.1 * (index + 1)}>
                <div className="relative">
                  {/* Node on the rail. */}
                  <span className="absolute -left-8 top-8 h-3.5 w-3.5 rounded-full border-2 border-mint bg-deep sm:-left-12" />

                  <div className="panel p-8 transition-colors duration-300 hover:border-mint/40">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <span className="whitespace-nowrap rounded-pill border border-mint/30 bg-mint/10 px-4 py-1 font-mono text-small text-mintSoft">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-mint">
                      {exp.company} <span className="font-normal text-slate-500">· {exp.type}</span>
                    </p>
                    <p className="mb-4 font-mono text-small text-slate-500">{exp.location}</p>

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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
