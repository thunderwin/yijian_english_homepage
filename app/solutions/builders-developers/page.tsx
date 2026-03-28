import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Solutions for Builders & Developers",
  description: "Procurement and delivery solution for builders and developers focused on cost, timeline, and risk control.",
};

export default function BuildersDevelopersSolutionPage() {
  return (
    <SectionPage
      kicker="Solutions · Builders & Developers"
      title="Control Cost, Timeline, and Delivery Risk"
      description="Arkaya gives builder and developer teams a structured procurement and delivery framework that improves predictability across multi-phase residential projects."
      highlights={[
        "Batch procurement and package-level planning",
        "Project milestone tracking from release to site delivery",
        "Unified accountability across categories and vendors",
        "Execution coordination from hard finishes to furnishing scope",
        "Risk control for substitutions, delays, and replacement events",
      ]}
      links={[
        { href: "/about/contact", label: "Book Procurement Review", primary: true },
        { href: "/projects", label: "View Project Cases" },
      ]}
    />
  );
}
