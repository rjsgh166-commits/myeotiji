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
    "/about",
    "/privacy",
    "/contact",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
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
