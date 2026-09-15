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
    <section id="education" className="min-h-screen flex items-center bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Education</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                <p className="text-blue-600 font-semibold">{edu.school}</p>
                <p className="text-slate-600 mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};