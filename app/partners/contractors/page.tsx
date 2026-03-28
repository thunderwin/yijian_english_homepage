"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const evidenceBadges = [
  { label: "Delivery SLA", value: "On-Time 94%" },
  { label: "Replacement SLA", value: "72h Response" },
  { label: "Coverage", value: "48 States" },
];

const painPoints = [
  {
    title: "Fragmented Shipments",
    description: "Managing 20+ suppliers means 20+ delivery schedules to coordinate",
    impact: "15-20 days average delay",
  },
  {
    title: "Missing Components",
    description: "Hidden dependencies between products cause site delays",
    impact: "$5K/day holding costs",
  },
  {
    title: "Quality Disputes",
    description: "Finger-pointing between manufacturers wastes project time",
    impact: "3-4 week resolution time",
  },
];

const capabilities = [
  {
    title: "Single Point Accountability",
    description: "One PO, one timeline, one delivery schedule for your entire finish package",
  },
  {
    title: "Pre-Consolidated Containers",
    description: "Materials staged and packed for your project sequence, not random arrival",
  },
  {
    title: "Real-Time Tracking",
    description: "Portal visibility from factory floor to job site with exception alerts",
  },
  {
    title: "Site-Ready Delivery",
    description: "White-glove options including unpacking, placement, and debris removal",
  },
];

const boqTemplates = [
  { phase: "Shell & Structure", items: "Framing, insulation, roofing, windows", format: "Excel / CSV" },
  { phase: "Interior Finishes", items: "Flooring, tile, millwork, paint", format: "Excel / CSV" },
  { phase: "Fixtures & Hardware", items: "Plumbing, lighting, door hardware", format: "Excel / CSV" },
  { phase: "FF&E Package", items: "Furniture, soft goods, art, accessories", format: "Excel / CSV" },
];

export default function ContractorsPage() {
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
              For General Contractors
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
                On-Time.
                <br />
                Complete.
                <br />
                <span className="text-text-tertiary">Site-Ready.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center"
            >
              <p className="mb-8 font-body text-lg font-light leading-relaxed text-text-secondary">
                Uncompromised logistics and direct-from-factory scale for custom builders.
                We handle the procurement complexity so you can focus on construction.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/apply?type=contractor"
                  className="inline-flex items-center justify-center border border-text-primary bg-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
                >
                  Request Logistics Consultation
                </Link>
                <Link
                  href="/delivery/tracking"
                  className="inline-flex items-center justify-center border border-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-text-primary hover:text-white"
                >
                  View Supply Chain Capabilities
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-light text-text-primary lg:text-4xl">
              What Delays Your Projects
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8"
              >
                <h3 className="mb-3 font-display text-xl font-medium text-text-primary">
                  {point.title}
                </h3>
                <p className="mb-4 font-body text-sm text-text-tertiary">{point.description}</p>
                <div className="border-t border-border pt-4">
                  <span className="font-mono text-sm text-accent">{point.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Built for General Contractors
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-border p-6"
              >
                <h3 className="mb-2 font-display text-lg font-medium text-text-primary">{cap.title}</h3>
                <p className="font-body text-sm text-text-tertiary">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOQ Templates */}
      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Download BOQ Templates
            </h2>
            <p className="font-body text-text-tertiary">
              Pre-formatted templates organized by construction phase
            </p>
          </div>

          <div className="grid gap-4">
            {boqTemplates.map((template, index) => (
              <motion.div
                key={template.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-start justify-between gap-4 border border-border bg-background p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-display text-lg font-medium text-text-primary">{template.phase}</h3>
                  <p className="font-body text-sm text-text-tertiary">{template.items}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-text-muted">{template.format}</span>
                  <button className="border border-text-primary px-4 py-2 font-body text-xs uppercase tracking-widest transition-colors hover:bg-text-primary hover:text-white">
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-text-primary px-8 py-16 text-center lg:px-16 lg:py-24"
          >
            <h2 className="mb-4 font-display text-3xl font-light text-white lg:text-5xl">
              Streamline Your Next Project
            </h2>
            <Link
              href="/apply?type=contractor"
              className="mt-8 inline-flex items-center justify-center border border-white bg-white px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-transparent hover:text-white"
            >
              Request a Logistics Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
