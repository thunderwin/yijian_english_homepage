import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Pricing Approach",
  description: "Transparent pricing logic covering package scope, customization, and delivery variables.",
};

export default function PricingApproachPage() {
  return (
    <SectionPage
      kicker="How It Works · Pricing"
      title="Transparent Pricing Logic for Complex Scope"
      description="Arcaya pricing explains what is included, what changes cost, and how standard packages differ from custom configurations."
      highlights={[
        "Cost structure by design, product, and delivery components",
        "Primary price drivers and variable scope factors",
        "Standard package vs custom solution differences",
        "How schedule and customization affect budget range",
      ]}
      links={[
        { href: "/about/contact", label: "Request a Pricing Review", primary: true },
        { href: "/solutions/packages", label: "Compare Packages" },
      ]}
    />
  );
}
