import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "ABC Corp",
    period: "2022 – Present",
    description: "Developed and maintained React-based applications, improving performance and UI accessibility."
  },
  {
    title: "Web Designer",
    company: "Creative Studio",
    period: "2020 – 2022",
    description: "Designed responsive layouts, collaborated with developers, and implemented UX improvements."
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center bg-slate-50 py-20 px-8">
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Work Experience</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-600">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                  <span className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">{exp.period}</span>
                </div>
                <p className="text-lg text-blue-600 font-semibold mb-3">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed">{exp.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
