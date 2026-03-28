"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const evidenceBadges = [
  { label: "Delivery SLA", value: "90-120 Days" },
  { label: "Missing/Replacement SLA", value: "72h Response" },
  { label: "Compliance Pack", value: "Full Docs Included" },
];

const painPoints = [
  {
    title: "Budget Overruns",
    stat: "30-40%",
    description: "Average cost overrun when sourcing from multiple vendors",
    solution: "Fixed package pricing with <5% variance guarantee",
  },
  {
    title: "Delivery Delays",
    stat: "6+ Months",
    description: "Typical delays coordinating international suppliers",
    solution: "Single timeline accountability with milestone tracking",
  },
  {
    title: "Quality Inconsistency",
    stat: "23%",
    description: "Items requiring replacement due to quality mismatches",
    solution: "Pre-approved samples with batch consistency protocols",
  },
];

const packageTiers = [
  {
    name: "Core",
    description: "Essential quality for investment properties",
    sqftPrice: "$85-120",
    includes: ["Premium finishes", "Contemporary furniture", "Standard lighting", "Basic decor"],
  },
  {
    name: "Signature",
    description: "Balanced luxury for competitive markets",
    sqftPrice: "$150-220",
    includes: ["Luxury materials", "Designer furniture", "Statement lighting", "Curated art"],
  },
  {
    name: "Landmark",
    description: "Ultra-premium for signature estates",
    sqftPrice: "$300-450",
    includes: ["Bespoke finishes", "Collector pieces", "Custom fixtures", "Commissioned art"],
  },
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-background px-6 pb-24 pt-32 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-mono text-sm uppercase tracking-widest text-accent">
              For Developers & Investors
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
                Build Faster.
                <br />
                Spend Smarter.
                <br />
                <span className="text-text-tertiary">Sell Higher.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center"
            >
              <p className="mb-8 font-body text-lg font-light leading-relaxed text-text-secondary">
                Turnkey whole-home packages for $3M-$10M luxury estates. From structural
                materials to finishing decor — one contract, one timeline, one delivery.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/apply"
                  className="inline-flex items-center justify-center border border-text-primary bg-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
                >
                  Talk to Our Project Managers
                </Link>
                <Link
                  href="/apply?type=corporate"
                  className="inline-flex items-center justify-center border border-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-text-primary hover:text-white"
                >
                  Apply for Corporate Account
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-light text-text-primary lg:text-4xl">
              The Real Cost of Fragmented Procurement
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
                <span className="mb-4 block font-mono text-4xl font-light text-accent">
                  {point.stat}
                </span>
                <h3 className="mb-3 font-display text-xl font-medium text-text-primary">
                  {point.title}
                </h3>
                <p className="mb-4 font-body text-sm text-text-tertiary">{point.description}</p>
                <div className="border-t border-border pt-4">
                  <span className="font-body text-xs uppercase tracking-widest text-text-tertiary">
                    Our Solution
                  </span>
                  <p className="mt-1 font-body text-sm text-text-secondary">{point.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Whole-Home Package Tiers
            </h2>
            <p className="mx-auto max-w-2xl font-body text-text-tertiary">
              From investment-grade to ultra-luxury — scalable solutions for every market position
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packageTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 ${index === 1 ? "border-2 border-accent" : "border border-border"}`}
              >
                {index === 1 && (
                  <span className="mb-4 inline-block bg-accent-subtle px-3 py-1 font-body text-xs uppercase tracking-widest text-accent">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-2 font-display text-2xl font-light text-text-primary">{tier.name}</h3>
                <p className="mb-6 font-body text-sm text-text-tertiary">{tier.description}</p>
                <div className="mb-6">
                  <span className="font-mono text-3xl font-light text-text-primary">{tier.sqftPrice}</span>
                  <span className="font-body text-sm text-text-tertiary"> / sqft</span>
                </div>

                <ul className="mb-8 space-y-3">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body text-sm text-text-secondary">
                      <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/apply"
                  className={`block text-center px-6 py-3 font-body text-xs font-medium uppercase tracking-widest transition-colors ${
                    index === 1
                      ? "bg-text-primary text-white hover:bg-text-secondary"
                      : "border border-text-primary text-text-primary hover:bg-text-primary hover:text-white"
                  }`}
                >
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
