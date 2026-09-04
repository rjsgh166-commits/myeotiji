import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "꿀연휴 플래너 | 남은 연차 최적화",
  description:
    "남은 연차를 입력하면 2026·2027 공휴일과 주말을 분석해 가장 오래 쉬는 조합, 연차 효율이 좋은 조합, 자주 쉬는 조합을 추천합니다.",
  keywords: [
    "꿀연휴",
    "황금연휴",
    "연차 추천",
    "연차 계획",
    "2027 공휴일",
    "2027 황금연휴",
    "휴가 계획",
  ],
  alternates: { canonical: "/holiday-tracker" },
  openGraph: {
    type: "website",
    url: "/holiday-tracker",
    title: "꿀연휴 플래너 | 남은 연차를 가장 잘 쓰는 방법",
    description: "남은 연차와 휴가 스타일만 고르면 황금연휴 포트폴리오를 만들어드려요.",
  },
};

export default function HolidayTrackerLayout({ children }: { children: ReactNode }) {
  return children;
}
