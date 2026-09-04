"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { calculatorFromHref, trackEvent } from "../_lib/analytics";

type SavedCalculation = {
  id: string;
  title: string;
  href: string;
  primaryValue: string;
  summary: string;
  savedAt: number;
};

const STORAGE_KEY = "myeotiji:saved-calculations:v1";

function readSaved(): SavedCalculation[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function SavedCalculations() {
  const [items, setItems] = useState<SavedCalculation[]>([]);

  useEffect(() => {
    const sync = () => setItems(readSaved());
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("myeotiji:saved-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("myeotiji:saved-updated", sync);
    };
  }, []);

  if (items.length === 0) return null;

  const remove = (id: string) => {
    const next = items.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    trackEvent("saved_calculation_remove", { calculator: calculatorFromHref(items.find((item) => item.id === id)?.href || "") });
    setItems(next);
  };

  return (
    <section className="px-5 pb-14 sm:pb-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-black tracking-wider text-blue-600">MY CALCULATIONS</p>
            <h2 className="mt-2 text-2xl font-black">내 계산함</h2>
            <p className="mt-2 text-sm text-slate-500">
              저장한 계산은 이 브라우저에만 보관돼요. 다시 열면 입력값도 복원됩니다.
            </p>
          </div>
          <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-500">
            로그인 필요 없음
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {items.slice(0, 6).map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-slate-900">{item.title}</p>
                  <p className="mt-1 text-lg font-black text-blue-600">{item.primaryValue}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{item.summary}</p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(item.id)}
                  className="shrink-0 rounded-lg px-2 py-1 text-xs font-bold text-slate-400 hover:bg-white hover:text-slate-700"
                  aria-label={`${item.title} 저장 삭제`}
                >
                  삭제
                </button>
              </div>
              <Link
                href={item.href}
                onClick={() => trackEvent("saved_calculation_open", { calculator: calculatorFromHref(item.href) })}
                className="mt-4 inline-flex text-sm font-black text-blue-600 hover:text-blue-700"
              >
                다시 계산하기 →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
