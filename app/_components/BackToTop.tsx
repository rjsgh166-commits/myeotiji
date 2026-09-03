"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CALCULATOR_BY_HREF } from "../_lib/calculators";

export default function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!CALCULATOR_BY_HREF[pathname]) {
      setVisible(false);
      return;
    }

    const onScroll = () => {
      setVisible(window.scrollY > 700);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  if (!CALCULATOR_BY_HREF[pathname] || !visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="페이지 맨 위로 이동"
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-11 items-center gap-1.5 rounded-full border border-gray-200 bg-white/95 px-4 py-2.5 text-xs font-black text-gray-700 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
    >
      <span aria-hidden="true">↑</span>
      <span className="hidden sm:inline">위로</span>
    </button>
  );
}
