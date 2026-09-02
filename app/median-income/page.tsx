"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";

const MEDIAN_2026: Record<number, number> = {
  1: 2564238,
  2: 4199292,
  3: 5359036,
  4: 6494738,
  5: 7556719,
  6: 8555952,
  7: 9515150,
};

const EXTRA_PERSON = 959198;
const RATIOS = [32, 40, 48, 50, 60, 80, 100, 120, 150, 180, 200];

const won = (value: number) =>
  Math.floor(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

function medianFor(size: number) {
  if (size <= 7) return MEDIAN_2026[Math.max(1, size)];
  return MEDIAN_2026[7] + (size - 7) * EXTRA_PERSON;
}

export default function MedianIncomePage() {
  const [household, setHousehold] = useState("4");
  const [income, setIncome] = useState("4000000");

  const result = useMemo(() => {
    const size = Math.max(1, Math.min(20, Number(household)));
    const amount = Number(income);
    const median = medianFor(size);

    if (!(amount >= 0) || !Number.isFinite(size)) return null;

    const percent = median > 0 ? (amount / median) * 100 : 0;
    const thresholds = RATIOS.map((ratio) => ({
      ratio,
      amount: Math.floor((median * ratio) / 100),
      under: amount <= (median * ratio) / 100,
    }));

    return { size, amount, median, percent, thresholds };
  }, [household, income]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">2026 WELFARE</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            기준 중위소득 몇 %이지?
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            가구원 수와 소득인정액을 입력하면 2026년 기준 중위소득의 몇 %인지 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
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
                  2026년 {result.size}인 가구 기준 중위소득 100%
                </p>
                <p className="mt-2 text-xl font-black">{won(result.median)}원</p>
              </div>
            )}
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">
                    내 소득인정액은
                  </p>
                  <p className="mt-2 text-4xl font-black">
                    중위소득 {result.percent.toFixed(1)}%
                  </p>
                  <p className="mt-3 text-sm text-blue-100">
                    {won(result.amount)}원 ÷ {won(result.median)}원
                  </p>
                </div>

                <div className="mt-5">
                  <h2 className="text-sm font-bold">주요 중위소득 기준 금액</h2>
                  <div className="mt-3 divide-y divide-gray-100 rounded-2xl border border-gray-200 px-4">
                    {result.thresholds.map((item) => (
                      <div
                        key={item.ratio}
                        className="flex items-center justify-between gap-3 py-3"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-14 text-sm font-black">
                            {item.ratio}%
                          </span>
                          {item.under && (
                            <span className="rounded-full bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-600">
                              이하
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-semibold text-gray-600">
                          {won(item.amount)}원
                        </span>
                      </div>
                    ))}
                  </div>
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
          <h2 className="text-lg font-bold">2026년 주요 복지 선정기준</h2>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["생계급여", "32%"],
              ["의료급여", "40%"],
              ["주거급여", "48%"],
              ["교육급여", "50%"],
            ].map(([name, ratio]) => (
              <div key={name} className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm font-bold">{name}</p>
                <p className="mt-1 text-xl font-black text-blue-600">
                  중위 {ratio}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-2 text-xs leading-5 text-gray-500">
            <p>
              ※ 기준 중위소득은 보건복지부가 고시하는 값이며, 실제 복지사업은 가구 특성,
              재산, 부양의무자 기준 등 별도 조건이 있을 수 있습니다.
            </p>
            <p>
              ※ 소득인정액은 단순 세전·세후 월급과 다를 수 있습니다. 이 결과만으로
              지원 대상 여부를 확정할 수 없습니다.
            </p>
            <p>
              ※ 8인 이상 가구는 2026년 기준 1인 증가 시 959,198원씩 추가해 계산합니다.
            </p>
          </div>

          <a
            href="https://www.mohw.go.kr/menu.es?mid=a10708010900"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm font-bold text-blue-600 hover:text-blue-700"
          >
            보건복지부 기준 중위소득 확인 →
          </a>
        </section>

        <RelatedCalculators currentHref="/median-income" />
      </div>
    </main>
  );
}
