import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "며칠이지? 날짜·D-Day 계산기",
  description:
    "태어난 지 며칠, 만난 지 며칠, 입사 후 근속기간, 전역·시험 D-Day, 특정 날짜의 요일까지 한 번에 계산해보세요.",
  keywords: [
    "며칠 계산기",
    "몇일 계산기",
    "날짜 계산기",
    "D-Day 계산기",
    "디데이 계산기",
    "태어난지 며칠",
    "만난지 며칠",
    "커플 날짜 계산기",
    "입사일 계산기",
    "근속기간 계산기",
    "전역일 계산기",
    "시험 디데이",
    "요일 계산기",
    "무슨 요일",
    "날짜 요일 계산",
    "특정 날짜 요일",
  ],
  alternates: {
    canonical: "/days",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/days",
    title: "며칠이지? 날짜·D-Day 계산기 | 몇이지?",
    description:
      "태어난 날부터 커플 기념일, 입사 근속기간, 전역일, 시험일, 특정 날짜의 요일까지 계산해보세요.",
  },
  twitter: {
    card: "summary",
    title: "며칠이지? 날짜·D-Day 계산기 | 몇이지?",
    description:
      "태어난 지 며칠, 만난 지 며칠, 근속기간, 전역·시험 D-Day와 날짜별 요일까지 빠르게 계산하세요.",
  },
};

export default function DaysLayout({ children }: { children: ReactNode }) {
  return children;
}
