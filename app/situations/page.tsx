import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "상황별 계산 가이드 | 이직·알바·내집·쇼핑·휴가",
  description:
    "이직, 퇴사, 알바, 집 구하기, 쇼핑, 휴가 준비처럼 실제 상황에 필요한 계산기를 순서대로 묶어 안내합니다.",
  alternates: { canonical: "/situations" },
};

const situations = [
  {
    id: "job-change",
    icon: "💼",
    title: "이직·퇴사 준비",
    description: "제안 연봉이 정말 좋은 조건인지 보고, 퇴사 뒤 받을 돈까지 이어서 확인해요.",
    steps: [
      ["이직 마지노선", "/job-change", "실수령·근무시간·출퇴근까지 반영해 최소 제안 연봉 역산"],
      ["연봉 A/B 비교", "/salary", "현재 연봉과 제안 연봉의 실제 월 실수령 차이"],
      ["퇴직금", "/retirement", "근속기간과 최근 임금 기준 예상 퇴직금"],
      ["연차", "/annual-leave", "남은 연차와 법정 발생일수 확인"],
      ["실업급여", "/unemployment", "조건에 해당한다면 예상 지급액·기간 확인"],
    ],
  },
  {
    id: "first-pay",
    icon: "🧾",
    title: "알바·첫 월급 준비",
    description: "시급만 보고 끝내지 않고 주휴수당과 한 달 예상 급여까지 연결해요.",
    steps: [
      ["시급 ↔ 월급", "/hourly-monthly", "2026·2027 최저임금 기준 월급 환산"],
      ["주휴수당", "/weekly-pay", "주 소정근로시간에 따른 주휴수당 확인"],
      ["연봉 실수령액", "/salary", "정규 급여 조건이라면 세후 예상액까지 확인"],
    ],
  },
  {
    id: "housing",
    icon: "🏠",
    title: "집 구하기·대출 비교",
    description: "금리 하나만 보지 않고 월 부담, 총 이자, 전월세 조건까지 같이 봐요.",
    steps: [
      ["대출 A/B 비교", "/loan", "금리·기간·상환방식이 다른 두 조건 비교"],
      ["전월세 전환", "/rent-conversion", "보증금과 월세 조건을 같은 기준으로 환산"],
      ["목표금액", "/goal-savings", "필요한 보증금·목돈까지 걸리는 기간 계산"],
    ],
  },
  {
    id: "holiday",
    icon: "🍯",
    title: "2027 휴가 계획",
    description: "언제 연차를 붙이면 가장 길게 쉬는지 찾고, 여행일까지 D-Day로 관리해요.",
    steps: [
      ["2027 황금연휴", "/holiday-tracker/2027", "연차 1~2일로 길게 쉬는 조합 확인"],
      ["꿀연휴 추적기", "/holiday-tracker", "앞으로 여러 해를 한 번에 비교"],
      ["D-Day", "/days", "출발일까지 남은 날짜 계산"],
    ],
  },
  {
    id: "shopping",
    icon: "🛒",
    title: "쇼핑·구매 결정",
    description: "겉으로 보이는 할인율보다 실제 최종 결제금액을 먼저 계산해요.",
    steps: [
      ["실제 할인율", "/discount", "1차 할인 + 추가 할인 + 쿠폰까지 반영"],
      ["수수료", "/fee", "플랫폼·정산 수수료가 있다면 실수령액 확인"],
      ["단위변환", "/unit-converter", "용량·무게·길이를 같은 단위로 비교"],
    ],
  },
] as const;

export default function SituationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28] sm:py-14">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7 max-w-3xl">
          <p className="text-sm font-semibold text-blue-600">상황별 계산 순서</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
            지금 내 상황엔 어떤 계산이 필요할까?
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            계산기를 하나씩 찾지 않아도 돼요. 실제 상황에 맞춰 필요한 계산을 순서대로 이어보세요.
          </p>
        </header>

        <nav className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {situations.map((situation) => (
            <a key={situation.id} href={`#${situation.id}`} className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:border-blue-200 hover:text-blue-700">
              <span aria-hidden="true">{situation.icon}</span> {situation.title}
            </a>
          ))}
        </nav>

        <div className="mt-8 space-y-8">
          {situations.map((situation) => (
            <section id={situation.id} key={situation.id} className="scroll-mt-24 border-t border-slate-200 pt-7">
              <div className="flex items-start gap-4">
                <div className="text-2xl" aria-hidden="true">{situation.icon}</div>
                <div>
                  <h2 className="text-xl font-bold">{situation.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{situation.description}</p>
                </div>
              </div>

              <div className="ml-3 mt-6 border-l-2 border-slate-200 pl-7">
                {situation.steps.map(([title, href, description], index) => (
                  <div key={href} className="relative pb-7 last:pb-0">
                    <span className="absolute -left-[39px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-4 ring-[#f7f8fa]">
                      {index + 1}
                    </span>
                    <Link href={href} className="group block rounded-xl bg-white px-4 py-4 ring-1 ring-slate-200 transition hover:ring-blue-200">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-slate-900 group-hover:text-blue-700">{title}</h3>
                          <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
                        </div>
                        <span className="shrink-0 text-sm text-slate-500">→</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
