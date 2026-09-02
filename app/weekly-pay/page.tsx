"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import RelatedCalculators from "../_components/RelatedCalculators";

const MINIMUM_WAGE_2026 = 10_320;

function digitsOnly(value: string) {
  return value.replace(/[^\d]/g, "");
}

function formatMoneyInput(value: string) {
  const digits = digitsOnly(value);
  if (!digits) return "";
  return Number(digits).toLocaleString("ko-KR");
}

function parseMoney(value: string) {
  const parsed = Number(value.replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatWon(value: number) {
  return `${Math.round(value).toLocaleString("ko-KR")}원`;
}

function formatHours(value: number) {
  if (Number.isInteger(value)) return `${value}시간`;
  return `${value.toFixed(1).replace(/\.0$/, "")}시간`;
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
        active
          ? "border-blue-600 bg-blue-50 text-blue-700"
          : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

function ResultRow({
  label,
  value,
  emphasized = false,
}: {
  label: string;
  value: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-3 ${
        emphasized ? "text-base font-bold" : "text-sm"
      }`}
    >
      <span className={emphasized ? "text-gray-900" : "text-gray-500"}>
        {label}
      </span>
      <span className={emphasized ? "text-gray-950" : "font-semibold text-gray-800"}>
        {value}
      </span>
    </div>
  );
}

export default function WeeklyPayPage() {
  const [hourlyWage, setHourlyWage] = useState("10,320");
  const [weeklyHours, setWeeklyHours] = useState("20");
  const [fullAttendance, setFullAttendance] = useState(true);
  const [relationshipForWeek, setRelationshipForWeek] = useState(true);

  const result = useMemo(() => {
    const wage = parseMoney(hourlyWage);
    const hours = Number(weeklyHours);

    const validHours = Number.isFinite(hours) && hours >= 0 ? hours : 0;
    const qualifyingHours = validHours >= 15;
    const eligible =
      wage > 0 &&
      qualifyingHours &&
      fullAttendance &&
      relationshipForWeek;

    // 일반적인 주 40시간 통상근로자를 기준으로 한 비례 산정.
    // 주 소정근로시간이 40시간 이상이면 주휴시간은 최대 8시간으로 계산.
    const holidayHours = eligible
      ? Math.min((validHours / 40) * 8, 8)
      : 0;

    const holidayPay = holidayHours * wage;
    const baseWeeklyPay = validHours * wage;
    const weeklyPayWithHoliday = baseWeeklyPay + holidayPay;

    return {
      wage,
      hours: validHours,
      qualifyingHours,
      eligible,
      holidayHours,
      holidayPay,
      baseWeeklyPay,
      weeklyPayWithHoliday,
      minimumWageOk: wage >= MINIMUM_WAGE_2026,
    };
  }, [hourlyWage, weeklyHours, fullAttendance, relationshipForWeek]);

  const eligibilityMessage = (() => {
    if (result.wage <= 0) return "시급을 입력해 주세요.";
    if (!result.qualifyingHours)
      return "평균 주 소정근로시간이 15시간 미만이라 주휴수당 대상이 아니에요.";
    if (!fullAttendance)
      return "소정근로일을 개근하지 않은 것으로 입력되어 주휴수당을 0원으로 계산했어요.";
    if (!relationshipForWeek)
      return "해당 1주(연속 7일) 동안 근로관계가 유지되지 않은 것으로 입력되어 주휴수당을 0원으로 계산했어요.";
    return "입력한 조건 기준으로 주휴수당 발생 요건을 충족해요.";
  })();

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8">
          <Link
            href="/"
            className="mb-5 inline-flex text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            ← 몇이지? 홈
          </Link>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-bold text-blue-600">급여 · 근로</p>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                주휴수당 계산기
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                시급과 평균 주 소정근로시간을 입력하면 예상 주휴시간과
                주휴수당을 계산해 드려요.
              </p>
            </div>

            <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-gray-200">
              2026 최저시급 {MINIMUM_WAGE_2026.toLocaleString("ko-KR")}원
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <h2 className="mb-7 text-lg font-bold">조건 입력</h2>

            <div className="space-y-7">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  시급
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={hourlyWage}
                    onChange={(e) =>
                      setHourlyWage(formatMoneyInput(e.target.value))
                    }
                    placeholder="10,320"
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-4 pr-12 text-right text-lg font-bold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                    원
                  </span>
                </div>

                {result.wage > 0 && !result.minimumWageOk ? (
                  <p className="mt-2 text-xs font-medium text-red-500">
                    2026년 최저임금 {MINIMUM_WAGE_2026.toLocaleString("ko-KR")}원보다
                    낮은 금액이에요.
                  </p>
                ) : (
                  <p className="mt-2 text-xs leading-5 text-gray-400">
                    통상시급을 입력해 주세요.
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  평균 주 소정근로시간
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    max="168"
                    step="0.5"
                    value={weeklyHours}
                    onChange={(e) => setWeeklyHours(e.target.value)}
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-4 pr-16 text-right text-lg font-bold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                    시간
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  실제 추가근무 시간이 아니라 근로계약상 정해진 소정근로시간을
                  기준으로 입력해 주세요.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold">
                  1주간 소정근로일을 개근했나요?
                </p>
                <div className="flex gap-2">
                  <ToggleButton
                    active={fullAttendance}
                    onClick={() => setFullAttendance(true)}
                  >
                    예, 개근했어요
                  </ToggleButton>
                  <ToggleButton
                    active={!fullAttendance}
                    onClick={() => setFullAttendance(false)}
                  >
                    아니요
                  </ToggleButton>
                </div>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  지각·조퇴와 결근은 구분될 수 있으며, 휴가·휴일 등은 개별
                  상황에 따라 다르게 판단될 수 있어요.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold">
                  해당 1주 동안 근로관계가 유지됐나요?
                </p>
                <div className="flex gap-2">
                  <ToggleButton
                    active={relationshipForWeek}
                    onClick={() => setRelationshipForWeek(true)}
                  >
                    예
                  </ToggleButton>
                  <ToggleButton
                    active={!relationshipForWeek}
                    onClick={() => setRelationshipForWeek(false)}
                  >
                    아니요
                  </ToggleButton>
                </div>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  여기서 1주는 연속된 7일을 의미해요.
                </p>
              </div>
            </div>
          </section>

          <section className="h-fit rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8 lg:sticky lg:top-6">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500">
                예상 주휴수당
              </p>
              <div className="mt-2 text-4xl font-black tracking-tight text-blue-600">
                {formatWon(result.holidayPay)}
              </div>
            </div>

            <div
              className={`mb-6 rounded-2xl px-4 py-4 text-sm font-semibold leading-6 ${
                result.eligible
                  ? "bg-blue-50 text-blue-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {eligibilityMessage}
            </div>

            <div className="divide-y divide-gray-100 border-y border-gray-100">
              <ResultRow
                label="주 소정근로시간"
                value={formatHours(result.hours)}
              />
              <ResultRow
                label="예상 주휴시간"
                value={formatHours(result.holidayHours)}
              />
              <ResultRow
                label="근로시간 임금"
                value={formatWon(result.baseWeeklyPay)}
              />
              <ResultRow
                label="주휴수당"
                value={formatWon(result.holidayPay)}
              />
              <ResultRow
                label="주휴 포함 예상 주급"
                value={formatWon(result.weeklyPayWithHoliday)}
                emphasized
              />
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-800">계산식</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                일반적인 주 40시간 기준에서 주휴시간은
                <br />
                <span className="font-semibold text-gray-700">
                  주 소정근로시간 ÷ 40 × 8
                </span>
                로 비례 계산했어요.
              </p>
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="text-lg font-bold">주휴수당 계산 전 확인하세요</h2>

          <div className="mt-5 grid gap-4 text-sm leading-6 text-gray-600 md:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">15시간 기준</p>
              <p>
                주휴수당 발생 여부는 원칙적으로 실제로 더 일한 시간이 아니라
                근로계약상 정한 소정근로시간을 기준으로 판단해요.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">개근 기준</p>
              <p>
                해당 1주의 소정근로일을 개근해야 해요. 구체적인 휴가·휴업·결근
                처리 여부는 사실관계에 따라 달라질 수 있어요.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">단시간근로자</p>
              <p>
                사업장에 비교 대상 통상근로자가 있는 경우에는 그 근로자의
                소정근로일수 등에 따라 정확한 주휴시간 산식이 달라질 수 있어요.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">예상 금액 안내</p>
              <p>
                이 계산기는 일반적인 주 40시간 사업장을 기준으로 한 예상치예요.
                연장·야간·휴일근로 가산수당 등은 포함하지 않아요.
              </p>
            </div>
          </div>
        </section>

        <RelatedCalculators currentHref="/weekly-pay" />
      </div>
    </main>
  );
}
