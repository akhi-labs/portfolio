export interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillCategory {
  label: string;
  description: string;
  skills: string[];
}

export const experience: ExperienceEntry[] = [
  {
    date: "2025 — Present",
    role: "Automation Engineer",
    company: "Zigron — US",
    description:
      "AI agents, RAG chatbots, voice systems, cold email automation, and full-stack web apps — built end-to-end with agentic UI/UX workflows.",
  },
  {
    date: "2023 — 2024",
    role: "Personal Branding & Market Researcher",
    company: "Alibaba — China",
    description:
      "Live broadcasting, international outreach, cross-functional teams & growth strategies.",
  },
  {
    date: "2021 — 2022",
    role: "Community Manager",
    company: "The Market Wizards — Pakistan",
    description:
      "Coached forex students, managed NFT projects and large customer accounts.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: "AUTOMATION ARCHITECTURE",
    description: "Turning messy business operations into reliable workflows with clean handoffs, fallbacks, and monitoring paths.",
    skills: ["Workflow Design", "Process Mapping", "API Integration", "Webhook Logic", "Exception Handling", "Human-in-the-loop Flows"],
  },
  {
    label: "DATA ENGINEERING",
    description: "Designing structured data movement from source systems into usable, trustworthy analytical layers.",
    skills: ["ETL/ELT Design", "Data Pipeline Architecture", "Data Lakes", "Data Warehousing", "Data Modeling", "SQL Transformations", "Data Quality Checks", "Batch Processing"],
  },
  {
    label: "AI SYSTEMS",
    description: "Building agentic systems that can retrieve knowledge, call tools, make decisions, and complete multi-step work.",
    skills: ["Agent Design", "RAG Workflows", "Prompt Systems", "Tool Calling", "Knowledge Retrieval", "Evaluation Loops", "Voice AI Flows"],
  },
  {
    label: "GROWTH SYSTEMS",
    description: "Connecting automation to real business outcomes: leads, content velocity, routing, reporting, and campaign ops.",
    skills: ["Cold Outreach Strategy", "Funnel Automation", "Semantic SEO Systems", "Lead Routing", "Campaign Operations", "Reporting Dashboards"],
  },
];
