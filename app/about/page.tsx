import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "몇이지? 소개",
  description:
    "몇이지?가 제공하는 급여·금융·부동산·날짜·생활 계산기와 계산 기준, 검증 및 운영 원칙을 소개합니다.",
  alternates: {
    canonical: "/about",
  },
};

const categories = [
  ["💼", "직장 · 급여", "연봉 실수령액, 퇴직금, 주휴수당, 실업급여, 시급↔월급, 연차"],
  ["💰", "금융 · 투자", "대출이자, 복리, 적금이자, 목표금액, 주식 평단, 수수료"],
  ["🏠", "부동산 · 복지", "전월세 전환율, 기준 중위소득"],
  ["📅", "날짜 · 가족", "며칠이지?, 만나이, 음력, 꿀연휴, 출산 예정일"],
  ["🧰", "생활 · 건강", "할인율, 단위변환, 칼로리 소모, 반려견 나이"],
];

const principles = [
  {
    title: "계산 기준을 가능한 범위에서 공개합니다.",
    text: "법령·요율·공공기준이 필요한 계산기는 계산기 아래에서 적용 기준과 주요 공식을 설명합니다.",
  },
  {
    title: "공식자료를 우선 확인합니다.",
    text: "최저임금, 실업급여, 기준 중위소득처럼 매년 바뀌는 정보는 정부·공공기관의 최신 자료를 우선 확인하고 기준 연도 또는 확인일을 표시합니다.",
  },
  {
    title: "계산값과 정보성 안내를 구분합니다.",
    text: "계산 결과는 사용자가 입력한 조건에 따른 예상값이며, 실제 계약·신고·수급자격·의료적 판단을 대신하지 않습니다.",
  },
  {
    title: "입력값을 불필요하게 수집하지 않습니다.",
    text: "현재 계산기 입력값은 브라우저에서 계산에 사용하며, Google Analytics 이벤트에는 계산기 이름·경로·상호작용 종류만 전송하도록 구성하고 입력한 금액이나 날짜값 자체는 보내지 않습니다.",
  },
  {
    title: "오류를 발견하면 수정합니다.",
    text: "기준 변경이나 계산 오류 제보는 contact@myeotiji.kr을 통해 받고, 확인 후 계산식과 안내 내용을 업데이트합니다.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/"
          className="mb-6 inline-flex text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          ← 몇이지? 홈
        </Link>

        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-9">
          <p className="text-sm font-bold text-blue-600">ABOUT</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            일상에서 궁금한 숫자, 몇이지?
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
            몇이지?는 급여와 근로조건부터 금융, 날짜, 복지, 생활까지 일상에서
            자주 궁금해지는 숫자를 직접 입력해 빠르게 확인할 수 있도록 만든
            생활 계산기 서비스입니다. 현재 23개의 계산기를 제공하고 있으며,
            계산 결과뿐 아니라 계산에 사용한 기준과 주의사항도 함께 이해할 수
            있도록 페이지를 지속적으로 보완하고 있습니다.
          </p>

          <div className="mt-9">
            <p className="text-xs font-black tracking-wider text-blue-600">
              WHAT WE CALCULATE
            </p>
            <h2 className="mt-2 text-xl font-black">제공하는 계산기</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {categories.map(([icon, name, text]) => (
                <div key={name} className="rounded-2xl bg-gray-50 p-5">
                  <div className="text-2xl">{icon}</div>
                  <h3 className="mt-3 font-bold">{name}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-gray-100 pt-8">
            <p className="text-xs font-black tracking-wider text-blue-600">
              HOW WE WORK
            </p>
            <h2 className="mt-2 text-xl font-black">몇이지?의 운영 원칙</h2>

            <div className="mt-5 space-y-3">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-gray-200 p-5"
                >
                  <h3 className="text-sm font-black text-gray-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-blue-50 p-5">
            <h2 className="font-black text-blue-950">왜 이 서비스를 운영하나요?</h2>
            <p className="mt-2 text-sm leading-7 text-blue-900/80">
              검색을 할 때마다 서로 다른 기준의 숫자를 찾아다니기보다, 자주 쓰는
              계산을 한 곳에서 바로 확인하고 그 숫자가 어떻게 나온 것인지까지
              이해할 수 있는 서비스를 만드는 것이 몇이지?의 목표입니다.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-gray-900 px-4 py-3 text-sm font-bold text-white"
            >
              오류·개선 의견 보내기
            </Link>
            <Link
              href="/disclaimer"
              className="rounded-xl bg-gray-100 px-4 py-3 text-sm font-bold text-gray-700"
            >
              계산 결과 및 면책 안내
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
