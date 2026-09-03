"use client";

import { useEffect, useRef, useState } from "react";

const BANNER_WIDTH = 680;
const BANNER_HEIGHT = 140;

export default function CoupangDeals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateScale = () => {
      const width = element.getBoundingClientRect().width;
      setScale(Math.min(1, width / BANNER_WIDTH));
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-6 overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
      <div>
        <p className="text-xs font-bold tracking-wide text-orange-600">
          SHOPPING DEALS
        </p>
        <h2 className="mt-1 text-xl font-black tracking-tight text-gray-900 sm:text-2xl">
          🔥 현재 할인 상품
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          쿠팡에서 자동으로 갱신되는 상품을 확인해보세요. 실제 가격과 할인
          여부는 접속 시점에 따라 달라질 수 있어요.
        </p>
      </div>

      <div
        ref={containerRef}
        className="mt-5 w-full overflow-hidden rounded-2xl bg-gray-50"
      >
        <div
          className="relative w-full"
          style={{ height: `${BANNER_HEIGHT * scale}px` }}
        >
          <div
            className="absolute left-1/2 top-0"
            style={{
              width: `${BANNER_WIDTH}px`,
              height: `${BANNER_HEIGHT}px`,
              transform: `translateX(-50%) scale(${scale})`,
              transformOrigin: "top center",
            }}
          >
            <iframe
              title="쿠팡 현재 할인 상품"
              src="/coupang-discount-banner.html"
              width={BANNER_WIDTH}
              height={BANNER_HEIGHT}
              scrolling="no"
              className="block border-0"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50 px-4 py-4">
        <p className="text-xs font-bold text-orange-800">광고 · 제휴 안내</p>
        <p className="mt-1 text-xs leading-5 text-orange-700 sm:text-sm">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의
          수수료를 제공받습니다.
        </p>
      </div>
    </section>
  );
}
