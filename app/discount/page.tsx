"use client";

import Link from "next/link";
import RelatedCalculators from "../_components/RelatedCalculators";
import ResultActionBar from "../_components/ResultActionBar";
import DecisionSummaryCard from "../_components/DecisionSummaryCard";
import SaveCalculationButton from "../_components/SaveCalculationButton";
import AccessibleResultStatus from "../_components/AccessibleResultStatus";
import TrustStrip from "../_components/TrustStrip";
import CoupangDeals from "../_components/CoupangDeals";
import { useEffect, useMemo, useState } from "react";
import CalculationAnalytics from "../_components/CalculationAnalytics";
import { consumeCalculationTransfer } from "../_lib/calculationTransfer";

type Mode = "rate" | "price" | "stacked";

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
  return `${Math.max(0, Math.round(value)).toLocaleString("ko-KR")}원`;
}

function formatPercent(value: number) {
  if (!Number.isFinite(value)) return "0%";
  const rounded = Math.round(value * 100) / 100;
  return `${rounded.toLocaleString("ko-KR", {
    maximumFractionDigits: 2,
  })}%`;
}

function safeRate(value: string) {
  const rate = Number(value);
  return Number.isFinite(rate) && rate >= 0 ? Math.min(rate, 100) : 0;
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
      data-calculation-control="true"
      onClick={onClick}
      aria-pressed={active}
      className={`flex-1 rounded-xl border px-3 py-3 text-xs font-semibold transition sm:px-4 sm:text-sm ${
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
  const [firstRate, setFirstRate] = useState("20");
  const [secondRate, setSecondRate] = useState("10");
  const [couponAmount, setCouponAmount] = useState("0");

  useEffect(() => {
    const transferred = consumeCalculationTransfer("/discount") || {};
    const params = new URLSearchParams(window.location.search);
    const read = (key: string) => transferred[key] ?? params.get(key);
    const savedMode = read("mode");
    if (savedMode === "rate" || savedMode === "price" || savedMode === "stacked") setMode(savedMode);
    const setIfPresent = (key: string, setter: (value: string) => void) => {
      const value = read(key);
      if (value !== null && value !== undefined) setter(String(value));
    };
    setIfPresent("original", setOriginalPrice);
    setIfPresent("discount", setDiscountRate);
    setIfPresent("sale", setSalePrice);
    setIfPresent("first", setFirstRate);
    setIfPresent("second", setSecondRate);
    setIfPresent("coupon", setCouponAmount);
    if (window.location.search) window.history.replaceState({}, "", "/discount");
  }, []);

  const result = useMemo(() => {
    const original = parseMoney(originalPrice);

    if (mode === "rate") {
      const rate = safeRate(discountRate);
      const discountAmount = original * (rate / 100);
      const finalPrice = Math.max(original - discountAmount, 0);

      return {
        original,
        rate,
        discountAmount,
        finalPrice,
        afterFirst: finalPrice,
        afterSecond: finalPrice,
        couponApplied: 0,
        valid: original > 0,
      };
    }

    if (mode === "price") {
      const sale = parseMoney(salePrice);
      const discountAmount = Math.max(original - sale, 0);
      const rate =
        original > 0 ? Math.max(((original - sale) / original) * 100, 0) : 0;

      return {
        original,
        rate,
        discountAmount,
        finalPrice: sale,
        afterFirst: sale,
        afterSecond: sale,
        couponApplied: 0,
        valid: original > 0 && sale >= 0,
      };
    }

    const first = safeRate(firstRate);
    const second = safeRate(secondRate);
    const afterFirst = original * (1 - first / 100);
    const afterSecond = afterFirst * (1 - second / 100);
    const requestedCoupon = Math.max(0, parseMoney(couponAmount));
    const couponApplied = Math.min(requestedCoupon, afterSecond);
    const finalPrice = Math.max(afterSecond - couponApplied, 0);
    const discountAmount = Math.max(original - finalPrice, 0);
    const rate = original > 0 ? (discountAmount / original) * 100 : 0;

    return {
      original,
      rate,
      discountAmount,
      finalPrice,
      afterFirst,
      afterSecond,
      couponApplied,
      valid: original > 0,
    };
  }, [
    mode,
    originalPrice,
    discountRate,
    salePrice,
    firstRate,
    secondRate,
    couponAmount,
  ]);

  const invalidSalePrice =
    mode === "price" &&
    result.original > 0 &&
    parseMoney(salePrice) > result.original;

  const stackedRateWithoutCoupon =
    mode === "stacked" && result.original > 0
      ? ((result.original - result.afterSecond) / result.original) * 100
      : 0;

  const shareText =
    mode === "stacked"
      ? `🛒 추가 할인 계산\n정가: ${formatWon(result.original)}\n1차 할인: ${formatPercent(safeRate(firstRate))}\n2차 할인: ${formatPercent(safeRate(secondRate))}\n쿠폰: ${formatWon(result.couponApplied)}\n실제 총 할인율: ${formatPercent(result.rate)}\n최종 가격: ${formatWon(result.finalPrice)}`
      : `🛒 할인율 계산\n정가: ${formatWon(result.original)}\n할인율: ${formatPercent(result.rate)}\n할인 금액: ${formatWon(result.discountAmount)}\n최종 가격: ${formatWon(result.finalPrice)}`;

  const discountConclusion =
    invalidSalePrice
      ? "판매가가 정가보다 높아서 할인으로 볼 수 없어요."
      : mode === "stacked"
        ? result.couponApplied > 0
          ? `할인과 쿠폰을 전부 적용하면 실제 ${formatPercent(result.rate)} 할인돼요.`
          : `${formatPercent(safeRate(firstRate))} + ${formatPercent(safeRate(secondRate))}는 단순 합계가 아니라 실제 ${formatPercent(result.rate)} 할인이에요.`
        : mode === "price"
          ? `이 판매가는 정가 대비 실제 ${formatPercent(result.rate)} 할인된 가격이에요.`
          : `${formatPercent(result.rate)} 할인하면 ${formatWon(result.finalPrice)}에 살 수 있어요.`;

  const savedState = { mode, original: originalPrice, discount: discountRate, sale: salePrice, first: firstRate, second: secondRate, coupon: couponAmount };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <CalculationAnalytics
        calculator="discount"
        mode={mode}
        valid={result.valid && !invalidSalePrice}
        signature={`${mode}|${originalPrice}|${discountRate}|${salePrice}|${firstRate}|${secondRate}|${couponAmount}`}
      />
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
              단일 할인뿐 아니라 1차 할인 + 추가 할인 + 쿠폰까지 순서대로 적용해
              실제 최종 할인율을 계산할 수 있어요.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <h2 className="mb-5 text-lg font-bold">계산 방식</h2>

            <div className="mb-8 grid grid-cols-3 gap-2">
              <ModeButton active={mode === "rate"} onClick={() => setMode("rate")}>
                할인율로 계산
              </ModeButton>
              <ModeButton active={mode === "price"} onClick={() => setMode("price")}>
                판매가 역산
              </ModeButton>
              <ModeButton
                active={mode === "stacked"}
                onClick={() => setMode("stacked")}
              >
                추가 할인·쿠폰
              </ModeButton>
            </div>

            <div className="space-y-7">
              <div>
                <label className="mb-2 block text-sm font-semibold">정가</label>
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
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    원
                  </span>
                </div>
              </div>

              {mode === "rate" && (
                <div>
                  <label className="mb-2 block text-sm font-semibold">할인율</label>
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
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
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
              )}

              {mode === "price" && (
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
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
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

              {mode === "stacked" && (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold">1차 할인</span>
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          step="0.1"
                          value={firstRate}
                          onChange={(e) => setFirstRate(e.target.value)}
                          className="h-14 w-full rounded-2xl border border-gray-200 px-4 pr-12 text-right text-lg font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">%</span>
                      </div>
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold">추가 할인</span>
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          step="0.1"
                          value={secondRate}
                          onChange={(e) => setSecondRate(e.target.value)}
                          className="h-14 w-full rounded-2xl border border-gray-200 px-4 pr-12 text-right text-lg font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">%</span>
                      </div>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold">
                      정액 쿠폰
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={couponAmount}
                        onChange={(e) =>
                          setCouponAmount(formatMoneyInput(e.target.value))
                        }
                        placeholder="5,000"
                        className="h-14 w-full rounded-2xl border border-gray-200 px-4 pr-12 text-right text-lg font-bold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">원</span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      쿠폰이 없다면 0원으로 두면 돼요.
                    </p>
                  </label>

                  <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm leading-6 text-amber-800">
                    20% 할인 후 추가 10% 할인은 30%가 아니라 실제로는{" "}
                    <strong>28% 할인</strong>이에요. 두 번째 할인은 이미 할인된
                    가격에 적용되기 때문이에요.
                  </div>
                </>
              )}
            </div>
          </section>

          <section className="h-fit rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8 lg:sticky lg:top-6">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500">
                {mode === "price"
                  ? "실제 할인율"
                  : mode === "stacked"
                    ? "실제 총 할인율"
                    : "할인 후 가격"}
              </p>
              <div className="mt-2 text-4xl font-black tracking-tight text-blue-600">
                {mode === "rate"
                  ? formatWon(result.finalPrice)
                  : formatPercent(result.rate)}
              </div>
              {mode === "stacked" && (
                <p className="mt-2 text-sm font-semibold text-gray-500">
                  최종 가격 {formatWon(result.finalPrice)}
                </p>
              )}
            </div>

            <div className="divide-y divide-gray-100 border-y border-gray-100">
              <ResultRow label="정가" value={formatWon(result.original)} />
              {mode === "stacked" && (
                <>
                  <ResultRow
                    label={`1차 할인 후 (${formatPercent(safeRate(firstRate))})`}
                    value={formatWon(result.afterFirst)}
                  />
                  <ResultRow
                    label={`추가 할인 후 (${formatPercent(safeRate(secondRate))})`}
                    value={formatWon(result.afterSecond)}
                  />
                  <ResultRow
                    label="쿠폰 적용"
                    value={`- ${formatWon(result.couponApplied)}`}
                  />
                </>
              )}
              <ResultRow label="실제 할인율" value={formatPercent(result.rate)} />
              <ResultRow
                label="총 할인 금액"
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

              {mode === "rate" && (
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  할인 금액 = 정가 × 할인율
                  <br />
                  최종 가격 = 정가 - 할인 금액
                </p>
              )}

              {mode === "price" && (
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  할인율 = (정가 - 판매가) ÷ 정가 × 100
                </p>
              )}

              {mode === "stacked" && (
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  1차 할인가 = 정가 × (1 - 1차 할인율)
                  <br />
                  2차 할인가 = 1차 할인가 × (1 - 추가 할인율)
                  <br />
                  최종가 = 2차 할인가 - 쿠폰
                  <br />
                  실제 총 할인율 = (정가 - 최종가) ÷ 정가 × 100
                </p>
              )}
            </div>

            {mode === "stacked" && (
              <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-800">
                퍼센트 할인만 합치면 실제 할인율은{" "}
                <strong>{formatPercent(stackedRateWithoutCoupon)}</strong>이고,
                쿠폰까지 반영하면 <strong>{formatPercent(result.rate)}</strong>예요.
              </div>
            )}

          </section>
        </div>

        <DecisionSummaryCard
          title={discountConclusion}
          description={`정가 ${formatWon(result.original)}에서 총 ${formatWon(result.discountAmount)} 절약하고 최종 ${formatWon(result.finalPrice)}를 내는 계산이에요.`}
          tone="amber"
          analyticsId="discount"
          metrics={[
            { label: "실제 할인율", value: formatPercent(result.rate) },
            { label: "절약 금액", value: formatWon(result.discountAmount) },
            { label: "최종 가격", value: formatWon(result.finalPrice) },
          ]}
        />

        <ResultActionBar
          calculatorPath="/discount"
          shareTitle={mode === "stacked" ? "추가 할인 계산 결과" : "할인율 계산 결과"}
          shareText={shareText}
          image={{
            eyebrow: "몇이지? · 쇼핑 할인 계산",
            title: mode === "stacked" ? "진짜 할인율은 몇 %?" : "할인하면 얼마?",
            tone: "amber",
            filename: "myeotiji-discount-result.png",
            lines: [
              { label: "정가", value: formatWon(result.original) },
              ...(mode === "stacked"
                ? [
                    { label: "1차 할인", value: formatPercent(safeRate(firstRate)) },
                    { label: "추가 할인", value: formatPercent(safeRate(secondRate)) },
                    { label: "쿠폰", value: `-${formatWon(result.couponApplied)}` },
                  ]
                : []),
              { label: "실제 총 할인율", value: formatPercent(result.rate), strong: true },
              { label: "최종 가격", value: formatWon(result.finalPrice), strong: true },
            ],
            caption: mode === "stacked" ? "중복 할인은 퍼센트를 단순히 더하지 않고 순서대로 적용해 계산합니다." : "몇이지?에서 계산한 예상 할인 결과입니다.",
          }}
        >
          <SaveCalculationButton
            title={mode === "stacked" ? "추가 할인·쿠폰 계산" : "할인율 계산"}
            href="/discount"
            state={savedState}
            primaryValue={`최종 ${formatWon(result.finalPrice)}`}
            summary={`실제 할인율 ${formatPercent(result.rate)} · ${formatWon(result.discountAmount)} 절약`}
          />
        </ResultActionBar>

        <TrustStrip
          items={["중복 할인 순차 적용", "쿠폰은 마지막에 차감", "입력값은 브라우저에서만 계산"]}
          note="쇼핑몰별 쿠폰 최소금액·최대할인·카드할인 조건은 별도일 수 있으니 결제 화면의 최종 금액도 확인하세요."
        />

        <CoupangDeals />

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

            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="mb-1 font-bold text-blue-800">20% + 10% 추가 할인</p>
              <p className="text-blue-700">
                100,000원 → 80,000원 → 72,000원.
                <br />
                실제 총 할인율은 28%예요.
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
        <AccessibleResultStatus
          signature={`${mode}|${originalPrice}|${discountRate}|${salePrice}|${firstRate}|${secondRate}|${couponAmount}`}
          message={invalidSalePrice
            ? "계산 결과가 업데이트되었습니다. 판매가가 정가보다 높아 할인으로 볼 수 없습니다."
            : `계산 결과가 업데이트되었습니다. 실제 할인율은 ${formatPercent(result.rate)}, 최종 가격은 ${formatWon(result.finalPrice)}입니다.`}
        />
      </div>
    </main>
  );
}
