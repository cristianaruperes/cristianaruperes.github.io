import React from "react";
import { ScrollReveal } from "./ScrollReveal";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../i18n/context";

interface Tool {
  name: string;
  /**
   * File in public/tools/, fetched by scripts/fetch-icons.mjs. Omitted where
   * Simple Icons has no mark for the tool — those render as a text chip.
   */
  icon?: string;
}

/**
 * Tool names are product names, so they stay untranslated; only the category
 * headings follow the selected language.
 */
const groups: { key: "ai" | "web" | "data" | "workflow"; tools: Tool[] }[] = [
  {
    key: "ai",
    tools: [
      { name: "Claude", icon: "claude" },
      { name: "Gemini", icon: "googlegemini" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Keras", icon: "keras" },
      { name: "Python", icon: "python" },
      { name: "NumPy", icon: "numpy" },
      { name: "pandas", icon: "pandas" },
      { name: "RAG" },
      { name: "MCP" }
    ]
  },
  {
    key: "web",
    tools: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS", icon: "css" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: ".NET", icon: "dotnet" },
      { name: "C#" },
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
      { name: "WordPress", icon: "wordpress" }
    ]
  },
  {
    key: "data",
    tools: [
      { name: "SQL Server" },
      { name: "MySQL", icon: "mysql" },
      { name: "Power BI" },
      { name: "Excel" }
    ]
  },
  {
    key: "workflow",
    tools: [
      { name: "n8n", icon: "n8n" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Jira", icon: "jira" },
      { name: "Azure" },
      { name: "REST API" }
    ]
  }
];

export const Tools: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="tools" className="px-6 py-20 sm:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeader command="ls /usr/local/bin" title={t.tools.heading} />

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group, index) => (
            <ScrollReveal key={group.key} delay={index * 0.08}>
              {/* Transparent, like the KPI strip — only the mint outline is drawn. */}
              <div className="h-full rounded-2xl border border-mint/40 p-6">
                <h3 className="font-mono text-small uppercase tracking-wider text-mint">
                  {t.tools.categories[group.key]}
                </h3>

                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {group.tools.map((tool) => (
                    <li
                      key={tool.name}
                      className="flex items-center gap-2 rounded-pill border border-mint/25 px-3 py-2 text-sm text-slate-300 transition-colors duration-300 hover:border-mint hover:text-white"
                    >
                      {tool.icon && (
                        <img
                          src={`/tools/${tool.icon}.svg`}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          width={18}
                          height={18}
                          className="h-[18px] w-[18px] shrink-0"
                        />
                      )}
                      {tool.name}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
