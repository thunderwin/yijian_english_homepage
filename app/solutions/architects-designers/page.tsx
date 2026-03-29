import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Solutions for Architects & Designers",
  description: "Collaboration model for architects and interior designers requiring material, spec, and execution support.",
};

export default function ArchitectsDesignersSolutionPage() {
  return (
    <SectionPage
      kicker="Solutions · Architects & Designers"
      title="Design Intent Preserved Through Delivery"
      description="Arcaya supports architect and designer teams with specification alignment, material coordination, and project execution support so concepts stay intact through final installation."
      highlights={[
        "Specification and submittal support for real project workflows",
        "Material sample and selection assistance for faster approvals",
        "Product recommendation support tied to performance requirements",
        "Execution coordination that closes the design-build communication gap",
        "Timeline-aware procurement and replacement fallback planning",
      ]}
      links={[
        { href: "/about/contact", label: "Create Professional Account", primary: true },
        { href: "/resources/tools", label: "Explore Tools" },
      ]}
    />
  );
}
