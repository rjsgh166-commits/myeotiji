import KoreanLayout, { metadata as koreanMetadata } from "./(korean)/layout";
import NotFound from "./(korean)/not-found";

// Preserve the existing Korean 404 experience across the two root layouts.
export const metadata = { ...koreanMetadata, robots: { index: false, follow: true } };
export default function GlobalNotFound() {
  return <KoreanLayout><NotFound /></KoreanLayout>;
}
