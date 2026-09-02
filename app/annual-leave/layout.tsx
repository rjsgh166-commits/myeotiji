import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "연차 발생일수 계산기",
  description:
    "입사일과 기준일을 입력해 근로기준법상 연차 유급휴가 발생일수를 입사일 기준으로 계산하세요.",
  keywords: ["연차 계산기", "연차 발생일수", "입사일 연차", "연차휴가 계산", "근속연수 연차"],
  alternates: { canonical: "/annual-leave" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
