"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import RelatedCalculators from "../_components/RelatedCalculators";

type Mode = "rate" | "price";

function digitsOnly(value: string) {
  return value.replace(/[^\d]/g, "");
}

function formatMoneyInput(value: string) {
  const digits = digitsOnly(value);
  if (!digits) return "";
  return Number(digits).toLocaleString("ko-KR");
}

function parseMoney(value: string) {
  const parsed = Number(value.replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatWon(value: number) {
  return `${Math.round(value).toLocaleString("ko-KR")}원`;
}

function formatPercent(value: number) {
  if (!Number.isFinite(value)) return "0%";
  const rounded = Math.round(value * 100) / 100;
  return `${rounded.toLocaleString("ko-KR", {
    maximumFractionDigits: 2,
  })}%`;
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
        active
          ? "border-blue-600 bg-blue-50 text-blue-700"
          : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

function ResultRow({
  label,
  value,
  emphasized = false,
}: {
  label: string;
  value: string;
  emphasized?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 py-3 ${
        emphasized ? "text-base font-bold" : "text-sm"
      }`}
    >
      <span className={emphasized ? "text-gray-900" : "text-gray-500"}>
        {label}
      </span>
      <span
        className={
          emphasized ? "text-gray-950" : "font-semibold text-gray-800"
        }
      >
        {value}
      </span>
    </div>
  );
}

export default function DiscountPage() {
  const [mode, setMode] = useState<Mode>("rate");
  const [originalPrice, setOriginalPrice] = useState("100,000");
  const [discountRate, setDiscountRate] = useState("20");
  const [salePrice, setSalePrice] = useState("80,000");

  const result = useMemo(() => {
    const original = parseMoney(originalPrice);

    if (mode === "rate") {
      const rate = Number(discountRate);
      const safeRate =
        Number.isFinite(rate) && rate >= 0 ? Math.min(rate, 100) : 0;

      const discountAmount = original * (safeRate / 100);
      const finalPrice = Math.max(original - discountAmount, 0);

      return {
        original,
        rate: safeRate,
        discountAmount,
        finalPrice,
        valid: original > 0,
      };
    }

    const sale = parseMoney(salePrice);
    const discountAmount = Math.max(original - sale, 0);
    const rate =
      original > 0 ? Math.max(((original - sale) / original) * 100, 0) : 0;

    return {
      original,
      rate,
      discountAmount,
      finalPrice: sale,
      valid: original > 0 && sale >= 0,
    };
  }, [mode, originalPrice, discountRate, salePrice]);

  const invalidSalePrice =
    mode === "price" &&
    result.original > 0 &&
    parseMoney(salePrice) > result.original;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8">
          <Link
            href="/"
            className="mb-5 inline-flex text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            ← 몇이지? 홈
          </Link>

          <div>
            <p className="mb-2 text-sm font-bold text-blue-600">생활 · 쇼핑</p>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              할인율 계산기
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              할인율로 최종 가격을 계산하거나, 실제 판매가를 기준으로 할인율을
              역산할 수 있어요.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <h2 className="mb-5 text-lg font-bold">계산 방식</h2>

            <div className="mb-8 flex gap-2">
              <ModeButton active={mode === "rate"} onClick={() => setMode("rate")}>
                할인율로 계산
              </ModeButton>
              <ModeButton active={mode === "price"} onClick={() => setMode("price")}>
                판매가로 할인율 계산
              </ModeButton>
            </div>

            <div className="space-y-7">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  정가
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={originalPrice}
                    onChange={(e) =>
                      setOriginalPrice(formatMoneyInput(e.target.value))
                    }
                    placeholder="100,000"
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-4 pr-12 text-right text-lg font-bold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                    원
                  </span>
                </div>
              </div>

              {mode === "rate" ? (
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    할인율
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={discountRate}
                      onChange={(e) => setDiscountRate(e.target.value)}
                      placeholder="20"
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-4 pr-12 text-right text-lg font-bold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                      %
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[10, 20, 30, 40, 50].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => setDiscountRate(String(rate))}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-200"
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    실제 판매가
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={salePrice}
                      onChange={(e) =>
                        setSalePrice(formatMoneyInput(e.target.value))
                      }
                      placeholder="80,000"
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-4 pr-12 text-right text-lg font-bold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                      원
                    </span>
                  </div>
                  {invalidSalePrice && (
                    <p className="mt-2 text-xs font-medium text-red-500">
                      판매가가 정가보다 높아요. 할인율은 0%로 표시돼요.
                    </p>
                  )}
                </div>
              )}
            </div>
          </section>

          <section className="h-fit rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8 lg:sticky lg:top-6">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500">
                {mode === "rate" ? "할인 후 가격" : "실제 할인율"}
              </p>
              <div className="mt-2 text-4xl font-black tracking-tight text-blue-600">
                {mode === "rate"
                  ? formatWon(result.finalPrice)
                  : formatPercent(result.rate)}
              </div>
            </div>

            <div className="divide-y divide-gray-100 border-y border-gray-100">
              <ResultRow label="정가" value={formatWon(result.original)} />
              <ResultRow
                label="할인율"
                value={formatPercent(result.rate)}
              />
              <ResultRow
                label="할인 금액"
                value={formatWon(result.discountAmount)}
              />
              <ResultRow
                label="최종 가격"
                value={formatWon(result.finalPrice)}
                emphasized
              />
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-800">계산식</p>

              {mode === "rate" ? (
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  할인 금액 = 정가 × 할인율
                  <br />
                  최종 가격 = 정가 - 할인 금액
                </p>
              ) : (
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  할인율 = (정가 - 판매가) ÷ 정가 × 100
                </p>
              )}
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="text-lg font-bold">할인 계산 예시</h2>

          <div className="mt-5 grid gap-4 text-sm leading-6 text-gray-600 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">10만원에서 20% 할인</p>
              <p>
                할인 금액은 20,000원,
                <br />
                최종 가격은 80,000원이에요.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">5만원에서 30% 할인</p>
              <p>
                할인 금액은 15,000원,
                <br />
                최종 가격은 35,000원이에요.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-1 font-bold text-gray-800">
                10만원 상품을 7만원에 구매
              </p>
              <p>
                실제 할인 금액은 30,000원,
                <br />
                할인율은 30%예요.
              </p>
            </div>
          </div>
        </section>

        <RelatedCalculators currentHref="/discount" />
      </div>
    </main>
  );
}
