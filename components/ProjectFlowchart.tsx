import { Fragment } from "react";
import type { FlowSection, FVBranch, FVBranchItem } from "@/data/flowcharts";

// ── Helpers ──────────────────────────────────────────────────────────────────

function labelClass(variant?: FVBranch["labelVariant"]): string {
  if (variant === "yes") return "fv-branch-label fv-branch-label-yes";
  if (variant === "no")  return "fv-branch-label fv-branch-label-no";
  return "fv-branch-label";
}

function labelStyle(variant?: FVBranch["labelVariant"]): React.CSSProperties | undefined {
  if (variant === "accent")  return { color: "var(--accent)" };
  if (variant === "purple")  return { color: "#A78BFA" };
  if (variant === "green")   return { color: "var(--green)" };
  if (variant === "muted")   return { color: "var(--text-secondary)" };
  return undefined;
}

function arrowClass(variant?: FVBranch["arrowVariant"]): string {
  if (variant === "red")   return "fv-arrow fv-arrow-red";
  if (variant === "green") return "fv-arrow fv-arrow-green";
  return "fv-arrow";
}

function nodeClass(variant?: "yes" | "no"): string {
  if (variant === "yes") return "fv-node fv-node-yes";
  if (variant === "no")  return "fv-node fv-node-no";
  return "fv-node";
}

// ── Branch item: renders arrow + node/done/redirect ───────────────────────────

function BranchItem({ item, arrow }: { item: FVBranchItem; arrow: string }) {
  if (item.type === "done") {
    return (
      <>
        <div className={arrow} />
        <div className="fv-node fv-done">{item.label}</div>
      </>
    );
  }
  if (item.type === "redirect") {
    return (
      <>
        <div className={arrow} />
        <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "10px", color: item.color ?? "var(--red)", opacity: 0.7 }}>
          {item.label}
        </div>
      </>
    );
  }
  return (
    <>
      <div className={arrow} />
      <div className={nodeClass(item.variant)}>
        <h4>{item.h}</h4>
        <p>{item.p}</p>
      </div>
    </>
  );
}

// ── Branch column ─────────────────────────────────────────────────────────────

function Branch({ branch }: { branch: FVBranch }) {
  const arrow = arrowClass(branch.arrowVariant);
  return (
    <div className="fv-branch">
      <span className={labelClass(branch.labelVariant)} style={labelStyle(branch.labelVariant)}>
        {branch.label}
      </span>
      {branch.items.map((item, i) => (
        <BranchItem key={i} item={item} arrow={arrow} />
      ))}
    </div>
  );
}

// ── Section block ─────────────────────────────────────────────────────────────
// IMPORTANT: every fv-arrow and fv-node must be a *direct* child of .flowchart-v
// (which is display:flex flex-direction:column align-items:center).
// Wrapping them in a <div> breaks centering of the 2px arrow line.

function FlowSectionBlock({ section }: { section: FlowSection }) {
  return (
    <div className="flowchart-section reveal">
      {section.title && (
        <p className="label" style={{ textAlign: "center", padding: "0 0 28px" }}>
          {section.title}
        </p>
      )}
      <div className="flowchart-v">
        {/* START */}
        <div className="fv-node fv-start">START</div>

        {/* Linear steps before decision */}
        {section.before.map((step, i) => (
          <Fragment key={i}>
            <div className="fv-arrow" />
            <div className="fv-node">
              <h4>{step.h}</h4>
              <p>{step.p}</p>
            </div>
          </Fragment>
        ))}

        {/* Decision diamond */}
        {section.decision && (
          <>
            <div className="fv-arrow" />
            <div className="fv-node fv-decision">
              <h4>{section.decision}</h4>
            </div>
          </>
        )}

        {/* Branch columns */}
        {section.branches && (
          <div className="fv-branches">
            {section.branches.map((branch, i) => (
              <Branch key={i} branch={branch} />
            ))}
          </div>
        )}

        {/* Steps after branches merge back */}
        {section.after?.map((step, i) => (
          <Fragment key={i}>
            <div className="fv-arrow" />
            <div className="fv-node">
              <h4>{step.h}</h4>
              <p>{step.p}</p>
            </div>
          </Fragment>
        ))}

        {/* Final DONE node */}
        {section.done && (
          <>
            <div className="fv-arrow" />
            <div className="fv-node fv-done">{section.done}</div>
          </>
        )}
      </div>
    </div>
  );
}

// ── Public export ─────────────────────────────────────────────────────────────

export default function ProjectFlowchart({ sections }: { sections: FlowSection[] }) {
  return (
    <>
      {sections.map((section, i) => (
        <FlowSectionBlock key={i} section={section} />
      ))}
    </>
  );
}
