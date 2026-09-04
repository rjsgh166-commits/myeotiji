type Props = {
  items: string[];
  note?: string;
};

export default function TrustStrip({ items, note }: Props) {
  return (
    <details className="group mt-4 border-y border-slate-200 bg-white/70 px-1 py-3">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-semibold text-slate-600 marker:content-none">
        <span className="flex min-w-0 items-center gap-2">
          <span className="text-emerald-600">✓</span>
          <span className="truncate">{items.slice(0, 2).join(" · ")}</span>
        </span>
        <span className="shrink-0 text-slate-400 group-open:hidden">계산 기준 보기</span>
        <span className="hidden shrink-0 text-slate-400 group-open:inline">접기</span>
      </summary>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 border-t border-slate-100 pt-3">
        {items.map((item) => (
          <span key={item} className="text-xs text-slate-500">
            ✓ {item}
          </span>
        ))}
      </div>
      {note ? <p className="mt-3 text-xs leading-5 text-slate-400">{note}</p> : null}
    </details>
  );
}
