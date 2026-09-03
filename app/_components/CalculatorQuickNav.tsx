"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  CALCULATOR_BY_HREF,
  CALCULATORS,
  RECENT_CALCULATORS_KEY,
  searchCalculators,
} from "../_lib/calculators";

function saveRecentCalculator(pathname: string) {
  try {
    const raw = window.localStorage.getItem(RECENT_CALCULATORS_KEY);
    const current = raw ? (JSON.parse(raw) as string[]) : [];
    const next = [pathname, ...current.filter((href) => href !== pathname)].slice(0, 4);
    window.localStorage.setItem(RECENT_CALCULATORS_KEY, JSON.stringify(next));
  } catch {
    // 저장이 차단된 브라우저에서는 최근 사용 기능만 조용히 건너뜁니다.
  }
}

export default function CalculatorQuickNav() {
  const pathname = usePathname();
  const calculator = CALCULATOR_BY_HREF[pathname];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return CALCULATORS.slice(0, 8);
    return searchCalculators(query, 10);
  }, [query]);

  useEffect(() => {
    if (!calculator) return;
    saveRecentCalculator(pathname);
  }, [calculator, pathname]);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 50);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!calculator) return null;

  return (
    <>
      <div className="relative z-40 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-5">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              className="shrink-0 text-lg font-black tracking-tight text-gray-950"
            >
              몇이지?
            </Link>
            <span className="hidden text-gray-300 sm:inline">/</span>
            <span className="hidden truncate text-sm font-semibold text-gray-500 sm:block">
              {calculator.icon} {calculator.shortTitle}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              setOpen(true);
              setQuery("");
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-3.5 py-2 text-sm font-bold text-gray-700 transition hover:bg-gray-200"
          >
            <span aria-hidden="true">🔎</span>
            <span>계산기 찾기</span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/35 px-4 pt-[10vh] backdrop-blur-[2px]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="계산기 찾기"
            className="mx-auto max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-gray-100 p-4">
              <span className="text-xl" aria-hidden="true">🔎</span>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="월급, 물타기, 디데이, 평수..."
                className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-1 text-sm font-bold text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                aria-label="닫기"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {!query.trim() && (
                <p className="px-3 pb-2 pt-1 text-xs font-bold text-gray-400">
                  자주 쓰는 계산기
                </p>
              )}

              {results.length > 0 ? (
                results.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-3 transition hover:bg-gray-50 ${
                      item.href === pathname ? "bg-blue-50" : ""
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl">
                      {item.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-black text-gray-900">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-gray-500">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                ))
              ) : (
                <div className="px-4 py-10 text-center text-sm text-gray-500">
                  일치하는 계산기가 없어요.
                  <p className="mt-1 text-xs text-gray-400">
                    다른 단어로 검색해보세요.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
