import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContentV29 from "../_components/CalculatorSeoContentV29";

export const metadata: Metadata = {
  title: "주식 평단 계산기 · 물타기 불타기 목표 평단",
  description:
    "현재 평단과 보유수량, 추가 매수가를 입력해 새 평균단가를 계산하고 원하는 목표 평단까지 필요한 추가수량을 역산하세요.",
  keywords: [
    "주식 평단 계산기",
    "물타기 계산기",
    "불타기 계산기",
    "평균단가 계산",
    "목표 평단",
    "주식 물타기",
  ],
  alternates: { canonical: "/stock-average" },
  openGraph: {
    title: "주식 평단 · 물타기 불타기 계산기 | 몇이지?",
    description: "추가매수 후 평단과 목표 평단에 필요한 매수수량을 계산하세요.",
    url: "/stock-average",
  },
  twitter: {
    card: "summary",
    title: "주식 평단 계산기 | 몇이지?",
    description: "물타기·불타기 후 새 평단과 목표 평단 추가수량을 확인하세요.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContentV29 pathname="/stock-average" />
    </>
  );
}
