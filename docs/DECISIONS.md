# Portfolio decisions

Working record for the grill-with-docs interview. Confirmed decisions came directly from the portfolio owner. Open points await an answer. This document does not authorize implementation.

## Confirmed — audience and action

- Primary goal: research program admission.
- Desired first action: read the CV. If the portfolio demonstrates potential, the reviewer should be able to contact the owner easily.
- The first screen should contain research identity text and the CV action. Its approved main line is “I study how AI understands actions, time, and interaction.” Do not place a separate Best Paper / rank / internship highlight strip or a portrait/abstract hero image there; show those facts in their relevant sections.
- The recently added public CV source is research_cv.tex. Its email address is the preferred public contact; it also contains LinkedIn and GitHub details.
- A Google Scholar profile exists, but its URL will be added later. Do not show a placeholder link in version one.
- There is no PDF in the repository yet. The main CV action should open a PDF compiled from the current TeX source when the site is built.

## Confirmed — final visual direction

- Dossier is the selected portfolio design and lives at `/`. The comparison page and Editorial/Atlas directions are removed from the site.
- Keep the Dossier typography, research index, restrained background details, and reduced-motion fallback established during design review.

## Confirmed — Research Journey

- The five-stage progression is primarily a conceptual account of evolving research questions, and it also follows the actual chronology.
- Optimization is a parallel thread, not a stage in that linear progression.
- General VinRobotics involvement may appear in the journey, within the public boundary below.
- The journey should show conceptual order without dates, while its stages still follow the real chronology.
- TMA shifted the owner toward sequential actions. VinRobotics shifted the owner toward VLM and VLA research directions. The VinRobotics work itself involved temporally grounded action understanding, as stated in the public CV.
- The approved Journey conclusion is “From recognizing what is visible to understanding what is happening.”
- Embodied intelligence is a future direction, not an active or completed project. VLM and VLA are directions of interest, not an exhaustive list of future interests.
- On desktop, scrolling should update the highlighted stage and its visual; each stage should also be selectable by click and keyboard. On mobile, each visual should sit with its stage. All text must remain available without animation.

## Confirmed — public evidence

- GNN-SurgVQA metrics and the Best Paper award may be displayed publicly. Approved version-one wording: “Using SSG-VQA, a dataset of about 960K question–answer pairs, the model achieved 85.9% accuracy and 85.8% weighted F1 on a 77,198-question visual-oracle test.” In this work, visual oracle means dataset bounding boxes rather than fine-tuned YOLOv8 predictions.
- Its ICDAM 2026 paper is accepted but not public yet. Its GitHub code is public. Do not imply a public paper URL exists.
- The owner knows the publication author lists but does not want them displayed in the first portfolio version; omit author lines rather than inventing placeholders.
- The current public CV wording is approved as the source for VinRobotics portfolio descriptions, including the methods, failure modes, and SGLang already named there. Do not publish VinRobotics code or labeled data. Do not add evaluation numbers or more detailed claims that are absent from the CV without a new decision.
- TMA work, methods, and evaluation metrics may be public. TMA data may not be published. Omit the TMA percentages from version one of the portfolio until their metric definitions and timing setup are clear; the existing CV wording may remain. The reported 37% inference-time reduction is relative to an earlier version of the system.

## Confirmed — research attribution and entry structure

- For GNN-SurgVQA, the owner reports doing the substantive research end to end, from problem formulation through paper writing. Other listed authors are supervisors. Public copy should state the owner's own work clearly and avoid claims about what other authors did or did not do.
- Each short research entry should follow: research question → the owner's contribution → evidence or learning → a public link if one exists. Use first-person wording for the owner's contribution.

## Confirmed — first-version visual scope

- No research figures, screenshots, or imported project images are needed in version one, including for GNN-SurgVQA, TMA, and VinRobotics.
- The opening should be text and the CV action only.
- The Research Journey may use simple code-drawn conceptual graphics that change with its stages. They should be labeled as illustrations and must not imply real study images, outputs, measurements, or data.

## Confirmed — first-version content depth

- Version one should describe research and provide relevant public links where available. Work without a public link, including VinRobotics, should still have a concise entry without a placeholder link. It does not need standalone project pages.
- If individual project pages are introduced later, the owner wants pages for all projects and research works: GNN-SurgVQA, scene-text recognition, TMA, VinRobotics, optimization, GradeMind, and any other included work.
- Keep all ten homepage sections from the original product brief in version one: Hero, Research Journey, Current Research Interests, Selected Research, Optimization, Publications, Experience, Other Projects, Education & Programs, and Contact. The Journey and Selected Research carry the most detail; supporting sections stay compact.
- Feature GNN-SurgVQA and VinRobotics in Selected Research. Scene-text recognition and TMA appear in the Journey and relevant publication or experience sections. Optimization keeps its separate section; GradeMind appears under Other Projects.
- Keep one source of truth for each work's facts in the content model, while letting the journey, publication, experience, and project sections use short summaries.
- This supersedes the earlier proposed one-page-per-research-work design.

## Confirmed — additional source

- The CV contains a GradeMind demo URL absent from the original brief.
- The CV gives more precise experience periods and TMA metrics than the original brief.

## Confirmed — source of truth when documents differ

Use the current research_cv.tex as the authority for public portfolio facts and wording when it differs from the earlier brief. The owner reconsidered and approved following the CV for VinRobotics descriptions. This approval does not extend to unpublished code or labeled data, nor to new claims not present in the CV.

## Open questions

1. Add the Google Scholar profile URL when ready.
2. Provide a generated public CV PDF before the site goes live.
3. Supply research images or approve concept diagrams if visuals are wanted; do not imply a concept diagram is a research figure.
4. Define the TMA error percentages and timing setup before considering those numbers for the portfolio.
5. Add the public GNN-SurgVQA paper URL when released; until then, link only its public code.
