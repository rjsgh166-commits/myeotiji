"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ResultActionBar from "../_components/ResultActionBar";
import SaveCalculationButton from "../_components/SaveCalculationButton";
import StickyResultBar from "../_components/StickyResultBar";
import AccessibleResultStatus from "../_components/AccessibleResultStatus";
import ExamplePreviewNotice from "../_components/ExamplePreviewNotice";
import TrustStrip from "../_components/TrustStrip";
import CalculationAnalytics from "../_components/CalculationAnalytics";
import ViewEventTracker from "../_components/ViewEventTracker";
import { consumeCalculationTransfer, storeCalculationTransfer } from "../_lib/calculationTransfer";
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
  const annualWorkCost = Math.max(0, scenario.monthlyWorkCost) * 10_000 * 12;
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

function calculateBreakEvenSalary(
  targetHourly: number,
  offerScenario: Scenario,
  familyCount: number,
  childrenCount: number,
) {
  let low = 0;
  let high = Math.max(30_000, offerScenario.salary * 2);
  while (
    analyzeScenario({ ...offerScenario, salary: high }, familyCount, childrenCount).effectiveHourly < targetHourly &&
    high < 1_000_000
  ) {
    high *= 2;
  }
  for (let i = 0; i < 48; i += 1) {
    const mid = (low + high) / 2;
    const candidate = analyzeScenario(
      { ...offerScenario, salary: mid },
      familyCount,
      childrenCount,
    );
    if (candidate.effectiveHourly < targetHourly) low = mid;
    else high = mid;
  }
  return Math.ceil(high / 10) * 10;
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
  const [draft, setDraft] = useState(String(value));
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (!editing) setDraft(String(value));
  }, [value, editing]);

  const commit = () => {
    const parsed = Number(draft);
    if (draft.trim() === "" || !Number.isFinite(parsed)) {
      setDraft(String(value));
      return;
    }
    const next = Math.max(min, parsed);
    onChange(next);
    setDraft(String(next));
  };

  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <div className="relative mt-2">
        <input
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={draft}
          onFocus={() => setEditing(true)}
          onChange={(event) => {
            const raw = event.target.value;
            setDraft(raw);
            if (raw.trim() === "") return;
            const parsed = Number(raw);
            if (Number.isFinite(parsed)) onChange(Math.max(min, parsed));
          }}
          onBlur={() => {
            setEditing(false);
            commit();
          }}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-16 text-base font-bold outline-none transition focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-50"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500" aria-hidden="true">
          {unit}
        </span>
      </div>
      {description && (
        <p className="mt-1.5 text-xs leading-5 text-slate-500">{description}</p>
      )}
    </label>
  );
}

function ScenarioEditor({
  title,
  scenario,
  setScenario,
  accent = false,
  advanced = false,
}: {
  title: string;
  scenario: Scenario;
  setScenario: (scenario: Scenario) => void;
  accent?: boolean;
  advanced?: boolean;
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
          label="주당 실제 근무시간"
          value={scenario.weeklyHours}
          onChange={(value) => set("weeklyHours", value)}
          unit="시간"
          step={0.5}
          description="평균 야근까지 포함"
        />
        <NumericInput
          label="편도 출퇴근"
          value={scenario.commuteOneWay}
          onChange={(value) => set("commuteOneWay", value)}
          unit="분"
          step={5}
        />
        {!advanced ? (
          <div>
            <p className="text-sm font-bold text-slate-700">주 출근일</p>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {[0, 2, 3, 5].map((days) => (
                <button
                  key={days}
                  type="button"
                  data-calculation-control="true"
                  onClick={() => set("commuteDays", days)}
                  aria-pressed={scenario.commuteDays === days}
                  className={`rounded-xl border px-2 py-3 text-sm font-semibold transition ${
                    scenario.commuteDays === days
                      ? "border-violet-500 bg-violet-50 text-violet-700"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {days}일
                </button>
              ))}
            </div>
            <p className="mt-1.5 text-xs leading-5 text-slate-500">현재 {scenario.commuteDays}일 · 재택일은 제외한 주 평균 출근일</p>
          </div>
        ) : null}
        {advanced ? (
          <>
            <NumericInput
              label="월 비과세액"
              value={scenario.taxFree}
              onChange={(value) => set("taxFree", value)}
              unit="만원"
              description="식대 등 매월 비과세 금액"
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
              unit="만원"
              step={1}
              description="교통·주차비 등을 월 단위로 입력"
            />
            <div className="sm:col-span-2">
              <NumericInput
                label="연간 보너스·복지 체감가치"
                value={scenario.annualExtraValue}
                onChange={(value) => set("annualExtraValue", value)}
                unit="만원"
                step={10}
                description="세후 보너스·복지포인트 등 실제 가치라고 보는 연간 금액"
              />
            </div>
          </>
        ) : null}
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
  const [advanced, setAdvanced] = useState(false);
  const [isExample, setIsExample] = useState(true);
  const [familyCount, setFamilyCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [current, setCurrent] = useState<Scenario>({
    salary: 5_000,
    taxFree: 20,
    weeklyHours: 40,
    commuteOneWay: 40,
    commuteDays: 5,
    monthlyWorkCost: 0,
    annualExtraValue: 0,
  });
  const [offer, setOffer] = useState<Scenario>({
    salary: 6_000,
    taxFree: 20,
    weeklyHours: 40,
    commuteOneWay: 60,
    commuteDays: 5,
    monthlyWorkCost: 0,
    annualExtraValue: 0,
  });
  const [undoOffer, setUndoOffer] = useState<Scenario | null>(null);

  useEffect(() => {
    const transferred = consumeCalculationTransfer("/job-change") || {};
    if (Object.keys(transferred).length > 0) setIsExample(false);
    const params = new URLSearchParams(window.location.search);
    const readNumber = (stateKey: string, legacyKeys: string[], fallback: number) => {
      let raw: unknown = transferred[stateKey];
      if (raw === undefined) {
        for (const key of legacyKeys) {
          const transferredLegacy = transferred[key];
          if (transferredLegacy !== undefined) { raw = transferredLegacy; break; }
          const candidate = params.get(key);
          if (candidate !== null) { raw = candidate; break; }
        }
      }
      if (raw === undefined || raw === null) return fallback;
      const value = Number(raw);
      return Number.isFinite(value) ? value : fallback;
    };

    setAdvanced(Boolean(transferred.advanced));
    setFamilyCount(Math.max(1, readNumber("familyCount", ["family"], 1)));
    setChildrenCount(Math.max(0, readNumber("childrenCount", ["children"], 0)));
    const normalizeWorkCost = (value: number) => value > 10_000 ? value / 10_000 : value;

    setCurrent((previous) => ({
      ...previous,
      salary: readNumber("currentSalary", ["cSalary", "currentSalary"], previous.salary),
      taxFree: readNumber("currentTaxFree", ["cTaxFree"], previous.taxFree),
      weeklyHours: readNumber("currentWeeklyHours", ["cWeeklyHours"], previous.weeklyHours),
      commuteOneWay: readNumber("currentCommute", ["cCommute"], previous.commuteOneWay),
      commuteDays: readNumber("currentCommuteDays", ["cCommuteDays"], previous.commuteDays),
      monthlyWorkCost: normalizeWorkCost(readNumber("currentWorkCost", ["cWorkCost"], previous.monthlyWorkCost)),
      annualExtraValue: readNumber("currentExtra", ["cExtra"], previous.annualExtraValue),
    }));
    setOffer((previous) => ({
      ...previous,
      salary: readNumber("offerSalary", ["oSalary", "offerSalary"], previous.salary),
      taxFree: readNumber("offerTaxFree", ["oTaxFree"], previous.taxFree),
      weeklyHours: readNumber("offerWeeklyHours", ["oWeeklyHours"], previous.weeklyHours),
      commuteOneWay: readNumber("offerCommute", ["oCommute"], previous.commuteOneWay),
      commuteDays: readNumber("offerCommuteDays", ["oCommuteDays"], previous.commuteDays),
      monthlyWorkCost: normalizeWorkCost(readNumber("offerWorkCost", ["oWorkCost"], previous.monthlyWorkCost)),
      annualExtraValue: readNumber("offerExtra", ["oExtra"], previous.annualExtraValue),
    }));

    if (window.location.search) window.history.replaceState({}, "", "/job-change");
  }, []);

  const result = useMemo(() => {
    const a = analyzeScenario(current, familyCount, childrenCount);
    const b = analyzeScenario(offer, familyCount, childrenCount);

    const breakEvenSalary = calculateBreakEvenSalary(
      a.effectiveHourly,
      offer,
      familyCount,
      childrenCount,
    );
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

  const whatIfScenarios = useMemo(() => {
    const targetHourly = result.a.effectiveHourly;
    const variants: {
      id: string;
      title: string;
      scenario: Scenario;
    }[] = [];

    const daysReduction = Math.min(2, Math.max(0, offer.commuteDays));
    if (daysReduction > 0) {
      variants.push({
        id: "remote",
        title: `주 출근을 ${daysReduction}일 줄이면`,
        scenario: { ...offer, commuteDays: Math.max(0, offer.commuteDays - daysReduction) },
      });
    }

    const commuteReduction = Math.min(20, Math.max(0, offer.commuteOneWay));
    if (commuteReduction > 0) {
      variants.push({
        id: "commute",
        title: `편도 통근을 ${commuteReduction}분 줄이면`,
        scenario: { ...offer, commuteOneWay: Math.max(0, offer.commuteOneWay - commuteReduction) },
      });
    }

    const hoursReduction = Math.min(5, Math.max(0, offer.weeklyHours - 1));
    if (hoursReduction > 0) {
      variants.push({
        id: "hours",
        title: `주 근무를 ${hoursReduction}시간 줄이면`,
        scenario: { ...offer, weeklyHours: Math.max(1, offer.weeklyHours - hoursReduction) },
      });
    }

    return variants.map((variant) => {
      const breakEvenSalary = calculateBreakEvenSalary(
        targetHourly,
        variant.scenario,
        familyCount,
        childrenCount,
      );
      return {
        ...variant,
        breakEvenSalary,
        difference: breakEvenSalary - result.breakEvenSalary,
        salaryEquivalent: Math.max(0, result.breakEvenSalary - breakEvenSalary),
      };
    });
  }, [offer, familyCount, childrenCount, result.a.effectiveHourly, result.breakEvenSalary]);

  const conclusion =
    result.offerVsBreakEven >= 0
      ? `시간·출퇴근·비용까지 반영하면 제안 연봉은 마지노선보다 ${Math.abs(result.offerVsBreakEven).toLocaleString("ko-KR")}만원 높아요.`
      : `시간·출퇴근·비용까지 반영하면 제안 연봉은 마지노선보다 ${Math.abs(result.offerVsBreakEven).toLocaleString("ko-KR")}만원 낮아요.`;

  const savedState = {
    advanced, familyCount, childrenCount,
    currentSalary: current.salary, currentTaxFree: current.taxFree, currentWeeklyHours: current.weeklyHours,
    currentCommute: current.commuteOneWay, currentCommuteDays: current.commuteDays, currentWorkCost: current.monthlyWorkCost, currentExtra: current.annualExtraValue,
    offerSalary: offer.salary, offerTaxFree: offer.taxFree, offerWeeklyHours: offer.weeklyHours,
    offerCommute: offer.commuteOneWay, offerCommuteDays: offer.commuteDays, offerWorkCost: offer.monthlyWorkCost, offerExtra: offer.annualExtraValue,
  };
  const salaryState = {
    annualSalary: current.salary, compareSalary: offer.salary, monthlyTaxFree: current.taxFree, familyCount, childrenCount,
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 pb-28 pt-10 text-slate-900 sm:pt-14 lg:pb-14" onInputCapture={() => setIsExample(false)} onClickCapture={(event) => { if ((event.target as HTMLElement).closest("button")) setIsExample(false); }}>
      <CalculationAnalytics
        calculator="job_change"
        mode="break_even"
        hasCompare
        valid={current.salary > 0 && offer.salary > 0}
        signature={`${familyCount}|${childrenCount}|${Object.values(current).join("|")}|${Object.values(offer).join("|")}`}
      />
      <ViewEventTracker
        targetId="job-change-decision"
        eventName="decision_view"
        params={{ calculator: "job_change" }}
      />
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7 max-w-4xl">
          <div className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-black text-violet-700">
            몇이지? 선택 계산 · 2026 기준
          </div>
          <p className="mt-5 text-sm font-semibold text-violet-600">연봉뿐 아니라 시간까지 비교</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
            이직 마지노선 연봉 계산기
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            연봉만 더 높은 회사가 정말 더 나은 조건일까요? 세후 실수령액에 근무시간,
            출퇴근 시간·비용, 보너스·복지의 체감가치까지 같은 기준으로 환산해
            <strong className="text-slate-900"> “최소 얼마를 받아야 본전인지”</strong> 계산해요.
          </p>
        </header>

        <div className="mt-6"><ExamplePreviewNotice active={isExample} /></div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4">
          <div>
            <p className="text-sm font-semibold text-slate-800">입력은 간단하게 시작해도 돼요</p>
            <p className="mt-1 text-xs text-slate-500">기본은 연봉·근무시간·출퇴근·주 출근일만 비교합니다.</p>
          </div>
          <button type="button" onClick={() => setAdvanced((value) => !value)} aria-expanded={advanced} aria-controls="job-change-advanced" className="min-h-11 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-100">
            {advanced ? "간편 계산으로" : "+ 상세 조건까지 반영"}
          </button>
        </div>

        {advanced ? (
        <section id="job-change-advanced" className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black text-slate-500">공통 세금 조건</p>
              <h2 className="mt-1 text-lg font-black">두 직장에 같은 가족 조건을 적용해요</h2>
            </div>
            <div className="grid w-full gap-3 sm:w-auto sm:grid-cols-2">
              <NumericInput label="공제대상가족" value={familyCount} onChange={(v) => setFamilyCount(Math.max(1, v))} unit="명" min={1} />
              <NumericInput label="8~20세 자녀" value={childrenCount} onChange={(v) => setChildrenCount(Math.max(0, v))} unit="명" />
            </div>
          </div>
        </section>
        ) : null}

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <ScenarioEditor title="A. 현재 직장" scenario={current} setScenario={setCurrent} advanced={advanced} />
          <ScenarioEditor title="B. 이직 제안" scenario={offer} setScenario={(scenario) => { setOffer(scenario); setUndoOffer(null); }} accent advanced={advanced} />
        </div>

        <section id="job-change-decision" className="mt-6 scroll-mt-24 overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
          <p className="text-xs font-semibold text-violet-300">몇이지? 결론</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">{conclusion}</h2>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs font-bold text-slate-400">이직 마지노선 연봉</p>
              <p className="mt-1 text-xl font-black text-violet-300">{result.breakEvenSalary.toLocaleString("ko-KR")}만원</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs font-bold text-slate-400">1년에 실제로 남는 돈 차이</p>
              <p className="mt-1 text-xl font-black">{formatSignedWon(result.annualCashDifference)}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs font-bold text-slate-400">1년 근무+출퇴근 시간 차이</p>
              <p className="mt-1 text-xl font-black">{formatSignedHours(result.annualTimeDifference)}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs font-bold text-slate-400">내 시간 1시간 가치 차이</p>
              <p className="mt-1 text-xl font-black">{formatSignedWon(result.hourlyDifference)}</p>
            </div>
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-400">
            마지노선 연봉은 B의 근무·출퇴근 조건에서 A와 같은 ‘시간당 실질 보상’을 만들기 위해 필요한 세전 연봉을 역산한 값이에요.
          </p>
        </section>

        <ResultActionBar
            calculatorPath="/job-change"
            shareTitle="이직 마지노선 계산 결과"
            shareText={`💼 이직 마지노선 계산\n현재 연봉: ${current.salary.toLocaleString("ko-KR")}만원\n제안 연봉: ${offer.salary.toLocaleString("ko-KR")}만원\n이직 마지노선: ${result.breakEvenSalary.toLocaleString("ko-KR")}만원\n1년에 실제로 남는 돈 차이: ${formatSignedWon(result.annualCashDifference)}\n내 시간 1시간 가치 차이: ${formatSignedWon(result.hourlyDifference)}`}
            image={{
              eyebrow: "몇이지? · 이직 마지노선",
              title: "이직, 최소 얼마 받아야 할까?",
              tone: "violet",
              filename: "myeotiji-job-change-break-even.png",
              lines: [
                { label: "현재 연봉", value: `${current.salary.toLocaleString("ko-KR")}만원` },
                { label: "제안 연봉", value: `${offer.salary.toLocaleString("ko-KR")}만원` },
                { label: "이직 마지노선", value: `${result.breakEvenSalary.toLocaleString("ko-KR")}만원`, strong: true },
                { label: "1년에 실제로 남는 돈 차이", value: formatSignedWon(result.annualCashDifference) },
                { label: "근무+출퇴근 시간 차이", value: formatSignedHours(result.annualTimeDifference) },
                { label: "내 시간 1시간 가치 차이", value: formatSignedWon(result.hourlyDifference), strong: true },
              ],
              caption: "2026 세후 실수령 추정 + 사용자가 입력한 근무·통근·복지 조건을 같은 기준으로 비교한 참고값입니다.",
            }}
          >
            <SaveCalculationButton
              title={`이직 ${current.salary.toLocaleString("ko-KR")} → ${offer.salary.toLocaleString("ko-KR")}만원`}
              href="/job-change"
              state={savedState}
              primaryValue={`마지노선 ${result.breakEvenSalary.toLocaleString("ko-KR")}만원`}
              summary={`내 시간 1시간 가치 ${formatSignedWon(result.hourlyDifference)}`}
            />
        </ResultActionBar>

        <TrustStrip
          items={["2026년 세후 추정", "국세청 간이세액표 반영", "근무·통근시간 직접 반영", "입력값은 브라우저에서만 계산"]}
          note="조직문화·성장성·스톡옵션처럼 금액으로 단정하기 어려운 요소는 결론에서 제외했어요."
        />

        {whatIfScenarios.length > 0 ? (
          <section id="job-change-what-if" className="mt-6 rounded-3xl border border-violet-100 bg-white p-6 shadow-sm sm:p-8">
            <ViewEventTracker
              targetId="job-change-what-if"
              eventName="what_if_view"
              params={{ calculator: "job_change" }}
            />
            <ViewEventTracker
              targetId="job-change-what-if"
              eventName="job_condition_value_view"
              params={{ calculator: "job_change", scenario_count: whatIfScenarios.length }}
            />
            <div>
              <p className="text-xs font-semibold text-violet-600">조건이 바뀌면?</p>
              <h2 className="mt-1 text-xl font-bold">연봉 말고 조건으로 협상해보세요</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                재택·통근·근무시간이 달라질 때 같은 시간당 가치를 만들기 위한 연봉 마지노선이 얼마나 움직이는지 보여드려요.
              </p>
            </div>

            <div className="mt-5 grid gap-3 lg:grid-cols-3">
              {whatIfScenarios.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-sm font-semibold text-slate-700">{item.title}</p>
                  <p className="mt-2 text-2xl font-bold text-violet-700">
                    {item.breakEvenSalary.toLocaleString("ko-KR")}만원
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.difference === 0
                      ? "현재 마지노선과 같아요."
                      : item.difference < 0
                        ? `현재보다 ${Math.abs(item.difference).toLocaleString("ko-KR")}만원 낮아져요.`
                        : `현재보다 ${item.difference.toLocaleString("ko-KR")}만원 높아져요.`}
                  </p>
                  {item.salaryEquivalent > 0 ? (
                    <div className="mt-3 rounded-xl bg-violet-50 px-3 py-2.5">
                      <p className="text-xs font-semibold text-violet-600">연봉으로 환산한 조건 가치</p>
                      <p className="mt-0.5 text-sm font-bold text-violet-800">약 +{item.salaryEquivalent.toLocaleString("ko-KR")}만원</p>
                    </div>
                  ) : null}
                  <button
                    type="button"
                    data-calculation-control="true"
                    data-ga-event="what_if_apply"
                    data-ga-scenario={item.id}
                    data-ga-calculator="job_change"
                    onClick={() => { setUndoOffer({ ...offer }); setOffer(item.scenario); }}
                    className="mt-4 min-h-11 rounded-lg px-2 text-sm font-semibold text-violet-700 hover:bg-violet-50 hover:text-violet-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-100"
                  >
                    이 조건 적용 →
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-violet-100 bg-violet-50/60 p-4 text-sm leading-6 text-violet-900">
              <strong>협상에 이렇게 써보세요.</strong> 연봉으로 환산한 조건 가치는 해당 조건 개선으로 이직 마지노선이 얼마나 낮아지는지를 뜻해요. 예를 들어 +200만원이면 그 조건 개선이 대략 연봉 200만원 인상과 비슷한 효과를 낸다는 의미입니다.
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              What-if는 다른 조건은 그대로 두고 한 가지 조건만 바꿔 비교한 참고값이에요.
            </p>
          </section>
        ) : null}

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-violet-600">두 조건 비교</p>
              <h2 className="mt-1 text-xl font-bold">왜 이런 결론이 나왔을까?</h2>
            </div>
            <p className="text-xs text-slate-500">보너스·복지는 사용자가 입력한 체감가치를 그대로 사용</p>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 p-5">
              <p className="font-black">A. 현재 직장</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Stat label="월 예상 실수령" value={formatWon(result.a.monthlyNet)} />
                <Stat label="1년에 실제로 남는 돈" value={formatWon(result.a.annualEffectiveCash)} />
                <Stat label="1년 근무+출퇴근" value={`${Math.round(result.a.annualTimeHours).toLocaleString("ko-KR")}시간`} />
                <Stat label="내 시간 1시간 가치" value={formatWon(result.a.effectiveHourly)} strong />
              </div>
            </div>
            <div className="rounded-2xl border border-violet-100 p-5">
              <p className="font-black text-violet-700">B. 이직 제안</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Stat label="월 예상 실수령" value={formatWon(result.b.monthlyNet)} />
                <Stat label="1년에 실제로 남는 돈" value={formatWon(result.b.annualEffectiveCash)} />
                <Stat label="1년 근무+출퇴근" value={`${Math.round(result.b.annualTimeHours).toLocaleString("ko-KR")}시간`} />
                <Stat label="내 시간 1시간 가치" value={formatWon(result.b.effectiveHourly)} strong />
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-violet-50 p-5 text-sm leading-7 text-violet-900">
            <strong>해석 팁:</strong> 연봉이 올라도 근무시간과 통근시간이 크게 늘면 시간당 보상은 오히려 내려갈 수 있어요. 반대로 연봉 차이가 작아도 재택·짧은 통근·복지가 좋아지면 체감 조건은 더 좋아질 수 있습니다.
          </div>


        </section>

        <section className="mt-6 rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-lg font-black text-amber-900">이 결과에 포함되지 않는 것</h2>
          <p className="mt-3 text-sm leading-7 text-amber-800">
            조직문화, 직무 성장성, 고용안정성, 승진 가능성, 스톡옵션의 미래가치, 퇴직금 변화처럼 숫자로 단정하기 어려운 요소는 자동 추천에 넣지 않았어요. 이 계산기는 “돈과 시간으로 환산 가능한 조건”의 마지노선을 만드는 보조도구입니다.
          </p>
        </section>

        <div className="mt-8 flex flex-wrap gap-3 pb-20 lg:pb-0">
          <Link href="/salary" onClick={() => storeCalculationTransfer("/salary", salaryState)} data-ga-event="calculation_continue" data-ga-from-calculator="job_change" data-ga-destination="/salary" className="rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white hover:bg-violet-700">이 연봉으로 실수령 비교 →</Link>
          <Link href="/retirement" data-ga-event="calculation_continue" data-ga-from-calculator="job_change" data-ga-destination="/retirement" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">퇴직금까지 확인 →</Link>
          <Link href="/situations" data-ga-event="calculation_continue" data-ga-from-calculator="job_change" data-ga-destination="/situations" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">상황별 계산 가이드 →</Link>
        </div>
        <AccessibleResultStatus
          signature={`${familyCount}|${childrenCount}|${Object.values(current).join("|")}|${Object.values(offer).join("|")}`}
          message={`계산 결과가 업데이트되었습니다. 이직 마지노선 연봉은 ${result.breakEvenSalary.toLocaleString("ko-KR")}만원입니다.`}
        />
      </div>

      {undoOffer ? (
        <div className="fixed bottom-24 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-3 rounded-full bg-slate-950 px-4 py-3 text-sm text-white shadow-xl lg:bottom-6" role="status" aria-live="polite">
          <span>제안 조건을 적용했어요.</span>
          <button type="button" onClick={() => { setOffer(undoOffer); setUndoOffer(null); }} className="min-h-10 rounded-lg px-2 font-bold text-violet-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">되돌리기</button>
          <button type="button" onClick={() => setUndoOffer(null)} className="min-h-10 min-w-10 rounded-lg text-slate-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white" aria-label="알림 닫기">✕</button>
        </div>
      ) : null}

      <StickyResultBar
        calculator="job_change"
        label="이직 마지노선"
        value={`${result.breakEvenSalary.toLocaleString("ko-KR")}만원`}
        targetId="job-change-decision"
        tone="violet"
      />
    </main>
  );
}
