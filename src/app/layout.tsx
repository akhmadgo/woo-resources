import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Woo Resources",
  description: "Curated resources for interview prep, system design, AI/ML, and more",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen">
        <header className="border-b border-gray-800 px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight text-amber-400">Woo Resources</h1>
          <p className="text-sm text-gray-400">Curated links for builders</p>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-gray-800 px-6 py-4 mt-12 text-center text-xs text-gray-500">
          The owner of this site is not affiliated with any of the resources mentioned here.
        </footer>
      </body>
    </html>
  );
}
