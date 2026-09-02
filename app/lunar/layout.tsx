import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "음력 양력 변환 계산기",
  description:
    "양력 날짜를 음력으로, 음력 날짜를 양력으로 변환하고 평달·윤달 여부와 간지까지 확인하세요.",
  keywords: [
    "음력 계산기",
    "양력 음력 변환",
    "음력 양력 변환",
    "윤달 계산",
  ],
  alternates: {
    canonical: "/lunar",
  },
  openGraph: {
    type: "website",
    url: "/lunar",
    title: "음력 양력 변환 계산기 | 몇이지?",
    description:
      "양력 날짜를 음력으로, 음력 날짜를 양력으로 변환하고 평달·윤달 여부와 간지까지 확인하세요.",
  },
  twitter: {
    card: "summary",
    title: "음력 양력 변환 계산기 | 몇이지?",
    description:
      "양력 날짜를 음력으로, 음력 날짜를 양력으로 변환하고 평달·윤달 여부와 간지까지 확인하세요.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
