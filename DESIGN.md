---
name: Starlight Portfolio System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d8d9e5'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3fe'
  surface-container: '#ecedf9'
  surface-container-high: '#e6e8f3'
  surface-container-highest: '#e0e2ed'
  on-surface: '#181c23'
  on-surface-variant: '#414755'
  inverse-surface: '#2d3039'
  inverse-on-surface: '#eef0fc'
  outline: '#717786'
  outline-variant: '#c1c6d7'
  surface-tint: '#005bc1'
  primary: '#0058bc'
  on-primary: '#ffffff'
  primary-container: '#0070eb'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#5e5e63'
  on-secondary: '#ffffff'
  secondary-container: '#e0dfe4'
  on-secondary-container: '#626267'
  tertiary: '#9e3d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c64f00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#e3e2e7'
  secondary-fixed-dim: '#c7c6cb'
  on-secondary-fixed: '#1a1b1f'
  on-secondary-fixed-variant: '#46464b'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb595'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7c2e00'
  background: '#f9f9ff'
  on-background: '#181c23'
  surface-variant: '#e0e2ed'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

This design system is engineered for the elite iOS developer, merging the premium feel of Apple’s hardware marketing with the functional clarity of the Human Interface Guidelines. The brand personality is disciplined, meticulous, and "developer-first," evoking the feeling of a native system application while maintaining the warmth of a bespoke digital gallery.

The style is **Modern/Corporate with a touch of Glassmorphism**. It prioritizes extreme legibility, intentional white space, and subtle depth to showcase technical projects as high-end products. The interface should feel expensive, responsive, and deeply integrated into the Apple ecosystem.

## Colors

The palette is rooted in the "Starlight" ecosystem, providing a warm, sophisticated alternative to pure white. 

- **Starlight (#F5F5F7):** The canvas. Used for large background surfaces to reduce eye strain and provide a premium feel.
- **Apple Blue (#007AFF):** The catalyst. Reserved strictly for interactive elements, primary call-to-actions, and progress indicators.
- **Midnight (#1D1D1F):** The foundation. Used for high-contrast headlines and iconography to ensure a strong visual anchor.
- **Secondary Grey (#86868B):** The nuance. Used for long-form body text, metadata, and placeholder states to maintain a clear hierarchy without competing with headings.

## Typography

This system utilizes a tiered typography approach to mirror SF Pro's systematic feel. **Hanken Grotesk** provides a sharp, modern geometric edge for high-level headings, while **Inter** ensures maximum readability for technical documentation and project descriptions. **JetBrains Mono** is introduced for technical labels and code snippets to reinforce the developer persona.

Generous letter spacing (tracking) is applied to all labels to evoke a sense of high-end editorial design. Headings use tight tracking for a "compact" and impactful look.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. Content is centered within a maximum width of 1200px for desktop viewing to maintain a comfortable line length.

- **Desktop:** 12-column grid with 24px gutters and 80px side margins.
- **Tablet:** 8-column grid with 24px gutters and 40px side margins.
- **Mobile:** 4-column grid with 16px gutters and 20px side margins.

Vertical rhythm is strictly maintained using multiples of 8px. Large sections are separated by `xl` (80px) spacing to allow the work to "breathe."

## Elevation & Depth

Depth is conveyed through **Tonal Layering and Material Blurs**, avoiding heavy drop shadows in favor of ambient occlusion.

1.  **Level 0 (Base):** Starlight (#F5F5F7) solid background.
2.  **Level 1 (Cards):** White (#FFFFFF) surfaces with a 1px stroke of Secondary Grey at 10% opacity and a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)).
3.  **Level 2 (Modals/Overlays):** White (#FFFFFF) with a backdrop blur (20px) applied to the layers beneath, mimicking the iOS Control Center.

All shadows should use a tint of "Midnight" rather than pure black to maintain the warmth of the Starlight background.

## Shapes

The shape language is defined by "Continuous Curves" (squircular feel). A base radius of 12px-16px is used for all containers to align with iOS app icon aesthetics. 

- **Small elements (Buttons, Tags):** 12px radius.
- **Medium elements (Cards, Input fields):** 16px radius.
- **Large elements (Hero sections, Image containers):** 24px radius.
- **Interactive States:** On hover, rounded elements may subtly expand or increase in radius by 2px to signal interactivity.

## Components

### Buttons
- **Primary:** Apple Blue background, White text. 16px height padding, bold weight.
- **Secondary:** Transparent background, Apple Blue 1px border or Apple Blue text.
- **Action:** Circular buttons for iconography, using a light grey blur background.

### Cards
Project cards must feature a "Header-Image-Footer" structure. Images should have a 1px inner border to prevent "bleeding" into the Starlight background. Content within cards uses `headline-sm` for titles.

### Chips/Tags
Used for "Tech Stack" indicators. Midnight text on a White background with a 12px radius. For specialized roles (e.g., "SwiftUI"), use a light blue tint.

### Lists
Lists follow the "Settings" style: horizontal rows with a subtle divider line (1px, 5% Midnight) that does not extend to the full width of the container.

### Iconography
Strictly use SF Symbols style. Icons should have a consistent stroke weight that matches the `body-md` font weight. Icons are always centered within a 24x24px bounding box.
