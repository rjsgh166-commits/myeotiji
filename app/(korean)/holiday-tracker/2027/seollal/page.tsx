import type { Metadata } from "next";
import HolidayGuidePage from "../_components/HolidayGuidePage";
import { GUIDES } from "../_lib/guides";

export const metadata: Metadata = {
  title: '2027 설날 연휴 | 연차 1일로 5일, 2일로 6일',
  description: '2027 설날은 2월 7일이며 2월 6~9일 4일 연휴입니다. 연차 1일이면 5일, 2일이면 6일 쉬는 추천 조합을 확인하세요.',
  keywords: [
    '2027 설날',
    '2027 설날 연휴',
    '설날 대체공휴일',
    '설 연차 추천',
  ],
  alternates: { canonical: "/holiday-tracker/2027/seollal" },
  openGraph: {
    type: "article",
    url: "/holiday-tracker/2027/seollal",
    title: '2027 설날 연휴 | 연차 1일로 5일, 2일로 6일',
    description: '2027 설날은 2월 7일이며 2월 6~9일 4일 연휴입니다. 연차 1일이면 5일, 2일이면 6일 쉬는 추천 조합을 확인하세요.',
  },
};

export default function Page() {
  return <HolidayGuidePage guide={GUIDES['seollal']} />;
}
