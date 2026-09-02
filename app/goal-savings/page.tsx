"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";

const won = (value: number) =>
  Math.round(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

export default function GoalSavingsPage() {
  const [target, setTarget] = useState("100000000");
  const [current, setCurrent] = useState("10000000");
  const [monthly, setMonthly] = useState("1000000");
  const [rate, setRate] = useState("4");

  const result = useMemo(() => {
    const goal = Number(target);
    const start = Number(current);
    const payment = Number(monthly);
    const monthlyRate = Number(rate) / 100 / 12;

    if (!(goal > 0) || start < 0 || payment < 0 || monthlyRate < 0) return null;

    if (start >= goal) {
      return { months: 0, balance: start, contributions: start, profit: 0 };
    }

    if (payment === 0 && monthlyRate === 0) return { unreachable: true as const };

    let balance = start;
    let months = 0;
    const maxMonths = 1200;

    while (balance < goal && months < maxMonths) {
      balance *= 1 + monthlyRate;
      balance += payment;
      months += 1;
    }

    if (balance < goal) return { unreachable: true as const };

    const contributions = start + payment * months;
    return {
      months,
      balance,
      contributions,
      profit: balance - contributions,
    };
  }, [target, current, monthly, rate]);

  const targetDate = useMemo(() => {
    if (!result || "unreachable" in result || result.months <= 0) return null;
    const date = new Date();
    date.setMonth(date.getMonth() + result.months);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
  }, [result]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">← 몇이지? 홈</Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">SAVINGS</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">목표금액 모으기 계산기</h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            현재 가진 돈과 매월 모을 금액을 입력하면 목표까지 걸리는 시간을 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <MoneyInput label="목표금액" value={target} onChange={setTarget} placeholder="100,000,000" />
            <div className="mt-5">
              <MoneyInput label="현재 모은 금액" value={current} onChange={setCurrent} placeholder="10,000,000" />
            </div>
            <div className="mt-5">
              <MoneyInput label="매월 추가 저축·투자" value={monthly} onChange={setMonthly} placeholder="1,000,000" />
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-bold">예상 연 수익률</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">%</span>
              </div>
            </label>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result && !("unreachable" in result) ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">목표까지</p>
                  <p className="mt-2 text-3xl font-black">
                    {Math.floor(result.months / 12)}년 {result.months % 12}개월
                  </p>
                  {targetDate && <p className="mt-2 text-sm text-blue-100">예상 달성시점 {targetDate}</p>}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">총 투입금</p>
                    <p className="mt-2 text-xl font-black">{won(result.contributions)}원</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">예상 수익</p>
                    <p className="mt-2 text-xl font-black">{won(result.profit)}원</p>
                  </div>
                </div>
              </>
            ) : result && "unreachable" in result ? (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-800">
                현재 조건으로는 100년 안에 목표금액에 도달하지 못해요. 매월 저축액이나 예상 수익률을 높여보세요.
              </div>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">입력값을 확인해주세요.</div>
            )}

            <p className="mt-5 text-xs leading-5 text-gray-400">
              매월 말에 추가 납입하고 수익률이 일정하다고 가정한 단순 시뮬레이션입니다. 실제 투자수익은 변동될 수 있어요.
            </p>
          </section>
        </div>

        <RelatedCalculators currentHref="/goal-savings" />
      </div>
    </main>
  );
}
