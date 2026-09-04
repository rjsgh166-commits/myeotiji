import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContent from "../_components/CalculatorSeoContent";

export const metadata: Metadata = {
  title: "대출이자 · 대출 비교 계산기",
  description:
    "대출금액, 금리, 기간을 입력해 월 납입금과 총 이자를 계산하고 두 대출 조건의 금리·기간·상환방식을 나란히 비교하세요.",
  keywords: [
    "대출이자 계산기",
    "대출 계산기",
    "원리금균등 계산기",
    "원금균등 계산기",
    "대출 월상환액",
    "대출 비교 계산기",
    "대출 금리 비교",
    "대출 총이자 비교",
  ],
  alternates: { canonical: "/loan" },
  openGraph: {
    title: "대출이자 · 대출 비교 계산기 | 몇이지?",
    description: "대출 월 납입금과 총 이자를 계산하고 대출 A/B 조건을 비교하세요.",
    url: "/loan",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContent pathname="/loan" />
    </>
  );
}
