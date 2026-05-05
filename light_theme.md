---
name: Kinetic Portfolio System
colors:
  surface: '#f7f9ff'
  surface-dim: '#c9dcf3'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#edf4ff'
  surface-container: '#e3efff'
  surface-container-high: '#d9eaff'
  surface-container-highest: '#d1e4fb'
  on-surface: '#091d2e'
  on-surface-variant: '#3d4a3e'
  inverse-surface: '#203243'
  inverse-on-surface: '#e8f2ff'
  outline: '#6c7b6d'
  outline-variant: '#bbcbbb'
  surface-tint: '#006d37'
  primary: '#006d37'
  on-primary: '#ffffff'
  primary-container: '#2ecc71'
  on-primary-container: '#005027'
  inverse-primary: '#4ae183'
  secondary: '#006497'
  on-secondary: '#ffffff'
  secondary-container: '#77c2ff'
  on-secondary-container: '#004f79'
  tertiary: '#006b58'
  on-tertiary: '#ffffff'
  tertiary-container: '#32c8a7'
  on-tertiary-container: '#004f40'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bfe9c'
  primary-fixed-dim: '#4ae183'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005228'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#92ccff'
  on-secondary-fixed: '#001e31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#6ff9d6'
  tertiary-fixed-dim: '#4eddbb'
  on-tertiary-fixed: '#002019'
  on-tertiary-fixed-variant: '#005141'
  background: '#f7f9ff'
  on-background: '#091d2e'
  surface-variant: '#d1e4fb'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

This design system is engineered for the modern tech professional. It balances technical precision with a high-energy aesthetic, evoking feelings of innovation, growth, and reliability. The visual language is rooted in **Corporate Modern** with subtle **Glassmorphism** accents to provide depth without sacrificing clarity.

The personality is approachable yet authoritative. By utilizing a vibrant gradient-driven palette against clean, structured layouts, the design system ensures that the individual's work remains the focal point while the interface provides a premium, "built-to-last" feel. The target audience includes hiring managers, tech recruiters, and potential collaborators who value both aesthetic polish and functional simplicity.

## Colors

The color palette is strictly derived from the brand mark's gradient. 

- **Primary (#2ECC71):** Used for primary call-to-action buttons, success states, and progress indicators.
- **Secondary (#2980B9):** Applied to headings in light mode and secondary interactive elements in dark mode.
- **Tertiary (Teal):** Used for subtle accents, icons, and text links to bridge the gap between green and blue.

**Light Mode** utilizes a "Teal-Tinted Snow" background to reduce eye strain while maintaining a fresh look. **Dark Mode** employs a "Midnight Teal" foundation, using the secondary blue for subtle surface borders to maintain structural integrity in low light.

## Typography

**Manrope** has been selected for its geometric yet humanistic qualities. It provides excellent legibility at small sizes for technical documentation while offering a bold, striking presence for portfolio headlines.

- **Headlines:** Use tight letter spacing (-0.01em to -0.02em) to create a modern, high-end editorial feel.
- **Body Text:** Standard tracking with generous line heights to ensure long-form case studies remain readable.
- **Labels:** Uppercase styling for categories, tags, and small metadata to create a clear visual hierarchy between content and descriptors.

## Layout & Spacing

This design system uses a **Fixed Grid** model for desktop and a **Fluid Grid** for mobile devices. 

The layout relies on a 12-column system. Large sections are separated by an 80px vertical gap to provide mental "breathing room" between projects. Components follow a strict 8px base unit for all padding and margins, ensuring a rhythmic and predictable flow throughout the site. 

Internal card padding should be dynamic: `stack-md` (16px) for mobile and `stack-lg` (32px) for desktop surfaces.

## Elevation & Depth

To align with the tech-focused nature of the system, depth is achieved through **Tonal Layers** and **Ambient Shadows**.

- **Light Mode:** Use very soft, diffused shadows with a subtle teal tint (#2980B9 at 5% opacity). Avoid harsh black shadows.
- **Dark Mode:** Depth is created through surface color stepping (moving from a deeper background to a slightly lighter slate/teal surface). 
- **Glassmorphism:** Navigation bars and floating action buttons should utilize a `backdrop-filter: blur(12px)` with a semi-transparent border (1px) to suggest technical sophistication and transparency.

## Shapes

The shape language uses **Medium Roundness (8px)** to strike a balance between friendly approachability and professional rigor.

- **Primary Buttons:** 8px corner radius.
- **Cards & Containers:** 16px corner radius (`rounded-lg`).
- **Input Fields:** 8px corner radius.
- **Tags/Chips:** Fully rounded (pill-shaped) to distinguish them from interactive buttons.

This consistent use of the 8px base for corners provides a cohesive look that feels engineered rather than organic.

## Components

### Buttons
- **Primary:** Vibrant Green (#2ECC71) background with white text. High contrast, no shadow.
- **Secondary:** Deep Blue (#2980B9) outline with a 1px stroke. In Dark Mode, use a lighter teal variant for the outline.
- **Ghost:** Text-only with a subtle background hover state using the primary color at 10% opacity.

### Cards
Portfolio cards should feature a 1px border. In light mode, the border is a faint teal. In dark mode, the border uses a low-opacity variant of the secondary blue. Hover states should slightly lift the card via an ambient shadow and a 2px vertical translation.

### Inputs
Search and contact fields use a solid background (darker in light mode, lighter in dark mode) with a 2px bottom-only accent border that activates (turns green) on focus.

### Chips & Tags
Used for "Tech Stacks." These should be small, pill-shaped, and use a low-saturation version of the primary or secondary colors to avoid competing with main CTAs.

### Progress Indicators
For skills or project status, use the vibrant green-to-blue gradient to mirror the logo's aesthetic.