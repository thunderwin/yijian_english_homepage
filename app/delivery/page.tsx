"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const deliveryServices = [
  {
    title: "Logistics & Warehousing",
    href: "/delivery/logistics",
    description: "Ocean freight, customs, and last-mile delivery options",
  },
  {
    title: "Order Tracking",
    href: "/delivery/tracking",
    description: "Real-time portal with milestone visibility",
  },
  {
    title: "Installation Network",
    href: "/delivery/installation",
    description: "Licensed installers by region and trade",
  },
  {
    title: "Punch List & Aftercare",
    href: "/delivery/aftercare",
    description: "Warranty, replacements, and maintenance guides",
  },
  {
    title: "Compliance & Documentation",
    href: "/delivery/compliance",
    description: "Test reports, spec sheets, and customs docs",
  },
  {
    title: "Partner With Us",
    href: "/delivery/partner",
    description: "Join our logistics and installation network",
  },
];

export default function DeliveryPage() {
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
                Delivery &
                <br />
                <span className="text-text-tertiary">Support</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center"
            >
              <p className="mb-8 font-body text-lg font-light leading-relaxed text-text-secondary">
                End-to-end logistics and ongoing support. From factory floor to
                job site, with the documentation and aftercare your projects
                demand.
              </p>
              <Link
                href="/sign-in"
                className="inline-flex w-fit items-center justify-center border border-text-primary bg-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
              >
                Sign In to Portal
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Our Services
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliveryServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col border border-border bg-background p-8 transition-colors hover:border-accent"
                >
                  <h3 className="mb-2 font-display text-lg font-medium text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-6 flex-grow font-body text-sm text-text-tertiary">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
                    Learn more
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
