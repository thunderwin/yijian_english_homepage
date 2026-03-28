import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Tools",
  description: "Planning and intake tools for floor plans, budgeting, and option configuration.",
};

export default function ToolsPage() {
  return (
    <SectionPage
      kicker="Resources · Tools"
      title="Practical Tools for Faster Project Starts"
      description="Tools help teams convert intent into structured inputs so consultations and proposals can move faster with better clarity."
      highlights={[
        "Style assessment tools",
        "Budget estimator workflows",
        "Floor plan upload and intake structure",
        "Online configuration pathways for future rollout",
      ]}
      links={[{ href: "/about/contact", label: "Upload Floor Plan", primary: true }]}
    />
  );
}
