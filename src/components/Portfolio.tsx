import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface PortfolioItem {
  title: string;
  desc: string;
  link: string;
}

const projects: PortfolioItem[] = [
  {
    title: "React Portfolio",
    desc: "Personal website built with React + Tailwind.",
    link: "https://github.com/cristianaruperes/my-react-bio",
  },
  {
    title: "Landing Page",
    desc: "Responsive product landing page design.",
    link: "#",
  },
  {
    title: "UI Components",
    desc: "Reusable React components collection.",
    link: "#",
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-2xl font-semibold mb-6">Portfolio</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 text-sm font-medium hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                >
                  View Project <span className="inline-block transition-transform duration-300">→</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
