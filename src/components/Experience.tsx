
// ============================================
// src/components/Experience.tsx
// ============================================
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
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        </ScrollReveal>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-lg font-semibold">{exp.title} – {exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.period}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};