import type { MetadataRoute } from "next";

import { SITE_URL } from "./_lib/site";
import { LOCALES, TOOLS, localizedAlternates } from "./_lib/international";

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
    { url: `${SITE_URL}/${locale}`, lastModified: "2026-11-13", changeFrequency: "monthly" as const,
      alternates: { languages: localizedAlternates() } },
    ...TOOLS.map(tool => ({ url: `${SITE_URL}/${locale}/${tool}`, lastModified: "2026-11-13",
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

  return [...koreanPages, ...globalPages];
}
