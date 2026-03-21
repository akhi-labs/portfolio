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
    title: "Paid Marketing",
    description:
      "Performance-driven ad campaigns across Meta, Google, and LinkedIn — from audience research and creative strategy to A/B testing and CPL optimization. Built to generate qualified leads at scale with measurable ROAS.",
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
    title: "Agentic UI/UX & Coding",
    description:
      "End-to-end web apps, dashboards, and MVPs designed and built using AI-native workflows — from wireframe to deployed product. Clean UI/UX paired with agentic coding pipelines that ship production-grade Next.js frontends, landing pages, and custom tools at speed.",
    tags: ["Next.js", "UI/UX", "Agentic Dev", "Deployment"],
  },
];
