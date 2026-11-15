import { consentRequired } from "../../_lib/regional-consent";

export function GET(request: Request) {
  // Vercel supplies this coarse country header. Do not return/log IPs, country names or exact locations.
  const country = process.env.VERCEL === "1" ? request.headers.get("x-vercel-ip-country") : null;
  return Response.json({ consentRequired: consentRequired(country) }, { headers: {
    "Cache-Control": "private, no-store, max-age=0", "Vercel-CDN-Cache-Control": "no-store",
    "X-Robots-Tag": "noindex", "Vary": "x-vercel-ip-country",
  } });
}
