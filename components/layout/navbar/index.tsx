"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Navigation data structure based on new_menu.md
const mainNavItems = [
  {
    title: "PRODUCTS",
    href: "/products",
    megaMenu: {
      columns: [
        {
          title: "Categories",
          links: [
            { title: "Furniture & Soft Furnishings", href: "/products", description: "Living, dining, bedroom, outdoor, and decor collections" },
            { title: "Custom Windows & Doors", href: "/products", description: "French and American style opening systems and finishes" },
            { title: "Stairs & Railings", href: "/products", description: "Structure, material, and visual-language coordinated stair systems" },
            { title: "Cabinetry Systems", href: "/products", description: "Kitchen, closet, vanity, and whole-home storage programs" },
          ],
        },
        {
          title: "Envelope & Exterior",
          links: [
            { title: "Entry Doors", href: "/products", description: "Architectural entry systems for premium residential projects" },
            { title: "Fence & Gate", href: "/products", description: "Exterior boundary and access packages with style consistency" },
            { title: "Garage Door", href: "/products", description: "Facade-aligned garage systems and durable hardware options" },
          ],
        },
      ],
    },
  },
  {
    title: "SOLUTIONS",
    href: "/solutions",
    megaMenu: {
      columns: [
        {
          title: "By Role",
          links: [
            { title: "For Homeowners", href: "/solutions/homeowners", description: "Unified design, sourcing, and delivery for complete homes" },
            { title: "For Architects & Designers", href: "/solutions/architects-designers", description: "Material support, specification alignment, and project execution" },
            { title: "For Builders & Developers", href: "/solutions/builders-developers", description: "Budget, timeline, and risk-controlled delivery workflows" },
            { title: "Product & Package", href: "/solutions/packages", description: "Furniture, finish, turnkey, and showhome package options" },
          ],
        },
      ],
    },
  },
  {
    title: "PROJECTS",
    href: "/projects",
  },
  {
    title: "PROCESS",
    href: "/how-it-works",
    megaMenu: {
      columns: [
        {
          title: "Process",
          links: [
            { title: "Our Process", href: "/how-it-works", description: "From consultation to aftercare in seven clear stages" },
            { title: "Design to Delivery", href: "/how-it-works/design-to-delivery", description: "How design intent is preserved through execution" },
            { title: "Timeline & Milestones", href: "/how-it-works/timeline-milestones", description: "Key checkpoints and accountability by project phase" },
            { title: "Pricing Approach", href: "/how-it-works/pricing-approach", description: "Cost logic, scope impacts, and package-based quoting" },
          ],
        },
      ],
    },
  },
  {
    title: "RESOURCES",
    href: "/resources",
    megaMenu: {
      columns: [
        {
          title: "Knowledge Center",
          links: [
            { title: "Insights", href: "/resources/insights", description: "Industry articles on trends, materials, and project delivery" },
            { title: "Guides", href: "/resources/guides", description: "Downloadable playbooks and checklists for project teams" },
            { title: "Inspiration", href: "/resources/inspiration", description: "Style-led references for concept and mood exploration" },
            { title: "Tools", href: "/resources/tools", description: "Budgeting, floor plan upload, and configuration workflows" },
          ],
        },
      ],
    },
  },
  {
    title: "ABOUT",
    href: "/about",
    megaMenu: {
      columns: [
        {
          title: "Company",
          links: [
            { title: "Why Arcaya", href: "/about", description: "Integrated design, sourcing, and delivery for premium residences" },
            { title: "Quality Assurance", href: "/about/quality-assurance", description: "Quality controls, standards, and warranty framework" },
            { title: "Delivery & Installation", href: "/about/delivery-installation", description: "How global sourcing connects to local execution" },
            { title: "Supply Chain Capability", href: "/about/supply-chain", description: "Factory network integration and response capacity" },
          ],
        },
        {
          title: "Network",
          links: [
            { title: "Our Capability", href: "/about/capabilities", description: "Design, product, PM, and cross-border delivery strengths" },
            { title: "Partner Network", href: "/about/partner-network", description: "Architects, builders, installers, and logistics partners" },
            { title: "Careers", href: "/about/careers", description: "Open roles and who thrives in our team" },
            { title: "Contact", href: "/about/contact", description: "Consultation, uploads, and multi-channel support contacts" },
          ],
        },
      ],
    },
  },
];

const utilityNavItems = [
  { title: "Book a Consultation", href: "/about/contact", primary: true },
];

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const activeNavItem = mainNavItems.find((item) => item.title === activeMenu);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleCloseMenu = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  const setActiveMenuByMousePosition = (clientX: number, clientY: number) => {
    const container = desktopNavRef.current;
    if (!container) return;
    const navRect = container.getBoundingClientRect();

    // Only switch by hover while the cursor is actually over the top nav strip.
    if (clientY < navRect.top || clientY > navRect.bottom) {
      return;
    }

    const triggerNodes = Array.from(
      container.querySelectorAll<HTMLElement>("[data-nav-trigger]"),
    );

    const hoveredTrigger = triggerNodes.find((node) => {
      const rect = node.getBoundingClientRect();
      return clientX >= rect.left && clientX <= rect.right;
    });

    const nextMenu = hoveredTrigger?.dataset.navTitle ?? null;
    setActiveMenu((prev) => (prev === nextMenu ? prev : nextMenu));
  };

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

  useEffect(() => {
    return () => {
      clearCloseTimer();
    };
  }, []);

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
                <span className="font-display text-lg font-light text-white">AL</span>
              </div>
              <span className="hidden font-display text-lg font-light tracking-wide lg:block">
                ARCAYA LIVING
              </span>
            </Link>

            {/* Desktop Main Nav */}
            <div
              ref={desktopNavRef}
              onMouseEnter={clearCloseTimer}
              onMouseMove={(event) =>
                setActiveMenuByMousePosition(event.clientX, event.clientY)
              }
              onMouseLeave={scheduleCloseMenu}
              className="relative hidden h-full items-center lg:flex"
            >
              {mainNavItems.map((item) => (
                <div
                  key={item.title}
                  data-nav-trigger
                  data-nav-title={item.title}
                  className="flex h-full items-center px-4"
                >
                  <Link
                    href={item.href}
                    className={`font-body text-sm font-medium tracking-widest transition-opacity duration-300 ${
                      activeMenu === item.title
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    {item.title}
                  </Link>
                </div>
              ))}

              {/* Fixed-position Mega Menu Dropdown */}
              <AnimatePresence>
                {activeNavItem?.megaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    onMouseEnter={clearCloseTimer}
                    onMouseLeave={scheduleCloseMenu}
                    className="fixed top-20 left-0 right-0 z-[90] w-screen border-b border-border bg-white shadow-2xl"
                  >
                    <div
                      className="mx-auto grid max-w-[1440px] gap-8 px-6 py-8 lg:px-12"
                      style={{
                        gridTemplateColumns: `repeat(${Math.max(activeNavItem.megaMenu.columns.length, 1)}, minmax(0, 1fr))`,
                      }}
                    >
                      {activeNavItem.megaMenu.columns.map((column) => (
                        <div key={column.title}>
                          <h3 className="mb-4 font-display text-sm font-medium uppercase tracking-widest text-text-tertiary">
                            {column.title}
                          </h3>
                          <ul className="space-y-4">
                            {column.links.map((link) => (
                              <li key={link.title}>
                                <Link href={link.href} className="group block">
                                  <span className="font-body text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
                                    {link.title}
                                  </span>
                                  <span className="mt-1 block font-body text-sm text-text-tertiary">
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

            {/* Utility Nav */}
            <div className="flex items-center gap-4">
              {utilityNavItems.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`font-body text-sm font-medium tracking-widest transition-all duration-300 ${
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
