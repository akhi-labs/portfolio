import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import { flowcharts } from "@/data/flowcharts";
import ProjectFlowchart from "@/components/ProjectFlowchart";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // paid-marketing has its own static page at app/projects/paid-marketing/page.tsx
  return projects
    .filter((p) => p.slug !== "paid-marketing")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview.split("\n\n")[0].slice(0, 160),
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const prevProject = project.prevSlug ? getProjectBySlug(project.prevSlug) : null;
  const nextProject = project.nextSlug ? getProjectBySlug(project.nextSlug) : null;
  const sections = flowcharts[slug] ?? [];

  // Split multi-paragraph overview on \n\n
  const overviewParagraphs = project.overview.split("\n\n");

  return (
    <main style={{ paddingTop: 60 }}>
      <div className="project-detail">
        <Link href="/projects" className="back-link">← Back to Projects</Link>

        <div className="project-hero reveal">
          <div className="project-hero-img">
            {project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.image} alt={project.title} className="project-hero-img-actual" />
            ) : (
              <div className="placeholder-inner">
                <div className="ph-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5}>
                    <rect x={3} y={3} width={18} height={18} rx={2} />
                    <path d="M3 9l4-4 4 4 4-4 4 4" />
                  </svg>
                </div>
                <span className="ph-label">PROJECT PREVIEW</span>
                <span className="ph-sub">Image coming soon</span>
              </div>
            )}
          </div>

          <div className="project-hero-content">
            <h1>{project.title}</h1>
            <p className="use-case">{project.useCase}</p>

            <p className="label">OVERVIEW</p>
            {overviewParagraphs.map((para, i) => (
              <p key={i} className="overview" style={i > 0 ? { marginTop: 12 } : undefined}>
                {para}
              </p>
            ))}

            <p className="label">TECH STACK</p>
            <div className="project-tags">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="project-actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo
                </a>
              )}
              <Link href="/contact" className={project.liveUrl ? "btn-outline" : "btn-primary"}>
                Hire for This
              </Link>
              <Link href="/projects" className="btn-outline">All Projects</Link>
            </div>
          </div>
        </div>


        {/* Project-specific flowchart(s) */}
        {sections.length > 0 ? (
          <ProjectFlowchart sections={sections} />
        ) : (
          /* Fallback generic flowchart for any project without data */
          <div className="flowchart-section reveal">
            <p className="label" style={{ textAlign: "center", padding: "0 0 28px" }}>
              HOW IT WORKS
            </p>
            <div className="flowchart-v">
              <div className="fv-node fv-start">START</div>
              <div className="fv-arrow" />
              <div className="fv-node"><h4>Trigger / Input</h4><p>Workflow triggered by webhook, schedule, or manual input</p></div>
              <div className="fv-arrow" />
              <div className="fv-node"><h4>Process &amp; Enrich</h4><p>AI layer processes data, enriches context, applies logic</p></div>
              <div className="fv-arrow" />
              <div className="fv-node"><h4>Execute Action</h4><p>Core task executed via API integrations and automation</p></div>
              <div className="fv-arrow" />
              <div className="fv-node"><h4>Output &amp; Notify</h4><p>Results delivered to destination — CRM, email, Slack</p></div>
              <div className="fv-arrow" />
              <div className="fv-node fv-done">DONE ✓</div>
            </div>
          </div>
        )}
      </div>

      <div className="project-footer">
        {prevProject ? (
          <Link href={`/projects/${prevProject.slug}`}>
            ← {prevProject.title}
          </Link>
        ) : (
          <Link href="/projects">← All Projects</Link>
        )}
        {nextProject && (
          <Link href={`/projects/${nextProject.slug}`} className="next">
            {nextProject.title} →
          </Link>
        )}
      </div>
    </main>
  );
}
