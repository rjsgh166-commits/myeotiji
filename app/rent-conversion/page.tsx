"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";

type Mode = "depositToRent" | "rentToDeposit";

const LEGAL_REFERENCE_RATE = 5.0;
const won = (value: number) =>
  Math.round(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

export default function RentConversionPage() {
  const [mode, setMode] = useState<Mode>("depositToRent");
  const [deposit, setDeposit] = useState("200000000");
  const [monthlyRent, setMonthlyRent] = useState("0");
  const [targetDeposit, setTargetDeposit] = useState("100000000");
  const [targetRent, setTargetRent] = useState("500000");
  const [rate, setRate] = useState("5");

  const result = useMemo(() => {
    const currentDeposit = Number(deposit);
    const currentRent = Number(monthlyRent);
    const conversionRate = Number(rate) / 100;

    if (currentDeposit < 0 || currentRent < 0 || !(conversionRate > 0)) return null;

    if (mode === "depositToRent") {
      const nextDeposit = Number(targetDeposit);
      if (nextDeposit < 0 || nextDeposit > currentDeposit) return null;

      const convertedDeposit = currentDeposit - nextDeposit;
      const addedMonthlyRent = (convertedDeposit * conversionRate) / 12;

      return {
        nextDeposit,
        nextRent: currentRent + addedMonthlyRent,
        convertedDeposit,
        monthlyDifference: addedMonthlyRent,
      };
    }

    const nextRent = Number(targetRent);
    if (nextRent < 0 || nextRent > currentRent) return null;

    const reducedRent = currentRent - nextRent;
    const addedDeposit = (reducedRent * 12) / conversionRate;

    return {
      nextDeposit: currentDeposit + addedDeposit,
      nextRent,
      convertedDeposit: addedDeposit,
      monthlyDifference: reducedRent,
    };
  }, [mode, deposit, monthlyRent, targetDeposit, targetRent, rate]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">← 몇이지? 홈</Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">HOUSING</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">전월세 전환율 계산기</h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            보증금과 월세를 서로 바꿀 때 전환율 기준으로 새 조건을 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setMode("depositToRent")}
            className={`rounded-2xl px-4 py-3 text-sm font-bold ${
              mode === "depositToRent" ? "bg-blue-600 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200"
            }`}
          >
            보증금 ↓ 월세 ↑
          </button>
          <button
            type="button"
            onClick={() => setMode("rentToDeposit")}
            className={`rounded-2xl px-4 py-3 text-sm font-bold ${
              mode === "rentToDeposit" ? "bg-blue-600 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200"
            }`}
          >
            월세 ↓ 보증금 ↑
          </button>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <MoneyInput label="현재 보증금" value={deposit} onChange={setDeposit} />
            <div className="mt-5">
              <MoneyInput label="현재 월세" value={monthlyRent} onChange={setMonthlyRent} />
            </div>

            <div className="mt-5">
              {mode === "depositToRent" ? (
                <MoneyInput label="바꾸려는 보증금" value={targetDeposit} onChange={setTargetDeposit} />
              ) : (
                <MoneyInput label="바꾸려는 월세" value={targetRent} onChange={setTargetRent} />
              )}
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-bold">적용 전월세 전환율</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="0.1"
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
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">변환 후 예상 조건</p>
                  <p className="mt-2 text-2xl font-black">보증금 {won(result.nextDeposit)}원</p>
                  <p className="mt-1 text-2xl font-black">월세 {won(result.nextRent)}원</p>
                </div>

                <div className="mt-3 rounded-2xl border border-gray-200 p-5">
                  <p className="text-xs font-bold text-gray-400">전환된 보증금 규모</p>
                  <p className="mt-2 text-xl font-black">{won(result.convertedDeposit)}원</p>
                </div>

                {Number(rate) > LEGAL_REFERENCE_RATE && mode === "depositToRent" && (
                  <div className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-800">
                    입력한 전환율이 2026년 9월 2일 기준 법정 상한 참고값 5.0%보다 높습니다.
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">입력값을 확인해주세요.</div>
            )}

            <div className="mt-5 rounded-2xl bg-gray-50 p-4 text-xs leading-5 text-gray-500">
              보증금을 월세로 전환할 때 법정 상한은 10%와 한국은행 기준금리 + 2% 중 낮은 비율입니다.
              2026년 9월 2일 현재 기준금리 3.00%이므로 참고 상한은 5.00%입니다.
              기준금리 변동 시 이 값도 달라질 수 있어요.
            </div>
          </section>
        </div>

        <RelatedCalculators currentHref="/rent-conversion" />
      </div>
    </main>
  );
}
