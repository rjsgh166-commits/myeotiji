"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import RelatedCalculators from "../_components/RelatedCalculators";
import {
  addDays,
  diffDays,
  formatKoreanDate,
  parseISODate,
  todayParts,
  toUtcMs,
} from "../_lib/dateUtils";

type Mode = "lmp" | "conception";

export default function DueDatePage() {
  const [mode, setMode] = useState<Mode>("lmp");
  const [date, setDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");

  const result = useMemo(() => {
    const input = parseISODate(date);
    if (!input) return null;

    const cycle = Math.max(20, Math.min(45, Number(cycleLength) || 28));
    const pregnancyStart =
      mode === "lmp" ? input : addDays(input, -14);
    const due =
      mode === "lmp"
        ? addDays(input, 280 + (cycle - 28))
        : addDays(input, 266);

    const today = todayParts();
    const gestDays = diffDays(pregnancyStart, today);
    const remaining = diffDays(today, due);
    const milestones = [
      ["12주", addDays(pregnancyStart, 12 * 7)],
      ["20주", addDays(pregnancyStart, 20 * 7)],
      ["28주", addDays(pregnancyStart, 28 * 7)],
      ["37주", addDays(pregnancyStart, 37 * 7)],
    ] as const;

    return {
      due,
      pregnancyStart,
      gestDays,
      remaining,
      milestones,
      validTimeline: gestDays >= 0 && toUtcMs(today) <= toUtcMs(addDays(due, 21)),
    };
  }, [mode, date, cycleLength]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">← 몇이지? 홈</Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">DATE</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">출산 예정일 계산기</h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            마지막 생리 시작일이나 수정일을 기준으로 예상 출산일과 임신 주수를 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setMode("lmp")}
            className={`rounded-2xl px-4 py-3 text-sm font-bold ${
              mode === "lmp" ? "bg-blue-600 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200"
            }`}
          >
            마지막 생리 시작일 기준
          </button>
          <button
            type="button"
            onClick={() => setMode("conception")}
            className={`rounded-2xl px-4 py-3 text-sm font-bold ${
              mode === "conception" ? "bg-blue-600 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200"
            }`}
          >
            수정일 기준
          </button>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <label className="block">
              <span className="text-sm font-bold">{mode === "lmp" ? "마지막 생리 시작일" : "예상 수정일"}</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-base outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              />
            </label>

            {mode === "lmp" && (
              <label className="mt-5 block">
                <span className="text-sm font-bold">평균 생리주기</span>
                <div className="relative mt-2">
                  <input
                    type="number"
                    min="20"
                    max="45"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(e.target.value)}
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">일</span>
                </div>
              </label>
            )}
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">예상 출산 예정일</p>
                  <p className="mt-2 text-3xl font-black">{formatKoreanDate(result.due)}</p>
                </div>

                {result.validTimeline && (
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-gray-200 p-5">
                      <p className="text-xs font-bold text-gray-400">현재 임신 주수</p>
                      <p className="mt-2 text-2xl font-black">
                        {Math.floor(result.gestDays / 7)}주 {result.gestDays % 7}일
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 p-5">
                      <p className="text-xs font-bold text-gray-400">예정일까지</p>
                      <p className="mt-2 text-2xl font-black">
                        {result.remaining >= 0 ? `D-${result.remaining}` : `D+${Math.abs(result.remaining)}`}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-4 divide-y divide-gray-100 rounded-2xl border border-gray-200 px-4">
                  {result.milestones.map(([label, milestone]) => (
                    <div key={label} className="flex items-center justify-between gap-4 py-3 text-sm">
                      <span className="font-bold">{label}</span>
                      <span className="text-gray-500">{formatKoreanDate(milestone)}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">기준 날짜를 입력해주세요.</div>
            )}

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-800">
              일반적인 40주 임신을 기준으로 한 예상값이며 의료적 진단이 아닙니다. 생리주기, 배란일, 초음파 측정 등에 따라 실제 예정일은 달라질 수 있으므로 산부인과 진료 결과를 우선하세요.
            </div>
          </section>
        </div>

        <RelatedCalculators currentHref="/due-date" />
      </div>
    </main>
  );
}
