# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Research admissions reviewers evaluating Nguyen Mai Hong Tram's research trajectory.
- AI Engineer hiring reviewers evaluating implemented AI systems and engineering work.

## Product Purpose

The portfolio gives each audience a clear reading path to relevant work, public evidence, a role-specific CV, and contact details.

## Operating Context

The site is a bilingual static Astro portfolio. Research lives at / and /vi/; AI Engineer views live at /engineer/ and /vi/engineer/. Visitors can switch role and language while keeping their current choice of the other dimension.

## Capabilities and Constraints

- The research homepage retains its accepted Dossier structure and public-evidence boundaries in ADRs 001–004.
- The AI Engineer page leads with selected builds before the engineering CV.
- GradeMind is text-only on the page and may link to its existing public demo.
- TMA numerical claims remain off the site until their definitions and timing setup are verified.
- VinRobotics code and labeled data remain private.
- Air Quality Forecasting is a UEH group project with a public repository and no running demo. The owner confirms implementing its technical pipeline end to end.
- Public project claims must distinguish personal contribution, team outcomes, dataset scale, and evaluation setup.

## Evidence on Hand

- research_cv.tex and public/cv.pdf.
- engineer_cv.tex and public/engineer_cv.pdf.
- src/data/portfolio.ts and src/data/portfolio.vi.ts.
- docs/ADR-005-engineer-portfolio-proposal.md and docs/EVIDENCE_AUDIT.md.

## Product Principles

- Let a visitor reach work relevant to their role quickly.
- Reuse verified facts across role views.
- Show public links only when artifacts exist.
- Keep copy and navigation usable in English and Vietnamese.
