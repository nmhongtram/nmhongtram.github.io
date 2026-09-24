# ADR 001 — First-version content and navigation

**Status:** Accepted
**Decision owner:** Nguyen Mai Hong Tram
**Scope:** Portfolio content model and visitor path, not site implementation

## Context

The primary audience is research program admissions reviewers. The desired first action is reading the public CV; contact follows if the work shows potential. The research story must remain coherent even when an item has no public artifact. The original brief proposed individual research pages, but the owner prefers a lighter first version.

## Decision

- Put the CV PDF, compiled from the current public research_cv.tex, in the primary action position when the site is built. Keep the first screen text-only, with “I study how AI understands actions, time, and interaction.” as its main line and the CV action; omit a separate proof-point highlight strip, portrait, and abstract hero image there.
- Give reviewers a clear public email contact path.
- Present the Research Journey as a conceptual progression without dates that follows the real chronology. Label embodied intelligence as a future direction. Describe VLM and VLA as interests without making them the only possible directions.
- Keep all ten homepage sections from the original product brief. Let the Research Journey and Selected Research carry the most detail, while keeping the other sections compact.
- Feature GNN-SurgVQA and VinRobotics in Selected Research. Scene-text recognition and TMA belong in the Journey and their relevant publication or experience sections. Optimization remains a separate thread; GradeMind belongs under Other Projects.
- Describe every selected work concisely, even if it has no public link. Show a real link only when one exists.
- Do not create standalone research or project pages in version one. If pages are introduced later, cover the full set of research works and projects consistently.
- Use the current public CV as the authority when its factual wording differs from the earlier brief.
- Use the current CV's VinRobotics wording if useful, while keeping its code and labeled data private. TMA methods and metrics may be public, but TMA data may not.
- Show publication titles, venue/status, awards where applicable, and available links. Omit author lines in version one at the owner's request. Do not show a paper link for the accepted but unpublished GNN-SurgVQA paper.

## Consequences

- A single content record per work should prevent inconsistent summaries across sections.
- Best Paper, rank, and internship facts belong in the appropriate research, education, and experience sections instead of an immediate hero highlight strip.
- The absence of a public link must be represented honestly; no placeholder links.
- A CV PDF must be generated before the main CV action can work.
- A Google Scholar profile can be linked later, once the owner provides its URL; show no placeholder link.
- The future-page decision does not imply that every work needs a page now.
