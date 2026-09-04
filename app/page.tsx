import Link from "next/link";
import CalculatorSearch from "./_components/CalculatorSearch";
import RecentCalculators from "./_components/RecentCalculators";
import SavedCalculations from "./_components/SavedCalculations";
import {
  CALCULATOR_BY_HREF,
  CALCULATOR_CATEGORIES,
  CALCULATORS,
} from "./_lib/calculators";

const frequentHrefs = [
  "/job-change",
  "/salary",
  "/retirement",
  "/days",
  "/loan",
  "/compound",
  "/unemployment",
  "/hourly-monthly",
  "/annual-leave",
  "/goal-savings",
  "/rent-conversion",
  "/median-income",
  "/unit-converter",
];

const frequentCalculators = frequentHrefs
  .map((href) => CALCULATOR_BY_HREF[href])
  .filter(Boolean);

const ownerPicks = [
  {
    href: "/holiday-tracker",
    kicker: "한 번쯤 눌러볼 만한 기능",
    title: "🍯 꿀연휴 추적기",
    description:
      "연차를 0~2일만 썼을 때 앞으로 어느 해에 가장 길게 쉴 수 있는지 달력으로 한눈에 확인해보세요.",
    cta: "내 꿀연휴 찾아보기",
    theme: "amber",
  },
  {
    href: "/discount",
    kicker: "쇼핑 전에 빠르게 확인",
    title: "🛒 할인율 계산기",
    description:
      "정가·판매가 계산은 물론 1차 할인 + 추가 할인 + 쿠폰까지 적용한 실제 총 할인율을 확인해요.",
    cta: "할인가 계산하기",
    theme: "blue",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#191f28]">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            몇이지?
          </Link>

          <nav className="hidden gap-8 text-sm font-medium text-gray-600 sm:flex">
            <a href="#year-2027" className="hover:text-black">
              2027 미리보기
            </a>
            <a href="#compare" className="hover:text-black">
              비교 계산
            </a>
            <a href="#situations" className="hover:text-black">
              상황별 계산
            </a>
            <a href="#calculators" className="hover:text-black">
              자주 찾는 계산기
            </a>
            <a href="#categories" className="hover:text-black">
              전체 계산기
            </a>
            <Link href="/about" className="hover:text-black">
              계산정보
            </Link>
          </nav>
        </div>
      </header>

      <section className="px-5 pb-14 pt-16 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold text-violet-600">
            DECISION CALCULATOR
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            일상에서 궁금한 숫자,
            <br />
            <span className="text-blue-600">몇이지?</span>
          </h1>

          <p className="mt-5 text-base text-gray-500 sm:text-lg">
            계산만 하지 말고, 두 선택지의 차이와 내 상황의 마지노선까지 확인해보세요.
          </p>

          <div className="mt-5 flex justify-center">
            <Link href="/job-change" data-ga-event="situation_start" data-ga-situation="hero_job_change" data-ga-destination="/job-change" className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-black text-violet-700 transition hover:bg-violet-200">
              <span>NEW</span><span>⚖️ 이직, 최소 얼마 받아야 할까?</span><span>→</span>
            </Link>
          </div>

          <CalculatorSearch items={CALCULATORS} />

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {[
              ["이직 마지노선", "/job-change"],
              ["연봉", "/salary"],
              ["퇴직금", "/retirement"],
              ["D-Day", "/days"],
              ["대출이자", "/loan"],
              ["연차", "/annual-leave"],
              ["적금이자", "/savings-interest"],
              ["중위소득", "/median-income"],
              ["단위변환", "/unit-converter"],
            ].map(([keyword, href]) => (
              <Link
                key={keyword}
                href={href}
                className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition hover:bg-gray-100"
              >
                {keyword}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 sm:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 text-center">
            <p className="text-xs font-black tracking-wider text-blue-600">START WITH YOUR SITUATION</p>
            <h2 className="mt-2 text-2xl font-black">지금 뭐가 궁금하세요?</h2>
            <p className="mt-2 text-sm text-gray-500">계산기 이름을 몰라도 괜찮아요. 상황을 고르면 바로 필요한 계산으로 이동해요.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["💼", "이직이 이득일까?", "연봉·시간·통근까지 비교", "/job-change", "violet"],
              ["💰", "월급 얼마 받지?", "세후 실수령액 바로 확인", "/salary", "blue"],
              ["🏠", "대출 뭐가 낫지?", "A/B 월 부담·총이자 비교", "/loan", "emerald"],
              ["🍯", "연차 언제 쓰지?", "적은 연차로 길게 쉬기", "/holiday-tracker", "amber"],
              ["🛒", "진짜 몇 % 할인?", "중복할인·쿠폰까지 계산", "/discount", "rose"],
            ].map(([icon, title, description, href, tone]) => {
              const toneClass =
                tone === "violet"
                  ? "hover:border-violet-200 hover:bg-violet-50"
                  : tone === "blue"
                    ? "hover:border-blue-200 hover:bg-blue-50"
                    : tone === "emerald"
                      ? "hover:border-emerald-200 hover:bg-emerald-50"
                      : tone === "amber"
                        ? "hover:border-amber-200 hover:bg-amber-50"
                        : "hover:border-rose-200 hover:bg-rose-50";
              return (
                <Link
                  key={title}
                  href={href}
                  data-ga-event="situation_start"
                  data-ga-situation={title}
                  data-ga-destination={href}
                  className={`group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${toneClass}`}
                >
                  <div className="text-2xl">{icon}</div>
                  <p className="mt-3 font-black">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">{description}</p>
                  <p className="mt-4 text-xs font-black text-gray-400 transition group-hover:text-gray-700">바로 계산 →</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="year-2027" className="px-5 pb-14 sm:pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black tracking-wider text-blue-600">2027 EARLY UPDATE</p>
              <h2 className="mt-2 text-2xl font-black">2027년 확정 정보, 미리 계산해보세요</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">올해 기준은 그대로 두고, 확정된 2027 수치와 황금연휴를 먼저 열어뒀어요.</p>
            </div>
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">2026.09 업데이트</span>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <Link href="/hourly-monthly" className="group rounded-2xl bg-white p-5 ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:ring-blue-200">
              <p className="text-xs font-black text-blue-600">2027 최저임금</p>
              <p className="mt-2 text-xl font-black">시급 10,700원</p>
              <p className="mt-1 text-sm text-gray-500">209시간 월 환산 2,236,300원</p>
              <p className="mt-4 text-sm font-black text-blue-600">계산하기 →</p>
            </Link>
            <Link href="/median-income" className="group rounded-2xl bg-white p-5 ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:ring-blue-200">
              <p className="text-xs font-black text-blue-600">2027 기준 중위소득</p>
              <p className="mt-2 text-xl font-black">4인 6,929,885원</p>
              <p className="mt-1 text-sm text-gray-500">생계 32% · 의료 40% 등 비교</p>
              <p className="mt-4 text-sm font-black text-blue-600">내 비율 계산하기 →</p>
            </Link>
            <Link href="/holiday-tracker/2027" className="group rounded-2xl bg-white p-5 ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:ring-amber-200">
              <p className="text-xs font-black text-amber-700">2027 황금연휴</p>
              <p className="mt-2 text-xl font-black">연차 2일 → 9일</p>
              <p className="mt-1 text-sm text-gray-500">9월 추석 황금연휴 달력 확인</p>
              <p className="mt-4 text-sm font-black text-amber-700">2027 연휴 보기 →</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="compare" className="px-5 pb-14 sm:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <p className="text-xs font-black tracking-wider text-violet-600">COMPARE, NOT JUST CALCULATE</p>
            <h2 className="mt-2 text-2xl font-black">숫자 하나보다, 두 선택지를 비교해보세요</h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              몇이지?는 단순 계산에서 끝내지 않고 실제 선택에 필요한 차이를 보여주는 기능을 늘려가고 있어요.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/job-change" className="group rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <p className="text-xs font-black text-violet-700">⚖️ 몇이지? 선택 계산</p>
              <p className="mt-2 text-lg font-black">이직, 최소 얼마 받아야 본전?</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">실수령·근무시간·출퇴근까지 넣어 이직 마지노선 연봉을 역산해요.</p>
              <p className="mt-4 text-sm font-black text-violet-700">마지노선 계산 →</p>
            </Link>

            <Link href="/salary" className="group rounded-2xl border border-violet-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
              <p className="text-xs font-black text-violet-600">💼 연봉 A/B 비교</p>
              <p className="mt-2 text-lg font-black">이직하면 통장에 얼마 더?</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">현재 연봉과 제안 연봉의 월·연간 실수령 차이를 계산해요.</p>
              <p className="mt-4 text-sm font-black text-violet-600">연봉 비교하기 →</p>
            </Link>

            <Link href="/loan" className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
              <p className="text-xs font-black text-blue-600">🏠 대출 A/B 비교</p>
              <p className="mt-2 text-lg font-black">금리만 낮으면 유리할까?</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">금리·기간·상환방식이 다른 두 조건의 월 부담과 총 이자를 비교해요.</p>
              <p className="mt-4 text-sm font-black text-blue-600">대출 비교하기 →</p>
            </Link>

            <Link href="/discount" className="group rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md">
              <p className="text-xs font-black text-amber-700">🛒 실제 할인율</p>
              <p className="mt-2 text-lg font-black">20% + 10% = 30%?</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">추가 할인과 쿠폰을 순서대로 반영해 진짜 최종 할인율을 보여줘요.</p>
              <p className="mt-4 text-sm font-black text-amber-700">추가 할인 계산 →</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 sm:pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
          <p className="text-xs font-black tracking-wider text-violet-300">WHY MYEOTIJI</p>
          <h2 className="mt-2 text-2xl font-black">계산기 개수보다 ‘판단에 도움이 되는 숫자’를 만들어요</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["①", "비교", "A와 B를 같은 기준으로 나란히"],
              ["②", "마지노선", "얼마면 본전인지 역산"],
              ["③", "근거", "공식 기준·계산식·확인일 공개"],
              ["④", "저장", "계산 결과를 내 계산함에 보관"],
              ["⑤", "이어하기", "입력값을 다음 판단으로 연결"],
            ].map(([number, title, description]) => (
              <div key={title} className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs font-black text-violet-300">{number}</p>
                <p className="mt-2 font-black">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="situations" className="px-5 pb-14 sm:pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black tracking-wider text-violet-300">SITUATION GUIDE</p>
              <h2 className="mt-2 text-2xl font-black">계산기를 찾지 말고, 상황부터 골라보세요</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                이직·알바·집 구하기·휴가·쇼핑처럼 실제 상황에 필요한 계산을 순서대로 묶었어요.
              </p>
            </div>
            <Link href="/situations" className="rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-900 transition hover:bg-slate-100">
              상황별 가이드 전체 보기 →
            </Link>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["💼", "이직·퇴사", "연봉 → 퇴직금 → 실업급여"],
              ["🧾", "알바·첫 월급", "시급 → 주휴수당 → 월급"],
              ["🏠", "집 구하기", "대출 비교 → 전월세 → 저축"],
              ["🍯", "2027 휴가", "황금연휴 → D-Day"],
              ["🛒", "쇼핑", "실제 할인율 → 수수료"],
            ].map(([icon, title, description]) => (
              <Link key={title} href="/situations" className="rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
                <div className="text-2xl">{icon}</div>
                <p className="mt-3 font-black">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="px-5 pb-14 sm:pb-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/50 to-violet-50 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-wider text-blue-600">MYEOTIJI DATA</p>
              <h2 className="mt-2 text-2xl font-black">계산 결과를 넘어, 숫자의 변화를 봅니다</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
                2027 최저임금·기준 중위소득·황금연휴처럼 공식 데이터를 서로 비교해 실제 생활에서 의미 있는 차이를 정리했어요.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-black">
                <span className="rounded-full bg-white px-3 py-2 text-blue-700 shadow-sm">최저임금 +380원</span>
                <span className="rounded-full bg-white px-3 py-2 text-violet-700 shadow-sm">4인 중위소득 +435,147원</span>
                <span className="rounded-full bg-white px-3 py-2 text-amber-700 shadow-sm">연차 2일 → 9일</span>
              </div>
            </div>
            <Link href="/insights/2027" className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-700">
              2027 숫자 리포트 보기 →
            </Link>
          </div>
        </div>
      </section>

      <RecentCalculators />
      <SavedCalculations />

      <section id="owner-picks" className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black tracking-wider text-blue-600">
                OWNER&apos;S PICK
              </p>
              <h2 className="mt-2 text-2xl font-black">👑 주인장 추천 기능</h2>
              <p className="mt-2 text-sm text-gray-500">
                몇이지?에서 먼저 한번 써보면 좋은 기능 두 가지를 골랐어요.
              </p>
            </div>
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gray-500 shadow-sm">
              직접 추천
            </span>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {ownerPicks.map((pick) => (
              <Link
                key={pick.href}
                href={pick.href}
                className={`group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                  pick.theme === "amber"
                    ? "border-amber-100 bg-gradient-to-br from-amber-50 via-white to-orange-50"
                    : "border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50"
                }`}
              >
                <div className="relative z-10">
                  <p
                    className={`text-xs font-black ${
                      pick.theme === "amber" ? "text-amber-700" : "text-blue-700"
                    }`}
                  >
                    {pick.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight">
                    {pick.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
                    {pick.description}
                  </p>
                  <div
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-black ${
                      pick.theme === "amber" ? "text-amber-700" : "text-blue-700"
                    }`}
                  >
                    {pick.cta}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>

                <div
                  className={`absolute -bottom-12 -right-10 h-40 w-40 rounded-full opacity-40 blur-2xl ${
                    pick.theme === "amber" ? "bg-amber-200" : "bg-blue-200"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="calculators" className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7">
            <h2 className="text-2xl font-bold">자주 찾는 계산기</h2>
            <p className="mt-2 text-sm text-gray-500">
              처음 방문했을 때 많이 찾을 만한 계산기를 먼저 모아봤어요.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frequentCalculators.map((calculator) => (
              <Link
                key={calculator.href}
                href={calculator.href}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 text-2xl">
                  {calculator.icon}
                </div>
                <h3 className="text-lg font-bold">{calculator.title}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {calculator.description}
                </p>
                <div className="mt-5 text-sm font-semibold text-blue-600">
                  계산하기 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="border-t border-gray-100 bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <div>
            <h2 className="text-2xl font-bold">전체 계산기</h2>
            <p className="mt-2 text-sm text-gray-500">
              현재 제공하는 모든 계산기를 카테고리별로 정리했어요.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {CALCULATOR_CATEGORIES.map((category) => {
              const items = CALCULATORS.filter(
                (calculator) => calculator.category === category.id,
              );

              return (
                <section
                  key={category.title}
                  className="rounded-3xl bg-[#f7f8fa] p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-black">{category.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {items.map((calculator) => (
                      <Link
                        key={calculator.href}
                        href={calculator.href}
                        className="group rounded-2xl bg-white p-4 ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:ring-blue-200"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold">
                              {calculator.icon} {calculator.title}
                            </p>
                            <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                              {calculator.description}
                            </p>
                          </div>
                          <span className="shrink-0 text-blue-600 transition group-hover:translate-x-0.5">
                            →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
