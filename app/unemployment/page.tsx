"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";

type Period = "under1" | "1to3" | "3to5" | "5to10" | "over10";

const UPPER_2026 = 68100;
const MIN_HOURLY_2026 = 10320;
const LOWER_HOURLY = MIN_HOURLY_2026 * 0.8;

const won = (value: number) =>
  Math.round(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

const paymentDays: Record<Period, { young: number; senior: number }> = {
  under1: { young: 120, senior: 120 },
  "1to3": { young: 150, senior: 180 },
  "3to5": { young: 180, senior: 210 },
  "5to10": { young: 210, senior: 240 },
  over10: { young: 240, senior: 270 },
};

export default function UnemploymentPage() {
  const [threeMonthWage, setThreeMonthWage] = useState("9000000");
  const [days, setDays] = useState("91");
  const [dailyHours, setDailyHours] = useState("8");
  const [senior, setSenior] = useState(false);
  const [period, setPeriod] = useState<Period>("3to5");

  const result = useMemo(() => {
    const wage = Number(threeMonthWage);
    const totalDays = Number(days);
    const hours = Math.min(8, Math.max(1, Number(dailyHours)));

    if (!(wage > 0) || !(totalDays > 0) || !Number.isFinite(hours)) return null;

    const averageDaily = wage / totalDays;
    const raw = averageDaily * 0.6;
    const lower = LOWER_HOURLY * hours;
    const daily = Math.max(lower, Math.min(UPPER_2026, raw));
    const duration = paymentDays[period][senior ? "senior" : "young"];

    return {
      averageDaily,
      raw,
      lower,
      daily,
      duration,
      total: daily * duration,
      monthlyEquivalent: daily * 30,
      applied:
        raw > UPPER_2026
          ? "상한액 적용"
          : raw < lower
            ? "하한액 적용"
            : "평균임금 60% 적용",
    };
  }, [threeMonthWage, days, dailyHours, senior, period]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">2026 LABOR</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            실업급여 계산기
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            2026년 이직자 기준 구직급여 1일액과 예상 지급일수, 총액을 계산해요.
          </p>
        </header>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-900">
          2026년 기준 1일 상한액은 <b>68,100원</b>이며, 하한액은
          최저임금 10,320원의 80% × 1일 소정근로시간으로 계산합니다.
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <MoneyInput
              label="퇴직 전 3개월 임금 총액"
              value={threeMonthWage}
              onChange={setThreeMonthWage}
              placeholder="9,000,000"
              help="평균임금 산정에 포함되는 임금을 기준으로 입력하세요."
            />

            <label className="mt-5 block">
              <span className="text-sm font-bold text-gray-800">
                해당 3개월의 총 일수
              </span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  value={days}
                  onChange={(event) => setDays(event.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                  일
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                퇴직 전 실제 3개월의 달력 일수를 입력하세요. 보통 89~92일 정도예요.
              </p>
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-gray-800">1일 소정근로시간</span>
              <select
                value={dailyHours}
                onChange={(event) => setDailyHours(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              >
                {[8, 7, 6, 5, 4, 3, 2, 1].map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}시간
                  </option>
                ))}
              </select>
            </label>

            <div className="mt-5">
              <p className="text-sm font-bold text-gray-800">퇴직 당시 연령</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSenior(false)}
                  className={`rounded-xl px-3 py-3 text-sm font-bold ${
                    !senior
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  50세 미만
                </button>
                <button
                  type="button"
                  onClick={() => setSenior(true)}
                  className={`rounded-xl px-3 py-3 text-sm font-bold ${
                    senior
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  50세 이상·장애인
                </button>
              </div>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-gray-800">
                고용보험 가입기간
              </span>
              <select
                value={period}
                onChange={(event) => setPeriod(event.target.value as Period)}
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              >
                <option value="under1">1년 미만</option>
                <option value="1to3">1년 이상 ~ 3년 미만</option>
                <option value="3to5">3년 이상 ~ 5년 미만</option>
                <option value="5to10">5년 이상 ~ 10년 미만</option>
                <option value="over10">10년 이상</option>
              </select>
            </label>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">
                    1일 예상 구직급여
                  </p>
                  <p className="mt-2 text-3xl font-black">{won(result.daily)}원</p>
                  <p className="mt-2 text-sm text-blue-100">{result.applied}</p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">
                      예상 지급일수
                    </p>
                    <p className="mt-2 text-2xl font-black">{result.duration}일</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">30일 환산</p>
                    <p className="mt-2 text-xl font-black">
                      {won(result.monthlyEquivalent)}원
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-gray-200 p-5">
                  <p className="text-xs font-bold text-gray-400">
                    예상 총 구직급여
                  </p>
                  <p className="mt-2 text-2xl font-black">
                    {won(result.total)}원
                  </p>
                </div>

                <div className="mt-4 rounded-2xl bg-gray-50 p-4 text-xs leading-5 text-gray-500">
                  1일 평균임금 약 {won(result.averageDaily)}원 → 60%는{" "}
                  {won(result.raw)}원
                  <br />
                  입력한 근로시간 기준 하한액은 {won(result.lower)}원입니다.
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">
                입력값을 확인해주세요.
              </div>
            )}
          </section>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-lg font-bold">꼭 확인하세요</h2>
          <div className="mt-3 space-y-2 text-sm leading-6 text-gray-500">
            <p>• 이 계산기는 <b>금액 추정용</b>이며 실업급여 수급자격을 판정하지 않습니다.</p>
            <p>• 비자발적 이직 여부, 피보험단위기간 등 실제 수급요건은 고용센터 심사를 거칩니다.</p>
            <p>• 평균임금의 정확한 산정에는 상여금·연차수당 등 개인별 항목이 영향을 줄 수 있습니다.</p>
            <p>• 1년 미만 구간도 실제 수급을 위해서는 법정 피보험단위기간 요건 등을 충족해야 합니다.</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <a
              href="https://www.moel.go.kr"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              고용노동부 확인 →
            </a>
            <a
              href="https://www.ei.go.kr"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              고용보험 확인 →
            </a>
          </div>
        </section>

        <RelatedCalculators currentHref="/unemployment" />
      </div>
    </main>
  );
}
