"use client";

import { useEffect, useMemo, useState } from "react";
import { buildHolidayMapsAround, pad, toKey } from "../../_lib/holidayEngine";
import { trackEvent } from "../../_lib/analytics";

type Mode = "company" | "mine" | "companion";

type Props = {
  year: number;
  companyDaysOff: string[];
  blockedPtoDays: string[];
  companionBlockedPtoDays: string[];
  onCompanyDaysOffChange: (values: string[]) => void;
  onBlockedPtoDaysChange: (values: string[]) => void;
  onCompanionBlockedPtoDaysChange: (values: string[]) => void;
};

const MODES: { id: Mode; label: string; description: string }[] = [
  { id: "company", label: "회사 휴무", description: "창립기념일처럼 회사만 쉬는 날" },
  { id: "mine", label: "내 불가일", description: "내가 연차를 낼 수 없는 날" },
  { id: "companion", label: "동행인 불가일", description: "배우자·친구가 연차를 낼 수 없는 날" },
];

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

function toggleValue(values: string[], key: string) {
  return values.includes(key) ? values.filter((item) => item !== key) : [...values, key].sort();
}

export default function HolidayScheduleCalendar({
  year,
  companyDaysOff,
  blockedPtoDays,
  companionBlockedPtoDays,
  onCompanyDaysOffChange,
  onBlockedPtoDaysChange,
  onCompanionBlockedPtoDaysChange,
}: Props) {
  const [mode, setMode] = useState<Mode>("companion");
  const [month, setMonth] = useState(() => {
    const now = new Date();
    return now.getFullYear() === year ? now.getMonth() + 1 : 1;
  });

  useEffect(() => {
    const now = new Date();
    setMonth(now.getFullYear() === year ? now.getMonth() + 1 : 1);
  }, [year]);

  const officialHolidays = useMemo(() => buildHolidayMapsAround(year), [year]);
  const companySet = useMemo(() => new Set(companyDaysOff), [companyDaysOff]);
  const mineSet = useMemo(() => new Set(blockedPtoDays), [blockedPtoDays]);
  const companionSet = useMemo(() => new Set(companionBlockedPtoDays), [companionBlockedPtoDays]);

  const firstDay = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstDay.getDay() }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const currentValues = mode === "company" ? companyDaysOff : mode === "mine" ? blockedPtoDays : companionBlockedPtoDays;

  const handleDate = (day: number) => {
    const key = `${year}-${pad(month)}-${pad(day)}`;
    const date = new Date(year, month - 1, day);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isOfficialHoliday = officialHolidays.has(key);
    const isCompanyOff = companySet.has(key);

    if (mode === "company" && (isWeekend || isOfficialHoliday)) return;
    if (mode !== "company" && (isWeekend || isOfficialHoliday || isCompanyOff)) return;

    const adding = !currentValues.includes(key);
    if (mode === "company") {
      const nextCompany = toggleValue(companyDaysOff, key);
      onCompanyDaysOffChange(nextCompany);
      if (adding) {
        if (mineSet.has(key)) onBlockedPtoDaysChange(blockedPtoDays.filter((item) => item !== key));
        if (companionSet.has(key)) onCompanionBlockedPtoDaysChange(companionBlockedPtoDays.filter((item) => item !== key));
      }
    }
    if (mode === "mine") onBlockedPtoDaysChange(toggleValue(blockedPtoDays, key));
    if (mode === "companion") onCompanionBlockedPtoDaysChange(toggleValue(companionBlockedPtoDays, key));

    if (adding) {
      const eventName = mode === "company" ? "company_day_add" : mode === "mine" ? "my_blocked_day_add" : "companion_day_add";
      trackEvent(eventName, { year, month, selected_count: currentValues.length + 1 });
    }
  };

  const selectedCount = currentValues.length;

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
      <div className="grid gap-2 sm:grid-cols-3">
        {MODES.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setMode(item.id)}
            className={`min-h-11 rounded-xl border px-3 py-2.5 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 ${
              mode === item.id ? "border-blue-500 bg-white shadow-sm" : "border-transparent bg-white/70 hover:border-slate-200"
            }`}
          >
            <span className="block text-sm font-bold text-slate-900">{item.label}</span>
            <span className="mt-0.5 block text-[11px] leading-4 text-slate-500">{item.description}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5" aria-label="월 선택">
        {Array.from({ length: 12 }, (_, index) => index + 1).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setMonth(item)}
            className={`min-h-10 min-w-10 rounded-lg px-2 text-xs font-semibold transition ${month === item ? "bg-slate-900 text-white" : "bg-white text-slate-500 hover:bg-slate-100"}`}
            aria-pressed={month === item}
          >
            {item}월
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-2xl bg-white p-3 ring-1 ring-slate-200 sm:p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-sm font-bold text-slate-900">{year}년 {month}월</p>
            <p className="mt-1 text-[11px] text-slate-500">날짜를 여러 개 눌러 선택·해제하세요. 현재 모드 선택 {selectedCount}일</p>
          </div>
          {selectedCount > 0 ? (
            <button
              type="button"
              onClick={() => {
                if (mode === "company") onCompanyDaysOffChange([]);
                if (mode === "mine") onBlockedPtoDaysChange([]);
                if (mode === "companion") onCompanionBlockedPtoDaysChange([]);
              }}
              className="min-h-10 rounded-lg px-3 text-xs font-semibold text-slate-500 hover:bg-slate-50 hover:text-rose-600"
            >
              이 유형 전체 지우기
            </button>
          ) : null}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {WEEKDAYS.map((label, index) => (
            <div key={label} className={`pb-1.5 text-center text-[11px] font-semibold ${index === 0 ? "text-rose-500" : index === 6 ? "text-blue-500" : "text-slate-400"}`}>{label}</div>
          ))}
          {cells.map((day, index) => {
            if (day === null) return <div key={`empty-${index}`} className="aspect-square" />;
            const date = new Date(year, month - 1, day);
            const key = toKey(date);
            const officialNames = officialHolidays.get(key) ?? [];
            const weekend = date.getDay() === 0 || date.getDay() === 6;
            const company = companySet.has(key);
            const mine = mineSet.has(key);
            const companion = companionSet.has(key);
            const disabled = mode === "company" ? weekend || officialNames.length > 0 : weekend || officialNames.length > 0 || company;

            let cls = "border-slate-100 bg-white text-slate-700 hover:border-slate-300";
            let status = "";
            if (weekend) cls = date.getDay() === 0 ? "border-rose-50 bg-rose-50/50 text-rose-500" : "border-blue-50 bg-blue-50/50 text-blue-500";
            if (officialNames.length > 0) { cls = "border-rose-100 bg-rose-50 text-rose-700"; status = officialNames.join(" · "); }
            if (company) { cls = "border-emerald-300 bg-emerald-100 text-emerald-800"; status = "회사 휴무"; }
            if (mine) { cls = "border-blue-400 bg-blue-100 text-blue-800"; status = status ? `${status}, 내 불가일` : "내 불가일"; }
            if (companion) { cls = "border-violet-400 bg-violet-100 text-violet-800"; status = status ? `${status}, 동행인 불가일` : "동행인 불가일"; }
            if (mine && companion) { cls = "border-fuchsia-400 bg-fuchsia-100 text-fuchsia-900"; }

            return (
              <button
                key={key}
                type="button"
                onClick={() => handleDate(day)}
                disabled={disabled}
                className={`relative flex aspect-square min-h-10 items-center justify-center rounded-lg border text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-default ${cls}`}
                aria-label={`${month}월 ${day}일${status ? `, ${status}` : ""}${disabled && !status ? ", 기본 휴무일" : ""}`}
                aria-pressed={company || mine || companion}
              >
                {day}
                {(company || mine || companion) ? <span className="absolute bottom-1 h-1 w-1 rounded-full bg-current" aria-hidden="true" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold text-slate-500">
        <span className="text-emerald-700">● 회사 휴무</span>
        <span className="text-blue-700">● 내 불가일</span>
        <span className="text-violet-700">● 동행인 불가일</span>
        <span className="text-rose-600">● 공휴일</span>
      </div>
    </div>
  );
}
