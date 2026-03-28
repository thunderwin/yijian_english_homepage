import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Product & Package",
  description: "Packageized solution offerings for faster scoping, quoting, and delivery alignment.",
};

export default function ProductPackagePage() {
  return (
    <SectionPage
      kicker="Solutions · Product & Package"
      title="Standardized Packages for Faster Decisions"
      description="Packageized offerings reduce quoting friction and clarify scope early. Teams can start with a package baseline and scale up with project-specific customizations."
      highlights={[
        "Furniture Package for quick FF&E alignment",
        "Interior Finish Package for surface and fixture coordination",
        "Turnkey Residential Package across design, product, and delivery",
        "Showhome / Staging Package for sales-focused installations",
        "Optional upgrade paths by room, style, and performance requirements",
      ]}
      links={[
        { href: "/about/contact", label: "Request Package Proposal", primary: true },
        { href: "/resources/guides", label: "Download Package Guide" },
      ]}
    />
  );
}
