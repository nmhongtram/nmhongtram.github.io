# 02 — Content & Data Model

## 1. Content principles

The portfolio should be content-driven.

Do not hard-code research/project content inside layout components.

Use Astro Content Collections / MDX so that adding a new paper or project is primarily a content change.

---

# 2. Hero content

```yaml
name: Nguyen Mai Hong Tram
role: Multimodal AI Researcher
headline: I study how AI understands actions, time, and interaction.
focus:
  - Multimodal Learning
  - Vision-Language Models
  - Video Understanding
location: Ho Chi Minh City, Vietnam
links:
  cv: /cv.pdf
  github: https://github.com/nmhongtram
  linkedin: https://linkedin.com/in/nmhongtram
```

Suggested supporting copy:

> My research has evolved from visual perception and medical VQA toward multimodal video understanding, with recent work on temporally grounded actions in egocentric video.

Credibility highlights:

```yaml
highlights:
  - label: Rank #2
    sublabel: Data Science @ UEH
  - label: Best Paper
    sublabel: ICDAM 2026
  - label: Research Intern
    sublabel: VinRobotics
```

---

# 3. Research Journey content

Suggested schema:

```ts
type JourneyStage = {
  id: string
  period?: string
  eyebrow?: string
  title: string
  subtitle: string
  question: string
  summary?: string
  visual: string
  relatedResearch?: string[]
}
```

Suggested entries:

```yaml
- id: scene-text
  eyebrow: Early Work
  title: Scene Text Recognition
  subtitle: Visual perception
  question: How can models reliably extract structured information from complex visual scenes?

- id: surgical-vqa
  title: Surgical VQA
  subtitle: Multimodal scene reasoning
  question: How can object representations, relationships, and language work together for visual reasoning?

- id: sign-language
  title: Sign Language Understanding
  subtitle: Sequential human actions
  question: How can models interpret temporally evolving human gestures rather than static scenes?

- id: egocentric-video
  title: Egocentric Video Understanding
  subtitle: Temporal grounding & action reasoning
  question: How should vision-language models represent actions that unfold over time?

- id: embodied
  eyebrow: Current Direction
  title: Embodied Multimodal Intelligence
  subtitle: Action-centric intelligence
  question: How can multimodal models understand actions and interactions well enough to support intelligent agents?
```

Suggested journey narrative:

> I began with visual perception problems such as scene-text recognition. Surgical VQA introduced me to multimodal reasoning over objects, relationships, and language; sign-language research shifted my attention toward sequential human actions. At VinRobotics, this evolved into temporal grounding in egocentric video—leading to my current interest in models that understand actions, time, and interaction for embodied intelligence.

---

# 4. Research content schema

Use one MDX file per substantial research item.

Suggested frontmatter:

```yaml
---
title: "GNN-SurgVQA"
slug: "gnn-surgvqa"
year: 2026
featured: true
category: "Multimodal Reasoning"
question: "Can explicit object relationships improve reasoning in surgical visual question answering?"
summary: "Object-centric multimodal reasoning for laparoscopic scene understanding."
venue: "ICDAM 2026"
award: "Best Paper"
paper: ""
code: "https://github.com/nmhongtram/gnn-surgical-understanding"
heroImage: "/images/research/surgvqa/hero.webp"
metrics:
  - label: "QA pairs"
    value: "960K+"
  - label: "Accuracy"
    value: "85.9%"
  - label: "F1"
    value: "85.8%"
tags:
  - VQA
  - Multimodal Learning
  - Graph Neural Networks
  - Surgical AI
---
```

Recommended body structure:

```md
## Research question

## Why this matters

## Method

## Experimental setup

## Results

## Failure analysis

## What did not work

## What I learned

## Links
```

Do not invent findings that are not yet ready to be public.

---

# 5. VinRobotics research content

Suggested metadata:

```yaml
---
title: "Temporally Grounded Egocentric Action Understanding"
slug: "egocentric-action-understanding"
featured: true
category: "Video & Vision-Language Learning"
organization: "VinRobotics"
question: "How should vision-language models represent actions that unfold over time?"
summary: "Research on VLM pipelines for temporally grounded action captioning in egocentric video."
tags:
  - VLM
  - Video Understanding
  - Temporal Grounding
  - Egocentric Video
  - Evaluation
---
```

Public-safe content themes:

- multi-stage VLM pipelines
- frame sampling
- temporal grounding
- prompting
- model adaptation
- evaluation design
- large-scale experimentation with SGLang

Research observations that can be highlighted if public-safe:

- directional ambiguity
- distribution shift with longer sequences
- overfitting / duplicated predictions

Do not publish confidential implementation details, internal data, or infrastructure information that was not already made public.

---

# 6. Parallel optimization content

Suggested schema:

```yaml
---
title: "Multi-Objective Optimization for Emergency Blood Transportation"
slug: "blood-transport-optimization"
category: "Optimization & Decision Making"
featuredParallel: true
question: "How can emergency logistics balance cost and hospital response time under operational constraints?"
award:
  - "UEH Young Researchers Award — Prize B"
  - "Eureka 2025 Semifinalist"
code: "https://github.com/nmhongtram/blood-transport-optimization"
tags:
  - Multi-objective Optimization
  - NSGA-II
  - SPEA2
  - EVRP
---
```

Key facts:

- multi-objective EVRP
- battery-swapping stations
- time windows
- NSGA-II / SPEA2
- Savings, 2-opt, 3-opt
- real HCMC case
- 36 hospitals
- 6 battery-swapping stations

Visual suggestion:

- animated/static Pareto front
- simplified HCMC route diagram
- objective trade-off illustration

---

# 7. Publication schema

```ts
type Publication = {
  title: string
  year: number
  authors: string[]
  venue: string
  award?: string
  volume?: string
  publisher?: string
  paper?: string
  code?: string
  bibtex?: string
}
```

Entries:

## GNN-SurgVQA

Title:

**GNN-SurgVQA: Object-Centric Graph Reasoning for Visual Question Answering in Laparoscopic Scene Understanding**

Venue:

`International Conference on Data Analytics and Management (ICDAM), 2026`

Award:

`Best Paper`

TODO:
- add exact author list and author order
- add paper URL once public
- add BibTeX

## Scene Text Recognition

Title:

**Comprehensive Approach to Vietnamese Scene Text Recognition: Challenges, Models, and Framework Development**

Venue display:

`ICDAM 2025 · Lecture Notes in Networks and Systems, vol. 1601 · Springer`

Paper:

`https://link.springer.com/chapter/10.1007/978-3-032-03527-1_3`

TODO:
- add exact author list and author order
- add BibTeX

---

# 8. Experience schema

```ts
type Experience = {
  organization: string
  role: string
  period: string
  location?: string
  summary: string
  tags: string[]
  bullets?: string[]
}
```

Suggested entries:

## VinRobotics

Role:

`AI Research Intern · VLA Team`

Summary:

> Worked on VLM-based temporally grounded action captioning for egocentric video.

Tags:

`VLM · Egocentric Video · Temporal Grounding`

Expanded bullets:

- Developed and evaluated multi-stage vision-language pipelines for temporally grounded action captioning.
- Designed controlled experiments around frame sampling, temporal grounding, prompting, and model adaptation.
- Investigated recent VLM/VLA methods through literature review, implementation analysis, and large-scale experimentation.

## TMA Solutions

Role:

`AI Research Engineer Intern`

Summary:

> Researched algorithms for bidirectional sign-language communication and translated research prototypes into efficient browser inference.

Tags:

`Sign Language · Sequential Actions · Research Prototyping · ONNX`

Expanded bullets:

- Investigated deep-learning approaches through literature review, algorithm analysis, implementation, and experimental evaluation.
- Researched continuous sign-language recognition and text-to-3D-avatar generation.
- Converted research prototypes to browser inference using ONNX Runtime Web.

## UEH

Role:

`Research Collaborator`

Summary:

> Contributed across surgical VQA, scene-text recognition, and multi-objective optimization.

Tags:

`Medical VQA · Scene Text · Optimization`

Expanded bullets:

- Problem formulation
- literature review
- data preparation
- model development
- experimental design
- evaluation
- manuscript preparation

---

# 9. Programs

```yaml
- name: "Vingroup × VinUniversity — Applied AI Talent Program"
  period: "May 2026 – Aug 2026"
  description: "Three-month program combining intensive AI training, an applied capstone project, and an industry research internship at VinRobotics."

- name: "AI Vietnam — AIO2026"
  period: "2026 – Present"
  description: "Research-oriented artificial intelligence training and community activities."
```

---

# 10. Education

```yaml
institution: "University of Economics Ho Chi Minh City (UEH)"
degree: "B.Sc. in Data Science"
period: "Sep 2022 – Mar 2026"
gpa: "3.92/4.00"
rank: "Rank #2 in Data Science"
schoolRank: "Top 5% of the School of Business Information Technology"
coursework:
  - name: "Data Structures & Algorithms"
    score: "9.8/10"
  - name: "Mathematics for Computer Science"
    score: "9.8/10"
  - name: "Artificial Intelligence"
    score: "10.0/10"
```

---

# 11. Other project: GradeMind

```yaml
---
title: "GradeMind"
subtitle: "AI-Assisted Mathematics Grading Platform"
type: "Capstone Project"
program: "Vingroup × VinUniversity Applied AI Talent Program"
summary: "Teacher-in-the-loop AI grading system for Vietnamese secondary-school mathematics."
tags:
  - Multimodal AI
  - RAG
  - Evaluation
  - FastAPI
  - PostgreSQL
---
```

Key content:

- evidence-backed feedback
- class-level error analysis
- multimodal grading
- RAG
- confidence-based routing
- source-grounded evidence
- PII safeguards
- golden-set evaluation

Keep it visually secondary to research work.

---

# 12. Technical skills

Homepage skills should remain compact.

```yaml
research:
  - Multimodal Learning
  - Vision-Language Models
  - Video Understanding
  - Computer Vision
  - Visual Question Answering
  - Model Evaluation

machineLearning:
  - PyTorch
  - Hugging Face Transformers
  - PyTorch Geometric
  - scikit-learn

mlSystems:
  - SGLang
  - ONNX Runtime
  - FastAPI
  - Docker

programming:
  - Python
  - SQL
  - PostgreSQL
  - pgvector

language:
  - "English — TOEIC Listening & Reading 930/990"
```

Do not add Google Data Analytics or HackerRank SQL certificates to the research portfolio.

---

# 13. Future content

The data model should support future additions without redesign.

Possible future fields:

- Google Scholar link
- preprints
- Codeforces rating
- Probability coursework
- research notes / reading notes
- talks
- presentations
- collaborators / mentors
- downloadable BibTeX
