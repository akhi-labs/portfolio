import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akhi Labs",
  description:
    "Akhi Labs — Experimental builds, tools, and side projects by Muhammad Ahmed. Coming soon.",
};

export default function AkhiLabsPage() {
  return (
    <main>
      <section className="akhi-labs-page">
        <p className="labs-label">// AKHI-LABS</p>
        <h1 className="labs-heading">Coming Soon</h1>
        <p className="labs-sub">Something is being built here.</p>

        <div className="labs-messages">
          <p>Long Live Iran</p>
          <p>Free Palestine</p>
        </div>
      </section>
    </main>
  );
}
