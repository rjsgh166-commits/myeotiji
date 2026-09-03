"use client";

import { useMemo, useState } from "react";
import type { CalculatorItem } from "../_lib/calculators";
import { normalizeSearchText } from "../_lib/calculators";

type Item = Pick<
  CalculatorItem,
  "title" | "description" | "href"
> & {
  icon?: string;
  aliases?: string[];
};

export default function CalculatorSearch({ items }: { items: Item[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const keyword = normalizeSearchText(query.trim());
    if (!keyword) return [];

    return items
      .filter((item) => {
        const searchable = normalizeSearchText(
          [
            item.title,
            item.description,
            ...(item.aliases ?? []),
          ].join(" "),
        );
        return searchable.includes(keyword);
      })
      .slice(0, 8);
  }, [items, query]);

  return (
    <div className="relative mx-auto mt-9 max-w-2xl text-left">
      <div className="flex items-center rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50">
        <span className="mr-3 text-xl" aria-hidden="true">🔎</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="예: 월급, 물타기, 디데이, 평수"
          aria-label="계산기 검색"
          className="w-full bg-transparent text-base outline-none placeholder:text-gray-400"
        />
      </div>

      {query.trim() && (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          {results.length > 0 ? (
            results.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 last:border-b-0 hover:bg-gray-50"
              >
                {item.icon && (
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-lg">
                    {item.icon}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-gray-900">
                    {item.title}
                  </span>
                  <span className="mt-1 block truncate text-xs text-gray-500">
                    {item.description}
                  </span>
                </span>
              </a>
            ))
          ) : (
            <div className="px-5 py-5 text-sm text-gray-500">
              일치하는 계산기를 찾지 못했어요.
              <span className="mt-1 block text-xs text-gray-400">
                다른 표현으로 검색해보세요.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
