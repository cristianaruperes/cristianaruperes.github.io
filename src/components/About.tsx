import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { TiltCard } from "./TiltCard";
import { useLanguage } from "../i18n/context";

export const About: React.FC = () => {
  const { t } = useLanguage();
  const skills = t.about.skills;

  return (
    <section id="about" className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeader command="cat about.md" title={t.about.heading} />

        <ScrollReveal delay={0.2}>
          <div className="panel p-8">
            {t.about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`leading-relaxed text-slate-300 sm:text-lg ${
                  index < t.about.paragraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {skills.map((skill, index) => (
              <TiltCard key={index}>
                <div className="panel h-full p-6 transition-colors duration-300 hover:border-mint/40">
                  <p className="font-mono text-small text-mint">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-bold text-white">{skill.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{skill.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
