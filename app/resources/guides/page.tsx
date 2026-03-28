import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Guides",
  description: "Downloadable guides for planning, procurement, and collaboration in high-end residential projects.",
};

export default function GuidesPage() {
  return (
    <SectionPage
      kicker="Resources · Guides"
      title="Downloadable Guides for Project Teams"
      description="Guides are designed as actionable documents that help teams define scope, prepare data, and reduce avoidable risk before execution begins."
      highlights={[
        "Luxury home fit-out process guide",
        "Overseas procurement checklist",
        "Custom cabinetry planning guide",
        "Designer collaboration handbook",
      ]}
      links={[{ href: "/about/contact", label: "Request Guide Access", primary: true }]}
    />
  );
}
