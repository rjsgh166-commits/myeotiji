import type { Metadata } from "next";
import HolidayGuidePage from "../_components/HolidayGuidePage";
import { GUIDES } from "../_lib/guides";

export const metadata: Metadata = {
  title: '2027 추석 황금연휴 | 연차 2일로 9일 쉬기',
  description: '2027 추석은 9월 14~16일. 9월 13일과 17일 연차 2일을 쓰면 9월 11~19일 9일 연속 휴가가 됩니다. 연차 1일·2일 조합을 비교하세요.',
  keywords: [
    '2027 추석',
    '2027 추석 연휴',
    '2027 황금연휴',
    '추석 연차',
    '연차 2일 9일',
  ],
  alternates: { canonical: "/holiday-tracker/2027/chuseok" },
  openGraph: {
    type: "article",
    url: "/holiday-tracker/2027/chuseok",
    title: '2027 추석 황금연휴 | 연차 2일로 9일 쉬기',
    description: '2027 추석은 9월 14~16일. 9월 13일과 17일 연차 2일을 쓰면 9월 11~19일 9일 연속 휴가가 됩니다. 연차 1일·2일 조합을 비교하세요.',
  },
};

export default function Page() {
  return <HolidayGuidePage guide={GUIDES['chuseok']} />;
}
