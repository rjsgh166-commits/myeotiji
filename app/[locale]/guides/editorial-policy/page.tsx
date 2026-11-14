import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OG_LOCALES, LOCALES, COPY, isIntlLocale } from "../../../_lib/international";
import { guideHubAlternates } from "../../../_lib/intl-guides";
import { GUIDE_LABELS } from "../../../_lib/intl-guides/labels";
import { CONTACT_EMAIL, SITE_URL } from "../../../_lib/site";
import InternationalGuideShell from "../../../_components/InternationalGuideShell";
import { JsonLd, breadcrumbs } from "../../../_components/InternationalStructuredData";

import { EXPANSION } from "../../../_lib/intl-expansion-content";
const BASE_POLICY = {
  en: [
    { heading: "Purpose and authorship", text: "Myeotiji publishes explanations of the calculators available on this site. These guides were prepared with AI assistance and checked against the stated calculation method, worked examples and cited references. The author name identifies Myeotiji as the publishing service; it does not claim review by a named accountant, lawyer or regulated adviser." },
    { heading: "Sources, dates and applicable rules", text: "For law, tax, payroll and social-insurance topics, we prefer the responsible public authority's publications and link to the relevant documents. Provider terms and technical standards are identified as such. A mathematical example written by Myeotiji is an illustration, not a quotation from an authority. The visible update date records a material content review, not an automatic daily refresh. The country, year and exclusions stated in each guide matter." },
    { heading: "What a calculation can and cannot establish", text: "We check representative numerical examples and boundary conditions. Simple models still leave out facts that may change an actual payment or entitlement. Hypothetical investment growth is not a promised return, and a payroll estimate is not a final tax assessment. Examples use the assumptions shown; readers should verify actual provider, employer or authority records before relying on a figure for a consequential decision." },
    { heading: "Corrections and feedback", text: "If you find an incorrect formula, source, translation or example, please send the page address, the relevant inputs and the result you expected to our contact address. Do not send identification documents, full pay statements, account numbers or other unnecessary personal information. We can use a reproducible example to investigate and update the explanation." },
  ],
  ja: [
    { heading: "ガイドの目的と作成者", text: "Myeotijiは、サイト内の計算ツールの使い方と計算の意味を説明します。これらの文章はAIを活用して作成し、記載した計算方法・具体例・参照資料と照合しています。作成者名は発行元のサービスを示すもので、氏名を明示していない税理士・弁護士などによる監修を意味しません。" },
    { heading: "出典・対象年・更新日の扱い", text: "税金、給与、社会保険などは担当する公的機関の情報を優先し、参照先を示します。事業者の料金案内や技術的資料は、その性質が分かるよう区別します。Myeotijiが作成した数値例は説明用で、公的機関の計算結果を引用したものではありません。更新日は内容を実質的に確認した日であり、毎日自動で新しくするものではありません。国・年度・適用範囲も合わせて確認してください。" },
    { heading: "概算と実際の金額を区別する", text: "代表的な入力や境界条件で計算を確認していますが、簡易モデルがすべての個別条件を再現するわけではありません。運用例は将来利回りの保証ではなく、給与の概算は税額や受給資格の確定ではありません。大きな判断を行う前に、勤務先、事業者、公的窓口などの実際の資料を確認してください。" },
    { heading: "訂正・お問い合わせ", text: "計算式、出典、翻訳、数値例などに誤りがあると思われる場合は、該当ページのURL、入力条件、想定する結果を連絡先までお知らせください。本人確認書類、給与明細全体、口座番号など、調査に不要な個人情報は送らないでください。再現できる具体例をもとに内容を確認します。" },
  ],
  "zh-hans": [
    { heading: "内容目的与编写主体", text: "Myeotiji发布本站计算器的使用说明和计算方法指南。文章使用AI辅助编写，并与所述公式、计算示例和引用资料进行核对。署名Myeotiji代表内容发布服务，不表示已经由未注明姓名的会计师、律师或其他持证专业人士审核。" },
    { heading: "信息来源、年份和更新日期", text: "涉及税务、工资和社会保险时，优先引用负责部门的公开资料，并提供原文链接。支付服务条款、技术标准等也会说明其来源性质。本站编写的数学示例用于解释过程，不冒充官方出具的计算结果。更新日期对应实质内容核对，不通过每天自动改日期制造新鲜感。请同时核对城市、年份、人员类型和适用范围。" },
    { heading: "如何看待估算与实际结算", text: "我们核对代表性数值和边界条件，但简化模型仍可能遗漏会改变实际金额的条件。投资增长示例不是收益承诺，工资估算也不等于最终纳税额或资格认定。涉及重要决定时，应对照单位、服务提供者或主管机关的实际记录及要求，不应仅凭一个估算数值作结论。" },
    { heading: "错误更正与反馈", text: "若发现公式、引用、翻译或数字示例可能有误，请发送页面地址、输入条件及你认为正确的结果，便于重现问题。请勿发送身份证件、完整工资单、银行账号或其他不必要的个人信息。我们会根据可重现的例子检查并更正说明。" },
  ],
};
const POLICY = { ...BASE_POLICY, es: EXPANSION.es.policy, "pt-br": EXPANSION["pt-br"].policy, id: EXPANSION.id.policy, hi: EXPANSION.hi.policy, fr: EXPANSION.fr.policy, ar: EXPANSION.ar.policy, bn: EXPANSION.bn.policy, ur: EXPANSION.ur.policy, vi: EXPANSION.vi.policy };
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  const text = GUIDE_LABELS[locale], url = `/${locale}/guides/editorial-policy`;
  return { title: { absolute: text.policyTitle + " | Myeotiji" }, description: text.policyDescription,
    alternates: { canonical: url, languages: guideHubAlternates("/editorial-policy") },
    openGraph: { type: "website", title: text.policyTitle, description: text.policyDescription, url,
      locale: OG_LOCALES[locale], images: ["/opengraph-image.png"] },
    twitter: { card: "summary", title: text.policyTitle + " | Myeotiji", description: text.policyDescription, images: ["/twitter-image.png"] },
  };
}
export default async function EditorialPolicy({ params }: Props) {
  const { locale } = await params;
  if (!isIntlLocale(locale)) notFound();
  const text = GUIDE_LABELS[locale], url = `/${locale}/guides/editorial-policy`;
  return <InternationalGuideShell locale={locale} languagePaths={Object.fromEntries(LOCALES.map(code => [code, `/${code}/guides/editorial-policy`]))}>
    <JsonLd data={{ "@context": "https://schema.org", "@graph": [
      { "@type": "WebPage", name: text.policyTitle, description: text.policyDescription,
        url: SITE_URL + url, inLanguage: COPY[locale].tag },
      breadcrumbs([{ name: text.home, path: `/${locale}` }, { name: text.guides, path: `/${locale}/guides` }, { name: text.policy, path: url }]),
    ] }} />
    <Link href={`/${locale}/guides`} className="text-sm font-semibold text-blue-700">← {text.guides}</Link>
    <h1 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">{text.policyTitle}</h1>
    <p className="mt-4 text-xs text-slate-500">{text.updated}: <time dateTime={["en", "ja", "zh-hans"].includes(locale) ? "2026-11-13" : "2026-11-14"}>{["en", "ja", "zh-hans"].includes(locale) ? "2026-11-13" : "2026-11-14"}</time></p>
    <div className="mt-8 space-y-8">{POLICY[locale].map(section => <section key={section.heading}>
      <h2 className="text-xl font-black">{section.heading}</h2>
      <p className="mt-3 text-base leading-8 text-slate-700">{section.text}</p>
    </section>)}</div>
    <a href={`mailto:${CONTACT_EMAIL}`} className="mt-8 inline-block font-semibold text-blue-700 underline underline-offset-4">{CONTACT_EMAIL}</a>
  </InternationalGuideShell>;
}
