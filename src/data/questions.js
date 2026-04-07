export const QUESTIONS = [
  {
    id: 1,
    category: "Responsible AI",
    q: "What does 'responsible AI' primarily refer to in an organizational context?",
    opts: [
      "Maximizing AI model performance at all costs",
      "Developing and deploying AI ethically, safely, and transparently",
      "Using only open-source AI models",
      "Restricting AI use to senior leadership",
    ],
    answer: 1,
    fb_correct:
      "Responsible AI covers the ethical development, deployment, and governance of AI systems — including fairness, transparency, accountability, and safety throughout the AI lifecycle.",
    fb_wrong:
      "Responsible AI is about ethical and accountable development, not just performance. It includes fairness, transparency, safety, and human oversight.",
  },
  {
    id: 2,
    category: "Google AI Principles",
    q: "Which Google framework is used to evaluate potential harms and benefits of AI products before launch?",
    opts: [
      "OKR framework",
      "AI Principles review process",
      "PDCA cycle",
      "Agile sprint review",
    ],
    answer: 1,
    fb_correct:
      "Google's AI Principles include a review process that assesses potential harms vs. benefits before deployment, ensuring products align with responsible AI values.",
    fb_wrong:
      "Google uses its AI Principles review process — not general management frameworks — to evaluate AI products for potential harms and benefits prior to launch.",
  },
  {
    id: 3,
    category: "LLM Concepts",
    q: "What is 'grounding' in the context of large language models (LLMs)?",
    opts: [
      "Limiting the model's token output",
      "Connecting model responses to verified, real-world data sources",
      "Training a model from scratch",
      "Fine-tuning on proprietary datasets only",
    ],
    answer: 1,
    fb_correct:
      "Grounding connects LLM outputs to verified external data (like Search or databases), reducing hallucinations and making responses more factually reliable.",
    fb_wrong:
      "Grounding means anchoring LLM responses to real, verifiable data sources — it's a key technique for improving factual accuracy and reducing hallucinations.",
  },
  {
    id: 4,
    category: "AI Governance",
    q: "In AI governance, what does 'human-in-the-loop' mean?",
    opts: [
      "Humans write all AI code manually",
      "A human reviews or approves AI decisions at key points",
      "The AI is trained exclusively on human feedback",
      "Employees monitor AI hardware",
    ],
    answer: 1,
    fb_correct:
      "Human-in-the-loop means a human reviews, approves, or can override AI decisions at critical junctures — a core safeguard in high-stakes applications.",
    fb_wrong:
      "Human-in-the-loop specifically refers to having a human review or approve AI outputs at key decision points, not about writing code or hardware monitoring.",
  },
  {
    id: 5,
    category: "LLM Concepts",
    q: "What is 'hallucination' in an AI model?",
    opts: [
      "The model generating very creative outputs",
      "The model confidently producing false or fabricated information",
      "A visual artifact in image models",
      "Slow inference speed",
    ],
    answer: 1,
    fb_correct:
      "Hallucination is when an LLM generates plausible-sounding but factually incorrect or made-up information — a critical risk to manage in enterprise AI deployments.",
    fb_wrong:
      "Hallucination specifically refers to AI models generating false information with high confidence, not creativity or visual artifacts.",
  },
  {
    id: 6,
    category: "LLM Concepts",
    q: "What is the primary purpose of a 'foundation model'?",
    opts: [
      "To serve as a narrow, task-specific model",
      "To act as a large pre-trained base that can be adapted for many downstream tasks",
      "To replace all enterprise databases",
      "To automate HR processes exclusively",
    ],
    answer: 1,
    fb_correct:
      "Foundation models (like Gemini or GPT-4) are large pre-trained models designed as versatile bases that can be fine-tuned or prompted for a wide range of tasks.",
    fb_wrong:
      "Foundation models are broad, general-purpose models trained at scale that serve as a base for many specific applications — the opposite of narrow, task-specific models.",
  },
  {
    id: 7,
    category: "LLM Concepts",
    q: "Which of the following best describes 'prompt engineering'?",
    opts: [
      "Writing Python code to train a model",
      "Crafting and refining inputs to guide AI model outputs effectively",
      "Designing AI hardware chips",
      "Managing cloud compute costs",
    ],
    answer: 1,
    fb_correct:
      "Prompt engineering is the skill of designing effective inputs (prompts) to elicit the best, most accurate responses from AI models — a key competency for AI leadership.",
    fb_wrong:
      "Prompt engineering is about crafting the right inputs to guide an AI's output — it's a critical skill for getting reliable, useful results from generative AI.",
  },
  {
    id: 8,
    category: "Responsible AI",
    q: "What does 'AI bias' typically refer to?",
    opts: [
      "The model preferring newer training data",
      "Systematic unfairness in AI outputs due to skewed training data or design choices",
      "AI running faster on some hardware",
      "The cost of GPU compute",
    ],
    answer: 1,
    fb_correct:
      "AI bias refers to systematic, unfair skews in model outputs — often caused by unrepresentative training data or flawed design decisions — that can disadvantage certain groups.",
    fb_wrong:
      "AI bias is about systematic unfairness or skewed outputs that disadvantage certain groups, typically rooted in unrepresentative training data or design flaws.",
  },
  {
    id: 9,
    category: "LLM Concepts",
    q: "What is 'retrieval-augmented generation' (RAG)?",
    opts: [
      "Training a model on retrieved web data only",
      "A technique combining LLM generation with retrieval from an external knowledge base",
      "A method for compressing model weights",
      "A type of reinforcement learning",
    ],
    answer: 1,
    fb_correct:
      "RAG combines a retrieval system (searching a knowledge base) with an LLM's generation, giving the model access to up-to-date or proprietary information at inference time.",
    fb_wrong:
      "RAG stands for Retrieval-Augmented Generation — it lets LLMs pull from an external knowledge base at query time to produce more accurate, grounded responses.",
  },
  {
    id: 10,
    category: "Google AI Principles",
    q: "Under Google's AI Principles, which type of AI application does Google explicitly commit NOT to pursue?",
    opts: [
      "AI for healthcare diagnostics",
      "AI for weapons that violate international norms",
      "AI for content moderation",
      "AI for supply chain optimization",
    ],
    answer: 1,
    fb_correct:
      "Google's AI Principles explicitly state they will not design or deploy AI in weapons or technologies that violate international norms, including autonomous weapons systems.",
    fb_wrong:
      "One of Google's explicit commitments in its AI Principles is to not build AI-powered weapons or technologies that violate international norms.",
  },
  {
    id: 11,
    category: "LLM Concepts",
    q: "What is 'model fine-tuning'?",
    opts: [
      "Adjusting cloud server settings",
      "Further training a pre-trained model on a specific dataset to specialize its behavior",
      "Reducing a model's parameter count",
      "Writing evaluation test cases",
    ],
    answer: 1,
    fb_correct:
      "Fine-tuning takes a pre-trained foundation model and continues training it on a domain-specific dataset, adapting its behavior for specialized tasks while leveraging existing knowledge.",
    fb_wrong:
      "Fine-tuning means taking a general pre-trained model and training it further on specific data to customize its outputs for a particular domain or task.",
  },
  {
    id: 12,
    category: "AI Leadership",
    q: "What is the key leadership consideration when deploying AI in a regulated industry?",
    opts: [
      "Prioritizing speed of deployment above all else",
      "Ensuring AI systems comply with relevant regulations and include explainability and auditability",
      "Using only the largest available models",
      "Avoiding all use of AI until regulations are finalized",
    ],
    answer: 1,
    fb_correct:
      "In regulated industries (finance, healthcare, etc.), AI leaders must ensure compliance with regulations, maintain audit trails, and be able to explain model decisions to regulators and stakeholders.",
    fb_wrong:
      "In regulated industries, compliance, explainability, and auditability are paramount — rushing deployment without these safeguards creates significant legal and reputational risk.",
  },
  {
    id: 13,
    category: "LLM Concepts",
    q: "What does 'model interpretability' (or explainability) mean?",
    opts: [
      "The model running efficiently on low-power hardware",
      "The ability to understand and explain why a model produces a particular output",
      "The speed at which a model responds",
      "The cost of running the model",
    ],
    answer: 1,
    fb_correct:
      "Interpretability/explainability refers to being able to understand the reasoning behind an AI model's outputs — critical for trust, accountability, and debugging in high-stakes decisions.",
    fb_wrong:
      "Interpretability is about being able to explain how a model arrived at its decision — essential for accountability, debugging, and building stakeholder trust.",
  },
  {
    id: 14,
    category: "LLM Concepts",
    q: "What is a 'multi-modal' AI model?",
    opts: [
      "A model that runs across multiple cloud providers",
      "A model that processes and generates multiple data types, such as text, images, and audio",
      "A model trained by multiple organizations",
      "A model with multiple layers of security",
    ],
    answer: 1,
    fb_correct:
      "Multi-modal models like Gemini can understand and generate across multiple modalities — text, images, audio, video — enabling richer, more versatile AI applications.",
    fb_wrong:
      "Multi-modal refers to the ability to work with multiple types of data (text, images, audio, etc.) — not to cloud deployment strategies or organizational structure.",
  },
  {
    id: 15,
    category: "AI Governance",
    q: "What is a key risk of 'shadow AI' in an enterprise setting?",
    opts: [
      "AI models that are too slow",
      "Employees using unsanctioned AI tools, bypassing governance, security, and data controls",
      "AI that cannot be accessed via API",
      "Models that cost too much to fine-tune",
    ],
    answer: 1,
    fb_correct:
      "Shadow AI refers to employees using unapproved AI tools outside of IT/governance oversight — creating data security, compliance, and liability risks for the organization.",
    fb_wrong:
      "Shadow AI is when employees use unauthorized AI tools without governance oversight — this creates serious data, compliance, and security risks that AI leaders must address.",
  },
  {
    id: 16,
    category: "AI Governance",
    q: "What does 'AI governance' primarily encompass?",
    opts: [
      "Optimizing GPU cluster costs",
      "Policies, processes, and oversight mechanisms to ensure AI is used responsibly and accountably",
      "Writing model training code",
      "Selecting the right cloud provider",
    ],
    answer: 1,
    fb_correct:
      "AI governance covers the policies, frameworks, oversight structures, and accountability mechanisms that ensure AI is developed and deployed responsibly across an organization.",
    fb_wrong:
      "AI governance is about establishing the organizational policies and processes — not technical optimization — that ensure accountable, ethical AI use.",
  },
  {
    id: 17,
    category: "Responsible AI",
    q: "Which of the following is an example of 'AI for social good'?",
    opts: [
      "Using AI to increase ad revenue",
      "Using AI to predict and respond to natural disasters or improve healthcare access",
      "Training proprietary models for competitive advantage",
      "Automating executive reports",
    ],
    answer: 1,
    fb_correct:
      "AI for social good refers to applying AI to address societal challenges — like disaster response, disease detection, or education access — as a deliberate organizational or policy goal.",
    fb_wrong:
      "AI for social good specifically means applying AI capabilities to benefit society broadly — such as improving healthcare, disaster response, or environmental sustainability.",
  },
  {
    id: 18,
    category: "AI Governance",
    q: "What is 'data provenance' in the context of AI?",
    opts: [
      "The speed at which training data is collected",
      "Tracking the origin, history, and lineage of data used to train AI models",
      "Encrypting training datasets",
      "The format of data stored in the cloud",
    ],
    answer: 1,
    fb_correct:
      "Data provenance is the documentation of where data came from, how it was collected and processed, and how it flowed — critical for auditing AI systems and ensuring data quality and compliance.",
    fb_wrong:
      "Data provenance is about tracking the origin and history of training data — essential for AI audits, compliance, and understanding potential sources of bias.",
  },
  {
    id: 19,
    category: "AI Leadership",
    q: "What is the role of an AI Center of Excellence (CoE) in an enterprise?",
    opts: [
      "To replace all IT teams with AI",
      "To centralize AI expertise, governance, best practices, and strategy across the organization",
      "To exclusively manage AI vendor contracts",
      "To train all employees as data scientists",
    ],
    answer: 1,
    fb_correct:
      "An AI CoE acts as a central hub that drives AI strategy, establishes governance and standards, develops best practices, and supports teams across the organization in deploying AI effectively.",
    fb_wrong:
      "An AI Center of Excellence centralizes expertise and governance — it shapes strategy and standards organization-wide, rather than replacing teams or focusing only on contracts.",
  },
  {
    id: 20,
    category: "AI Leadership",
    q: "What does 'AI readiness' typically assess in an organization?",
    opts: [
      "Whether employees know how to code",
      "An organization's data quality, infrastructure, talent, culture, and governance to effectively adopt AI",
      "The speed of the organization's internet connection",
      "The number of AI patents owned",
    ],
    answer: 1,
    fb_correct:
      "AI readiness assessments evaluate an organization's maturity across data infrastructure, technical capabilities, talent, leadership alignment, and governance frameworks needed to scale AI successfully.",
    fb_wrong:
      "AI readiness goes far beyond coding skills — it assesses the full organizational capability including data, infrastructure, culture, governance, and strategic alignment.",
  },
  {
    id: 21,
    category: "LLM Concepts",
    q: "What is 'transfer learning' in machine learning?",
    opts: [
      "Moving a model from one cloud provider to another",
      "Applying knowledge gained from training on one task to accelerate learning on a different task",
      "Transferring model weights to a mobile device",
      "Copying training data between teams",
    ],
    answer: 1,
    fb_correct:
      "Transfer learning reuses representations learned by a model on a large dataset/task as a starting point for a new task — dramatically reducing the data and compute needed for the new task.",
    fb_wrong:
      "Transfer learning means taking what a model learned on one task and applying that knowledge to a new, related task — the foundation of how modern fine-tuning works.",
  },
  {
    id: 22,
    category: "Responsible AI",
    q: "What is the primary goal of 'AI red-teaming'?",
    opts: [
      "Training an AI model faster",
      "Proactively identifying vulnerabilities, failure modes, and misuse risks in an AI system",
      "Reducing AI infrastructure costs",
      "Comparing two AI models head-to-head",
    ],
    answer: 1,
    fb_correct:
      "AI red-teaming involves adversarially testing AI systems to find failure modes, safety vulnerabilities, and potential misuse scenarios before they occur in production.",
    fb_wrong:
      "Red-teaming in AI means proactively stress-testing your AI systems to find weaknesses and failure modes — a key responsible AI practice before deployment.",
  },
  {
    id: 23,
    category: "LLM Concepts",
    q: "What is a 'vector database' and why is it relevant to AI?",
    opts: [
      "A database that stores only numerical spreadsheet data",
      "A database optimized to store and search high-dimensional embeddings, enabling semantic search for AI applications",
      "A backup system for AI model weights",
      "A type of cloud storage for large files",
    ],
    answer: 1,
    fb_correct:
      "Vector databases store embeddings (numerical representations of data like text or images) and support similarity search — essential infrastructure for RAG, semantic search, and AI memory systems.",
    fb_wrong:
      "Vector databases store and query embedding representations of data — they're critical infrastructure for AI applications like semantic search and retrieval-augmented generation.",
  },
  {
    id: 24,
    category: "Responsible AI",
    q: "What does the concept of 'AI alignment' refer to?",
    opts: [
      "Aligning AI model training costs with the IT budget",
      "Ensuring AI systems behave in accordance with human values, intentions, and goals",
      "Making AI accessible across all device types",
      "Synchronizing AI deployments across regions",
    ],
    answer: 1,
    fb_correct:
      "AI alignment is the research and engineering challenge of ensuring AI systems reliably pursue goals and behaviors that match human values and intentions, especially as models become more capable.",
    fb_wrong:
      "AI alignment is about making sure AI systems pursue the goals and values we actually intend — a fundamental safety and research challenge as AI systems grow more powerful.",
  },
  {
    id: 25,
    category: "LLM Concepts",
    q: "What is the difference between 'narrow AI' and 'general AI'?",
    opts: [
      "Narrow AI is cheaper; general AI is more expensive",
      "Narrow AI excels at specific tasks; general AI can perform any intellectual task a human can",
      "Narrow AI uses less data; general AI uses more",
      "Narrow AI is cloud-based; general AI runs on-premises",
    ],
    answer: 1,
    fb_correct:
      "Narrow AI (ANI) is specialized for specific tasks like image recognition or translation. Artificial General Intelligence (AGI) would match or exceed human cognitive ability across all domains — still theoretical.",
    fb_wrong:
      "Narrow AI handles specific, well-defined tasks; general AI would be able to reason and learn across any domain like a human — AGI remains a theoretical, not yet realized, goal.",
  },
];

export const CATEGORIES = [...new Set(QUESTIONS.map((q) => q.category))];
