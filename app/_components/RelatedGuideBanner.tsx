"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const guideByCalculator: Record<string, { href: string; title: string; description: string }> = {
  "/fee": {
    href: "/guides/fee-calculation",
    title: "수수료 계산 기준과 역산 방법",
    description: "수수료율만 보는 것과 실제 정산액을 보는 것이 왜 다른지 예시로 확인하세요.",
  },
  "/age": {
    href: "/guides/age",
    title: "만 나이 계산법과 생일 전후 기준",
    description: "만 나이 공식, 연 나이와의 차이, 생일 전후 예시를 한 번에 정리했습니다.",
  },
  "/lunar": {
    href: "/guides/lunar-birthday",
    title: "음력 생일과 윤달이 헷갈린다면",
    description: "음력 날짜가 해마다 달라지는 이유와 윤달을 확인해야 하는 경우를 설명합니다.",
  },
  "/discount": {
    href: "/guides/stacked-discount",
    title: "중복 할인은 왜 단순히 더하면 안 될까?",
    description: "20% + 10%가 실제 28%가 되는 이유와 쿠폰 적용 순서를 예시로 확인하세요.",
  },
  "/stock-average": {
    href: "/guides/stock-average",
    title: "주식 평단과 물타기 원리",
    description: "가중평균으로 새 평단이 계산되는 원리와 추가매수 전 확인할 점을 정리했습니다.",
  },
};

export default function RelatedGuideBanner() {
  const pathname = usePathname();
  const guide = guideByCalculator[pathname];
  if (!guide) return null;

  return (
    <section className="border-t border-slate-100 bg-white px-5 py-8">
      <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-blue-50/70 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
        <div>
          <p className="text-xs font-black tracking-wider text-blue-700">RELATED GUIDE</p>
          <h2 className="mt-2 text-lg font-black text-slate-950">{guide.title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{guide.description}</p>
        </div>
        <Link
          href={guide.href}
          className="mt-4 inline-flex min-h-11 shrink-0 items-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 sm:mt-0"
        >
          계산 원리 보기 →
        </Link>
      </div>
    </section>
  );
}
