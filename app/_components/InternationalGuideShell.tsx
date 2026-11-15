import LanguageChooser from "./LanguageChooser";
import Link from "next/link";
import type { ReactNode } from "react";
import { COPY, type IntlLocale } from "../_lib/international";
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
          <LanguageChooser locale={locale} paths={languagePaths ?? {}} />
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
