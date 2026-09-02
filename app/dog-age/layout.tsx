import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "반려견 나이 계산기",
  description:
    "강아지 생년월일과 체급을 입력해 실제 나이와 사람 나이로 환산한 대략적인 나이를 계산하세요.",
  keywords: ["강아지 나이 계산기", "반려견 나이", "강아지 사람나이", "개 나이 환산", "강아지 몇살"],
  alternates: { canonical: "/dog-age" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
