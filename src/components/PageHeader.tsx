import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface PageHeaderProps {
  /**
   * Monospace eyebrow shown above the title, written as a shell command
   * (`cat about.md`). Deliberately left untranslated — it reads as code, and the
   * terminal prompt is the same in every language.
   */
  command: string;
  title: string;
}

/** Shared masthead for every route, so each page ships exactly one `<h1>`. */
export const PageHeader: React.FC<PageHeaderProps> = ({ command, title }) => (
  <ScrollReveal>
    <div className="mb-12">
      <p className="font-mono text-small text-mint">
        <span className="select-none text-slate-500">$ </span>
        {command}
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-mint to-transparent" />
    </div>
  </ScrollReveal>
);
