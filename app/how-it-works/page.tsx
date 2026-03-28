import Link from "next/link";
import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "How It Works",
  description: "Arkaya process from discovery to aftercare with clear stage outputs and ownership.",
};

const processSteps = [
  "1. Needs Consultation",
  "2. Concept & Scope Alignment",
  "3. Detail Development & Quotation",
  "4. Order Release & Production",
  "5. Shipping & Logistics Coordination",
  "6. Installation & Handover",
  "7. Aftercare & Warranty Support",
];

export default function HowItWorksPage() {
  return (
    <SectionPage
      kicker="How It Works"
      title="A Clear, Stage-Based Delivery Model"
      description="High-value projects need transparent process control. Arkaya breaks execution into clear stages with defined outputs and accountability."
      highlights={[
        "Each stage has a clear owner, output, and checkpoint",
        "Design and procurement handoff is controlled and documented",
        "Milestones are aligned to decisions, not vague timelines",
        "Aftercare is integrated into project closeout planning",
      ]}
      links={[
        { href: "/how-it-works/timeline-milestones", label: "View Timeline", primary: true },
        { href: "/how-it-works/pricing-approach", label: "See Pricing Approach" },
      ]}
    >
      <section className="grid gap-4 md:grid-cols-2">
        {processSteps.map((step) => (
          <div key={step} className="border border-border bg-background p-6">
            <p className="font-body text-sm text-text-secondary">{step}</p>
          </div>
        ))}
      </section>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/how-it-works/design-to-delivery" className="font-body text-sm uppercase tracking-widest text-text-primary underline-offset-4 hover:underline">
          Design to Delivery
        </Link>
        <Link href="/how-it-works/timeline-milestones" className="font-body text-sm uppercase tracking-widest text-text-primary underline-offset-4 hover:underline">
          Timeline & Milestones
        </Link>
        <Link href="/how-it-works/pricing-approach" className="font-body text-sm uppercase tracking-widest text-text-primary underline-offset-4 hover:underline">
          Pricing Approach
        </Link>
      </div>
    </SectionPage>
  );
}
