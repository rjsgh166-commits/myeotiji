import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "전월세 전환율 계산기",
  description:
    "보증금을 월세로, 월세를 보증금으로 바꿀 때 적정 전환 금액을 계산하세요. 전월세 전환율을 직접 입력해 비교할 수 있습니다.",
  keywords: ["전월세 전환율 계산기", "전세 월세 전환", "월세 보증금 환산", "보증금 월세 계산", "전세환산"],
  alternates: { canonical: "/rent-conversion" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
