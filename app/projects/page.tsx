import Link from "next/link";
import { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "All automation, AI, and marketing engineering projects by Muhammad Ahmed — from voice AI platforms and RAG chatbots to content pipelines and outreach systems.",
};

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: 60 }}>
      <div className="ap-page">
        <div className="ap-header reveal">
          <h1>All Projects</h1>
        </div>

        <div className="ap-grid stagger">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card">
              <div className="project-card-img">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.image} alt={project.title} className="proj-img" />
                ) : (
                  <div className="card-ph-inner">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
                      <rect x={3} y={3} width={18} height={18} rx={2} />
                      <path d="M3 9l4-4 4 4 4-4 4 4" />
                    </svg>
                    <span>PROJECT PREVIEW</span>
                  </div>
                )}
              </div>
              <div className="project-card-content">
                <span className="tech">{project.tech.slice(0, 3).join(" · ")}</span>
                <h3>{project.title}</h3>
                <p className="desc">{project.useCase}</p>
                <span className="btn">View Project →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
