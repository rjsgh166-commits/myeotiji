"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import RelatedCalculators from "../_components/RelatedCalculators";
import {
  calendarDiff,
  diffDays,
  parseISODate,
  todayParts,
  toUtcMs,
} from "../_lib/dateUtils";

type Size = "small" | "medium" | "large";

const extraRate: Record<Size, number> = {
  small: 4,
  medium: 5,
  large: 6,
};

const seniorStart: Record<Size, number> = {
  small: 8,
  medium: 7,
  large: 6,
};

function humanEquivalent(years: number, size: Size) {
  if (years <= 1) return years * 15;
  if (years <= 2) return 15 + (years - 1) * 9;
  return 24 + (years - 2) * extraRate[size];
}

export default function DogAgePage() {
  const [birthDate, setBirthDate] = useState("");
  const [size, setSize] = useState<Size>("small");

  const result = useMemo(() => {
    const birth = parseISODate(birthDate);
    const today = todayParts();

    if (!birth || toUtcMs(birth) > toUtcMs(today)) return null;

    const days = diffDays(birth, today);
    const yearsFloat = days / 365.2425;
    const age = calendarDiff(birth, today);
    const human = humanEquivalent(yearsFloat, size);

    const stage =
      yearsFloat < 1
        ? "퍼피"
        : yearsFloat < 3
          ? "청년기"
          : yearsFloat < seniorStart[size]
            ? "성견"
            : "시니어";

    return { days, age, human, stage };
  }, [birthDate, size]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">← 몇이지? 홈</Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">PET</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">반려견 나이 계산기</h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            우리 강아지가 실제로 몇 살인지, 사람 나이로는 대략 몇 살인지 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <label className="block">
              <span className="text-sm font-bold">생년월일</span>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-base outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              />
            </label>

            <div className="mt-5">
              <p className="text-sm font-bold">체급</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {[
                  ["small", "소형견", "10kg 이하"],
                  ["medium", "중형견", "10~25kg"],
                  ["large", "대형견", "25kg 이상"],
                ].map(([id, label, sub]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSize(id as Size)}
                    className={`rounded-2xl px-2 py-3 text-center ${
                      size === id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <span className="block text-sm font-bold">{label}</span>
                    <span className={`mt-1 block text-[11px] ${size === id ? "text-blue-100" : "text-gray-400"}`}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">우리 강아지 실제 나이</p>
                  <p className="mt-2 text-3xl font-black">
                    {result.age.years}년 {result.age.months}개월 {result.age.days}일
                  </p>
                  <p className="mt-2 text-sm text-blue-100">태어난 지 {result.days.toLocaleString("ko-KR")}일</p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">사람 나이 환산</p>
                    <p className="mt-2 text-2xl font-black">약 {Math.round(result.human)}세</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-xs font-bold text-gray-400">생애 단계</p>
                    <p className="mt-2 text-2xl font-black">{result.stage}</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">생년월일을 입력해주세요.</div>
            )}

            <p className="mt-5 text-xs leading-5 text-gray-400">
              사람 나이 환산은 재미와 참고를 위한 근사값입니다. 실제 노화 속도는 품종, 체중, 유전, 건강상태에 따라 크게 달라질 수 있어요.
            </p>
          </section>
        </div>

        <RelatedCalculators currentHref="/dog-age" />
      </div>
    </main>
  );
}
