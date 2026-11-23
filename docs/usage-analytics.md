# Usage analytics (v47)

These events supplement page views; they do not measure unique people or prove a calculation was completed. All identifiers are static catalog values. `site_language` describes the page language and does not override GA’s built-in browser `language` dimension. No calculator inputs, results, signatures, currency, free text, query strings, referrers or new user/session IDs are included.

| Event | Meaning | Parameters |
| --- | --- | --- |
| `calculator_use` | First input/change or recognized mode-control interaction in a calculator per route visit, after a one-second pause. Invalid input also counts as interaction. Initial/default results do not count. | site_language, calculator, tool_family |
| `comparison_use` | First interaction inside each supported international scenario panel (coupon, fee comparison, unit price, savings goal); or a valid stable Korean salary/loan/job-change comparison after interaction. Automatic scenario redraws from basic inputs do not count. | site_language, calculator, tool_family, comparison_type |
| `guide_open` | Click to a recognized internal guide article or guide index. Measures the click, not confirmed arrival or reading. | site_language (source), target_language, guide_id |
| `language_change` | Click on an explicit `hreflang` link to a different supported language. Measures the click, not confirmed arrival. Chinese destinations are excluded. | site_language (source), target_language |

Duplicate event/parameter combinations are suppressed in memory per route visit. Returning to a route starts a new visit. Existing Korean `calculation_complete` events retain their prior behavior.

Every new event requires the existing analytics permission flag to be explicitly true, GA's disable flag to be off, and an active gtag function. There is no fallback queue. Pending/denied interactions are dropped. Delayed input events are discarded if consent is withdrawn or the sender changes before delivery. Chinese routes cannot emit these events, even if a previous page left a sender in memory. Existing regional/CMP/local opt-out gates and ad settings are unchanged.

## Report setup and review

Events need no custom dimensions to be collected. Verify delivery with GA4 DebugView/Realtime when account access is available; automated tests verify calls and consent behavior, not the private GA report. For event breakdowns, register event-scoped custom dimensions for `site_language`, `calculator`, `tool_family`, `comparison_type`, `guide_id` and `target_language` in GA4 Admin → Data display → Custom definitions. Do not mark every interaction as a key event by default.

After data has accumulated, compare language/calculator event counts with page views and Search Console impressions/clicks. For a guide-to-calculator funnel use page paths and subsequent `calculator_use`; `guide_open` alone is not that conversion. Use small samples cautiously. No sitemap or indexing request is needed for this analytics-only change.

## Validation

`npm run test:usage` mounts the real international consent component with mocked region responses and tests initial render, actual input/change events, dedupe, scenario-only interaction, guide and language clicks, unknown/external destinations, route visits, Korean completion/comparison, opt-out, withdrawal/regrant without replay, Chinese blocking and payload contents. Existing consent and calculator/SEO regressions must also pass.

## Search attribution repair — 2026-11-23

The Korean tag blanked page_referrer; the international tag also enabled ignore_referrer. This prevents source attribution from browser referrals and coincides with the direct-traffic increase. Both now send only allowlisted public search-service origins, never their paths, search queries, fragments, credentials, nonstandard ports or arbitrary referral hosts. International ignore_referrer is false. Non-search referrals remain blank; some genuine visits will still be direct. Consent gating, Chinese-route exclusion, calculator inputs and query-free page_location are unchanged. Historical attribution cannot be repaired by this deployment. Compare subsequent full weeks and Search Console clicks; GA sessions and search clicks are not equivalent.
