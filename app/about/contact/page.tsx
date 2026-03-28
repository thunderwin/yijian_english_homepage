import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Contact",
  description: "Contact Arcaya via consultation form, email, phone, or project file upload.",
};

export default function ContactPage() {
  return (
    <SectionPage
      kicker="About · Contact"
      title="Let’s Plan Your Project"
      description="Reach us through your preferred channel for consultation, project intake, and document submission."
      highlights={[
        "Consultation request form",
        "Direct email and phone support",
        "WhatsApp contact option",
        "Project file and floor plan upload",
      ]}
      links={[
        { href: "/about/contact", label: "Book a Consultation", primary: true },
        { href: "/resources/tools", label: "Upload Floor Plan" },
      ]}
    />
  );
}
