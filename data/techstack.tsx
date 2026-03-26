import React from "react";

export interface TechItem {
  name: string;
  desc: string;
  icon: React.ReactNode;
}

export const techStack: TechItem[] = [
  {
    name: "N8N",
    desc: "Visual workflow engine powering all automation pipelines and multi-agent orchestration.",
    icon: (
      /* N8N brand icon — node graph mark only (no text) */
      <svg viewBox="0 0 152 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M136 32C128.545 32 122.28 26.9009 120.504 20H102.166C98.2548 20 94.9173 22.8273 94.2744 26.6848L93.6168 30.6304C92.9924 34.3765 91.0974 37.6369 88.4175 40C91.0974 42.3631 92.9924 45.6235 93.6168 49.3696L94.2744 53.3152C94.9173 57.1727 98.2548 60 102.166 60H104.504C106.28 53.0991 112.545 48 120 48C128.837 48 136 55.1634 136 64C136 72.8366 128.837 80 120 80C112.545 80 106.28 74.9009 104.504 68H102.166C94.3441 68 87.6691 62.3454 86.3832 54.6304L85.7256 50.6848C85.0827 46.8273 81.7452 44 77.8345 44H71.4959C69.7198 50.9009 63.4554 56 56 56C48.5446 56 42.2802 50.9009 40.5041 44H31.4959C29.7198 50.9009 23.4554 56 16 56C7.16344 56 0 48.8366 0 40C0 31.1634 7.16344 24 16 24C23.4554 24 29.7198 29.0991 31.4959 36H40.5041C42.2802 29.0991 48.5446 24 56 24C63.4554 24 69.7198 29.0991 71.4959 36H77.8345C81.7452 36 85.0827 33.1727 85.7256 29.3152L86.3832 25.3696C87.6691 17.6546 94.3441 12 102.166 12L120.504 12C122.28 5.09909 128.545 0 136 0C144.837 0 152 7.16344 152 16C152 24.8366 144.837 32 136 32ZM136 24C140.418 24 144 20.4183 144 16C144 11.5817 140.418 8 136 8C131.582 8 128 11.5817 128 16C128 20.4183 131.582 24 136 24ZM16 48C20.4183 48 24 44.4183 24 40C24 35.5817 20.4183 32 16 32C11.5817 32 8 35.5817 8 40C8 44.4183 11.5817 48 16 48ZM64 40C64 44.4183 60.4183 48 56 48C51.5817 48 48 44.4183 48 40C48 35.5817 51.5817 32 56 32C60.4183 32 64 35.5817 64 40ZM128 64C128 68.4183 124.418 72 120 72C115.582 72 112 68.4183 112 64C112 59.5817 115.582 56 120 56C124.418 56 128 59.5817 128 64Z" fill="#EA4B71"/>
      </svg>
    ),
  },
  {
    name: "Twilio",
    desc: "Programmable voice & SMS layer for outbound calling agents and inbound IVR flows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#F22F46" />
        <circle cx="8.5" cy="8.5" r="2.4" fill="white" />
        <circle cx="15.5" cy="8.5" r="2.4" fill="white" />
        <circle cx="8.5" cy="15.5" r="2.4" fill="white" />
        <circle cx="15.5" cy="15.5" r="2.4" fill="white" />
      </svg>
    ),
  },
  {
    name: "MCPs",
    desc: "Model Context Protocol servers that connect AI agents to external tools, APIs, and data sources.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="4"  cy="5"  r="2" />
        <circle cx="20" cy="5"  r="2" />
        <circle cx="4"  cy="19" r="2" />
        <circle cx="20" cy="19" r="2" />
        <line x1="6"  y1="6.5"  x2="10" y2="10.5" />
        <line x1="18" y1="6.5"  x2="14" y2="10.5" />
        <line x1="6"  y1="17.5" x2="10" y2="13.5" />
        <line x1="18" y1="17.5" x2="14" y2="13.5" />
      </svg>
    ),
  },
  {
    name: "Flowise",
    desc: "Low-code RAG and LLM agent builder for deploying production chatbots fast.",
    icon: <img src="/logos/flowise-logo.webp" alt="Flowise" style={{ width: 22, height: 22, objectFit: "contain" }} />,
  },
  {
    name: "APIs",
    desc: "REST and webhook integrations connecting every tool in the stack — the glue of every pipeline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16" />
        <path d="M9 7l-5 5 5 5" />
        <path d="M15 7l5 5-5 5" />
      </svg>
    ),
  },
  {
    name: "Lemlist",
    desc: "Multi-channel cold outreach — email sequences and LinkedIn automation in one platform.",
    icon: <img src="/logos/lemlist.webp" alt="Lemlist" style={{ width: 22, height: 22, objectFit: "contain" }} />,
  },
  {
    name: "Meta Ads",
    desc: "Lead gen campaigns on Facebook & Instagram — audience targeting, A/B testing, CPL optimisation.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0081FB" d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    desc: "Scripting for bespoke API integrations, scrapers, and automation logic beyond what no-code tools handle.",
    icon: <img src="/tech/python.svg" alt="Python" style={{ width: 22, height: 22 }} />,
  },
];
