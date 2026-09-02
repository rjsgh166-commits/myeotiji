"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";

const won = (value: number) =>
  Math.round(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

export default function CompoundPage() {
  const [initial, setInitial] = useState("10000000");
  const [monthly, setMonthly] = useState("500000");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("20");

  const result = useMemo(() => {
    const start = Number(initial);
    const payment = Number(monthly);
    const annual = Number(rate) / 100;
    const y = Number(years);

    if (start < 0 || payment < 0 || annual < 0 || !(y > 0)) return null;

    const totalMonths = Math.round(y * 12);
    const monthlyRate =
      annual === 0 ? 0 : Math.pow(1 + annual, 1 / 12) - 1;

    let balance = start;
    const checkpoints: { year: number; balance: number }[] = [];

    for (let month = 1; month <= totalMonths; month += 1) {
      balance *= 1 + monthlyRate;
      balance += payment;

      if (month % 12 === 0) {
        const year = month / 12;

        if (year === 1 || year === Math.round(y) || year % 5 === 0) {
          checkpoints.push({ year, balance });
        }
      }
    }

    const contributed = start + payment * totalMonths;
    const profit = balance - contributed;

    return {
      balance,
      contributed,
      profit,
      multiple: contributed > 0 ? balance / contributed : 0,
      checkpoints: checkpoints.slice(-6),
    };
  }, [initial, monthly, rate, years]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">INVESTMENT</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            복리 계산기
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            처음 넣는 돈과 매월 투자할 금액을 입력하면 장기 복리 효과를 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <MoneyInput
              label="초기 투자금"
              value={initial}
              onChange={setInitial}
              placeholder="10,000,000"
            />

            <div className="mt-5">
              <MoneyInput
                label="매월 추가 투자금"
                value={monthly}
                onChange={setMonthly}
                placeholder="500,000"
              />
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-gray-800">예상 연 수익률</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={rate}
                  onChange={(event) => setRate(event.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">%</span>
              </div>
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-gray-800">투자기간</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  max="100"
                  step="1"
                  value={years}
                  onChange={(event) => setYears(event.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">년</span>
              </div>
            </label>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">예상 최종 자산</p>
                  <p className="mt-2 break-words text-3xl font-black">
                    {won(result.balance)}원
                  </p>
                  <p className="mt-3 text-sm text-blue-100">
                    납입원금 대비 약 {result.multiple.toFixed(2)}배
                  </p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">총 납입원금</p>
                    <p className="mt-2 text-xl font-black">{won(result.contributed)}원</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">예상 투자수익</p>
                    <p className="mt-2 text-xl font-black">{won(result.profit)}원</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">
                입력값을 확인해주세요.
              </div>
            )}

            <p className="mt-5 text-xs leading-5 text-gray-400">
              연 수익률이 매년 동일하게 유지된다고 가정하고 월 단위로 복리 계산하며,
              매월 투자금은 월말에 납입하는 것으로 계산합니다. 세금·수수료는 제외합니다.
            </p>
          </section>
        </div>

        {result && result.checkpoints.length > 0 && (
          <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h2 className="text-lg font-bold">기간별 예상 자산</h2>
            <div className="mt-4 divide-y divide-gray-100">
              {result.checkpoints.map((item) => (
                <div
                  key={item.year}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <span className="text-sm font-semibold text-gray-500">
                    {item.year}년 후
                  </span>
                  <span className="text-sm font-black">{won(item.balance)}원</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <RelatedCalculators currentHref="/compound" />
      </div>
    </main>
  );
}
