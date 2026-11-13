import Link from "next/link";

export type GuideTeaser = { href: string; title: string; cta: string };
export default function CalculatorGuideTeaser({ guide }: { guide?: GuideTeaser }) {
  if (!guide) return null;
  return (
    <aside className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
      <h2 className="text-lg font-bold text-slate-950">{guide.title}</h2>
      <Link href={guide.href} className="mt-3 inline-block text-sm font-semibold leading-7 text-blue-700 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-700">
        {guide.cta}
      </Link>
    </aside>
  );
}
