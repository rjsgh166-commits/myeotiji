import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "만나이 계산기",
  description:
    "생년월일을 입력해 오늘 기준 만나이, 올해 생일 여부, 다음 생일 날짜와 남은 일수를 한 번에 확인하세요.",
  keywords: [
    "만나이 계산기",
    "만 나이",
    "나이 계산기",
    "생년월일 나이 계산",
  ],
  alternates: {
    canonical: "/age",
  },
  openGraph: {
    type: "website",
    url: "/age",
    title: "만나이 계산기 | 몇이지?",
    description:
      "생년월일을 입력해 오늘 기준 만나이, 올해 생일 여부, 다음 생일 날짜와 남은 일수를 한 번에 확인하세요.",
  },
  twitter: {
    card: "summary",
    title: "만나이 계산기 | 몇이지?",
    description:
      "생년월일을 입력해 오늘 기준 만나이, 올해 생일 여부, 다음 생일 날짜와 남은 일수를 한 번에 확인하세요.",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
