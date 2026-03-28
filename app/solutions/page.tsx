import Link from "next/link";
import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Solutions",
  description: "Role-based solution pathways for homeowners, architects, designers, builders, and developers.",
};

const roleCards = [
  {
    title: "For Homeowners",
    description: "Unify style, budget, and execution from concept to handover.",
    href: "/solutions/homeowners",
  },
  {
    title: "For Architects & Designers",
    description: "Protect design intent while improving specification and execution speed.",
    href: "/solutions/architects-designers",
  },
  {
    title: "For Builders & Developers",
    description: "Reduce procurement risk with tighter cost and schedule control.",
    href: "/solutions/builders-developers",
  },
  {
    title: "Product & Package",
    description: "Standardized package options for faster quoting and approvals.",
    href: "/solutions/packages",
  },
];

export default function SolutionsPage() {
  return (
    <SectionPage
      kicker="Solutions"
      title="Different Roles. One Delivery System."
      description="Solutions pages translate Arkaya capabilities into role-specific outcomes so each stakeholder sees a clear path to decision and execution."
      highlights={[
        "Clear scope boundaries by role and project phase",
        "Aligned communication between owner, design, and build teams",
        "Integrated product, documentation, and logistics workflows",
        "Package-based thinking for faster decision-making and quoting",
      ]}
      links={[{ href: "/about/contact", label: "Book a Consultation", primary: true }]}
    >
      <section className="grid gap-6 md:grid-cols-2">
        {roleCards.map((card) => (
          <Link key={card.href} href={card.href} className="border border-border bg-background p-8 transition-colors hover:border-text-primary">
            <h3 className="font-display text-2xl font-light text-text-primary">{card.title}</h3>
            <p className="mt-3 font-body text-sm text-text-tertiary">{card.description}</p>
          </Link>
        ))}
      </section>
    </SectionPage>
  );
}
