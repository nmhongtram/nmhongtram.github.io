import { profile, works, experience, publications } from "./portfolio";

export const engineerProfile = {
  ...profile,
  cv: "/engineer_cv.pdf",
  headline: "I build multimodal AI systems for real workflows.",
  summary:
    "I work across OCR, language models, retrieval, visual reasoning, and browser inference—from implementation through evaluation and delivery.",
} as const;

export const engineerCopy = {
  explore: "Explore selected builds",
  readCv: "Read engineering CV",
  buildsTitle: "Selected builds",
  buildsIntro:
    "Systems I built, the decisions behind them, and what can be inspected publicly.",
  problem: "Problem",
  contribution: "What I built",
  approach: "Engineering approach",
  evidence: "Evidence",
  experienceTitle: "Engineering experience",
  experienceIntro:
    "Applied work across multimodal pipelines, video understanding, and browser inference.",
  capabilitiesTitle: "How I work",
  capabilitiesIntro:
    "Tools appear here in the context of the systems they helped deliver.",
  recognitionTitle: "Research foundations",
  recognitionIntro:
    "Published work and recognition that inform my engineering practice.",
  contactTitle: "Build something useful together.",
  contactIntro:
    "Interested in applied AI, multimodal systems, or dependable model delivery? Get in touch.",
  backToTop: "Back to top",
  code: "View public code",
  demo: "Open public demo",
} as const;

export const engineerBuilds = [
  {
    id: "grademind",
    title: works.gradeMind.title,
    subtitle: "AI-assisted mathematics grading",
    problem:
      "Help teachers review Vietnamese secondary-school mathematics work with evidence-backed draft feedback and class-level error analysis.",
    contribution:
      "I personally built the OCR flow, LLM API integration, RAG pipeline, and frontend, and handled project management and documentation.",
    approach:
      "A teacher-in-the-loop workflow combines multimodal grading, source-grounded retrieval, confidence-based routing, citation checks, PII safeguards, and human review.",
    evidence:
      "The public capstone demo shows the product workflow; the system also uses a golden set for evaluation.",
    tools: [
      "OCR",
      "LLM API",
      "RAG",
      "FastAPI",
      "PostgreSQL/pgvector",
      "React/TypeScript",
    ],
    link: works.gradeMind.demo,
    linkLabel: engineerCopy.demo,
  },
  {
    id: "tma",
    title: "Sign-language inference in the browser",
    subtitle: "TMA Solutions · AI Engineer internship",
    problem:
      "Make continuous sign-language recognition usable in a real-time browser setting.",
    contribution:
      "I researched continuous sign-language recognition and text-to-3D-avatar generation, then built an end-to-end inference path from PyTorch models to the browser.",
    approach:
      "Converted model inference to ONNX Runtime Web and integrated it with a browser-facing pipeline.",
    evidence: "The pipeline was evaluated in a real-time video-chat setting.",
    tools: ["PyTorch", "ONNX Runtime Web", "Browser inference"],
    link: undefined,
    linkLabel: undefined,
  },
  {
    id: "gnn",
    title: works.gnn.title,
    subtitle: "Multimodal surgical visual question answering",
    problem: works.gnn.question,
    contribution: works.gnn.research.contribution,
    approach:
      "Combined visual representations, language processing, and graph-based scene reasoning in an end-to-end VQA pipeline.",
    evidence: works.gnn.research.evidence,
    tools: ["PyTorch", "PyTorch Geometric", "Model evaluation"],
    link: works.gnn.code,
    linkLabel: engineerCopy.code,
  },
] as const;

export const engineerExperience = experience.slice(0, 2);
export const engineerPublications = publications;
export const engineerCapabilities = [
  {
    title: "Applied AI",
    detail: "OCR, LLM APIs, RAG, and multimodal workflows in GradeMind.",
  },
  {
    title: "Model development",
    detail:
      "PyTorch, vision-language pipelines, graph reasoning, and controlled evaluation.",
  },
  {
    title: "Inference and delivery",
    detail:
      "ONNX Runtime Web, SGLang, FastAPI, PostgreSQL/pgvector, and Docker.",
  },
] as const;
