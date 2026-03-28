import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Delivery & Installation",
  description: "How international sourcing is coordinated with local delivery and installation networks.",
};

export default function DeliveryInstallationPage() {
  return (
    <SectionPage
      kicker="About · Delivery & Installation"
      title="Global Sourcing, Local Execution"
      description="Arcaya coordinates shipping, local logistics, and installation partners so delivery plans align with project readiness and quality expectations."
      highlights={[
        "Shipping and customs coordination",
        "Local delivery and installation network",
        "Site-readiness and sequencing support",
        "Issue-response and closeout workflows",
      ]}
    />
  );
}
