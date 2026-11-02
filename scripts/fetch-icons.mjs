/**
 * Downloads the tool logos used by the "Tools" section into public/tools/.
 *
 * Icons come from Simple Icons (https://simpleicons.org), which publishes them
 * under CC0. They are vendored rather than hot-linked so visitors never hit a
 * third-party CDN and the site keeps working if that CDN does not.
 *
 * Each icon is fetched in its brand colour; any colour too dark to read on the
 * site's near-black background is re-fetched in a light grey instead.
 *
 * Run with: node scripts/fetch-icons.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";

/** Brand colours below this relative luminance get swapped for light grey. */
const MIN_LUMINANCE = 0.12;
const FALLBACK_COLOUR = "e8eaed";

const slugs = [
  "react",
  "typescript",
  "javascript",
  "html5",
  "css",
  "tailwindcss",
  "bootstrap",
  "php",
  "laravel",
  "wordpress",
  "dotnet",
  "python",
  "tensorflow",
  "keras",
  "numpy",
  "pandas",
  "mysql",
  "git",
  "github",
  "jira",
  "n8n",
  "claude",
  "googlegemini"
];

/**
 * Simple Icons no longer carries some Microsoft-owned marks (Power BI, SQL
 * Server, Azure) or OpenAI's, following trademark requests. Those tools are
 * rendered as text chips instead — see components/Tools.tsx.
 */

const luminance = (hex) => {
  const channel = (value) => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const fetchIcon = async (slug, colour) => {
  const url = `https://cdn.simpleicons.org/${slug}${colour ? `/${colour}` : ""}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
};

await mkdir("public/tools", { recursive: true });

const missing = [];
for (const slug of slugs) {
  try {
    let svg = await fetchIcon(slug);

    // The CDN bakes the brand colour into a fill attribute; read it back and
    // substitute a readable one when the brand colour would disappear.
    const brand = svg.match(/fill="#([0-9a-fA-F]{6})"/)?.[1];
    if (brand && luminance(brand) < MIN_LUMINANCE) {
      svg = await fetchIcon(slug, FALLBACK_COLOUR);
      console.log(`${slug}: #${brand} too dark, using #${FALLBACK_COLOUR}`);
    }

    await writeFile(`public/tools/${slug}.svg`, svg);
    console.log(`saved ${slug}.svg`);
  } catch (error) {
    missing.push(slug);
    console.warn(`SKIPPED ${slug}: ${error.message}`);
  }
}

if (missing.length > 0) console.warn(`\nNot found: ${missing.join(", ")}`);
