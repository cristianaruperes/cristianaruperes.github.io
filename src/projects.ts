/** Category keys — must match `portfolio.categories` in i18n/translations.ts. */
export type ProjectCategory = "ai" | "dataViz" | "web";

export interface ProjectMeta {
  /** Omit for internal work with no public repo. */
  link?: string;
  category: ProjectCategory;
  tech: string[];
  /** Swap for a real screenshot: drop the file in public/projects/ and update this path. */
  image: string;
  /** Featured projects are the ones shown on the home page. */
  featured?: boolean;
}

/**
 * Links, stacks, categories and images stay untranslated — they line up with
 * `t.portfolio.items` by index, so keep both lists in the same order.
 */
export const projectMeta: ProjectMeta[] = [
  {
    link: "https://github.com/cristianaruperes/Lung-Nodule-Analysis",
    category: "ai",
    tech: ["Python", "Jupyter", "Deep Learning"],
    image: "/projects/lung-nodule.svg",
    featured: true
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
    image: "/projects/school-system.svg",
    featured: true
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
    image: "/projects/bi-dashboards.svg",
    featured: true
  }
];
