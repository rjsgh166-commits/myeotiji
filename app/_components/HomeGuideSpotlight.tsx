"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const featuredGuides = [
  {
    href: "/guides/fee-calculation",
    eyebrow: "돈 · 정산",
    title: "수수료 계산법",
    description: "수수료·실수령액·역산을 실제 숫자로 이해해요.",
  },
  {
    href: "/guides/2027-holidays",
    eyebrow: "날짜 · 연휴",
    title: "2027 공휴일·황금연휴",
    description: "공식 월력 기준과 연차를 붙일 때 볼 포인트를 정리했어요.",
  },
  {
    href: "/guides/age",
    eyebrow: "날짜 · 생활",
    title: "만 나이 계산법",
    description: "생일 전후 계산법과 연 나이 차이를 예시로 확인해요.",
  },
] as const;

export default function HomeGuideSpotlight() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <section className="border-t border-slate-100 bg-[#f7f8fa] px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black tracking-wider text-blue-600">CALCULATION GUIDES</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              숫자 뒤의 기준이 궁금하다면
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
              결과만 보여주는 데서 끝내지 않고, 계산 원리·실제 예시·공식 자료까지 따로 정리했습니다.
            </p>
          </div>
          <Link href="/guides" className="text-sm font-black text-blue-600 hover:text-blue-700">
            계산 가이드 전체 보기 →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
            >
              <p className="text-xs font-black text-blue-600">{guide.eyebrow}</p>
              <h3 className="mt-2 text-lg font-black text-slate-950 group-hover:text-blue-700">
                {guide.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p>
              <span className="mt-4 inline-flex text-sm font-bold text-slate-500 group-hover:text-blue-600">
                가이드 읽기 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
