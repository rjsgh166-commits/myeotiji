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
export const MAX_SAVED_CALCULATIONS = 8;

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

function makeId(path: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${path}:${crypto.randomUUID()}`;
  }
  return `${path}:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
}

export default function SaveCalculationButton({
  title,
  href,
  primaryValue,
  summary,
  state,
}: Props) {
  const safeHref = useMemo(() => cleanPath(href), [href]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState(title);
  const [savedRecently, setSavedRecently] = useState(false);

  useEffect(() => setName(title), [title]);

  const save = () => {
    const trimmedName = name.trim() || title;
    const now = Date.now();
    const nextItem: SavedCalculation = {
      id: makeId(safeHref),
      title: trimmedName,
      href: safeHref,
      primaryValue,
      summary,
      savedAt: now,
      state,
    };

    const next = [nextItem, ...readSaved()].slice(0, MAX_SAVED_CALCULATIONS);
    localStorage.setItem(SAVED_CALCULATIONS_KEY, JSON.stringify(next));
    trackEvent("save_calculation", {
      calculator: calculatorFromHref(safeHref),
      saved_count: next.length,
    });
    window.dispatchEvent(new Event("myeotiji:saved-updated"));
    setDialogOpen(false);
    setSavedRecently(true);
    window.setTimeout(() => setSavedRecently(false), 1800);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setName(title);
          setDialogOpen(true);
        }}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
      >
        <span>{savedRecently ? "✓" : "☆"}</span>
        <span>{savedRecently ? "저장됨" : "저장"}</span>
      </button>

      {dialogOpen ? (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/40 p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="계산 결과 저장"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDialogOpen(false);
          }}
        >
          <div className="w-full max-w-md rounded-3xl bg-white p-5 shadow-2xl sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-blue-600">내 계산함</p>
                <h3 className="mt-1 text-lg font-bold text-slate-900">이 계산에 이름을 붙여보세요</h3>
              </div>
              <button
                type="button"
                onClick={() => setDialogOpen(false)}
                className="rounded-lg px-2 py-1 text-sm text-slate-400 hover:bg-slate-50 hover:text-slate-700"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <input
              autoFocus
              value={name}
              maxLength={40}
              onChange={(event) => setName(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") save();
                if (event.key === "Escape") setDialogOpen(false);
              }}
              className="mt-5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-semibold text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
              placeholder="예: A회사 이직 제안"
            />
            <p className="mt-2 text-xs leading-5 text-slate-400">
              같은 계산기도 여러 개 저장할 수 있고, 입력값은 이 브라우저에만 보관돼요.
            </p>

            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => setDialogOpen(false)}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                취소
              </button>
              <button
                type="button"
                onClick={save}
                className="flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                계산함에 저장
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
