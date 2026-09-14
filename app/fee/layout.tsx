import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContentV29 from "../_components/CalculatorSeoContentV29";

export const metadata: Metadata = {
  title: "수수료 계산기 · 정산액 역산",
  description:
    "거래금액과 수수료율로 실제 수수료와 정산액을 계산하고, 원하는 실수령액을 받기 위해 필요한 금액도 역산하세요.",
  keywords: [
    "수수료 계산기",
    "수수료 계산",
    "정산액 계산기",
    "수수료 역산",
    "판매 수수료",
    "플랫폼 수수료",
  ],
  alternates: { canonical: "/fee" },
  openGraph: {
    title: "수수료 계산기 · 정산액 역산 | 몇이지?",
    description: "수수료를 뗀 실제 정산액과 목표 정산액에 필요한 판매금액을 계산하세요.",
    url: "/fee",
  },
  twitter: {
    card: "summary",
    title: "수수료 계산기 | 몇이지?",
    description: "수수료·정산액·역산 금액을 빠르게 확인하세요.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContentV29 pathname="/fee" />
    </>
  );
}
