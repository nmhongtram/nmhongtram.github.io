# ADR 003 — Present research metrics with their evaluation context

**Status:** Accepted
**Decision owner:** Nguyen Mai Hong Tram
**Scope:** First-version portfolio copy; the CV is unchanged

## Context

The GNN-SurgVQA CV line gives a dataset-scale number beside accuracy and F1. Public result files show those scores on a smaller visual-oracle full-test split. The TMA CV gives error and speedup percentages whose definitions and timing setup have not yet been established in this interview.

## Decision

- Use this approved GNN-SurgVQA wording: “Using SSG-VQA, a dataset of about 960K question–answer pairs, the model achieved 85.9% accuracy and 85.8% weighted F1 on a 77,198-question visual-oracle test.”
- Visual oracle means using bounding boxes supplied with SSG-VQA rather than predictions from the fine-tuned YOLOv8 detector.
- Omit TMA's percentages from the first portfolio version. The TMA entry can still describe its question, contribution, methods, and learning. Its data remains private.
- Leave the current CV unchanged during this documentation interview.

## Consequences

The portfolio distinguishes dataset size from evaluation-set size and weighted from macro F1. A reviewer can interpret the result without assuming the 85.9% score was measured over all 960K questions. TMA percentages can be reconsidered when their definitions and timing setup are available.

See [the evidence audit](EVIDENCE_AUDIT.md) for the public sources and remaining questions.
