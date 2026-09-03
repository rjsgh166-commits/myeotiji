import Link from "next/link";
import {
  CALCULATOR_BY_HREF,
  CALCULATORS,
  RELATED_CALCULATORS,
} from "../_lib/calculators";

export default function RelatedCalculators({
  currentHref,
}: {
  currentHref: string;
}) {
  const preferred = RELATED_CALCULATORS[currentHref] ?? [];

  const fallback = CALCULATORS
    .filter((calculator) => calculator.href !== currentHref)
    .map((calculator) => calculator.href);

  const relatedHrefs = [...preferred, ...fallback]
    .filter((href, index, array) => array.indexOf(href) === index)
    .slice(0, 4);

  const related = relatedHrefs
    .map((href) => CALCULATOR_BY_HREF[href])
    .filter(Boolean);

  return (
    <section className="mt-10 border-t border-gray-200 pt-8">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          같이 쓰면 좋은 계산기
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          지금 계산과 자연스럽게 이어지는 기능을 골랐어요.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {related.map((calculator) => (
          <Link
            key={calculator.href}
            href={calculator.href}
            className="group rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
          >
            <div className="text-xl">{calculator.icon}</div>
            <div className="mt-3 text-sm font-bold text-gray-800 transition group-hover:text-blue-600">
              {calculator.shortTitle}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
