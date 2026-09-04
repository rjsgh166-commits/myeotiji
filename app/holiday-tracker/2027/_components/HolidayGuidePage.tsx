import Link from "next/link";
import ResultActionBar from "../../../_components/ResultActionBar";
import HolidayPlannerButton from "./HolidayPlannerButton";
import { GUIDE_NAV, type HolidayGuide } from "../_lib/guides";

const OFFICIAL_URL = "https://www.kasa.go.kr/prog/plcyBrf/brief/kor/sub01_01_04/view.do?plcyBrfNo=431";

export default function HolidayGuidePage({ guide }: { guide: HolidayGuide }) {
  const canonical = `/holiday-tracker/2027/${guide.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        datePublished: "2026-09-04",
        dateModified: "2026-09-04",
        mainEntityOfPage: `https://myeotiji.kr${canonical}`,
        publisher: { "@type": "Organization", name: "몇이지?", url: "https://myeotiji.kr" },
        citation: OFFICIAL_URL,
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "몇이지?", item: "https://myeotiji.kr" },
          { "@type": "ListItem", position: 2, name: "꿀연휴 플래너", item: "https://myeotiji.kr/holiday-tracker" },
          { "@type": "ListItem", position: 3, name: "2027 황금연휴", item: "https://myeotiji.kr/holiday-tracker/2027" },
          { "@type": "ListItem", position: 4, name: guide.title, item: `https://myeotiji.kr${canonical}` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa] px-5 py-10 text-[#191f28] sm:py-14">
      <div className="mx-auto max-w-5xl">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500">
          <Link href="/holiday-tracker" className="hover:text-slate-900">꿀연휴</Link>
          <span aria-hidden="true">/</span>
          <Link href="/holiday-tracker/2027" className="hover:text-slate-900">2027</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-800">{guide.eyebrow}</span>
        </nav>

        <header className="mt-7">
          <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">우주항공청 2027 월력요항 기준</div>
          <p className="mt-5 text-sm font-bold text-amber-700">{guide.eyebrow}</p>
          <h1 className="mt-2 max-w-4xl text-3xl font-bold tracking-tight sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base">{guide.description}</p>
        </header>

        <section className="mt-8 overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 sm:p-8">
          <p className="text-xs font-bold text-amber-700">몇이지? 결론</p>
          <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">{guide.heroValue}</h2>
              <p className="mt-3 text-lg font-bold text-amber-800">{guide.heroLabel}</p>
              <p className="mt-2 text-sm text-slate-600">{guide.heroNote}</p>
            </div>
            <HolidayPlannerButton ptoBudget={guide.plannerBudget} style={guide.plannerStyle} />
          </div>

          <ResultActionBar
            calculatorPath={canonical}
            shareTitle={guide.shareTitle}
            shareText={guide.shareText}
            image={{
              eyebrow: `몇이지? · ${guide.eyebrow}`,
              title: guide.imageTitle,
              tone: "amber",
              filename: `myeotiji-2027-${guide.slug}.png`,
              lines: guide.imageLines,
              caption: "우주항공청 2027년 월력요항 공식 기준 · myeotiji.kr",
            }}
          />
        </section>

        <section className="mt-7 grid gap-3 sm:grid-cols-3">
          {guide.keyFacts.map((fact) => (
            <div key={`${fact.label}-${fact.value}`} className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
              <p className="text-2xl font-bold text-blue-600">{fact.value}</p>
              <p className="mt-1 text-xs font-semibold text-slate-500">{fact.label}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">{guide.planHeading}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">{guide.planIntro}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {guide.plans.map((plan) => (
              <article key={`${plan.title}-${plan.period}`} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold text-slate-950">{plan.title}</h3>
                  {plan.badge ? <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">{plan.badge}</span> : null}
                </div>
                <p className="mt-4 text-lg font-bold text-blue-700">{plan.total}</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{plan.period}</p>
                <p className="mt-3 text-sm text-slate-600">연차: <strong>{plan.pto}</strong></p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{plan.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold">{guide.insightHeading}</h2>
          <div className="mt-5 space-y-4">
            {guide.insights.map((insight, index) => (
              <div key={insight} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700">{index + 1}</span>
                <p className="text-sm leading-7 text-slate-600">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">자주 묻는 질문</h2>
          <div className="mt-5 space-y-3">
            {guide.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-bold text-slate-900">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-blue-600 p-6 text-white sm:p-8">
          <p className="text-sm font-semibold text-blue-100">남은 연차가 더 있다면</p>
          <h2 className="mt-2 text-2xl font-bold">한 번의 연휴 말고, 1년 전체 연차를 최적화하세요.</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-blue-100">남은 연차를 입력하면 한 번 길게 · 효율 최우선 · 자주 쉬기 기준으로 서로 겹치지 않는 연휴 포트폴리오를 계산합니다.</p>
          <div className="mt-5"><HolidayPlannerButton ptoBudget={guide.plannerBudget} style={guide.plannerStyle} /></div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold">같이 보면 좋은 2027 연휴 가이드</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {guide.related.map((slug) => {
              const item = GUIDE_NAV.find((nav) => nav.slug === slug);
              if (!item) return null;
              return (
                <Link key={slug} href={`/holiday-tracker/2027/${slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:bg-blue-50/30">
                  <p className="font-bold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <h2 className="font-bold text-emerald-950">공식 기준</h2>
          <p className="mt-2 text-sm leading-6 text-emerald-900">2027년 공휴일과 3일 이상 연휴 일정은 우주항공청이 2026년 6월 29일 발표한 「2027년 월력요항」을 기준으로 확인했습니다. 이후 별도 지정되는 임시공휴일과 회사별 휴무일은 달라질 수 있어요.</p>
          <a href={OFFICIAL_URL} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-bold text-emerald-800 hover:text-emerald-950">우주항공청 공식자료 확인 →</a>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/holiday-tracker/2027" className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50">← 2027 황금연휴 전체 보기</Link>
          <Link href="/holiday-tracker" className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50">🍯 내 연차 최적화</Link>
        </div>
      </div>
    </main>
  );
}
