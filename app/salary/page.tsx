"use client";

import { useEffect, useMemo, useState } from "react";
import {
  calculateIncomeTax2026,
  calculateLocalIncomeTax,
} from "./incomeTaxTable";
import RelatedCalculators from "../_components/RelatedCalculators";
import ResultActionBar from "../_components/ResultActionBar";
import DecisionSummaryCard from "../_components/DecisionSummaryCard";
import SaveCalculationButton from "../_components/SaveCalculationButton";
import AccessibleResultStatus from "../_components/AccessibleResultStatus";
import ExamplePreviewNotice from "../_components/ExamplePreviewNotice";
import TrustStrip from "../_components/TrustStrip";
import CalculationAnalytics from "../_components/CalculationAnalytics";
import { consumeCalculationTransfer } from "../_lib/calculationTransfer";

const formatWon = (value: number) =>
  `${Math.max(0, Math.round(value)).toLocaleString("ko-KR")}원`;

const formatSignedWon = (value: number) => {
  const rounded = Math.round(value);
  const sign = rounded > 0 ? "+" : rounded < 0 ? "-" : "";
  return `${sign}${Math.abs(rounded).toLocaleString("ko-KR")}원`;
};

const floorWon = (value: number) => Math.floor(Math.max(0, value));

type SalaryResult = {
  monthlyGross: number;
  taxFreeWon: number;
  monthlyTaxable: number;
  nationalPension: number;
  healthInsurance: number;
  longTermCare: number;
  employmentInsurance: number;
  incomeTax: number;
  localIncomeTax: number;
  totalDeduction: number;
  netSalary: number;
};

function calculateSalary(
  annualSalaryManwon: number,
  monthlyTaxFreeManwon: number,
  familyCount: number,
  childrenCount: number,
): SalaryResult {
  const annualSalaryWon = Math.max(0, annualSalaryManwon) * 10_000;
  const monthlyGross = annualSalaryWon / 12;
  const taxFreeWon = Math.min(
    Math.max(0, monthlyTaxFreeManwon) * 10_000,
    monthlyGross,
  );
  const monthlyTaxable = Math.max(0, monthlyGross - taxFreeWon);

  // 2026년 기준 근로자 부담분
  // 국민연금: 4.75%, 기준소득월액 하한/상한 적용
  const pensionBase = Math.min(Math.max(monthlyTaxable, 410_000), 6_590_000);
  const nationalPension =
    monthlyTaxable > 0 ? floorWon(pensionBase * 0.0475) : 0;

  // 건강보험: 근로자 부담 3.595%
  const healthInsurance = floorWon(monthlyTaxable * 0.03595);

  // 장기요양보험: 건강보험료 × (0.9448 / 7.19)
  const longTermCare = floorWon(healthInsurance * (0.9448 / 7.19));

  // 고용보험: 근로자 부담 0.9%
  const employmentInsurance = floorWon(monthlyTaxable * 0.009);

  // 2026.03.01 근로소득 간이세액표 기준
  const incomeTax = calculateIncomeTax2026(
    monthlyTaxable,
    Math.max(1, familyCount),
    Math.max(0, childrenCount),
  );
  const localIncomeTax = calculateLocalIncomeTax(incomeTax);

  const totalDeduction =
    nationalPension +
    healthInsurance +
    longTermCare +
    employmentInsurance +
    incomeTax +
    localIncomeTax;

  const netSalary = Math.max(0, monthlyGross - totalDeduction);

  return {
    monthlyGross,
    taxFreeWon,
    monthlyTaxable,
    nationalPension,
    healthInsurance,
    longTermCare,
    employmentInsurance,
    incomeTax,
    localIncomeTax,
    totalDeduction,
    netSalary,
  };
}

function ResultRow({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  const isNegative = value < 0;
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold text-slate-200">
        {isNegative ? "- " : ""}
        {formatWon(Math.abs(value))}
      </span>
    </div>
  );
}

function ComparisonCard({
  label,
  salary,
  result,
  accent = false,
}: {
  label: string;
  salary: number;
  result: SalaryResult;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 ${
        accent ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <p
        className={`text-xs font-black ${
          accent ? "text-white" : "text-slate-500"
        }`}
      >
        {label}
      </p>
      <p className="mt-2 text-xl font-black">
        연봉 {Math.max(0, salary).toLocaleString("ko-KR")}만원
      </p>
      <div className="mt-5 space-y-3 text-sm">
        <div className="flex items-center justify-between gap-4">
          <span className={accent ? "text-white" : "text-slate-500"}>
            월 세전
          </span>
          <strong>{formatWon(result.monthlyGross)}</strong>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className={accent ? "text-white" : "text-slate-500"}>
            월 공제
          </span>
          <strong>{formatWon(result.totalDeduction)}</strong>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-current/10 pt-3">
          <span className={accent ? "text-white" : "text-slate-600"}>
            월 실수령
          </span>
          <strong className="text-lg">{formatWon(result.netSalary)}</strong>
        </div>
      </div>
    </div>
  );
}

export default function SalaryPage() {
  const [view, setView] = useState<"single" | "compare">("single");
  const [isExample, setIsExample] = useState(true);
  const [annualSalary, setAnnualSalary] = useState(5000); // 만원
  const [monthlyTaxFree, setMonthlyTaxFree] = useState(20); // 만원
  const [familyCount, setFamilyCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [compareSalary, setCompareSalary] = useState(5500); // 만원

  useEffect(() => {
    const transferred = consumeCalculationTransfer("/salary") || {};
    const params = new URLSearchParams(window.location.search);
    const readNumber = (stateKey: string, legacyKey: string, fallback: number, min = 0) => {
      const stateValue = transferred[stateKey];
      const raw = stateValue ?? transferred[legacyKey] ?? params.get(legacyKey);
      if (raw === null || raw === undefined) return fallback;
      const value = Number(raw);
      return Number.isFinite(value) && value >= min ? value : fallback;
    };

    if (Object.keys(transferred).length > 0) setIsExample(false);
    const restoredView = transferred.view ?? params.get("view");
    const hasCompareTransfer = transferred.compareSalary !== undefined || transferred.b !== undefined || params.get("b") !== null;
    if (restoredView === "compare" || hasCompareTransfer) setView("compare");
    else if (restoredView === "single") setView("single");

    setAnnualSalary(readNumber("annualSalary", "a", 5000));
    setCompareSalary(readNumber("compareSalary", "b", 5500));
    setMonthlyTaxFree(readNumber("monthlyTaxFree", "taxFree", 20));
    setFamilyCount(readNumber("familyCount", "family", 1, 1));
    setChildrenCount(readNumber("childrenCount", "children", 0));

    if (window.location.search) window.history.replaceState({}, "", "/salary");
  }, []);

  const result = useMemo(
    () =>
      calculateSalary(
        annualSalary,
        monthlyTaxFree,
        familyCount,
        childrenCount,
      ),
    [annualSalary, monthlyTaxFree, familyCount, childrenCount],
  );

  const compareResult = useMemo(
    () =>
      calculateSalary(
        compareSalary,
        monthlyTaxFree,
        familyCount,
        childrenCount,
      ),
    [compareSalary, monthlyTaxFree, familyCount, childrenCount],
  );

  const monthlyGrossDifference =
    compareResult.monthlyGross - result.monthlyGross;
  const monthlyNetDifference = compareResult.netSalary - result.netSalary;
  const annualNetDifference = monthlyNetDifference * 12;

  const salaryConclusion =
    monthlyNetDifference === 0
      ? "두 연봉의 예상 월 실수령액이 같아요."
      : monthlyNetDifference > 0
        ? `B 연봉이 월 실수령 기준 ${formatWon(Math.abs(monthlyNetDifference))} 더 유리해요.`
        : `A 연봉이 월 실수령 기준 ${formatWon(Math.abs(monthlyNetDifference))} 더 유리해요.`;

  const savedState = { view: "compare", annualSalary, compareSalary, monthlyTaxFree, familyCount, childrenCount };
  const singleSavedState = { view: "single", annualSalary, monthlyTaxFree, familyCount, childrenCount };
  const jobChangeState = {
    currentSalary: annualSalary,
    offerSalary: compareSalary,
    familyCount,
    childrenCount,
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <CalculationAnalytics
        calculator="salary"
        mode={view}
        hasCompare={view === "compare"}
        valid={view === "compare" ? annualSalary > 0 && compareSalary > 0 : annualSalary > 0}
        signature={`${view}|${annualSalary}|${compareSalary}|${monthlyTaxFree}|${familyCount}|${childrenCount}`}
      />
      <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
        <a href="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
          ← 몇이지? 홈
        </a>
        <section className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            2026년 기준 · 연봉 비교 지원
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            연봉 실수령액 계산기
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            예상 월 실수령액만 빠르게 보거나, 필요할 때 현재 연봉과 이직·협상 연봉의
            실제 통장 금액 차이까지 비교해보세요.
          </p>
        </section>

        <div className="mb-5 inline-flex rounded-xl border border-slate-200 bg-white p-1">
          <button
            type="button"
            data-calculation-control="true"
            onClick={() => { setIsExample(false); setView("single"); }}
            aria-pressed={view === "single"}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${view === "single" ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-50"}`}
          >
            내 실수령액
          </button>
          <button
            type="button"
            data-calculation-control="true"
            onClick={() => { setIsExample(false); setView("compare"); }}
            aria-pressed={view === "compare"}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${view === "compare" ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-50"}`}
          >
            연봉 비교
          </button>
        </div>

        <ExamplePreviewNotice active={isExample} />

{view === "single" ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-lg font-extrabold">조건 입력</h2>

            <div className="space-y-6">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  연봉
                </span>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={annualSalary}
                    onChange={(e) => { setIsExample(false); setAnnualSalary(Number(e.target.value)); }}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-16 text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                    만원
                  </span>
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  월 비과세액
                </span>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={monthlyTaxFree}
                    onChange={(e) => { setIsExample(false); setMonthlyTaxFree(Number(e.target.value)); }}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-16 text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                    만원
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  식대 등 매월 급여에 포함된 비과세 금액을 입력하세요.
                </p>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  공제대상가족 수
                </span>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={familyCount}
                    onChange={(e) => {
                      setIsExample(false);
                      setFamilyCount(Math.max(1, Number(e.target.value)));
                    }}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-14 text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                    명
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  본인을 포함해 입력하세요. 배우자도 공제대상이라면 1명으로
                  포함합니다.
                </p>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  8세 이상 20세 이하 자녀 수
                </span>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={childrenCount}
                    onChange={(e) => {
                      setIsExample(false);
                      setChildrenCount(Math.max(0, Number(e.target.value)));
                    }}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-14 text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                    명
                  </span>
                </div>
              </label>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-slate-500">월 급여 공제 내역</p>

            <div className="mt-4 flex items-end justify-between gap-4">
              <span className="text-sm font-bold text-slate-300">월 세전 급여</span>
              <span className="text-2xl font-black tracking-tight sm:text-3xl">
                {formatWon(result.monthlyGross)}
              </span>
            </div>

            <div className="my-6 h-px bg-slate-800" />

            <div className="space-y-4 text-sm">
              <ResultRow label="비과세액" value={result.taxFreeWon} />
              <ResultRow label="국민연금" value={-result.nationalPension} />
              <ResultRow label="건강보험" value={-result.healthInsurance} />
              <ResultRow label="장기요양보험" value={-result.longTermCare} />
              <ResultRow label="고용보험" value={-result.employmentInsurance} />
              <ResultRow label="소득세" value={-result.incomeTax} />
              <ResultRow label="지방소득세" value={-result.localIncomeTax} />
            </div>

            <div className="my-6 h-px bg-slate-800" />

            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-300">총 공제액</span>
              <span className="text-lg font-black">
                - {formatWon(result.totalDeduction)}
              </span>
            </div>

            <div className="mt-6 rounded-2xl bg-blue-600 p-5 sm:p-6">
              <p className="text-sm font-bold text-white">
                예상 월 실수령액
              </p>
              <div className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                {formatWon(result.netSalary)}
              </div>
              <p className="mt-2 text-xs font-semibold text-white">
                월 세전 급여에서 4대보험과 세금을 공제한 예상 금액이에요.
              </p>
            </div>

            {view === "single" ? (
            <ResultActionBar
              calculatorPath="/salary"
              shareTitle="2026 연봉 실수령액 계산 결과"
              shareText={`💰 2026 연봉 실수령액 계산\n연봉: ${(annualSalary * 10_000).toLocaleString("ko-KR")}원\n월 세전 급여: ${formatWon(result.monthlyGross)}\n월 총 공제액: ${formatWon(result.totalDeduction)}\n예상 월 실수령액: ${formatWon(result.netSalary)}`}
              image={{
                eyebrow: "몇이지? · 2026 연봉",
                title: "내 월 실수령액은?",
                tone: "blue",
                filename: "myeotiji-salary-net.png",
                lines: [
                  { label: "세전 연봉", value: `${annualSalary.toLocaleString("ko-KR")}만원` },
                  { label: "월 세전", value: formatWon(result.monthlyGross) },
                  { label: "월 총 공제", value: formatWon(result.totalDeduction) },
                  { label: "월 실수령", value: formatWon(result.netSalary), strong: true },
                ],
                caption: "2026년 간이세액표와 4대보험 근로자 부담분을 반영한 예상값입니다.",
              }}
            >
              <SaveCalculationButton
                title={`연봉 ${annualSalary.toLocaleString("ko-KR")}만원 실수령`}
                href="/salary"
                state={singleSavedState}
                primaryValue={`월 ${formatWon(result.netSalary)}`}
                summary={`월 세전 ${formatWon(result.monthlyGross)} · 공제 ${formatWon(result.totalDeduction)}`}
              />
            </ResultActionBar>
            ) : null}
          </section>
        </div>
        ) : null}


        {view === "compare" ? (
          <section className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <p className="text-xs font-semibold text-blue-600">두 연봉 바로 비교</p>
              <h2 className="mt-1 text-xl font-bold">A와 B를 먼저 나란히 볼게요</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">같은 공제 조건을 적용해 월 실수령액과 1년 차이를 바로 비교합니다.</p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                <span className="mb-2 block text-sm font-bold text-slate-700">현재 연봉 A</span>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={annualSalary}
                    onChange={(e) => { setIsExample(false); setAnnualSalary(Number(e.target.value)); }}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-16 text-lg font-bold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">만원</span>
                </div>
              </label>
              <label className="block rounded-2xl border border-blue-200 bg-blue-50/50 p-4">
                <span className="mb-2 block text-sm font-bold text-blue-800">비교 연봉 B</span>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="100"
                    value={compareSalary}
                    onChange={(e) => { setIsExample(false); setCompareSalary(Number(e.target.value)); }}
                    className="w-full rounded-xl border border-blue-200 bg-white px-4 py-3.5 pr-16 text-lg font-bold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">만원</span>
                </div>
              </label>
            </div>

            <details className="mt-4 rounded-2xl border border-slate-200 bg-white">
              <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-700">공제 조건 상세 설정</summary>
              <div className="grid gap-4 border-t border-slate-100 p-4 sm:grid-cols-3">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-600">월 비과세액</span>
                  <div className="relative">
                    <input type="number" min="0" step="1" value={monthlyTaxFree} onChange={(e) => { setIsExample(false); setMonthlyTaxFree(Number(e.target.value)); }} className="w-full rounded-xl border border-slate-200 px-3 py-3 pr-12 text-sm font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">만원</span>
                  </div>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-600">공제대상가족</span>
                  <div className="relative">
                    <input type="number" min="1" step="1" value={familyCount} onChange={(e) => { setIsExample(false); setFamilyCount(Math.max(1, Number(e.target.value))); }} className="w-full rounded-xl border border-slate-200 px-3 py-3 pr-10 text-sm font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">명</span>
                  </div>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-slate-600">8~20세 자녀</span>
                  <div className="relative">
                    <input type="number" min="0" step="1" value={childrenCount} onChange={(e) => { setIsExample(false); setChildrenCount(Math.max(0, Number(e.target.value))); }} className="w-full rounded-xl border border-slate-200 px-3 py-3 pr-10 text-sm font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50" />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">명</span>
                  </div>
                </label>
              </div>
            </details>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <ComparisonCard label="현재 조건 A" salary={annualSalary} result={result} />
              <ComparisonCard label="비교 조건 B" salary={compareSalary} result={compareResult} accent />
            </div>

            <DecisionSummaryCard
              title={salaryConclusion}
              description={`1년으로 단순 환산하면 실수령 차이는 ${formatSignedWon(annualNetDifference)}예요. 성과급·연말정산은 제외한 비교값입니다.`}
              tone="violet"
              metrics={[
                { label: "월 세전 차이", value: formatSignedWon(monthlyGrossDifference) },
                { label: "월 실수령 차이", value: formatSignedWon(monthlyNetDifference) },
                { label: "연간 환산 차이", value: formatSignedWon(annualNetDifference) },
              ]}
              actionHref="/job-change"
              actionState={jobChangeState}
              actionLabel="이 연봉으로 이직 마지노선 계산 →"
              analyticsId="salary"
            />

            <ResultActionBar
              calculatorPath="/salary"
              shareTitle="연봉 비교 계산 결과"
              shareText={`💼 연봉 비교\nA 연봉: ${annualSalary.toLocaleString("ko-KR")}만원 → 월 실수령 ${formatWon(result.netSalary)}\nB 연봉: ${compareSalary.toLocaleString("ko-KR")}만원 → 월 실수령 ${formatWon(compareResult.netSalary)}\n월 실수령 차이: ${formatSignedWon(monthlyNetDifference)}\n연간 환산 차이: ${formatSignedWon(annualNetDifference)}`}
              image={{
                eyebrow: "몇이지? · 2026 연봉 비교",
                title: "이직하면 통장에 얼마 더?",
                tone: "violet",
                filename: "myeotiji-salary-compare.png",
                lines: [
                  { label: "현재 연봉 A", value: `${annualSalary.toLocaleString("ko-KR")}만원` },
                  { label: "비교 연봉 B", value: `${compareSalary.toLocaleString("ko-KR")}만원` },
                  { label: "A 월 실수령", value: formatWon(result.netSalary) },
                  { label: "B 월 실수령", value: formatWon(compareResult.netSalary) },
                  { label: "월 실수령 차이", value: formatSignedWon(monthlyNetDifference), strong: true },
                  { label: "연간 환산 차이", value: formatSignedWon(annualNetDifference), strong: true },
                ],
                caption: "비과세액·공제대상가족 조건을 동일하게 적용한 예상 비교값입니다.",
              }}
            >
              <SaveCalculationButton title={`연봉 ${annualSalary.toLocaleString("ko-KR")} vs ${compareSalary.toLocaleString("ko-KR")}만원`} href="/salary" state={savedState} primaryValue={`월 실수령 ${formatSignedWon(monthlyNetDifference)}`} summary={`연간 환산 차이 ${formatSignedWon(annualNetDifference)}`} />
            </ResultActionBar>
          </section>
        ) : null}

        <TrustStrip
          items={["2026년 세율 기준", "국세청 간이세액표 반영", "4대보험 공제 반영", "2026.09 확인"]}
          note="실제 급여명세서는 회사의 비과세 항목, 연말정산, 보험료 정산 등에 따라 달라질 수 있어요."
        />

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-extrabold">계산 기준</h2>
          <div className="mt-4 space-y-2 text-sm leading-6 text-slate-500">
            <p>
              • 소득세는 업로드한 「근로소득 간이세액표_2026.03.01」의
              월급여액·공제대상가족 수 기준을 그대로 적용합니다.
            </p>
            <p>
              • 8세 이상 20세 이하 자녀는 간이세액표에서 정한 자녀 수별
              세액공제를 추가 반영합니다.
            </p>
            <p>
              • 공제대상가족이 11명을 초과하는 경우에도 간이세액표의 별도
              산식을 적용합니다.
            </p>
            <p>
              • 월 과세급여가 1,000만원을 초과하면 간이세액표에 규정된 고액
              급여 구간 산식을 적용합니다.
            </p>
            <p>
              • 연봉 비교는 두 조건에 동일한 비과세액·가족 수·자녀 수를 적용한
              예상치입니다. 실제 이직 조건의 비과세·성과급 구조가 다르면 결과도
              달라집니다.
            </p>
            <p>
              • 실제 급여명세서는 회사의 보수 산정, 비과세 항목, 원천징수
              비율(80%·100%·120%) 등에 따라 달라질 수 있습니다.
            </p>
          </div>
        </section>

        <RelatedCalculators currentHref="/salary" />
        <AccessibleResultStatus
          signature={`${view}|${annualSalary}|${compareSalary}|${monthlyTaxFree}|${familyCount}|${childrenCount}`}
          message={view === "compare"
            ? `계산 결과가 업데이트되었습니다. 비교 연봉의 월 실수령 차이는 ${formatSignedWon(monthlyNetDifference)}입니다.`
            : `계산 결과가 업데이트되었습니다. 예상 월 실수령액은 ${formatWon(result.netSalary)}입니다.`}
        />
      </div>
    </main>
  );
}
