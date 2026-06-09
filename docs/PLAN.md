# Redesign Plan: Oxford-Cambridge Academic Style (v1.1)

This plan outlines the visual, typographic, and motion redesign of the tutoring site to transition from modern startup aesthetics to an elegant, warm, and highly trustworthy academic tutoring institute theme (inspired by Oxford & Cambridge).

---

## 🎨 1. Color System Overhaul
We will completely eliminate all purples, violets, and neon accents. We will introduce a dynamic theme toggler that switches between two clean, professional academic themes:
- **Oxford White (Default):**
  - Primary (Navy): `#1B2B4B` (Deep Navy)
  - Accent (Amber): `#F5A623` (Warm Gold/Amber)
  - Page Background: `#FFFFFF` (Pure White)
  - Secondary Text: `#6B7280` (Warm Gray)
- **Cambridge Cream:**
  - Primary (Navy): `#1B2B4B` (Deep Navy)
  - Accent (Gold): `#D4AF37` (Antique Gold)
  - Page Background: `#FAFAF7` (Soft Cream)
  - Secondary Text: `#6B7280` (Warm Gray)

### Files to Edit:
- `app/globals.css`: Define CSS variables for `--primary`, `--accent`, `--pageBg`, `--roseSplit`, and `--skySplit` mapping to the new warm color palette.
- `components/Navbar.tsx`: Update the theme toggler to toggle between "Oxford Light" and "Cambridge Cream". Remove other theme nodes.

---

## ✍️ 2. Typography Upgrade
Replace modern, heavy-tech sans fonts with sophisticated literary typography:
- **Headings:** `Playfair Display` (Google Font) — elegant, warm, premium.
- **Body:** `DM Sans` or `Inter` — clean, readable, highly structured.
- **Rules:**
  - Remove aggressive `font-black` (900) font weights.
  - Apply `font-serif` (Playfair Display) for headlines and `font-sans` (DM Sans/Inter) for navigation and body.
  - Utilise lighter, softer weights (`font-semibold` / `font-medium` / `font-bold` max) for headings to evoke warmth and maturity.

### Files to Edit:
- `app/layout.tsx`: Load `Playfair_Display` and `DM_Sans` using `next/font/google` and inject their variables.
- `tailwind.config.ts`: Extend font families to link `--font-playfair` to serif headings and `--font-dm-sans` to body text.

---

## 🎬 3. Gentle Motion & Animation Redesign
Remove snappy transitions, spring physical calculations, and fast scale animations. Replace them with soft, human-centric, and premium easing:
- **Scroll Reveals:** Soft fade-in on scroll (using custom `opacity` and standard `ease-in-out` transitions over `0.8s` - `1s`).
- **Tutor Cards:** Gentle lift on hover (`translateY(-6px)` with a smooth transition and a highly diffused, soft shadow).
- **Hero Reveal:** A slow, elegant fade-in on page load. No aggressive slide-ups or mask shifts.
- **Buttons:** Smooth, soft transition for background/border color fills on hover. No flashing or structural scaling.

### Files to Edit:
- `components/TutorCard.tsx` / `components/StatCard.tsx` / `components/TestimonialSection.tsx`: Adjust hover states and intersection transitions.
- `app/page.tsx` & `app/tutors/page.tsx`: Shift stagger animations from snappyExpo `[0.16, 1, 0.3, 1]` to gentle ease-in-out durations.
- `app/globals.css`: Update premium shadows to be softer and wider (`box-shadow: 0 10px 40px rgba(27, 43, 75, 0.04)`).

---

## 🎼 Verification Plan
After Phase 2 implementation, the following verifications will run:
1. `npm run build`: Validate Next.js bundle and TypeScript interfaces.
2. `npm run lint`: Lint checking for semantic markup and style consistency.
3. Visual confirmation of the toggler and soft transition timing.
