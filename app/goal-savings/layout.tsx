import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "목표금액 모으기 계산기",
  description:
    "현재 자산, 매월 저축액, 예상 수익률을 입력해 목표금액까지 몇 년 몇 개월이 걸리는지 계산하세요.",
  keywords: ["목표금액 계산기", "목돈 모으기", "저축 목표 계산", "1억 모으기 계산기", "저축 기간 계산기"],
  alternates: { canonical: "/goal-savings" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
