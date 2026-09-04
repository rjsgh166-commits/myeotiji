const TRANSFER_KEY = "myeotiji:calculation-transfer:v1";

type TransferEnvelope = {
  target: string;
  data: Record<string, unknown>;
  createdAt: number;
};

export function cleanPath(href: string) {
  return href.split("?")[0] || "/";
}

export function queryStateFromHref(href: string): Record<string, string> {
  const query = href.split("?")[1];
  if (!query) return {};
  return Object.fromEntries(new URLSearchParams(query).entries());
}

export function storeCalculationTransfer(
  target: string,
  data: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  const envelope: TransferEnvelope = {
    target: cleanPath(target),
    data,
    createdAt: Date.now(),
  };
  sessionStorage.setItem(TRANSFER_KEY, JSON.stringify(envelope));
}

export function consumeCalculationTransfer(target: string) {
  if (typeof window === "undefined") return null;

  try {
    const raw = sessionStorage.getItem(TRANSFER_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TransferEnvelope;
    if (
      !parsed ||
      parsed.target !== cleanPath(target) ||
      Date.now() - parsed.createdAt > 30 * 60 * 1000
    ) {
      return null;
    }
    sessionStorage.removeItem(TRANSFER_KEY);
    return parsed.data;
  } catch {
    return null;
  }
}
