import Image from "next/image";
import Link from "next/link";

export const productCategoryItems = [
  {
    title: "Furniture & Soft Furnishings",
    id: "furniture-soft-furnishings",
    image: "/category-img/archipen-chair-with-armrests-by-noom.jpg",
  },
  {
    title: "Custom Windows & Doors",
    id: "custom-windows-doors",
    image: "/category-img/wood-in-sideboard-by-de-padova-.jpg",
  },
  {
    title: "Stairs & Railings",
    id: "stairs-railings",
    image: "/category-img/kipu-club-armchair-by-lapalma-.jpg",
  },
  {
    title: "Cabinetry Systems",
    id: "cabinetry-systems",
    image: "/category-img/fin-dresser-by-ellison-studios.jpg",
  },
  {
    title: "Entry Doors, Fence & Gate",
    id: "entry-doors-fence-gate",
    image: "/category-img/oso-i-swivel-lounge-chair-by-more.jpg",
  },
  {
    title: "Garage Door",
    id: "garage-door",
    image: "/category-img/saki-leather-chair-by-gallotti-radice.jpg",
  },
];

type ProductCategoryQuickNavProps = {
  className?: string;
};

export function ProductCategoryQuickNav({
  className = "",
}: ProductCategoryQuickNavProps) {
  return (
    <section className={`px-6 py-12 lg:px-12 lg:py-14 ${className}`.trim()}>
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-text-tertiary">
              Category Quick Jump
            </p>
            <h2 className="mt-2 font-display text-3xl font-light text-text-primary lg:text-4xl">
              Jump to Product Categories
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {productCategoryItems.map((item) => (
            <Link
              key={item.id}
              href={`/products#${item.id}`}
              className="group overflow-hidden border border-border bg-background transition-colors hover:border-text-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={55}
                  sizes="(min-width: 1024px) 14vw, (min-width: 640px) 24vw, 48vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="font-display text-base font-light leading-snug text-text-primary">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
