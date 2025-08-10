"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [emailPending, setEmailPending] = useState(false);
  const [oauthPending, setOauthPending] = useState(false);

  const signInWithGitHub = async () => {
    setOauthPending(true);
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
    setOauthPending(false);
  };

  const signInWithEmail = async () => {
    setEmailPending(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    setEmailPending(false);
    if (!error) {
      alert("Check your email for the magic link!");
    } else {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow p-6 space-y-4">
      <h1 className="text-xl font-semibold">Sign in</h1>
      <p className="text-slate-700 text-sm">
        Use GitHub or your email to get started.
      </p>
      {/* Email sign in */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full px-3 py-2 border rounded"
      />
      <button
        onClick={signInWithEmail}
        disabled={emailPending || !email}
        className="w-full px-4 py-2 rounded-xl bg-slate-900 text-white disabled:opacity-50"
      >
        {emailPending ? "Sending link…" : "Send magic link"}
      </button>
      <hr className="my-2" />
      {/* GitHub sign in */}
      <button
        onClick={signInWithGitHub}
        disabled={oauthPending}
        className="w-full px-4 py-2 rounded-xl bg-slate-900 text-white disabled:opacity-50"
      >
        {oauthPending ? "Redirecting…" : "Continue with GitHub"}
      </button>
    </div>
  );
}
