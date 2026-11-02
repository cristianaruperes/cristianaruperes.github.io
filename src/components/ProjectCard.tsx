import React from "react";
import { TiltCard } from "./TiltCard";
import { useLanguage } from "../i18n/context";
import type { ProjectCategory } from "../projects";

interface ProjectCardProps {
  title: string;
  desc: string;
  category: ProjectCategory;
  tech: string[];
  image: string;
  link?: string;
}

/** One project tile, shared by the home page preview and the full portfolio. */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  desc,
  category,
  tech,
  image,
  link
}) => {
  const { t } = useLanguage();

  return (
    <TiltCard className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-base/70 backdrop-blur transition-colors duration-300 hover:border-mint/40">
        <div className="aspect-video overflow-hidden bg-deep">
          <img
            src={image}
            alt={t.portfolio.previewAlt(title)}
            loading="lazy"
            width={800}
            height={450}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-mint/70">
              {t.portfolio.categories[category]}
            </p>
            <h3 className="mb-3 mt-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-mint">
              {title}
            </h3>
            <p className="leading-relaxed text-slate-400">{desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-pill border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-mint transition-all duration-300 hover:gap-3"
            >
              {t.portfolio.viewProject}
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <p className="mt-5 font-mono text-small text-slate-500">{t.portfolio.privateProject}</p>
          )}
        </div>
      </article>
    </TiltCard>
  );
};
