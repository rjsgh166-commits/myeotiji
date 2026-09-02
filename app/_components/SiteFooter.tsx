import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="text-xl font-black tracking-tight text-gray-900">
              몇이지?
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
              일상에서 궁금한 숫자를 쉽고 빠르게 계산할 수 있는 생활 계산기
              서비스입니다.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-gray-900">서비스</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-500">
              <Link href="/about" className="hover:text-gray-900">
                몇이지? 소개
              </Link>
              <Link href="/contact" className="hover:text-gray-900">
                문의
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold text-gray-900">안내</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-900">
                개인정보처리방침
              </Link>
              <Link href="/disclaimer" className="hover:text-gray-900">
                계산 결과 및 면책 안내
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-xs leading-5 text-gray-400">
          <p>© 2026 몇이지? All rights reserved.</p>
          <p className="mt-1">
            본 사이트의 계산 결과는 일반적인 정보 제공을 위한 참고용입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
