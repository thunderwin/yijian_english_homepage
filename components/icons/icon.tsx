import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarClock,
  ChevronDown,
  Download,
  FileCheck,
  FileText,
  HardHat,
  Layers,
  Menu,
  Minus,
  Package,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Upload,
  UserCog,
  Users,
  Warehouse,
  Wrench,
  X,
} from "lucide-react";
import type { LucideIcon, LucideProps } from "lucide-react";
import { CUSTOM_ICONS, type CustomIconName } from "./custom";

type LucideIconName =
  | "search"
  | "menu"
  | "x"
  | "shopping-cart"
  | "plus"
  | "minus"
  | "chevron-down"
  | "arrow-left"
  | "arrow-right"
  | "building"
  | "users"
  | "hard-hat"
  | "wrench"
  | "truck"
  | "warehouse"
  | "package"
  | "file-text"
  | "file-check"
  | "shield-check"
  | "download"
  | "upload"
  | "layers"
  | "calendar-clock"
  | "user-cog";

const LUCIDE_ICONS = {
  search: Search,
  menu: Menu,
  x: X,
  "shopping-cart": ShoppingCart,
  plus: Plus,
  minus: Minus,
  "chevron-down": ChevronDown,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  building: Building2,
  users: Users,
  "hard-hat": HardHat,
  wrench: Wrench,
  truck: Truck,
  warehouse: Warehouse,
  package: Package,
  "file-text": FileText,
  "file-check": FileCheck,
  "shield-check": ShieldCheck,
  download: Download,
  upload: Upload,
  layers: Layers,
  "calendar-clock": CalendarClock,
  "user-cog": UserCog,
} as const satisfies Record<LucideIconName, LucideIcon>;

export type IconName = LucideIconName | CustomIconName;

export type IconProps = Omit<LucideProps, "ref"> & {
  name: IconName;
  decorative?: boolean;
  label?: string;
};

export function Icon({
  name,
  decorative = true,
  label,
  size = 20,
  strokeWidth = 1.75,
  ...props
}: IconProps) {
  if (name in CUSTOM_ICONS) {
    const CustomIcon = CUSTOM_ICONS[name as CustomIconName];

    return (
      <CustomIcon
        width={size}
        height={size}
        aria-hidden={decorative ? true : undefined}
        aria-label={decorative ? undefined : label}
        role={decorative ? "presentation" : "img"}
        {...props}
      />
    );
  }

  const LucideComponent = LUCIDE_ICONS[name as LucideIconName];

  return (
    <LucideComponent
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : label}
      role={decorative ? "presentation" : "img"}
      {...props}
    />
  );
}
