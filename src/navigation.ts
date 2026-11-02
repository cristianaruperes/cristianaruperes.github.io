import type { Translation } from "./i18n/translations";

/**
 * Single source of truth for the site's navigation.
 *
 * Most of the site is one page, so those entries are sections addressed by
 * anchor. The portfolio keeps its own route. Adding an entry here plus a label
 * in `nav` in i18n/translations.ts is all the nav needs — it picks the rest up
 * automatically.
 */
export type NavItem = {
  /** Key into `t.nav`, so the label follows the selected language. */
  key: keyof Translation["nav"];
} & (
  | { kind: "section"; id: string }
  | { kind: "route"; path: string }
);

export const navItems: NavItem[] = [
  { kind: "section", id: "home", key: "home" },
  { kind: "section", id: "about", key: "about" },
  { kind: "section", id: "experience", key: "experience" },
  { kind: "section", id: "education", key: "education" },
  { kind: "section", id: "publications", key: "publications" },
  { kind: "route", path: "/portfolio", key: "portfolio" },
];
