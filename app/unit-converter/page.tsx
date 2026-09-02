"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import RelatedCalculators from "../_components/RelatedCalculators";

type CategoryId = "length" | "area" | "weight" | "volume" | "temperature" | "data";

type Unit = {
  id: string;
  label: string;
  factor?: number;
};

type Category = {
  id: CategoryId;
  label: string;
  units: Unit[];
};

const categories: Category[] = [
  {
    id: "length",
    label: "길이",
    units: [
      { id: "mm", label: "밀리미터 (mm)", factor: 0.001 },
      { id: "cm", label: "센티미터 (cm)", factor: 0.01 },
      { id: "m", label: "미터 (m)", factor: 1 },
      { id: "km", label: "킬로미터 (km)", factor: 1000 },
      { id: "in", label: "인치 (in)", factor: 0.0254 },
      { id: "ft", label: "피트 (ft)", factor: 0.3048 },
      { id: "yd", label: "야드 (yd)", factor: 0.9144 },
      { id: "mi", label: "마일 (mi)", factor: 1609.344 },
    ],
  },
  {
    id: "area",
    label: "넓이",
    units: [
      { id: "m2", label: "제곱미터 (㎡)", factor: 1 },
      { id: "pyeong", label: "평", factor: 3.305785 },
      { id: "km2", label: "제곱킬로미터 (㎢)", factor: 1_000_000 },
      { id: "ha", label: "헥타르 (ha)", factor: 10_000 },
      { id: "ft2", label: "제곱피트 (ft²)", factor: 0.09290304 },
      { id: "acre", label: "에이커 (acre)", factor: 4046.8564224 },
    ],
  },
  {
    id: "weight",
    label: "무게",
    units: [
      { id: "g", label: "그램 (g)", factor: 0.001 },
      { id: "kg", label: "킬로그램 (kg)", factor: 1 },
      { id: "ton", label: "톤 (t)", factor: 1000 },
      { id: "oz", label: "온스 (oz)", factor: 0.028349523125 },
      { id: "lb", label: "파운드 (lb)", factor: 0.45359237 },
      { id: "geun", label: "근 (600g)", factor: 0.6 },
    ],
  },
  {
    id: "volume",
    label: "부피",
    units: [
      { id: "ml", label: "밀리리터 (mL)", factor: 0.001 },
      { id: "cc", label: "cc", factor: 0.001 },
      { id: "l", label: "리터 (L)", factor: 1 },
      { id: "cup", label: "컵 (240mL)", factor: 0.24 },
      { id: "gal", label: "미국 갤런 (gal)", factor: 3.785411784 },
    ],
  },
  {
    id: "temperature",
    label: "온도",
    units: [
      { id: "c", label: "섭씨 (℃)" },
      { id: "f", label: "화씨 (℉)" },
      { id: "k", label: "켈빈 (K)" },
    ],
  },
  {
    id: "data",
    label: "데이터",
    units: [
      { id: "b", label: "바이트 (B)", factor: 1 },
      { id: "kb", label: "킬로바이트 (KB)", factor: 1024 },
      { id: "mb", label: "메가바이트 (MB)", factor: 1024 ** 2 },
      { id: "gb", label: "기가바이트 (GB)", factor: 1024 ** 3 },
      { id: "tb", label: "테라바이트 (TB)", factor: 1024 ** 4 },
    ],
  },
];

function convertTemperature(value: number, from: string, to: string) {
  let celsius = value;

  if (from === "f") celsius = (value - 32) * (5 / 9);
  if (from === "k") celsius = value - 273.15;

  if (to === "c") return celsius;
  if (to === "f") return celsius * (9 / 5) + 32;
  return celsius + 273.15;
}

function formatNumber(value: number) {
  if (!Number.isFinite(value)) return "-";
  return value.toLocaleString("ko-KR", { maximumFractionDigits: 8 });
}

export default function UnitConverterPage() {
  const [categoryId, setCategoryId] = useState<CategoryId>("length");
  const category = categories.find((item) => item.id === categoryId) ?? categories[0];

  const [value, setValue] = useState("1");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("cm");

  const changeCategory = (id: CategoryId) => {
    const next = categories.find((item) => item.id === id) ?? categories[0];
    setCategoryId(id);
    setFromUnit(next.units[0].id);
    setToUnit(next.units[Math.min(1, next.units.length - 1)].id);
  };

  const result = useMemo(() => {
    const input = Number(value);
    if (!Number.isFinite(input)) return null;

    if (categoryId === "temperature") {
      return convertTemperature(input, fromUnit, toUnit);
    }

    const from = category.units.find((unit) => unit.id === fromUnit);
    const to = category.units.find((unit) => unit.id === toUnit);

    if (!from?.factor || !to?.factor) return null;
    return (input * from.factor) / to.factor;
  }, [value, categoryId, category, fromUnit, toUnit]);

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900">← 몇이지? 홈</Link>

        <header className="mt-7">
          <p className="text-sm font-bold text-blue-600">CONVERTER</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">단위변환 계산기</h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            길이, 넓이, 무게, 부피, 온도, 데이터 단위를 바로 바꿔보세요.
          </p>
        </header>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => changeCategory(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                categoryId === item.id ? "bg-blue-600 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <section className="mt-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <label className="block">
            <span className="text-sm font-bold">변환할 값</span>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3.5 text-base font-semibold outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
          </label>

          <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
            <label>
              <span className="text-sm font-bold">변환 전</span>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-base font-semibold outline-none"
              >
                {category.units.map((unit) => (
                  <option key={unit.id} value={unit.id}>{unit.label}</option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={swap}
              className="h-12 rounded-2xl bg-gray-100 px-4 text-lg font-bold text-gray-600 hover:bg-gray-200"
              aria-label="단위 서로 바꾸기"
            >
              ⇄
            </button>

            <label>
              <span className="text-sm font-bold">변환 후</span>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-base font-semibold outline-none"
              >
                {category.units.map((unit) => (
                  <option key={unit.id} value={unit.id}>{unit.label}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 rounded-2xl bg-blue-600 p-6 text-white">
            <p className="text-sm font-bold text-blue-100">변환 결과</p>
            <p className="mt-2 break-words text-3xl font-black">{result === null ? "-" : formatNumber(result)}</p>
          </div>

          {categoryId === "data" && (
            <p className="mt-4 text-xs leading-5 text-gray-400">데이터 용량은 1KB = 1024B 기준으로 계산합니다.</p>
          )}
        </section>

        <RelatedCalculators currentHref="/unit-converter" />
      </div>
    </main>
  );
}
