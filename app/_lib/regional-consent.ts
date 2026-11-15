export const CONSENT_REGIONS = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH"] as const;
const regions = new Set<string>(CONSENT_REGIONS);
export function consentRequired(country: string | null): boolean | null {
  if (!country || !/^[A-Z]{2}$/.test(country) || ["XX", "ZZ", "AA"].includes(country)) return null;
  return country === "EU" || regions.has(country);
}
export type CmpPermission = "waiting" | "granted" | "denied" | "not-applicable";
export function analyticsPermitted(required: boolean | null, cmp: CmpPermission) {
  if (cmp === "denied") return false;
  if (cmp === "granted") return true;
  return required === false || (required === null && cmp === "not-applicable");
}
export type GoogleFundingChoices = {
  callbackQueue: { push: (entry: Record<string, () => void>) => unknown };
  getGoogleConsentModeValues?: () => { analyticsStoragePurposeConsentStatus?: number };
  ConsentModePurposeStatusEnum?: Record<string, number>;
  showRevocationMessage?: () => void;
};
declare global { interface Window { googlefc?: GoogleFundingChoices; myeotijiAnalyticsAllowed?: boolean } }
export function readCmpAnalytics(fc: GoogleFundingChoices): CmpPermission {
  const status = fc.getGoogleConsentModeValues?.().analyticsStoragePurposeConsentStatus;
  const values = fc.ConsentModePurposeStatusEnum;
  if (status === undefined || !values) return "waiting";
  if (status === values.CONSENT_MODE_PURPOSE_STATUS_GRANTED) return "granted";
  if (status === values.CONSENT_MODE_PURPOSE_STATUS_DENIED) return "denied";
  if (status === values.CONSENT_MODE_PURPOSE_STATUS_NOT_APPLICABLE) return "not-applicable";
  // NOT_CONFIGURED is not treated as consent in a region that requires it.
  return "waiting";
}
export function clearAnalyticsCookies(prefix: "myeotiji_intl" | "_ga") {
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (prefix === "_ga" ? name !== "_ga" && !name.startsWith("_ga_") : !name.startsWith(prefix)) continue;
    for (const domain of ["", `;domain=${window.location.hostname}`, ";domain=.myeotiji.kr"]) {
      document.cookie = `${name}=;max-age=0;path=/${domain};SameSite=Lax`;
    }
  }
}
