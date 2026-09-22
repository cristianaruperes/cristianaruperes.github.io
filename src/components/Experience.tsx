import React from "react";
import { ScrollReveal } from "./ScrollReveal";
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
    <section id="experience" className="bg-slate-50 py-20 px-8">
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">{t.experience.heading}</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-600">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                  <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-lg text-blue-600 font-semibold">
                  {exp.company} <span className="text-slate-400 font-normal">· {exp.type}</span>
                </p>
                <p className="text-sm text-slate-500 mb-4">{exp.location}</p>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                      <span className="text-blue-500 mt-1.5 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
