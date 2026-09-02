import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "꿀연휴 추적기",
  description:
    "앞으로 여러 해의 공휴일과 주말을 비교해 연차 0~2일로 길게 쉴 수 있는 꿀연휴와 추천 연차 날짜를 찾아보세요.",
  keywords: [
    "꿀연휴",
    "연휴 계산기",
    "연차 추천",
    "공휴일 연차",
    "황금연휴",
  ],
  alternates: {
    canonical: "/holiday-tracker",
  },
  openGraph: {
    type: "website",
    url: "/holiday-tracker",
    title: "꿀연휴 추적기 | 몇이지?",
    description:
      "앞으로 여러 해의 공휴일과 주말을 비교해 연차 0~2일로 길게 쉴 수 있는 꿀연휴와 추천 연차 날짜를 찾아보세요.",
  },
  twitter: {
    card: "summary",
    title: "꿀연휴 추적기 | 몇이지?",
    description:
      "앞으로 여러 해의 공휴일과 주말을 비교해 연차 0~2일로 길게 쉴 수 있는 꿀연휴와 추천 연차 날짜를 찾아보세요.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
