"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import RelatedCalculators from "../_components/RelatedCalculators";

type Mode = "after-buy" | "target-average";

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

function parseQuantity(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatWon(value: number) {
  if (!Number.isFinite(value)) return "-";
  return `${Math.round(value).toLocaleString("ko-KR")}원`;
}

function formatPrice(value: number) {
  if (!Number.isFinite(value)) return "-";
  return `${value.toLocaleString("ko-KR", {
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}원`;
}

function formatQuantity(value: number) {
  if (!Number.isFinite(value)) return "-";
  return `${value.toLocaleString("ko-KR", {
    maximumFractionDigits: 6,
  })}주`;
}

function formatPercent(value: number) {
  if (!Number.isFinite(value)) return "-";
  return `${value.toLocaleString("ko-KR", {
    minimumFractionDigits: 0,
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

function MoneyInput({
  label,
  value,
  onChange,
  placeholder,
  helperText,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  helperText?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>
      <div className="relative">
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(formatMoneyInput(e.target.value))}
          placeholder={placeholder}
          className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-4 pr-12 text-right text-lg font-bold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
          원
        </span>
      </div>
      {helperText && (
        <p className="mt-2 text-xs leading-5 text-gray-400">{helperText}</p>
      )}
    </div>
  );
}

export default function StockAveragePage() {
  const [mode, setMode] = useState<Mode>("after-buy");

  const [currentAverage, setCurrentAverage] = useState("50,000");
  const [currentQuantity, setCurrentQuantity] = useState("100");
  const [additionalPrice, setAdditionalPrice] = useState("40,000");
  const [additionalQuantity, setAdditionalQuantity] = useState("100");
  const [targetAverage, setTargetAverage] = useState("45,000");

  const result = useMemo(() => {
    const average = parseMoney(currentAverage);
    const quantity = parseQuantity(currentQuantity);
    const buyPrice = parseMoney(additionalPrice);

    const existingInvestment = average * quantity;

    const direction =
      buyPrice < average
        ? "down"
        : buyPrice > average
        ? "up"
        : "same";

    if (mode === "after-buy") {
      const buyQuantity = parseQuantity(additionalQuantity);
      const additionalInvestment = buyPrice * buyQuantity;
      const totalQuantity = quantity + buyQuantity;
      const totalInvestment = existingInvestment + additionalInvestment;

      const newAverage =
        totalQuantity > 0 ? totalInvestment / totalQuantity : 0;

      const averageChange = newAverage - average;
      const averageChangeRate =
        average > 0 ? (averageChange / average) * 100 : 0;

      const valid =
        average > 0 &&
        quantity > 0 &&
        buyPrice > 0 &&
        buyQuantity > 0;

      return {
        valid,
        direction,
        existingInvestment,
        buyQuantity,
        additionalInvestment,
        totalQuantity,
        totalInvestment,
        newAverage,
        averageChange,
        averageChangeRate,
        targetValid: true,
        targetMessage: "",
      };
    }

    const target = parseMoney(targetAverage);

    const denominator = target - buyPrice;
    const numerator = quantity * (average - target);

    const requiredQuantity =
      denominator !== 0 ? numerator / denominator : NaN;

    const validTargetRange =
      direction === "down"
        ? target < average && target > buyPrice
        : direction === "up"
        ? target > average && target < buyPrice
        : false;

    const targetValid =
      average > 0 &&
      quantity > 0 &&
      buyPrice > 0 &&
      target > 0 &&
      validTargetRange &&
      Number.isFinite(requiredQuantity) &&
      requiredQuantity > 0;

    const additionalInvestment = targetValid
      ? requiredQuantity * buyPrice
      : 0;

    const totalQuantity = targetValid
      ? quantity + requiredQuantity
      : quantity;

    const totalInvestment = targetValid
      ? existingInvestment + additionalInvestment
      : existingInvestment;

    let targetMessage = "";

    if (direction === "same") {
      targetMessage =
        "추가 매수가가 현재 평단과 같으면 평단은 변하지 않아요.";
    } else if (direction === "down") {
      targetMessage = `목표 평단은 ${formatPrice(
        buyPrice
      )}보다 높고 현재 평단 ${formatPrice(average)}보다 낮아야 해요.`;
    } else {
      targetMessage = `목표 평단은 현재 평단 ${formatPrice(
        average
      )}보다 높고 추가 매수가 ${formatPrice(buyPrice)}보다 낮아야 해요.`;
    }

    return {
      valid:
        average > 0 &&
        quantity > 0 &&
        buyPrice > 0 &&
        target > 0,
      direction,
      existingInvestment,
      buyQuantity: targetValid ? requiredQuantity : 0,
      additionalInvestment,
      totalQuantity,
      totalInvestment,
      newAverage: targetValid ? target : average,
      averageChange: targetValid ? target - average : 0,
      averageChangeRate:
        targetValid && average > 0
          ? ((target - average) / average) * 100
          : 0,
      targetValid,
      targetMessage,
    };
  }, [
    mode,
    currentAverage,
    currentQuantity,
    additionalPrice,
    additionalQuantity,
    targetAverage,
  ]);

  const directionInfo =
    result.direction === "down"
      ? {
          title: "💧 물타기",
          description:
            "추가 매수가가 현재 평단보다 낮아서 평균 매입단가가 내려가요.",
          className: "bg-blue-50 text-blue-700",
        }
      : result.direction === "up"
      ? {
          title: "🔥 불타기",
          description:
            "추가 매수가가 현재 평단보다 높아서 평균 매입단가가 올라가요.",
          className: "bg-orange-50 text-orange-700",
        }
      : {
          title: "평단 유지",
          description:
            "추가 매수가와 현재 평단이 같아서 평균 매입단가는 그대로예요.",
          className: "bg-gray-100 text-gray-600",
        };

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
            <p className="mb-2 text-sm font-bold text-blue-600">투자 · 주식</p>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              주식 물타기 · 불타기 계산기
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              현재 평단과 보유 수량, 추가 매수 조건을 입력하면 새로운
              평균단가를 계산해요. 원하는 목표 평단까지 필요한 매수 수량도
              역산할 수 있어요.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
            <h2 className="mb-5 text-lg font-bold">계산 방식</h2>

            <div className="mb-8 flex gap-2">
              <ModeButton
                active={mode === "after-buy"}
                onClick={() => setMode("after-buy")}
              >
                추가매수 후 평단
              </ModeButton>

              <ModeButton
                active={mode === "target-average"}
                onClick={() => setMode("target-average")}
              >
                목표 평단 역산
              </ModeButton>
            </div>

            <div className="space-y-7">
              <MoneyInput
                label="현재 평균 매입단가"
                value={currentAverage}
                onChange={setCurrentAverage}
                placeholder="50,000"
              />

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  현재 보유 수량
                </label>
                <div className="relative">
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="any"
                    value={currentQuantity}
                    onChange={(e) => setCurrentQuantity(e.target.value)}
                    placeholder="100"
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-4 pr-12 text-right text-lg font-bold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                    주
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  해외주식 등 소수점 수량도 입력할 수 있어요.
                </p>
              </div>

              <MoneyInput
                label="추가 매수 단가"
                value={additionalPrice}
                onChange={setAdditionalPrice}
                placeholder="40,000"
              />

              {mode === "after-buy" ? (
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    추가 매수 수량
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      step="any"
                      value={additionalQuantity}
                      onChange={(e) => setAdditionalQuantity(e.target.value)}
                      placeholder="100"
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-4 pr-12 text-right text-lg font-bold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                      주
                    </span>
                  </div>
                </div>
              ) : (
                <MoneyInput
                  label="목표 평균단가"
                  value={targetAverage}
                  onChange={setTargetAverage}
                  placeholder="45,000"
                  helperText="추가 매수 후 만들고 싶은 평균 매입단가를 입력해 주세요."
                />
              )}
            </div>
          </section>

          <section className="h-fit rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8 lg:sticky lg:top-6">
            <div className="mb-5">
              <p className="text-sm font-semibold text-gray-500">
                {mode === "after-buy"
                  ? "추가 매수 후 새 평단"
                  : "목표 평단까지 필요한 수량"}
              </p>

              <div className="mt-2 text-4xl font-black tracking-tight text-blue-600">
                {mode === "after-buy"
                  ? result.valid
                    ? formatPrice(result.newAverage)
                    : "-"
                  : result.targetValid
                  ? formatQuantity(result.buyQuantity)
                  : "-"}
              </div>
            </div>

            <div
              className={`mb-6 rounded-2xl px-4 py-4 text-sm font-semibold leading-6 ${directionInfo.className}`}
            >
              <p className="font-black">{directionInfo.title}</p>
              <p className="mt-1 font-medium">{directionInfo.description}</p>
            </div>

            {mode === "target-average" && !result.targetValid && result.valid && (
              <div className="mb-6 rounded-2xl bg-red-50 px-4 py-4 text-sm font-semibold leading-6 text-red-600">
                {result.targetMessage}
              </div>
            )}

            <div className="divide-y divide-gray-100 border-y border-gray-100">
              <ResultRow
                label="기존 투자금"
                value={formatWon(result.existingInvestment)}
              />

              <ResultRow
                label={
                  mode === "after-buy"
                    ? "추가 투자금"
                    : "필요한 추가 투자금"
                }
                value={
                  mode === "target-average" && !result.targetValid
                    ? "-"
                    : formatWon(result.additionalInvestment)
                }
              />

              <ResultRow
                label={
                  mode === "after-buy"
                    ? "추가 매수 수량"
                    : "필요 추가 수량"
                }
                value={
                  mode === "target-average" && !result.targetValid
                    ? "-"
                    : formatQuantity(result.buyQuantity)
                }
              />

              <ResultRow
                label="매수 후 총 수량"
                value={
                  mode === "target-average" && !result.targetValid
                    ? "-"
                    : formatQuantity(result.totalQuantity)
                }
              />

              <ResultRow
                label="매수 후 총 투자금"
                value={
                  mode === "target-average" && !result.targetValid
                    ? "-"
                    : formatWon(result.totalInvestment)
                }
              />

              <ResultRow
                label="평단 변화"
                value={
                  mode === "target-average" && !result.targetValid
                    ? "-"
                    : `${result.averageChange >= 0 ? "+" : ""}${formatPrice(
                        result.averageChange
                      )} (${result.averageChangeRate >= 0 ? "+" : ""}${formatPercent(
                        result.averageChangeRate
                      )})`
                }
              />

              <ResultRow
                label="새 평균단가"
                value={
                  mode === "target-average" && !result.targetValid
                    ? "-"
                    : formatPrice(result.newAverage)
                }
                emphasized
              />
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-800">평단 계산식</p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                새 평단 = (기존 투자금 + 추가 투자금) ÷ (기존 수량 + 추가
                수량)
              </p>
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
          <h2 className="text-lg font-bold">예시로 쉽게 이해하기</h2>

          <div className="mt-5 grid gap-4 text-sm leading-6 text-gray-600 md:grid-cols-2">
            <div className="rounded-2xl bg-blue-50 p-5">
              <p className="mb-1 font-bold text-blue-800">💧 물타기 예시</p>
              <p className="text-blue-700">
                50,000원에 100주를 보유하고 있을 때 40,000원에 100주를 더
                사면 새 평단은 45,000원이 돼요.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <p className="mb-1 font-bold text-orange-800">🔥 불타기 예시</p>
              <p className="text-orange-700">
                50,000원에 100주를 보유하고 있을 때 60,000원에 100주를 더
                사면 새 평단은 55,000원이 돼요.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
          <p className="font-bold text-amber-800">계산 전 확인하세요</p>
          <p className="mt-2 text-sm leading-6 text-amber-700">
            이 계산기는 매수가와 수량을 이용한 단순 평균단가 계산 도구예요.
            증권사 수수료, 세금, 환율 및 기타 거래비용은 포함하지 않으며
            특정 종목의 매수·매도를 권유하지 않아요.
          </p>
        </section>

        <RelatedCalculators currentHref="/stock-average" />
      </div>
    </main>
  );
}
