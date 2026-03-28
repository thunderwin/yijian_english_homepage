"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const partnerTypes = [
  {
    title: "Developers & Investors",
    href: "/partners/developers",
    description: "Turnkey whole-home packages for $3M+ luxury estates",
    cta: "View Developer Solutions",
  },
  {
    title: "Interior Designers & Architects",
    href: "/partners/designers",
    description: "Trade program with 3D assets and exclusive discounts",
    cta: "Explore Trade Program",
  },
  {
    title: "General Contractors",
    href: "/partners/contractors",
    description: "Direct logistics and supply chain solutions",
    cta: "View Contractor Services",
  },
  {
    title: "Realtors & Referral Partners",
    href: "/partners/realtors",
    description: "Referral commissions for staging and furnishing clients",
    cta: "Join Referral Program",
  },
  {
    title: "Home Stagers",
    href: "/partners/stagers",
    description: "Fast-turn staging packages for luxury listings",
    cta: "View Staging Solutions",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-background px-6 pb-24 pt-32 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="font-display text-5xl font-light leading-tight tracking-tight text-text-primary lg:text-7xl">
                Partners &
                <br />
                <span className="text-text-tertiary">Professionals</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center"
            >
              <p className="mb-8 font-body text-lg font-light leading-relaxed text-text-secondary">
                Specialized programs for every role in luxury home development.
                From bulk procurement for developers to 3D tools for designers.
              </p>
              <Link
                href="/apply"
                className="inline-flex w-fit items-center justify-center border border-text-primary bg-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Find Your Program
            </h2>
          </div>

          <div className="grid gap-6">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={partner.href}
                  className="group flex flex-col items-start justify-between gap-4 border border-border bg-background p-8 transition-colors hover:border-text-primary lg:flex-row lg:items-center"
                >
                  <div>
                    <h3 className="mb-2 font-display text-xl font-medium text-text-primary">
                      {partner.title}
                    </h3>
                    <p className="font-body text-text-tertiary">
                      {partner.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 whitespace-nowrap font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors group-hover:text-accent">
                    {partner.cta}
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
