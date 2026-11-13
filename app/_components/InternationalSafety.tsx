import Link from "next/link";
import { LEGAL_LABELS } from "../_lib/intl-legal";
import type { IntlLocale } from "../_lib/international";
export default function InternationalSafety({ locale }: { locale: IntlLocale }) {
  const text = LEGAL_LABELS[locale];
  return <footer data-international-safety className="border-t border-slate-200 bg-white px-5 py-7 text-sm leading-7 text-slate-700">
    <div className="mx-auto max-w-5xl">
      <p>{text.notice}</p><p className="mt-2">{text.tracking}</p>
      <nav aria-label={text.terms} className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        {(["privacy", "terms", "contact"] as const).map(page => <Link key={page} href={`/${locale}/${page}`} className="font-semibold text-blue-700 underline underline-offset-4">{text[page]}</Link>)}
      </nav>
    </div>
  </footer>;
}
