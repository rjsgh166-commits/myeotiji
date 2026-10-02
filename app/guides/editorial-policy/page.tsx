import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "콘텐츠 작성·검수 원칙",
  description:
    "몇이지?가 계산 가이드와 설명 콘텐츠를 어떤 자료와 절차로 작성·검토·수정하는지 공개합니다.",
  alternates: { canonical: "/guides/editorial-policy" },
};

const principles = [
  {
    title: "공식·공공 자료를 우선 확인합니다",
    text: "법령, 공휴일, 역법, 나이 기준처럼 공식 근거가 있는 주제는 정부·공공기관·공식 문서를 우선 확인합니다. 공식 근거가 없는 일반 계산은 계산식과 가정을 명확히 적습니다.",
  },
  {
    title: "계산 예시는 직접 다시 맞춰봅니다",
    text: "공식만 나열하지 않고 실제 숫자를 넣은 예시를 만들고, 계산기 결과와 설명 속 숫자가 서로 맞는지 확인한 뒤 공개합니다.",
  },
  {
    title: "AI 도구는 초안 정리와 구조화에 활용할 수 있습니다",
    text: "문장 초안, 표 구성, 설명 구조를 정리하는 과정에서 AI 도구를 활용할 수 있습니다. 다만 공개 전에는 운영 기준에 따라 수치·출처·표현을 다시 확인하고, 확인되지 않은 내용을 사실처럼 단정하지 않습니다.",
  },
  {
    title: "계산값과 판단을 구분합니다",
    text: "몇이지?는 사용자가 입력한 조건을 계산해 참고값을 보여주는 서비스입니다. 금융·법률·의료·투자처럼 개인 상황에 따라 결과가 달라질 수 있는 주제는 한계와 주의사항을 함께 표시합니다.",
  },
  {
    title: "오류와 기준 변경은 수정합니다",
    text: "제도·요율·공공기준이 바뀌거나 계산 오류가 확인되면 관련 계산식과 설명을 업데이트합니다. 중요한 기준 변경은 가이드의 최종 확인일과 내용에 반영합니다.",
  },
  {
    title: "광고와 콘텐츠 판단을 분리합니다",
    text: "광고 게재나 제휴 여부가 계산 결과, 가이드의 결론, 공식자료 선택에 영향을 주지 않도록 운영합니다. 광고·제휴 영역은 정보 콘텐츠와 구분해 표시합니다.",
  },
] as const;

export default function EditorialPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500" aria-label="breadcrumb">
          <Link href="/" className="hover:text-slate-900">몇이지?</Link>
          <span aria-hidden="true">/</span>
          <Link href="/guides" className="hover:text-slate-900">가이드</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">작성·검수 원칙</span>
        </nav>

        <article className="mt-7 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-9">
          <p className="text-sm font-black text-blue-600">EDITORIAL POLICY</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">몇이지? 콘텐츠 작성·검수 원칙</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            몇이지?는 계산기를 빠르게 쓰는 것뿐 아니라, 숫자가 어떤 기준에서 나온 것인지 이해할 수 있도록 가이드와 설명 콘텐츠를 함께 제공합니다. 아래는 그 콘텐츠를 만들고 검토하는 기본 원칙입니다.
          </p>
          <p className="mt-3 text-xs font-semibold text-slate-400">최종 업데이트: 2026년 10월 2일</p>

          <div className="mt-9 space-y-4">
            {principles.map((item) => (
              <section key={item.title} className="rounded-2xl border border-slate-200 p-5">
                <h2 className="text-base font-black text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </section>
            ))}
          </div>

          <section className="mt-9 rounded-2xl bg-slate-50 p-5">
            <h2 className="text-base font-black text-slate-950">오류·기준 변경 제보</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              계산 결과나 가이드에서 오래된 기준, 잘못된 숫자, 설명 오류를 발견했다면 알려주세요. 확인 가능한 근거와 함께 검토한 뒤 필요한 경우 수정합니다.
            </p>
            <Link href="/contact" className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-slate-800">
              문의·오류 제보 →
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}
