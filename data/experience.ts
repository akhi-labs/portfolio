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
    company: "Zigron — US Market",
    description:
      "Marketing automation, AI chatbots (RAG), voice agents & cold email systems.",
  },
  {
    date: "2023 — 2024",
    role: "Personal Branding & Market Researcher",
    company: "Alibaba — China (Contract)",
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
    skills: ["HTML", "CSS", "JSON", "APIs", "Python Scripts", "Curls"],
  },
  {
    label: "AI TOOLS & FRAMEWORKS",
    skills: ["CrewAI", "LangChain", "MCPs", "Vapi", "Haygen", "Veo3 API", "Ideogram", "Make.com"],
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
