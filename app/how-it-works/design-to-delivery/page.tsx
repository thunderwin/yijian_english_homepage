import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Design to Delivery",
  description: "How Arcaya bridges design output with procurement, logistics, and installation execution.",
};

export default function DesignToDeliveryPage() {
  return (
    <SectionPage
      kicker="How It Works · Design to Delivery"
      title="From Design Files to Real-World Installation"
      description="This page explains how Arcaya avoids design intent loss between concept development, sourcing decisions, and on-site execution."
      highlights={[
        "Design outputs translated into procurement-ready scope",
        "Procurement and delivery dependencies identified early",
        "Site readiness and sequence planning before shipment",
        "Reduced rework through tighter information continuity",
      ]}
      links={[{ href: "/about/contact", label: "Start a Project", primary: true }]}
    />
  );
}
