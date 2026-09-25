# Nguyen Mai Hong Tram — Research and AI Engineer Portfolio

[Research (EN)](https://nmhongtram.github.io/) · [Nghiên cứu (VI)](https://nmhongtram.github.io/vi/) · [AI Engineer (EN)](https://nmhongtram.github.io/engineer/) · [Kỹ sư AI (VI)](https://nmhongtram.github.io/vi/engineer/)

A bilingual portfolio with two connected reading paths: research and AI engineering. The research view follows my work from visual perception to multimodal video and action understanding. The engineering view leads with implemented systems, technical decisions, experience, and a separate CV.

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

| Content or behavior                       | File                                                                                                                                           |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| English research facts and links          | [`src/data/portfolio.ts`](src/data/portfolio.ts)                                                                                               |
| Vietnamese research copy                  | [`src/data/portfolio.vi.ts`](src/data/portfolio.vi.ts)                                                                                         |
| Engineer content (EN/VI)                  | [`src/data/engineer.ts`](src/data/engineer.ts), [`src/data/engineer.vi.ts`](src/data/engineer.vi.ts)                                           |
| Navigation and interface labels           | [`src/data/ui.ts`](src/data/ui.ts)                                                                                                             |
| Research sections and interactions        | [`src/components/PortfolioPage.astro`](src/components/PortfolioPage.astro)                                                                     |
| Engineer sections and shared navigation   | [`src/components/EngineerPage.astro`](src/components/EngineerPage.astro), [`src/components/SiteHeader.astro`](src/components/SiteHeader.astro) |
| Colors, typography, and responsive layout | [`src/styles/global.css`](src/styles/global.css)                                                                                               |
| Research and engineer routes              | [`src/pages/`](src/pages/)                                                                                                                     |

The research view links [`public/cv.pdf`](public/cv.pdf) from [`research_cv.tex`](research_cv.tex). The engineer view links [`public/engineer_cv.pdf`](public/engineer_cv.pdf) from [`engineer_cv.tex`](engineer_cv.tex). With [Tectonic](https://tectonic-typesetting.github.io/book/latest/installation/) installed, `npm run cv:build` rebuilds both; `scripts/build-cv.sh engineer` rebuilds only the engineer PDF.

## Deployment

A push to `main` runs [the GitHub Pages workflow](.github/workflows/deploy.yml). It checks the Astro project, builds all four role/language routes, and publishes `dist/` at [nmhongtram.github.io](https://nmhongtram.github.io/).

The original design and implementation handoff is preserved in [`PROJECT_BRIEF.md`](PROJECT_BRIEF.md). Its owner-confirmed decisions and evidence notes live in [`docs/`](docs/).
