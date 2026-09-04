"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  const signature = useMemo(
    () => JSON.stringify({ safeHref, primaryValue, summary, state: state ?? null }),
    [safeHref, primaryValue, summary, state],
  );
  const [savedId, setSavedId] = useState<string | null>(null);
  const [savedSignature, setSavedSignature] = useState<string | null>(null);
  const [renameOpen, setRenameOpen] = useState(false);
  const [name, setName] = useState(title);
  const renameTriggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (savedSignature !== signature) {
      setSavedId(null);
      setRenameOpen(false);
    }
  }, [signature, savedSignature]);

  useEffect(() => setName(title), [title]);

  useEffect(() => {
    if (!renameOpen) return;
    const previousActive = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    window.setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setRenameOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("aria-hidden"));
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.setTimeout(() => {
        if (renameTriggerRef.current) renameTriggerRef.current.focus();
        else previousActive?.focus();
      }, 0);
    };
  }, [renameOpen]);

  const saveNow = () => {
    const now = Date.now();
    const nextItem: SavedCalculation = {
      id: makeId(safeHref),
      title,
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
    setSavedId(nextItem.id);
    setSavedSignature(signature);
    setName(title);
  };

  const rename = () => {
    if (!savedId) return;
    const trimmedName = name.trim() || title;
    const next = readSaved().map((item) =>
      item.id === savedId ? { ...item, title: trimmedName } : item,
    );
    localStorage.setItem(SAVED_CALCULATIONS_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("myeotiji:saved-updated"));
    trackEvent("saved_calculation_rename", {
      calculator: calculatorFromHref(safeHref),
    });
    setRenameOpen(false);
  };

  const isSaved = Boolean(savedId && savedSignature === signature);
  const dialogTitleId = `saved-name-title-${savedId ?? "current"}`;
  const inputId = `saved-name-input-${savedId ?? "current"}`;
  const helpId = `saved-name-help-${savedId ?? "current"}`;

  return (
    <>
      <span className="inline-flex items-center gap-1.5" aria-live="polite">
        <button
          type="button"
          onClick={() => {
            if (isSaved) return;
            saveNow();
          }}
          className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 ${
            isSaved
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
          }`}
        >
          <span aria-hidden="true">{isSaved ? "✓" : "☆"}</span>
          <span>{isSaved ? "저장됨" : "저장"}</span>
        </button>
        {isSaved ? (
          <button
            ref={renameTriggerRef}
            type="button"
            onClick={() => {
              setName(title);
              setRenameOpen(true);
            }}
            className="min-h-11 rounded-lg px-2 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
            aria-haspopup="dialog"
          >
            이름 바꾸기
          </button>
        ) : null}
      </span>

      {renameOpen ? (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/40 p-4 sm:items-center"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setRenameOpen(false);
          }}
        >
          <div
            ref={dialogRef}
            className="w-full max-w-md rounded-3xl bg-white p-5 shadow-2xl sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby={dialogTitleId}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-blue-600">내 계산함</p>
                <h3 id={dialogTitleId} className="mt-1 text-lg font-bold text-slate-900">
                  저장한 계산 이름 바꾸기
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setRenameOpen(false)}
                className="min-h-11 min-w-11 rounded-lg px-2 py-1 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                aria-label="이름 바꾸기 창 닫기"
              >
                <span aria-hidden="true">✕</span>
              </button>
            </div>

            <label htmlFor={inputId} className="mt-5 block text-sm font-semibold text-slate-700">
              계산 이름
            </label>
            <input
              ref={inputRef}
              id={inputId}
              value={name}
              maxLength={40}
              onChange={(event) => setName(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") rename();
              }}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-semibold text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
              placeholder="예: A회사 이직 제안"
              aria-describedby={helpId}
            />
            <p id={helpId} className="mt-2 text-xs leading-5 text-slate-500">
              저장은 이미 완료됐어요. 이름만 바꾸면 됩니다.
            </p>

            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => setRenameOpen(false)}
                className="min-h-11 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-100"
              >
                취소
              </button>
              <button
                type="button"
                onClick={rename}
                className="min-h-11 flex-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
              >
                이름 저장
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
