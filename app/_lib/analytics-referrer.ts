// Only public search-service origins are allowed. Never send paths, queries,
// fragments, credentials, arbitrary referral hosts, or calculator inputs.
const SEARCH_DOMAINS = [
  "naver.com", "google.com", "google.co.kr", "google.co.jp", "google.co.uk",
  "google.co.in", "google.com.br", "google.com.au", "google.ca", "google.fr",
  "google.de", "google.es", "google.it", "google.co.id", "google.com.vn",
  "bing.com", "search.yahoo.com", "search.yahoo.co.jp", "search.daum.net",
  "duckduckgo.com",
];

export function safeSearchReferrer(referrer: string): string {
  try {
    const url = new URL(referrer);
    if (!["https:", "http:"].includes(url.protocol) || url.username || url.password || url.port) return "";
    const host = url.hostname.toLowerCase();
    if (!SEARCH_DOMAINS.some(domain => host === domain || host.endsWith(`.${domain}`))) return "";
    return `${url.protocol}//${host}/`;
  } catch {
    return "";
  }
}
