/** @type {import('tailwindcss').Config} */

/**
 * Tokens come from the Figma UI KIT (Style > Color / Typography).
 * Keep these in sync with that file rather than inventing new values.
 */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ← tells Tailwind where to look for classes
  ],
  theme: {
    extend: {
      colors: {
        /** BG 1 — primary surface */
        base: "#292f36",
        /** BG 2 — recessed surface (cards, highlights) */
        deep: "#1a1e23",
        /** Muted grey for borders and secondary chrome */
        muted: "#43454d",
        /** Signature mint accent */
        mint: "#12f7d6",
        /** Light mint, used for code-tag captions and soft fills */
        mintSoft: "#98faec",
        /** Skill brand colours */
        brand: {
          html: "#e54f26",
          css: "#0c73b8",
          js: "#e7a020",
          react: "#28a9e0",
        },
      },
      fontFamily: {
        sans: ["Ubuntu", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Display sizes lifted straight from the kit's type scale.
        hero: ["117px", { lineHeight: "134px" }],
        display: ["64px", { lineHeight: "72px" }],
        title: ["32px", { lineHeight: "42px" }],
        stat: ["48px", { lineHeight: "62px" }],
        lead: ["24px", { lineHeight: "32px" }],
        body: ["16px", { lineHeight: "20px" }],
        small: ["14px", { lineHeight: "18px" }],
      },
      borderRadius: {
        pill: "32px",
        blob: "80px",
      },
      maxWidth: {
        shell: "1664px",
      },
      keyframes: {
        // Hero name ribbon: the track holds two copies, so -50% loops seamlessly.
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Slow drift for the out-of-focus background blobs.
        drift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(24px, -32px) rotate(180deg)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(18, 247, 214, .55)" },
          "70%": { opacity: ".7", boxShadow: "0 0 0 10px rgba(18, 247, 214, 0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        drift: "drift 18s ease-in-out infinite",
        pulseDot: "pulseDot 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
}
