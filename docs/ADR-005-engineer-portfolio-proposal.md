# ADR 005 — Engineer portfolio within the existing site

**Status:** Accepted for implementation
**Decision owner:** Nguyen Mai Hong Tram
**Scope:** Engineering audience, routes, navigation, content, and evidence

## Context

The current site serves research admissions reviewers at / and /vi/. Its first action is the research CV, and its main narrative is the Research Journey. The new engineer_cv.tex and public/engineer_cv.pdf emphasize applied systems, deployment, and engineering skills. The owner wants a portfolio aimed first at AI Engineer roles; visitors should inspect a project before downloading the CV. GradeMind may be described in text, without architecture diagrams or demo images, while keeping its existing public demo link. The owner wants both English and Vietnamese engineering pages. Air Quality Forecasting has a public repository but its demo is no longer running.

## Decision

- Keep the research portfolio at / and /vi/. Add AI Engineer views at /engineer/ and /vi/engineer/. These are two views of the same person on the same site.
- Add a visible Research / AI Engineer switch in the shared header and mobile menu. Keep it distinct from the EN / VI switch. Each switch should preserve the other choice where a corresponding route exists.
- Put selected builds before the engineering CV action in the page reading order. Keep a clear CV link in the header and after the project section, pointing to /engineer_cv.pdf. Research pages continue to use /cv.pdf.
- Reuse the Dossier visual system. Make the engineering page shorter: introduction; selected builds; engineering experience; technical capabilities shown through work; supporting publications and recognition; contact.
- Start with GradeMind as the primary applied system, then TMA's browser inference pipeline, then GNN-SurgVQA as a multimodal modeling and evaluation case. Add Air Quality Forecasting as a supporting build with a code link after its personal contribution is confirmed; do not link to or imply a running demo. Include VinRobotics under experience using only approved public details.
- For each build, explain the problem, the owner's contribution, key technical decisions, an outcome or lesson, and a real public artifact if one exists. GradeMind's first version should use text only.
- Share verified facts and links between the two role views, while allowing distinct summaries and project order. A role-specific landing page does not introduce standalone project pages, so the later-page coverage decision in ADR 001 still applies.

## Integration in the current Astro codebase

- Add src/pages/engineer/index.astro and src/pages/vi/engineer/index.astro, each rendering one shared EngineerPage component with a locale prop.
- Extract or share the header/navigation now embedded in src/components/PortfolioPage.astro so both role views expose the role and language switches consistently.
- Parameterize the alternate-language URLs in src/layouts/BaseLayout.astro; they currently always point to / and /vi/, which would send an engineering visitor back to the research view.
- Keep shared factual records and public links in src/data/portfolio.ts or a fact module; put engineer-specific ordering and copy in dedicated EN/VI data modules. Avoid copying numerical claims into multiple files.
- Extend scripts/build-cv.sh to generate both public/cv.pdf and public/engineer_cv.pdf from their respective TeX sources. The PDFs currently exist, but the script only builds the research CV.

## Evidence checks

- engineer_cv.tex says GNN-SurgVQA was evaluated on 960K+ question–answer pairs. The existing evidence audit says ~960K is dataset scale; 85.9% accuracy and 85.8% weighted F1 came from a 77,198-question visual-oracle test. Correct the CV line before making it website copy.
- TMA's 5%/10% sequence-error numbers and ~37% inference-time reduction lack complete public definitions and timing setup. Follow ADR 003 and omit these percentages from web copy until clarified.
- The owner confirms personally completing GradeMind OCR, LLM API integration, RAG, frontend, project management, and documentation. First-person copy can name these areas directly. Present the case in text and keep the existing public demo link; do not add architecture diagrams or demo images.
- Air Quality Forecasting has a public repository and no running demo. Describe it as a completed or historical project unless current operation is independently established.
- Keep VinRobotics code and labeled data private.

## Open questions

1. Is there a concrete outcome or reliability finding from GradeMind that can be stated publicly beyond the implemented features?
2. Which publicly inspectable evidence makes the strongest engineering case beyond the existing GradeMind and GNN-SurgVQA links?

## Consequences

The site gains a role dimension in addition to language, with four role/language routes, distinct CV links, and route-specific metadata. The portfolio URL in engineer_cv.tex should point to /engineer/ after that route is live. Canonical project facts need to remain consistent across both views. Project depth depends on verified contribution and public evidence.
