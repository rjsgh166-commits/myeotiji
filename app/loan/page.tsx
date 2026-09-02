"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";

type Method = "annuity" | "principal" | "bullet";

const won = (value: number) =>
  Math.round(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

function ResultCard({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        accent ? "bg-blue-600 text-white" : "border border-gray-200 bg-white"
      }`}
    >
      <p className={`text-xs font-bold ${accent ? "text-blue-100" : "text-gray-400"}`}>
        {label}
      </p>
      <p className="mt-2 break-words text-2xl font-black">{value}</p>
    </div>
  );
}

export default function LoanPage() {
  const [principal, setPrincipal] = useState("300000000");
  const [rate, setRate] = useState("4");
  const [months, setMonths] = useState("360");
  const [method, setMethod] = useState<Method>("annuity");

  const result = useMemo(() => {
    const p = Number(principal);
    const annualRate = Number(rate);
    const n = Number(months);

    if (!(p > 0) || !(n > 0) || annualRate < 0 || !Number.isFinite(annualRate)) {
      return null;
    }

    const r = annualRate / 100 / 12;

    if (method === "annuity") {
      const monthly =
        r === 0
          ? p / n
          : (p * r * Math.pow(1 + r, n)) /
            (Math.pow(1 + r, n) - 1);
      const total = monthly * n;

      return {
        mainLabel: "매월 예상 상환액",
        main: monthly,
        first: monthly,
        last: monthly,
        totalInterest: total - p,
        total,
      };
    }

    if (method === "principal") {
      const principalPart = p / n;
      const first = principalPart + p * r;
      const last = principalPart + principalPart * r;
      const totalInterest = r === 0 ? 0 : (p * r * (n + 1)) / 2;

      return {
        mainLabel: "첫 달 예상 상환액",
        main: first,
        first,
        last,
        totalInterest,
        total: p + totalInterest,
      };
    }

    const monthlyInterest = p * r;
    const totalInterest = monthlyInterest * n;

    return {
      mainLabel: "매월 이자",
      main: monthlyInterest,
      first: monthlyInterest,
      last: p + monthlyInterest,
      totalInterest,
      total: p + totalInterest,
    };
  }, [principal, rate, months, method]);

  const methodName =
    method === "annuity"
      ? "원리금균등"
      : method === "principal"
        ? "원금균등"
        : "만기일시상환";

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">MONEY</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            대출이자 계산기
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            대출금액과 금리, 기간을 입력하면 상환방식별 월 납입금과 총 이자를 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <MoneyInput
              label="대출금액"
              value={principal}
              onChange={setPrincipal}
              placeholder="300,000,000"
            />

            <label className="mt-5 block">
              <span className="text-sm font-bold text-gray-800">연 이자율</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={rate}
                  onChange={(event) => setRate(event.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">%</span>
              </div>
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold text-gray-800">대출기간</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={months}
                  onChange={(event) => setMonths(event.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-14 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">개월</span>
              </div>
              <p className="mt-2 text-xs text-gray-400">
                {Number(months) > 0 ? `약 ${(Number(months) / 12).toFixed(1)}년` : ""}
              </p>
            </label>

            <div className="mt-5">
              <p className="text-sm font-bold text-gray-800">상환방식</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {[
                  ["annuity", "원리금균등"],
                  ["principal", "원금균등"],
                  ["bullet", "만기일시"],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setMethod(id as Method)}
                    className={`rounded-xl px-2 py-3 text-xs font-bold transition ${
                      method === id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-bold text-gray-400">{methodName} 예상 결과</p>

            {result ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <ResultCard label={result.mainLabel} value={`${won(result.main)}원`} accent />
                <ResultCard label="총 이자" value={`${won(result.totalInterest)}원`} />
                <ResultCard label="첫 달 상환액" value={`${won(result.first)}원`} />
                <ResultCard label="마지막 달 상환액" value={`${won(result.last)}원`} />
                <div className="sm:col-span-2">
                  <ResultCard label="총 상환금액" value={`${won(result.total)}원`} />
                </div>
              </div>
            ) : (
              <div className="mt-4 rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">
                대출금액, 금리, 기간을 입력해주세요.
              </div>
            )}

            <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-xs leading-5 text-gray-500">
              실제 금융기관의 상환일, 일할계산, 중도상환, 금리변동, 수수료 등에 따라
              실제 납입액은 달라질 수 있습니다.
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <h2 className="text-lg font-bold">상환방식 차이</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-bold">원리금균등</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                매달 같은 금액을 내도록 원금과 이자를 조정해요.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-bold">원금균등</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                원금을 매달 똑같이 갚아 시간이 갈수록 납입액이 줄어요.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="font-bold">만기일시</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                기간 중 이자를 내고 만기에 원금을 한 번에 상환해요.
              </p>
            </div>
          </div>
        </section>

        <RelatedCalculators currentHref="/loan" />
      </div>
    </main>
  );
}
