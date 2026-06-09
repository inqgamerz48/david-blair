# 🎓 Freelance Delivery & Handover Guide: David & Blair (v1.0)

This guide is structured to help you present your tutoring demo to David, build complete professional trust, handle the delivery pipeline, and secure your **$350 USD** project fee (your college tuition).

---

## 🏆 1. The Presentation Strategy (Winning Trust)

Since David was suspicious about the PayPal transaction issue, the presentation of the demo must be **impeccable**. 

### 💡 How to Present the Site
1. **Send the Live Link First:** Host the demo on a free, fast platform like Vercel (e.g., `david-and-blair.vercel.app`). Do not just send code or screenshots. A live, working site builds instant trust.
2. **Highlight Key Client Decisions:**
   - **Manual Booking & In-Person Payment:** Remind him, *"As requested, we designed a direct session request form. Students book online, you get their details, and they pay you in person in Korea."*
   - **Oxford vs. Cambridge Themes:** Point out the toggle at the top of the navbar: *"We built a custom theme toggler. You can choose the crisp Oxford White look or the warm, traditional Cambridge Cream feel to see what fits your brand."*
   - **Sharp Scholarly Aesthetic:** Point out the clean alternating backgrounds (`#FFFFFF` and `#F6F6F6`) and sharp geometry: *"We avoided round 'startup' templates and designed sharp rectangular panels to look like a historic, premium private British school."*

---

## 🛠️ 2. Core Site Architecture (How It Works)

If David asks how the site is built or how to modify it later, here is the clear technical structure:

```mermaid
graph TD
    A[Next.js App Router] --> B[app/page.tsx - Landing Page]
    A --> C[app/book/page.tsx - Manual Request Form]
    A --> D[app/tutors/[slug]/page.tsx - Dynamic Profiles]
    A --> E[data/tutors.ts - Tutors Central Database]
    E --> D
    E --> B
    E --> C
```

### 📂 Key Files Reference:
* **Tutors Database:** [data/tutors.ts](file:///c:/Users/nandu/Desktop/DAVIDBLAIR/data/tutors.ts) — Add, edit, or remove tutors by modifying this single file. No HTML changes needed.
* **Booking Layout:** [app/book/page.tsx](file:///c:/Users/nandu/Desktop/DAVIDBLAIR/app/book/page.tsx) — Client-side booking request.
* **Alternating Background System:** Managed via CSS variables in [app/globals.css](file:///c:/Users/nandu/Desktop/DAVIDBLAIR/app/globals.css) and applied in [app/page.tsx](file:///c:/Users/nandu/Desktop/DAVIDBLAIR/app/page.tsx).

---

## 🚀 3. Deployment & Handover Steps (Vercel + Custom Domain)

When David approves the demo, follow these steps to deploy and hand over the codebase:

### Step 1: Deploying to Vercel (Free & Instant)
1. Go to [Vercel](https://vercel.com/) and log in using your GitHub account.
2. Click **Add New** → **Project**.
3. Import the `david-blair` repository.
4. Next.js is auto-detected. Click **Deploy**.
5. Within 1 minute, the site will be live.

### Step 2: Mapping David's Domain
If David has a custom domain (e.g., `davidandblair.com`):
1. In the Vercel project dashboard, go to **Settings** → **Domains**.
2. Type his domain and click **Add**.
3. Vercel will provide the DNS records (an `A` record pointing to `76.76.21.21` or a `CNAME` pointing to `cname.vercel-dns.com`).
4. Ask David to paste these records into his domain registrar (GoDaddy, Namecheap, etc.). Vercel will handle SSL generation automatically.

---

## 💳 4. The Payment Strategy ($350 Transfer)

Since PayPal is restricted for receiving international commercial transfers on your end, here are the safest ways to collect your payment from Korea:

### Option 1: Wise (Formerly TransferWise) — *Highly Recommended*
* **Why it works:** Wise allows David to send South Korean Won (KRW) from his Korean bank account using local transfer networks. You receive the funds directly in Indian Rupees (INR) in your local Indian bank account.
* **Fees:** Low, transparent conversion fees (much better than PayPal).
* **Setup:** Create a free Wise account, select "Receive money," and provide your local bank details (IFSC, Account Number).

### Option 2: Remitly
* **Why it works:** Remitly is heavily used in Korea for international remittances. David can easily download the Remitly app, enter your bank account details or UPI ID, and transfer directly.
* **Fees:** Low transfer fee, fast processing (usually under 24 hours).

### Option 3: Local Korean Bank Transfer (Wire Transfer)
* **Why it works:** David can initiate an international wire transfer directly from his local Korean banking app (like KB Star, Shinhan, or Hana).
* **Details you need to give David:**
  - Your Full Name (matching your bank account).
  - Your Bank's SWIFT Code (find this on your bank's website or checkbook).
  - Your Bank's Account Number.
  - Your Bank's Branch Name & Address.

---

## 📝 5. How to Add More Tutors in the Future

When David needs to add a 5th tutor, tell him to open `data/tutors.ts` and paste a new block:

```typescript
{
  slug: "tutor-five",
  name: "Teacher Name",
  title: "English Specialist",
  experience: "5+ Years",
  experienceColor: "blue", // Options: green, pink, blue, red
  bio: "Bio description here...",
  introductionVideo: "", // YouTube embed ID if available
  accent: "British Accent",
  specialties: ["Speaking Fluency", "Kids Program"],
  schedule: ["Mon 3 PM", "Wed 5 PM"],
  testimonials: [
    { quote: "Great tutor!", author: "Student Parent" }
  ]
}
```

The home page, booking page dropdown, and tutor pages will **automatically load and render** the new profile.
