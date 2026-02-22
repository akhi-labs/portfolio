export interface Service {
  num: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    num: "01",
    title: "Automation & Agentic Workflows",
    description:
      "End-to-end workflow automation, AI agents, and systems that scale operations without scaling teams. From lead capture to content pipelines — every repetitive process gets replaced with a reliable, scalable system.",
    tags: ["N8N", "Agents", "AI APIs"],
  },
  {
    num: "02",
    title: "SEO Topical Clustering",
    description:
      "Organic traffic growth through topical authority and automated content systems. Research, generate, optimize, and publish SEO content — combining strategy with automation to keep your site ranking.",
    tags: ["Topical Map", "NLP", "AI Content"],
  },
  {
    num: "03",
    title: "Meta Ads",
    description:
      "Lead generation campaigns on Meta — strategy, creative, targeting, and optimization. Manual campaign management as a freelance service, powered by data-driven insights to maximize your ROAS.",
    tags: ["Meta Business", "Analytics", "Lead Gen"],
  },
  {
    num: "04",
    title: "Python Scripting",
    description:
      "Custom-coded Python solutions for problems that no off-the-shelf tool solves. From FastAPI backends and Streamlit apps to data pipelines, web scrapers, bulk processors, and standalone CLI tools — built to spec, deployed, and production-ready.",
    tags: ["Python", "FastAPI", "Streamlit", "Custom Scripts"],
  },
  {
    num: "05",
    title: "Vibe Coding",
    description:
      "Full web apps and MVPs built fast using AI-assisted development — from idea to deployed product. Next.js frontends, landing pages, dashboards, and custom tools shipped at speed without sacrificing quality.",
    tags: ["Next.js", "AI-Assisted", "MVP", "Deployment"],
  },
];
