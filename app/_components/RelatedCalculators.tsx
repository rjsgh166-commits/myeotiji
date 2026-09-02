import Link from "next/link";

const calculators = [
  { href: "/salary", icon: "💰", title: "연봉 실수령액" },
  { href: "/retirement", icon: "🏦", title: "퇴직금" },
  { href: "/weekly-pay", icon: "🧾", title: "주휴수당" },
  { href: "/discount", icon: "🛒", title: "할인율" },
  { href: "/age", icon: "📅", title: "만나이" },
  { href: "/lunar", icon: "🌙", title: "음력" },
  { href: "/holiday-tracker", icon: "🍯", title: "꿀연휴" },
  { href: "/stock-average", icon: "📈", title: "주식 평단" },
];

export default function RelatedCalculators({
  currentHref,
}: {
  currentHref: string;
}) {
  const currentIndex = calculators.findIndex(
    (calculator) => calculator.href === currentHref
  );

  const startIndex = currentIndex >= 0 ? currentIndex : 0;

  const related = Array.from({ length: 4 }, (_, offset) => {
    const index = (startIndex + offset + 1) % calculators.length;
    return calculators[index];
  });

  return (
    <section className="mt-10 border-t border-gray-200 pt-8">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          다른 계산기도 확인해보세요
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          필요한 계산을 바로 이어서 이용할 수 있어요.
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
              {calculator.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
