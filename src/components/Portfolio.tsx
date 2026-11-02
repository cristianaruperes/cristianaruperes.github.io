import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { PageHeader } from "./PageHeader";
import { TiltCard } from "./TiltCard";
import { useLanguage } from "../i18n/context";

/** Category keys — must match `portfolio.categories` in i18n/translations.ts. */
type ProjectCategory = "ai" | "dataViz" | "web";

interface ProjectMeta {
  /** Omit for internal work with no public repo. */
  link?: string;
  category: ProjectCategory;
  tech: string[];
  /** Swap for a real screenshot: drop the file in public/projects/ and update this path. */
  image: string;
}

/** Links, stacks, categories and images stay untranslated — they line up with t.portfolio.items by index. */
const projectMeta: ProjectMeta[] = [
  {
    link: "https://github.com/cristianaruperes/Lung-Nodule-Analysis",
    category: "ai",
    tech: ["Python", "Jupyter", "Deep Learning"],
    image: "/projects/lung-nodule.svg"
  },
  {
    link: "https://github.com/cristianaruperes/LINE-Chatbot-YZU-University",
    category: "ai",
    tech: ["Python", "LINE API", "NLP"],
    image: "/projects/chatbot-yzu.svg"
  },
  {
    link: "https://github.com/cristianaruperes/LINE-Chatbot-Bali-Tourism",
    category: "ai",
    tech: ["Python", "LINE API", "Chatbot"],
    image: "/projects/chatbot-bali.svg"
  },
  {
    link: "https://github.com/cristianaruperes/School-Management-System-Laravel",
    category: "web",
    tech: ["Laravel", "PHP", "Bootstrap"],
    image: "/projects/school-system.svg"
  },
  {
    link: "https://github.com/cristianaruperes/clinic-management-system",
    category: "web",
    tech: ["Laravel", "PHP", "MySQL"],
    image: "/projects/clinic-system.svg"
  },
  {
    link: "https://github.com/cristianaruperes/cristianaruperes.github.io",
    category: "web",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "/projects/portfolio-site.svg"
  },
  {
    category: "dataViz",
    tech: ["Power BI", "SQL Server", "BPM"],
    image: "/projects/bi-dashboards.svg"
  }
];

const filterOrder: ("all" | ProjectCategory)[] = ["all", "ai", "dataViz", "web"];

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const projects = t.portfolio.items.map((item, index) => ({
    ...item,
    ...projectMeta[index]
  }));

  const visible = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="portfolio" className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <PageHeader command="ls -la ./projects" title={t.portfolio.heading} />

        <ScrollReveal>
          <div
            role="group"
            aria-label={t.portfolio.filterLabel}
            className="mb-10 flex flex-wrap gap-2"
          >
            {filterOrder.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                aria-pressed={activeFilter === key}
                className={`rounded-pill border px-4 py-2 font-mono text-small transition-all duration-300 ${
                  activeFilter === key
                    ? "border-mint bg-mint/15 text-mint"
                    : "border-white/10 text-slate-400 hover:border-mint/40 hover:text-white"
                }`}
              >
                {t.portfolio.categories[key]}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.08}>
              <TiltCard className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-base/70 backdrop-blur transition-colors duration-300 hover:border-mint/40">
                  <div className="aspect-video overflow-hidden bg-deep">
                    <img
                      src={project.image}
                      alt={t.portfolio.previewAlt(project.title)}
                      loading="lazy"
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-mint/70">
                        {t.portfolio.categories[project.category]}
                      </p>
                      <h2 className="mb-3 mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-mint">
                        {project.title}
                      </h2>
                      <p className="leading-relaxed text-slate-400">{project.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-pill border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 font-semibold text-mint transition-all duration-300 hover:gap-3"
                      >
                        {t.portfolio.viewProject}
                        <span aria-hidden="true">→</span>
                      </a>
                    ) : (
                      <p className="mt-5 font-mono text-small text-slate-500">
                        {t.portfolio.privateProject}
                      </p>
                    )}
                  </div>
                </article>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
