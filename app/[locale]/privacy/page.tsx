import { LegalContent, legalMetadata, type LegalProps } from "../../_components/InternationalLegalPage";
export async function generateMetadata(props: LegalProps) { return legalMetadata(props, "privacy"); }
export default function Page(props: LegalProps) { return <LegalContent {...props} page="privacy" />; }
