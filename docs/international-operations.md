# International operating boundaries — v44

Reviewed implementation: 2026-11-14. This is an engineering risk-reduction record, not a legal opinion or regulatory approval.

## Data inventory

| Data | Processing | Purpose / safeguards |
|---|---|---|
| Calculator amounts, salaries, dates, results | Browser memory; no operator storage or transmission implemented | Self-service calculation; no accounts, uploaded records or forms |
| Optional international analytics / ads | All international languages except CN load GA4 by default unless a saved rejection exists; visitors may opt out. Non-personalized AdSense integration tags are connected outside CN; actual ad serving/account approval/consent configuration has not been verified | Only page visits are explicitly sent, with query/referrer stripped, ad signals off; withdraw via footer and integration-prefixed cookies removed. Language switches reload the document to isolate CN. Review GA account settings before additional data uses |
| Connection metadata | Vercel delivery/security infrastructure, potentially outside visitor country | Delivery and security; absence of optional tracking does not eliminate personal-data processing |
| Voluntary support email | Existing contact mailbox/provider | Technical corrections and privacy requests; request fictional examples, never actual payroll/tax/identity documents |
| Korean section | Existing separate root/privacy settings | Preserved; Korean visits can still use analytics |

## Support boundary

Handle software faults and source corrections only. Do not answer personal tax positions, recommend securities/contribution amounts, decide employment/insurance eligibility, prepare filings or represent users. Explain the model's documented assumptions and refer personal decisions to official services or qualified local professionals. Do not market the service as professional-reviewed, government-approved or error-free.

## Correction workflow

1. Record affected URL, model year/region and a fictional reproducible example. Do not retain real financial records in issues.
2. Compare primary sources, dates and exceptions; fix the model and guide together.
3. If a material error or unverified policy change remains, add a prominent tool-specific warning or temporarily restrict the affected tool. Do not silently describe old rules as current.
4. Verify numeric cases, inputs and invalid states, all affected translations, privacy scripts and Korean fingerprints. Update reviewed dates only for real reviews.
5. Build, preview, deploy to the intended project and run live HTTP checks. Recheck the source before extending to a new tax year. No automatic legal-update monitoring is currently configured.

## Privacy requests

Receive via contact@myeotiji.kr. Establish the relevant request with the minimum information; never routinely ask for identity documents. Record receipt and applicable response deadline, verify what records actually exist, involve the hosting/mail provider where needed, assess legal retention exceptions and respond within applicable statutory periods. Do not promise that no data exists or that every provider log can be deleted. No newly invented fixed retention or guaranteed response SLA is published.

## Unresolved operational / legal items

- Confirm actual Vercel and mailbox retention, access controls, contractual processing locations and deletion/request capabilities with the account settings/provider. Do not publish unverified retention durations or claim that every log is anonymous.
- Confirm the operator's legal identity and legally required disclosures. Public contact uses the existing project brand/mailbox; do not invent a company registration, address, license or Chinese representative.
- Obtain local advice on Chinese PIPL territorial application, representative under Article 53, lawful basis and transfer obligations for essential hosting and voluntary email. Disabling GA is risk reduction, not an exemption or completed compliance certification.
- Before monetization/personalization/new services, check applicable advertising, professional-services, privacy and consumer rules. No individual professional consultation or filing service is authorized by this release.
- No outbound contact to lawyers/regulators, paid engagement, representative appointment, Search Console submission or geo-blocking is performed by this release.

Primary references used in review:
- Japan NTA Q6-1 / Q6-3: https://www.nta.go.jp/taxes/zeirishi/zeirishiseido/qa/06.htm
- China PIPL: https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm
- IRS preparer scope: https://www.irs.gov/tax-professionals/frequently-asked-questions-do-i-need-a-ptin
- Vercel privacy: https://vercel.com/legal/privacy-policy


## v44 — shopping and savings scenarios (2026-11-14)

Scope: ES, PT-BR, ID, HI, FR, AR, BN, UR and VI; four existing calculator URLs and their existing guide URLs per language. Korean tools/metadata and the original EN/JA/CN calculators are unchanged. Analytics and advertising behavior is unchanged by this release.

- Discount: retain the original two-percentage calculator. Supplement with a coupon scenario using the same price/discounts/currency. Product discount first, minimum order checked on that subtotal, then one percentage or fixed coupon with a cap (0 means no cap), then shipping. Reward is calculated on goods after the coupon, excluding shipping; show immediate payment separately from deferred reward and conditional effective cost. This is a user-configured model, not automatic marketplace checkout replication.
- Fee: compare user-entered A/B percentage-plus-fixed terms for the same charge or target net. Reverse charges round upward to the currency's smallest unit; actual provider rounding/tax/eligibility rules may differ. No provider rate table, payout schedule or installment interest is asserted.
- Unit price: compare total pack price/content per kg, L or item. Reject cross-family comparisons; no mass/volume density assumption. No currency conversion. Display fine unit prices with up to six decimals.
- Goal savings: invert the same annual-effective-return/month-end-deposit model. Round the required monthly deposit upward to the currency's smallest unit. Show outcomes for current contributions and ±20%; handle zero/negative assumed returns, already-funded targets and integer-month duration. A mathematical simulation, not an individual investment recommendation.
- Guide content: native-language feature titles, assumptions, worked examples/tables and links to the same calculator. Additional contextual primary references for ID coupons, PT-BR payment fees and FR unit prices. Examples are synthetic, not official provider tariffs.
- No new URLs, tax/payroll rules, holiday calendars, professional services, user-data collection or Search Console submissions.

Validation: `npm run test:scenarios` covers pure arithmetic boundaries and 36 localized React scenarios. `node scripts/verify-intl-scenarios.cjs --rendered` also checks the built HTML/metadata/guide content. Existing global/country, SEO, guides, privacy and analytics checks remain required before release.
