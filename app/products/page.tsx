import { productCategoryItems } from "components/content/product-category-quick-nav";
import { SectionPage } from "components/content/section-page";

export const metadata = {
  title: "Products",
  description: "Explore Arcaya product capabilities across furniture, finishes, custom millwork, and envelope systems.",
};

export default function ProductsPage() {
  return (
    <SectionPage
      kicker="Products"
      title="Product Systems for Complete High-End Residences"
      description="Arcaya organizes products by both category and project intent, so teams can specify faster and maintain design consistency from interior finishes to facade elements."
      highlights={[
        "Furniture & Soft Furnishings organized by room and style",
        "Custom windows and doors in French and American design languages",
        "Stair systems by structure, material, and architectural expression",
        "Cabinetry programs for kitchens, wardrobes, and vanity systems",
        "Exterior package coordination for entry doors, fencing, and garage doors",
        "Material durability and long-term maintenance considered during selection",
      ]}
      links={[
        { href: "/solutions/packages", label: "View Product Packages", primary: true },
        { href: "/about/contact", label: "Book a Consultation" },
      ]}
    >
      <section className="grid gap-6 md:grid-cols-2">
        {productCategoryItems.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="scroll-mt-28 border border-border bg-background p-8"
          >
            <h3 className="font-display text-2xl font-light text-text-primary">
              {item.title}
            </h3>
            <p className="mt-3 font-body text-sm text-text-tertiary">
              Category anchor section for rapid navigation and future product listing
              expansion.
            </p>
          </article>
        ))}
      </section>
    </SectionPage>
  );
}
