import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Supply Chain Capability",
  description: "Factory integration and sourcing network capability for responsive project execution.",
};

export default function SupplyChainPage() {
  return (
    <SectionPage
      kicker="About · Supply Chain"
      title="Supply Chain Capability for Complex Scope"
      description="Arcaya coordinates factories and suppliers to improve response speed, quality consistency, and package-level execution control."
      highlights={[
        "Factory integration and sourcing depth",
        "Response speed on schedule-sensitive scope",
        "Batch purchasing leverage for large projects",
        "Coordination model for non-standard requirements",
      ]}
    />
  );
}
