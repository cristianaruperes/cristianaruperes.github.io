import React from "react";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  /**
   * Monospace eyebrow written as a shell command (`cat about.md`). Deliberately
   * untranslated — it reads as code, and the prompt is the same in every language.
   */
  command: string;
  title: string;
}

/**
 * Masthead for a section of the single-page home route. Renders an `<h2>`, since
 * the hero already supplies the page's only `<h1>`. Standalone routes use
 * `PageHeader` instead.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({ command, title }) => (
  <ScrollReveal>
    <div className="mb-12">
      <p className="font-mono text-small text-mint">
        <span className="select-none text-slate-500">$ </span>
        {command}
      </p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-mint to-transparent" />
    </div>
  </ScrollReveal>
);
