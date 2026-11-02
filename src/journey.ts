/**
 * The career timeline, from the start of university to today.
 *
 * Each milestone points back at an entry in `t.education.items` or
 * `t.experience.items` by index, so the labels stay translated and there is
 * only one copy of the text. Keep these indexes in sync with translations.ts.
 *
 * Dates are decimal years (2019.2 = March 2019) — precise enough for a bar on a
 * multi-year axis, and far simpler than parsing the display strings.
 */
export interface Milestone {
  kind: "education" | "experience";
  /** Index into the matching list in translations.ts. */
  index: number;
  start: number;
  /** Omitted for the current role, which runs to today. */
  end?: number;
}

/** Ordered oldest first — the axis runs left to right. */
export const milestones: Milestone[] = [
  // Bachelor's, Universitas Klabat — Aug 2015 to Dec 2018
  { kind: "education", index: 1, start: 2015.58, end: 2018.99 },
  // Software Developer, KiLK Productions — Mar 2019 to Jun 2021
  { kind: "experience", index: 3, start: 2019.17, end: 2021.46 },
  // Software Engineer, PT Bussan Auto Finance — Aug 2021 to Mar 2022
  { kind: "experience", index: 2, start: 2021.58, end: 2022.21 },
  // Master's, Yuan-Ze University — Feb 2022 to Feb 2024
  { kind: "education", index: 0, start: 2022.08, end: 2024.13 },
  // Research Assistant, Yuan-Ze University — Aug 2022 to Jan 2024
  { kind: "experience", index: 1, start: 2022.58, end: 2024.04 },
  // IT Specialist, HO YU Textile — Oct 2025 to present
  { kind: "experience", index: 0, start: 2025.75 }
];

/** First year on the axis. */
export const journeyStart = 2015;

/** Today as a decimal year, so the axis and the "now" marker stay current. */
export const nowAsDecimalYear = (): number => {
  const now = new Date();
  return now.getFullYear() + now.getMonth() / 12;
};
