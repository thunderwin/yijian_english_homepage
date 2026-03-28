import Link from "next/link";
import Image from "next/image";
import { ProductCategoryQuickNav } from "components/content/product-category-quick-nav";

export const metadata = {
  title: "Home",
  description:
    "Arcaya provides end-to-end design, product, and delivery services for high-end residential projects.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="bg-background">
      <section className="relative isolate overflow-hidden px-6 pb-24 pt-32 lg:px-12 lg:pb-32">
        <Image
          src="/home-banner/arcaya-home-hero-banner-2240x1260.png"
          alt="Luxury interior living room"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-white/45" />
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h1 className="font-display text-5xl font-light leading-tight tracking-tight text-text-primary lg:text-7xl">
              Luxury Interiors.
              <br />
              Delivered
              <br />
              End to End.
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-body text-lg font-light leading-relaxed text-text-secondary">
              From design to product to delivery, Arcaya helps premium residential teams
              move projects forward with clearer scope, stronger coordination, and more
              predictable execution.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/about/contact"
                className="inline-flex items-center justify-center border border-text-primary bg-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
              >
                Book a Consultation
              </Link>
              <Link
                href="/resources/tools"
                className="inline-flex items-center justify-center border border-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-text-primary hover:text-white"
              >
                Upload Floor Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="w-full border-y border-border bg-[linear-gradient(90deg,#eef2ec_0%,#f6f4ee_55%,#f1f3f6_100%)] px-6 py-10 lg:px-12">
          <p className="font-mono text-sm uppercase tracking-widest text-text-tertiary">
            Arcaya Living
          </p>
          <h2 className="mt-3 font-display text-3xl font-light leading-tight text-text-primary lg:text-4xl">
            Design + Product + Delivery, Built as One Continuous System.
          </h2>
          <p className="mt-4 max-w-3xl font-body text-sm text-text-secondary lg:text-base">
            A panoramic delivery model for premium residences, combining style
            direction, product orchestration, and on-site execution in one team.
          </p>
        </div>
      </section>

      <ProductCategoryQuickNav />

      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-8 font-display text-3xl font-light text-text-primary lg:text-4xl">
            Choose Your Path
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "For Homeowners",
                description: "One partner from concept to handover.",
                href: "/solutions/homeowners",
              },
              {
                title: "For Architects & Designers",
                description: "Protect intent while improving execution.",
                href: "/solutions/architects-designers",
              },
              {
                title: "For Builders & Developers",
                description: "Control budget, timeline, and delivery risk.",
                href: "/solutions/builders-developers",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-border bg-background p-8 transition-colors hover:border-text-primary"
              >
                <h3 className="font-display text-2xl font-light text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm text-text-tertiary">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-8 font-display text-3xl font-light text-text-primary lg:text-4xl">
            How Arcaya Works
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "1. Consultation",
              "2. Proposal",
              "3. Quotation",
              "4. Production",
              "5. Delivery & Installation",
              "6. Aftercare & Warranty",
            ].map((step) => (
              <div key={step} className="border border-border bg-background-alt p-6">
                <p className="font-body text-sm text-text-secondary">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-8 font-display text-3xl font-light text-text-primary lg:text-4xl">
            Trust & Delivery Confidence
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Warranty support and structured aftercare",
              "Delay mitigation planning and escalation channels",
              "Project management coordination across stakeholders",
              "Local installation and delivery partner network",
            ].map((item) => (
              <div key={item} className="border border-border bg-background p-6">
                <p className="font-body text-sm text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
