"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";

type Mode = "deduct" | "add" | "grossUp";

const won = (value: number) =>
  Math.round(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

export default function FeePage() {
  const [mode, setMode] = useState<Mode>("deduct");
  const [amount, setAmount] = useState("100000");
  const [rate, setRate] = useState("3.3");
  const [fixedFee, setFixedFee] = useState("0");

  const result = useMemo(() => {
    const base = Number(amount);
    const r = Number(rate) / 100;
    const fixed = Number(fixedFee);

    if (base < 0 || r < 0 || fixed < 0 || r >= 1) return null;

    if (mode === "grossUp") {
      const gross = (base + fixed) / (1 - r);
      const fee = gross - base;
      return { fee, gross, net: base, total: gross };
    }

    const fee = base * r + fixed;

    if (mode === "deduct") {
      return { fee, gross: base, net: Math.max(0, base - fee), total: base };
    }

    return { fee, gross: base, net: base, total: base + fee };
  }, [mode, amount, rate, fixedFee]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">← 몇이지? 홈</Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">LIFE</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">수수료 계산기</h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            판매, 결제, 플랫폼 등 다양한 수수료를 빠르게 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-2 sm:grid-cols-3">
          {[
            ["deduct", "수수료 차감"],
            ["add", "수수료 추가"],
            ["grossUp", "목표 실수령 역산"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id as Mode)}
              className={`rounded-2xl px-3 py-3 text-sm font-bold ${
                mode === id ? "bg-blue-600 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <MoneyInput
              label={mode === "grossUp" ? "받고 싶은 실수령액" : "기준 금액"}
              value={amount}
              onChange={setAmount}
            />

            <label className="mt-5 block">
              <span className="text-sm font-bold">수수료율</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="0"
                  max="99.99"
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">%</span>
              </div>
            </label>

            <div className="mt-5">
              <MoneyInput label="건당 고정 수수료" value={fixedFee} onChange={setFixedFee} />
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">
                    {mode === "deduct" ? "수수료 차감 후 실수령액" : mode === "add" ? "수수료 포함 총 결제액" : "필요한 판매·청구 금액"}
                  </p>
                  <p className="mt-2 text-3xl font-black">
                    {won(mode === "deduct" ? result.net : result.total)}원
                  </p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">수수료</p>
                    <p className="mt-2 text-xl font-black">{won(result.fee)}원</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">실수령액</p>
                    <p className="mt-2 text-xl font-black">{won(result.net)}원</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">입력값을 확인해주세요.</div>
            )}

            <p className="mt-5 text-xs leading-5 text-gray-400">
              실제 플랫폼은 부가세, 결제수단, 정산방식 등에 따라 수수료 산정 기준이 다를 수 있습니다.
            </p>
          </section>
        </div>

        <RelatedCalculators currentHref="/fee" />
      </div>
    </main>
  );
}
