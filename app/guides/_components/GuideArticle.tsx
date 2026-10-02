import Link from "next/link";

import { SITE_NAME } from "../../_lib/site";
import {
  GUIDES,
  guideAbsoluteUrl,
  guidePath,
  type Guide,
} from "../_data/guides";

export default function GuideArticle({ guide }: { guide: Guide }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.updatedISO,
    dateModified: guide.updatedISO,
    mainEntityOfPage: guideAbsoluteUrl(guide.key),
    author: { "@type": "Organization", name: SITE_NAME },
    reviewedBy: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500" aria-label="breadcrumb">
          <Link href="/" className="hover:text-slate-900">몇이지?</Link>
          <span aria-hidden="true">/</span>
          <Link href="/guides" className="hover:text-slate-900">가이드</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">{guide.shortTitle}</span>
        </nav>

        <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <header className="border-b border-slate-100 px-6 py-8 sm:px-9 sm:py-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700">{guide.category}</span>
              <span className="text-slate-400">{guide.readTime}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-400">{guide.updated}</span>
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              {guide.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              {guide.intro}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500 ring-1 ring-slate-100">
              <div>
                <span className="font-black text-slate-700">작성·검토: 몇이지? 편집</span>
                <span className="mx-2 text-slate-300">·</span>
                <span>최종 확인 {guide.updatedISO}</span>
              </div>
              <Link href="/guides/editorial-policy" className="font-bold text-blue-600 hover:text-blue-700">
                작성·검수 원칙 →
              </Link>
            </div>
          </header>

          <div className="px-6 py-8 sm:px-9 sm:py-10">
            <section className="rounded-2xl bg-blue-50 p-5 ring-1 ring-blue-100">
              <p className="text-xs font-black tracking-wider text-blue-700">핵심만 먼저</p>
              <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-blue-950/80">
                {guide.takeaways.map((item) => (
                  <li key={item} className="list-disc">{item}</li>
                ))}
              </ul>
            </section>

            <div className="mt-10 space-y-11">
              {guide.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-black tracking-tight text-slate-950 sm:text-2xl">
                    {section.title}
                  </h2>

                  {section.paragraphs ? (
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {section.bullets ? (
                    <ul className="mt-4 space-y-2 pl-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="list-disc">{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.table ? (
                    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                      {section.table.title ? (
                        <div className="bg-slate-50 px-4 py-3 text-sm font-black text-slate-900">
                          {section.table.title}
                        </div>
                      ) : null}
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-max border-collapse text-left text-sm">
                          <thead>
                            <tr className="border-t border-slate-200 bg-white">
                              {section.table.headers.map((header) => (
                                <th key={header} className="border-b border-slate-200 px-4 py-3 text-xs font-black text-slate-500">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rowIndex) => (
                              <tr key={`${section.title}-${rowIndex}`} className="border-b border-slate-100 last:border-0">
                                {row.map((cell, cellIndex) => (
                                  <td key={`${rowIndex}-${cellIndex}`} className={`px-4 py-3 ${cellIndex === 0 ? "font-bold text-slate-900" : "text-slate-600"}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-11 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
              <p className="text-xs font-black tracking-wider text-blue-700">직접 계산해보기</p>
              <h2 className="mt-2 text-xl font-black text-slate-950">숫자는 계산기에 넣으면 더 빠릅니다</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">{guide.calculator.description}</p>
              <Link href={guide.calculator.href} className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700">
                {guide.calculator.label} →
              </Link>
            </section>

            <section className="mt-11 border-t border-slate-100 pt-9">
              <p className="text-xs font-black tracking-wider text-blue-700">FAQ</p>
              <h2 className="mt-2 text-xl font-black">자주 묻는 질문</h2>
              <div className="mt-5 divide-y divide-slate-100 rounded-2xl border border-slate-200 px-5">
                {guide.faqs.map((faq) => (
                  <div key={faq.question} className="py-5">
                    <h3 className="text-sm font-black leading-6 text-slate-900">Q. {faq.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {guide.sources.length > 0 ? (
              <section className="mt-9 rounded-2xl bg-slate-50 p-5">
                <h2 className="text-sm font-black text-slate-900">확인한 공식·공공 자료</h2>
                <div className="mt-3 space-y-3">
                  {guide.sources.map((source) => (
                    <div key={source.href}>
                      <a href={source.href} target="_blank" rel="noreferrer" className="text-sm font-bold text-blue-600 hover:text-blue-700">
                        {source.label} ↗<span className="sr-only"> (새 창)</span>
                      </a>
                      {source.note ? <p className="mt-1 text-xs leading-5 text-slate-500">{source.note}</p> : null}
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="mt-11 border-t border-slate-100 pt-9">
              <h2 className="text-lg font-black">같이 보면 좋은 가이드</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {guide.related.map((key) => {
                  const item = GUIDES[key];
                  return (
                    <Link key={key} href={guidePath(key)} className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/40">
                      <p className="text-xs font-bold text-blue-600">{item.category}</p>
                      <p className="mt-1 text-sm font-black leading-6 text-slate-900">{item.shortTitle}</p>
                    </Link>
                  );
                })}
              </div>
            </section>

            <p className="mt-9 text-xs leading-6 text-slate-400">
              이 글은 계산 원리와 일반적인 기준을 이해하기 위한 정보입니다. 계약·세금·법률·투자 등 중요한 의사결정은 해당 기관의 최신 기준과 개인 조건을 함께 확인하세요.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
