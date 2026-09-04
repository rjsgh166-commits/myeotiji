"use client";

import { useEffect, useMemo, useState } from "react";
import { calculatorFromHref, trackEvent } from "../_lib/analytics";
import { cleanPath } from "../_lib/calculationTransfer";

export type SavedCalculation = {
  id: string;
  title: string;
  href: string;
  primaryValue: string;
  summary: string;
  savedAt: number;
  state?: Record<string, unknown>;
};

type Props = {
  title: string;
  href: string;
  primaryValue: string;
  summary: string;
  state?: Record<string, unknown>;
};

export const SAVED_CALCULATIONS_KEY = "myeotiji:saved-calculations:v1";

function readSaved(): SavedCalculation[] {
  try {
    const raw = localStorage.getItem(SAVED_CALCULATIONS_KEY);
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
  state,
}: Props) {
  const safeHref = useMemo(() => cleanPath(href), [href]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(readSaved().some((item) => cleanPath(item.href) === safeHref));
  }, [safeHref]);

  const save = () => {
    const nextItem: SavedCalculation = {
      id: `${safeHref}:${Date.now()}`,
      title,
      href: safeHref,
      primaryValue,
      summary,
      savedAt: Date.now(),
      state,
    };

    const current = readSaved().filter((item) => cleanPath(item.href) !== safeHref);
    const next = [nextItem, ...current].slice(0, 8);
    localStorage.setItem(SAVED_CALCULATIONS_KEY, JSON.stringify(next));
    trackEvent("save_calculation", { calculator: calculatorFromHref(safeHref) });
    window.dispatchEvent(new Event("myeotiji:saved-updated"));
    setSaved(true);
  };

  return (
    <button
      type="button"
      onClick={save}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
    >
      <span>{saved ? "✓" : "☆"}</span>
      <span>{saved ? "저장됨" : "내 계산함"}</span>
    </button>
  );
}
