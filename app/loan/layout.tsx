import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "대출이자 계산기",
  description:
    "대출금액, 금리, 기간을 입력해 원리금균등·원금균등·만기일시상환의 월 납입금과 총 이자를 계산하세요.",
  keywords: [
    "대출이자 계산기",
    "대출 계산기",
    "원리금균등 계산기",
    "원금균등 계산기",
    "대출 월상환액",
  ],
  alternates: { canonical: "/loan" },
  openGraph: {
    title: "대출이자 계산기 | 몇이지?",
    description: "대출 월 납입금과 총 이자를 상환방식별로 계산하세요.",
    url: "/loan",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
