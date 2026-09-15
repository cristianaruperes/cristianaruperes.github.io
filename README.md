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

### Project images

`public/projects/` holds placeholder SVGs, one per project. To swap in a real
screenshot, either overwrite the file keeping its name, or add a new file and
point that project's `image` field at it:

```ts
image: "/projects/lung-nodule.png"
```

Cards use a 16:9 frame with `object-cover`, so roughly 1600×900 works best.
Paths are absolute from the site root — keep the leading `/`. Anything in
`public/` is copied to the site as-is and is not processed by Vite.

The favicon is `public/favicon.svg`, referenced from `index.html`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to the `gh-pages` branch. GitHub Pages serves the site from
`gh-pages`.

Because this is a user site (`<username>.github.io`), `base` in `vite.config.ts`
must stay `'/'`.
