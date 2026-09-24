# 01 — Product & Design Specification

## 1. Product goal

Create a one-page-first personal research portfolio for **Nguyen Mai Hong Tram**, aimed at:

- AI research programs such as FPT AI Residency / CAIR
- research assistant roles
- research-oriented master's applications
- AI research engineer roles

The site should communicate one memorable research identity:

> **From recognizing what is visible to understanding what is happening.**

The portfolio should show a coherent path from computer vision and medical VQA toward multimodal video understanding, temporal/action reasoning, and eventually embodied intelligence.

---

## 2. Product positioning

The site should combine three strengths:

### Research storytelling
Make the progression of research interests obvious rather than presenting unrelated projects.

### Quantitative evidence
Use concrete metrics, outputs, and artifacts where useful.

### Technical polish
The portfolio should feel modern and technically capable, without looking like a SaaS dashboard or a generic developer template.

The design reference is conceptually:

- academic/research clarity
- editorial storytelling
- modern gradients
- motion used as part of the research narrative

---

## 3. Visual concept: “Research in Motion”

### Visual language

Use:

- trajectories
- timelines
- connected nodes
- video/frame strips
- diagrams
- graph edges
- subtle animated transitions
- gradient accents

The visual language should mirror the research progression:

`image → objects → language → sequence → time → action → interaction`

### Avoid

- particle backgrounds
- matrix/code-rain effects
- constant parallax
- typing animations
- skill progress bars
- oversized glassmorphism
- generic 3-card SaaS grids everywhere
- excessive glow
- scroll-jacking

---

## 4. Color direction

The site may support both light and dark themes.

### Light

- Background: `#F7F8FC`
- Surface: `#FFFFFF`
- Text: `#16181D`
- Muted text: `#667085`
- Border: `#E4E7EC`

### Dark

- Background: `#0B1020`
- Surface: `#111827`
- Text: `#F8FAFC`
- Muted text: `#98A2B3`
- Border: `rgba(255,255,255,0.10)`

### Primary gradient

Use a controlled research-tech gradient:

`#6C63FF → #8B5CF6 → #22D3EE`

Possible supporting accent:

`#14B8A6`

Parallel optimization thread may use a warm secondary accent:

`#F59E0B → #F97316`

Do not use more than one dominant cool gradient and one supporting warm accent.

---

## 5. Typography

The site should feel editorial, not purely developer-oriented.

Recommended approach:

- Body/UI: modern sans-serif
- Large research titles / section headings: either the same sans with stronger weight, or a restrained serif/display face
- Research question text should receive more visual emphasis than technology tags

Suggested scale:

- Hero name: 56–72px desktop
- Hero statement: 32–48px
- Section titles: 32–42px
- Research project title: 28–36px
- Body: 16–18px
- Captions/meta: 13–15px

Use generous line height and whitespace.

---

## 6. Page structure

Recommended homepage:

1. Hero
2. Research Journey
3. Current Research Interests
4. Selected Research
5. Parallel Mathematical / Optimization Thread
6. Publications
7. Experience
8. Other Projects
9. Education & Programs
10. Contact

Navigation:

`Research · Publications · Experience · Projects · About · CV`

Sticky navbar with active-section indicator.

---

# 7. Hero

## Goal

A visitor should understand the research identity in one viewport.

Suggested copy:

**Nguyen Mai Hong Tram**

**I study how AI understands actions, time, and interaction.**

Supporting line:

`Multimodal Learning · Vision-Language Models · Video Understanding`

Short supporting statement:

> My work has evolved from visual perception and medical VQA toward temporal and action-centric multimodal understanding.

Primary links:

- CV
- GitHub
- LinkedIn
- Scholar (only when available)

Credibility strip:

- `Rank #2 · Data Science @ UEH`
- `Best Paper · ICDAM 2026`
- `Research Intern · VinRobotics`

## Hero visual

Do not use a stock AI illustration.

Use a custom abstract research visual showing:

`frame → object relations → language tokens → timeline → action`

Possible behavior:

- slow-moving gradient mesh
- connected nodes respond slightly to cursor position
- the visual should move slowly and remain readable

---

# 8. Research Journey — signature interaction

## Purpose

This is the core storytelling section.

Headline:

**From visual perception to action understanding**

Research progression:

### Early work — Scene Text Recognition
**Visual perception**

Question:
How can models reliably extract structured information from complex visual scenes?

Visual:
scene image + text boxes / OCR outputs

### Surgical VQA
**Multimodal scene reasoning**

Question:
How can object representations, relationships, and language work together for visual reasoning?

Visual:
surgical frame + object graph + question/answer

### Sign Language Understanding @ TMA
**Sequential human actions**

Question:
How can models interpret temporally evolving human gestures rather than static scenes?

Visual:
a short strip of sequential frames / pose or gesture representations

### Egocentric Video @ VinRobotics
**Temporal grounding & action understanding**

Question:
How should vision-language models describe actions that unfold over time?

Visual:
video frames → sampling → VLM → temporally grounded caption → evaluation

### Current Direction
**Embodied Multimodal Intelligence**

Question:
How can multimodal models understand actions and interactions well enough to support intelligent agents?

Visual:
previous modalities converge into a simple world/agent representation

## Interaction

Desktop:

- story nodes on left
- changing artifact panel on right
- active node follows scroll
- connector line progressively draws as the user moves through the section
- artifact panel crossfades between stages

Mobile:

- vertical timeline
- each visual appears directly under its stage
- no sticky side panel

Closing line:

> **From recognizing what is visible to understanding what is happening.**

---

# 9. Current Research Interests

Use three visually distinct but restrained items.

## Multimodal & Vision-Language Learning
Grounding visual information in language and reasoning across modalities.

## Video & Temporal Understanding
Actions, temporal order, grounding, and long-form egocentric video.

## Action-Centric / Embodied Intelligence
Moving from passive perception toward models that understand interactions and actions.

Each item may deep-link to related research work.

Avoid long keyword lists.

---

# 10. Selected Research

Do not use three identical project cards.

Use alternating full-width editorial panels.

## Research item structure

1. Research question
2. Short context
3. Architecture / experiment visual
4. Core result / finding
5. Metrics
6. Paper / Code / Details links

## Example: GNN-SurgVQA

Title:

**GNN-SurgVQA**

Research question:

> Can explicit object relationships improve reasoning in surgical visual question answering?

Evidence row:

- `960K+` QA pairs
- `85.9%` Accuracy
- `85.8%` F1
- `Best Paper` ICDAM 2026

Links:

`Paper · Code · Details →`

## Example: Egocentric Action Understanding @ VinRobotics

Research question:

> How should vision-language models represent actions that unfold over time?

Show the experiment pipeline and 2–3 meaningful observations:

- directional ambiguity
- dataset shift with longer sequences
- fine-tuning overfitting / duplicated outputs

The point is to display research thinking, not only model names.

---

# 11. Parallel research thread: Optimization

Do not force the optimization project into the main multimodal timeline.

Section concept:

## A parallel interest in mathematical decision-making

Project:

**Multi-Objective Optimization for Emergency Blood Transportation**

Short framing:

> Formulating real-world decision problems under competing objectives and constraints.

Visual ideas:

- Pareto frontier
- route graph
- objective trade-off plot

Key topics:

`Multi-objective optimization · NSGA-II · SPEA2 · heuristic search`

Warm accent may be used here to distinguish the parallel thread.

Future-proof this section for:

- probability coursework
- algorithmic problem-solving / Codeforces
- other mathematical foundations

---

# 12. Publications

Keep this section visually calm.

Format:

**2026**

**GNN-SurgVQA: Object-Centric Graph Reasoning for Visual Question Answering in Laparoscopic Scene Understanding**  
Authors  
*ICDAM 2026 · Best Paper*  
`Paper · Code · BibTeX`

**2025**

**Comprehensive Approach to Vietnamese Scene Text Recognition: Challenges, Models, and Framework Development**  
Authors  
*ICDAM 2025 · Springer LNNS, vol. 1601*  
`Paper · BibTeX`

Interaction:

- title underline / subtle gradient on hover
- copy-BibTeX button
- no large image cards

Do not duplicate project descriptions here if they already appear in Selected Research.

---

# 13. Experience

Compact timeline.

Example:

### 2026 — VinRobotics
**AI Research Intern · VLA Team**  
VLM · Egocentric Video · Temporal Grounding

### 2026 — TMA Solutions
**AI Research Engineer Intern**  
Sign Language Understanding · Research Prototyping · Efficient Inference

### 2025–2026 — UEH
**Research Collaborator**  
Medical VQA · Scene Text Recognition · Optimization

Behavior:

- compact by default
- click/expand to reveal 2–3 bullets if desired
- do not copy full CV

---

# 14. Other Projects

Use smaller cards than Selected Research.

Projects:

### GradeMind
AI-assisted mathematics grading platform  
Capstone · Vingroup × VinUniversity Applied AI Talent Program

### Emergency Blood Transportation
May appear here only if the dedicated optimization section is omitted. Do not duplicate it otherwise.

---

# 15. Education & Programs

## UEH
B.Sc. Data Science  
GPA 3.92/4.00  
Rank #2 in Data Science  
Top 5% of School of Business Information Technology

Optional selected coursework:

- Data Structures & Algorithms — 9.8/10
- Mathematics for Computer Science — 9.8/10
- Artificial Intelligence — 10.0/10

## Vingroup × VinUniversity
Applied AI Talent Program  
May–Aug 2026

## AI Vietnam
AIO2026  
2026–Present

Keep this section concise.

---

# 16. Contact

Simple final CTA:

> Interested in multimodal learning, video understanding, or research collaboration?

Links:

- email
- GitHub
- LinkedIn
- CV

No complex contact form is required.

---

# 17. Motion design

Animation should help explain structure.

Use:

### Hero
Slow gradient mesh / blobs.

### Research Journey
- active node highlight
- path drawing on scroll
- artifact crossfade
- gentle frame slide for video stage

### Selected Research
- 12–20px fade/slide-in on first viewport entry
- gradient border on hover
- light elevation

### Metrics
Optional one-time count-up only if it remains subtle.

### Navigation
Active section transition.

### Research detail navigation
Use Astro View Transitions for smooth page changes.

## Motion constraints

- respect `prefers-reduced-motion`
- avoid motion on every element
- no repeated looping text animations
- no essential information may depend on animation

---

# 18. Responsive UX

## Desktop
- max content width: 1080–1160px
- two-column journey interaction
- wide editorial research panels

## Tablet
- reduce side-by-side density
- selected research can remain 2-column if readable

## Mobile
- single-column
- research journey becomes vertical
- research metrics wrap cleanly
- figures remain legible
- navbar becomes compact drawer
- preserve large tap targets

---

# 19. Accessibility

Must-have:

- semantic headings
- keyboard navigation
- visible focus states
- WCAG-friendly contrast
- alt text for research figures
- `prefers-reduced-motion`
- links must remain understandable without icons
- decorative gradient visuals should be hidden from screen readers
- do not rely on color alone to encode the active journey stage

---

# 20. Performance

Target:

- static-first
- minimal client JS
- lazy-load non-critical images
- use responsive images
- avoid heavyweight animation packages globally
- only hydrate components that need interaction
- aim for Lighthouse 90+ across Performance, Accessibility, Best Practices, SEO
