import type { Metadata } from "next";
import type { ReactNode } from "react";
import CalculatorSeoContentV29 from "../_components/CalculatorSeoContentV29";

export const metadata: Metadata = {
  title: "출산예정일 계산기 | 마지막 생리일·임신주수 계산",
  description:
    "마지막 생리 시작일 또는 수정일로 출산예정일과 임신주수를 계산하세요. 생리 시작일 +280일(40주), 수정일 +266일 기준과 초음파 결과가 다른 이유도 안내합니다.",
  keywords: [
    "출산예정일 계산기",
    "임신주수 계산기",
    "임신 40주",
    "출산예정일",
    "마지막 생리 예정일",
  ],
  alternates: { canonical: "/due-date" },
  openGraph: {
    title: "출산예정일 계산기 | 몇이지?",
    description: "마지막 생리 시작일에서 40주·280일 기준 예상 출산일을 참고 계산하세요.",
    url: "/due-date",
  },
  twitter: {
    card: "summary",
    title: "출산예정일 계산기 | 몇이지?",
    description: "임신 40주 기준 예상 출산일과 계산 기준을 확인하세요.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <CalculatorSeoContentV29 pathname="/due-date" />
    </>
  );
}
