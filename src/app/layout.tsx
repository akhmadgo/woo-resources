import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Woo Resources",
  description: "Curated resources for interview prep, system design, AI/ML, and more",
  icons: {
    icon: "/W.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 min-h-screen">
        <header className="border-b border-gray-800 px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight text-amber-400 flex items-center gap-2">
            <Image src="/Woo.png" alt="Woo logo" width={40} height={40} />
            Woo Resources
          </h1>
          <p className="text-sm text-gray-400">Resources for college students interested</p>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <footer className="border-t border-gray-800 px-6 py-4 mt-16 text-center text-xs text-gray-600">
          <p>No endorsements or affiliations with listed resources. </p>
          <p>Hope it helps you with your internships/job search! ❤️ </p>
          
        </footer>
      </body>
    </html>
  );
}
