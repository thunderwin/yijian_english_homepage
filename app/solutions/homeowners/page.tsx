import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Solutions for Homeowners",
  description: "End-to-end residential solution for homeowners seeking design clarity and delivery certainty.",
};

export default function HomeownersSolutionPage() {
  return (
    <SectionPage
      kicker="Solutions · Homeowners"
      title="One Partner from Design Direction to Final Installation"
      description="For homeowners, the priority is confidence. Arkaya consolidates design coordination, product decisions, and installation planning to reduce rework and uncertainty."
      highlights={[
        "Style proposal and room-level planning",
        "Integrated selection across finishes, furniture, and decor",
        "Budget and scope guardrails before procurement starts",
        "Delivery and installation coordination with milestone visibility",
        "Aftercare planning and warranty support after handover",
      ]}
      links={[
        { href: "/about/contact", label: "Book a Consultation", primary: true },
        { href: "/resources/guides", label: "Download Homeowner Guide" },
      ]}
    />
  );
}
