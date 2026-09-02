import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "문의",
  description:
    "몇이지? 계산 오류, 개선 의견, 제휴 및 서비스 관련 문의 방법을 안내합니다.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/"
          className="mb-6 inline-flex text-sm font-medium text-gray-500 transition hover:text-gray-900"
        >
          ← 몇이지? 홈
        </Link>

        
        <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-9">
          <p className="text-sm font-bold text-blue-600">CONTACT</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            문의
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-600">
            계산 오류, 개선 의견, 제휴 및 기타 서비스 관련 문의를 받을 수
            있습니다.
          </p>

          <div className="mt-8 rounded-2xl bg-gray-50 p-6">
            <p className="text-sm font-semibold text-gray-500">문의 이메일</p>
            <a
              href="mailto:contact@myeotiji.kr"
              className="mt-2 inline-block text-xl font-black text-blue-600 hover:text-blue-700"
            >
              contact@myeotiji.kr
            </a>
            <p className="mt-3 text-sm leading-6 text-gray-500">
              문의 내용에 계산기 이름, 입력값, 확인한 결과를 함께 적어주시면
              확인하는 데 도움이 됩니다.
            </p>
          </div>

          <div className="mt-8 space-y-4 text-sm leading-6 text-gray-600">
            <div>
              <h2 className="font-bold text-gray-900">오류 제보</h2>
              <p className="mt-1">
                계산 결과가 예상과 다르거나 페이지가 정상 작동하지 않는 경우
                사용한 계산기와 입력값을 알려주세요.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-gray-900">개인정보 주의</h2>
              <p className="mt-1">
                주민등록번호, 계좌번호, 비밀번호, 상세 급여명세서 등 민감하거나
                불필요한 개인정보는 이메일에 포함하지 말아주세요.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
