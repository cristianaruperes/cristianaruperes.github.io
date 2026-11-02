import React, { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { PageHeader } from "./PageHeader";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../i18n/context";
import { projectMeta, type ProjectCategory } from "../projects";

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
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
