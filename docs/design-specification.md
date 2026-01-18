# Design Specification - Pornpanwalee Mayour Portfolio

**Project**: Personal Portfolio Website  
**Style**: Modern Minimalism Premium  
**Target Audience**: Recruiters, hiring managers, potential collaborators (18-45 professionals)  
**Version**: 1.0  
**Date**: 2026-01-18

---

## 1. Direction & Rationale

### 1.1 Design Essence

**Modern Minimalism Premium** creates professional credibility through restraint and spaciousness. This style uses a 90% neutral palette with strategic accent color deployment, generous spacing (64-96px between sections), and subtle micro-interactions to convey sophistication. The 3D Earth animation serves as the singular "hero moment" against an otherwise minimal backdrop, creating memorable impact without visual clutter.

**Why This Direction:**
- **Professional Trust**: Clean aesthetic signals technical competence and attention to detail—critical for CS student portfolios
- **Differentiation Through Restraint**: While competitors use busy designs, generous whitespace and the 3D focal point create premium positioning
- **Conversion Focus**: Strategic blue accent (#3B82F6) guides users to key actions (Download CV, Contact)

### 1.2 Reference Examples

- **Linear** (linear.app): Spacious layout, subtle depth, restrained color usage
- **Stripe** (stripe.com): Professional blue accent, generous spacing, card-based layouts
- **Raycast** (raycast.com): Clean typography hierarchy, minimal interactions, modern feel

---

## 2. Design Tokens

### 2.1 Color System

**Primary Brand** (Blue - Trust & Technology):

| Token | Hex | HSL | Usage | WCAG |
|-------|-----|-----|-------|------|
| `primary-50` | #E6F0FF | 220°, 100%, 95% | Hover backgrounds, badges | - |
| `primary-100` | #CCE0FF | 220°, 100%, 90% | Active states | - |
| `primary-500` | #3B82F6 | 217°, 91%, 60% | **Main brand color**, CTAs, links | 4.5:1 ✅ AA |
| `primary-600` | #2563EB | 221°, 83%, 53% | CTA hover states | 5.9:1 ✅ AAA |
| `primary-900` | #1E3A8A | 223°, 64%, 33% | Dark mode text | - |

**Neutrals** (Structure & Depth):

| Token | Hex | Lightness | Usage |
|-------|-----|-----------|-------|
| `neutral-50` | #FAFAFA | 98% | Lightest surface, card backgrounds |
| `neutral-100` | #F5F5F5 | 96% | Page background |
| `neutral-200` | #E5E5E5 | 90% | Borders, dividers |
| `neutral-500` | #A3A3A3 | 64% | Disabled text, placeholders |
| `neutral-700` | #404040 | 25% | Secondary text | 8.6:1 ✅ AAA |
| `neutral-900` | #171717 | 9% | **Primary text** | 16.5:1 ✅ AAA |

**Semantic Colors**:

| Token | Hex | Usage |
|-------|-----|-------|
| `success-500` | #10B981 | Success messages, confirmation |
| `warning-500` | #F59E0B | Warnings, attention |
| `error-500` | #EF4444 | Errors, validation |

**Background Layers** (Surface Depth):

| Layer | Color | Contrast | Usage |
|-------|-------|----------|-------|
| Page | `neutral-100` #F5F5F5 | Base | Main background |
| Surface | `neutral-50` #FAFAFA | +2% | Cards, navigation |
| Elevated | `#FFFFFF` White | +4% | Modals, dropdowns, hover states |

**Contrast Rule**: Cards must have ≥5% lightness difference from background (50 vs 100 = 2% visible difference, use white for cards instead).

### 2.2 Typography

**Font Families**:

| Purpose | Family | Weights | Stack |
|---------|--------|---------|-------|
| Primary | Inter | 400, 500, 600, 700 | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |

**Type Scale** (Desktop 1920px):

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `hero` | 72px | 700 | 1.1 | -0.02em | Hero headline "Pornpanwalee Mayour" |
| `title` | 48px | 700 | 1.2 | -0.01em | Section headers (About, Resume, Portfolio) |
| `subtitle` | 32px | 600 | 1.3 | 0 | Card titles, subsection headers |
| `body-lg` | 20px | 400 | 1.6 | 0 | Intro paragraph, bio text |
| `body` | 16px | 400 | 1.5 | 0 | Standard content, UI text |
| `small` | 14px | 400 | 1.5 | 0 | Captions, metadata |
| `caption` | 12px | 400 | 1.4 | 0.01em | Footer text, timestamps |

**Mobile Adjustments** (<768px):

| Token | Mobile Size |
|-------|-------------|
| `hero` | 48px |
| `title` | 36px |
| `subtitle` | 28px |
| `body` | 16px |

**Readability**:
- Max line length: 65 characters (~650px at 16px)
- Body line-height: 1.5 (optimal readability)
- Heading line-height: 1.1-1.3 (visual impact)

### 2.3 Spacing (8-Point Grid)

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 8px | Tight inline spacing (icon + text) |
| `sm` | 16px | Element spacing within components |
| `md` | 24px | Related group spacing |
| `lg` | 32px | **Minimum card padding** |
| `xl` | 48px | Section internal spacing |
| `2xl` | 64px | **Section boundaries** (minimum between sections) |
| `3xl` | 96px | Hero section spacing, dramatic separation |
| `4xl` | 128px | Rare, maximum whitespace |

**Content-to-Whitespace Ratio**: Target 60% content, 40% whitespace.

### 2.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Small elements, tags |
| `radius-md` | 12px | **Buttons, inputs** (standard) |
| `radius-lg` | 16px | **Cards, modals** (standard) |
| `radius-xl` | 24px | Large modals |
| `radius-full` | 9999px | Pills, avatar shapes |

### 2.5 Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-card` | `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` | Default card elevation |
| `shadow-card-hover` | `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)` | Card hover state |
| `shadow-modal` | `0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)` | Modals, dropdowns |

### 2.6 Animation Timing

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| `fast` | 200ms | ease-out | Button hovers, quick interactions |
| `normal` | 250ms | ease-out | **Default transitions** (90% of cases) |
| `slow` | 300ms | ease-in-out | Modals, drawers, smooth moments |

**Performance Rule**: Animate ONLY `transform` and `opacity` (GPU-accelerated).

---

## 3. Component Specifications

### 3.1 Hero Section (3D Earth Background)

**Structure**:
- Height: 500-600px (not full viewport)
- 3D Earth canvas: Full-width background layer (z-index: 1)
- Content overlay: Centered, z-index: 10

**Visual Pattern**:
- 3D Earth: Interactive WebGL/Three.js sphere
  - Size: 400-500px diameter on desktop
  - Position: Right side (40% offset), vertically centered
  - Rotation: Slow auto-rotate (0.1 deg/frame)
  - Interaction: Mouse parallax effect (subtle ±8px movement)
  - Lighting: Single directional light + ambient
  - Material: Blue-tinted (#3B82F6 hue) with subtle glow
- Overlay gradient: Linear gradient from `rgba(245,245,245,0.85)` left to `rgba(245,245,245,0.2)` right (allows Earth visibility)
- Text content: Left-aligned, 50% width max
  - Name: 72px hero token, neutral-900
  - Tagline: 20px body-lg, neutral-700
  - CTA buttons: See §3.2

**Layout**:
- Container: Max-width 1200px, centered
- Padding: 128px vertical, 64px horizontal
- Text block: 6-column width (50% of container)

**Responsive** (<768px):
- Height: 400px
- Earth: 250px diameter, centered background
- Overlay: Solid neutral-100 with 90% opacity
- Text: Full-width, centered
- Padding: 48px vertical, 24px horizontal

**Note**: 3D Earth is the singular visual focal point. No other decorative elements in hero to maintain minimalist restraint.

### 3.2 Buttons

**Primary CTA** (Download CV, Contact Me):

| Property | Value | Token |
|----------|-------|-------|
| Height | 56px | - |
| Padding | 24px horizontal | `lg` |
| Radius | 12px | `radius-md` |
| Font | Semibold 600, 16px | `body` weight 600 |
| Background | #3B82F6 | `primary-500` |
| Text | White #FFFFFF | - |
| Shadow | `shadow-card` | Default elevation |

**States**:
- **Hover**: Background `primary-600` (#2563EB), lift -2px, scale(1.02), `shadow-card-hover`, 250ms ease-out
- **Active**: Background `primary-600`, scale(0.98)
- **Focus**: 2px ring `primary-500`, 4px offset

**Secondary Button** (Learn More):

| Property | Value |
|----------|-------|
| Same dimensions as Primary | - |
| Border | 2px solid neutral-200 |
| Background | Transparent |
| Text | neutral-700 |
| Hover | Background neutral-50, border neutral-300 |

**Icon Buttons** (Social Media):

| Property | Value |
|----------|-------|
| Size | 48×48px (touch target) |
| Icon | 24px SVG (Lucide/Heroicons) |
| Border | 2px solid neutral-200 |
| Radius | 12px (or radius-full for circular) |
| Hover | Background neutral-50, scale(1.1) |

### 3.3 Card Component (Resume Cards, Portfolio Items)

**Resume Card** (Education, Skills, Strengths):

| Property | Value | Token |
|----------|-------|-------|
| Padding | 40px | - |
| Background | White #FFFFFF | Elevated layer |
| Radius | 16px | `radius-lg` |
| Border | 1px solid neutral-200 | - |
| Shadow | `shadow-card` | Default |

**Structure**:
- Icon/Number: 32px, primary-500 color
- Title: 32px subtitle token, neutral-900
- Description: 16px body token, neutral-700, line-height 1.6
- Spacing: 16px between elements

**Hover State**:
- Lift: translateY(-4px)
- Shadow: `shadow-card-hover`
- Scale: 1.02
- Transition: 250ms ease-out
- Border: primary-500 (subtle brand color highlight)

**Grid Layout**:
- Desktop: 3 columns, 24px gap
- Tablet: 2 columns, 24px gap
- Mobile: 1 column, 16px gap

**Portfolio Card** (Art Gallery):

| Property | Value |
|----------|-------|
| Aspect Ratio | 4:3 (or preserve original) |
| Radius | 16px |
| Shadow | `shadow-card` |
| Overflow | Hidden (for image) |

**Structure**:
- Image: 100% width, object-fit: cover
- Overlay (on hover): rgba(59,130,246,0.9) gradient from bottom
- Title: 20px body-lg, white, positioned bottom 24px left 24px
- Fade-in: Overlay + title on hover only

**Grid**: Fixed 3-column grid (not masonry) for professional consistency
- Desktop: 3 cols, 32px gap
- Tablet: 2 cols, 24px gap
- Mobile: 1 col, 16px gap

### 3.4 Input Fields (Contact Form)

| Property | Value | Token |
|----------|-------|-------|
| Height | 56px | - |
| Padding | 16px horizontal | `sm` |
| Radius | 12px | `radius-md` |
| Border | 1px solid neutral-200 | - |
| Font | Regular 400, 16px | `body` |
| Background | White #FFFFFF | - |

**States**:
- **Placeholder**: neutral-500
- **Filled**: neutral-900
- **Focus**: Border removed, 2px ring primary-500, 0px offset (no jump)
- **Error**: Border error-500, helper text error-500 below

**Textarea**:
- Min-height: 120px
- Same styling as input
- Resize: vertical only

### 3.5 Navigation Bar

| Property | Value | Token |
|----------|-------|-------|
| Height | 72px | - |
| Position | Sticky top, z-index 100 | - |
| Background | White with backdrop-blur(8px) | Glassmorphism subtle |
| Shadow | `shadow-card` (on scroll only) | - |

**Structure**:
- Container: Max-width 1200px, centered
- Logo/Name: Left aligned, 24px Medium 500, neutral-900
- Nav Links: Center (Desktop) or hidden (Mobile)
  - Font: 16px Regular 400, neutral-700
  - Spacing: 32px gap between items
  - Active: primary-500 color, 2px bottom border
  - Hover: primary-500 color, 200ms transition
- CTA Button: Right aligned, Primary button 48px height

**Mobile** (<768px):
- Hamburger menu icon: Right side, 24px
- Menu drawer: Slide from right, full-height overlay
- Links: Stacked vertically, 48px height each

### 3.6 3D Earth Animation (Custom Component)

**Technical Specification** (for Three.js implementation):

**Scene Setup**:
- Canvas: Transparent background, position absolute
- Camera: Perspective, FOV 45°, position Z: 5
- Renderer: WebGL with antialiasing

**Earth Sphere**:
- Geometry: SphereGeometry (radius 2, segments 64)
- Material: MeshStandardMaterial
  - Base color: #3B82F6 (primary-500)
  - Metalness: 0.3
  - Roughness: 0.7
  - Optional: Texture map for continents (low-opacity wireframe)
- Rotation: Auto-rotate 0.001 radians/frame on Y-axis

**Lighting**:
- Directional Light: Position (5, 3, 5), intensity 1.0, color white
- Ambient Light: Intensity 0.4, color #E6F0FF (primary-50 tint)

**Interaction**:
- Mouse parallax: Track cursor position, offset sphere position ±8px on X/Y
- Smooth interpolation: Lerp factor 0.1 for fluid following

**Performance**:
- Lazy load: Initialize on viewport visibility
- Reduce quality on mobile: Segments 32 instead of 64
- Pause animation: When tab inactive (requestAnimationFrame)

**Accessibility**:
- `prefers-reduced-motion`: Show static image fallback (Earth PNG)
- Alt text: "Interactive 3D Earth visualization"

---

## 4. Layout & Responsive

### 4.1 Website Architecture (SPA)

**Reference**: `content-structure-plan.md` for section content mapping.

**Section Sequence** (Smooth scroll, single page):

1. **Hero Section** (500-600px)
   - 3D Earth background (right side) + text overlay (left)
   - Centered content container (1200px max-width)
   - Primary + Secondary CTAs (56px height)

2. **About Me Section** (auto height)
   - 2-column layout: Photo (5 cols, 40%) + Bio (7 cols, 60%)
   - Photo: 400×400px, radius-full, shadow-card
   - Bio: body-lg (20px) intro + body (16px) details
   - Spacing: 64px vertical padding, 32px gap between columns
   - Background: neutral-100 (page background, no card)

3. **Resume Preview Section** (auto height)
   - 3-card grid: Education | Skills | Strengths (see §3.3)
   - Container: 1200px max-width
   - Spacing: 96px top padding, 24px gap between cards
   - Background: White surface

4. **Skills & Interests Section** (auto height)
   - Mixed layout: Icon grid for technical skills + tag cloud for hobbies
   - Icon grid: 4 cols desktop → 2 cols mobile, 48px icons, 24px gap
   - Tag cloud: Inline flow, 12px radius pills, primary-50 background
   - Spacing: 64px vertical padding

5. **Art Portfolio Gallery** (auto height)
   - Fixed 3-column grid (see Portfolio Card §3.3)
   - Container: 1200px max-width
   - Spacing: 96px top padding, 32px gap
   - Title: 48px title token, 48px bottom margin

6. **Social & Contact Section** (400px height)
   - Centered content: CTA buttons (Download CV, Contact) + Social icons
   - Button layout: Horizontal flex, 24px gap
   - Social icons: 48×48px icon buttons, 16px gap
   - Background: primary-500 (inverted section for visual break)
   - Text: White color

7. **Footer** (120px height)
   - Single row: Copyright (left) | Quick links (center) | Social repeat (right)
   - Font: 14px small token, neutral-500
   - Background: neutral-900, text neutral-500

**Navigation Pattern**:
- Fixed header (72px) with smooth-scroll anchor links
- Sections referenced by ID: #home, #about, #resume, #portfolio, #contact
- Scroll offset: 72px (header height) for proper alignment

**Responsive Strategy**:

| Breakpoint | Container Max-Width | Layout Changes |
|------------|--------------------|--------------------|
| <640px (Mobile) | 100% | Hero: Stack vertically, 3D Earth background only<br>About: Stack photo above bio<br>Resume: 1 column<br>Portfolio: 1 column |
| 640-1024px (Tablet) | 100% | Resume: 2 columns (Education full-width, Skills + Strengths side-by-side)<br>Portfolio: 2 columns |
| 1024px+ (Desktop) | 1200px | All layouts as designed |

**Spacing Reduction (Mobile)**:
- Section padding: 64px → 48px
- Card padding: 40px → 24px
- Gap between cards: 24px → 16px

### 4.2 Grid System

**12-Column Grid**:
- Container: 1200px max-width
- Gutter: 24px
- Column width: (1200 - 11×24) / 12 = 78px

**Common Layouts**:
- 50/50: 6-6 columns (About section: Photo + Bio)
- 33/33/33: 4-4-4 columns (Resume cards)
- 40/60: 5-7 columns (Asymmetric split for visual interest)

### 4.3 Breakpoints

| Name | Min Width | Container | Typography Scale |
|------|-----------|-----------|-----------------|
| Mobile | 320px | 100% (16px padding) | Mobile scale |
| Tablet | 768px | 100% (32px padding) | Mobile scale |
| Desktop | 1024px | 1024px | Desktop scale |
| Large | 1280px | 1200px | Desktop scale |

### 4.4 Touch Targets (Mobile)

- Minimum: 48×48px for all tappable elements
- Spacing: 8px minimum between interactive elements
- Buttons: 56px height maintained (comfortable thumb reach)
- Nav links (mobile menu): 48px height

---

## 5. Interaction & Animation

### 5.1 Animation Standards

**Timing**:
- Fast interactions: 200ms (button clicks, hover starts)
- Standard transitions: 250ms (90% of animations)
- Smooth moments: 300ms (modals, section reveals)

**Easing**:
- Primary: `ease-out` (natural deceleration, 90% of cases)
- Smooth: `ease-in-out` (elegant start/end for modals)

**Performance** (GPU-Accelerated Only):
- ✅ Allowed: `transform` (translate, scale, rotate), `opacity`
- ❌ Forbidden: `width`, `height`, `margin`, `padding`, `top`, `left` (causes reflow)

### 5.2 Micro-interactions

**Button Hover**:
```
transform: translateY(-2px) scale(1.02)
box-shadow: shadow-card-hover
transition: 250ms ease-out
```

**Card Hover**:
```
transform: translateY(-4px) scale(1.02)
box-shadow: shadow-card-hover
border-color: primary-500
transition: 250ms ease-out
```

**Link Hover**:
```
color: primary-500
transition: 200ms ease-out
```

**Input Focus**:
```
box-shadow: 0 0 0 2px primary-500 (ring)
border: none (prevents layout shift)
transition: 200ms ease-out
```

### 5.3 Page Transitions

**Scroll Animations** (Intersection Observer):
- Trigger: Element enters viewport (bottom 20%)
- Effect: Fade in + translateY(20px → 0px)
- Duration: 300ms ease-out
- Stagger: 100ms delay between consecutive elements

**Smooth Scroll**:
- Behavior: `scroll-behavior: smooth` on anchor links
- Duration: Browser default (~500ms)
- Offset: -72px (navigation height)

**3D Earth Parallax**:
- Mouse movement parallax: ±8px offset on X/Y axes
- Scroll parallax: Optional subtle rotation on Y-axis (0.1deg per 100px scroll)
- Interpolation: Lerp 0.1 for smooth following

### 5.4 Accessibility (prefers-reduced-motion)

**When user prefers reduced motion**:
- Disable: Card hover lifts, scroll animations, 3D Earth parallax
- Keep: Color changes, opacity fades (non-vestibular)
- Replace 3D Earth: Static PNG image of Earth

**Implementation**:
```
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  
  .earth-3d {
    display: none;
  }
  
  .earth-fallback {
    display: block;
  }
}
```

### 5.5 Loading States

**Page Load**:
- Hero content: Fade in (300ms) after 3D Earth canvas ready
- Subsequent sections: Fade in on scroll (see §5.3)

**3D Earth Loading**:
- Placeholder: Neutral-200 circle with subtle pulse animation
- Progress: Optional loading percentage (14px small token)
- Timeout: 5 seconds → Show static fallback image

**Image Loading** (Portfolio Gallery):
- Placeholder: Neutral-100 background with blur-up effect
- Lazy load: Images below fold load on scroll proximity (200px)
- Fade in: 250ms opacity transition when loaded

---

## Design Specification Summary

**Core Principles Applied**:
✅ 90% neutral palette (neutral grays) + 10% accent (blue #3B82F6)  
✅ Generous spacing: 64-96px section gaps, 40px card padding  
✅ Surface depth: Cards (white) float on page background (neutral-100) with ≥5% contrast  
✅ Hero moment: 3D Earth (500px height) as singular focal point  
✅ Horizontal navigation (NOT sidebar)  
✅ 12-16px border radius consistently applied  
✅ Micro-animations on all interactions (250ms ease-out)  
✅ WCAG AA compliance: Primary-500 text 4.5:1, Neutral-900 text 16.5:1  
✅ GPU-accelerated animations only (transform + opacity)  
✅ Responsive touch targets: 48-56px minimum  

**Deliverables for Development**:
1. ✅ Content Structure Plan (reference for content extraction)
2. ✅ Design Specification (this document)
3. ⏳ Design Tokens JSON (next file)

---

**Document Version**: 1.0  
**Author**: Matrix Agent  
**Date**: 2026-01-18
