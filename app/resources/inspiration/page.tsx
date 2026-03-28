import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Inspiration",
  description: "Curated inspiration references organized by style language and project mood.",
};

export default function InspirationPage() {
  return (
    <SectionPage
      kicker="Resources · Inspiration"
      title="Inspiration by Style Direction"
      description="Inspiration references help teams align early around visual language and atmosphere before specification and package decisions are finalized."
      highlights={[
        "Modern American",
        "French Light Luxury",
        "Organic Contemporary",
        "Urban Modern",
      ]}
      links={[{ href: "/projects", label: "View Case Studies", primary: true }]}
    />
  );
}
