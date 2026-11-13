import GuideArticle from "../_components/GuideArticle";
import { GUIDES, buildGuideMetadata } from "../_data/guides";

export const metadata = buildGuideMetadata("2027-holidays");

export default function Page() {
  return <GuideArticle guide={GUIDES["2027-holidays"]} />;
}
