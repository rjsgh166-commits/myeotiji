import type { Metadata } from "next";
import Link from "next/link";
import RelatedCalculators from "../../_components/RelatedCalculators";
import ResultActionBar from "../../_components/ResultActionBar";

export const metadata: Metadata = {
  title: "2027 황금연휴 | 연차 2일로 추석 9일 쉬기",
  description:
    "우주항공청 2027년 월력요항 공식 기준. 2027년 공휴일 72일, 주5일제 휴일 119일, 3일 이상 연휴 10번과 연차 1~2일 황금연휴 조합을 확인하세요.",
  keywords: [
    "2027 황금연휴",
    "2027 연휴",
    "2027 공휴일",
    "2027 추석 연휴",
    "2027 연차 추천",
    "연차 2일 9일",
    "2027 월력요항",
  ],
  alternates: { canonical: "/holiday-tracker/2027" },
  openGraph: {
    type: "article",
    url: "/holiday-tracker/2027",
    title: "2027 황금연휴 | 연차 2일로 추석 9일 쉬기",
    description: "우주항공청 2027년 월력요항 기준으로 가장 좋은 연차 조합을 확인하세요.",
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
  { rank: "2", period: "2/4(목) ~ 2/9(화)", days: "6일", pto: "2/4(목), 2/5(금)", note: "설 연휴와 연결" },
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
    <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-bold">2027년 9월</h3>
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-red-50 px-2.5 py-1 text-red-600">공휴일</span>
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-blue-600">추천 연차</span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-500">주말</span>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-500">
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
            <div key={day} className={`relative flex min-h-12 items-center justify-center rounded-xl font-semibold ${holiday ? 'bg-red-50 text-red-600' : pto ? 'bg-blue-600 text-white' : weekend ? 'bg-slate-100 text-slate-600' : active ? 'bg-amber-50 text-slate-800' : 'text-slate-700'}`}>
              {day}
              {pto && <span className="absolute bottom-1 text-[11px] font-bold">연차</span>}
            </div>
          );
        })}
      </div>
      <div className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm font-semibold leading-6 text-amber-900">
        9월 13일(월)과 17일(금)에 연차를 쓰면 9월 11일(토)부터 19일(일)까지 9일 연속으로 쉴 수 있어요.
      </div>
    </div>
  );
}

export default function Holiday2027Page() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28] sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/holiday-tracker" className="text-sm font-semibold text-slate-500 hover:text-slate-900">← 꿀연휴 플래너로 돌아가기</Link>

        <header className="mt-7">
          <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">공식 월력요항 반영</div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">🍯 2027 황금연휴</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            우주항공청이 2026년 6월 29일 발표한 「2027년 월력요항」을 기준으로 공휴일과 대체공휴일을 확인하고, 연차 1~2일을 붙였을 때 길게 쉴 수 있는 조합을 정리했어요.
          </p>
        </header>

        <section className="mt-7 grid gap-3 sm:grid-cols-3">
          {[
            ["72일", "관공서 공휴일"],
            ["119일", "주5일제 실질 휴일"],
            ["10번", "3일 이상 연휴"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
              <p className="text-3xl font-bold text-blue-600">{value}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">{label}</p>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold">2027 연휴 상세 가이드</h2>
              <p className="mt-2 text-sm text-slate-500">연차 개수와 시기별로 바로 찾을 수 있게 정리했어요.</p>
            </div>
            <Link href="/holiday-tracker" className="text-sm font-bold text-blue-600 hover:text-blue-700">남은 연차 전체 최적화 →</Link>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["/holiday-tracker/2027/chuseok", "2027 추석", "연차 2일 → 9일", "🍂"],
              ["/holiday-tracker/2027/seollal", "2027 설날", "기본 4일 · 연차 1일 → 5일", "🧧"],
              ["/holiday-tracker/2027/pto-1", "연차 1일", "최대 6일 쉬기", "1️⃣"],
              ["/holiday-tracker/2027/pto-2", "연차 2일", "최대 9일 쉬기", "2️⃣"],
              ["/holiday-tracker/2027/may", "2027년 5월", "연차 1일 → 5일", "🌿"],
              ["/holiday-tracker/2027/october", "2027년 10월", "두 번의 3일 연휴", "🍁"],
            ].map(([href, title, sub, icon]) => (
              <Link key={href} href={href} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:bg-blue-50/30">
                <span className="text-xl">{icon}</span>
                <h3 className="mt-3 font-bold text-slate-950">{title}</h3>
                <p className="mt-1 text-xs text-slate-500">{sub}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 sm:p-8">
          <p className="text-xs font-bold text-amber-700">2027 BEST PLAN</p>
          <div className="mt-3 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-slate-500">추석 황금연휴</p>
              <p className="mt-2 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">연차 2일 → 9일</p>
              <p className="mt-4 text-lg font-bold text-amber-800">9/11(토) ~ 9/19(일)</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">추천 연차: 9/13(월), 9/17(금)</p>
            </div>
            <SeptemberCalendar />
          </div>

          <ResultActionBar
            calculatorPath="/holiday-tracker/2027"
            shareTitle="2027 추석 황금연휴"
            shareText="🍯 2027 추석 황금연휴\n연차 2일 → 9일 휴가\n9/11(토) ~ 9/19(일)\n추천 연차: 9/13(월), 9/17(금)"
            image={{
              eyebrow: "몇이지? · 2027 황금연휴",
              title: "연차 2일로 9일 휴가",
              tone: "amber",
              filename: "myeotiji-2027-chuseok.png",
              lines: [
                { label: "휴가 기간", value: "9/11 ~ 9/19", strong: true },
                { label: "사용 연차", value: "2일" },
                { label: "추천 연차 ①", value: "9/13(월)" },
                { label: "추천 연차 ②", value: "9/17(금)" },
                { label: "연속 휴가", value: "9일", strong: true },
              ],
              caption: "우주항공청 2027년 월력요항 공식 기준 · myeotiji.kr",
            }}
          />
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">연차 2일로 길게 쉬기</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {twoDayPlans.map((plan) => (
              <article key={plan.rank} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-600">#{plan.rank}</span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{plan.days}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{plan.period}</h3>
                <p className="mt-3 text-sm font-semibold text-slate-600">연차: {plan.pto}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{plan.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">연차 1일만 쓸 때</h2>
          <p className="mt-2 text-sm text-slate-500">하루만 연차를 쓰고도 5~6일 쉬는 조합이에요.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {oneDayPlans.map((plan) => (
              <article key={`${plan.period}-${plan.pto}`} className="rounded-2xl bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-bold text-slate-900">{plan.period}</h3>
                  <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">{plan.days}</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-blue-700">연차 {plan.pto}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{plan.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold">2027년 공휴일 핵심 일정</h2>
              <p className="mt-2 text-sm text-slate-500">노동절·제헌절 공휴일과 대체공휴일까지 반영했어요.</p>
            </div>
            <a href="https://www.kasa.go.kr/prog/plcyBrf/brief/kor/sub01_01_04/view.do?plcyBrfNo=431" target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-600 hover:text-blue-700">우주항공청 공식자료 ↗<span className="sr-only"> (새 창)</span></a>
          </div>
          <div className="mt-5 grid gap-x-6 sm:grid-cols-2">
            {holidays.map(([date, name]) => (
              <div key={`${date}-${name}`} className="flex items-center justify-between gap-4 border-b border-slate-100 py-3 text-sm">
                <span className="font-semibold text-slate-900">{name}</span>
                <span className="shrink-0 text-slate-500">{date}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-blue-600 p-6 text-white sm:p-8">
          <p className="text-sm font-semibold text-white">남은 연차 전체를 배분해보고 싶다면</p>
          <h2 className="mt-2 text-2xl font-bold">연차 7일을 어디에 쓰면 가장 잘 쉴까요?</h2>
          <p className="mt-2 text-sm leading-6 text-white">한 번 길게 · 효율 최우선 · 자주 쉬기 스타일별로 서로 겹치지 않는 연휴 조합을 계산해보세요.</p>
          <Link href="/holiday-tracker" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50">내 연차 최적화 →</Link>
        </section>

        <section className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="font-bold text-amber-950">임시공휴일은 추후 바뀔 수 있어요</h2>
          <p className="mt-2 text-sm leading-6 text-amber-900">
            법정 공휴일과 대체공휴일은 2027년 월력요항 공식 자료를 반영했습니다. 다만 이후 정부가 별도로 지정하는 임시공휴일이나 회사별 휴무일은 추가로 달라질 수 있어요.
          </p>
        </section>

        <RelatedCalculators currentHref="/holiday-tracker" />
      </div>
    </main>
  );
}
