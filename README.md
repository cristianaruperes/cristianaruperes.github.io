# cristianaruperes.github.io

Personal portfolio site for **Cristian Daniel Aruperes** — live at
[cristianaruperes.github.io](https://cristianaruperes.github.io/).

## Stack

React 19 · TypeScript · Vite 7 · Tailwind CSS 3

## Development

```bash
npm ci        # install dependencies
npm run dev   # start the dev server
npm run build # type-check and build to dist/
npm run preview
```

## Content

Each section is a component under `src/components/`, with the content held in a
typed array at the top of the file — edit those arrays to update the site:

| Section | File | Data |
| --- | --- | --- |
| Hero | `Hero.tsx` | name, headline, intro |
| About | `About.tsx` | bio paragraphs, `skills` |
| Experience | `Experience.tsx` | `experiences` |
| Education | `Education.tsx` | `education` |
| Portfolio | `Portfolio.tsx` | `projects` |
| Publications | `Publications.tsx` | `publications`, `certifications`, `languages` |

Navigation lives in `navItems` in `Sidebar.tsx`; a new section needs an entry
there, a matching `id` on the `<section>`, and to be rendered in `App.tsx`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to the `gh-pages` branch. GitHub Pages serves the site from
`gh-pages`.

Because this is a user site (`<username>.github.io`), `base` in `vite.config.ts`
must stay `'/'`.
