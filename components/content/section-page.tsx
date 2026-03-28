import Link from "next/link";
import { ReactNode } from "react";

type PageLink = {
  href: string;
  label: string;
  primary?: boolean;
};

type SectionPageProps = {
  kicker: string;
  title: string;
  description: string;
  highlights: string[];
  links?: PageLink[];
  children?: ReactNode;
};

export function SectionPage({
  kicker,
  title,
  description,
  highlights,
  links = [],
  children,
}: SectionPageProps) {
  return (
    <div className="min-h-screen bg-background px-6 pb-24 pt-32 lg:px-12 lg:pb-32">
      <div className="mx-auto max-w-[1440px]">
        <span className="font-mono text-sm uppercase tracking-widest text-accent">{kicker}</span>

        <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h1 className="font-display text-5xl font-light leading-tight tracking-tight text-text-primary lg:text-7xl">
              {title}
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-body text-lg font-light leading-relaxed text-text-secondary">
              {description}
            </p>
            {links.length > 0 && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                {links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className={`inline-flex items-center justify-center border px-6 py-3 font-body text-sm font-medium uppercase tracking-widest transition-colors ${
                      link.primary
                        ? "border-text-primary bg-text-primary text-white hover:bg-text-secondary"
                        : "border-text-primary text-text-primary hover:bg-text-primary hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <section className="mt-20 bg-background-alt p-8 lg:p-12">
          <h2 className="font-display text-3xl font-light text-text-primary lg:text-4xl">
            Key Focus
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="border border-border bg-background p-6">
                <p className="font-body text-sm text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {children ? <div className="mt-16">{children}</div> : null}
      </div>
    </div>
  );
}
