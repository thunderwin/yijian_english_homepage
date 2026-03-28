"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Navigation data structure based on menu_pages.md
const mainNavItems = [
  {
    title: "PARTNERS & PROFESSIONALS",
    href: "#",
    megaMenu: {
      columns: [
        {
          title: "By Role",
          links: [
            { title: "For Developers & Investors", href: "/partners/developers", description: "Turnkey whole-home packages for $3M+ estates" },
            { title: "For Interior Designers & Architects", href: "/partners/designers", description: "Trade program with 3D assets and exclusive discounts" },
            { title: "For General Contractors", href: "/partners/contractors", description: "Direct logistics & supply chain solutions" },
            { title: "For Owner's Reps & Procurement", href: "/partners/procurement", description: "Streamlined procurement for project managers" },
          ],
        },
        {
          title: "Partnership",
          links: [
            { title: "For Realtors & Referral Partners", href: "/partners/realtors", description: "Referral program for luxury real estate agents" },
            { title: "For Listing Teams & Home Stagers", href: "/partners/stagers", description: "Staging packages and fast-turn solutions" },
          ],
        },
      ],
    },
  },
  {
    title: "THE STUDIO",
    href: "#",
    megaMenu: {
      columns: [
        {
          title: "Design Tools",
          links: [
            { title: "3D Room Planner", href: "/studio/room-planner", description: "Launch cloud-based designer for immersive planning" },
            { title: "Curated Projects", href: "/studio/projects", description: "720° tours of US luxury estate installations" },
            { title: "Download 3D Assets", href: "/studio/assets", description: "GLB/OBJ/MAX/CAD materials and model packs" },
          ],
        },
      ],
    },
  },
  {
    title: "COLLECTIONS",
    href: "/collections",
    megaMenu: {
      columns: [
        {
          title: "By Phase",
          links: [
            { title: "Shell & Facade", href: "/collections/shell-facade", description: "Structural and exterior materials" },
            { title: "Interior Finishes", href: "/collections/interior-finishes", description: "Flooring, wall treatments, ceiling systems" },
            { title: "Fixtures & Lighting", href: "/collections/fixtures-lighting", description: "Hardware, plumbing, lighting solutions" },
            { title: "FF&E", href: "/collections/ffe", description: "Furniture, fixtures & equipment" },
            { title: "Decor & Art", href: "/collections/decor-art", description: "Finishing touches and artwork" },
          ],
        },
        {
          title: "By Style",
          links: [
            { title: "Modern Minimalism", href: "/collections/modern-minimalism", description: "Clean lines, geometric forms" },
            { title: "The Organic Form", href: "/collections/organic-form", description: "Natural shapes, biophilic design" },
            { title: "The Classics", href: "/collections/classics", description: "Timeless reinterpretations" },
          ],
        },
        {
          title: "Browse",
          links: [
            { title: "All Furniture", href: "/search/furniture", description: "Complete furniture catalog" },
            { title: "Building Materials", href: "/search/materials", description: "Premium construction materials" },
            { title: "New Arrivals", href: "/search/new-arrivals", description: "Latest additions to our collection" },
          ],
        },
      ],
    },
  },
  {
    title: "DELIVERY & SUPPORT",
    href: "#",
    megaMenu: {
      columns: [
        {
          title: "Logistics",
          links: [
            { title: "Logistics & Warehousing", href: "/delivery/logistics", description: "Ocean freight, customs, last-mile delivery" },
            { title: "Order Tracking", href: "/delivery/tracking", description: "Portal for milestone tracking and alerts" },
            { title: "Installation Network", href: "/delivery/installation", description: "Licensed installers by region and trade" },
          ],
        },
        {
          title: "Support",
          links: [
            { title: "Punch List & Aftercare", href: "/delivery/aftercare", description: "Warranty, replacements, maintenance guides" },
            { title: "Compliance & Documentation", href: "/delivery/compliance", description: "Test reports, spec sheets, customs docs" },
            { title: "Partner With Us", href: "/delivery/partner", description: "Join our logistics and installation network" },
          ],
        },
      ],
    },
  },
];

const utilityNavItems = [
  { title: "Start a Project", href: "/apply", primary: true },
  { title: "Sign In", href: "/sign-in", primary: false },
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[80] isolate border-b border-border bg-background transition-all duration-500"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Main Navigation */}
          <nav className="flex h-20 items-center justify-between px-6 lg:px-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-text-primary">
                <span className="font-display text-lg font-light text-white">YJ</span>
              </div>
              <span className="hidden font-display text-lg font-light tracking-wide lg:block">
                YIJIAN
              </span>
            </Link>

            {/* Desktop Main Nav */}
            <div className="hidden items-center gap-8 lg:flex">
              {mainNavItems.map((item) => (
                <div
                  key={item.title}
                  className="relative z-50"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`font-body text-xs font-medium tracking-widest transition-opacity duration-300 ${
                      activeMenu === item.title
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    {item.title}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {activeMenu === item.title && item.megaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute top-full left-1/2 z-[90] mt-4 w-max min-w-[600px] -translate-x-1/2 border border-border bg-white shadow-2xl"
                      >
                        <div className="grid grid-cols-2 gap-8 p-8">
                          {item.megaMenu.columns.map((column) => (
                            <div key={column.title}>
                              <h3 className="mb-4 font-display text-xs font-medium uppercase tracking-widest text-text-tertiary">
                                {column.title}
                              </h3>
                              <ul className="space-y-4">
                                {column.links.map((link) => (
                                  <li key={link.title}>
                                    <Link
                                      href={link.href}
                                      className="group block"
                                    >
                                      <span className="font-body text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
                                        {link.title}
                                      </span>
                                      <span className="mt-1 block font-body text-xs text-text-tertiary">
                                        {link.description}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Utility Nav */}
            <div className="flex items-center gap-4">
              {utilityNavItems.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`font-body text-xs font-medium tracking-widest transition-all duration-300 ${
                    item.primary
                      ? "border border-text-primary bg-text-primary px-6 py-3 text-white hover:bg-text-secondary"
                      : "px-4 py-3 text-text-primary hover:text-text-tertiary"
                  } ${index === 0 ? "hidden sm:inline-flex" : ""}`}
                >
                  {item.title}
                </Link>
              ))}

              {/* Mobile Menu Button */}
              <button
                className="flex h-10 w-10 items-center justify-center border border-border lg:hidden"
                aria-label="Open menu"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4H15M1 8H15M1 12H15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}
