type Props = {
  items: string[];
  note?: string;
};

export default function TrustStrip({ items, note }: Props) {
  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-white/80 p-4">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600 ring-1 ring-slate-100"
          >
            <span className="text-emerald-600">✓</span>
            {item}
          </span>
        ))}
      </div>
      {note ? (
        <p className="mt-3 text-xs leading-5 text-slate-400">{note}</p>
      ) : null}
    </div>
  );
}
