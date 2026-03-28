import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Quality Assurance",
  description: "Quality standards, inspection flow, and warranty framework behind Arcaya projects.",
};

export default function QualityAssurancePage() {
  return (
    <SectionPage
      kicker="About · Quality Assurance"
      title="Quality Systems Built Into Delivery"
      description="Quality is managed through standardized checks across materials, production, packaging, and on-site acceptance."
      highlights={[
        "Material standards and specification alignment",
        "Inspection checkpoints before shipment release",
        "Issue handling and replacement workflows",
        "Warranty boundaries and aftercare commitments",
      ]}
    />
  );
}
