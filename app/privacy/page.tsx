import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "몇이지?의 Google Analytics, 쿠키, 호스팅 로그 등 개인정보 및 이용정보 처리 방침을 확인하세요.",
  alternates: {
    canonical: "/privacy",
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
          <p className="text-sm font-bold text-blue-600">PRIVACY</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            개인정보처리방침
          </h1>
          <p className="mt-4 text-sm text-gray-400">최종 업데이트: 2026년 9월 3일</p>

          <div className="mt-8 space-y-9 text-sm leading-7 text-gray-600">
            <section>
              <h2 className="text-lg font-bold text-gray-900">1. 기본 원칙</h2>
              <p className="mt-3">
                몇이지?는 회원가입이나 문의 폼을 운영하지 않아 이름, 전화번호,
                주소 등 이용자가 직접 입력하는 개인정보를 기본적으로 수집하지
                않습니다. 다만 사이트 이용 과정에서 접속 기록과 기기·브라우저
                정보 등 일부 정보가 자동으로 처리될 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900">
                2. 자동으로 처리될 수 있는 정보
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>접속 일시, 방문 페이지, 클릭·계산기 이용 이벤트</li>
                <li>브라우저 종류, 운영체제, 기기 유형 등 기술 정보</li>
                <li>대략적인 지역 정보 및 세션·방문 통계</li>
                <li>쿠키 또는 유사 식별자</li>
                <li>호스팅·보안 운영 과정에서 생성되는 접속 로그 및 IP 정보</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900">
                3. 이용 목적
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>사이트 이용 현황 및 계산기 사용 패턴 분석</li>
                <li>서비스 품질과 사용자 경험 개선</li>
                <li>오류 탐지, 보안 유지 및 비정상적인 이용 방지</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900">
                4. 계산기 입력값 처리
              </h2>
              <p className="mt-3">
                연봉, 금액, 생년월일, 기념일, 출산 예정일 계산에 사용하는 날짜
                등 이용자가 계산기에 입력한 값은 현재 브라우저에서 계산에
                사용되며, 몇이지?가 별도의 회원 데이터베이스에 저장하지
                않습니다. Google Analytics에 보내는 맞춤 이벤트에도 입력한
                금액이나 날짜값 자체는 포함하지 않고 계산기 이름, 경로,
                상호작용 종류 등 이용 통계만 전송하도록 구성합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900">
                5. Google Analytics
              </h2>
              <p className="mt-3">
                몇이지?는 Google Analytics 4를 이용하여 방문자 수, 세션 통계,
                대략적인 지역, 브라우저·기기 정보 및 페이지·이벤트 이용 정보를
                분석합니다. Google Analytics는 이용자를 구분하기 위해 퍼스트
                파티 쿠키 등 식별 기술을 사용할 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900">
                6. 호스팅 서비스
              </h2>
              <p className="mt-3">
                사이트는 Vercel을 통해 제공됩니다. 서비스 운영과 보안 과정에서
                Vercel이 접속 로그, IP 주소, 기기·브라우저 정보, IP 기반의
                대략적인 위치 정보 등을 처리할 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900">
                7. 보관 및 제3자 서비스
              </h2>
              <p className="mt-3">
                분석 및 호스팅 정보의 보관 기간과 처리 위치는 각 서비스의 설정과
                제공업체 정책에 따라 달라질 수 있습니다. 몇이지?는 서비스 운영에
                필요한 범위에서만 관련 데이터를 이용합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900">
                8. 광고 서비스에 관한 안내
              </h2>
              <p className="mt-3">
                향후 Google AdSense 등 광고 서비스를 도입할 수 있습니다. 광고
                서비스가 적용되면 광고 제공 및 효과 측정을 위해 쿠키, 웹 비콘,
                IP 주소 또는 기타 식별 기술이 사용될 수 있으며, 필요한 경우 본
                방침을 업데이트합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900">
                9. 이용자의 선택
              </h2>
              <p className="mt-3">
                이용자는 브라우저 설정을 통해 쿠키를 삭제하거나 차단할 수
                있습니다. 쿠키를 차단하면 일부 분석 기능의 정확도가 낮아질 수
                있으나 기본 계산기 기능 이용에는 영향을 주지 않도록 운영합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900">
                10. 개인정보 관련 문의
              </h2>
              <p className="mt-3">
                개인정보 또는 서비스 데이터 처리와 관련한 문의는 문의 페이지의
                운영자 연락처를 이용해 주세요.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex font-semibold text-blue-600 hover:text-blue-700"
              >
                문의 페이지 →
              </Link>
            </section>

            <section>
              <h2 className="text-lg font-bold text-gray-900">
                11. 방침 변경
              </h2>
              <p className="mt-3">
                서비스 기능이나 이용하는 외부 서비스가 변경되는 경우 본 방침도
                수정될 수 있습니다. 중요한 변경은 이 페이지를 통해 안내합니다.
              </p>
            </section>
          </div>
        </section>

      </div>
    </main>
  );
}
