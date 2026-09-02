"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";

const won = (value: number) =>
  Math.round(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

export default function SavingsInterestPage() {
  const [monthly, setMonthly] = useState("500000");
  const [months, setMonths] = useState("12");
  const [rate, setRate] = useState("3.5");
  const [taxRate, setTaxRate] = useState("15.4");

  const result = useMemo(() => {
    const payment = Number(monthly);
    const n = Math.max(1, Math.round(Number(months)));
    const annual = Number(rate) / 100;
    const tax = Number(taxRate) / 100;

    if (payment < 0 || !(n > 0) || annual < 0 || tax < 0 || tax > 1) return null;

    const principal = payment * n;
    const pretaxInterest = payment * (annual / 12) * (n * (n + 1)) / 2;
    const taxAmount = pretaxInterest * tax;
    const afterTaxInterest = pretaxInterest - taxAmount;
    const maturity = principal + afterTaxInterest;

    return { principal, pretaxInterest, taxAmount, afterTaxInterest, maturity };
  }, [monthly, months, rate, taxRate]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">← 몇이지? 홈</Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">SAVINGS</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">적금 이자 계산기</h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            매달 넣는 금액과 금리를 입력하면 만기 때 받을 예상 금액을 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <MoneyInput label="매월 납입액" value={monthly} onChange={setMonthly} />

            <label className="mt-5 block">
              <span className="text-sm font-bold">적금 기간</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  max="120"
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-14 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">개월</span>
              </div>
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold">연 금리</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">%</span>
              </div>
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold">이자 세율</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={taxRate}
                  onChange={(e) => setTaxRate(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">%</span>
              </div>
              <p className="mt-2 text-xs text-gray-400">일반과세 예시 15.4%, 비과세 상품이면 0%로 입력하세요.</p>
            </label>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">예상 만기 수령액</p>
                  <p className="mt-2 text-3xl font-black">{won(result.maturity)}원</p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">납입원금</p>
                    <p className="mt-2 text-xl font-black">{won(result.principal)}원</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">세전 이자</p>
                    <p className="mt-2 text-xl font-black">{won(result.pretaxInterest)}원</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">예상 세금</p>
                    <p className="mt-2 text-xl font-black">{won(result.taxAmount)}원</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">세후 이자</p>
                    <p className="mt-2 text-xl font-black">{won(result.afterTaxInterest)}원</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">입력값을 확인해주세요.</div>
            )}

            <p className="mt-5 text-xs leading-5 text-gray-400">
              매월 같은 금액을 납입하고 각 회차가 남은 기간만큼 단리로 이자를 받는 일반 정기적금 방식의 예상값입니다.
              실제 금융기관은 납입일·일수·우대금리·세제조건에 따라 결과가 달라질 수 있습니다.
            </p>
          </section>
        </div>

        <RelatedCalculators currentHref="/savings-interest" />
      </div>
    </main>
  );
}
