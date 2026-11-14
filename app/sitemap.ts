import type { MetadataRoute } from "next";
import { COUNTRY_TOOLS } from "./_lib/countryTools";

import { SITE_URL } from "./_lib/site";
import { LOCALES, TOOLS, localizedAlternates } from "./_lib/international";
import { INTERNATIONAL_GUIDES, GUIDE_PUBLISHED, countryLanguageTag, guideAlternates, guideHubAlternates, guidePath } from "./_lib/intl-guides";

const localizedUpdated = (locale: string) => ["en", "ja", "zh-hans"].includes(locale) ? "2026-11-13" : "2026-11-14";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/job-change",
    "/salary",
    "/retirement",
    "/weekly-pay",
    "/unemployment",
    "/hourly-monthly",
    "/annual-leave",
    "/loan",
    "/compound",
    "/savings-interest",
    "/goal-savings",
    "/stock-average",
    "/fee",
    "/rent-conversion",
    "/median-income",
    "/days",
    "/age",
    "/lunar",
    "/holiday-tracker",
    "/holiday-tracker/2027",
    "/holiday-tracker/2027/chuseok",
    "/holiday-tracker/2027/seollal",
    "/holiday-tracker/2027/pto-1",
    "/holiday-tracker/2027/pto-2",
    "/holiday-tracker/2027/may",
    "/holiday-tracker/2027/october",
    "/situations",
    "/insights/2027",
    "/due-date",
    "/discount",
    "/unit-converter",
    "/calorie-burn",
    "/dog-age",
    "/guides",
    "/guides/fee-calculation",
    "/guides/2027-holidays",
    "/guides/age",
    "/guides/lunar-birthday",
    "/guides/stacked-discount",
    "/guides/stock-average",
    "/guides/editorial-policy",
    "/about",
    "/privacy",
    "/contact",
    "/disclaimer",
  ];

  const holidayGuides = new Set([
    "/holiday-tracker/2027",
    "/holiday-tracker/2027/chuseok",
    "/holiday-tracker/2027/seollal",
    "/holiday-tracker/2027/pto-1",
    "/holiday-tracker/2027/pto-2",
    "/holiday-tracker/2027/may",
    "/holiday-tracker/2027/october",
  ]);

  const editorialGuides = new Set([
    "/guides",
    "/guides/fee-calculation",
    "/guides/2027-holidays",
    "/guides/age",
    "/guides/lunar-birthday",
    "/guides/stacked-discount",
    "/guides/stock-average",
    "/guides/editorial-policy",
  ]);

  // Report real content-update dates, not the current build date.
  // Avoid fabricating freshness signals for unchanged URLs.
  const materiallyUpdated: Record<string, string> = {
    "/days": "2026-10-27",
    "/due-date": "2026-10-27",
  };

  const globalPages: MetadataRoute.Sitemap = LOCALES.flatMap(locale => [
    { url: `${SITE_URL}/${locale}`, lastModified: localizedUpdated(locale), changeFrequency: "monthly" as const,
      alternates: { languages: localizedAlternates() } },
    ...TOOLS.map(tool => ({ url: `${SITE_URL}/${locale}/${tool}`, lastModified: localizedUpdated(locale),
      changeFrequency: "monthly" as const, alternates: { languages: localizedAlternates(tool) } })),
  ]);

  const koreanPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    ...(materiallyUpdated[route] ? { lastModified: materiallyUpdated[route] } : {}),
    changeFrequency:
      route === ""
        ? "weekly"
        : holidayGuides.has(route) || editorialGuides.has(route)
          ? "weekly"
          : ["/about", "/privacy", "/contact", "/disclaimer"].includes(route)
            ? "yearly"
            : "monthly",
    priority:
      route === ""
        ? 1
        : holidayGuides.has(route)
          ? 0.9
          : editorialGuides.has(route)
            ? 0.85
            : ["/about", "/privacy", "/contact", "/disclaimer"].includes(route)
              ? 0.4
              : 0.8,
  }));

  const countryPages: MetadataRoute.Sitemap = COUNTRY_TOOLS.map(entry => ({
    url: `${SITE_URL}/${entry.locale}/${entry.region}/${entry.id}`,
    lastModified: entry.updated,
    changeFrequency: "monthly" as const,
    alternates: { languages: { [countryLanguageTag(entry.locale)]: `${SITE_URL}/${entry.locale}/${entry.region}/${entry.id}` } },
  }));

  const guidePages: MetadataRoute.Sitemap = INTERNATIONAL_GUIDES.map(guide => ({
    url: SITE_URL + guidePath(guide), lastModified: guide.updated, changeFrequency: "monthly",
    alternates: { languages: guideAlternates(guide) },
  }));
  const guideHubs: MetadataRoute.Sitemap = LOCALES.flatMap(locale => [
    { url: `${SITE_URL}/${locale}/guides`, lastModified: ["en", "ja", "zh-hans"].includes(locale) ? GUIDE_PUBLISHED : "2026-11-14", changeFrequency: "monthly" as const,
      alternates: { languages: guideHubAlternates() } },
    { url: `${SITE_URL}/${locale}/guides/editorial-policy`, lastModified: ["en", "ja", "zh-hans"].includes(locale) ? GUIDE_PUBLISHED : "2026-11-14", changeFrequency: "yearly" as const,
      alternates: { languages: guideHubAlternates("/editorial-policy") } },
  ]);

  return [...koreanPages, ...globalPages, ...countryPages, ...guidePages, ...guideHubs, ...LOCALES.flatMap(locale => ["privacy", "terms", "contact"].map(page => ({ url: `${SITE_URL}/${locale}/${page}`, lastModified: localizedUpdated(locale), changeFrequency: "yearly" as const })))];
}
