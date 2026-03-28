import Link from "next/link";

import LogoSquare from "components/logo-square";

const { COMPANY_NAME, SITE_NAME } = process.env;

const footerSitemap = [
  {
    title: "Products",
    href: "/products",
    links: [
      { title: "Furniture & Soft Furnishings", href: "/products#furniture-soft-furnishings" },
      { title: "Custom Windows & Doors", href: "/products#custom-windows-doors" },
      { title: "Stairs & Railings", href: "/products#stairs-railings" },
      { title: "Cabinetry Systems", href: "/products#cabinetry-systems" },
      { title: "Entry Doors, Fence & Gate", href: "/products#entry-doors-fence-gate" },
      { title: "Garage Door", href: "/products#garage-door" },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    links: [
      { title: "For Homeowners", href: "/solutions/homeowners" },
      { title: "For Architects & Designers", href: "/solutions/architects-designers" },
      { title: "For Builders & Developers", href: "/solutions/builders-developers" },
      { title: "Product & Package", href: "/solutions/packages" },
    ],
  },
  {
    title: "Projects",
    href: "/projects",
    links: [{ title: "Case Study Hub", href: "/projects" }],
  },
  {
    title: "Process",
    href: "/how-it-works",
    links: [
      { title: "Our Process", href: "/how-it-works" },
      { title: "Design to Delivery", href: "/how-it-works/design-to-delivery" },
      { title: "Timeline & Milestones", href: "/how-it-works/timeline-milestones" },
      { title: "Pricing Approach", href: "/how-it-works/pricing-approach" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    links: [
      { title: "Insights", href: "/resources/insights" },
      { title: "Guides", href: "/resources/guides" },
      { title: "Inspiration", href: "/resources/inspiration" },
      { title: "Tools", href: "/resources/tools" },
    ],
  },
  {
    title: "About",
    href: "/about",
    links: [
      { title: "Why Arcaya", href: "/about" },
      { title: "Quality Assurance", href: "/about/quality-assurance" },
      { title: "Delivery & Installation", href: "/about/delivery-installation" },
      { title: "Supply Chain Capability", href: "/about/supply-chain" },
      { title: "Our Capability", href: "/about/capabilities" },
      { title: "Partner Network", href: "/about/partner-network" },
      { title: "Careers", href: "/about/careers" },
      { title: "Contact", href: "/about/contact" },
    ],
  },
];

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : "");
  const copyrightName = COMPANY_NAME || SITE_NAME || "";

  return (
    <footer className="border-t border-border bg-background-alt text-sm text-text-tertiary">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-12 lg:px-12">
        <div className="flex flex-col gap-8">
          <Link className="flex items-center gap-3 text-text-primary" href="/">
            <LogoSquare size="sm" />
            <span className="font-display text-xl font-light uppercase tracking-wide">
              {SITE_NAME}
            </span>
          </Link>

          <nav className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {footerSitemap.map((section) => (
              <div key={section.title}>
                <Link
                  href={section.href}
                  className="font-body text-xs uppercase tracking-widest text-text-primary transition-colors hover:text-accent"
                >
                  {section.title}
                </Link>
                <ul className="mt-4 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href + link.title}>
                      <Link
                        href={link.href}
                        className="font-body text-sm text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="border-t border-border pt-6">
            <Link
              href="/about/contact"
              className="inline-flex items-center justify-center border border-text-primary bg-text-primary px-6 py-3 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith(".") ? "." : ""} All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest">
            <Link href="/privacy-policy" className="transition-colors hover:text-text-primary">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
