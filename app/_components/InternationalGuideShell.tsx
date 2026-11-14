import Link from "next/link";
import type { ReactNode } from "react";
import { COPY, LOCALES, type IntlLocale } from "../_lib/international";
import { GUIDE_LABELS } from "../_lib/intl-guides/labels";

export default function InternationalGuideShell({ locale, children, languagePaths }: {
  locale: IntlLocale; children: ReactNode; languagePaths?: Partial<Record<IntlLocale, string>>;
}) {
  const labels = GUIDE_LABELS[locale];
  return (
    <div className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <Link href={`/${locale}`} className="text-xl font-black text-blue-700">Myeotiji</Link>
          <nav aria-label={COPY[locale].lang} className="flex flex-wrap gap-2">
            {LOCALES.map(code => <a key={code} href={languagePaths?.[code] ?? `/${code}/guides`}
              hrefLang={COPY[code].tag} aria-current={locale === code ? "page" : undefined}
              className={`rounded-xl px-3 py-2 text-sm font-semibold ${locale === code ? "bg-blue-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200"}`}>
              {COPY[code].label}
            </a>)}
          </nav>
        </header>
        <main className="py-8 sm:py-12">{children}</main>
        <footer className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 py-6 text-sm leading-7 text-slate-600">
          <Link href={`/${locale}`} className="font-semibold text-blue-700">{labels.home}</Link>
          <Link href={`/${locale}/guides`} className="hover:underline">{labels.guides}</Link>
          <Link href={`/${locale}/guides/editorial-policy`} className="hover:underline">{labels.policy}</Link>
          <span className="w-full text-xs">© 2026 Myeotiji · {COPY[locale].disclaimer}</span>
        </footer>
      </div>
    </div>
  );
}
