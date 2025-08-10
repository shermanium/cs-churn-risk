import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import ChurnDashboard from "@/components/ChurnDashboard";
import Link from "next/link";

export default async function DashboardPage() {
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: (key: string) => cookieStore.get(key)?.value } }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 text-center space-y-3">
        <h1 className="text-xl font-semibold">Please sign in</h1>
        <p className="text-slate-700 text-sm">You need to sign in to access the dashboard.</p>
        <Link href="/auth" className="px-4 py-2 rounded-xl bg-slate-900 text-white inline-block">Go to sign in</Link>
      </div>
    );
  }

  return <ChurnDashboard />;
}
