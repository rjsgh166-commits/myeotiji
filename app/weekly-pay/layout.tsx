import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContent from "../_components/CalculatorSeoContent";

export const metadata: Metadata = {
  title: "주휴수당 계산기",
  description:
    "시급과 주 소정근로시간, 개근 여부를 입력해 예상 주휴시간과 주휴수당, 주휴 포함 주급을 계산해보세요.",
  keywords: [
    "주휴수당 계산기",
    "주휴수당",
    "주휴시간",
    "주급 계산기",
  ],
  alternates: {
    canonical: "/weekly-pay",
  },
  openGraph: {
    type: "website",
    url: "/weekly-pay",
    title: "주휴수당 계산기 | 몇이지?",
    description:
      "시급과 주 소정근로시간, 개근 여부를 입력해 예상 주휴시간과 주휴수당, 주휴 포함 주급을 계산해보세요.",
  },
  twitter: {
    card: "summary",
    title: "주휴수당 계산기 | 몇이지?",
    description:
      "시급과 주 소정근로시간, 개근 여부를 입력해 예상 주휴시간과 주휴수당, 주휴 포함 주급을 계산해보세요.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <CalculatorSeoContent pathname="/weekly-pay" />
    </>
  );
}
