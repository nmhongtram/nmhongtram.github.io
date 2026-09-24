# Nguyen Mai Hong Tram — Research Portfolio

[Live site (EN)](https://nmhongtram.github.io/) · [Tiếng Việt](https://nmhongtram.github.io/vi/) · [CV](https://nmhongtram.github.io/cv.pdf)

A bilingual portfolio about my research path from visual perception and surgical visual question answering to multimodal video and action understanding. The site presents research questions, contributions, publications, experience, and future interests in one reading flow.

Built with Astro and TypeScript. It is a static site deployed to GitHub Pages.

## Run locally

Use Node.js 22 and npm:

```sh
npm ci
npm run dev
```

Astro prints the local URL, usually `http://localhost:4321/`. Before publishing, run:

```sh
npm run check
npm run build
```

`dist/` is generated output and is ignored by Git. Edit files in `src/`, not `dist/`.

## Where to edit

| Content or behavior                       | File                                                                                                     |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| English research facts and links          | [`src/data/portfolio.ts`](src/data/portfolio.ts)                                                         |
| Vietnamese research copy                  | [`src/data/portfolio.vi.ts`](src/data/portfolio.vi.ts)                                                   |
| Navigation and interface labels           | [`src/data/ui.ts`](src/data/ui.ts)                                                                       |
| Page sections and interactions            | [`src/components/PortfolioPage.astro`](src/components/PortfolioPage.astro)                               |
| Colors, typography, and responsive layout | [`src/styles/global.css`](src/styles/global.css)                                                         |
| English and Vietnamese routes             | [`src/pages/index.astro`](src/pages/index.astro), [`src/pages/vi/index.astro`](src/pages/vi/index.astro) |

The CV served by the site is [`public/cv.pdf`](public/cv.pdf). Its source is [`research_cv.tex`](research_cv.tex); `npm run cv:build` regenerates the PDF when [Tectonic](https://tectonic-typesetting.github.io/book/latest/installation/) is installed.

## Deployment

A push to `main` runs [the GitHub Pages workflow](.github/workflows/deploy.yml). It checks the Astro project, builds both language routes, and publishes `dist/` at [nmhongtram.github.io](https://nmhongtram.github.io/).

The original design and implementation handoff is preserved in [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md). Its owner-confirmed decisions and evidence notes live in [`docs/`](docs/).
