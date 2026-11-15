import { COPY, LOCALES, type IntlLocale } from '../_lib/international';

// Native disclosure keeps every crawlable language link in the server HTML.
export default function LanguageChooser({ locale, paths }: { locale: IntlLocale; paths: Partial<Record<IntlLocale, string>> }) {
  const links = LOCALES.map(code => <a key={code} href={paths[code] ?? `/${code}/guides`}
    hrefLang={COPY[code].tag} lang={COPY[code].tag} aria-current={locale === code ? 'page' : undefined}
    className={`inline-flex min-h-11 items-center rounded-xl px-3 py-2 text-sm font-semibold ${locale === code ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 ring-1 ring-slate-200'}`}>
    {COPY[code].label}
  </a>);
  return <div className="language-chooser relative max-w-full">
    <details className="sm:hidden" data-mobile-language>
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700">
        <span aria-hidden="true">🌐</span><span>{COPY[locale].lang}: {COPY[locale].label}</span><span aria-hidden="true">▾</span>
      </summary>
      <nav aria-label={COPY[locale].lang} className="absolute end-0 top-full z-50 mt-2 grid max-h-[min(60dvh,24rem)] w-64 max-w-[calc(100vw-2.5rem)] grid-cols-1 gap-2 overflow-y-auto overscroll-contain rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
        {links}
      </nav>
    </details>
    <nav aria-label={COPY[locale].lang} className="hidden flex-wrap gap-2 sm:flex">{links}</nav>
  </div>;
}
