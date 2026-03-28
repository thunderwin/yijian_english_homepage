# Design System — Luxury Home B2B Platform

## Product Context
- **What this is:** A B2B wholesale platform for luxury building materials, furnishings, and home decor targeting US high-end real estate market
- **Who it's for:** Real estate developers, interior designers, architects, general contractors, and home stagers working on $3M-$10M luxury estates
- **Space/industry:** B2B wholesale luxury interiors / Building materials supply chain
- **Project type:** Web application with marketing pages, dashboard, and 3D visualization integration

## Aesthetic Direction
- **Direction:** Quiet Luxury (老钱风/静奢风) + Architectural Minimalism
- **Decoration level:** Minimal — typography and whitespace do all the work
- **Mood:** Gallery-like restraint. The website is white walls and perfect lighting; the products are the art.
- **Core Principle:** "用极简、克制的黑白灰框架，去承托和放大我们产品库中材质本身的肌理、光影和设计感。网站本身要'退后'，让产品'上前'。"

## Typography

### Font Families
- **Display/Hero:** Outfit — Geometric, architectural, modernist. Perfect for conveying precision and contemporary luxury.
- **Body:** Inter — Clean, highly legible, neutral. Light (300) weight for elegance.
- **UI/Labels:** Inter (same as body) — Medium (500) weight for hierarchy
- **Data/Tables:** Roboto Mono — Conveys precision, industrial-grade B2B reliability. Essential for specs, dimensions, CAD data.

### Type Scale
| Level | Font | Weight | Size | Line Height | Letter Spacing | Usage |
|-------|------|--------|------|-------------|----------------|-------|
| Display XL | Outfit | 300 | 72px (4.5rem) | 1.0 | -0.02em | Hero headlines |
| Display L | Outfit | 300 | 56px (3.5rem) | 1.1 | -0.02em | Page titles |
| Display M | Outfit | 400 | 40px (2.5rem) | 1.2 | -0.01em | Section headers |
| Display S | Outfit | 400 | 32px (2rem) | 1.2 | -0.01em | Card titles |
| H1 | Outfit | 400 | 28px (1.75rem) | 1.3 | 0 | Major sections |
| H2 | Outfit | 500 | 24px (1.5rem) | 1.3 | 0 | Sub-sections |
| H3 | Inter | 500 | 20px (1.25rem) | 1.4 | 0 | Card headers |
| H4 | Inter | 500 | 16px (1rem) | 1.5 | 0 | Labels |
| Body L | Inter | 300 | 18px (1.125rem) | 1.7 | 0 | Lead paragraphs |
| Body | Inter | 400 | 16px (1rem) | 1.6 | 0 | Main text |
| Body S | Inter | 400 | 14px (0.875rem) | 1.5 | 0 | Secondary text |
| Caption | Inter | 400 | 12px (0.75rem) | 1.4 | 0.01em | Metadata, timestamps |
| Data | Roboto Mono | 400 | 14px (0.875rem) | 1.5 | 0 | Specs, dimensions |
| Data S | Roboto Mono | 400 | 12px (0.75rem) | 1.4 | 0 | Small data |

### Font Loading (Next.js)
```typescript
import { Outfit, Inter, Roboto_Mono } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
```

## Color System

### Approach
Restrained — 1 accent + neutrals. Color is rare and meaningful.

### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-background` | #FFFFFF | Main background |
| `--color-background-alt` | #F5F5F7 | Subtle section backgrounds |
| `--color-background-dark` | #1A1A1A | Immersive sections, dark mode |
| `--color-background-black` | #000000 | Maximum contrast sections |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text-primary` | #111111 | Primary text, headings |
| `--color-text-secondary` | #333333 | Body text |
| `--color-text-tertiary` | #7A7A7A | Captions, metadata |
| `--color-text-muted` | #9CA3AF | Disabled, placeholders |
| `--color-text-inverse` | #FFFFFF | Text on dark backgrounds |

### Border & Divider Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-border` | #E5E5E5 | Subtle dividers |
| `--color-border-strong` | #D4D4D4 | Form borders |
| `--color-border-inverse` | rgba(255,255,255,0.1) | Borders on dark bg |

### Accent Colors (Minimal Use)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-accent` | #C9A962 | Champagne gold — hover states, active indicators |
| `--color-accent-subtle` | rgba(201,169,98,0.1) | Subtle gold backgrounds |
| `--color-accent-warm` | #8B7355 | Warm wood tone — secondary accents |

### Semantic Colors (For B2B Dashboard)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | #10B981 | Success states |
| `--color-success-bg` | rgba(16,185,129,0.1) | Success backgrounds |
| `--color-warning` | #F59E0B | Warning states |
| `--color-warning-bg` | rgba(245,158,11,0.1) | Warning backgrounds |
| `--color-error` | #EF4444 | Error states |
| `--color-error-bg` | rgba(239,68,68,0.1) | Error backgrounds |
| `--color-info` | #3B82F6 | Information states |
| `--color-info-bg` | rgba(59,130,246,0.1) | Info backgrounds |

### Dark Mode Strategy
- Background: #1A1A1A (not pure black for comfort)
- Text: #FFFFFF primary, #E5E5E5 secondary, #9CA3AF tertiary
- Reduce saturation of semantic colors by 10-20%
- Gold accent remains but at slightly lower brightness

## Spacing System

### Base Unit
4px base unit with 8px practical minimum

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--space-0` | 0 | Reset |
| `--space-px` | 1px | Hairlines |
| `--space-0.5` | 2px | Micro adjustments |
| `--space-1` | 4px | Tightest spacing |
| `--space-2` | 8px | Compact spacing |
| `--space-3` | 12px | Small gaps |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 20px | Component padding |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Section gaps |
| `--space-10` | 40px | Large gaps |
| `--space-12` | 48px | Section padding |
| `--space-16` | 64px | Hero spacing |
| `--space-20` | 80px | Major sections |
| `--space-24` | 96px | Page sections |
| `--space-32` | 128px | Generous whitespace |
| `--space-40` | 160px | Maximum whitespace |

### Section Spacing
- Between major sections: 96px-128px (24-32)
- Hero section padding: 160px top, 128px bottom
- Content sections: 96px vertical padding
- Card internal padding: 24px-32px

## Layout

### Approach
Grid-disciplined — strict columns, predictable alignment. Architecture-like precision.

### Grid System
- 12-column grid
- Gutter: 24px (desktop), 16px (tablet), 12px (mobile)
- Max content width: 1440px
- Content width: 1200px
- Text measure: 720px (optimal reading width)

### Breakpoints
| Breakpoint | Width | Description |
|------------|-------|-------------|
| `xs` | < 640px | Mobile |
| `sm` | >= 640px | Large mobile |
| `md` | >= 768px | Tablet |
| `lg` | >= 1024px | Desktop |
| `xl` | >= 1280px | Large desktop |
| `2xl` | >= 1536px | Extra large |

### Border Radius Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | Sharp corners (most elements) |
| `--radius-sm` | 4px | Small elements, tags |
| `--radius-md` | 6px | Buttons, inputs |
| `--radius-lg` | 8px | Cards, modals |
| `--radius-xl` | 12px | Large cards, sections |
| `--radius-full` | 9999px | Pills, avatars |

## Motion & Animation

### Approach
Intentional — subtle entrance animations, meaningful state transitions. Luxuriously slow.

### Philosophy
- **Extremely restrained**: No bounce, no spring, no playful movement
- **Slow and smooth**: 0.6s-1.2s duration for major transitions
- **Purposeful**: Every animation guides the eye or confirms an action
- **Performance**: Use transform and opacity only, enable will-change

### Easing Functions
| Name | Value | Usage |
|------|-------|-------|
| `--ease-enter` | cubic-bezier(0.0, 0, 0.2, 1) | Elements entering |
| `--ease-exit` | cubic-bezier(0.4, 0, 1, 1) | Elements leaving |
| `--ease-move` | cubic-bezier(0.4, 0, 0.2, 1) | State changes |
| `--ease-luxury` | cubic-bezier(0.25, 0.1, 0.25, 1) | Slow, elegant |

### Duration Scale
| Name | Value | Usage |
|------|-------|-------|
| `--duration-micro` | 100ms | Micro-interactions |
| `--duration-fast` | 200ms | Hover states |
| `--duration-normal` | 300ms | Standard transitions |
| `--duration-slow` | 600ms | Major reveals |
| `--duration-luxury` | 1000ms | Hero animations, page transitions |

### Animation Patterns

#### Fade In Up (Primary entrance)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* Duration: 800ms, Easing: --ease-luxury */
```

#### Fade In (Subtle reveal)
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
/* Duration: 600ms, Easing: --ease-enter */
```

#### Ken Burns (Hero images)
```css
@keyframes kenBurns {
  from { transform: scale(1.1); }
  to { transform: scale(1.0); }
}
/* Duration: 8000ms, Easing: linear */
```

#### Hover Lift (Cards)
```css
transform: translateY(-4px);
box-shadow: 0 12px 40px rgba(0,0,0,0.08);
/* Duration: 400ms, Easing: --ease-move */
```

#### Underline Expand (Links)
```css
/* Underline grows from center */
transform: scaleX(0) → scaleX(1);
/* Duration: 300ms, Easing: --ease-enter */
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Component System

### Buttons

#### Primary Button
- Background: #111111 (fills on hover)
- Text: #FFFFFF
- Padding: 16px 32px
- Border-radius: 0 (sharp corners for architectural feel)
- Font: Inter 500, 14px, uppercase, letter-spacing 0.05em
- Hover: Background shifts to #333333
- Transition: all 400ms var(--ease-move)

#### Secondary Button
- Background: transparent
- Border: 1px solid #111111
- Text: #111111
- Hover: Background rgba(0,0,0,0.04)

#### Ghost Button
- Background: transparent
- Text: #111111
- Hover: Underline animation

#### Gold Accent Button (Special)
- Background: transparent
- Border: 1px solid #C9A962
- Text: #C9A962
- Hover: Background rgba(201,169,98,0.1)

### Cards

#### Standard Card
- Background: #FFFFFF
- Border: 1px solid #E5E5E5 or no border
- Border-radius: 0 (sharp corners)
- Padding: 32px
- Shadow: none (flat) or 0 4px 20px rgba(0,0,0,0.04) on hover
- Transition: transform 400ms, box-shadow 400ms

#### Image Card
- Aspect ratio: 4:5 or 16:9
- Object-fit: cover
- Overflow: hidden
- Image scale on hover: 1.05 over 600ms

### Form Elements

#### Text Input
- Background: #FFFFFF
- Border: 1px solid #E5E5E5
- Border-radius: 0
- Padding: 16px
- Font: Inter 400, 16px
- Focus: Border-color #111111, transition 200ms
- Placeholder: #9CA3AF

#### Select
- Same as input with custom dropdown arrow
- Chevron icon: Lucide ChevronDown

### Navigation

#### Main Navigation
- Background: transparent → #FFFFFF on scroll
- Height: 80px
- Padding: 0 48px
- Border-bottom: 1px solid transparent → #E5E5E5 on scroll
- Transition: all 300ms

#### Nav Links
- Font: Inter 400, 14px
- Color: #111111
- Hover: Opacity 0.6
- Active: Underline indicator

#### Mega Menu
- Background: #FFFFFF
- Shadow: 0 20px 60px rgba(0,0,0,0.1)
- Padding: 48px
- Animation: Fade in 300ms, slight Y translation

## Image Guidelines

### Treatment
- High-resolution only (minimum 2x for retina)
- Focus on material texture: marble grain, wood grain, brass patina, fabric weave
- Consistent color grading: neutral to warm, slightly desaturated
- No stock-photo styling — all images should feel bespoke

### Aspect Ratios
- Hero images: 16:9 or 21:9 (cinematic)
- Product cards: 4:5 (portrait)
- Gallery thumbs: 1:1 (square)
- Landscape project shots: 3:2

### Loading Strategy
- Use Next.js Image component with priority for above-fold
- Blur placeholder for all images
- Fade in on load with 600ms transition

## B2B-Specific Patterns

### Data Tables
- Font: Roboto Mono for all numbers/specs
- Header: uppercase, letter-spacing 0.05em
- Row height: 56px
- Border: 1px solid #E5E5E5
- Hover row: background #F5F5F7

### Spec Display
```
Dimensions    W: 2400mm | D: 900mm | H: 760mm
Material      Statuario Marble
Finish        Honed
Weight        450kg
```

### Trust Indicators
- "Evidence badges" — Delivery SLA, Replacement SLA, Compliance Pack
- Format: Label + Value in Roboto Mono
- Position: Hero section, pinned to bottom

### Project Cards
- Show: Project name, location, completion date
- Status badges: Active, Completed, Archived
- Quick actions: View, Download Specs, Request Quote

## Responsive Behavior

### Mobile Strategy
- Navigation collapses to hamburger menu
- Mega menus become full-screen overlays
- Grid collapses to single column
- Touch targets minimum 44px
- Typography scales down by ~15%

### Tablet
- 2-column grids
- Side-by-side layouts stack
- Navigation may show priority links only

## Implementation Notes

### Tailwind Config Extensions
```javascript
// tailwind.config.js additions
{
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F5F7',
          dark: '#1A1A1A',
        },
        foreground: {
          DEFAULT: '#111111',
          secondary: '#333333',
          tertiary: '#7A7A7A',
          muted: '#9CA3AF',
        },
        accent: {
          DEFAULT: '#C9A962',
          subtle: 'rgba(201,169,98,0.1)',
          warm: '#8B7355',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
    },
  },
}
```

### CSS Variables (globals.css)
```css
:root {
  /* Colors */
  --color-background: #FFFFFF;
  --color-background-alt: #F5F5F7;
  --color-background-dark: #1A1A1A;
  --color-text-primary: #111111;
  --color-text-secondary: #333333;
  --color-text-tertiary: #7A7A7A;
  --color-accent: #C9A962;
  --color-border: #E5E5E5;

  /* Animation */
  --ease-luxury: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-luxury: 1000ms;
}
```

---

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-28 | Initial design system | Created based on Quiet Luxury + Architectural Minimalism direction for luxury B2B building materials platform |
| 2026-03-28 | Outfit for display font | Geometric precision conveys architectural quality; more distinctive than Inter for headlines |
| 2026-03-28 | Roboto Mono for data | Critical for B2B credibility — specs must look precise and professional |
| 2026-03-28 | Champagne gold accent | Avoids generic blue/purple; fits luxury positioning; extremely restrained use |
| 2026-03-28 | Sharp corners (radius: 0) | Reinforces architectural/minimalist aesthetic |
| 2026-03-28 | Long animation durations | 0.6s-1.2s feels luxurious and unhurried; matches "quiet" philosophy |
