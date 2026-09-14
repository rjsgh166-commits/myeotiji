import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContentV29 from "../_components/CalculatorSeoContentV29";

export const metadata: Metadata = {
  title: "만나이 계산기 · 생일 전후 나이 계산",
  description:
    "생년월일을 입력해 오늘 기준 만나이와 다음 생일까지 남은 날짜를 계산하세요. 만 나이 공식, 연 나이와의 차이, 법제처 기준도 함께 안내합니다.",
  keywords: [
    "만나이 계산기",
    "만 나이 계산",
    "나이 계산기",
    "생년월일 나이",
    "연 나이",
    "만 나이 통일",
  ],
  alternates: { canonical: "/age" },
  openGraph: {
    title: "만나이 계산기 | 몇이지?",
    description: "생년월일로 오늘 기준 만나이와 다음 생일까지 남은 날짜를 계산하세요.",
    url: "/age",
  },
  twitter: {
    card: "summary",
    title: "만나이 계산기 | 몇이지?",
    description: "생일 전후를 반영한 만나이 계산법과 연 나이 차이를 확인하세요.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContentV29 pathname="/age" />
    </>
  );
}
