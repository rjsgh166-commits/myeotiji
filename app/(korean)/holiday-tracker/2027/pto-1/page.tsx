import type { Metadata } from "next";
import HolidayGuidePage from "../_components/HolidayGuidePage";
import { GUIDES } from "../_lib/guides";

export const metadata: Metadata = {
  title: '2027 연차 1일 황금연휴 | 최대 6일 쉬기',
  description: '2027년에 연차 1일만 쓴다면 언제가 가장 효율적일까요? 추석 6일, 설날·5월 5일 등 연차 하루 추천 황금연휴를 비교합니다.',
  keywords: [
    '2027 연차 1일',
    '연차 하루 황금연휴',
    '2027 연차 추천',
    '연차 1일 6일',
  ],
  alternates: { canonical: "/holiday-tracker/2027/pto-1" },
  openGraph: {
    type: "article",
    url: "/holiday-tracker/2027/pto-1",
    title: '2027 연차 1일 황금연휴 | 최대 6일 쉬기',
    description: '2027년에 연차 1일만 쓴다면 언제가 가장 효율적일까요? 추석 6일, 설날·5월 5일 등 연차 하루 추천 황금연휴를 비교합니다.',
  },
};

export default function Page() {
  return <HolidayGuidePage guide={GUIDES['pto-1']} />;
}
