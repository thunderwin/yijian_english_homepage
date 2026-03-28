import Link from "next/link";
import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "About",
  description: "Why clients choose Arcaya: integrated design, product, and delivery capability for high-end residential projects.",
};

const aboutLinks = [
  { title: "Quality Assurance", href: "/about/quality-assurance" },
  { title: "Delivery & Installation", href: "/about/delivery-installation" },
  { title: "Supply Chain Capability", href: "/about/supply-chain" },
  { title: "Our Capability", href: "/about/capabilities" },
  { title: "Partner Network", href: "/about/partner-network" },
  { title: "Careers", href: "/about/careers" },
  { title: "Contact", href: "/about/contact" },
];

export default function AboutPage() {
  return (
    <SectionPage
      kicker="About"
      title="Why Arcaya"
      description="Arcaya combines design coordination, product integration, and delivery execution so complex residential projects can move with greater certainty."
      highlights={[
        "Integrated design, product, and delivery model",
        "Experience in premium residential project execution",
        "Supply chain structure built for complexity",
        "Collaborative workflows for multi-party project teams",
      ]}
      links={[{ href: "/about/contact", label: "Book a Consultation", primary: true }]}
    >
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {aboutLinks.map((item) => (
          <Link key={item.href} href={item.href} className="border border-border bg-background p-6 font-body text-sm uppercase tracking-widest text-text-primary transition-colors hover:border-text-primary">
            {item.title}
          </Link>
        ))}
      </section>
    </SectionPage>
  );
}
