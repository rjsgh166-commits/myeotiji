"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import RelatedCalculators from "../_components/RelatedCalculators";

const activities = [
  { id: "walk", label: "걷기", met: 3.5 },
  { id: "brisk", label: "빠르게 걷기", met: 4.3 },
  { id: "jog", label: "조깅", met: 7.0 },
  { id: "run", label: "달리기", met: 8.3 },
  { id: "cycle", label: "자전거(중간 강도)", met: 6.8 },
  { id: "swim", label: "수영(중간 강도)", met: 6.0 },
  { id: "hiking", label: "등산", met: 6.0 },
  { id: "strength", label: "근력운동", met: 3.5 },
  { id: "yoga", label: "요가", met: 2.5 },
  { id: "stairs", label: "계단 오르기", met: 8.8 },
];

export default function CalorieBurnPage() {
  const [weight, setWeight] = useState("70");
  const [minutes, setMinutes] = useState("60");
  const [activityId, setActivityId] = useState("walk");

  const result = useMemo(() => {
    const kg = Number(weight);
    const min = Number(minutes);
    const activity = activities.find((item) => item.id === activityId);

    if (!(kg > 0) || !(min > 0) || !activity) return null;

    const calories = (activity.met * 3.5 * kg / 200) * min;
    return {
      calories,
      hourly: (activity.met * 3.5 * kg / 200) * 60,
      activity,
    };
  }, [weight, minutes, activityId]);

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">← 몇이지? 홈</Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">HEALTH</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">칼로리 소모 계산기</h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            운동 종류와 체중, 시간을 입력하면 MET 기준 예상 소모 칼로리를 계산해요.
          </p>
        </header>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <label className="block">
              <span className="text-sm font-bold">체중</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">kg</span>
              </div>
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold">운동시간</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3.5 pr-12 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">분</span>
              </div>
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-bold">운동 종류</span>
              <select
                value={activityId}
                onChange={(e) => setActivityId(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
              >
                {activities.map((activity) => (
                  <option key={activity.id} value={activity.id}>
                    {activity.label} · {activity.met} MET
                  </option>
                ))}
              </select>
            </label>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            {result ? (
              <>
                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-bold text-blue-100">예상 소모 칼로리</p>
                  <p className="mt-2 text-4xl font-black">{Math.round(result.calories).toLocaleString("ko-KR")} kcal</p>
                  <p className="mt-2 text-sm text-blue-100">{result.activity.label} · {result.activity.met} MET 기준</p>
                </div>

                <div className="mt-3 rounded-2xl border border-gray-200 p-5">
                  <p className="text-xs font-bold text-gray-400">1시간 환산</p>
                  <p className="mt-2 text-2xl font-black">{Math.round(result.hourly).toLocaleString("ko-KR")} kcal</p>
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-gray-50 p-6 text-sm text-gray-500">입력값을 확인해주세요.</div>
            )}

            <div className="mt-5 rounded-2xl bg-gray-50 p-4 text-xs leading-5 text-gray-500">
              MET 기반 추정치라 실제 소비 칼로리와 차이가 날 수 있습니다. 체력, 성별, 연령, 운동 강도, 환경, 측정기기 등에 따라 결과가 달라질 수 있어요.
            </div>
          </section>
        </div>

        <RelatedCalculators currentHref="/calorie-burn" />
      </div>
    </main>
  );
}
