// ── Types ─────────────────────────────────────────────────────────────────────

export type FVBranchItem =
  | { type: "step"; h: string; p: string; variant?: "yes" | "no" }
  | { type: "done"; label: string }
  | { type: "redirect"; label: string; color?: string };

export interface FVBranch {
  label: string;
  /** Controls the label colour class / inline style */
  labelVariant?: "yes" | "no" | "accent" | "purple" | "green" | "muted";
  /** Arrow colour inside the branch column */
  arrowVariant?: "red" | "green";
  items: FVBranchItem[];
}

export interface FlowSection {
  title?: string;
  before: Array<{ h: string; p: string }>;
  decision?: string;
  branches?: FVBranch[];
  /** Steps that appear after the branches section merge back */
  after?: Array<{ h: string; p: string }>;
  done?: string;
}

// ── Flowchart data keyed by project slug ─────────────────────────────────────

export const flowcharts: Record<string, FlowSection[]> = {

  "cold-calling-agents": [
    {
      title: "OUTBOUND AGENT — FLOW",
      before: [
        { h: "Load Prospect Data",          p: "N8N ingests bulk dataset" },
        { h: "Check Location & Timezone",   p: "Schedule call at prospect's local time" },
        { h: "Initiate Outbound Call",       p: "Twilio dials via ElevenLabs voice AI" },
        { h: "AI Pitch",                     p: "Targets specific pain points in real time" },
        { h: "Handle Live Queries",          p: "Real-time web search for up-to-date answers" },
      ],
      decision: "Meeting Booked?",
      branches: [
        {
          label: "NO",
          labelVariant: "no",
          arrowVariant: "red",
          items: [
            { type: "step",     h: "Log & Archive", p: "Call notes saved, prospect skipped", variant: "no" },
            { type: "redirect", label: "→ Next Prospect" },
          ],
        },
        {
          label: "YES",
          labelVariant: "yes",
          arrowVariant: "green",
          items: [
            { type: "step", h: "Book via CalCom", p: "Schedules meeting slot automatically", variant: "yes" },
            { type: "step", h: "Push to CRM",     p: "Log contact, deal, and call data",    variant: "yes" },
            { type: "done", label: "DONE ✓" },
          ],
        },
      ],
    },
    {
      title: "INBOUND AGENT — FLOW",
      before: [
        { h: "Existing User Calls In",       p: "Inbound routed via Twilio" },
        { h: "ElevenLabs Agent Connects",    p: "AI voice picks up the call" },
        { h: "Deep Product Conversation",    p: "Issues, queries, and feedback captured" },
        { h: "Generate Call Summary",        p: "AI structures key takeaways" },
        { h: "Deliver to Founder / Dev Team",p: "Summary sent via email or Slack" },
      ],
      done: "DONE ✓",
    },
  ],

  "voice-generative-ai": [
    {
      before: [
        { h: "Sign Up / Log In",  p: "User authentication via FastAPI" },
        { h: "Credit Check",      p: "Validate available generation credits" },
      ],
      decision: "Credits Available?",
      branches: [
        {
          label: "NO",
          labelVariant: "no",
          arrowVariant: "red",
          items: [
            { type: "step",     h: "Purchase Credits", p: "Top up credit pack", variant: "no" },
            { type: "redirect", label: "→ Retry" },
          ],
        },
        {
          label: "YES",
          labelVariant: "yes",
          arrowVariant: "green",
          items: [
            { type: "step", h: "Select Mode",         p: "TTS / STS / Voice Clone",           variant: "yes" },
            { type: "step", h: "Configure Input",     p: "Urdu text, audio file, or clone voice", variant: "yes" },
            { type: "step", h: "ElevenLabs API Call", p: "Voice synthesis or conversion",      variant: "yes" },
            { type: "step", h: "Save to History",     p: "Stored in MongoDB Atlas",            variant: "yes" },
            { type: "done", label: "DONE ✓" },
          ],
        },
      ],
    },
  ],

  "chatbots-rag": [
    {
      before: [
        { h: "HTTP POST Webhook",      p: "Incoming user query received" },
        { h: "AI Agent",               p: "Loads Pinecone chat memory for context" },
        { h: "Embed Query",            p: "OpenAI Embeddings vectorise input" },
        { h: "Pinecone Vector Search", p: "Semantic retrieval from knowledge base" },
        { h: "Cohere Reranker",        p: "Re-rank docs by relevance precision" },
      ],
      decision: "Real-Time Data Needed?",
      branches: [
        {
          label: "RAG ONLY",
          labelVariant: "muted",
          items: [
            { type: "step", h: "Use Retrieved Context", p: "Knowledge base docs as input" },
          ],
        },
        {
          label: "WEB SEARCH",
          labelVariant: "accent",
          items: [
            { type: "step", h: "SerpAPI Search",  p: "Fetch live real-time results" },
            { type: "step", h: "Augment Context", p: "Merge web data into prompt" },
          ],
        },
      ],
      after: [
        { h: "LLM Generation",      p: "Gemini or OpenAI — with fallback" },
        { h: "Respond to Webhook",  p: "Answer returned to user" },
        { h: "Cost Computation",    p: "Subworkflow logs token usage" },
      ],
      done: "DONE ✓",
    },
  ],

  "content-creation": [
    {
      before: [
        { h: "Content Brief / Calendar", p: "Automated trigger via N8N" },
        { h: "Competitor Scan",          p: "Analyse posts & videos, repurpose in brand voice" },
      ],
      decision: "Post Type?",
      branches: [
        {
          label: "AVATAR",
          labelVariant: "accent",
          items: [
            { type: "step", h: "Heygen API",             p: "Custom pre-built avatar selected" },
            { type: "step", h: "Avatar Video Generated", p: "Talking-head with lifelike voice" },
          ],
        },
        {
          label: "ANIMATION",
          labelVariant: "purple",
          items: [
            { type: "step", h: "Veo3 / SORA API",        p: "Video generation model called" },
            { type: "step", h: "AI Animation Generated", p: "Motion video output" },
          ],
        },
        {
          label: "IMAGE",
          labelVariant: "green",
          items: [
            { type: "step", h: "Diffusion Model API",         p: "OpenAI DALL-E or NanoBnB" },
            { type: "step", h: "Image Variations Generated",  p: "High-quality visuals output" },
          ],
        },
      ],
      after: [
        { h: "Format per Platform",  p: "Resize & spec for each channel" },
        { h: "Queue for Publishing", p: "Scheduled & pushed automatically" },
      ],
      done: "PUBLISHED ✓",
    },
  ],

  "social-ai-agent": [
    {
      before: [
        { h: "ICP Research",     p: "Audience & pain points" },
        { h: "Content Calendar", p: "Monthly topic plan" },
        { h: "Generate Posts",   p: "Copy, hooks & images" },
        { h: "Platform Adapter", p: "Format per channel" },
        { h: "Schedule & Push",  p: "Auto-publish on time" },
      ],
      done: "LIVE ✓",
    },
  ],

  "seo-blogs": [
    {
      before: [
        { h: "Seed Keyword / Niche Input",       p: "Topic or domain niche provided" },
        { h: "Keyword Research & Cluster Map",   p: "Pillar + supporting articles planned" },
        { h: "AI Long-Form Draft",               p: "H1, H2, H3 structure, intro & body" },
        { h: "SEO Layer Applied",                p: "Meta, internal links, schema & alt text" },
      ],
      decision: "Passes SEO Check?",
      branches: [
        {
          label: "NO",
          labelVariant: "no",
          arrowVariant: "red",
          items: [
            { type: "step",     h: "Revise & Re-Optimize", p: "AI rewrites weak sections", variant: "no" },
            { type: "redirect", label: "→ Re-check" },
          ],
        },
        {
          label: "YES",
          labelVariant: "yes",
          arrowVariant: "green",
          items: [
            { type: "step", h: "Push to WordPress CMS",        p: "Via WordPress API through N8N",             variant: "yes" },
            { type: "step", h: "Set Category, Tags & Schedule", p: "Slug, featured image & publish time",       variant: "yes" },
            { type: "done", label: "RANKED ✓" },
          ],
        },
      ],
    },
  ],

  "seo-semrushagent": [
    {
      before: [
        { h: "Domain / Seed Keyword Input",  p: "Target topic or website provided" },
        { h: "SemRush API Pull",             p: "Volume, difficulty, intent & ranking data" },
        { h: "Extract Primary Keywords",     p: "Core ranking terms identified" },
        { h: "Map LSI Keywords",             p: "Semantically related terms & entities" },
        { h: "Build Topic Clusters",         p: "Group by intent & semantic proximity" },
        { h: "Competitor Keyword Gap",       p: "What ranks for them but not for you" },
      ],
      decision: "Opportunities Found?",
      branches: [
        {
          label: "NO",
          labelVariant: "no",
          arrowVariant: "red",
          items: [
            { type: "step",     h: "Expand Scope", p: "Broaden seed or switch niche angle", variant: "no" },
            { type: "redirect", label: "→ Retry" },
          ],
        },
        {
          label: "YES",
          labelVariant: "yes",
          arrowVariant: "green",
          items: [
            { type: "step", h: "AI Strategy Brief", p: "Prioritized content & ranking actions", variant: "yes" },
            { type: "done", label: "EXPORTED ✓" },
          ],
        },
      ],
    },
  ],

  "marketing-news": [
    {
      before: [
        { h: "Pull RSS Feeds",  p: "20+ marketing sources" },
        { h: "Score Articles",  p: "Relevance & recency" },
        { h: "AI Summarize",    p: "Key takeaways per piece" },
        { h: "Compile Digest",  p: "Format newsletter" },
        { h: "Deliver",         p: "Email / Slack" },
      ],
      done: "SENT ✓",
    },
  ],

  "email-automation": [
    {
      before: [
        { h: "Lead Import",      p: "ICP-filtered list" },
        { h: "Personalize",      p: "Dynamic variables" },
        { h: "Sequence Launch",  p: "Step 1 → 2 → 3" },
      ],
      decision: "Reply Detected?",
      branches: [
        {
          label: "NO",
          labelVariant: "no",
          arrowVariant: "red",
          items: [
            { type: "step",     h: "Follow-Up", p: "Next step in sequence", variant: "no" },
            { type: "redirect", label: "→ Retry or Archive" },
          ],
        },
        {
          label: "YES",
          labelVariant: "yes",
          arrowVariant: "green",
          items: [
            { type: "step", h: "Route to CRM", p: "Tag as warm lead", variant: "yes" },
            { type: "done", label: "BOOKED ✓" },
          ],
        },
      ],
    },
  ],

  "linkedln-automation": [
    {
      before: [
        { h: "Target ICP",          p: "Title, industry, size" },
        { h: "Enrich Profiles",     p: "N8N data append" },
        { h: "Connection Request",  p: "Personalized note" },
      ],
      decision: "Accepted?",
      branches: [
        {
          label: "NO",
          labelVariant: "no",
          arrowVariant: "red",
          items: [
            { type: "step",     h: "Archive", p: "Log & skip", variant: "no" },
            { type: "redirect", label: "→ Next Prospect" },
          ],
        },
        {
          label: "YES",
          labelVariant: "yes",
          arrowVariant: "green",
          items: [
            { type: "step", h: "Message Sequence", p: "3-step DM cadence",  variant: "yes" },
            { type: "step", h: "Route to CRM",     p: "Warm lead tagged",   variant: "yes" },
            { type: "done", label: "QUALIFIED ✓" },
          ],
        },
      ],
    },
  ],

  "product-release-notes": [
    {
      before: [
        { h: "Upload User Data",    p: "CSV of customer emails & names" },
        { h: "Write Subject & Body",p: "Compose the release note email" },
        { h: "Click Send",          p: "Single trigger via Streamlit UI" },
        { h: "SMTP Batch Dispatch", p: "Up to 2,000 emails sent in seconds" },
      ],
      done: "DONE ✓",
    },
  ],

  "website-analyst": [
    {
      before: [
        { h: "Deploy Clarity",   p: "Script on all pages" },
        { h: "Capture Data",     p: "Heatmaps, sessions" },
        { h: "AI Analysis",      p: "Frustration & drop-off" },
        { h: "Score Pages",      p: "Priority ranking" },
        { h: "Generate Report",  p: "Recommendations PDF" },
      ],
      done: "DELIVERED ✓",
    },
  ],

  "paid-marketing": [
    {
      before: [
        { h: "Audience Research", p: "Language learner segments" },
        { h: "Ad Creative",       p: "Copy, visuals, CTA" },
        { h: "Campaign Launch",   p: "Meta Ads Manager" },
        { h: "A/B Testing",       p: "Audience vs creative" },
      ],
      decision: "Winner Found?",
      branches: [
        {
          label: "NO",
          labelVariant: "no",
          arrowVariant: "red",
          items: [
            { type: "step",     h: "Refine Creative", p: "Iterate & retest", variant: "no" },
            { type: "redirect", label: "→ Back to Testing" },
          ],
        },
        {
          label: "YES",
          labelVariant: "yes",
          arrowVariant: "green",
          items: [
            { type: "step", h: "Scale Campaign", p: "Increase budget & reach", variant: "yes" },
            { type: "done", label: "ENROLLED ✓" },
          ],
        },
      ],
    },
  ],
};
