import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CS Churn Risk",
  description: "Portfolio demo: churn risk scoring from CSV with auth",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold">CS Churn Risk</Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/case-study" className="hover:underline">Case study</Link>
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <Link href="/auth" className="hover:underline">Sign in</Link>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        <footer className="text-xs text-slate-500 text-center py-8">
          © {new Date().getFullYear()} CS Churn Risk — Built as a portfolio demo by Michael Sherman
        </footer>
      </body>
    </html>
  );
}
