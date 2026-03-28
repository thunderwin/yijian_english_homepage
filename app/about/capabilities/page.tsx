import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Our Capability",
  description: "Core Arcaya capabilities across design, product integration, project management, and cross-border delivery.",
};

export default function CapabilitiesPage() {
  return (
    <SectionPage
      kicker="About · Capability"
      title="Core Capability Matrix"
      description="Arcaya capability is organized around four delivery-critical pillars that support premium residential execution end-to-end."
      highlights={[
        "Spatial design coordination capability",
        "Product integration and selection capability",
        "Project management and stakeholder alignment",
        "Cross-border procurement and delivery execution",
      ]}
    />
  );
}
