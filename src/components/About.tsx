import React from "react";
import { ScrollReveal } from "./ScrollReveal";

const skills = [
  { title: "AI & Machine Learning", desc: "LLMs, RAG, TensorFlow, Keras, medical image segmentation" },
  { title: "Web Development", desc: "React, .NET / C#, Laravel, PHP, REST APIs" },
  { title: "Data & Automation", desc: "SQL Server, Power BI dashboards, n8n, BPM workflows" }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">About Me</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Hi, it's me Cris. I've spent the past 5+ years working in IT, with a strong background in web development,
              data analysis and AI solutions. I hold a Master's degree in Information Management from Yuan-Ze University.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Along the way I've faced my share of challenges and problem-solving opportunities that taught me how to make
              sound decisions and adapt to modern frameworks and technologies. I believe the newest technology is valuable,
              but maintaining stability and reliability remains just as important. Working with clients and colleagues
              across different countries has also helped me adapt to different environments and cultures.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm eager to explore opportunities in the IT field, including roles beyond my current experience, with a
              strong motivation to continuously learn, adapt and expand my technical expertise in fast-evolving AI and
              automation environments.
            </p>
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
