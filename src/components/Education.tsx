import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

const education: EducationItem[] = [
  {
    degree: "B.S. in Computer Science",
    school: "University of Example",
    period: "2016–2020"
  }
];

export const Education: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-600">{edu.school} – {edu.period}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};