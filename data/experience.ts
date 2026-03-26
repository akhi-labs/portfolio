export interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillCategory {
  label: string;
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
    label: "TECHNICAL",
    skills: ["HTML", "CSS", "JavaScript", "Python", "SQL", "REST APIs", "Git", "Web Scraping", "Webhooks"],
  },
  {
    label: "AI TOOLS & FRAMEWORKS",
    skills: ["CrewAI", "LangChain", "MCPs", "Vapi", "HeyGen", "OpenAI API", "ElevenLabs", "N8N", "Pinecone"],
  },
  {
    label: "BUSINESS & MARKETING",
    skills: ["Cold Outreach", "Funnel Creation", "Semantic SEO", "Business Analysis"],
  },
  {
    label: "DEPLOYMENT & PLATFORMS",
    skills: ["Vercel", "Bolt", "Render", "Antigravity", "Zapier", "Supabase"],
  },
];
