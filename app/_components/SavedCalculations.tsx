"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { calculatorFromHref, trackEvent } from "../_lib/analytics";
import {
  cleanPath,
  queryStateFromHref,
  storeCalculationTransfer,
} from "../_lib/calculationTransfer";
import {
  MAX_SAVED_CALCULATIONS,
  SAVED_CALCULATIONS_KEY,
  type SavedCalculation,
} from "./SaveCalculationButton";

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

function writeSaved(items: SavedCalculation[]) {
  localStorage.setItem(SAVED_CALCULATIONS_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("myeotiji:saved-updated"));
}

export default function SavedCalculations() {
  const [items, setItems] = useState<SavedCalculation[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [undoItem, setUndoItem] = useState<SavedCalculation | null>(null);

  useEffect(() => {
    const sync = () => {
      setItems(readSaved());
      setHydrated(true);
    };
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("myeotiji:saved-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("myeotiji:saved-updated", sync);
    };
  }, []);

  const remove = (item: SavedCalculation) => {
    const next = items.filter((candidate) => candidate.id !== item.id);
    writeSaved(next);
    trackEvent("saved_calculation_remove", {
      calculator: calculatorFromHref(item.href),
    });
    setItems(next);
    setUndoItem(item);
  };

  const undo = () => {
    if (!undoItem) return;
    const next = [undoItem, ...items].slice(0, MAX_SAVED_CALCULATIONS);
    writeSaved(next);
    setItems(next);
    setUndoItem(null);
  };

  const prepareOpen = (item: SavedCalculation) => {
    const target = cleanPath(item.href);
    const legacyState = queryStateFromHref(item.href);
    const state = item.state ?? legacyState;
    if (Object.keys(state).length > 0) storeCalculationTransfer(target, state);
    trackEvent("saved_calculation_open", { calculator: calculatorFromHref(target) });
  };

  return (
    <>
      <section id="my-calculations" className="scroll-mt-24 px-5 pb-10 sm:pb-12">
        {!hydrated || items.length === 0 ? (
          <div className="mx-auto max-w-6xl rounded-2xl border border-dashed border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-500">
            <strong className="font-semibold text-slate-700">내 계산함</strong>
            <span className="ml-2">계산 결과를 저장하면 여기에 모아볼 수 있어요.</span>
          </div>
        ) : (
          <div className="mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">내 계산함</h2>
                <p className="mt-1 text-xs text-slate-500">
                  계산마다 이름을 붙여 여러 결과를 이 브라우저에 저장할 수 있어요.
                </p>
              </div>
              {hydrated && items.length > 0 ? (
                <span className="text-xs font-semibold text-slate-500">
                  {items.length}/{MAX_SAVED_CALCULATIONS}
                </span>
              ) : null}
            </div>

            {items.length > 0 ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition hover:border-blue-200 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-slate-800" title={item.title}>
                          {item.title}
                        </p>
                        <p className="mt-1 break-words text-base font-bold leading-6 text-blue-600">
                          {item.primaryValue}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(item)}
                        className="min-h-11 shrink-0 rounded-lg px-2 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                        aria-label={`${item.title} 저장 삭제`}
                      >
                        삭제
                      </button>
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">{item.summary}</p>
                    <div className="mt-3 border-t border-slate-200/80 pt-3">
                      <Link
                        href={cleanPath(item.href)}
                        onClick={() => prepareOpen(item)}
                        className="inline-flex min-h-11 items-center rounded-lg text-sm font-semibold text-blue-600 hover:text-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                      >
                        다시 열기 →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        )}
      </section>

      {undoItem ? (
        <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full bg-slate-950 px-4 py-3 text-sm text-white shadow-lg" role="status" aria-live="polite">
          <span>계산을 삭제했어요.</span>
          <button type="button" onClick={undo} className="min-h-10 rounded-lg px-2 font-bold text-blue-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
            실행취소
          </button>
        </div>
      ) : null}
    </>
  );

}
