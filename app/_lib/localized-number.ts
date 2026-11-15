// Accept the selected locale's number syntax, plus ungrouped dot-decimal input.
// Never silently discard a malformed grouping separator or coerce an empty field to zero.
const DIGIT_STARTS = [0x660, 0x6f0, 0x966, 0x9e6, 0xff10];
const symbols = new Map<string, { decimal: string; group: string; indian: boolean }>();
function localeSymbols(tag: string) {
  let result = symbols.get(tag);
  if (!result) {
    const parts = new Intl.NumberFormat(tag).formatToParts(1234567.89);
    result = { decimal: parts.find(p => p.type === "decimal")?.value ?? ".",
      group: (parts.find(p => p.type === "group")?.value ?? ",").replace(/[\u00a0\u202f]/g, " "),
      indian: /^(hi|bn)(-|$)/.test(tag) };
    symbols.set(tag, result);
  }
  return result;
}
function asciiDigits(text: string) {
  return Array.from(text, char => {
    const code = char.codePointAt(0)!;
    const start = DIGIT_STARTS.find(n => code >= n && code <= n + 9);
    return start === undefined ? char : String(code - start);
  }).join("");
}
function ungroup(integer: string, group: string, indian: boolean): string | null {
  if (/^\d+$/.test(integer)) return integer;
  const separator = integer.includes(" ") ? " " : group;
  if (!separator || !integer.includes(separator)) return null;
  const parts = integer.split(separator);
  if (!parts.every(p => /^\d+$/.test(p)) || parts[0].startsWith("0")) return null;
  if (parts.at(-1)?.length !== 3) return null;
  const widths = parts.slice(1, -1);
  const valid = indian
    ? parts[0].length <= 2 && widths.every(p => p.length === 2)
    : parts[0].length <= 3 && widths.every(p => p.length === 3);
  return valid ? parts.join("") : null;
}
export function parseLocalizedNumber(value: string, tag: string): number {
  const { decimal, group, indian } = localeSymbols(tag);
  let input = asciiDigits(value).trim().replace(/[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g, "")
    .replace(/[\u00a0\u202f]/g, " ").replace(/\u2212/g, "-")
    .replace(/\u066b/g, decimal).replace(/\u066c/g, group).trim();
  if (!input) return NaN;
  let sign = 1;
  if (/^[+-]/.test(input)) { if (input[0] === "-") sign = -1; input = input.slice(1); }
  if (!input || /[+-]/.test(input)) return NaN;
  let normalized: string;
  if (input.includes(decimal)) {
    const parts = input.split(decimal);
    if (parts.length !== 2 || !/^\d+$/.test(parts[1])) return NaN;
    const integer = parts[0] === "" ? "0" : ungroup(parts[0], group, indian);
    if (integer === null) return NaN;
    normalized = integer + "." + parts[1];
  } else {
    const grouped = ungroup(input, group, indian);
    if (grouped !== null) normalized = grouped;
    // Existing defaults and keyboard dot input remain usable in comma-decimal locales.
    // Well-formed local grouping takes precedence: es "1.234" means 1234.
    else if (decimal !== "." && /^(?:\d+)?\.\d+$/.test(input)) normalized = input;
    else return NaN;
  }
  const result = sign * Number(normalized);
  return Number.isFinite(result) ? result : NaN;
}
