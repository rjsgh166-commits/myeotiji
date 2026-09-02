"use client";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  help?: string;
};

export default function MoneyInput({
  label,
  value,
  onChange,
  placeholder,
  help,
}: Props) {
  const digits = value.replace(/[^\d]/g, "");
  const display = digits ? Number(digits).toLocaleString("ko-KR") : "";

  return (
    <label className="block">
      <span className="text-sm font-bold text-gray-800">{label}</span>
      <div className="relative mt-2">
        <input
          inputMode="numeric"
          value={display}
          onChange={(event) =>
            onChange(event.target.value.replace(/[^\d]/g, ""))
          }
          placeholder={placeholder}
          className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 pr-12 text-base font-semibold outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
          원
        </span>
      </div>
      {help && <p className="mt-2 text-xs leading-5 text-gray-400">{help}</p>}
    </label>
  );
}
