export default function CaseStudy() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1>CS Churn Risk — Case Study</h1>
      <p>
        This demo showcases a practical Customer Success workflow: importing customer health data, scoring churn risk,
        and proposing next best actions prior to renewal.
      </p>

      <h2>Signals & Scoring</h2>
      <ul>
        <li>Renewal proximity</li>
        <li>Low usage (WAU)</li>
        <li>Open tickets & inbound volume</li>
        <li>NPS</li>
        <li>Past-due days</li>
        <li>Stale logins</li>
      </ul>
      <p>
        Each signal is normalized and combined with tunable weights to compute a 0–100 risk score with tiers (Low/Medium/High).
      </p>

      <h2>Why it matters</h2>
      <ul>
        <li>Focuses CSM time on the highest‑impact renewals</li>
        <li>Creates transparent story for leadership (exportable CSV)</li>
        <li>Encourages preventive outreach vs. reactive firefighting</li>
      </ul>

      <h2>My role</h2>
      <p>
        Designed the schema, risk model, and actions; built the app with Next.js, Tailwind, and Supabase; deployed to Vercel.
      </p>

      <h2>Next steps</h2>
      <ul>
        <li>Cohort benchmarks by segment/tier</li>
        <li>Alerts for high risk within 45 days of renewal</li>
        <li>Write‑back to CRM or data warehouse</li>
      </ul>
    </article>
  );
}
