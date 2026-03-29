import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Timeline & Milestones",
  description: "Critical project milestones from requirements to final acceptance.",
};

export default function TimelineMilestonesPage() {
  return (
    <SectionPage
      kicker="How It Works · Timeline"
      title="Milestones That Build Project Certainty"
      description="Arcaya uses milestone control to make project progress visible and actionable across design, procurement, and delivery phases."
      highlights={[
        "Requirements confirmation",
        "Design and specification sign-off",
        "List and package lock",
        "Order release and production checkpoints",
        "Quality inspection and shipping release",
        "Local installation and final acceptance",
      ]}
      links={[{ href: "/about/contact", label: "Review Your Timeline", primary: true }]}
    />
  );
}
