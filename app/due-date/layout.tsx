import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "출산 예정일 계산기",
  description:
    "마지막 생리 시작일 또는 수정일을 입력해 예상 출산 예정일과 현재 임신 주수를 계산하세요.",
  keywords: ["출산 예정일 계산기", "임신 예정일 계산기", "임신 주수 계산", "마지막 생리 예정일", "분만 예정일"],
  alternates: { canonical: "/due-date" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
