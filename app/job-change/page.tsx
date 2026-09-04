"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ResultImageButton from "../_components/ResultImageButton";
import ResultShareButton from "../_components/ResultShareButton";
import {
  calculateIncomeTax2026,
  calculateLocalIncomeTax,
} from "../salary/incomeTaxTable";

const floorWon = (value: number) => Math.floor(Math.max(0, value));
const formatWon = (value: number) =>
  `${Math.max(0, Math.round(value)).toLocaleString("ko-KR")}원`;
const formatSignedWon = (value: number) => {
  const rounded = Math.round(value);
  const sign = rounded > 0 ? "+" : rounded < 0 ? "-" : "";
  return `${sign}${Math.abs(rounded).toLocaleString("ko-KR")}원`;
};
const formatSignedHours = (value: number) => {
  const rounded = Math.round(value * 10) / 10;
  const sign = rounded > 0 ? "+" : rounded < 0 ? "-" : "";
  return `${sign}${Math.abs(rounded).toLocaleString("ko-KR", {
    maximumFractionDigits: 1,
  })}시간`;
};

function calculateNetSalary(
  annualSalaryManwon: number,
  monthlyTaxFreeManwon: number,
  familyCount: number,
  childrenCount: number,
) {
  const annualSalaryWon = Math.max(0, annualSalaryManwon) * 10_000;
  const monthlyGross = annualSalaryWon / 12;
  const taxFreeWon = Math.min(
    Math.max(0, monthlyTaxFreeManwon) * 10_000,
    monthlyGross,
  );
  const monthlyTaxable = Math.max(0, monthlyGross - taxFreeWon);

  const pensionBase = Math.min(Math.max(monthlyTaxable, 410_000), 6_590_000);
  const nationalPension =
    monthlyTaxable > 0 ? floorWon(pensionBase * 0.0475) : 0;
  const healthInsurance = floorWon(monthlyTaxable * 0.03595);
  const longTermCare = floorWon(healthInsurance * (0.9448 / 7.19));
  const employmentInsurance = floorWon(monthlyTaxable * 0.009);
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

  return {
    monthlyGross,
    monthlyNet: Math.max(0, monthlyGross - totalDeduction),
  };
}

type Scenario = {
  salary: number;
  taxFree: number;
  weeklyHours: number;
  commuteOneWay: number;
  commuteDays: number;
  monthlyWorkCost: number;
  annualExtraValue: number;
};

function analyzeScenario(
  scenario: Scenario,
  familyCount: number,
  childrenCount: number,
) {
  const salary = calculateNetSalary(
    scenario.salary,
    scenario.taxFree,
    familyCount,
    childrenCount,
  );
  const annualNetSalary = salary.monthlyNet * 12;
  const annualExtraValue = Math.max(0, scenario.annualExtraValue) * 10_000;
  const annualWorkCost = Math.max(0, scenario.monthlyWorkCost) * 12;
  const annualWorkHours = Math.max(0, scenario.weeklyHours) * 52;
  const annualCommuteHours =
    (Math.max(0, scenario.commuteOneWay) * 2 * Math.max(0, scenario.commuteDays) * 52) /
    60;
  const annualTimeHours = annualWorkHours + annualCommuteHours;
  const annualEffectiveCash = annualNetSalary + annualExtraValue - annualWorkCost;
  const effectiveHourly =
    annualTimeHours > 0 ? annualEffectiveCash / annualTimeHours : 0;

  return {
    ...salary,
    annualNetSalary,
    annualExtraValue,
    annualWorkCost,
    annualWorkHours,
    annualCommuteHours,
    annualTimeHours,
    annualEffectiveCash,
    effectiveHourly,
  };
}

function NumericInput({
  label,
  value,
  onChange,
  unit,
  step = 1,
  min = 0,
  description,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit: string;
  step?: number;
  min?: number;
  description?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <div className="relative mt-2">
        <input
          type="number"
          min={min}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-16 text-base font-bold outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-50"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
          {unit}
        </span>
      </div>
      {description && (
        <p className="mt-1.5 text-xs leading-5 text-slate-400">{description}</p>
      )}
    </label>
  );
}

function ScenarioEditor({
  title,
  scenario,
  setScenario,
  accent = false,
}: {
  title: string;
  scenario: Scenario;
  setScenario: (scenario: Scenario) => void;
  accent?: boolean;
}) {
  const set = (key: keyof Scenario, value: number) =>
    setScenario({ ...scenario, [key]: Number.isFinite(value) ? value : 0 });

  return (
    <section
      className={`rounded-3xl border bg-white p-5 shadow-sm sm:p-6 ${
        accent ? "border-violet-200" : "border-slate-200"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-black">{title}</h2>
        <span
          className={`rounded-full px-3 py-1 text-xs font-black ${
            accent
              ? "bg-violet-100 text-violet-700"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {accent ? "이직 제안" : "현재 직장"}
        </span>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <NumericInput
          label="세전 연봉"
          value={scenario.salary}
          onChange={(value) => set("salary", value)}
          unit="만원"
          step={100}
        />
        <NumericInput
          label="월 비과세액"
          value={scenario.taxFree}
          onChange={(value) => set("taxFree", value)}
          unit="만원"
          description="식대 등 매월 비과세 금액"
        />
        <NumericInput
          label="주당 실제 근무시간"
          value={scenario.weeklyHours}
          onChange={(value) => set("weeklyHours", value)}
          unit="시간"
          step={0.5}
          description="평균 야근까지 포함해 입력"
        />
        <NumericInput
          label="편도 출퇴근"
          value={scenario.commuteOneWay}
          onChange={(value) => set("commuteOneWay", value)}
          unit="분"
          step={5}
        />
        <NumericInput
          label="주 출근일"
          value={scenario.commuteDays}
          onChange={(value) => set("commuteDays", value)}
          unit="일"
          step={0.5}
          description="재택일은 제외"
        />
        <NumericInput
          label="월 출근 관련 비용"
          value={scenario.monthlyWorkCost}
          onChange={(value) => set("monthlyWorkCost", value)}
          unit="원"
          step={10000}
          description="교통·주차 등 비교할 비용"
        />
        <div className="sm:col-span-2">
          <NumericInput
            label="연간 보너스·복지 체감가치"
            value={scenario.annualExtraValue}
            onChange={(value) => set("annualExtraValue", value)}
            unit="만원"
            step={10}
            description="세후 보너스, 복지포인트 등 실제로 가치 있다고 보는 연간 금액을 직접 입력"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 ${strong ? "bg-violet-50" : "bg-slate-50"}`}>
      <p className="text-xs font-bold text-slate-500">{label}</p>
      <p className={`mt-1 text-lg font-black ${strong ? "text-violet-700" : "text-slate-900"}`}>
        {value}
      </p>
    </div>
  );
}

export default function JobChangePage() {
  const [familyCount, setFamilyCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [current, setCurrent] = useState<Scenario>({
    salary: 5_000,
    taxFree: 20,
    weeklyHours: 40,
    commuteOneWay: 40,
    commuteDays: 5,
    monthlyWorkCost: 100_000,
    annualExtraValue: 0,
  });
  const [offer, setOffer] = useState<Scenario>({
    salary: 6_000,
    taxFree: 20,
    weeklyHours: 45,
    commuteOneWay: 60,
    commuteDays: 5,
    monthlyWorkCost: 150_000,
    annualExtraValue: 100,
  });

  const result = useMemo(() => {
    const a = analyzeScenario(current, familyCount, childrenCount);
    const b = analyzeScenario(offer, familyCount, childrenCount);

    let low = 0;
    let high = Math.max(30_000, current.salary * 4, offer.salary * 2);
    for (let i = 0; i < 48; i += 1) {
      const mid = (low + high) / 2;
      const candidate = analyzeScenario(
        { ...offer, salary: mid },
        familyCount,
        childrenCount,
      );
      if (candidate.effectiveHourly < a.effectiveHourly) low = mid;
      else high = mid;
    }
    const breakEvenSalary = Math.ceil(high / 10) * 10;
    const offerVsBreakEven = offer.salary - breakEvenSalary;

    return {
      a,
      b,
      breakEvenSalary,
      offerVsBreakEven,
      annualCashDifference: b.annualEffectiveCash - a.annualEffectiveCash,
      annualTimeDifference: b.annualTimeHours - a.annualTimeHours,
      hourlyDifference: b.effectiveHourly - a.effectiveHourly,
    };
  }, [current, offer, familyCount, childrenCount]);

  const conclusion =
    result.offerVsBreakEven >= 0
      ? `시간·출퇴근·비용까지 반영하면 제안 연봉은 마지노선보다 ${Math.abs(result.offerVsBreakEven).toLocaleString("ko-KR")}만원 높아요.`
      : `시간·출퇴근·비용까지 반영하면 제안 연봉은 마지노선보다 ${Math.abs(result.offerVsBreakEven).toLocaleString("ko-KR")}만원 낮아요.`;

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-slate-900 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7 max-w-4xl">
          <div className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-black text-violet-700">
            몇이지? 선택 계산 · 2026 기준
          </div>
          <p className="mt-5 text-sm font-black text-violet-600">JOB CHANGE BREAK-EVEN</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">
            이직 마지노선 연봉 계산기
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            연봉만 더 높은 회사가 정말 더 나은 조건일까요? 세후 실수령액에 근무시간,
            출퇴근 시간·비용, 보너스·복지의 체감가치까지 같은 기준으로 환산해
            <strong className="text-slate-900"> “최소 얼마를 받아야 본전인지”</strong> 계산해요.
          </p>
        </header>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black text-slate-400">공통 세금 조건</p>
              <h2 className="mt-1 text-lg font-black">두 직장에 같은 가족 조건을 적용해요</h2>
            </div>
            <div className="grid w-full gap-3 sm:w-auto sm:grid-cols-2">
              <NumericInput label="공제대상가족" value={familyCount} onChange={(v) => setFamilyCount(Math.max(1, v))} unit="명" min={1} />
              <NumericInput label="8~20세 자녀" value={childrenCount} onChange={(v) => setChildrenCount(Math.max(0, v))} unit="명" />
            </div>
          </div>
        </section>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <ScenarioEditor title="A. 현재 직장" scenario={current} setScenario={setCurrent} />
          <ScenarioEditor title="B. 이직 제안" scenario={offer} setScenario={setOffer} accent />
        </div>

        <section className="mt-6 overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
          <p className="text-xs font-black tracking-wider text-violet-300">몇이지? 결론</p>
          <h2 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">{conclusion}</h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs font-bold text-slate-400">이직 마지노선 연봉</p>
              <p className="mt-1 text-xl font-black text-violet-300">{result.breakEvenSalary.toLocaleString("ko-KR")}만원</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs font-bold text-slate-400">연간 체감 현금흐름 차이</p>
              <p className="mt-1 text-xl font-black">{formatSignedWon(result.annualCashDifference)}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs font-bold text-slate-400">연간 투입시간 변화</p>
              <p className="mt-1 text-xl font-black">{formatSignedHours(result.annualTimeDifference)}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs font-bold text-slate-400">시간당 실질 보상 차이</p>
              <p className="mt-1 text-xl font-black">{formatSignedWon(result.hourlyDifference)}</p>
            </div>
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-400">
            마지노선 연봉은 B의 근무·출퇴근 조건에서 A와 같은 ‘시간당 실질 보상’을 만들기 위해 필요한 세전 연봉을 역산한 값이에요.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black text-violet-600">A VS B</p>
              <h2 className="mt-1 text-xl font-black">왜 이런 결론이 나왔을까?</h2>
            </div>
            <p className="text-xs text-slate-400">보너스·복지는 사용자가 입력한 체감가치를 그대로 사용</p>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 p-5">
              <p className="font-black">A. 현재 직장</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Stat label="월 예상 실수령" value={formatWon(result.a.monthlyNet)} />
                <Stat label="연간 체감 현금흐름" value={formatWon(result.a.annualEffectiveCash)} />
                <Stat label="연간 근무+통근" value={`${Math.round(result.a.annualTimeHours).toLocaleString("ko-KR")}시간`} />
                <Stat label="시간당 실질 보상" value={formatWon(result.a.effectiveHourly)} strong />
              </div>
            </div>
            <div className="rounded-2xl border border-violet-100 p-5">
              <p className="font-black text-violet-700">B. 이직 제안</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Stat label="월 예상 실수령" value={formatWon(result.b.monthlyNet)} />
                <Stat label="연간 체감 현금흐름" value={formatWon(result.b.annualEffectiveCash)} />
                <Stat label="연간 근무+통근" value={`${Math.round(result.b.annualTimeHours).toLocaleString("ko-KR")}시간`} />
                <Stat label="시간당 실질 보상" value={formatWon(result.b.effectiveHourly)} strong />
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-violet-50 p-5 text-sm leading-7 text-violet-900">
            <strong>해석 팁:</strong> 연봉이 올라도 근무시간과 통근시간이 크게 늘면 시간당 보상은 오히려 내려갈 수 있어요. 반대로 연봉 차이가 작아도 재택·짧은 통근·복지가 좋아지면 체감 조건은 더 좋아질 수 있습니다.
          </div>

          <ResultShareButton
            title="이직 마지노선 계산 결과"
            calculatorPath="/job-change"
            text={`💼 이직 마지노선 계산\n현재 연봉: ${current.salary.toLocaleString("ko-KR")}만원\n제안 연봉: ${offer.salary.toLocaleString("ko-KR")}만원\n이직 마지노선: ${result.breakEvenSalary.toLocaleString("ko-KR")}만원\n연간 체감 현금흐름 차이: ${formatSignedWon(result.annualCashDifference)}\n시간당 실질 보상 차이: ${formatSignedWon(result.hourlyDifference)}`}
          />
          <ResultImageButton
            eyebrow="몇이지? · 이직 마지노선"
            title="이직, 최소 얼마 받아야 할까?"
            tone="violet"
            filename="myeotiji-job-change-break-even.png"
            lines={[
              { label: "현재 연봉", value: `${current.salary.toLocaleString("ko-KR")}만원` },
              { label: "제안 연봉", value: `${offer.salary.toLocaleString("ko-KR")}만원` },
              { label: "이직 마지노선", value: `${result.breakEvenSalary.toLocaleString("ko-KR")}만원`, strong: true },
              { label: "연간 체감 현금 차이", value: formatSignedWon(result.annualCashDifference) },
              { label: "연간 시간 변화", value: formatSignedHours(result.annualTimeDifference) },
              { label: "시간당 보상 차이", value: formatSignedWon(result.hourlyDifference), strong: true },
            ]}
            caption="2026 세후 실수령 추정 + 사용자가 입력한 근무·통근·복지 조건을 같은 기준으로 비교한 참고값입니다."
          />
        </section>

        <section className="mt-6 rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-lg font-black text-amber-900">이 결과에 포함되지 않는 것</h2>
          <p className="mt-3 text-sm leading-7 text-amber-800">
            조직문화, 직무 성장성, 고용안정성, 승진 가능성, 스톡옵션의 미래가치, 퇴직금 변화처럼 숫자로 단정하기 어려운 요소는 자동 추천에 넣지 않았어요. 이 계산기는 “돈과 시간으로 환산 가능한 조건”의 마지노선을 만드는 보조도구입니다.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/salary" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 hover:bg-slate-50">연봉 실수령 정밀 계산 →</Link>
          <Link href="/retirement" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 hover:bg-slate-50">퇴직금까지 확인 →</Link>
          <Link href="/situations" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 hover:bg-slate-50">상황별 계산 가이드 →</Link>
        </div>
      </div>
    </main>
  );
}
