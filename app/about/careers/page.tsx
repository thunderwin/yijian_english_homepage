import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Careers",
  description: "Join Arcaya and help build integrated design-to-delivery systems for premium residential projects.",
};

export default function CareersPage() {
  return (
    <SectionPage
      kicker="About · Careers"
      title="Join the Team Building Better Project Outcomes"
      description="We look for people who combine craft sensitivity with execution discipline across design, operations, and delivery domains."
      highlights={[
        "Who we are looking for",
        "Current open role directions",
        "How to apply and share your portfolio",
        "Ways of working and collaboration culture",
      ]}
      links={[{ href: "/about/contact", label: "Contact Our Team", primary: true }]}
    />
  );
}
