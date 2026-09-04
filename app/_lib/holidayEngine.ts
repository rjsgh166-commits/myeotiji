export type Holiday = {
  date: string;
  name: string;
};

export type BreakPlan = {
  start: Date;
  end: Date;
  totalDays: number;
  ptoDays: Date[];
  holidayNames: string[];
};

export type HolidayStyle = "long" | "efficient" | "frequent";

export type HolidayConstraints = {
  companyDaysOff?: string[];
  blockedPtoDays?: string[];
  companionBlockedPtoDays?: string[];
};

export type BreakComposition = {
  weekendDays: number;
  holidayDays: number;
  companyOffDays: number;
  ptoDays: number;
};

export type HolidayPortfolio = {
  plans: BreakPlan[];
  usedPto: number;
  totalBreakDays: number;
  score: number;
};

export type NextHoliday = {
  date: Date;
  names: string[];
  dday: number;
  bridge: BreakPlan | null;
};

const DAY_MS = 24 * 60 * 60 * 1000;

export function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function toKey(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function fromYMD(year: number, month: number, day: number) {
  return new Date(year, month - 1, day);
}

export function startOfDay(date: Date) {
  return fromYMD(date.getFullYear(), date.getMonth() + 1, date.getDate());
}

export function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

export function daysBetweenInclusive(start: Date, end: Date) {
  const s = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const e = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.floor((e - s) / DAY_MS) + 1;
}

export function daysUntil(from: Date, to: Date) {
  const s = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());
  const e = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());
  return Math.round((e - s) / DAY_MS);
}

export function isWeekend(date: Date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function formatShortDate(date: Date) {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  return `${date.getMonth() + 1}/${date.getDate()}(${weekdays[date.getDay()]})`;
}

export function formatFullDate(date: Date) {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일(${weekdays[date.getDay()]})`;
}

export function formatRange(plan: BreakPlan) {
  return `${formatShortDate(plan.start)} ~ ${formatShortDate(plan.end)}`;
}

const OFFICIAL_LUNAR_HOLIDAYS: Record<number, {
  seollal: [number, number, number][];
  buddha: [number, number, number];
  chuseok: [number, number, number][];
}> = {
  2026: {
    seollal: [[2, 16, 0], [2, 17, 1], [2, 18, 0]],
    buddha: [5, 24, 0],
    chuseok: [[9, 24, 0], [9, 25, 1], [9, 26, 0]],
  },
  2027: {
    seollal: [[2, 6, 0], [2, 7, 1], [2, 8, 0]],
    buddha: [5, 13, 0],
    chuseok: [[9, 14, 0], [9, 15, 1], [9, 16, 0]],
  },
};

export function buildHolidayMap(year: number) {
  const baseEvents: Holiday[] = [];
  const addBase = (date: Date, name: string) => {
    baseEvents.push({ date: toKey(date), name });
  };

  // 2026년부터 노동절·제헌절 공휴일 지정까지 반영한 현행 규정 기준.
  addBase(fromYMD(year, 1, 1), "신정");
  addBase(fromYMD(year, 3, 1), "삼일절");
  addBase(fromYMD(year, 5, 1), "노동절");
  addBase(fromYMD(year, 5, 5), "어린이날");
  addBase(fromYMD(year, 6, 6), "현충일");
  addBase(fromYMD(year, 7, 17), "제헌절");
  addBase(fromYMD(year, 8, 15), "광복절");
  addBase(fromYMD(year, 10, 3), "개천절");
  addBase(fromYMD(year, 10, 9), "한글날");
  addBase(fromYMD(year, 12, 25), "성탄절");

  const lunar = OFFICIAL_LUNAR_HOLIDAYS[year];
  if (lunar) {
    lunar.seollal.forEach(([month, day, main]) =>
      addBase(fromYMD(year, month, day), main ? "설날" : "설날 연휴"),
    );
    addBase(fromYMD(year, lunar.buddha[0], lunar.buddha[1]), "부처님오신날");
    lunar.chuseok.forEach(([month, day, main]) =>
      addBase(fromYMD(year, month, day), main ? "추석" : "추석 연휴"),
    );
  }

  const map = new Map<string, string[]>();
  for (const event of baseEvents) {
    const names = map.get(event.date) ?? [];
    names.push(event.name);
    map.set(event.date, names);
  }

  const substituteTriggers: { source: string; reason: string }[] = [];
  const weekendSubstituteNames = new Set([
    "삼일절",
    "노동절",
    "어린이날",
    "제헌절",
    "광복절",
    "개천절",
    "한글날",
    "부처님오신날",
    "성탄절",
  ]);

  for (const event of baseEvents) {
    if (!weekendSubstituteNames.has(event.name)) continue;
    const [y, m, d] = event.date.split("-").map(Number);
    if (isWeekend(fromYMD(y, m, d))) {
      substituteTriggers.push({ source: event.date, reason: `${event.name} 대체공휴일` });
    }
  }

  for (const event of baseEvents) {
    const lunarHoliday =
      event.name === "설날" ||
      event.name === "설날 연휴" ||
      event.name === "추석" ||
      event.name === "추석 연휴";
    if (!lunarHoliday) continue;

    const [y, m, d] = event.date.split("-").map(Number);
    if (fromYMD(y, m, d).getDay() === 0) {
      const group = event.name.startsWith("설") ? "설날" : "추석";
      if (!substituteTriggers.some((item) => item.reason === `${group} 대체공휴일`)) {
        substituteTriggers.push({ source: event.date, reason: `${group} 대체공휴일` });
      }
    }
  }

  for (const [dateKey, names] of map.entries()) {
    if (names.length < 2) continue;
    const [y, m, d] = dateKey.split("-").map(Number);
    if (!isWeekend(fromYMD(y, m, d))) {
      substituteTriggers.push({ source: dateKey, reason: "공휴일 중복 대체공휴일" });
    }
  }

  substituteTriggers.sort((a, b) => a.source.localeCompare(b.source));
  for (const trigger of substituteTriggers) {
    const [y, m, d] = trigger.source.split("-").map(Number);
    let candidate = addDays(fromYMD(y, m, d), 1);
    while (true) {
      const key = toKey(candidate);
      if (!isWeekend(candidate) && !map.has(key)) {
        map.set(key, [trigger.reason]);
        break;
      }
      candidate = addDays(candidate, 1);
    }
  }

  return map;
}

export function buildHolidayMapsAround(year: number, companyDaysOff: string[] = []) {
  const merged = new Map<string, string[]>();
  for (const target of [year - 1, year, year + 1]) {
    for (const [key, names] of buildHolidayMap(target).entries()) {
      const existing = merged.get(key) ?? [];
      merged.set(key, [...existing, ...names]);
    }
  }
  for (const key of companyDaysOff) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) continue;
    const names = merged.get(key) ?? [];
    if (!names.includes("회사 추가 휴무")) names.push("회사 추가 휴무");
    merged.set(key, names);
  }
  return merged;
}

function effectiveStart(year: number, today?: Date | null) {
  const jan1 = fromYMD(year, 1, 1);
  if (!today || today.getFullYear() !== year) return jan1;
  const cleanToday = startOfDay(today);
  return cleanToday > jan1 ? cleanToday : jan1;
}

export function findBreakCandidates(
  year: number,
  maxPto: number,
  today?: Date | null,
  constraints: HolidayConstraints = {},
) {
  const holidays = buildHolidayMapsAround(year, constraints.companyDaysOff ?? []);
  const blockedPto = new Set(constraints.blockedPtoDays ?? []);
  const companionBlockedPto = new Set(constraints.companionBlockedPtoDays ?? []);
  const start = effectiveStart(year, today);
  const end = fromYMD(year + 1, 1, 7);
  const dates: Date[] = [];
  let cursor = start;

  while (cursor <= end) {
    dates.push(new Date(cursor));
    cursor = addDays(cursor, 1);
  }

  const isOff = (date: Date) => isWeekend(date) || holidays.has(toKey(date));
  const candidates: BreakPlan[] = [];
  const seen = new Set<string>();

  for (let i = 0; i < dates.length; i++) {
    if (dates[i].getFullYear() !== year) break;
    let ptoCount = 0;
    let holidayCount = 0;

    for (let j = i; j < dates.length; j++) {
      const date = dates[j];
      const key = toKey(date);
      if (!isOff(date)) {
        if (blockedPto.has(key) || companionBlockedPto.has(key)) break;
        ptoCount += 1;
      }
      if (holidays.has(key)) holidayCount += 1;
      if (ptoCount > maxPto) break;

      const length = j - i + 1;
      if (length < 3 || holidayCount < 1) continue;

      const slice = dates.slice(i, j + 1);
      const ptoDays = slice.filter((item) => !isOff(item)).map((item) => new Date(item));
      const holidayNames = Array.from(
        new Set(slice.flatMap((item) => holidays.get(toKey(item)) ?? [])),
      );
      const dedupeKey = `${toKey(dates[i])}|${toKey(dates[j])}|${ptoDays.map(toKey).join(",")}`;
      if (seen.has(dedupeKey)) continue;
      seen.add(dedupeKey);

      candidates.push({
        start: new Date(dates[i]),
        end: new Date(dates[j]),
        totalDays: length,
        ptoDays,
        holidayNames,
      });
    }
  }

  return candidates;
}

function planEfficiency(plan: BreakPlan) {
  if (plan.ptoDays.length === 0) return plan.totalDays;
  return plan.totalDays / plan.ptoDays.length;
}

export function efficiencyText(plan: BreakPlan) {
  if (plan.ptoDays.length === 0) return "연차 없이";
  return `연차 1일당 ${planEfficiency(plan).toFixed(1)}일 휴식`;
}

function utility(plan: BreakPlan, style: HolidayStyle) {
  const pto = plan.ptoDays.length;
  const ratio = planEfficiency(plan);

  if (style === "long") {
    return plan.totalDays * plan.totalDays * 120 + ratio * 20 - pto * 4;
  }

  if (style === "efficient") {
    return ratio * 900 + plan.totalDays * 55 - pto * 12;
  }

  const idealDistance = Math.abs(plan.totalDays - 5);
  return 2400 + plan.totalDays * 85 - idealDistance * 120 - pto * 22;
}

function interestingCandidates(plans: BreakPlan[], budget: number, style: HolidayStyle) {
  const byPto = new Map<number, BreakPlan[]>();
  for (const plan of plans) {
    const cost = plan.ptoDays.length;
    if (cost > budget) continue;
    if (budget > 0 && cost === 0) continue;
    if (plan.totalDays < 3) continue;
    const list = byPto.get(cost) ?? [];
    list.push(plan);
    byPto.set(cost, list);
  }

  const selected = new Map<string, BreakPlan>();
  for (const list of byPto.values()) {
    const variants = [
      [...list].sort((a, b) => b.totalDays - a.totalDays || a.start.getTime() - b.start.getTime()),
      [...list].sort((a, b) => planEfficiency(b) - planEfficiency(a) || b.totalDays - a.totalDays),
      [...list].sort((a, b) => utility(b, style) - utility(a, style) || a.start.getTime() - b.start.getTime()),
    ];

    for (const variant of variants) {
      for (const plan of variant.slice(0, 18)) {
        selected.set(`${toKey(plan.start)}|${toKey(plan.end)}|${plan.ptoDays.length}`, plan);
      }
    }
  }

  return [...selected.values()].sort((a, b) => a.start.getTime() - b.start.getTime());
}

export function optimizePortfolio(
  year: number,
  ptoBudget: number,
  style: HolidayStyle,
  today?: Date | null,
  maxPlans = 5,
  constraints: HolidayConstraints = {},
): HolidayPortfolio {
  const raw = findBreakCandidates(year, Math.min(Math.max(ptoBudget, 0), 15), today, constraints);
  const candidates = interestingCandidates(raw, ptoBudget, style);

  if (candidates.length === 0) {
    return { plans: [], usedPto: 0, totalBreakDays: 0, score: 0 };
  }

  const starts = candidates.map((plan) => plan.start.getTime());
  const nextIndex = candidates.map((plan) => {
    const target = addDays(plan.end, 1).getTime();
    let lo = 0;
    let hi = starts.length;
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (starts[mid] < target) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  });

  type Result = { score: number; picks: number[] };
  const memo = new Map<string, Result>();

  const solve = (index: number, budget: number, slots: number): Result => {
    if (index >= candidates.length || slots <= 0) return { score: 0, picks: [] };
    const key = `${index}|${budget}|${slots}`;
    const cached = memo.get(key);
    if (cached) return cached;

    const skip = solve(index + 1, budget, slots);
    const plan = candidates[index];
    const cost = plan.ptoDays.length;
    let best = skip;

    if (cost <= budget) {
      const tail = solve(nextIndex[index], budget - cost, slots - 1);
      const takeScore = utility(plan, style) + tail.score;
      if (takeScore > best.score) {
        best = { score: takeScore, picks: [index, ...tail.picks] };
      }
    }

    memo.set(key, best);
    return best;
  };

  const solved = solve(0, ptoBudget, maxPlans);
  const plans = solved.picks.map((index) => candidates[index]).sort((a, b) => a.start.getTime() - b.start.getTime());
  const usedPto = plans.reduce((sum, plan) => sum + plan.ptoDays.length, 0);
  const totalBreakDays = plans.reduce((sum, plan) => sum + plan.totalDays, 0);

  return { plans, usedPto, totalBreakDays, score: solved.score };
}

export function topAlternativePlans(
  year: number,
  ptoBudget: number,
  style: HolidayStyle,
  today?: Date | null,
  exclude: BreakPlan[] = [],
  constraints: HolidayConstraints = {},
  limit = 12,
) {
  const excluded = new Set(exclude.map((plan) => `${toKey(plan.start)}|${toKey(plan.end)}`));
  return findBreakCandidates(year, Math.min(Math.max(ptoBudget, 0), 15), today, constraints)
    .filter((plan) => !excluded.has(`${toKey(plan.start)}|${toKey(plan.end)}`))
    .sort((a, b) => utility(b, style) - utility(a, style) || a.start.getTime() - b.start.getTime())
    .filter((plan, index, list) => {
      const key = `${plan.ptoDays.map(toKey).join(",")}|${plan.totalDays}`;
      return list.findIndex((candidate) => `${candidate.ptoDays.map(toKey).join(",")}|${candidate.totalDays}` === key) === index;
    })
    .slice(0, limit);
}

export function freeLongWeekends(
  year: number,
  today?: Date | null,
  constraints: HolidayConstraints = {},
) {
  return findBreakCandidates(year, 0, today, constraints)
    .sort((a, b) => b.totalDays - a.totalDays || a.start.getTime() - b.start.getTime())
    .filter((plan, index, list) =>
      list.findIndex((candidate) => toKey(candidate.start) === toKey(plan.start) && toKey(candidate.end) === toKey(plan.end)) === index,
    )
    .slice(0, 4);
}


export function getBreakComposition(
  plan: BreakPlan,
  companyDaysOff: string[] = [],
): BreakComposition {
  const holidayMap = buildHolidayMapsAround(plan.start.getFullYear(), companyDaysOff);
  const companySet = new Set(companyDaysOff);
  const ptoSet = new Set(plan.ptoDays.map(toKey));
  const composition: BreakComposition = {
    weekendDays: 0,
    holidayDays: 0,
    companyOffDays: 0,
    ptoDays: plan.ptoDays.length,
  };

  let cursor = startOfDay(plan.start);
  while (cursor <= plan.end) {
    const key = toKey(cursor);
    if (ptoSet.has(key)) {
      cursor = addDays(cursor, 1);
      continue;
    }
    if (companySet.has(key)) {
      composition.companyOffDays += 1;
    } else if (holidayMap.has(key)) {
      composition.holidayDays += 1;
    } else if (isWeekend(cursor)) {
      composition.weekendDays += 1;
    }
    cursor = addDays(cursor, 1);
  }

  return composition;
}

export function findMinimumPtoBreak(
  year: number,
  targetDays: number,
  today?: Date | null,
  constraints: HolidayConstraints = {},
  maxPto = 15,
) {
  const target = Math.max(3, Math.round(targetDays));
  const plans = findBreakCandidates(year, Math.max(0, maxPto), today, constraints)
    .filter((plan) => plan.totalDays >= target)
    .sort((a, b) =>
      a.ptoDays.length - b.ptoDays.length ||
      a.totalDays - b.totalDays ||
      b.holidayNames.length - a.holidayNames.length ||
      a.start.getTime() - b.start.getTime(),
    );

  const best = plans[0] ?? null;
  if (!best) return { best: null, alternatives: [] as BreakPlan[] };

  const alternatives = plans
    .filter((plan) => planKey(plan) !== planKey(best))
    .filter((plan, index, list) =>
      list.findIndex((candidate) =>
        candidate.ptoDays.length === plan.ptoDays.length &&
        candidate.totalDays === plan.totalDays &&
        toKey(candidate.start) === toKey(plan.start),
      ) === index,
    )
    .slice(0, 5);

  return { best, alternatives };
}

export function getNextHoliday(today: Date): NextHoliday | null {
  const cleanToday = startOfDay(today);
  const maps = new Map<string, string[]>();
  for (const year of [cleanToday.getFullYear(), cleanToday.getFullYear() + 1]) {
    for (const [key, names] of buildHolidayMap(year).entries()) maps.set(key, names);
  }

  const next = [...maps.entries()]
    .map(([key, names]) => {
      const [y, m, d] = key.split("-").map(Number);
      return { date: fromYMD(y, m, d), names };
    })
    .filter((item) => item.date >= cleanToday)
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0];

  if (!next) return null;
  const nearby = findBreakCandidates(next.date.getFullYear(), 2, cleanToday)
    .filter((plan) => plan.start <= next.date && plan.end >= next.date)
    .sort((a, b) => b.totalDays - a.totalDays || a.ptoDays.length - b.ptoDays.length)[0] ?? null;

  return {
    date: next.date,
    names: next.names,
    dday: daysUntil(cleanToday, next.date),
    bridge: nearby,
  };
}

export function planKey(plan: BreakPlan) {
  return `${toKey(plan.start)}-${toKey(plan.end)}-${plan.ptoDays.map(toKey).join("-")}`;
}
