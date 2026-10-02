import GuideArticle from "../_components/GuideArticle";
import { GUIDES, buildGuideMetadata } from "../_data/guides";

export const metadata = buildGuideMetadata("fee-calculation");

export default function Page() {
  return <GuideArticle guide={GUIDES["fee-calculation"]} />;
}
