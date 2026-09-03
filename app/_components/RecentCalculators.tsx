"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CALCULATOR_BY_HREF,
  RECENT_CALCULATORS_KEY,
  type CalculatorItem,
} from "../_lib/calculators";

export default function RecentCalculators() {
  const [items, setItems] = useState<CalculatorItem[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(RECENT_CALCULATORS_KEY);
      if (!raw) return;

      const hrefs = JSON.parse(raw) as string[];
      setItems(
        hrefs
          .map((href) => CALCULATOR_BY_HREF[href])
          .filter((item): item is CalculatorItem => Boolean(item))
          .slice(0, 4),
      );
    } catch {
      setItems([]);
    }
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="px-5 pb-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-black">최근 사용한 계산기</h2>
            <p className="mt-1 text-sm text-gray-500">
              전에 사용했던 계산기로 바로 돌아가세요.
            </p>
          </div>
          <span className="text-xs font-semibold text-gray-400">
            이 브라우저에만 저장
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-xl">
                {item.icon}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-black text-gray-900">
                  {item.shortTitle}
                </span>
                <span className="mt-1 block text-xs font-semibold text-blue-600">
                  다시 계산하기 →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
