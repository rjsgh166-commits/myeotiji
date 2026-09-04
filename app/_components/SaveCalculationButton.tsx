"use client";

import { useState } from "react";
import { calculatorFromHref, trackEvent } from "../_lib/analytics";

type SavedCalculation = {
  id: string;
  title: string;
  href: string;
  primaryValue: string;
  summary: string;
  savedAt: number;
};

type Props = {
  title: string;
  href: string;
  primaryValue: string;
  summary: string;
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

export default function SaveCalculationButton({
  title,
  href,
  primaryValue,
  summary,
}: Props) {
  const [saved, setSaved] = useState(false);

  const save = () => {
    const nextItem: SavedCalculation = {
      id: `${href}:${Date.now()}`,
      title,
      href,
      primaryValue,
      summary,
      savedAt: Date.now(),
    };

    const current = readSaved().filter((item) => item.href !== href);
    const next = [nextItem, ...current].slice(0, 8);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    trackEvent("save_calculation", {
      calculator: calculatorFromHref(href),
    });
    window.dispatchEvent(new Event("myeotiji:saved-updated"));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={save}
      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-50 sm:w-auto"
    >
      <span>{saved ? "✓" : "☆"}</span>
      <span>{saved ? "내 계산함에 저장했어요" : "내 계산함에 저장"}</span>
    </button>
  );
}
