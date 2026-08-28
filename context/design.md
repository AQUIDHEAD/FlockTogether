---
name: Pondside Play
colors:
  surface: '#f4faff'
  surface-dim: '#ccdce7'
  surface-bright: '#f4faff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e7f6ff'
  surface-container: '#e0f0fb'
  surface-container-high: '#daebf5'
  surface-container-highest: '#d5e5ef'
  on-surface: '#0e1d25'
  on-surface-variant: '#424842'
  inverse-surface: '#23323a'
  inverse-on-surface: '#e3f3fd'
  outline: '#727972'
  outline-variant: '#c2c8c0'
  surface-tint: '#43664d'
  primary: '#43664d'
  on-primary: '#ffffff'
  primary-container: '#84a98c'
  on-primary-container: '#1c3e27'
  inverse-primary: '#aad0b1'
  secondary: '#3b6378'
  on-secondary: '#ffffff'
  secondary-container: '#bce5fe'
  on-secondary-container: '#3f687d'
  tertiary: '#785a00'
  on-tertiary: '#ffffff'
  tertiary-container: '#c49b35'
  on-tertiary-container: '#473400'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5eccc'
  primary-fixed-dim: '#aad0b1'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#2c4e36'
  secondary-fixed: '#c2e8ff'
  secondary-fixed-dim: '#a3cce4'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#214b60'
  tertiary-fixed: '#ffdf9b'
  tertiary-fixed-dim: '#edc157'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5b4300'
  background: '#f4faff'
  on-background: '#0e1d25'
  surface-variant: '#d5e5ef'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  title-md:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

The design system is centered on a "Pondside Play" aesthetic—a mix of serene nature and high-energy social gaming. The brand personality is whimsical, inclusive, and intentionally tactile. It utilizes a **Sticker-Book** design style, characterized by thick black outlines, vibrant flat colors, and exaggerated rounded corners.

The emotional response should be one of instant comfort and excitement. By using high-contrast borders and a "squishy" physical metaphor for interactive elements, the UI feels like a collection of physical magnets or stickers placed on a peaceful water surface. This approachable "toy-like" interface ensures that users of all ages feel welcome and ready to play.

## Colors

The palette is derived from a lush, midday pond.
- **Primary (Lily Pad Green):** Used for main action containers and success states.
- **Secondary (Duck-egg Blue):** The foundation for backgrounds and large surface areas, evoking calm water.
- **Tertiary (Mallard Yellow):** Reserved for primary CTA highlights and character-related UI elements.
- **Accent (Beak Orange):** Used for critical interactions, errors, or high-priority notifications.
- **Neutral (Deep Peat):** A very dark charcoal used exclusively for the "Sticker" outlines and primary text to maintain high legibility against the pastels.

Avoid pure black; the deep green-tinted charcoal provides a softer, more organic feel while maintaining the "bold border" aesthetic.

## Typography

This design system uses a trio of fonts to balance playfulness with clarity. 
- **Bricolage Grotesque** is the voice of the game; its quirky, variable-width character adds a "hand-drawn" feel to headlines and big score announcements. 
- **Be Vietnam Pro** handles the heavy lifting for instructions and descriptions, offering a friendly and highly readable geometric sans-serif experience. 
- **Space Grotesk** is used for technical labels (like "Game Code" or "Timer") to provide a subtle "tech-utility" contrast to the organic shapes.

All display text should feature a slight "bouncy" rhythm—occasional rotation (1-2 degrees) on large headlines can enhance the sticker aesthetic.

## Layout & Spacing

The layout follows a **Fluid Content** model with wide, safe margins to simulate the openness of a pond. 
- Content is centered in the viewport to keep players focused on the core game loop.
- Use a 12-column grid for desktop, but prioritize "Floating Groups"—UI elements that do not necessarily snap to a grid but float with generous padding (minimum 40px) between clusters.
- **Mobile First:** On mobile devices, elements stack vertically with a minimum 16px gutter.
- **Safe Areas:** Ensure that character avatars (the ducks) have a "no-fly zone" around them of at least 24px so the UI never overlaps the character art.

## Elevation & Depth

This design system eschews traditional shadows in favor of **Hard Offsets** and **Bold Borders**.
- **Level 0 (Water):** The flat background color.
- **Level 1 (Lily Pads/Cards):** Elements have a 3px solid "Neutral" border and a 4px solid "Neutral" bottom-right offset to create a 2D-depth effect (simulating a thick sticker).
- **Level 2 (Interactive):** When hovered or active, the offset increases to 8px, making the element look like it is lifting off the surface.
- **Interactive Feedback:** Upon being pressed, the offset returns to 0px, providing a "squish" tactile feel as if the button is being pushed into the water.

## Shapes

The shape language is dominated by **Organic Geometry**. 
- Buttons and containers use `rounded-lg` (1rem) as a base to maintain a friendly, soft appearance.
- Main game cards and "Join" containers use `rounded-xl` (1.5rem) to feel more like large, floating pads.
- Every shape must be enclosed in a thick (3px minimum) stroke. The strokes should have "round" joins and caps to ensure no sharp points exist anywhere in the interface.

## Components

### Buttons
Primary buttons use the Mallard Yellow with a thick Peat border. The label is centered in `label-bold`. On hover, the button should lift (offset shadow grows). On click, it should "squish" (offset shadow disappears and the button moves 4px down-right).

### Input Fields
Game code inputs should be oversized with a white background and a 4px Peat border. Use `display-lg` for the actual characters entered to ensure they are visible from across a room.

### Chips & Tags
Player names or status tags use `rounded-pill` shapes with the Secondary Blue. These should have a thinner 2px border to distinguish them from primary action buttons.

### Cards
Game lobby cards use the Lily Pad Green. They should feature a "die-cut" look—if multiple cards are present, they should overlap slightly like a deck of stickers.

### Progress Bars
Represented as a "Water Line." As time runs out, the water level (Duck-egg Blue) in a container drops, or a duck moves across a dashed line towards a finish line.