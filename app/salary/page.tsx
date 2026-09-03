"use client";

import { useMemo, useState } from "react";
import {
  calculateIncomeTax2026,
  calculateLocalIncomeTax,
} from "./incomeTaxTable";
import RelatedCalculators from "../_components/RelatedCalculators";
import ResultShareButton from "../_components/ResultShareButton";

const formatWon = (value: number) =>
  `${Math.max(0, Math.round(value)).toLocaleString("ko-KR")}원`;

const floorWon = (value: number) => Math.floor(Math.max(0, value));

export default function SalaryPage() {
  const [annualSalary, setAnnualSalary] = useState(5000); // 만원
  const [monthlyTaxFree, setMonthlyTaxFree] = useState(20); // 만원
  const [familyCount, setFamilyCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  const result = useMemo(() => {
    const annualSalaryWon = Math.max(0, annualSalary) * 10_000;
    const monthlyGross = annualSalaryWon / 12;
    const taxFreeWon = Math.min(
      Math.max(0, monthlyTaxFree) * 10_000,
      monthlyGross,
    );
    const monthlyTaxable = Math.max(0, monthlyGross - taxFreeWon);

    // 2026년 기준 근로자 부담분
    // 국민연금: 4.75%, 기준소득월액 하한/상한 적용
    const pensionBase = Math.min(
      Math.max(monthlyTaxable, 410_000),
      6_590_000,
    );
    const nationalPension =
      monthlyTaxable > 0 ? floorWon(pensionBase * 0.0475) : 0;

    // 건강보험: 근로자 부담 3.595%
    const healthInsurance = floorWon(monthlyTaxable * 0.03595);

    // 장기요양보험: 건강보험료 × (0.9448 / 7.19)
    const longTermCare = floorWon(
      healthInsurance * (0.9448 / 7.19),
    );

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
  }, [annualSalary, monthlyTaxFree, familyCount, childrenCount]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <a href="/" className="text-2xl font-black tracking-tight">
            몇이지?
          </a>
          <a
            href="/"
            className="text-sm font-semibold text-slate-500 transition hover:text-slate-900"
          >
            ← 계산기 목록
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
        <section className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            2026년 기준
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            연봉 실수령액 계산기
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            연봉, 비과세액, 공제대상가족 수를 입력하면 예상 월 실수령액과
            공제 항목을 계산해요.
          </p>
        </section>

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
                    onChange={(e) => setAnnualSalary(Number(e.target.value))}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-16 text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
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
                    onChange={(e) => setMonthlyTaxFree(Number(e.target.value))}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-16 text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                    만원
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-400">
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
                    onChange={(e) =>
                      setFamilyCount(Math.max(1, Number(e.target.value)))
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-14 text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                    명
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-400">
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
                    onChange={(e) =>
                      setChildrenCount(Math.max(0, Number(e.target.value)))
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-14 text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                    명
                  </span>
                </div>
              </label>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-slate-400">월 급여 공제 내역</p>

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
              <p className="text-sm font-bold text-blue-100">
                예상 월 실수령액
              </p>
              <div className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                {formatWon(result.netSalary)}
              </div>
              <p className="mt-2 text-xs font-semibold text-blue-100">
                월 세전 급여에서 4대보험과 세금을 공제한 예상 금액이에요.
              </p>
            </div>

            <ResultShareButton
              title="2026 연봉 실수령액 계산 결과"
              calculatorPath="/salary"
              text={`💰 2026 연봉 실수령액 계산
연봉: ${(annualSalary * 10_000).toLocaleString("ko-KR")}원
월 세전 급여: ${formatWon(result.monthlyGross)}
월 총 공제액: ${formatWon(result.totalDeduction)}
예상 월 실수령액: ${formatWon(result.netSalary)}`}
            />
          </section>
        </div>

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
              • 실제 급여명세서는 회사의 보수 산정, 비과세 항목, 원천징수
              비율(80%·100%·120%) 등에 따라 달라질 수 있습니다.
            </p>
          </div>
        </section>

        <RelatedCalculators currentHref="/salary" />
      </div>
    </main>
  );
}

function ResultRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: number;
  strong?: boolean;
}) {
  const isMinus = value < 0;
  return (
    <div className="flex items-center justify-between gap-4">
      <span className={strong ? "font-bold text-slate-200" : "text-slate-400"}>
        {label}
      </span>
      <span className={strong ? "font-extrabold" : "font-semibold text-slate-200"}>
        {isMinus ? "- " : ""}
        {formatWon(Math.abs(value))}
      </span>
    </div>
  );
}
