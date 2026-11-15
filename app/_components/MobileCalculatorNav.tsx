type Destination = { id: string; label: string };
export default function MobileCalculatorNav({ inputs, results, extra, korean = false }: {
  inputs: Destination; results: Destination; extra?: Destination; korean?: boolean;
}) {
  return <nav data-mobile-ui="calculator-nav" aria-label={`${inputs.label} / ${results.label}`}
    className={`mobile-calculator-nav sticky ${korean ? 'top-14' : 'top-0'} z-30 my-4 flex gap-2 rounded-xl border border-slate-200 bg-white/95 p-2 shadow-sm backdrop-blur md:hidden`}>
    {[inputs, results, ...(extra ? [extra] : [])].map(({id, label}) => <a key={id} href={`#${id}`}
      className="flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-lg bg-blue-50 px-2 py-2 text-center text-sm font-bold text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
      {label}
    </a>)}
  </nav>;
}
