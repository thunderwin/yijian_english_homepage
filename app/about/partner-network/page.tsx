import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Partner Network",
  description: "The professional ecosystem Arcaya collaborates with across design, build, logistics, and installation.",
};

export default function PartnerNetworkPage() {
  return (
    <SectionPage
      kicker="About · Partner Network"
      title="Built on a Multi-Role Partner Ecosystem"
      description="Complex projects rely on coordinated specialists. Arcaya works with design, build, logistics, and installation partners to maintain execution continuity."
      highlights={[
        "Architect and interior design partners",
        "Builder and developer collaboration",
        "Installation and field execution teams",
        "Logistics and delivery operations partners",
      ]}
    />
  );
}
