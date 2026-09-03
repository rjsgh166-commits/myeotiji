import type { MetadataRoute } from "next";

import { SITE_URL } from "./_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
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

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency:
      route === ""
        ? "weekly"
        : ["/about", "/privacy", "/contact", "/disclaimer"].includes(route)
          ? "yearly"
          : "monthly",
    priority:
      route === ""
        ? 1
        : ["/about", "/privacy", "/contact", "/disclaimer"].includes(route)
          ? 0.4
          : 0.8,
  }));
}
