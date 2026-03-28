"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const evidenceBadges = [
  { label: "Referral Payout", value: "3-7%" },
  { label: "White-Glove Delivery", value: "Included" },
  { label: "Listing Support", value: "Full Service" },
];

const partnershipTypes = [
  {
    type: "Referral Partner",
    description: "Introduce clients who need staging or furnishing. We handle everything; you earn commission.",
    commitment: "No minimums",
  },
  {
    type: "Preferred Agent",
    description: "Formal relationship with co-marketing and priority scheduling for your listings.",
    commitment: "3+ listings/year",
  },
  {
    type: "Exclusive Partner",
    description: "White-label staging and furnishing as part of your full-service offering.",
    commitment: "10+ listings/year",
  },
];

const referralTypes = [
  "Pre-listing staging consultations",
  "Vacant home staging packages",
  "Model home furnishing",
  "New construction upgrades",
  "Buyer move-in packages",
  "Investor renovation support",
];

export default function RealtorsPage() {
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
              For Realtors & Referral Partners
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
                Help Listings
                <br />
                Show Better.
                <br />
                <span className="text-text-tertiary">Earn More.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center"
            >
              <p className="mb-8 font-body text-lg font-light leading-relaxed text-text-secondary">
                Add value to your clients without adding execution load. We handle staging,
                furnishing, and installation — you deliver a complete service experience.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/apply?type=realtor"
                  className="inline-flex items-center justify-center border border-text-primary bg-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
                >
                  Apply as Referral Partner
                </Link>
                <Link
                  href="/partners/stagers"
                  className="inline-flex items-center justify-center border border-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-text-primary hover:text-white"
                >
                  View Staging Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              What Agents Really Care About
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Client Satisfaction", desc: "Your clients get premium service that reflects on you" },
              { title: "Faster Closings", desc: "Better-presented homes sell faster and closer to ask" },
              { title: "Additional Income", desc: "Commission on furnishing without operational overhead" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 text-center"
              >
                <h3 className="mb-3 font-display text-xl font-medium text-text-primary">{item.title}</h3>
                <p className="font-body text-sm text-text-tertiary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Types */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-display text-3xl font-light text-text-primary">
                Referral Opportunities
              </h2>
              <ul className="space-y-4">
                {referralTypes.map((type, index) => (
                  <motion.li
                    key={type}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 border-b border-border pb-4 font-body text-text-secondary"
                  >
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {type}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-background-alt p-8 lg:p-12">
              <h3 className="mb-6 font-display text-2xl font-light text-text-primary">How It Works</h3>
              <ol className="space-y-6">
                {[
                  "Submit client information through partner portal",
                  "We qualify needs and prepare proposal",
                  "Client approves; we execute staging/furnishing",
                  "Commission paid at project completion",
                ].map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-mono text-sm text-accent">0{index + 1}</span>
                    <span className="font-body text-text-secondary">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Partnership Levels
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {partnershipTypes.map((tier, index) => (
              <motion.div
                key={tier.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8"
              >
                <h3 className="mb-2 font-display text-xl font-medium text-text-primary">{tier.type}</h3>
                <p className="mb-4 font-body text-sm text-text-tertiary">{tier.description}</p>
                <span className="inline-block border border-border px-3 py-1 font-mono text-xs text-text-muted">
                  {tier.commitment}
                </span>
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
              Join Our Partner Network
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/apply?type=realtor"
                className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-transparent hover:text-white"
              >
                Apply as Referral Partner
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-text-primary"
              >
                Book Partner Intro Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
