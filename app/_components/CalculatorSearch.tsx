"use client";

import { useMemo, useState } from "react";

type Item = {
  title: string;
  description: string;
  href: string;
};

export default function CalculatorSearch({ items }: { items: Item[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return [];

    return items
      .filter((item) =>
        `${item.title} ${item.description}`.toLowerCase().includes(keyword)
      )
      .slice(0, 8);
  }, [items, query]);

  return (
    <div className="relative mx-auto mt-9 max-w-2xl text-left">
      <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50">
        <span className="mr-3 text-xl">🔎</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="어떤 계산을 찾으세요?"
          className="w-full bg-transparent text-base outline-none placeholder:text-gray-400"
        />
      </div>

      {query.trim() && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
          {results.length > 0 ? (
            results.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block border-b border-gray-100 px-5 py-4 last:border-b-0 hover:bg-gray-50"
              >
                <p className="text-sm font-bold text-gray-900">{item.title}</p>
                <p className="mt-1 text-xs text-gray-500">{item.description}</p>
              </a>
            ))
          ) : (
            <div className="px-5 py-5 text-sm text-gray-500">
              일치하는 계산기를 찾지 못했어요.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
