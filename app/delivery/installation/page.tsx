"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-background px-6 pt-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="font-display text-4xl font-light text-text-primary">
          Coming Soon
        </h1>
        <p className="mt-4 font-body text-text-tertiary">
          This page is under construction.
        </p>
        <Link 
          href="/"
          className="mt-8 inline-flex items-center justify-center border border-text-primary bg-text-primary px-6 py-3 font-body text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-text-secondary"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
