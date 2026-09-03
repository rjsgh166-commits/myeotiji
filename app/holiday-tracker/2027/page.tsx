import type { Metadata } from "next";
import Link from "next/link";
import RelatedCalculators from "../../_components/RelatedCalculators";

export const metadata: Metadata = {
  title: "2027 황금연휴 | 연차 2일로 추석 9일 쉬기",
  description:
    "2027년 공휴일과 대체공휴일을 기준으로 연차 1~2일을 붙였을 때 길게 쉴 수 있는 황금연휴를 정리했습니다. 추석에는 연차 2일로 9일 연휴가 가능합니다.",
  keywords: [
    "2027 황금연휴",
    "2027 연휴",
    "2027 공휴일",
    "2027 추석 연휴",
    "2027 연차 추천",
    "연차 2일 9일",
  ],
  alternates: { canonical: "/holiday-tracker/2027" },
  openGraph: {
    type: "article",
    url: "/holiday-tracker/2027",
    title: "2027 황금연휴 | 연차 2일로 추석 9일 쉬기",
    description: "2027년 가장 좋은 연차 조합을 달력과 함께 확인하세요.",
  },
};

const oneDayPlans = [
  { period: "9/11(토) ~ 9/16(목)", days: "6일", pto: "9/13(월)", note: "추석 앞에 연차 1일" },
  { period: "9/14(화) ~ 9/19(일)", days: "6일", pto: "9/17(금)", note: "추석 뒤에 연차 1일" },
  { period: "2/5(금) ~ 2/9(화)", days: "5일", pto: "2/5(금)", note: "설 연휴 앞에 연차 1일" },
  { period: "5/1(토) ~ 5/5(수)", days: "5일", pto: "5/4(화)", note: "노동절 대체공휴일과 어린이날 연결" },
] as const;

const twoDayPlans = [
  { rank: "1", period: "9/11(토) ~ 9/19(일)", days: "9일", pto: "9/13(월), 9/17(금)", note: "2027년 핵심 황금연휴" },
  { rank: "2", period: "2/4(목) ~ 2/9(화)", days: "6일", pto: "2/4(목), 2/5(금)", note: "설 연휴 4일 + 연차 2일" },
  { rank: "3", period: "4/30(금) ~ 5/5(수)", days: "6일", pto: "4/30(금), 5/4(화)", note: "노동절·어린이날 사이 연결" },
] as const;

const holidays = [
  ["1/1(금)", "신정"],
  ["2/6(토)~2/8(월)", "설날 연휴"],
  ["2/9(화)", "설날 대체공휴일"],
  ["3/1(월)", "삼일절"],
  ["5/1(토)", "노동절"],
  ["5/3(월)", "노동절 대체공휴일"],
  ["5/5(수)", "어린이날"],
  ["5/13(목)", "부처님오신날"],
  ["6/6(일)", "현충일"],
  ["7/17(토)", "제헌절"],
  ["7/19(월)", "제헌절 대체공휴일"],
  ["8/15(일)", "광복절"],
  ["8/16(월)", "광복절 대체공휴일"],
  ["9/14(화)~9/16(목)", "추석 연휴"],
  ["10/3(일)", "개천절"],
  ["10/4(월)", "개천절 대체공휴일"],
  ["10/9(토)", "한글날"],
  ["10/11(월)", "한글날 대체공휴일"],
  ["12/25(토)", "성탄절"],
  ["12/27(월)", "성탄절 대체공휴일"],
] as const;

const septemberDays = Array.from({ length: 30 }, (_, index) => index + 1);
const holidayDays = new Set([14, 15, 16]);
const ptoDays = new Set([13, 17]);
const weekendDays = new Set([4, 5, 11, 12, 18, 19, 25, 26]);

function SeptemberCalendar() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-black">2027년 9월</h3>
        <div className="flex flex-wrap gap-2 text-[11px] font-bold">
          <span className="rounded-full bg-red-50 px-2.5 py-1 text-red-600">공휴일</span>
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-blue-600">추천 연차</span>
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-gray-500">주말</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-7 gap-1 text-center text-xs font-bold text-gray-400">
        {['일','월','화','수','목','금','토'].map((day) => <div key={day} className="py-2">{day}</div>)}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {Array.from({ length: 3 }).map((_, index) => <div key={`blank-${index}`} />)}
        {septemberDays.map((day) => {
          const holiday = holidayDays.has(day);
          const pto = ptoDays.has(day);
          const weekend = weekendDays.has(day);
          const active = day >= 11 && day <= 19;
          return (
            <div key={day} className={`relative flex min-h-12 items-center justify-center rounded-xl font-bold ${
              holiday ? 'bg-red-50 text-red-600' : pto ? 'bg-blue-50 text-blue-600' : weekend ? 'bg-gray-100 text-gray-600' : active ? 'bg-amber-50 text-gray-800' : 'text-gray-700'
            }`}>
              {day}
              {pto && <span className="absolute bottom-1 text-[8px] font-black">연차</span>}
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm font-semibold leading-6 text-amber-800">
        9월 13일(월)과 17일(금)에 연차를 쓰면 9월 11일(토)부터 19일(일)까지 9일 연속으로 쉴 수 있어요.
      </div>
    </div>
  );
}

export default function Holiday2027Page() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28] sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/holiday-tracker" className="text-sm font-semibold text-gray-500 transition hover:text-gray-900">
          ← 꿀연휴 추적기로 돌아가기
        </Link>

        <header className="mt-7">
          <div className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">2027 미리보기</div>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">🍯 2027 황금연휴</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
            2026년 9월 3일 현재 시행 중인 공휴일·대체공휴일 규정을 기준으로 2027년에 연차를 1~2일 붙였을 때 길게 쉴 수 있는 기간을 정리했어요.
          </p>
        </header>

        <section className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 ring-1 ring-amber-100 sm:p-8">
          <p className="text-xs font-black tracking-wider text-amber-700">2027 BEST PLAN</p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold text-gray-500">추석 황금연휴</p>
              <p className="mt-2 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">연차 2일 → 9일</p>
              <p className="mt-4 text-lg font-black text-amber-800">9/11(토) ~ 9/19(일)</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">추천 연차: 9/13(월), 9/17(금)</p>
            </div>
            <SeptemberCalendar />
          </div>
        </section>

        <section className="mt-8">
          <div>
            <p className="text-xs font-black tracking-wider text-blue-600">TOP 3</p>
            <h2 className="mt-2 text-2xl font-black">연차 2일로 길게 쉬기</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {twoDayPlans.map((plan) => (
              <article key={plan.rank} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-blue-600">#{plan.rank}</span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{plan.days}</span>
                </div>
                <h3 className="mt-4 text-lg font-black">{plan.period}</h3>
                <p className="mt-3 text-sm font-semibold text-gray-600">연차: {plan.pto}</p>
                <p className="mt-2 text-xs leading-5 text-gray-500">{plan.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="text-2xl font-black">연차 1일만 쓸 때</h2>
          <p className="mt-2 text-sm text-gray-500">하루만 연차를 쓰고도 5~6일 쉬는 조합을 먼저 골랐어요.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {oneDayPlans.map((plan) => (
              <article key={`${plan.period}-${plan.pto}`} className="rounded-2xl bg-gray-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-black text-gray-900">{plan.period}</h3>
                  <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-black text-amber-800">{plan.days}</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-blue-700">연차 {plan.pto}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">{plan.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black tracking-wider text-gray-400">2027 HOLIDAYS</p>
              <h2 className="mt-2 text-2xl font-black">2027년 공휴일 핵심 일정</h2>
            </div>
            <a href="https://www.law.go.kr/LSW/lsInfoP.do?ancYnChk=0&lsId=002404" target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-600 hover:text-blue-700">국가법령정보센터 확인 →</a>
          </div>

          <div className="mt-5 grid gap-x-6 sm:grid-cols-2">
            {holidays.map(([date, name]) => (
              <div key={`${date}-${name}`} className="flex items-center justify-between gap-4 border-b border-gray-100 py-3 text-sm">
                <span className="font-bold text-gray-900">{name}</span>
                <span className="shrink-0 text-gray-500">{date}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <h2 className="font-black text-amber-900">미래 일정은 바뀔 수 있어요</h2>
          <p className="mt-2 text-sm leading-6 text-amber-800">
            이 페이지는 2026년 9월 3일 현재 시행 중인 공휴일 규정과 대체공휴일 규칙을 바탕으로 계산했습니다. 정부가 나중에 지정하는 임시공휴일, 선거일, 법령 개정은 아직 반영되지 않을 수 있어요.
          </p>
        </section>

        <section className="mt-8 rounded-3xl bg-blue-600 p-6 text-white sm:p-8">
          <p className="text-sm font-bold text-blue-100">다른 조건도 직접 찾아보세요</p>
          <h2 className="mt-2 text-2xl font-black">연차 0~2일로 앞으로 5~15년의 꿀연휴 비교</h2>
          <Link href="/holiday-tracker" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-black text-blue-700 transition hover:bg-blue-50">꿀연휴 추적기 열기 →</Link>
        </section>

        <RelatedCalculators currentHref="/holiday-tracker" />
      </div>
    </main>
  );
}
