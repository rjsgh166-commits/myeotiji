import type { Metadata } from "next";
import Link from "next/link";

import { GUIDE_KEYS, GUIDES, guidePath } from "./_data/guides";

export const metadata: Metadata = {
  title: "계산 가이드 | 숫자를 계산하기 전에 알아둘 기준",
  description:
    "수수료, 만나이, 음력 생일, 2027 공휴일, 중복 할인, 주식 평단처럼 자주 헷갈리는 계산 원리와 공식 자료를 몇이지? 가이드에서 확인하세요.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900">← 몇이지? 홈</Link>

        <header className="mt-7 max-w-3xl">
          <p className="text-sm font-black text-blue-600">GUIDES</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">계산하기 전에 알아두면 좋은 기준</h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            계산기는 숫자를 빠르게 보여주지만, 어떤 기준으로 계산되는지 알아야 결과를 제대로 쓸 수 있습니다. 검색에서 자주 묻는 질문과 실제 계산 예시, 공식 자료를 주제별로 정리했습니다.
          </p>
        </header>

        <section className="mt-9 grid gap-4 md:grid-cols-2">
          {GUIDE_KEYS.map((key) => {
            const guide = GUIDES[key];
            return (
              <article key={key} className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{guide.category}</span>
                  <span className="text-xs font-semibold text-slate-400">{guide.readTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-black leading-8 tracking-tight">{guide.shortTitle}</h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{guide.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link href={guidePath(key)} className="inline-flex min-h-11 items-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-slate-800">
                    가이드 읽기 →
                  </Link>
                  <Link href={guide.calculator.href} className="inline-flex min-h-11 items-center rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200">
                    계산기
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black tracking-wider text-blue-600">EDITORIAL STANDARD</p>
              <h2 className="mt-2 text-xl font-black">몇이지? 가이드 작성 원칙</h2>
            </div>
            <Link href="/guides/editorial-policy" className="text-sm font-black text-blue-600 hover:text-blue-700">
              작성·검수 원칙 자세히 보기 →
            </Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["공식자료 우선", "공휴일·나이·역법처럼 공식 기준이 있는 주제는 정부·공공기관 자료를 먼저 확인합니다."],
              ["계산 예시 공개", "공식만 적지 않고 실제 숫자를 넣은 예시를 통해 결과가 왜 그렇게 나오는지 설명합니다."],
              ["계산기와 역할 분리", "가이드는 원리와 판단 기준을 설명하고, 반복 계산은 연결된 계산기에서 처리합니다."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-slate-50 p-5">
                <h3 className="text-sm font-black">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
