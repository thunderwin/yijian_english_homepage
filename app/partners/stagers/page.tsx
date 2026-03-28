"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const evidenceBadges = [
  { label: "Staging Turnaround", value: "7-14 Days" },
  { label: "Replacement SLA", value: "48h Emergency" },
  { label: "Style Packages", value: "12 Templates" },
];

const painPoints = [
  {
    role: "Team Lead",
    pain: "Coordinating multiple vendors for different properties",
    solution: "Single-source staging with style consistency",
  },
  {
    role: "Listing Coordinator",
    pain: "Tight timelines between listing agreement and market date",
    solution: "Pre-cur packages with 7-day turnaround",
  },
  {
    role: "Home Stager",
    pain: "Storage costs and inventory depreciation",
    solution: "Direct-to-site delivery, no warehousing needed",
  },
];

const stagingPackages = [
  {
    name: "Condo Starter",
    sqft: "800-1,500",
    rooms: "Living + 1 Bed + Bath",
    price: "$8,500",
    timeline: "7 days",
  },
  {
    name: "Spec Home",
    sqft: "2,500-4,000",
    rooms: "Full Home",
    price: "$28,000",
    timeline: "10 days",
  },
  {
    name: "Luxury Estate",
    sqft: "5,000-8,000",
    rooms: "Full Home + Outdoor",
    price: "$65,000",
    timeline: "14 days",
  },
  {
    name: "Model Home",
    sqft: "3,000+",
    rooms: "Multiple Units",
    price: "Custom",
    timeline: "Negotiable",
  },
];

export default function StagersPage() {
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
              For Listing Teams & Home Stagers
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
              <h1 className="font-display text-5xl font-light leading-tight tracking-tight text-text-primary lg:text-6xl">
                Stage the Home.
                <br />
                Strengthen
                <br />
                <span className="text-text-tertiary">the Listing.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center"
            >
              <p className="mb-8 font-body text-lg font-light leading-relaxed text-text-secondary">
                Complete staging packages for faster field turnaround and better listing
                presentation. Designed for teams managing multiple properties.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/apply?type=stager"
                  className="inline-flex items-center justify-center border border-text-primary bg-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
                >
                  Book Staging Consultation
                </Link>
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center border border-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-text-primary hover:text-white"
                >
                  View Collections
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points by Role */}
      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-light text-text-primary lg:text-4xl">
              Solutions for Every Role
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8"
              >
                <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-accent">
                  {point.role}
                </span>
                <h3 className="mb-3 font-display text-lg font-medium text-text-primary">
                  {point.pain}
                </h3>
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

      {/* Staging Packages */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Staging Packages by Property Type
            </h2>
            <p className="mx-auto max-w-2xl font-body text-text-tertiary">
              Pre-curated packages with fast turnaround for every listing tier
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {stagingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col justify-between border border-border p-6 sm:flex-row sm:items-center"
              >
                <div className="mb-4 sm:mb-0">
                  <h3 className="font-display text-xl font-medium text-text-primary">{pkg.name}</h3>
                  <p className="font-body text-sm text-text-tertiary">
                    {pkg.sqft} sqft • {pkg.rooms}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="block font-mono text-xl text-text-primary">{pkg.price}</span>
                    <span className="font-body text-xs text-text-muted">{pkg.timeline}</span>
                  </div>
                  <button className="border border-text-primary px-4 py-2 font-body text-xs uppercase tracking-widest transition-colors hover:bg-text-primary hover:text-white">
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Templates */}
      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Regional Style Templates
            </h2>
            <p className="font-body text-text-tertiary">
              Market-appropriate aesthetics for different geographies
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "California Modern", vibe: "Indoor-outdoor, light woods, neutral palette" },
              { name: "Florida Coastal", vibe: "Light and airy, soft blues, natural textures" },
              { name: "Texas Transitional", vibe: "Warm and grounded, mixed metals, leather" },
              { name: "Northeast Classic", vibe: "Traditional with edge, dark woods, jewel tones" },
            ].map((style, index) => (
              <motion.div
                key={style.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6"
              >
                <h3 className="mb-2 font-display text-lg font-medium text-text-primary">{style.name}</h3>
                <p className="font-body text-sm text-text-tertiary">{style.vibe}</p>
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
              Ready to Transform Your Listings?
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/apply?type=stager"
                className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-transparent hover:text-white"
              >
                Book Staging Consultation
              </Link>
              <Link
                href="/apply?type=trade"
                className="inline-flex items-center justify-center border border-white px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-text-primary"
              >
                Apply for Trade Account
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
