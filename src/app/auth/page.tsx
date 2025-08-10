"use client";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AuthPage() {
  const [pending, setPending] = useState(false);
  const signInWithGitHub = async () => {
    setPending(true);
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
    setPending(false);
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 space-y-4">
      <h1 className="text-xl font-semibold">Sign in</h1>
      <p className="text-slate-700 text-sm">Use GitHub to get started.</p>
      <button onClick={signInWithGitHub} disabled={pending}
        className="px-4 py-2 rounded-xl bg-slate-900 text-white disabled:opacity-50">
        {pending ? "Redirecting…" : "Continue with GitHub"}
      </button>
    </div>
  );
}
