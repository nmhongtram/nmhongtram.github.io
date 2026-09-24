# Nguyen Mai Hong Tram — Research Portfolio Handoff

This folder is a Codex-ready design and implementation brief for a personal AI research portfolio.

## Docs

1. `01_PRODUCT_DESIGN_SPEC.md`
   - Product goals
   - Information architecture
   - Visual direction
   - UX behavior
   - Homepage section-by-section design

2. `02_CONTENT_AND_DATA_MODEL.md`
   - Suggested copy
   - Research journey
   - Publications / experience / project content
   - MDX/content collection schemas

3. `03_IMPLEMENTATION_PLAN.md`
   - Recommended stack
   - Repo structure
   - Components
   - Animation plan
   - Responsive / accessibility / performance requirements
   - Delivery phases and acceptance criteria

## Interview decisions

The owner-confirmed grilling and domain-modeling outcomes are in [docs/DECISIONS.md](docs/DECISIONS.md), with [ADRs](docs/ADR-001-content-and-navigation.md), a [glossary](docs/GLOSSARY.md), and a [public evidence audit](docs/EVIDENCE_AUDIT.md). Read these before implementation; they supersede conflicting suggestions in the original brief. The current [research CV source](research_cv.tex) is the authority for public profile facts, subject to the clarified metric wording in the interview docs.

## Core concept

**Research in Motion**

The site should visually express the research trajectory:

**visual perception → multimodal reasoning → sequential/action understanding → temporal grounding → embodied intelligence**

The portfolio must feel more expressive than a minimal academic homepage, while remaining credible for research applications.

## Suggested stack

- Astro
- TypeScript
- Tailwind CSS
- MDX / Astro Content Collections
- Motion One or a small React/Framer Motion island only where needed
- Lucide icons
- Astro View Transitions
- GitHub Pages or Vercel

## Important constraint

Do **not** turn the homepage into an online CV.

The site should support two reading modes:

- **30-second scan:** identity → selected research → publications → experience
- **deep read:** research journey → research questions → experiments / failures → detailed project pages

## Recommended first Codex task

Read all files in `/docs` before writing code. Then:

1. scaffold the Astro project,
2. implement global design tokens and responsive layout,
3. build the homepage shell with placeholder content,
4. implement the Research Journey interaction,
5. connect content collections,
6. replace placeholders with the real profile content from `02_CONTENT_AND_DATA_MODEL.md`.

Avoid large dependencies unless they materially improve the experience.

## Portfolio implementation

Dossier is the chosen design and the homepage at `/`. It uses a fixed research index on desktop, an interactive five-stage Research Journey, and responsive sections for research, publications, experience, and contact. Content comes from `src/data/portfolio.ts`.

The owner-confirmed decisions in `docs/DECISIONS.md` and the ADRs take precedence over earlier ideas in the original brief. The first version has no standalone project pages or placeholder paper links.

### Run locally

```sh
npm install
npm run dev
```

Open the URL printed by Astro, usually `http://localhost:4321/`. Build static pages with `npm run build`; the output is in `dist/`. The browser review script is `node scripts/preview-check.mjs` while the dev server is running. It checks the homepage at desktop and mobile widths and writes screenshots to `/tmp/portfolio-review` by default. Run `npm run check` for Astro diagnostics and `npm run qa:a11y` for automated WCAG A/AA checks.

### CV PDF

`public/cv.pdf` is compiled from the current `research_cv.tex` and is linked from the homepage. After editing the TeX source, install [Tectonic](https://tectonic-typesetting.github.io/book/latest/installation/) and run `scripts/build-cv.sh`. The script uses Tectonic's direct TeX bundle host and writes the PDF to the site's public directory.

### Content boundaries

Add a public GNN-SurgVQA paper link and Google Scholar URL only when available. The site deliberately omits the TMA percentages pending their metric definitions, and labels the Journey diagrams as concept illustrations. Research and publication facts should be updated in `src/data/portfolio.ts`.

### GitHub Pages deployment

The public repository [nmhongtram.github.io](https://github.com/nmhongtram/nmhongtram.github.io) publishes from `.github/workflows/deploy.yml`. Pushes to `main` run Astro checks, build the static site, and deploy `dist/` through GitHub Actions. The built `dist/` directory stays out of Git because the workflow creates it.
