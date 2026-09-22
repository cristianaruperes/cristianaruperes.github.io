import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "../i18n/context";

interface ProjectMeta {
  link: string;
  tech: string[];
  /** Swap for a real screenshot: drop the file in public/projects/ and update this path. */
  image: string;
}

/** Links, stacks and images stay untranslated — they line up with t.portfolio.items by index. */
const projectMeta: ProjectMeta[] = [
  {
    link: "https://github.com/cristianaruperes/Lung-Nodule-Analysis",
    tech: ["Python", "Jupyter", "Deep Learning"],
    image: "/projects/lung-nodule.svg"
  },
  {
    link: "https://github.com/cristianaruperes/LINE-Chatbot-YZU-University",
    tech: ["Python", "LINE API", "NLP"],
    image: "/projects/chatbot-yzu.svg"
  },
  {
    link: "https://github.com/cristianaruperes/LINE-Chatbot-Bali-Tourism",
    tech: ["Python", "LINE API", "Chatbot"],
    image: "/projects/chatbot-bali.svg"
  },
  {
    link: "https://github.com/cristianaruperes/School-Management-System-Laravel",
    tech: ["Laravel", "PHP", "Bootstrap"],
    image: "/projects/school-system.svg"
  },
  {
    link: "https://github.com/cristianaruperes/clinic-management-system",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/projects/clinic-system.svg"
  },
  {
    link: "https://github.com/cristianaruperes/cristianaruperes.github.io",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "/projects/portfolio-site.svg"
  }
];

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const projects = t.portfolio.items.map((item, index) => ({
    ...item,
    ...projectMeta[index]
  }));

  return (
    <section id="portfolio" className="min-h-screen bg-slate-50 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-slate-900 mb-8">{t.portfolio.heading}</h2>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="break-inside-avoid bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={t.portfolio.previewAlt(project.title)}
                    loading="lazy"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between bg-gradient-to-br from-blue-50 to-slate-50 group-hover:from-blue-100 group-hover:to-slate-100 transition-all duration-300">
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
                    {t.portfolio.viewProject}
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
