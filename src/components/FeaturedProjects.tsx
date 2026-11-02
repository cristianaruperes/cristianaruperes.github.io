import React from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../i18n/context";
import { projectMeta } from "../projects";

/**
 * Home-page preview: only the projects flagged `featured` in projects.ts,
 * with a link through to the full portfolio page.
 */
export const FeaturedProjects: React.FC = () => {
  const { t } = useLanguage();

  const featured = t.portfolio.items
    .map((item, index) => ({ ...item, ...projectMeta[index] }))
    .filter((project) => project.featured);

  return (
    <section id="portfolio" className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeader command="ls ./projects --featured" title={t.portfolio.featuredHeading} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.08}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-pill border border-mint/40 bg-mint/10 px-8 py-3.5 font-semibold text-mint transition-all duration-300 hover:bg-mint hover:text-deep"
            >
              {t.portfolio.viewAll}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
