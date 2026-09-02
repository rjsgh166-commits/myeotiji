export type DateParts = {
  year: number;
  month: number;
  day: number;
};

export function parseISODate(value: string): DateParts | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return { year, month, day };
}

export function toUtcMs(date: DateParts) {
  return Date.UTC(date.year, date.month - 1, date.day);
}

export function fromDate(date: Date): DateParts {
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

export function todayParts(): DateParts {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };
}

export function diffDays(from: DateParts, to: DateParts) {
  return Math.round((toUtcMs(to) - toUtcMs(from)) / 86_400_000);
}

export function addDays(date: DateParts, days: number): DateParts {
  const next = new Date(toUtcMs(date) + days * 86_400_000);
  return fromDate(next);
}

export function addMonths(date: DateParts, months: number): DateParts {
  const base = new Date(Date.UTC(date.year, date.month - 1, 1));
  base.setUTCMonth(base.getUTCMonth() + months);

  const year = base.getUTCFullYear();
  const month = base.getUTCMonth() + 1;
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();

  return {
    year,
    month,
    day: Math.min(date.day, lastDay),
  };
}

export function addYears(date: DateParts, years: number): DateParts {
  return addMonths(date, years * 12);
}

export function fullMonthsBetween(from: DateParts, to: DateParts) {
  let months = (to.year - from.year) * 12 + (to.month - from.month);
  const anniversary = addMonths(from, months);

  if (toUtcMs(anniversary) > toUtcMs(to)) months -= 1;
  return Math.max(0, months);
}

export function fullYearsBetween(from: DateParts, to: DateParts) {
  let years = to.year - from.year;
  const anniversary = addYears(from, years);

  if (toUtcMs(anniversary) > toUtcMs(to)) years -= 1;
  return Math.max(0, years);
}

export function calendarDiff(from: DateParts, to: DateParts) {
  const years = fullYearsBetween(from, to);
  const afterYears = addYears(from, years);
  const months = fullMonthsBetween(afterYears, to);
  const afterMonths = addMonths(afterYears, months);
  const days = diffDays(afterMonths, to);

  return { years, months, days };
}

export function formatKoreanDate(date: DateParts) {
  return `${date.year}년 ${date.month}월 ${date.day}일`;
}
