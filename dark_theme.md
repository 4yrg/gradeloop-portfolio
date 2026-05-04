---
name: Neon Tech IDE
colors:
  surface: '#021525'
  surface-dim: '#021525'
  surface-bright: '#293b4d'
  surface-container-lowest: '#000f1e'
  surface-container-low: '#091d2e'
  surface-container: '#0e2132'
  surface-container-high: '#192b3d'
  surface-container-highest: '#243648'
  on-surface: '#d1e4fb'
  on-surface-variant: '#bbcbbb'
  inverse-surface: '#d1e4fb'
  inverse-on-surface: '#203243'
  outline: '#869486'
  outline-variant: '#3d4a3e'
  surface-tint: '#4ae183'
  primary: '#54e98a'
  on-primary: '#003919'
  primary-container: '#2ecc71'
  on-primary-container: '#005027'
  inverse-primary: '#006d37'
  secondary: '#92ccff'
  on-secondary: '#003351'
  secondary-container: '#006ea6'
  on-secondary-container: '#d7eaff'
  tertiary: '#58e5c2'
  on-tertiary: '#00382c'
  tertiary-container: '#32c8a7'
  on-tertiary-container: '#004f40'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
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
  background: '#021525'
  on-background: '#d1e4fb'
  surface-variant: '#243648'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max: 1440px
---

## Brand & Style
The design system is built for the high-velocity world of AI-driven development. It targets developers who demand high-performance tools that feel like the future. The aesthetic, "Neon Tech," combines the structural precision of a code editor with the electric energy of a cyberpunk interface.

The design movement is a fusion of **Glassmorphism** and **High-Contrast Bold**. It relies on deep, dark backgrounds to make vibrant neon accents pop, using translucency to maintain a sense of depth and multi-layered complexity without clutter. The emotional response is one of "flow state" empowerment—fast, futuristic, and technically superior.

## Colors
The palette is rooted in a deep "Neutral Navy" base that borders on true black to maximize the luminance of the neon accents. 

- **Primary Green (#2ECC71):** Used for "Success," "Active State," and primary "Execute" actions.
- **Secondary Blue (#2980B9):** Used for structural elements and secondary intelligence features.
- **Tertiary Aqua (#1ABC9C):** Acts as the bridge in gradients, used for highlighting AI-generated code.
- **Neon Glows:** Every primary color is paired with a matching "Glow" token (a translucent version of the hex) used for box-shadows and backdrop blurs to simulate light emission.

## Typography
The system uses a tri-font strategy. **Space Grotesk** provides a technical, geometric edge for headlines. **Be Vietnam Pro** ensures high readability for documentation and UI labels. **JetBrains Mono** is the soul of the system, used for all code blocks, terminal outputs, and data-heavy variables to maintain a professional developer feel.

High-contrast weights are preferred—pairing heavy bold headers with light, airy monospaced code to create a hierarchy of intent.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a 12-column structure, optimized for high-density information. In an IDE context, vertical real estate is prioritized; hence, sidebars and panels use a compact 4px base spacing unit.

Panels should be "dockable" and utilize the margin tokens for clear separation between the code editor and the AI agent chat interface.

## Elevation & Depth
Depth in this design system is achieved through **Glassmorphism** rather than traditional shadows.

1.  **Layer 0 (Base):** Solid #0B0E14 background.
2.  **Layer 1 (Panels):** Surface Navy (#2C3E50) at 60% opacity with a 12px backdrop blur.
3.  **Layer 2 (Popovers/Cards):** Surface Navy at 80% opacity with a 20px backdrop blur and a 1px "Neon Flow" gradient border.
4.  **The Glow:** Active elements emit a 15px-20px diffused shadow matching their specific neon color, simulating a light source behind the glass.

## Shapes
The design system utilizes **Soft (0.25rem)** corners to maintain a "high-tech instrument" look. While rounded enough to feel modern, they remain sharp enough to feel precise and professional. Buttons and input fields use the 0.25rem standard, while larger container cards may scale up to 0.5rem (rounded-lg) to soften the overall interface density.

## Components

- **Buttons:** Primary buttons use the "Neon Flow" gradient as a background with black text. They feature a persistent neon glow shadow. Secondary buttons are "Ghost" style with a 1px gradient border and no fill.
- **Glass Cards:** Used for AI suggestions. Features a vibrant 2px top-border gradient and a subtle inner glow.
- **Input Fields:** Dark, recessed backgrounds with a 1px Primary Green border that "ignites" (glows) when focused. Labels use `label-caps`.
- **Status Chips:** High-saturation backgrounds (e.g., solid #2ECC71) with white text, used for "Running," "Ready," or "Error."
- **Terminal Lists:** Monospaced JetBrains Mono text with varying colors based on log level (Blue for Info, Green for Success, Red for Error).
- **The Agent Pulse:** A unique component—a floating orb or border-ring that pulses with a Tertiary Aqua glow when the AI agent is processing code.