import type { Metadata } from "next";
import HolidayGuidePage from "../_components/HolidayGuidePage";
import { GUIDES } from "../_lib/guides";

export const metadata: Metadata = {
  title: '2027 연차 2일 황금연휴 | 최대 9일 쉬기',
  description: '2027 연차 2일 최장 조합은 추석 9일입니다. 설날·5월 6일 조합과 함께 연차 이틀을 가장 효율적으로 쓰는 방법을 비교하세요.',
  keywords: [
    '2027 연차 2일',
    '연차 2일 황금연휴',
    '2027 황금연휴',
    '연차 2일 9일',
  ],
  alternates: { canonical: "/holiday-tracker/2027/pto-2" },
  openGraph: {
    type: "article",
    url: "/holiday-tracker/2027/pto-2",
    title: '2027 연차 2일 황금연휴 | 최대 9일 쉬기',
    description: '2027 연차 2일 최장 조합은 추석 9일입니다. 설날·5월 6일 조합과 함께 연차 이틀을 가장 효율적으로 쓰는 방법을 비교하세요.',
  },
};

export default function Page() {
  return <HolidayGuidePage guide={GUIDES['pto-2']} />;
}
