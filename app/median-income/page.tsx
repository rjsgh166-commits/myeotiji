"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";

type MedianYear = 2026 | 2027;

const MEDIAN_BY_YEAR: Record<
  MedianYear,
  { values: Record<number, number>; extraPerson: number; label: string }
> = {
  2026: {
    values: {
      1: 2_564_238,
      2: 4_199_292,
      3: 5_359_036,
      4: 6_494_738,
      5: 7_556_719,
      6: 8_555_952,
      7: 9_515_150,
    },
    extraPerson: 959_198,
    label: "현재 적용",
  },
  2027: {
    values: {
      1: 2_736_042,
      2: 4_480_645,
      3: 5_718_091,
      4: 6_929_885,
      5: 8_063_019,
      6: 9_129_201,
      7: 10_152_665,
    },
    extraPerson: 1_023_464,
    label: "2027.1.1 적용",
  },
};

const RATIOS = [32, 40, 48, 50, 60, 80, 100, 120, 150, 180, 200];

const won = (value: number) =>
  Math.round(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

function medianFor(year: MedianYear, size: number) {
  const reference = MEDIAN_BY_YEAR[year];
  if (size <= 7) return reference.values[Math.max(1, size)];
  return reference.values[7] + (size - 7) * reference.extraPerson;
}

export default function MedianIncomePage() {
  const [medianYear, setMedianYear] = useState<MedianYear>(2026);
  const [household, setHousehold] = useState("4");
  const [income, setIncome] = useState("4000000");

  const reference = MEDIAN_BY_YEAR[medianYear];

  const result = useMemo(() => {
    const size = Math.max(1, Math.min(20, Number(household)));
    const amount = Number(income);
    const median = medianFor(medianYear, size);

    if (!(amount >= 0) || !Number.isFinite(size)) return null;

    const percent = median > 0 ? (amount / median) * 100 : 0;
    const thresholds = RATIOS.map((ratio) => ({
      ratio,
      amount: Math.round((median * ratio) / 100),
      under: amount <= (median * ratio) / 100,
    }));

    return { size, amount, median, percent, thresholds };
  }, [medianYear, household, income]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">2026 · 2027 WELFARE</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            기준 중위소득 몇 %이지?
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            가구원 수와 소득인정액을 입력하고 2026년 현재 기준 또는 2027년 확정 기준으로
            중위소득의 몇 %인지 계산해요.
          </p>
        </header>

        <section className="mt-7 rounded-3xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black tracking-wider text-blue-600">기준 연도 선택</p>
              <p className="mt-1 text-sm text-blue-800">
                2027년 기준 중위소득은 확정됐으며 2027년부터 적용돼요.
              </p>
            </div>
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
              {reference.label}
            </span>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {([2026, 2027] as const).map((year) => {
              const active = medianYear === year;
              const fourPerson = MEDIAN_BY_YEAR[year].values[4];
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => setMedianYear(year)}
                  className={`rounded-2xl border px-4 py-3 text-left transition ${
                    active
                      ? "border-blue-600 bg-white ring-2 ring-blue-100"
                      : "border-blue-100 bg-blue-50/50 hover:bg-white"
                  }`}
                >
                  <span className="block text-sm font-black text-gray-900">{year}년 기준</span>
                  <span className="mt-1 block text-xs font-semibold text-gray-500">
                    4인 가구 100% · {fourPerson.toLocaleString("ko-KR")}원
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <label className="block">
              <span className="text-sm font-bold text-gray-800">가구원 수</span>
              <select
                value={household}
                onChange={(event) => setHousehold(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              >
                {Array.from({ length: 10 }, (_, index) => index + 1).map((size) => (
                  <option key={size} value={size}>
                    {size}인 가구
                  </option>
                ))}
              </select>
            </label>

            <div className="mt-5">
              <MoneyInput
                label="월 소득인정액"
                value={income}
                onChange={setIncome}
                placeholder="4,000,000"
                help="단순 월급이 아니라 복지제도에서 사용하는 '소득인정액'을 입력하는 것이 가장 정확합니다."
              />
            </div>

            {result && (
              <div className="mt-5 rounded-2xl bg-gray-50 p-5">
                <p className="text-xs font-bold text-gray-400">
                  {medianYear}년 {result.size}인 가구 기준 중위소득 100%
                </p>
                <p className="mt-2 text-xl font-black">{won(result.median)}원</p>
              </div>
            )}
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">내 소득인정액은</p>
                  <p className="mt-2 text-4xl font-black">중위소득 {result.percent.toFixed(1)}%</p>
                  <p className="mt-3 text-sm text-blue-100">
                    {won(result.amount)}원 ÷ {won(result.median)}원
                  </p>
                </div>

                <div className="mt-5">
                  <h2 className="text-sm font-bold">주요 중위소득 기준 금액</h2>
                  <div className="mt-3 divide-y divide-gray-100 rounded-2xl border border-gray-200 px-4">
                    {result.thresholds.map((item) => (
                      <div key={item.ratio} className="flex items-center justify-between gap-3 py-3">
                        <div className="flex items-center gap-2">
                          <span className="w-14 text-sm font-black">{item.ratio}%</span>
                          {item.under && (
                            <span className="rounded-full bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-600">
                              이하
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-semibold text-gray-600">{won(item.amount)}원</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">입력값을 확인해주세요.</div>
            )}
          </section>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-lg font-bold">{medianYear}년 주요 복지 선정기준</h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["생계급여", "32%"],
              ["의료급여", "40%"],
              ["주거급여", "48%"],
              ["교육급여", "50%"],
            ].map(([name, ratio]) => (
              <div key={name} className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm font-bold">{name}</p>
                <p className="mt-1 text-xl font-black text-blue-600">중위 {ratio}</p>
              </div>
            ))}
          </div>

          {medianYear === 2027 && (
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-800">
              2027년 기준은 2027년 1월 1일부터 적용됩니다. 2026년 중 신청·판정은 현재 적용 중인 2026년 기준을 확인하세요.
            </div>
          )}

          <div className="mt-5 space-y-2 text-xs leading-5 text-gray-500">
            <p>
              ※ 기준 중위소득은 보건복지부가 정하는 값이며, 실제 복지사업은 가구 특성,
              재산, 부양의무자 기준 등 별도 조건이 있을 수 있습니다.
            </p>
            <p>
              ※ 소득인정액은 단순 세전·세후 월급과 다를 수 있습니다. 이 결과만으로 지원 대상 여부를 확정할 수 없습니다.
            </p>
            <p>
              ※ 8인 이상 가구는 {medianYear}년 기준 7인 가구 금액에 7인·6인 가구 차액인
              {" "}{reference.extraPerson.toLocaleString("ko-KR")}원을 가구원 1명마다 더해 계산합니다.
            </p>
          </div>

          <a
            href="https://www.mohw.go.kr/board.es?act=view&bid=0027&list_no=1491453&mid=a10503010100&nPage=1&tag="
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            보건복지부 2027 기준 중위소득 발표 확인 →
          </a>
        </section>

        <RelatedCalculators currentHref="/median-income" />
      </div>
    </main>
  );
}
