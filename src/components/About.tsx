import React from "react";
import { ScrollReveal } from "./ScrollReveal";

export const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a passionate frontend developer with experience building responsive, user-friendly websites using React, TailwindCSS, and modern web technologies.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I enjoy turning design ideas into clean, interactive interfaces that provide exceptional user experiences. My goal is to create digital solutions that are both beautiful and functional.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Frontend Dev", desc: "React, TypeScript, Tailwind" },
              { title: "UI/UX Design", desc: "Responsive & Accessible" },
              { title: "Performance", desc: "Optimized & Fast" }
            ].map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-600">
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