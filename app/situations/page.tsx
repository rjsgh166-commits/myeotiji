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
    icon: "💼",
    title: "이직·퇴사 준비",
    description: "제안 연봉이 정말 좋은 조건인지 보고, 퇴사 뒤 받을 돈까지 이어서 확인해요.",
    steps: [
      ["1", "연봉 A/B 비교", "/salary", "현재 연봉과 제안 연봉의 실제 월 실수령 차이"],
      ["2", "퇴직금", "/retirement", "근속기간과 최근 임금 기준 예상 퇴직금"],
      ["3", "연차", "/annual-leave", "남은 연차와 법정 발생일수 확인"],
      ["4", "실업급여", "/unemployment", "조건에 해당한다면 예상 지급액·기간 확인"],
    ],
  },
  {
    icon: "🧾",
    title: "알바·첫 월급 준비",
    description: "시급만 보고 끝내지 않고 주휴수당과 한 달 예상 급여까지 연결해요.",
    steps: [
      ["1", "시급 ↔ 월급", "/hourly-monthly", "2026·2027 최저임금 기준 월급 환산"],
      ["2", "주휴수당", "/weekly-pay", "주 소정근로시간에 따른 주휴수당 확인"],
      ["3", "연봉 실수령액", "/salary", "정규 급여 조건이라면 세후 예상액까지 확인"],
    ],
  },
  {
    icon: "🏠",
    title: "집 구하기·대출 비교",
    description: "금리 하나만 보지 않고 월 부담, 총 이자, 전월세 조건까지 같이 봐요.",
    steps: [
      ["1", "대출 A/B 비교", "/loan", "금리·기간·상환방식이 다른 두 조건 비교"],
      ["2", "전월세 전환", "/rent-conversion", "보증금과 월세 조건을 같은 기준으로 환산"],
      ["3", "목표금액", "/goal-savings", "필요한 보증금·목돈까지 걸리는 기간 계산"],
    ],
  },
  {
    icon: "🍯",
    title: "2027 휴가 계획",
    description: "언제 연차를 붙이면 가장 길게 쉬는지 찾고, 여행일까지 D-Day로 관리해요.",
    steps: [
      ["1", "2027 황금연휴", "/holiday-tracker/2027", "연차 1~2일로 길게 쉬는 조합 확인"],
      ["2", "꿀연휴 추적기", "/holiday-tracker", "앞으로 여러 해를 한 번에 비교"],
      ["3", "D-Day", "/days", "출발일까지 남은 날짜 계산"],
    ],
  },
  {
    icon: "🛒",
    title: "쇼핑·구매 결정",
    description: "겉으로 보이는 할인율보다 실제 최종 결제금액을 먼저 계산해요.",
    steps: [
      ["1", "실제 할인율", "/discount", "1차 할인 + 추가 할인 + 쿠폰까지 반영"],
      ["2", "수수료", "/fee", "플랫폼·정산 수수료가 있다면 실수령액 확인"],
      ["3", "단위변환", "/unit-converter", "용량·무게·길이를 같은 단위로 비교"],
    ],
  },
] as const;

export default function SituationsPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28] sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">
          ← 몇이지? 홈
        </Link>

        <header className="mt-7 max-w-3xl">
          <p className="text-sm font-black text-violet-600">SITUATION GUIDE</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">
            지금 내 상황엔 어떤 계산이 필요할까?
          </h1>
          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            계산기를 하나씩 찾지 않아도 돼요. 이직, 알바, 집, 휴가, 쇼핑처럼 실제 상황에 맞춰 필요한 계산을 순서대로 묶었습니다.
          </p>
        </header>

        <div className="mt-8 space-y-5">
          {situations.map((situation) => (
            <section key={situation.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-2xl">
                  {situation.icon}
                </div>
                <div>
                  <h2 className="text-xl font-black">{situation.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-500">{situation.description}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {situation.steps.map(([step, title, href, description]) => (
                  <Link
                    key={`${situation.title}-${step}`}
                    href={href}
                    className="group rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:border-violet-200 hover:bg-violet-50/40"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-black text-violet-700 shadow-sm">
                        {step}
                      </span>
                      <div>
                        <h3 className="font-black text-gray-900">{title}</h3>
                        <p className="mt-1 text-xs leading-5 text-gray-500">{description}</p>
                        <p className="mt-3 text-xs font-black text-violet-600">계산하기 →</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
