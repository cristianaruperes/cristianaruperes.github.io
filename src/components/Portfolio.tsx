import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface PortfolioItem {
  title: string;
  desc: string;
  link: string;
  tech: string[];
  height: string;
}

const projects: PortfolioItem[] = [
  {
    title: "Lung Nodule Analysis",
    desc: "Deep learning research on lung nodule segmentation and measurement in CT images, advancing automated medical image analysis.",
    link: "https://github.com/cristianaruperes/Lung-Nodule-Analysis",
    tech: ["Python", "Jupyter", "Deep Learning"],
    height: "h-96"
  },
  {
    title: "LINE Chatbot — YZU University",
    desc: "Conversational assistant answering questions about university programs, campus facilities and the admission process.",
    link: "https://github.com/cristianaruperes/LINE-Chatbot-YZU-University",
    tech: ["Python", "LINE API", "NLP"],
    height: "h-80"
  },
  {
    title: "LINE Chatbot — Bali Tourism",
    desc: "Tourism chatbot giving fast, accurate answers that help tourists and locals navigate and explore the city.",
    link: "https://github.com/cristianaruperes/LINE-Chatbot-Bali-Tourism",
    tech: ["Python", "LINE API", "Chatbot"],
    height: "h-72"
  },
  {
    title: "School Management System",
    desc: "Information system for schools handling student and academic records, built on Laravel with a Bootstrap frontend.",
    link: "https://github.com/cristianaruperes/School-Management-System-Laravel",
    tech: ["Laravel", "PHP", "Bootstrap"],
    height: "h-80"
  },
  {
    title: "Clinic Management System",
    desc: "Information system for a general clinic covering patient records and visits, built on Laravel with a Bootstrap frontend.",
    link: "https://github.com/cristianaruperes/clinic-management-system",
    tech: ["Laravel", "PHP", "MySQL"],
    height: "h-72"
  },
  {
    title: "Personal Portfolio",
    desc: "This site — a responsive single-page portfolio built with React 19, TypeScript and Tailwind, deployed to GitHub Pages.",
    link: "https://github.com/cristianaruperes/cristianaruperes.github.io",
    tech: ["React", "TypeScript", "Tailwind"],
    height: "h-64"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="min-h-screen bg-slate-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Portfolio</h2>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className={`break-inside-avoid bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group ${project.height}`}>
                <div className="h-full p-6 flex flex-col justify-between bg-gradient-to-br from-blue-50 to-slate-50 group-hover:from-blue-100 group-hover:to-slate-100 transition-all duration-300">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/70 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300 mt-4"
                  >
                    View Project
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
