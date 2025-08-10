import Link from "next/link";

export default function Page() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Spot churn risk before it happens.</h1>
        <p className="text-slate-700">
          Upload customer CSVs to score churn risk (0–100), visualize health, and auto‑generate next best actions.
          Built for Customer Success workflows and showcased here as a demo app.
        </p>
        <ul className="list-disc pl-5 text-slate-700 space-y-1">
          <li>Renewal proximity, usage, tickets, NPS, and more.</li>
          <li>Tunable signal weights to match your playbook.</li>
          <li>Export an augmented CSV for exec readouts.</li>
        </ul>
        <div className="flex gap-3 pt-2">
          <Link href="/dashboard" className="px-4 py-2 rounded-xl bg-slate-900 text-white">Go to dashboard</Link>
          <a href="/demo.csv" className="px-4 py-2 rounded-xl border border-slate-200 bg-white">Download demo CSV</a>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="aspect-video w-full rounded-xl bg-slate-100 grid place-items-center text-slate-500 text-sm">
          Dashboard preview (upload CSV, charts, actions)
        </div>
      </div>
      <div id="about" className="md:col-span-2 bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-2">About this demo</h2>
        <p className="text-slate-700">
          This open demo uses Supabase Auth for sign‑in and keeps all data client‑side. Great for portfolio review: recruiters can log in and try the workflow safely.
        </p>
      </div>
    </div>
  );
}
