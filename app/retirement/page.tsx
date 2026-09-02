"use client";

import { useMemo, useState } from "react";
import RelatedCalculators from "../_components/RelatedCalculators";

const DAY_MS = 24 * 60 * 60 * 1000;

const formatWon = (value: number) =>
  `${Math.max(0, Math.round(value)).toLocaleString("ko-KR")}원`;

const parseDate = (value: string) => {
  if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(value)) return null;

  const [year, month, day] = value.split("-").map(Number);
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;

  const date = new Date(Date.UTC(year, month - 1, day));

  // 2월 30일처럼 실제로 존재하지 않는 날짜를 걸러냅니다.
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
};

const formatDate = (date: Date | null) => {
  if (!date) return "-";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  }).format(date);
};

const addDays = (date: Date, days: number) =>
  new Date(date.getTime() + days * DAY_MS);

const subtractMonthsClamped = (date: Date, months: number) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  const targetFirst = new Date(Date.UTC(year, month - months, 1));
  const targetYear = targetFirst.getUTCFullYear();
  const targetMonth = targetFirst.getUTCMonth();
  const lastDay = new Date(
    Date.UTC(targetYear, targetMonth + 1, 0),
  ).getUTCDate();

  return new Date(Date.UTC(targetYear, targetMonth, Math.min(day, lastDay)));
};

const diffDays = (start: Date, end: Date) =>
  Math.round((end.getTime() - start.getTime()) / DAY_MS);

export default function RetirementPage() {
  const [startDate, setStartDate] = useState("2023-09-01");
  const [lastWorkDate, setLastWorkDate] = useState("2026-08-31");
  const [threeMonthWages, setThreeMonthWages] = useState(9_000_000);
  const [annualBonus, setAnnualBonus] = useState(0);
  const [annualLeavePay, setAnnualLeavePay] = useState(0);
  const [dailyOrdinaryWage, setDailyOrdinaryWage] = useState(0);
  const [weeklyHours, setWeeklyHours] = useState(40);

  const result = useMemo(() => {
    const start = parseDate(startDate);
    const lastWork = parseDate(lastWorkDate);

    if (!start || !lastWork) {
      return {
        valid: false,
        error: "입사일과 마지막 근무일을 확인해 주세요.",
      } as const;
    }

    const retirementDate = addDays(lastWork, 1);

    if (retirementDate <= start) {
      return {
        valid: false,
        error: "마지막 근무일은 입사일 이후여야 해요.",
      } as const;
    }

    const serviceDays = diffDays(start, retirementDate);
    const averageStart = subtractMonthsClamped(retirementDate, 3);
    const averagePeriodDays = diffDays(averageStart, retirementDate);

    const wages = Math.max(0, threeMonthWages);
    const bonusAdded = Math.max(0, annualBonus) * (3 / 12);
    const leaveAdded = Math.max(0, annualLeavePay) * (3 / 12);
    const averageWageBase = wages + bonusAdded + leaveAdded;
    const dailyAverageWage =
      averagePeriodDays > 0 ? averageWageBase / averagePeriodDays : 0;

    const ordinaryWage = Math.max(0, dailyOrdinaryWage);
    const appliedDailyWage = Math.max(dailyAverageWage, ordinaryWage);

    const serviceEligible = serviceDays >= 365;
    const hoursEligible = weeklyHours >= 15;
    const eligible = serviceEligible && hoursEligible;

    const retirementPay = eligible
      ? appliedDailyWage * 30 * (serviceDays / 365)
      : 0;

    return {
      valid: true,
      start,
      lastWork,
      retirementDate,
      serviceDays,
      averageStart,
      averagePeriodDays,
      wages,
      bonusAdded,
      leaveAdded,
      averageWageBase,
      dailyAverageWage,
      ordinaryWage,
      appliedDailyWage,
      serviceEligible,
      hoursEligible,
      eligible,
      retirementPay,
    } as const;
  }, [
    startDate,
    lastWorkDate,
    threeMonthWages,
    annualBonus,
    annualLeavePay,
    dailyOrdinaryWage,
    weeklyHours,
  ]);

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
            고용노동부 기준
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            퇴직금 계산기
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            근무기간과 퇴직 전 임금을 입력하면 1일 평균임금과 예상 퇴직금을
            계산해요.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-lg font-extrabold">조건 입력</h2>

            <div className="space-y-6">
              <div className="space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">
                    입사일
                  </span>
                  <DateInput value={startDate} onChange={setStartDate} />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">
                    마지막 근무일
                  </span>
                  <DateInput value={lastWorkDate} onChange={setLastWorkDate} />
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    퇴직일은 마지막 근무일의 다음 날로 자동 계산해요.
                  </p>
                </label>
              </div>

              <MoneyInput
                label="퇴직 전 3개월 임금 총액"
                value={threeMonthWages}
                onChange={setThreeMonthWages}
                description="기본급과 임금에 해당하는 각종 수당을 합한 세전 금액을 입력하세요."
              />

              <MoneyInput
                label="퇴직 전 1년간 정기상여금 총액"
                value={annualBonus}
                onChange={setAnnualBonus}
                description="정기적으로 지급되는 등 임금에 해당하는 상여금만 입력하세요. 입력액의 3/12을 반영해요."
              />

              <MoneyInput
                label="평균임금에 반영되는 연차수당 총액"
                value={annualLeavePay}
                onChange={setAnnualLeavePay}
                description="퇴직 전에 이미 발생해 평균임금에 포함되는 미사용 연차수당을 입력하세요. 입력액의 3/12을 반영해요."
              />

              <MoneyInput
                label="1일 통상임금 (선택)"
                value={dailyOrdinaryWage}
                onChange={setDailyOrdinaryWage}
                description="1일 평균임금보다 통상임금이 높다면 통상임금을 기준으로 계산해요. 모르면 0원으로 두세요."
              />

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700">
                  주 소정근로시간
                </span>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={weeklyHours}
                    onChange={(e) => setWeeklyHours(Number(e.target.value))}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-16 text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                    시간
                  </span>
                </div>
              </label>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            {!result.valid ? (
              <div>
                <p className="text-sm font-semibold text-rose-300">입력 확인</p>
                <p className="mt-3 text-lg font-bold">{result.error}</p>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-slate-400">
                  예상 퇴직금
                </p>
                <div className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                  {formatWon(result.retirementPay)}
                </div>

                <div
                  className={`mt-4 inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${
                    result.eligible
                      ? "bg-emerald-400/10 text-emerald-300"
                      : "bg-amber-400/10 text-amber-300"
                  }`}
                >
                  {result.eligible
                    ? "법정 퇴직금 대상 조건 충족"
                    : "법정 퇴직금 대상 조건 미충족"}
                </div>

                <div className="my-7 h-px bg-slate-800" />

                <div className="space-y-4 text-sm">
                  <ResultTextRow
                    label="퇴직일"
                    value={formatDate(result.retirementDate)}
                  />
                  <ResultTextRow
                    label="재직일수"
                    value={`${result.serviceDays.toLocaleString("ko-KR")}일`}
                  />
                  <ResultTextRow
                    label="평균임금 계산기간"
                    value={`${formatDate(result.averageStart)} ~ ${formatDate(
                      result.lastWork,
                    )}`}
                  />
                  <ResultTextRow
                    label="계산기간 총일수"
                    value={`${result.averagePeriodDays}일`}
                  />
                  <ResultMoneyRow
                    label="3개월 임금"
                    value={result.wages}
                  />
                  <ResultMoneyRow
                    label="상여금 가산액"
                    value={result.bonusAdded}
                  />
                  <ResultMoneyRow
                    label="연차수당 가산액"
                    value={result.leaveAdded}
                  />
                </div>

                <div className="my-6 h-px bg-slate-800" />

                <div className="space-y-4">
                  <ResultMoneyRow
                    label="1일 평균임금"
                    value={result.dailyAverageWage}
                    strong
                  />
                  {result.ordinaryWage > 0 && (
                    <ResultMoneyRow
                      label="1일 통상임금"
                      value={result.ordinaryWage}
                    />
                  )}
                  <ResultMoneyRow
                    label="퇴직금 적용 1일 임금"
                    value={result.appliedDailyWage}
                    strong
                  />
                </div>

                {!result.serviceEligible && (
                  <p className="mt-6 rounded-2xl bg-amber-400/10 p-4 text-xs leading-5 text-amber-200">
                    계속근로기간이 1년 미만이라 법정 퇴직금 대상 조건을 충족하지
                    않아요.
                  </p>
                )}

                {!result.hoursEligible && (
                  <p className="mt-3 rounded-2xl bg-amber-400/10 p-4 text-xs leading-5 text-amber-200">
                    4주 평균 주 소정근로시간이 15시간 미만인 경우 법정 퇴직급여
                    적용 대상에서 제외될 수 있어요.
                  </p>
                )}
              </>
            )}
          </section>
        </div>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-extrabold">계산 기준</h2>
          <div className="mt-4 space-y-2 text-sm leading-6 text-slate-500">
            <p>
              • 퇴직금은 원칙적으로 1일 평균임금 × 30일 × (재직일수 ÷ 365)로
              계산합니다.
            </p>
            <p>
              • 평균임금은 퇴직일 이전 3개월간 임금총액을 해당 기간의 달력상
              총일수로 나누어 계산합니다.
            </p>
            <p>
              • 정기상여금과 평균임금에 포함되는 연차수당은 최근 1년 총액의
              3/12을 3개월 임금총액에 가산합니다.
            </p>
            <p>
              • 산출된 1일 평균임금이 1일 통상임금보다 낮으면 통상임금을
              기준으로 계산합니다.
            </p>
            <p>
              • 육아휴직, 업무상 재해, 휴업 등 평균임금 산정에서 제외되는 기간이
              있거나 퇴직연금 제도 유형이 다른 경우 실제 금액과 차이가 날 수
              있습니다.
            </p>
            <p>
              • 표시되는 금액은 세전 예상 퇴직금이며, 실제 지급액은 퇴직소득세
              등을 반영하면 달라집니다.
            </p>
          </div>
        </section>

        <RelatedCalculators currentHref="/retirement" />
      </div>
    </main>
  );
}

function DateInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [year = "", month = "", day = ""] = value.split("-");

  const updatePart = (part: "year" | "month" | "day", raw: string) => {
    const maxLength = part === "year" ? 4 : 2;
    const cleaned = raw.replace(/\D/g, "").slice(0, maxLength);

    const nextYear = part === "year" ? cleaned : year;
    const nextMonth = part === "month" ? cleaned : month;
    const nextDay = part === "day" ? cleaned : day;

    onChange(`${nextYear}-${nextMonth}-${nextDay}`);
  };

  const fieldClass =
    "min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-1 py-4 text-center text-base font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50 sm:px-2";

  return (
    <div className="grid w-full grid-cols-[minmax(72px,1fr)_auto_minmax(50px,64px)_auto_minmax(50px,64px)_auto] items-center gap-x-1.5">
      <input
        type="text"
        inputMode="numeric"
        autoComplete="off"
        maxLength={4}
        value={year}
        onChange={(e) => updatePart("year", e.target.value)}
        placeholder="2026"
        aria-label="년도"
        className={`${fieldClass} w-full`}
      />
      <span className="text-xs font-bold text-slate-400">년</span>

      <input
        type="text"
        inputMode="numeric"
        autoComplete="off"
        maxLength={2}
        value={month}
        onChange={(e) => updatePart("month", e.target.value)}
        placeholder="09"
        aria-label="월"
        className={`${fieldClass} w-full`}
      />
      <span className="text-xs font-bold text-slate-400">월</span>

      <input
        type="text"
        inputMode="numeric"
        autoComplete="off"
        maxLength={2}
        value={day}
        onChange={(e) => updatePart("day", e.target.value)}
        placeholder="01"
        aria-label="일"
        className={`${fieldClass} w-full`}
      />
      <span className="text-xs font-bold text-slate-400">일</span>
    </div>
  );
}

function MoneyInput({
  label,
  value,
  onChange,
  description,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  description?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </span>
      <div className="relative">
        <input
          type="text"
          inputMode="numeric"
          autoComplete="off"
          value={value === 0 ? "" : value.toLocaleString("ko-KR")}
          onChange={(e) => {
            const digitsOnly = e.target.value.replace(/\D/g, "");
            onChange(digitsOnly ? Number(digitsOnly) : 0);
          }}
          placeholder="0"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 pr-14 text-lg font-bold outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
          원
        </span>
      </div>
      {description && (
        <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
      )}
    </label>
  );
}

function ResultMoneyRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: number;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className={strong ? "font-bold text-slate-200" : "text-slate-400"}>
        {label}
      </span>
      <span className={strong ? "font-extrabold" : "font-semibold text-slate-200"}>
        {formatWon(value)}
      </span>
    </div>
  );
}

function ResultTextRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-slate-400">{label}</span>
      <span className="text-right font-semibold text-slate-200">{value}</span>
    </div>
  );
}
