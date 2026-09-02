"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import RelatedCalculators from "../_components/RelatedCalculators";
import {
  addMonths,
  addYears,
  calendarDiff,
  formatKoreanDate,
  fullMonthsBetween,
  fullYearsBetween,
  parseISODate,
  todayParts,
  toUtcMs,
} from "../_lib/dateUtils";

function annualDaysForCompletedYears(years: number) {
  if (years < 1) return 0;
  return Math.min(25, 15 + Math.floor((years - 1) / 2));
}

export default function AnnualLeavePage() {
  const today = todayParts();
  const todayValue = `${today.year}-${String(today.month).padStart(2, "0")}-${String(today.day).padStart(2, "0")}`;

  const [hireDate, setHireDate] = useState("");
  const [referenceDate, setReferenceDate] = useState(todayValue);
  const [attendance80, setAttendance80] = useState(true);

  const result = useMemo(() => {
    const hire = parseISODate(hireDate);
    const reference = parseISODate(referenceDate);

    if (!hire || !reference || toUtcMs(hire) > toUtcMs(reference)) return null;

    const service = calendarDiff(hire, reference);
    const completedYears = fullYearsBetween(hire, reference);
    const completedMonths = fullMonthsBetween(hire, reference);

    if (completedYears < 1) {
      const generated = Math.min(11, completedMonths);
      const nextAccrual =
        generated < 11 ? addMonths(hire, generated + 1) : addYears(hire, 1);

      return {
        service,
        current: generated,
        secondary: Math.max(0, 11 - generated),
        secondaryLabel: "첫 1년 내 추가 발생 가능",
        type: "monthly" as const,
        nextDate: nextAccrual,
        completedYears,
      };
    }

    if (!attendance80) {
      return {
        service,
        current: null,
        secondary: null,
        secondaryLabel: "",
        type: "lowAttendance" as const,
        nextDate: addYears(hire, completedYears + 1),
        completedYears,
      };
    }

    const current = annualDaysForCompletedYears(completedYears);

    return {
      service,
      current,
      secondary: Math.max(0, current - 15),
      secondaryLabel: "장기근속 가산분",
      type: "annual" as const,
      nextDate: addYears(hire, completedYears + 1),
      completedYears,
    };
  }, [hireDate, referenceDate, attendance80]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">WORK</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            연차 발생일수 계산기
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            입사일 기준으로 현재까지 발생한 법정 연차를 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <label className="block">
              <span className="text-sm font-bold">입사일</span>
              <input
                type="date"
                value={hireDate}
                onChange={(e) => setHireDate(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-base outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              />
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold">계산 기준일</span>
              <input
                type="date"
                value={referenceDate}
                onChange={(e) => setReferenceDate(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-base outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              />
            </label>

            <label className="mt-5 flex items-start gap-3 rounded-2xl bg-gray-50 p-4">
              <input
                type="checkbox"
                checked={attendance80}
                onChange={(e) => setAttendance80(e.target.checked)}
                className="mt-1 h-4 w-4"
              />
              <span>
                <span className="block text-sm font-bold">최근 1년 출근율 80% 이상</span>
                <span className="mt-1 block text-xs leading-5 text-gray-500">
                  1년 이상 근무자의 15일 이상 연차 계산에 필요한 조건이에요.
                </span>
              </span>
            </label>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">현재 근속기간</p>
                  <p className="mt-2 text-3xl font-black">
                    {result.service.years}년 {result.service.months}개월 {result.service.days}일
                  </p>
                </div>

                {result.current !== null ? (
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-gray-200 p-5">
                      <p className="text-xs font-bold text-gray-400">
                        {result.type === "monthly" ? "현재까지 월 개근 발생" : "현재 연차 부여 기준"}
                      </p>
                      <p className="mt-2 text-3xl font-black">{result.current}일</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 p-5">
                      <p className="text-xs font-bold text-gray-400">{result.secondaryLabel}</p>
                      <p className="mt-2 text-3xl font-black">{result.secondary}일</p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-800">
                    출근율이 80% 미만이면 1개월 개근 시 1일씩 발생할 수 있어 실제 개근
                    기록이 필요합니다. 이 경우 단순 날짜만으로 정확한 일수는 계산할 수 없어요.
                  </div>
                )}

                <div className="mt-3 rounded-2xl bg-gray-50 p-5">
                  <p className="text-xs font-bold text-gray-400">다음 기준일</p>
                  <p className="mt-2 text-lg font-black">{formatKoreanDate(result.nextDate)}</p>
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">
                입사일과 기준일을 입력해주세요.
              </div>
            )}
          </section>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-lg font-bold">계산 기준</h2>
          <div className="mt-3 space-y-2 text-sm leading-6 text-gray-500">
            <p>• 1년 미만 근로자는 1개월 개근 시 1일, 최대 11일이 발생하는 것으로 계산합니다.</p>
            <p>• 1년간 출근율 80% 이상이면 1년 경과 후 15일이 발생합니다.</p>
            <p>• 3년 이상 계속 근로 시 최초 1년을 초과한 근속연수 매 2년마다 1일이 가산되며 최대 25일입니다.</p>
            <p>• 상시근로자 5인 이상, 주 15시간 이상 사업장 기준이며 회사가 회계연도 기준으로 운영하면 실제 부여 방식은 달라질 수 있습니다.</p>
            <p>• 계산 결과는 입사일 기준 법정 발생 구조를 보여주며, 이미 사용한 연차·소멸한 연차는 별도로 반영하지 않습니다.</p>
          </div>
        </section>

        <RelatedCalculators currentHref="/annual-leave" />
      </div>
    </main>
  );
}
