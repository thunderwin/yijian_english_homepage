import Link from "next/link";
import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Resources",
  description: "Resource center for insights, guides, inspiration, and practical project tools.",
};

const resourceCards = [
  { title: "Insights", description: "Industry perspectives on materials, budgeting, and delivery.", href: "/resources/insights" },
  { title: "Guides", description: "Downloadable checklists and playbooks for project teams.", href: "/resources/guides" },
  { title: "Inspiration", description: "Style references and visual directions by design language.", href: "/resources/inspiration" },
  { title: "Tools", description: "Practical tools for planning, budgeting, and file submission.", href: "/resources/tools" },
];

export default function ResourcesPage() {
  return (
    <SectionPage
      kicker="Resources"
      title="Knowledge, Downloads, and Tools in One Place"
      description="The resources center supports early-stage discovery and pre-sales education with practical content teams can use immediately."
      highlights={[
        "Articles on trends, material choices, and delivery operations",
        "Downloadable resources that help teams prepare project scope",
        "Inspiration content organized by residential style direction",
        "Tools that support budgeting, floor plan intake, and configuration",
      ]}
      links={[{ href: "/about/contact", label: "Request Custom Support", primary: true }]}
    >
      <section className="grid gap-6 md:grid-cols-2">
        {resourceCards.map((card) => (
          <Link key={card.href} href={card.href} className="border border-border bg-background p-8 transition-colors hover:border-text-primary">
            <h3 className="font-display text-2xl font-light text-text-primary">{card.title}</h3>
            <p className="mt-3 font-body text-sm text-text-tertiary">{card.description}</p>
          </Link>
        ))}
      </section>
    </SectionPage>
  );
}
