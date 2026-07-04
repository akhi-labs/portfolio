export interface Client {
  name: string;
  url?: string; // undefined = static chip (no link)
}

export interface Project {
  slug: string;
  title: string;
  useCase: string;
  /** Single string or multi-paragraph separated by \n\n */
  overview: string;
  tech: string[];
  deployedAt: Client[];
  liveUrl?: string;
  image?: string;
  prevSlug?: string;
  nextSlug?: string;
}

export const projects: Project[] = [
  {
    slug: "bid-pilot",
    title: "Bid-Pilot",
    useCase: "AI Bid & Proposal Engine — RFP Analysis, Compliance & Win Scoring",
    tech: ["PYTHON", "FASTAPI", "REACT", "GEMINI", "OPENAI", "SCIKIT-LEARN", "SQLITE"],
    overview:
      "Bid and proposal managers spend 60–80% of their time reading tender documents, extracting compliance requirements, and drafting responses — and missing a single mandatory clause can disqualify the entire bid. Bid-Pilot automates that whole workflow. Upload an RFP, RFQ, or Tender (PDF or DOCX — scanned documents are handled through a vision fallback) into its own isolated workspace, and the engine extracts requirements, deadlines, budgets, and evaluation criteria using a hybrid pipeline: offline NER that always produces a result, layered with LLM extraction (Gemini with OpenAI fallback) when API keys are available.\n\nEvery extracted requirement is matched against a company capability library — past projects, certifications, and client history — using TF-IDF similarity blended with structured scoring, producing a pass/partial/fail compliance checklist where missing mandatory certifications are flagged as showstoppers the bid manager can review and override. A win-probability engine combines six weighted heuristics with a machine-learning model trained on 120 historical bids to deliver an explainable GO / NO-GO / CONDITIONAL-GO verdict. Finally, the system drafts a complete 12-section proposal — cover letter through annexures — with per-section regeneration and review markers, then exports a versioned DOCX including an auto-built compliance matrix. The full pipeline runs end-to-end in about a minute, and works entirely offline when no API keys are configured.",
    deployedAt: [],
    image: "/projects/Bid-Pilot.png",
    nextSlug: "funnelgpt",
  },
  {
    slug: "funnelgpt",
    title: "FunnelGPT",
    useCase: "AI Marketing Brain — Research → Personas → Messaging → Publish",
    tech: ["REACT", "TYPESCRIPT", "NODE.JS", "MONGODB", "OPENAI", "RAG", "DOCKER"],
    overview:
      "FunnelGPT is a marketing-automation SaaS built on top of ChatGPT that gives every company its own AI marketing department. Each company gets a dedicated workspace with a Company Profile — the \"brand brain\" — holding business info, brand voice, colors, and target market. Upload a brand guide or knowledge-base document and the platform auto-fills the profile as a reviewable draft. Every AI step downstream reads this brain, so all output stays on-brand automatically.\n\nThe core is a gated content pipeline: Market Research → Audience → Messaging → Calendar → Content → Publish. Each step runs a schema-enforced, structured AI call — with separate B2B and B2C variants — and returns an editable draft the user reviews, saves, and locks before the next step unlocks; re-running an upstream step flags everything downstream as stale. Market Research produces a 16-section, web-grounded brief (competitors, positioning gaps, ranked channels, campaign test plan) exportable to DOCX and PDF. Audience builds ranked ICPs and rich personas with buying committees and funnel-stage tagging. Messaging assigns each persona one of ten proven frameworks — StoryBrand, AIDA, PAS, Hormozi Value Equation and more — with reasoning for why it fits. Prompts and models are editable per step per workspace, social accounts connect via OAuth with tokens encrypted at rest, and approved content publishes straight to LinkedIn. The whole stack ships as a Docker Compose deployment with MongoDB and a RAG layer.",
    deployedAt: [],
    image: "/projects/FunnelGPT.png",
    prevSlug: "bid-pilot",
    nextSlug: "cold-calling-agents",
  },
  {
    slug: "cold-calling-agents",
    title: "Multi Calling Agent",
    useCase: "Outbound Sales Automation & Inbound User Support",
    tech: ["N8N", "TWILIO", "ELEVENLABS", "CALCOM", "WEB SEARCH API", "CRM"],
    overview:
      "A dual-mode AI calling system built to fully automate call center operations. The Outbound Agent works through bulk prospect lists — intelligently scheduling calls based on each prospect's local timezone, pitching the product with targeted pain-point messaging, handling live queries via real-time web search, and booking qualified meetings into CalCom while logging every interaction to the CRM. The Inbound Agent handles retargeting of existing users — engaging them in deep product conversations, capturing issues and feedback, then generating structured call summaries delivered directly to the founder or dev team. Both agents run autonomously, replacing the need for manual call center agents entirely.",
    deployedAt: [
      { name: "MySentry.AI", url: "https://mysentry.ai" },
      { name: "DentaSmart.AI", url: "https://dentasmart.ai" },
    ],
    image: "/projects/multi-calling-agent.png",
    prevSlug: "funnelgpt",
    nextSlug: "voice-generative-ai",
  },
  {
    slug: "voice-generative-ai",
    title: "Versona AI",
    useCase: "Premium Urdu Voice Platform — TTS, STS & Voice Cloning",
    tech: ["FASTAPI", "REACT", "MONGODB", "ELEVENLABS", "REDUX TOOLKIT", "TAILWIND CSS", "VERCEL", "RENDER"],
    overview:
      "A full-stack voice generation platform built specifically for high-quality Urdu speech synthesis. Users can convert Urdu text to natural speech (TTS), transform one voice into another (Audio-to-Audio / STS), or clone premium female voices for custom outputs. The platform includes user authentication, a credit-based usage system, and full generation history tracking. The backend is powered by FastAPI and MongoDB Atlas with ElevenLabs handling all voice synthesis — deployed on Render with a React + Redux frontend on Vercel.",
    deployedAt: [],
    liveUrl: "https://versonaai-gules.vercel.app",
    image: "/projects/versona-ai.png",
    prevSlug: "cold-calling-agents",
    nextSlug: "chatbots-rag",
  },
  {
    slug: "chatbots-rag",
    title: "Chatbot (RAG)",
    useCase: "Multi-LLM AI Agent — Semantic Search, Reranking & Web Fallback",
    tech: ["N8N", "OPENAI", "GOOGLE GEMINI", "PINECONE", "COHERE", "SERPAPI"],
    overview:
      "A production-grade RAG chatbot built on N8N, triggered by HTTP webhook. The core AI Agent supports Google Gemini and OpenAI as interchangeable LLM backends with automatic fallback between them. Conversation continuity is maintained through Pinecone's vector memory. Each query is embedded via OpenAI Embeddings, semantically searched against a Pinecone Vector Store, and re-ranked for precision using a Cohere Reranker. When live data is needed, SerpAPI fetches real-time web results to supplement the retrieved context. Responses are returned through the webhook, and a dedicated subworkflow automatically computes and logs the token cost per interaction.",
    deployedAt: [{ name: "MySentry.AI", url: "https://mysentry.ai" }],
    image: "/projects/chatbot-rag.png",
    prevSlug: "voice-generative-ai",
    nextSlug: "content-creation",
  },
  {
    slug: "content-creation",
    title: "Content Creation System",
    useCase: "Brief → Avatar Video, Animation or Image — Fully Automated",
    tech: ["N8N", "HEYGEN", "VEO 3", "SORA", "OPENAI", "DIFFUSION MODELS", "CUSTOM"],
    overview:
      "A multi-path content automation pipeline orchestrated by N8N. The workflow is triggered by an automated Content Brief or Content Calendar entry. Before generating anything, the system scans competitor content — posts, YouTube videos — and repurposes the angles in your own brand voice. It then routes based on post type: Avatar content goes to Heygen where pre-built custom avatars produce talking-head videos with lifelike expression and voice. Animation posts are routed to Veo3 or SORA via API for AI-generated motion video. Image posts are handled by Diffusion Models — DALL-E via OpenAI or NanoBnB — for high-quality visuals. All outputs are platform-formatted and queued for publishing automatically.",
    deployedAt: [
      { name: "MySentry.AI", url: "https://mysentry.ai" },
      { name: "DentaSmart.AI", url: "https://dentasmart.ai" },
      { name: "StressGuru.AI", url: "https://stressguru.ai" },
    ],
    image: "/projects/content-creation.png",
    prevSlug: "chatbots-rag",
    nextSlug: "social-ai-agent",
  },
  {
    slug: "social-ai-agent",
    title: "Social AI Agent",
    useCase: "ICP Research → Content Calendar → Auto-Publish Across Platforms",
    tech: ["N8N", "OPENAI", "CUSTOM", "AI"],
    overview:
      "A full-cycle social media automation agent that starts from ICP (Ideal Customer Profile) research and ends with scheduled posts live across platforms. The agent profiles the target audience using web data and competitor analysis, generates a monthly content calendar aligned to brand voice and trending topics, creates post copy with matching AI-generated images, and schedules publication to Instagram, LinkedIn, and Twitter automatically. All content goes through a brand-voice consistency check before it queues, ensuring every post sounds human and on-brand — not generic.",
    deployedAt: [],
    image: "/projects/social-ai-agent.png",
    prevSlug: "content-creation",
    nextSlug: "seo-blogs",
  },
  {
    slug: "seo-blogs",
    title: "SEO Blogs",
    useCase: "Automated Topical Authority — Pillar + Cluster Content Pipeline",
    tech: ["N8N", "OPENAI", "WORDPRESS", "SEMRUSH", "CUSTOM"],
    overview:
      "Ranking a blog is not just about writing articles — it is about building topical authority. Google rewards websites that cover a subject thoroughly across multiple interlinked pieces of content. This means having a pillar page supported by multiple cluster articles that all link back to each other. Doing this manually at scale — researching, writing, optimizing, and publishing — is a full-time job.\n\nThis pipeline automates the entire process through N8N. Starting from a seed keyword or niche, it maps out a full topic cluster plan — pillar post plus supporting articles. Each post is AI-drafted with proper heading hierarchy (H1, H2, H3), a compelling intro, body sections, and a conclusion. The SEO layer then injects the meta title, meta description, target keywords, internal links between cluster posts, and image alt text. Once the article passes an SEO quality check, it is pushed directly to the WordPress CMS via API — with the correct category, tags, URL slug, featured image, and publish schedule all set automatically.",
    deployedAt: [
      { name: "MySentry.AI", url: "https://mysentry.ai" },
    ],
    image: "/projects/seo-blogs.png",
    prevSlug: "social-ai-agent",
    nextSlug: "seo-semrushagent",
  },
  {
    slug: "seo-semrushagent",
    title: "SEO SemRush Agent",
    useCase: "Semantic SEO Automation — Strategy Brief from SemRush Data",
    tech: ["PYTHON", "OPENAI", "SEMRUSH API", "CUSTOM"],
    overview:
      "Modern SEO is not about sprinkling keywords into a page — it is about topical authority. Google ranks content based on how comprehensively it covers a subject, which requires primary keywords, LSI (Latent Semantic Indexing) keywords, related entities, and full intent coverage across a topic cluster. Doing this manually through SemRush is slow, fragmented, and strategy-dependent.\n\nThis custom-coded agent automates that entire research layer. It connects to the SemRush API, pulls primary keywords for a given domain or seed topic, then maps all semantically related and LSI terms that Google associates with that concept. These terms are grouped by intent and topic proximity into semantic clusters — a blueprint for what content to create, what subtopics to cover, what terms must appear in the copy, and where competitors are outranking you and why. The final output is a structured semantic keyword map ready to drive content strategy directly.",
    deployedAt: [],
    image: "/projects/seo-semrush.png",
    prevSlug: "seo-blogs",
    nextSlug: "marketing-news",
  },
  {
    slug: "marketing-news",
    title: "Marketing News",
    useCase: "Daily AI-Curated Digest from 20+ Sources",
    tech: ["N8N", "RSS FEEDS", "AI", "SLACK", "EMAIL"],
    overview:
      "A daily marketing intelligence feed built on N8N. The workflow pulls from 20+ curated RSS feeds across major marketing publications, AI blogs, and industry news sources. Each article is scored for relevance by an AI layer and filtered against a defined topic set. Top stories are summarised into a digest format — headline, one-line summary, and source link — then delivered to email or Slack every morning before 9am. The system saves hours of manual reading each week and keeps the whole team informed on what's moving in the market.",
    deployedAt: [
      { name: "MySentry.AI", url: "https://mysentry.ai" },
      { name: "DentaSmart.AI", url: "https://dentasmart.ai" },
      { name: "StressGuru.AI", url: "https://stressguru.ai" },
    ],
    image: "/projects/marketing-news.png",
    prevSlug: "seo-semrushagent",
    nextSlug: "email-automation",
  },
  {
    slug: "email-automation",
    title: "Email Automation",
    useCase: "Cold Outreach at Scale — Sequences, Personalisation & CRM Routing",
    tech: ["LEMLIST", "N8N", "CUSTOM"],
    overview:
      "A cold email outreach system built to run at scale without sacrificing deliverability or personalisation. Powered by Lemlist for sequence management and N8N for lead enrichment and CRM routing. Prospect lists are imported, cleaned, and enriched with company data and LinkedIn signals. Each contact enters a multi-step email sequence with dynamic personalisation tokens — first name, company name, pain-point angle. Domain rotation, inbox warming, and sending-time optimisation keep deliverability high. Replies and opens are tracked; qualified leads are automatically routed to the CRM and flagged for follow-up.",
    deployedAt: [{ name: "DentaSmart.AI", url: "https://dentasmart.ai" }],
    image: "/projects/email-automation.png",
    prevSlug: "marketing-news",
    nextSlug: "linkedln-automation",
  },
  {
    slug: "linkedln-automation",
    title: "LinkedIn Automation",
    useCase: "B2B Lead Gen — ICP Targeting, Connection Sequences & CRM Routing",
    tech: ["LEMLIST", "LINKEDIN", "N8N", "CUSTOM"],
    overview:
      "A B2B lead generation system that automates the full LinkedIn outreach cycle. ICP profiles are defined by title, industry, company size, and geography. Lemlist handles connection request sequences with personalised note templates. Accepted connections enter a follow-up message series timed to avoid the spam-trigger pattern. Positive responses are automatically flagged and routed to the CRM as warm leads. N8N handles the data layer — enriching profiles, tracking response rates, and syncing contact data across systems. Built for sustainable, compliant outreach volume without manual account management.",
    deployedAt: [{ name: "MySentry.AI", url: "https://mysentry.ai" }],
    image: "/projects/linkedin-automation.png",
    prevSlug: "email-automation",
    nextSlug: "campaign-pilot",
  },
  {
    slug: "campaign-pilot",
    title: "CampaignPilot",
    useCase: "AI Email Campaign Platform — Design, Personalize & Send at Scale",
    tech: ["NEXT.JS", "TYPESCRIPT", "POSTGRESQL", "SUPABASE", "OPENAI", "INNGEST", "RESEND"],
    overview:
      "A self-hostable AI email-campaign platform built as an ownership-first alternative to Mailchimp — pay cents per thousand sends instead of per-contact subscription tiers, while keeping your data, storage, and code. A five-step wizard takes a campaign from idea to inbox: schedule it, brief an AI assistant in chat (upload a logo, hero image, or even a screenshot of an email you like and the AI classifies each image and clones the design), and get back a responsive, email-client-safe HTML template in one of five style presets. A dual editor — visual click-to-edit and raw HTML code, kept in sync — gives full control before anything sends, and templates can be saved for reuse.\n\nRecipients come from a CSV or Excel upload that is parsed, deduplicated, and validated client-side, with custom columns preserved as personalization tokens for per-recipient interpolation. Sending runs as a durable background job: campaigns wait until their scheduled time, CSS is inlined for email clients, and emails go out in throttled batches with idempotent progress tracking, so retries never double-send. Supports Gmail SMTP, Resend, and AWS SES as sending providers with credentials encrypted at rest, configurable inter-email delays to protect deliverability, and up to 10,000 recipients per campaign — with live sent/failed tracking on the dashboard.",
    deployedAt: [
      { name: "MySentry.AI", url: "https://mysentry.ai" },
      { name: "DentaSmart.AI", url: "https://dentasmart.ai" },
      { name: "StressGuru.AI", url: "https://stressguru.ai" },
    ],
    image: "/projects/CampaignPilot.png",
    prevSlug: "linkedln-automation",
    nextSlug: "website-analyst",
  },
  {
    slug: "website-analyst",
    title: "Website Analyst",
    useCase: "Automated UX Intelligence — Heatmaps, Sessions & AI Reports",
    tech: ["CLARITY", "CUSTOM", "AI", "N8N"],
    overview:
      "An automated website intelligence system that transforms raw user behaviour data into actionable UX insights. Microsoft Clarity tracks heatmaps, session recordings, and rage-click events. A custom N8N workflow pulls this data on a weekly schedule, runs it through an AI analysis layer, and generates a structured report with prioritised recommendations — friction points, drop-off pages, and conversion optimisation suggestions. Reports are delivered by email to the product team every Monday. Eliminates the need to manually review recordings or interpret analytics dashboards.",
    deployedAt: [{ name: "MySentry.AI", url: "https://mysentry.ai" }],
    image: "/projects/website-analyst.png",
    prevSlug: "campaign-pilot",
    nextSlug: "paid-marketing",
  },
  {
    slug: "paid-marketing",
    title: "Paid Marketing",
    useCase: "Meta Ads for Lead Generation — A/B Testing & CPL Optimisation",
    tech: ["META ADS", "CAMPAIGNS", "ANALYTICS"],
    overview:
      "A Meta Ads lead generation campaign managed for a Japanese language institute. The campaign strategy was built around audience research — identifying prospective students by age, interest signals, and geographic proximity to the school. Multiple ad sets were A/B tested across creatives, copy angles, and audience segments. CPL (cost per lead) was tracked weekly and bidding strategies adjusted in real time to maintain enrollment enquiry volume at target cost. Delivered consistent lead flow throughout the campaign period with measurable ROAS improvement across successive iterations.",
    deployedAt: [{ name: "Kaigaiiml Modern Languages" }],
    image: "/projects/paid-marketing.svg",
    prevSlug: "website-analyst",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
