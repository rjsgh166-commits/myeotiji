import GuideArticle from "../_components/GuideArticle";
import { GUIDES, buildGuideMetadata } from "../_data/guides";

export const metadata = buildGuideMetadata("age");

export default function Page() {
  return <GuideArticle guide={GUIDES["age"]} />;
}
