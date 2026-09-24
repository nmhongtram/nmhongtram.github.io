# 03 — Implementation Plan

## 1. Recommended stack

### Core

- **Astro**
- **TypeScript**
- **Tailwind CSS**
- **Astro Content Collections**
- **MDX**

### UI / motion

- **Lucide** icons
- **Motion One** preferred for simple motion
- use a small **React + Framer Motion island** only if the Research Journey interaction becomes cumbersome in vanilla Astro
- **Astro View Transitions** for page transitions

### Deployment

Preferred:

1. Vercel
2. GitHub Pages

The site should remain static-first.

---

# 2. Repo structure

```text
portfolio/
├── public/
│   ├── cv.pdf
│   ├── favicon.svg
│   ├── images/
│   │   ├── research/
│   │   │   ├── surgvqa/
│   │   │   ├── vinrobotics/
│   │   │   ├── sign-language/
│   │   │   └── optimization/
│   │   └── og/
│   └── papers/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Container.astro
│   │   │   ├── SectionHeading.astro
│   │   │   ├── ExternalLink.astro
│   │   │   └── Metric.astro
│   │   │
│   │   ├── hero/
│   │   │   ├── Hero.astro
│   │   │   └── HeroResearchVisual.astro
│   │   │
│   │   ├── journey/
│   │   │   ├── ResearchJourney.astro
│   │   │   ├── JourneyStage.astro
│   │   │   └── JourneyVisual.astro
│   │   │
│   │   ├── research/
│   │   │   ├── FeaturedResearch.astro
│   │   │   ├── ResearchPanel.astro
│   │   │   └── ResearchMetrics.astro
│   │   │
│   │   ├── publications/
│   │   │   ├── PublicationList.astro
│   │   │   └── PublicationItem.astro
│   │   │
│   │   ├── experience/
│   │   │   ├── ExperienceTimeline.astro
│   │   │   └── ExperienceItem.astro
│   │   │
│   │   ├── projects/
│   │   │   ├── OptimizationThread.astro
│   │   │   └── ProjectCard.astro
│   │   │
│   │   └── navigation/
│   │       ├── Navbar.astro
│   │       ├── MobileMenu.astro
│   │       └── ThemeToggle.astro
│   │
│   ├── content/
│   │   ├── config.ts
│   │   ├── research/
│   │   │   ├── gnn-surgvqa.mdx
│   │   │   └── egocentric-action-understanding.mdx
│   │   ├── publications/
│   │   ├── projects/
│   │   └── experience/
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── journey.ts
│   │   ├── programs.ts
│   │   └── education.ts
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ResearchLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── research/
│   │   │   └── [...slug].astro
│   │   └── rss.xml.ts        # optional
│   │
│   └── styles/
│       ├── global.css
│       ├── tokens.css
│       └── prose.css
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

# 3. Design tokens

Use CSS variables even if Tailwind is used.

```css
:root {
  --bg: #f7f8fc;
  --surface: #ffffff;
  --text: #16181d;
  --muted: #667085;
  --border: #e4e7ec;

  --gradient-a: #6c63ff;
  --gradient-b: #8b5cf6;
  --gradient-c: #22d3ee;

  --accent: #14b8a6;
  --warm-a: #f59e0b;
  --warm-b: #f97316;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;

  --content: 1120px;
}

[data-theme="dark"] {
  --bg: #0b1020;
  --surface: #111827;
  --text: #f8fafc;
  --muted: #98a2b3;
  --border: rgba(255,255,255,.10);
}
```

Do not hard-code colors repeatedly in components.

---

# 4. Homepage implementation order

## Phase A — skeleton

Build:

- BaseLayout
- Navbar
- Hero
- section containers
- footer/contact
- responsive typography

No animation yet.

## Phase B — content collections

Implement schemas for:

- research
- publications
- projects
- experience

Render real profile content.

## Phase C — Research Journey

Implement the desktop sticky two-column experience.

Suggested behavior:

1. observe journey stages using `IntersectionObserver`
2. update active stage id
3. animate path progress
4. crossfade visual panel
5. fall back to static vertical layout under mobile breakpoint

Avoid synchronizing logic directly to every scroll pixel.

Use stage-based transitions instead.

## Phase D — motion polish

Add:

- hero gradient motion
- section reveal
- card hover
- navbar active state
- View Transitions

## Phase E — research detail pages

Implement:

- research question
- figure
- method
- experiments
- results
- failure analysis
- what did not work
- what I learned
- links

## Phase F — QA

Test:

- desktop
- tablet
- mobile
- light/dark
- keyboard-only
- reduced motion
- slow connection
- print / CV download

---

# 5. Animation implementation

## Hero gradient

Prefer CSS.

Example concept:

```css
.hero-orb {
  filter: blur(80px);
  opacity: 0.35;
  animation: drift 18s ease-in-out infinite alternate;
}
```

Use 2–3 blurred gradient orbs maximum.

## Section reveals

Use one shared reveal primitive.

Default:

- opacity: 0 → 1
- y: 12–20px → 0
- duration: ~450–650ms
- trigger once

## Research Journey

The most interactive component.

Only hydrate this section if necessary.

State:

```ts
activeStage: string
```

The visual panel should not reload assets on every active-stage change.

Preload lightweight visuals.

## Hover interactions

Research panel:

- translateY(-3px)
- border gradient reveal
- subtle shadow increase

Do not use large 3D tilt unless it remains almost imperceptible.

---

# 6. Content collection validation

Use Zod through Astro content schemas.

Example research schema:

```ts
const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    year: z.number(),
    featured: z.boolean().default(false),
    category: z.string(),
    question: z.string(),
    summary: z.string(),
    venue: z.string().optional(),
    award: z.string().optional(),
    paper: z.string().url().optional(),
    code: z.string().url().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    ).default([]),
  }),
});
```

Do the same for publications/projects.

---

# 7. SEO

Each page should include:

- `<title>`
- meta description
- canonical URL
- Open Graph tags
- Twitter card metadata
- JSON-LD Person metadata on homepage if useful

Suggested homepage title:

`Nguyen Mai Hong Tram — Multimodal AI Researcher`

Suggested meta description:

`AI researcher working on multimodal learning, vision-language models, video understanding, temporal grounding, and action-centric intelligence.`

Generate social preview image.

---

# 8. Assets

Prefer:

- WebP / AVIF for screenshots
- SVG for diagrams where possible

For research figures:

- simplify original paper figures for web readability
- do not show dense paper screenshots as hero visuals
- use clear diagrams with large labels

All visuals should have descriptive alt text.

---

# 9. Dark mode

Implement with CSS variables.

Behavior:

1. use saved preference if available
2. otherwise follow system preference
3. theme toggle in navbar
4. no flash of incorrect theme on load

Gradient intensity can be slightly stronger in dark mode.

---

# 10. Accessibility checklist

Before release:

- [ ] correct heading order
- [ ] skip-to-content link
- [ ] keyboard-reachable navigation
- [ ] visible focus ring
- [ ] sufficient contrast
- [ ] icons have labels or hidden decorative semantics
- [ ] reduced-motion version works
- [ ] timeline is understandable without animation
- [ ] publication links have descriptive accessible names
- [ ] mobile drawer traps focus correctly if modal

---

# 11. Performance checklist

- [ ] no global React hydration
- [ ] no full-page animation library if CSS is enough
- [ ] compress images
- [ ] lazy-load below-fold images
- [ ] prefetch key research detail pages only
- [ ] font files minimized
- [ ] no video autoplay unless lightweight and muted
- [ ] Lighthouse target >90

---

# 12. Quality rules for Codex

Codex should follow these constraints:

1. Do not invent research facts or metrics.
2. Put content into data/MDX rather than hard-coding it into components.
3. Reuse components only where visual repetition genuinely exists.
4. Keep Selected Research editorial and asymmetric rather than making every item the same card.
5. Keep Publications calmer than the rest of the site.
6. Treat the Research Journey as the signature component.
7. Do not add decorative animation that has no narrative purpose.
8. Respect reduced-motion settings.
9. Mobile should be intentionally designed, not just stacked desktop.
10. Maintain strict TypeScript.
11. Avoid unnecessary state libraries.
12. Avoid large UI libraries; custom components should be simple enough here.

---

# 13. Definition of done

The first production-ready version is done when:

### Identity
A new visitor can understand the research direction in <15 seconds.

### Narrative
The progression from visual perception → multimodal reasoning → temporal/action understanding is obvious.

### Evidence
The visitor can quickly find:
- VinRobotics
- TMA
- UEH research experience
- publications
- Best Paper
- Rank #2
- selected project metrics

### Research depth
At least two research items have dedicated detail pages.

### Design
The site has:
- gradients
- motion
- light/dark mode
- strong typography
- polished responsive behavior

without sacrificing readability.

### Technical quality
- accessible
- static-first
- high Lighthouse scores
- content-driven
- deployable to Vercel/GitHub Pages

---

# 14. Suggested Codex kickoff prompt

Copy this after placing the docs in the repository:

> Read `README.md` and all files under `docs/` before writing code. Build the research portfolio described there using Astro, TypeScript, Tailwind CSS, Astro Content Collections, and MDX. Start with a production-quality responsive shell and the full homepage information architecture. The visual concept is “Research in Motion”: expressive gradients and purposeful animation, but high academic/research readability. The Research Journey is the signature interaction. Keep the site static-first and content-driven. Do not invent research facts. Use placeholders for missing images/URLs/author lists and mark them clearly as TODOs. Work incrementally, keep the app runnable after each milestone, and check mobile, keyboard accessibility, reduced motion, and dark mode before finishing.
