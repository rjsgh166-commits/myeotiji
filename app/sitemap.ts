import type { MetadataRoute } from "next";

import { SITE_URL } from "./_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/salary",
    "/retirement",
    "/weekly-pay",
    "/discount",
    "/age",
    "/lunar",
    "/holiday-tracker",
    "/stock-average",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
