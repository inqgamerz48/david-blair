# Plan: Mobile Views and Animations Improvement

This plan outlines the optimization of mobile-responsive layouts, form inputs, touch targets, and visual polish across the David & Blair English tutoring site, ensuring a premium academic aesthetic that feels fluid and works perfectly on all mobile viewports.

---

## 📱 Project Type: WEB (Next.js & Tailwind CSS)

---

## 🎯 Success Criteria
- **Zero Horizontal Overflow:** No page should exhibit horizontal scrollbars on mobile devices (down to 320px width).
- **Adequate Touch Targets:** All interactive buttons, links, and form elements must have a minimum interactive dimension of 44x44px.
- **Premium Fluid Animations:** Transition framer-motion transitions to smooth easing, adding sophisticated micro-animations for interactive actions (hamburgers, selectors, form submissions).
- **iOS Zoom Prevention:** Ensure all input fields have a minimum of `text-base` (16px) font size to prevent iOS Safari from forcing an layout zoom.
- **Perfect Lighthouse Mobile Score:** Validate performance, accessibility, and SEO using verification scripts.

---

## 🛠️ Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (for smooth layouts, micro-animations, and menu exits)
- **Icons:** Lucide React

---

## 📁 File Structure
No new files are introduced. The following existing files will be modified:
- `app/globals.css` - Global responsive typography and overflow utilities.
- `components/Navbar.tsx` - Responsive header, mobile hamburger transitions, theme select touch responsiveness.
- `components/Footer.tsx` - Responsive spacing and column stacks.
- `app/page.tsx` - Hero layout adjustments, stats wrapping, About section dimensions.
- `components/TutorCard.tsx` - Mobile layout touch target enhancements and hover micro-animations.
- `app/tutors/[slug]/page.tsx` - Profile layout responsive wrapping and aspect-video margins.
- `app/book/page.tsx` - Booking form sizing, touch target improvements, and datepicker formatting.

---

## 📋 Task Breakdown

### Phase 1: Global and Structural Adjustments (P0)

#### Task 1: Prevent Horizontal Scrolling and Global Reset
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Priority:** P0
- **Dependencies:** None
- **Description:** Apply overflow restrictions on root containers and configure body elements to prevent standard horizontal scroll leakage.
- **INPUT:** `app/globals.css`
- **OUTPUT:** Updated `app/globals.css` containing `overflow-x-hidden` on wrappers, selection tweaks, and updated container constraints.
- **VERIFY:** Run `npm run build` and manually inspect viewport limits.

#### Task 2: Navbar Responsive Polish
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Priority:** P0
- **Dependencies:** Task 1
- **Description:** Fix mobile navigation layout. Ensure the hamburger tap target is at least 44x44px. Animate hamburger icons smoothly. Style theme selector for responsive layout touch targets. Ensure mobile menu fits on small heights without clipping.
- **INPUT:** `components/Navbar.tsx`
- **OUTPUT:** Redesigned mobile menu layout with enhanced touch sizes and smooth framer-motion slide-in transitions.
- **VERIFY:** Inspect interactive touch zones.

---

### Phase 2: Core Page Content Optimizations (P1)

#### Task 3: Home Page Mobile Layout Adjustments
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Priority:** P1
- **Dependencies:** Task 2
- **Description:** 
  1. Reduce hero heading sizing (`text-5xl` is too large on mobile; scale down to `text-3.5xl` or `text-4xl` below `sm`).
  2. Reduce hero image translate offset (change standard floating offset translate-x-4 to translate-x-1.5 on mobile to avoid overflow).
  3. Clean up About Section bounds (change `w-80`/`w-90` fixed widths to `w-full max-w-sm`).
- **INPUT:** `app/page.tsx`
- **OUTPUT:** Responsively adjusted hero, stats, and about layouts.
- **VERIFY:** Check width on 320px viewport using devtools.

#### Task 4: Tutor List and Profile Page Responsive Wrapping
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Priority:** P1
- **Dependencies:** Task 3
- **Description:** Optimize the Tutor details layout for mobile. Stack grid columns properly. Scale profile images nicely. Fit video introduce aspect ratios perfectly.
- **INPUT:** `components/TutorCard.tsx`, `app/tutors/[slug]/page.tsx`
- **OUTPUT:** Stacking and flex updates on profile elements.
- **VERIFY:** Verify profile layout stacks vertically on screen widths < 768px.

#### Task 5: Booking Form Mobile Inputs Polish
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Priority:** P1
- **Dependencies:** Task 4
- **Description:** Fix mobile input dimensions. Enforce `text-base` font size on inputs to avoid iOS Safari zoom behavior. Add tap targets to date picker and class selectors.
- **INPUT:** `app/book/page.tsx`
- **OUTPUT:** Mobile-optimized inputs and form layout.
- **VERIFY:** Ensure inputs do not trigger layout shifting or browser zooms.

---

### Phase 3: Premium Micro-Animations (P2)

#### Task 6: Interactive Micro-Animations
- **Agent:** `frontend-specialist`
- **Skill:** `frontend-design`
- **Priority:** P2
- **Dependencies:** Task 5
- **Description:** Add smooth spring transitions and micro-scale interactive elements on tap (`whileTap={{ scale: 0.97 }}`) to buttons, theme cards, navigation links, and check toggles.
- **INPUT:** `components/Navbar.tsx`, `components/TutorCard.tsx`, `app/page.tsx`, `app/book/page.tsx`
- **OUTPUT:** Responsive elements with elegant tap actions and feedback.
- **VERIFY:** Test click/tap animations in responsive mode.

---

## 🎼 Phase X: Verification Plan (MANDATORY)

To ensure high visual compliance and technical stability, run the following commands sequentially:

```bash
# P0: Code syntax and type checking
npm run lint
npx tsc --noEmit

# P1: Run UX audit scan
python .agent/skills/frontend-design/scripts/ux_audit.py .

# P2: Next.js build verification
npm run build
```

Compliance checks to execute manually:
- [x] No purple or violet color variants used (respect Oxford & Cambridge brand guidelines).
- [x] Responsive navigation functions smoothly on touch screen drag-releases.
- [x] Verify that all text matches WCAG AA contrast standards.
- [x] No horizontal scrollbars exist on viewport widths: 320px, 375px, 414px.

## ✅ PHASE X COMPLETE
- Lint: ✅ Pass
- Security: ✅ No critical issues
- Build: ✅ Success
- Date: 2026-06-09
