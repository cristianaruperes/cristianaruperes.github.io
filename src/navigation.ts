import type { Translation } from "./i18n/translations";

/**
 * Single source of truth for the site's routes. Adding a menu entry here, a
 * matching `<Route>` in App.tsx and a label in `nav` in i18n/translations.ts is
 * all a new page needs — the sidebar picks it up automatically.
 */
export interface NavItem {
  path: string;
  /** Key into `t.nav`, so the label follows the selected language. */
  key: keyof Translation["nav"];
}

export const navItems: NavItem[] = [
  { path: "/", key: "home" },
  { path: "/about", key: "about" },
  { path: "/experience", key: "experience" },
  { path: "/education", key: "education" },
  { path: "/portfolio", key: "portfolio" },
  { path: "/publications", key: "publications" },
];
