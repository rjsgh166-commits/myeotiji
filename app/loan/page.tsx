"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import MoneyInput from "../_components/MoneyInput";
import RelatedCalculators from "../_components/RelatedCalculators";
import ResultShareButton from "../_components/ResultShareButton";
import ResultImageButton from "../_components/ResultImageButton";

type Method = "annuity" | "principal" | "bullet";

type LoanResult = {
  mainLabel: string;
  main: number;
  first: number;
  last: number;
  totalInterest: number;
  total: number;
};

const won = (value: number) =>
  Math.round(Number.isFinite(value) ? value : 0).toLocaleString("ko-KR");

const signedWon = (value: number) => {
  const rounded = Math.round(Number.isFinite(value) ? value : 0);
  const sign = rounded > 0 ? "+" : rounded < 0 ? "-" : "";
  return `${sign}${Math.abs(rounded).toLocaleString("ko-KR")}원`;
};

function methodName(method: Method) {
  if (method === "annuity") return "원리금균등";
  if (method === "principal") return "원금균등";
  return "만기일시상환";
}

function calculateLoan(
  principal: number,
  annualRate: number,
  months: number,
  method: Method,
): LoanResult | null {
  const p = Number(principal);
  const n = Number(months);

  if (!(p > 0) || !(n > 0) || annualRate < 0 || !Number.isFinite(annualRate)) {
    return null;
  }

  const r = annualRate / 100 / 12;

  if (method === "annuity") {
    const monthly =
      r === 0
        ? p / n
        : (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
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
}

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
      <p
        className={`text-xs font-bold ${
          accent ? "text-blue-100" : "text-gray-400"
        }`}
      >
        {label}
      </p>
      <p className="mt-2 break-words text-2xl font-black">{value}</p>
    </div>
  );
}

function MethodSelector({
  value,
  onChange,
}: {
  value: Method;
  onChange: (method: Method) => void;
}) {
  const methods: { id: Method; label: string }[] = [
    { id: "annuity", label: "원리금균등" },
    { id: "principal", label: "원금균등" },
    { id: "bullet", label: "만기일시" },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {methods.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={`rounded-xl px-2 py-3 text-xs font-bold transition ${
            value === id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ScenarioEditor({
  title,
  principal,
  setPrincipal,
  rate,
  setRate,
  months,
  setMonths,
  method,
  setMethod,
  accent = false,
}: {
  title: string;
  principal: string;
  setPrincipal: (value: string) => void;
  rate: string;
  setRate: (value: string) => void;
  months: string;
  setMonths: (value: string) => void;
  method: Method;
  setMethod: (value: Method) => void;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        accent ? "border-blue-200 bg-blue-50/50" : "border-gray-200 bg-white"
      }`}
    >
      <p className={`text-sm font-black ${accent ? "text-blue-700" : "text-gray-800"}`}>
        {title}
      </p>
      <div className="mt-4 space-y-4">
        <MoneyInput
          label="대출금액"
          value={principal}
          onChange={setPrincipal}
          placeholder="300,000,000"
        />

        <label className="block">
          <span className="text-sm font-bold text-gray-800">연 이자율</span>
          <div className="relative mt-2">
            <input
              type="number"
              min="0"
              step="0.01"
              value={rate}
              onChange={(event) => setRate(event.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              %
            </span>
          </div>
        </label>

        <label className="block">
          <span className="text-sm font-bold text-gray-800">대출기간</span>
          <div className="relative mt-2">
            <input
              type="number"
              min="1"
              step="1"
              value={months}
              onChange={(event) => setMonths(event.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 pr-14 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
              개월
            </span>
          </div>
        </label>

        <div>
          <p className="mb-2 text-sm font-bold text-gray-800">상환방식</p>
          <MethodSelector value={method} onChange={setMethod} />
        </div>
      </div>
    </div>
  );
}

function ScenarioResult({
  title,
  method,
  result,
  accent = false,
}: {
  title: string;
  method: Method;
  result: LoanResult | null;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        accent ? "bg-blue-600 text-white" : "bg-slate-950 text-white"
      }`}
    >
      <p className={`text-xs font-black ${accent ? "text-blue-100" : "text-slate-400"}`}>
        {title} · {methodName(method)}
      </p>
      {result ? (
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4">
            <span className={accent ? "text-blue-100" : "text-slate-400"}>
              {result.mainLabel}
            </span>
            <strong>{won(result.main)}원</strong>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className={accent ? "text-blue-100" : "text-slate-400"}>
              총 이자
            </span>
            <strong>{won(result.totalInterest)}원</strong>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-3">
            <span className={accent ? "text-blue-100" : "text-slate-300"}>
              총 상환금액
            </span>
            <strong className="text-base">{won(result.total)}원</strong>
          </div>
        </div>
      ) : (
        <p className="mt-4 text-sm text-white/70">조건을 확인해주세요.</p>
      )}
    </div>
  );
}

export default function LoanPage() {
  const [principal, setPrincipal] = useState("300000000");
  const [rate, setRate] = useState("4");
  const [months, setMonths] = useState("360");
  const [method, setMethod] = useState<Method>("annuity");

  const result = useMemo(
    () => calculateLoan(Number(principal), Number(rate), Number(months), method),
    [principal, rate, months, method],
  );

  const [aPrincipal, setAPrincipal] = useState("300000000");
  const [aRate, setARate] = useState("4");
  const [aMonths, setAMonths] = useState("360");
  const [aMethod, setAMethod] = useState<Method>("annuity");

  const [bPrincipal, setBPrincipal] = useState("300000000");
  const [bRate, setBRate] = useState("3.5");
  const [bMonths, setBMonths] = useState("360");
  const [bMethod, setBMethod] = useState<Method>("annuity");

  const aResult = useMemo(
    () => calculateLoan(Number(aPrincipal), Number(aRate), Number(aMonths), aMethod),
    [aPrincipal, aRate, aMonths, aMethod],
  );

  const bResult = useMemo(
    () => calculateLoan(Number(bPrincipal), Number(bRate), Number(bMonths), bMethod),
    [bPrincipal, bRate, bMonths, bMethod],
  );

  const interestDifference =
    aResult && bResult ? bResult.totalInterest - aResult.totalInterest : 0;
  const paymentDifference = aResult && bResult ? bResult.main - aResult.main : 0;
  const totalDifference = aResult && bResult ? bResult.total - aResult.total : 0;

  const interestSummary =
    aResult && bResult
      ? interestDifference === 0
        ? "A와 B의 총 이자가 같아요."
        : interestDifference < 0
          ? `B가 A보다 총 이자를 ${won(Math.abs(interestDifference))}원 덜 내요.`
          : `B가 A보다 총 이자를 ${won(interestDifference)}원 더 내요.`
      : "두 조건을 입력하면 차이를 비교해드려요.";

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">MONEY · LOAN COMPARE</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            대출이자 계산기
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            대출금액과 금리, 기간을 계산하고 두 대출 조건의 월 부담과 총 이자를
            나란히 비교해보세요.
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
              <p className="mb-2 text-sm font-bold text-gray-800">상환방식</p>
              <MethodSelector value={method} onChange={setMethod} />
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm font-bold text-gray-400">{methodName(method)} 예상 결과</p>

            {result ? (
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <ResultCard label={result.mainLabel} value={`${won(result.main)}원`} accent />
                <ResultCard label="총 이자" value={`${won(result.totalInterest)}원`} />
                <ResultCard label="첫 달 상환액" value={`${won(result.first)}원`} />
                <ResultCard label="마지막 달 상환액" value={`${won(result.last)}원`} />
                <div className="sm:col-span-2">
                  <ResultCard label="총 상환금액" value={`${won(result.total)}원`} />
                  <ResultShareButton
                    title="대출이자 계산 결과"
                    calculatorPath="/loan"
                    text={`🏠 대출이자 계산\n대출금액: ${won(Number(principal))}원\n연 이자율: ${rate}%\n기간: ${months}개월\n상환방식: ${methodName(method)}\n${result.mainLabel}: ${won(result.main)}원\n총 이자: ${won(result.totalInterest)}원\n총 상환금액: ${won(result.total)}원`}
                  />
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

        <section className="mt-6 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-black text-blue-600">LOAN A/B COMPARE</p>
          <h2 className="mt-1 text-xl font-black">대출 조건 A vs B 비교</h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            은행별 금리, 대출기간, 상환방식이 다를 때 월 부담과 총 이자가 실제로
            얼마나 차이 나는지 확인해보세요.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <ScenarioEditor
              title="조건 A"
              principal={aPrincipal}
              setPrincipal={setAPrincipal}
              rate={aRate}
              setRate={setARate}
              months={aMonths}
              setMonths={setAMonths}
              method={aMethod}
              setMethod={setAMethod}
            />
            <ScenarioEditor
              title="조건 B"
              principal={bPrincipal}
              setPrincipal={setBPrincipal}
              rate={bRate}
              setRate={setBRate}
              months={bMonths}
              setMonths={setBMonths}
              method={bMethod}
              setMethod={setBMethod}
              accent
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <ScenarioResult title="조건 A" method={aMethod} result={aResult} />
            <ScenarioResult title="조건 B" method={bMethod} result={bResult} accent />
          </div>

          <div className="mt-4 rounded-2xl bg-slate-950 p-5 text-white sm:p-6">
            <p className="text-xs font-black text-slate-400">한 줄 비교</p>
            <p className="mt-2 text-lg font-black leading-7">{interestSummary}</p>
            {aResult && bResult && (
              <div className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-slate-400">B의 기준 납입액 차이</p>
                  <strong className="mt-1 block text-base">
                    {signedWon(paymentDifference)}
                  </strong>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-slate-400">B의 총 이자 차이</p>
                  <strong className="mt-1 block text-base">
                    {signedWon(interestDifference)}
                  </strong>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-slate-400">B의 총 상환액 차이</p>
                  <strong className="mt-1 block text-base">
                    {signedWon(totalDifference)}
                  </strong>
                </div>
              </div>
            )}
            <p className="mt-4 text-xs leading-5 text-slate-400">
              ‘기준 납입액’은 원리금균등은 매월 상환액, 원금균등은 첫 달 상환액,
              만기일시는 매월 이자를 기준으로 비교합니다.
            </p>
          </div>

          {aResult && bResult && (
            <>
              <ResultShareButton
                title="대출 조건 비교 결과"
                calculatorPath="/loan"
                text={`🏠 대출 조건 비교\nA: ${won(Number(aPrincipal))}원 · ${aRate}% · ${aMonths}개월 · ${methodName(aMethod)}\n총 이자 ${won(aResult.totalInterest)}원\nB: ${won(Number(bPrincipal))}원 · ${bRate}% · ${bMonths}개월 · ${methodName(bMethod)}\n총 이자 ${won(bResult.totalInterest)}원\nB - A 총 이자 차이: ${signedWon(interestDifference)}`}
              />
              <ResultImageButton
                eyebrow="몇이지? · 대출 A/B 비교"
                title="어느 대출이 덜 부담될까?"
                tone="blue"
                filename="myeotiji-loan-compare.png"
                lines={[
                  { label: "조건 A", value: `${aRate}% · ${aMonths}개월` },
                  { label: "A 총 이자", value: `${won(aResult.totalInterest)}원` },
                  { label: "조건 B", value: `${bRate}% · ${bMonths}개월` },
                  { label: "B 총 이자", value: `${won(bResult.totalInterest)}원` },
                  { label: "B - A 총 이자", value: signedWon(interestDifference), strong: true },
                  { label: "B - A 기준 납입액", value: signedWon(paymentDifference), strong: true },
                ]}
                caption="금리·기간·상환방식에 따른 예상값이며 실제 금융기관 납입액과 다를 수 있습니다."
              />
            </>
          )}
        </section>

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
