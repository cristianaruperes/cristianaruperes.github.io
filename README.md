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

Each menu entry is its own page, rendered by a component under
`src/components/`, with the content held in a typed array at the top of the file
— edit those arrays to update the site:

| Route | File | Data |
| --- | --- | --- |
| `/` | `Hero.tsx` | name, headline, intro |
| `/about` | `About.tsx` | bio paragraphs, `skills` |
| `/experience` | `Experience.tsx` | `experiences` |
| `/education` | `Education.tsx` | `education` |
| `/portfolio` | `Portfolio.tsx` | `projects` |
| `/publications` | `Publications.tsx` | `publications`, `certifications`, `languages` |
| anything else | `NotFound.tsx` | — |

## Routing

Routes are declared in `App.tsx` and share `Layout.tsx`, which holds the
sidebar, the language switcher and the footer, and scrolls each new page to the
top. The menu is driven by `navItems` in `src/navigation.ts`, so a new page
needs three things: an entry there, a `<Route>` in `App.tsx`, and a label under
`nav` in `src/i18n/translations.ts`.

Because GitHub Pages only serves static files, a direct hit on `/about` would
otherwise 404. The `github-pages-spa-fallback` plugin in `vite.config.ts` copies
`dist/index.html` to `dist/404.html` at build time, so Pages hands every unknown
path back to the app and the router renders the right page.

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
