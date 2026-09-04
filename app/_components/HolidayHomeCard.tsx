"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { formatShortDate, getNextHoliday, type NextHoliday } from "../_lib/holidayEngine";

export default function HolidayHomeCard() {
  const [nextHoliday, setNextHoliday] = useState<NextHoliday | null>(null);

  useEffect(() => {
    setNextHoliday(getNextHoliday(new Date()));
  }, []);

  return (
    <section className="px-5 pb-10 sm:pb-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-amber-200 bg-amber-50/80">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-5 sm:p-6">
            <p className="text-xs font-bold text-amber-700">🍯 꿀연휴 플래너</p>
            <h2 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
              남은 연차, 어디에 써야 가장 오래 쉴까요?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              연차 개수와 휴가 스타일을 고르면 서로 겹치지 않는 황금연휴 조합을 찾아드려요.
            </p>
            <Link
              href="/holiday-tracker"
              className="mt-4 inline-flex rounded-xl bg-amber-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-amber-700"
            >
              내 연차 최적화 →
            </Link>
          </div>

          <div className="border-t border-amber-200/80 bg-white/70 p-5 lg:border-l lg:border-t-0 sm:p-6">
            <p className="text-xs font-semibold text-slate-500">다음 빨간날</p>
            {nextHoliday ? (
              <>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xl font-bold text-slate-950">{nextHoliday.names.join(" · ")}</p>
                    <p className="mt-1 text-sm text-slate-500">{formatShortDate(nextHoliday.date)}</p>
                  </div>
                  <p className="text-3xl font-bold text-amber-700">
                    {nextHoliday.dday === 0 ? "D-DAY" : `D-${nextHoliday.dday}`}
                  </p>
                </div>
                {nextHoliday.bridge ? (
                  <p className="mt-4 rounded-xl bg-amber-100/70 px-3 py-2 text-xs font-semibold leading-5 text-amber-900">
                    연차 {nextHoliday.bridge.ptoDays.length}일을 붙이면 최대 {nextHoliday.bridge.totalDays}일 연속 휴식 가능
                  </p>
                ) : null}
              </>
            ) : (
              <div className="mt-3 h-16 animate-pulse rounded-xl bg-amber-100/70" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
