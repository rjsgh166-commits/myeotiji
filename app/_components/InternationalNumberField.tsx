"use client";

export default function InternationalNumberField({ label, value, onChange, className }: {
  label: string; value: string; onChange: (value: string) => void; className: string;
}) {
  return <label className="block min-w-0">
    <span className="mb-2 block text-sm font-semibold text-slate-800">{label}</span>
    <input className={className} type="text" inputMode="decimal" autoComplete="off" spellCheck={false}
      dir="ltr" value={value} onChange={event => onChange(event.target.value)} />
  </label>;
}
