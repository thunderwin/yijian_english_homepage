"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const evidenceBadges = [
  { label: "Bid Turnaround", value: "48-72h" },
  { label: "Change Order Control", value: "<5% Variance" },
  { label: "Document Pack", value: "Spec + Compliance" },
];

const procurementRisks = [
  {
    title: "Scope Drift",
    pain: "BOQ and finish schedules diverge across design, purchasing, and site teams.",
    outcome: "Locked package scopes with revision tracking and approval gates.",
  },
  {
    title: "Vendor Fragmentation",
    pain: "Multiple vendors create inconsistent lead times, terms, and accountability.",
    outcome: "One procurement owner, one milestone plan, one escalation channel.",
  },
  {
    title: "Late Substitutions",
    pain: "Out-of-stock or non-compliant substitutes cause rework and timeline slips.",
    outcome: "Pre-approved alternates with controlled substitution matrix.",
  },
];

const executionSteps = [
  {
    step: "01",
    title: "Scope Alignment",
    detail: "Align BOQ, drawings, and finish intent with commercial constraints.",
  },
  {
    step: "02",
    title: "Bid & Package Structuring",
    detail: "Group categories into executable packages with milestone-level costing.",
  },
  {
    step: "03",
    title: "Sample & Compliance Review",
    detail: "Run sample sign-off, test docs, and risk checks before release.",
  },
  {
    step: "04",
    title: "PO Release & Tracking",
    detail: "Issue controlled POs and monitor progress from production to delivery.",
  },
];

const documentStack = [
  {
    name: "Procurement Control Sheet",
    format: "XLSX / CSV",
    purpose: "Budget bands, owners, milestone status, and variance alerts.",
  },
  {
    name: "Substitution Matrix",
    format: "PDF / XLSX",
    purpose: "Approved alternates by category, lead time, and compliance status.",
  },
  {
    name: "Compliance & Test Index",
    format: "PDF Bundle",
    purpose: "Spec sheets, test reports, and documentation references.",
  },
  {
    name: "Claims & Replacement SOP",
    format: "PDF",
    purpose: "Standard workflow for missing/damaged item closure with SLA.",
  },
];

export default function ProcurementPage() {
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
              For Owner&apos;s Reps & Procurement
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
                Control Budget.
                <br />
                Protect Timeline.
                <br />
                <span className="text-text-tertiary">Reduce Procurement Risk.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center"
            >
              <p className="mb-8 font-body text-lg font-light leading-relaxed text-text-secondary">
                Procurement coordination for luxury projects that need audit-ready control.
                From package strategy to claims closure, we give owner-side teams a
                predictable operating model.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/apply?type=procurement"
                  className="inline-flex items-center justify-center border border-text-primary bg-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
                >
                  Book Procurement Review
                </Link>
                <Link
                  href="/delivery/compliance"
                  className="inline-flex items-center justify-center border border-text-primary px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-text-primary hover:text-white"
                >
                  Request Spec Pack
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
              Why Procurement Breaks on High-End Projects
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {procurementRisks.map((risk, index) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8"
              >
                <h3 className="mb-3 font-display text-xl font-medium text-text-primary">
                  {risk.title}
                </h3>
                <p className="mb-4 font-body text-sm text-text-tertiary">{risk.pain}</p>
                <div className="border-t border-border pt-4">
                  <span className="font-body text-xs uppercase tracking-widest text-text-tertiary">
                    Arcaya Approach
                  </span>
                  <p className="mt-1 font-body text-sm text-text-secondary">{risk.outcome}</p>
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
              Procurement Execution Framework
            </h2>
            <p className="mx-auto max-w-2xl font-body text-text-tertiary">
              A controlled workflow designed for owner-side visibility and accountability
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {executionSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-border p-8"
              >
                <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-accent">
                  Step {item.step}
                </span>
                <h3 className="mb-2 font-display text-xl font-medium text-text-primary">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-text-tertiary">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-alt px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <h2 className="mb-4 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Documents & Controls
            </h2>
            <p className="font-body text-text-tertiary">
              Operational templates and compliance artifacts for procurement teams
            </p>
          </div>

          <div className="grid gap-4">
            {documentStack.map((doc, index) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-start justify-between gap-4 border border-border bg-background p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-display text-lg font-medium text-text-primary">{doc.name}</h3>
                  <p className="font-body text-sm text-text-tertiary">{doc.purpose}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  {doc.format}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-text-primary px-8 py-16 text-center lg:px-16 lg:py-24"
          >
            <h2 className="mb-4 font-display text-3xl font-light text-white lg:text-5xl">
              Build a Controlled Procurement Operation
            </h2>
            <p className="mx-auto max-w-2xl font-body text-white/80">
              Share your BOQ and target schedule. We&apos;ll map package structure, risk points,
              and milestone controls for your next project cycle.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/apply?type=procurement"
                className="inline-flex items-center justify-center border border-white bg-white px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-text-primary transition-colors hover:bg-transparent hover:text-white"
              >
                Talk to Our Project Managers
              </Link>
              <Link
                href="/sign-in"
                className="inline-flex items-center justify-center border border-white px-8 py-4 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-text-primary"
              >
                Sign In to Portal
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
