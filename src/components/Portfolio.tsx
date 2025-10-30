import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface PortfolioItem {
  title: string;
  desc: string;
  link: string;
  height: string;
}

const projects: PortfolioItem[] = [
  {
    title: "React Portfolio",
    desc: "Personal website built with React + Tailwind CSS featuring modern animations.",
    link: "https://github.com/cristianaruperes/my-react-bio",
    height: "h-64"
  },
  {
    title: "Landing Page",
    desc: "Responsive product landing page design with smooth scrolling.",
    link: "#",
    height: "h-80"
  },
  {
    title: "UI Components",
    desc: "Reusable React components collection.",
    link: "#",
    height: "h-72"
  },
  {
    title: "E-commerce Platform",
    desc: "Full-stack e-commerce solution with payment integration.",
    link: "#",
    height: "h-96"
  },
  {
    title: "Dashboard App",
    desc: "Analytics dashboard with real-time data visualization.",
    link: "#",
    height: "h-80"
  },
  {
    title: "Mobile App Design",
    desc: "Modern mobile UI/UX design for iOS and Android.",
    link: "#",
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