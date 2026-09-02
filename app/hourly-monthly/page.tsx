"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";

type Mode = "hourlyToMonthly" | "monthlyToHourly";

const MIN_WAGE_2026 = 10320;
const MONTHLY_WEEKS = 365 / 7 / 12;

const won = (value: number) =>
  Math.round(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

function paidHolidayHours(weeklyHours: number) {
  if (weeklyHours < 15) return 0;
  return Math.min(8, (weeklyHours / 40) * 8);
}

export default function HourlyMonthlyPage() {
  const [mode, setMode] = useState<Mode>("hourlyToMonthly");
  const [hourly, setHourly] = useState("10320");
  const [monthly, setMonthly] = useState("2156880");
  const [weeklyHours, setWeeklyHours] = useState("40");
  const [includeWeeklyHoliday, setIncludeWeeklyHoliday] = useState(true);

  const result = useMemo(() => {
    const week = Math.max(0, Math.min(40, Number(weeklyHours)));
    const holiday = includeWeeklyHoliday ? paidHolidayHours(week) : 0;
    const monthlyHours = Math.round((week + holiday) * MONTHLY_WEEKS);

    if (!(week > 0) || !(monthlyHours > 0)) return null;

    if (mode === "hourlyToMonthly") {
      const h = Number(hourly);
      if (!(h >= 0)) return null;

      return {
        hourly: h,
        monthly: h * monthlyHours,
        monthlyHours,
        holiday,
        weeklyPaid: h * (week + holiday),
      };
    }

    const m = Number(monthly);
    if (!(m >= 0)) return null;

    return {
      hourly: m / monthlyHours,
      monthly: m,
      monthlyHours,
      holiday,
      weeklyPaid: (m / monthlyHours) * (week + holiday),
    };
  }, [mode, hourly, monthly, weeklyHours, includeWeeklyHoliday]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">2026 WORK</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            시급 ↔ 월급 변환기
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            주당 근로시간과 주휴시간을 반영해 시급과 월급을 서로 변환해요.
          </p>
        </header>

        <div className="mt-8 grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setMode("hourlyToMonthly")}
            className={`rounded-2xl px-4 py-3 text-sm font-bold ${
              mode === "hourlyToMonthly" ? "bg-blue-600 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200"
            }`}
          >
            시급 → 월급
          </button>
          <button
            type="button"
            onClick={() => setMode("monthlyToHourly")}
            className={`rounded-2xl px-4 py-3 text-sm font-bold ${
              mode === "monthlyToHourly" ? "bg-blue-600 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200"
            }`}
          >
            월급 → 시급
          </button>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {mode === "hourlyToMonthly" ? (
              <MoneyInput label="시급" value={hourly} onChange={setHourly} placeholder="10,320" />
            ) : (
              <MoneyInput label="월급" value={monthly} onChange={setMonthly} placeholder="2,156,880" />
            )}

            <label className="mt-5 block">
              <span className="text-sm font-bold text-gray-800">주 소정근로시간</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  max="40"
                  step="1"
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-14 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">시간</span>
              </div>
            </label>

            <label className="mt-5 flex items-start gap-3 rounded-2xl bg-gray-50 p-4">
              <input
                type="checkbox"
                checked={includeWeeklyHoliday}
                onChange={(e) => setIncludeWeeklyHoliday(e.target.checked)}
                className="mt-1 h-4 w-4"
              />
              <span>
                <span className="block text-sm font-bold">주휴시간 포함</span>
                <span className="mt-1 block text-xs leading-5 text-gray-500">
                  주 15시간 이상이고 개근 등 요건을 충족한다고 가정합니다.
                </span>
              </span>
            </label>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">
                    {mode === "hourlyToMonthly" ? "예상 월급" : "환산 시급"}
                  </p>
                  <p className="mt-2 text-3xl font-black">
                    {mode === "hourlyToMonthly" ? `${won(result.monthly)}원` : `${won(result.hourly)}원`}
                  </p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">월 환산시간</p>
                    <p className="mt-2 text-2xl font-black">{result.monthlyHours}시간</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">주휴시간</p>
                    <p className="mt-2 text-2xl font-black">{result.holiday.toFixed(1)}시간</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-xs leading-5 text-gray-500">
                  2026년 최저임금은 시간당 10,320원입니다. 주 40시간, 유급주휴 8시간을
                  포함한 월 환산액은 2,156,880원(209시간 기준)입니다.
                </div>

                {result.hourly < MIN_WAGE_2026 && (
                  <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-800">
                    환산 시급이 2026년 최저임금 10,320원보다 낮습니다. 실제 최저임금
                    판단에는 산입범위와 근로조건을 함께 확인해야 합니다.
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">입력값을 확인해주세요.</div>
            )}
          </section>
        </div>

        <RelatedCalculators currentHref="/hourly-monthly" />
      </div>
    </main>
  );
}
