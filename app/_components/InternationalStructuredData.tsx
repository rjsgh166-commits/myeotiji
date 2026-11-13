import { SITE_URL } from "../_lib/site";
import { COPY, type IntlLocale } from "../_lib/international";
import { GUIDE_LABELS } from "../_lib/intl-guides/labels";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
  }} />;
}
export function breadcrumbs(items: { name: string; path: string }[]) {
  return { "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({
    "@type": "ListItem", position: index + 1, name: item.name, item: SITE_URL + item.path,
  })) };
}
export default function InternationalCalculatorSchema({ locale, path, title, description }: {
  locale: IntlLocale; path: string; title: string; description: string;
}) {
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": [
    { "@type": "WebApplication", "@id": `${SITE_URL}${path}#calculator`, name: title,
      description, url: SITE_URL + path, inLanguage: COPY[locale].tag,
      applicationCategory: "UtilitiesApplication", operatingSystem: "Web browser", isAccessibleForFree: true,
      publisher: { "@type": "Organization", name: "Myeotiji", url: SITE_URL },
    },
    breadcrumbs([{ name: GUIDE_LABELS[locale].home, path: `/${locale}` }, { name: title, path }]),
  ] }} />;
}
