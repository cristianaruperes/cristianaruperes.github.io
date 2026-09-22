import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "../i18n/context";

export const About: React.FC = () => {
  const { t } = useLanguage();
  const skills = t.about.skills;

  return (
    <section id="about" className="bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">{t.about.heading}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            {t.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg text-slate-700 leading-relaxed ${
                  index < t.about.paragraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-600"
              >
                <h3 className="font-bold text-slate-900 text-xl mb-2">{skill.title}</h3>
                <p className="text-slate-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
