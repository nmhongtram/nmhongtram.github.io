export const profile = {
  name: "Nguyen Mai Hong Tram",
  role: "AI Researcher",
  headline: "I study how AI understands actions, time, and interaction.",
  summary:
    "My research has evolved from computer vision and medical visual question answering toward multimodal and video understanding, with recent work on temporally grounded action understanding in egocentric video.",
  location: "Ho Chi Minh City, Vietnam",
  email: "nguyenmaihongtram2004@gmail.com",
  cv: "/cv.pdf",
  github: "https://github.com/nmhongtram",
  linkedin: "https://www.linkedin.com/in/nmhongtram/",
} as const;

// Each work owns its public facts. Page sections project these records into shorter views.
export const works = {
  sceneText: {
    journeyTitle: "Scene text recognition",
    concept: "Visual perception",
    question:
      "How can models reliably extract structured information from complex visual scenes?",
    journeyNote:
      "Early work in Vietnamese scene-text detection and recognition established my interest in robust visual representations.",
    diagram: ["Scene", "Text regions", "Recognized text"],
    publication: {
      year: "2025",
      title:
        "Comprehensive Approach to Vietnamese Scene Text Recognition: Challenges, Models, and Framework Development",
      venue:
        "ICDAM 2025 · Lecture Notes in Networks and Systems, vol. 1601 · Springer",
      status: "Published",
      href: "https://link.springer.com/chapter/10.1007/978-3-032-03527-1_3",
      linkLabel: "Read paper",
    },
  },
  gnn: {
    title: "GNN-SurgVQA",
    journeyTitle: "Surgical visual question answering",
    concept: "Multimodal reasoning",
    question:
      "Can explicit object relationships improve surgical visual question answering?",
    journeyNote:
      "I developed GNN-SurgVQA from problem formulation through model development, evaluation, and manuscript writing.",
    diagram: ["Objects", "Relations", "Question + answer"],
    research: {
      field: "Object-centric multimodal reasoning",
      contribution:
        "I carried this research from problem formulation through data preparation, model development, evaluation, and manuscript writing.",
      evidence:
        "Using SSG-VQA, a dataset of about 960K question–answer pairs, the model achieved 85.9% accuracy and 85.8% weighted F1 on a 77,198-question visual-oracle test.",
      context:
        "Visual oracle uses bounding boxes supplied with SSG-VQA rather than predictions from the fine-tuned YOLOv8 detector.",
      status: "ICDAM 2026 · Best Paper · paper accepted, not yet public",
    },
    code: "https://github.com/nmhongtram/gnn-surgical-understanding",
    publication: {
      year: "2026",
      title:
        "GNN-SurgVQA: Object-Centric Graph Reasoning for Visual Question Answering in Laparoscopic Scene Understanding",
      venue:
        "International Conference on Data Analytics and Management (ICDAM)",
      status: "Best Paper · accepted, paper not yet public",
      linkLabel: "Public code",
    },
  },
  tma: {
    journeyTitle: "Sign-language understanding",
    concept: "Sequential human actions",
    question:
      "How can models interpret gestures that evolve through time rather than static scenes?",
    journeyNote:
      "At TMA Solutions, I investigated continuous sign-language recognition and text-to-3D-avatar generation. This shifted my focus toward sequential actions.",
    diagram: ["Gesture frames", "Sequence", "Meaning"],
    experience: {
      period: "Mar–May 2026",
      role: "AI Research Engineer Intern",
      organization: "TMA Solutions",
      summary:
        "Bidirectional sign-language communication research and browser inference using PyTorch and ONNX Runtime Web.",
    },
  },
  vin: {
    title: "Temporally grounded action understanding",
    journeyTitle: "Egocentric video",
    concept: "Temporal grounding",
    question:
      "How should vision-language models represent actions that unfold over time?",
    journeyNote:
      "At VinRobotics, I developed and evaluated multi-stage VLM pipelines for temporally grounded action captioning in egocentric video.",
    diagram: ["Video frames", "Temporal context", "Action caption"],
    research: {
      field: "Egocentric video at VinRobotics",
      contribution:
        "I developed and evaluated multi-stage vision-language pipelines, and designed controlled experiments on frame sampling, temporal grounding, prompting, and model adaptation.",
      evidence:
        "I analyzed directional ambiguity, dataset shift, and overfitting, and investigated recent VLM/VLA methods through literature review and large-scale experimentation using SGLang.",
      context:
        "Research internship, AI Platform VLA Team, July to August 2026.",
      status: "Research internship · VinRobotics",
    },
    experience: {
      period: "Jul–Aug 2026",
      role: "AI Research Intern",
      organization: "VinRobotics · AI Platform, VLA Team",
      summary:
        "Temporally grounded action captioning in egocentric video, with controlled experiments in sampling, grounding, prompting, and model adaptation.",
    },
  },
  optimization: {
    title: "Emergency blood transportation",
    question:
      "How can emergency logistics balance cost and hospital waiting time under operational constraints?",
    contribution:
      "I formulated a multi-objective electric vehicle routing problem with battery-swapping stations and time windows, then developed hybrid NSGA-II and SPEA2 methods with Savings, 2-opt, and 3-opt heuristics.",
    evidence:
      "Validated on standard EVRP-TW benchmarks and a Ho Chi Minh City case study involving 36 hospitals and 6 battery-swapping stations.",
    recognition:
      "UEH Young Researchers Award, Prize B · Eureka 2025 Semifinalist",
    link: "https://github.com/nmhongtram/blood-transport-optimization",
  },
  gradeMind: {
    title: "GradeMind",
    subtitle: "AI-assisted mathematics grading",
    summary:
      "A teacher-in-the-loop system for Vietnamese secondary-school mathematics, with evidence-backed feedback, class-level error analysis, confidence-based routing, and PII safeguards.",
    program: "Vingroup × VinUniversity Applied AI Talent Program capstone",
    demo: "https://demo.edufun.ai/p/team-506-grademind-tro-ly-cham-phan-hoi-cho-giao-vien-toan",
  },
  airQuality: {
    title: "Air Quality Forecasting Pipeline",
    code: "https://github.com/nmhongtram/air-quality-forecasting",
  },
} as const;

export const journey = [
  {
    id: "scene-text",
    title: works.sceneText.journeyTitle,
    concept: works.sceneText.concept,
    question: works.sceneText.question,
    note: works.sceneText.journeyNote,
    diagram: works.sceneText.diagram,
  },
  {
    id: "surgical-vqa",
    title: works.gnn.journeyTitle,
    concept: works.gnn.concept,
    question: works.gnn.question,
    note: works.gnn.journeyNote,
    diagram: works.gnn.diagram,
  },
  {
    id: "sign-language",
    title: works.tma.journeyTitle,
    concept: works.tma.concept,
    question: works.tma.question,
    note: works.tma.journeyNote,
    diagram: works.tma.diagram,
  },
  {
    id: "egocentric-video",
    title: works.vin.journeyTitle,
    concept: works.vin.concept,
    question: works.vin.question,
    note: works.vin.journeyNote,
    diagram: works.vin.diagram,
  },
  {
    id: "embodied",
    title: "Embodied multimodal intelligence",
    concept: "Future direction",
    question:
      "How can multimodal models understand action and interaction well enough to support intelligent agents?",
    note: "My current direction of interest extends this path toward action-centric and embodied intelligence, including VLM and VLA research.",
    diagram: ["Perception", "Time + interaction", "Action"],
  },
] as const;

export const interests = [
  {
    title: "Multimodal learning",
    detail:
      "Connecting visual information with language and reasoning across modalities.",
  },
  {
    title: "Video and temporal understanding",
    detail:
      "Studying action, temporal order, and grounding in egocentric video.",
  },
  {
    title: "Action-centric intelligence",
    detail:
      "Exploring models that can understand interactions and support embodied agents.",
  },
] as const;

export const research = [
  {
    id: "gnn-surgvqa",
    title: works.gnn.title,
    question: works.gnn.question,
    ...works.gnn.research,
    link: works.gnn.code,
    linkLabel: "Explore public code",
  },
  {
    id: "vinrobotics",
    title: works.vin.title,
    question: works.vin.question,
    ...works.vin.research,
    link: undefined,
    linkLabel: undefined,
  },
] as const;
export const optimization = works.optimization;
export const publications = [
  { ...works.gnn.publication, href: works.gnn.code },
  works.sceneText.publication,
] as const;
export const experience = [
  works.vin.experience,
  works.tma.experience,
  {
    period: "Mar 2025–Jan 2026",
    role: "Research Collaborator",
    organization: "University of Economics Ho Chi Minh City",
    summary:
      "Surgical VQA, Vietnamese scene-text recognition, and multi-objective optimization across the research lifecycle.",
  },
] as const;

export const education = {
  degree: "B.Sc. in Data Science",
  institution: "University of Economics Ho Chi Minh City",
  period: "Sep 2022–Mar 2026",
  gpa: "3.92 / 4.00",
  rank: "Rank #2 in Data Science",
  schoolRank: "Top 5% of the School of Business Information Technology",
  programs: [
    "Vingroup × VinUniversity Applied AI Talent Program, May–Aug 2026",
    "AI Vietnam AIO2026, Jun 2026–present",
  ],
} as const;
export const gradeMind = works.gradeMind;
