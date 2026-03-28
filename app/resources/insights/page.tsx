import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Insights",
  description: "Articles covering design trends, sourcing logic, and execution lessons from premium residential projects.",
};

export default function InsightsPage() {
  return (
    <SectionPage
      kicker="Resources · Insights"
      title="Industry Insights for Better Project Decisions"
      description="Insights focus on practical decisions teams face in high-end residential execution, from material strategy to cost and schedule control."
      highlights={[
        "Luxury interior trend analysis",
        "Material and performance considerations",
        "Cross-border delivery experience and risk management",
        "Budget control strategies for multi-scope projects",
      ]}
    />
  );
}
