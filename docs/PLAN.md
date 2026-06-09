# Implementation Plan: David & Blair English Tutoring Website

This document outlines the detailed roadmap for creating a premium, modern, and trust-building English tutoring website for David & Blair in South Korea.

---

## 1. Architectural & Technical Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (Vanilla CSS for base globals/tokens, Tailwind for layout and utilities)
- **Animations:**
  - **Framer Motion:** Smooth page transitions, scroll reveals, card hover transitions, floating blobs.
  - **Anime.js:** SVG line drawings, count-up animations, typography fade/slide-up, success checkmark drawing.
- **Typography:** Inter (Google Fonts via `next/font/google`)
- **Assets/Data:** Local static files and structure inside `src/data/tutors.ts`. No backend database or external APIs.

---

## 2. Directory Structure Setup
Once approved, we will create the following structure:
```
/
├── public/
│   └── images/                # Static image assets (tutor avatars, banners)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root Layout (Navbar, Footer, Providers, Font loader)
│   │   ├── page.tsx           # Homepage (with scroll animations, stats, Hero)
│   │   ├── classes/
│   │   │   └── page.tsx       # Classes page (One-on-One and Group details)
│   │   ├── tutors/
│   │   │   ├── page.tsx       # Tutors grid page
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Tutor dynamic profiles
│   │   └── book/
│   │       └── page.tsx       # Interactive booking request form
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky blurred Navbar with Framer Motion entry
│   │   ├── Footer.tsx         # Detailed dark Footer
│   │   ├── StatCard.tsx       # Count-up animated stat cards using Anime.js
│   │   ├── TestimonialSection.tsx  # Interactive carousel / testimonial stack
│   │   ├── TutorCard.tsx      # Tutor cards with interactive states
│   │   └── StepCard.tsx       # Steps with custom SVG path drawing animations
│   ├── data/
│   │   └── tutors.ts          # Static tutor dataset
│   └── styles/
│       └── globals.css        # Base styling, custom gradient blobs, layout variables
```

---

## 3. Detailed Phase Breakdown

### Phase 1: Environment & Project Scaffolding
1. Run `npx -y create-next-app@14 --help` to check options.
2. Initialize Next.js 14 app in the root directory (`./`) using non-interactive flags:
   - TypeScript: Yes
   - ESLint: Yes
   - Tailwind CSS: Yes
   - `src/` directory: Yes
   - App Router: Yes
   - Import alias: `src/*`
3. Install animation libraries: `npm install framer-motion animejs lucide-react`
4. Install development dependencies: `@types/animejs` for TypeScript support.

### Phase 2: Design System & Core Layout (Foundation)
1. **Design Tokens (`tailwind.config.ts` or CSS variables):**
   - Background: `#F5F5FF`
   - Primary: `#7C3AED` (Deep Purple), Primary Light: `#EDE9FE`
   - Accent: `#6366F1` (Indigo)
   - Dark/Navy: `#0F172A`
   - Badges: Green `#16A34A`, Blue `#2563EB`, Pink `#EC4899`, Red `#DC2626`
   - Shadows: `0 4px 24px rgba(124,58,237,0.08)`
2. **Typography Setup:** Configure `next/font/google` for `Inter` weight 400-900.
3. **Globals stylesheet:** Define keyframe floats for background decorative blobs and page transitions.
4. **Common Layout Components:**
   - **Navbar:** Sticky, frosted glass blur, scroll shadow logic, Framer Motion entry.
   - **Footer:** 4-column layout in Deep Navy, social icons, clean copyright.

### Phase 3: Page Implementation

#### 1. Homepage (`src/app/page.tsx`)
- **Hero Section:** Left columns text (fading text with Anime.js), CTA buttons (filled purple and outline), right side floating image frame. Animated decorative blobs looping in the background.
- **Stats Row:** Count-up triggers with Anime.js when visible in the viewport.
- **About Section:** Two-column split. Checked lists, custom "Learn More About Us" CTA.
- **Classes Section:** Cards with Framer Motion scroll scale reveals and scale/hover effects.
- **Tutors Section:** Compact 2x2 grid highlighting the 4 main tutors with specialized colored circles and details.
- **How It Works:** 3-step sequence connected by a custom SVG dotted path. The line will draw dynamically from left to right using Anime.js when it enters the viewport.
- **Testimonials Section:** Parent quotes overlay stack and a satisfaction counter.
- **CTA Banner:** Dark Navy block with a Framer Motion shimmer gradient mask and a pulsing button.

#### 2. Tutors Grid Page (`src/app/tutors/page.tsx`)
- Beautiful full-page grid displaying all tutors in card layouts.
- Staggered hover animations. Filter pills (by experience or specialization if necessary, client-side only).

#### 3. Tutor Dynamic Profile Page (`src/app/tutors/[slug]/page.tsx`)
- Custom pages dynamically generated using `generateStaticParams()`.
- Display tutor name, badge, title, and detailed bio.
- **Enrichments:** Teaching philosophy/methodology block, professional placeholder video player (styled with SVG icons), and tutor-specific parent reviews.

#### 4. Classes Detail Page (`src/app/classes/page.tsx`)
- In-depth detail cards for "One-on-One Tutoring" and "Group Classes".
- Highlights duration badges and features.
- "Learn More / Book" CTAs link directly to the `/book` page with a search parameter (`?classType=one-on-one` or `?classType=group`) to auto-populate the booking request.

#### 5. Booking Page (`src/app/book/page.tsx`)
- A centered, card-based request form.
- Form fields: Name, Email, Phone, Class Type (dropdown), Preferred Date, Message.
- Framer Motion staggered field reveal on page mount (80ms offset).
- **Interactive Submit State:** Custom SVG checkmark drawings triggered via Anime.js on validation success, along with a fade-in confirmation alert: "We'll be in touch soon!".

---

## 4. Verification and QA plan
1. Run automated build script (`npm run build`) to ensure all components compile without TypeScript or ESLint errors.
2. Run safety and linting scripts to verify compliance:
   - `lint_runner.py` (ESLint audit)
   - `security_scan.py` (Vulnerability checking)
3. Ensure no external APIs or dynamic server imports are configured, validating "out of the box Vercel ready".

---

## 5. Timeline & Next Steps
1. User reviews and approves this plan.
2. We invoke `project-planner`, `frontend-specialist`, and `test-engineer` to execute implementation, configuration, and verification in parallel.
