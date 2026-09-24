# Evidence audit — public research metrics

This read-only audit supports the grill-with-docs interview. It compares the public CV with the owner's public GitHub material and the original SSG-VQA publication. It does not change the CV or authorize new portfolio claims.

## GNN-SurgVQA

| Claim in current public CV | Evidence and interpretation | Portfolio wording |
| --- | --- | --- |
| 960K+ QA pairs | The original SSG-VQA paper reports approximately 960K questions from 25K surgical scenes. The owner's repository notebook reports 911,948 after concatenating the train, validation, test, and test_full splits in that local analysis; it does not establish the final full-dataset count. | Describe SSG-VQA as a dataset of approximately 960K question–answer pairs. Do not say the model was evaluated on all 960K pairs. |
| 85.9% accuracy | The visual-oracle, test_full, GCN cross-entropy result records 85.907666% accuracy on 77,198 evaluation questions. | If featured, label this as the visual-oracle full-test result. |
| 85.8% F1 | The same result records weighted F1 = 0.857839772 (85.8% rounded); macro F1 = 0.684477279. | Label as weighted F1. |
| Visual-oracle condition | The owner defines this condition as using SSG-VQA dataset bounding boxes rather than bounding boxes predicted by the fine-tuned YOLOv8 detector. The original SSG-VQA paper likewise distinguishes dataset detection labels from a trained detector, though it discusses its own YOLOv7 system. | Use the owner's definition for GNN-SurgVQA. Do not conflate this result with the non-oracle run. |

The corresponding non-oracle GCN cross-entropy file reports 70.339905% accuracy and weighted F1 = 0.697048974 on test_full. That difference makes the evaluation condition important context for an academic reviewer.

Primary sources:

- [Original SSG-VQA paper, dataset scale and oracle explanation](https://link.springer.com/article/10.1007/s11548-024-03141-y)
- [Public GNN-SurgVQA repository](https://github.com/nmhongtram/gnn-surgical-understanding)
- [Dataset-analysis notebook](https://github.com/nmhongtram/gnn-surgical-understanding/blob/main/src/analysis/SSG_VQA_dataset_analysis.ipynb)
- [Visual-oracle full-test GCN result](https://github.com/nmhongtram/gnn-surgical-understanding/blob/main/results/results_oracle/test_full_gcn-ce.json)
- [Non-oracle full-test GCN result](https://github.com/nmhongtram/gnn-surgical-understanding/blob/main/results/results_non-oracle/test_full_gcn-ce.json)
- [Results-analysis notebook](https://github.com/nmhongtram/gnn-surgical-understanding/blob/main/src/analysis/results_analysis.ipynb)

## TMA Solutions

The current public CV reports approximately 5% sequence prediction error on a test set, 10% in a real-time video-chat setting, and approximately 37% lower inference time after conversion to ONNX Runtime Web. The owner says the speedup compares against an earlier version of the system. I did not find a public TMA project repository among the repositories currently listed on the owner's public GitHub profile. Exact definitions for the two error percentages, timing method, and device remain unverified from public material.

The owner confirmed that version one should describe the TMA question, contribution, and learning without repeating the percentages. The existing CV wording may remain until more context is supplied.

Source: [public GitHub profile](https://github.com/nmhongtram), plus the local public research_cv.tex.

## Approved portfolio copy and remaining clarification

Approved: “Using SSG-VQA, a dataset of about 960K question–answer pairs, the model achieved 85.9% accuracy and 85.8% weighted F1 on a 77,198-question visual-oracle test.”

If the CV is revised later, distinguish the approximately 960K-question dataset from the 77,198-question visual-oracle full-test evaluation. Define the TMA sequence prediction error and timing setup before expanding those figures into portfolio copy.
