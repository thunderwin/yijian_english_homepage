import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Projects",
  description: "Case study hub showing project context, service scope, and delivery outcomes across residential segments.",
};

export default function ProjectsPage() {
  return (
    <SectionPage
      kicker="Projects"
      title="Case Studies That Show Execution, Not Just Images"
      description="Projects are structured to help clients evaluate Arcaya by scope, service model, and measurable outcomes."
      highlights={[
        "Filter by project type, style, and service scope",
        "Coverage across luxury residences, staging, and developer programs",
        "Each case includes context, scope, decisions, and outcomes",
        "Result-oriented narratives focused on delivery and client impact",
      ]}
      links={[
        { href: "/about/contact", label: "Discuss a Similar Project", primary: true },
        { href: "/resources/inspiration", label: "Browse Inspiration" },
      ]}
    />
  );
}
