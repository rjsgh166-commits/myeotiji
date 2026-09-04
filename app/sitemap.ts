import type { MetadataRoute } from "next";

import { SITE_URL } from "./_lib/site";

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

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency:
      route === ""
        ? "weekly"
        : holidayGuides.has(route)
          ? "weekly"
          : ["/about", "/privacy", "/contact", "/disclaimer"].includes(route)
            ? "yearly"
            : "monthly",
    priority:
      route === ""
        ? 1
        : holidayGuides.has(route)
          ? 0.9
          : ["/about", "/privacy", "/contact", "/disclaimer"].includes(route)
            ? 0.4
            : 0.8,
  }));
}
