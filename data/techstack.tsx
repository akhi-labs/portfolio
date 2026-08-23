import React from "react";

export interface TechItem {
  name: string;
  category: string;
  desc: string;
  icon: React.ReactNode;
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const techStack: TechItem[] = [
  {
    name: "N8N",
    category: "Automation",
    desc: "Visual workflow engine for multi-step business automation, webhooks, and agent orchestration.",
    icon: (
      <svg {...iconProps}>
        <circle cx="5" cy="12" r="2" />
        <circle cx="12" cy="7" r="2" />
        <circle cx="19" cy="12" r="2" />
        <circle cx="12" cy="17" r="2" />
        <path d="M7 11 10.2 8.3" />
        <path d="M13.8 8.3 17 11" />
        <path d="M17 13 13.8 15.7" />
        <path d="M10.2 15.7 7 13" />
      </svg>
    ),
  },
  {
    name: "Python",
    category: "Engineering",
    desc: "Scripting layer for custom integrations, scrapers, data processing, and automation logic.",
    icon: (
      <svg {...iconProps}>
        <path d="M8 12H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h6a2 2 0 0 1 2 2v4H8a2 2 0 0 0 0 4h8" />
        <path d="M16 12h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-6a2 2 0 0 1-2-2v-4h6a2 2 0 0 0 0-4H8" />
        <path d="M8 6h.01" />
        <path d="M16 18h.01" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Database",
    desc: "Relational database layer for structured storage, SQL transformations, and analytics-ready tables.",
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </svg>
    ),
  },
  {
    name: "Airflow",
    category: "Orchestration",
    desc: "Scheduler and dependency manager for repeatable batch jobs and production data pipelines.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v6" />
        <path d="M12 15v6" />
        <path d="M3 12h6" />
        <path d="M15 12h6" />
        <path d="m5.6 5.6 4.2 4.2" />
        <path d="m14.2 14.2 4.2 4.2" />
        <path d="m18.4 5.6-4.2 4.2" />
        <path d="m9.8 14.2-4.2 4.2" />
      </svg>
    ),
  },
  {
    name: "dbt",
    category: "Transform",
    desc: "Analytics engineering workflow for modular SQL models, lineage, documentation, and tests.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 7h7v7H4z" />
        <path d="M13 10h7v7h-7z" />
        <path d="M8 14v3h5" />
        <path d="M11 10h2" />
      </svg>
    ),
  },
  {
    name: "Spark",
    category: "Processing",
    desc: "Distributed processing model for larger datasets, batch transforms, and scalable data jobs.",
    icon: (
      <svg {...iconProps}>
        <path d="m13 2-8 12h6l-1 8 9-13h-6z" />
      </svg>
    ),
  },
  {
    name: "OpenAI API",
    category: "AI Runtime",
    desc: "LLM runtime for extraction, classification, generation, decisioning, and tool-assisted workflows.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3a4 4 0 0 1 3.6 2.3 4 4 0 0 1 4.1 6 4 4 0 0 1-1.2 6.1 4 4 0 0 1-6.5 2.3 4 4 0 0 1-6.5-2.3 4 4 0 0 1-1.2-6.1 4 4 0 0 1 4.1-6A4 4 0 0 1 12 3Z" />
        <path d="M8.5 9.2 12 7.2l3.5 2" />
        <path d="M8.5 14.8 12 16.8l3.5-2" />
        <path d="M12 7.2v9.6" />
      </svg>
    ),
  },
  {
    name: "Pinecone",
    category: "Vector DB",
    desc: "Vector storage for semantic search, retrieval pipelines, and RAG knowledge bases.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <path d="m5.6 5.6 2.1 2.1" />
        <path d="m16.3 16.3 2.1 2.1" />
        <path d="m18.4 5.6-2.1 2.1" />
        <path d="m7.7 16.3-2.1 2.1" />
      </svg>
    ),
  },
  {
    name: "Flowise",
    category: "AI Builder",
    desc: "Low-code RAG and LLM agent builder for deploying production chatbots quickly.",
    icon: (
      <svg {...iconProps}>
        <path d="M5 5h6v6H5z" />
        <path d="M13 13h6v6h-6z" />
        <path d="M11 8h3a2 2 0 0 1 2 2v3" />
        <path d="M8 11v3a2 2 0 0 0 2 2h3" />
      </svg>
    ),
  },
  {
    name: "MCPs",
    category: "Agent Tools",
    desc: "Protocol layer that connects AI agents to external tools, APIs, and data sources.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="4" cy="5" r="2" />
        <circle cx="20" cy="5" r="2" />
        <circle cx="4" cy="19" r="2" />
        <circle cx="20" cy="19" r="2" />
        <path d="M6 6.5 10 10.5" />
        <path d="M18 6.5 14 10.5" />
        <path d="M6 17.5 10 13.5" />
        <path d="M18 17.5 14 13.5" />
      </svg>
    ),
  },
  {
    name: "Twilio",
    category: "Voice & SMS",
    desc: "Programmable voice and SMS layer for outbound calling agents and inbound IVR flows.",
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="9" cy="9" r="1.5" />
        <circle cx="15" cy="9" r="1.5" />
        <circle cx="9" cy="15" r="1.5" />
        <circle cx="15" cy="15" r="1.5" />
      </svg>
    ),
  },
  {
    name: "Lemlist",
    category: "Outreach",
    desc: "Multi-channel cold outreach platform for email sequences and LinkedIn automation.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 7h16v10H4z" />
        <path d="m4 8 8 6 8-6" />
        <path d="M8 19h8" />
      </svg>
    ),
  },
  {
    name: "Meta Ads",
    category: "Acquisition",
    desc: "Lead generation campaigns across Facebook and Instagram with targeting and A/B testing.",
    icon: (
      <svg {...iconProps}>
        <path d="M4 16c0-4.5 2-8 4.5-8 1.7 0 2.8 1.3 3.5 2.4C12.7 9.3 13.8 8 15.5 8 18 8 20 11.5 20 16c0 1.7-.8 3-2.2 3-1.2 0-2.1-.8-3.2-2.7L12 12l-2.6 4.3C8.3 18.2 7.4 19 6.2 19 4.8 19 4 17.7 4 16Z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    category: "Backend",
    desc: "Backend platform for Postgres, auth, storage, and fast product data layers.",
    icon: (
      <svg {...iconProps}>
        <path d="M13 3 5 14h6l-1 7 9-12h-6z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    category: "Deployment",
    desc: "Production deployment platform for fast Next.js releases, previews, and frontend hosting.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="m12 4 9 16H3z" />
      </svg>
    ),
  },
];
