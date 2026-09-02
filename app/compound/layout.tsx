import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "복리 계산기",
  description:
    "초기 투자금, 매월 투자금, 연 수익률, 기간을 입력해 복리로 불어나는 예상 자산과 투자수익을 계산하세요.",
  keywords: [
    "복리 계산기",
    "복리 투자 계산기",
    "적립식 투자",
    "복리 수익률",
    "장기투자 계산기",
  ],
  alternates: { canonical: "/compound" },
  openGraph: {
    title: "복리 계산기 | 몇이지?",
    description: "매월 적립하는 투자금이 복리로 얼마나 불어나는지 계산하세요.",
    url: "/compound",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
