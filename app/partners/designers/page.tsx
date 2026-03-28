"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const evidenceBadges = [
  { label: "Trade Discount", value: "15-35%" },
  { label: "3D Asset Library", value: "10,000+ Models" },
  { label: "Response SLA", value: "48 Hours" },
];

const sharedCapabilities = [
  {
    title: "Full Category Access",
    description: "Furniture, materials, fixtures, lighting, textiles, and art",
  },
  {
    title: "Coohom Integration",
    description: "Direct import to your design workflow with real-time pricing",
  },
  {
    title: "Project Workspace",
    description: "Organize by client, room, or phase with team collaboration",
  },
  {
    title: "White-Glove Delivery",
    description: "Coordinated logistics with installation support",
  },
];

const architectFeatures = [
  {
    title: "Spec & Compliance Hub",
    description: "MasterFormat/CSI-indexed specifications, tear sheets, and test reports",
    cta: "Browse Spec Library",
  },
  {
    title: "BIM/CAD/Revit Families",
    description: "Production-ready families with version control and compatibility notes",
    cta: "Download Revit Assets",
  },
  {
    title: "Submittal & RFI Support",
    description: "48-hour response on substitution requests and technical inquiries",
    cta: "Submit RFI",
  },
  {
    title: "Performance Data",
    description: "Wind load, fire rating, acoustic, and structural performance specs",
    cta: "View Performance Sheets",
  },
];

const designerFeatures = [
  {
    title: "3D Asset Library",
    description: "GLB/OBJ/MAX formats with PBR materials for photorealistic rendering",
    cta: "Explore 3D Assets",
  },
  {
    title: "Coohom Workflow",
    description: "From floor plan to rendered proposal to BOM in one platform",
    cta: "See Workflow Demo",
  },
  {
    title: "Trade Program Tiers",
    description: "Volume-based discounts with confidential client pricing",
    cta: "View Discount Tiers",
  },
  {
    title: "Swatch Box Service",
    description: "Curated material samples delivered to your studio or client",
    cta: "Request Swatch Box",
  },
];

const tradeTiers = [
  {
    name: "Associate",
    requirement: "New relationship",
    discount: "15%",
    benefits: ["Standard catalog access", "Email support", "Quarterly lookbooks"],
  },
  {
    name: "Professional",
    requirement: "$50K annual volume",
    discount: "25%",
    benefits: ["Full 3D library", "Dedicated rep", "Priority sampling", "Coohom integration"],
  },
  {
    name: "Premier",
    requirement: "$200K annual volume",
    discount: "35%",
    benefits: ["Exclusive previews", "Custom sourcing", "White-glove service", "Project financing"],
  },
];

export default function DesignersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-background px-6 pb-24 pt-32 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-mono text-sm uppercase tracking-widest text-accent">
              For Interior Designers & Architects
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 flex flex-wrap gap-8 border-b border-border pb-6"
          >
            {evidenceBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col">
                <span className="font-body text-xs uppercase tracking-widest text-text-tertiary">
                  {badge.label}
                </span>
                <span className="font-mono text-sm text-text-primary">{badge.value}</span>
              </div>
            ))}
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="font-display text-5xl font-light leading-tight tracking-tight text-text-primary lg:text-7xl">
                Specify
                <br />
                Confidently.
                <br />
                <span className="text-text-tertiary">Design Faster.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center"
            >
              <p className="mb-8 font-body text-lg font-light leading-relaxed text-text-secondary">
                The complete toolkit for design professionals. One account, two specialized
                tracks — whether you&apos;re writing specifications or creating 3D proposals.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#architect-track"
                  className="inline-flex items-center justify-center border border-text-primary bg-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
                >
                  Architect Track
                </Link>
                <Link
                  href="#designer-track"
                  className="inline-flex items-center justify-center border border-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-text-primary hover:text-white"
                >
                  Designer Track
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shared Capabilities */}
      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              What Every Professional Gets
            </h2>
            <p className="mx-auto max-w-2xl font-body text-text-tertiary">
              Core capabilities included with every trade account
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sharedCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6"
              >
                <h3 className="mb-2 font-display text-lg font-medium text-text-primary">
                  {capability.title}
                </h3>
                <p className="font-body text-sm text-text-tertiary">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Selection */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Architect Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group border border-border bg-background p-8 transition-colors hover:border-text-primary lg:p-12"
            >
              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-accent">
                For Technical Specifiers
              </span>
              <h2 className="mb-4 font-display text-3xl font-light text-text-primary">
                Architect Track
              </h2>
              <p className="mb-8 font-body text-text-tertiary">
                Focused on compliance, performance data, and submittal-ready documentation.
                For architects, spec writers, and technical consultants.
              </p>
              <Link
                href="/apply?track=architect"
                className="inline-flex items-center gap-2 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:text-accent"
              >
                Create Professional Account
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Designer Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group border border-border bg-background p-8 transition-colors hover:border-accent lg:p-12"
            >
              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-accent">
                For Creative Professionals
              </span>
              <h2 className="mb-4 font-display text-3xl font-light text-text-primary">
                Designer Track
              </h2>
              <p className="mb-8 font-body text-text-tertiary">
                Built for visualization, client presentations, and rapid proposal generation.
                For interior designers, decorators, and stylists.
              </p>
              <Link
                href="/apply?track=designer"
                className="inline-flex items-center gap-2 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:text-accent"
              >
                Create Professional Account
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Architect Track Section */}
      <section id="architect-track" className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-accent">
              Architect Track
            </span>
            <h2 className="font-display text-3xl font-light text-text-primary lg:text-4xl">
              Specifications That Build
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {architectFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col bg-background p-8"
              >
                <h3 className="mb-2 font-display text-xl font-medium text-text-primary">
                  {feature.title}
                </h3>
                <p className="mb-6 flex-grow font-body text-text-tertiary">{feature.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-body text-sm text-text-primary transition-colors hover:text-accent"
                >
                  {feature.cta}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Track Section */}
      <section id="designer-track" className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-accent">
              Designer Track
            </span>
            <h2 className="font-display text-3xl font-light text-text-primary lg:text-4xl">
              Visualization That Sells
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {designerFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col border border-border p-8 transition-colors hover:border-accent"
              >
                <h3 className="mb-2 font-display text-xl font-medium text-text-primary">
                  {feature.title}
                </h3>
                <p className="mb-6 flex-grow font-body text-text-tertiary">{feature.description}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-body text-sm text-text-primary transition-colors hover:text-accent"
                >
                  {feature.cta}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Program Tiers */}
      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Trade Program Tiers
            </h2>
            <p className="mx-auto max-w-2xl font-body text-text-tertiary">
              Volume-based benefits that grow with your practice
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {tradeTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 ${index === 1 ? "border-2 border-accent bg-background" : "border border-border bg-background"}`}
              >
                {index === 1 && (
                  <span className="mb-4 inline-block bg-accent-subtle px-3 py-1 font-body text-xs uppercase tracking-widest text-accent">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-2 font-display text-2xl font-light text-text-primary">
                  {tier.name}
                </h3>
                <p className="mb-6 font-body text-sm text-text-tertiary">{tier.requirement}</p>

                <div className="mb-6">
                  <span className="font-mono text-4xl font-light text-accent">{tier.discount}</span>
                  <span className="font-body text-text-tertiary"> off MSRP</span>
                </div>

                <ul className="mb-8 space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 font-body text-sm text-text-secondary">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-text-primary px-8 py-16 text-center lg:px-16 lg:py-24"
          >
            <h2 className="mb-4 font-display text-3xl font-light text-white lg:text-5xl">
              Join the Professional Network
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-body text-lg text-white/70">
              Create your account today and start specifying with confidence. Approval typically
              takes 1-2 business days.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/apply?track=professional"
                className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-transparent hover:text-white"
              >
                Create Professional Account
              </Link>
              <Link
                href="/studio/assets"
                className="inline-flex items-center justify-center border border-white px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-text-primary"
              >
                Preview 3D Library
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
