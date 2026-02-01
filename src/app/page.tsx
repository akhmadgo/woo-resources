"use client";

import { useState } from "react";
import { sections } from "@/data/resources";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = activeFilter
    ? sections.filter((s) => s.id === activeFilter)
    : sections;

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveFilter(null)}
          className={`px-3 py-1 text-sm border rounded ${
            activeFilter === null
              ? "border-amber-400 text-amber-400"
              : "border-gray-700 text-gray-400 hover:text-gray-200"
          }`}
        >
          all
        </button>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveFilter(s.id)}
            className={`px-3 py-1 text-sm border rounded ${
              activeFilter === s.id
                ? "border-amber-400 text-amber-400"
                : "border-gray-700 text-gray-400 hover:text-gray-200"
            }`}
          >
            {s.id}
          </button>
        ))}
      </div>

      {/* Resource listings */}
      {filtered.map((section) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-amber-400 font-bold mb-3 border-b border-gray-800 pb-1">
            {section.title}
          </h2>
          <ul className="space-y-2">
            {section.resources.map((r) => (
              <li key={r.url} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline shrink-0"
                >
                  {r.name}
                </a>
                <span className="text-gray-500 text-sm">— {r.description}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
