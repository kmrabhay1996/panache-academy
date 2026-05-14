# Project Memory — Panache Academy Redesign Pitch

> Living document. Updated after every major step.

---

## Client

- **Name:** Panache Academy
- **Current website:** https://www.panacheacademy.com/
- **Industry:** Aviation, Tourism & Hospitality vocational training
- **Founder/Director:** Khushnum Avari (ex-air hostess, instructor, corporate trainer)
- **Tagline (current):** "#1 Aviation Academy & Hotel Management Course"
- **Positioning:** One of India's leading academies for Aviation / Tourism / Hospitality
- **Credentials:** ISO 9001:2015 certified · Grade 'A' by CIAC · Accredited by Knowledge Consortium of Gujarat (KCG)

### Locations (6)
1. Ahmedabad – Shyamal — 211/212, 2nd Floor, Shangrila Arcade, Shyamal Cross Roads, Prahalad Nagar Rd · +91 8460165656 · ahmedabad@panacheacademy.com
2. Ahmedabad – Nikol — 309/310, Akshar Arcade, Nr Devasya School, Shalby Hospital Lane · +91 7043776363
3. Vadodara — Trisha Square 1, 4th Floor, Jetalpur Rd, Alkapuri · +91 7874395959 · vadodara@panacheacademy.com
4. Indore — 303-304, Manas Mayfair, 8/5 South Tukoganj · +91 7490047171 · indore@panacheacademy.com
5. Goa — 503/504/505 Gera Imperium Star, Patto Plaza, Panjim · +91 8956011937 · goa@panacheacademy.com
6. Udaipur — Num 1, Guru Kripa Bhawan, Hiran Magri Main Rd · +91 8511719575 · udaipur@panacheacademy.com

### Social
- Instagram: @panacheacademyofficial
- Facebook: /panacheacademy
- Twitter: @PanacheAcademy1
- LinkedIn: linkedin.com

---

## Goal of This Project

Redesign panacheacademy.com as a **pitch** — they haven't asked. Goal: the redesign must be so visibly superior that saying no would feel foolish.

Dual-purpose:
1. Impress the academy owner (Khushnum) — show she's losing students because of the site
2. Convert prospective students/parents better — measurable funnel improvements

---

## Tech Constraints

- Pure HTML, CSS, JavaScript only
- Single folder, no frameworks, no build step
- Opens directly in browser (file:// must work)
- Mobile responsive
- Fast loading
- Google Fonts: Poppins (headings) + Inter (body)

---

## Design Direction (locked)

- **Visual boldness:** ambitious. Big hero, scroll animations, gradient accents, modern micro-interactions.
- **Color palette (premium aviation/hospitality):**
  - Primary: Deep Navy `#0B1E3F` (first-class cabin / night sky)
  - Accent: Warm Gold `#D4A574` (luxury, ambition)
  - Highlight: Amber `#F4C430` (energy, CTAs)
  - Background: Cream `#FAF7F2`
  - Text: Charcoal `#1A1A2E`
- **Type:** Poppins 600/700 for display, Inter 400/500 for body.
- **Imagery:** Pull from their CDN where usable, fill gaps with Unsplash (aviation, hospitality, students, classroom themes).

---

## Pages Being Built

1. **index.html** — Homepage (hero, stats, about, courses preview, testimonials, partners, CTA)
2. **courses.html** — Filterable course catalog (search + category filter)
3. **contact.html** — All 6 locations + working contact form
4. **placements.html** — BONUS. Showcases 5000+ placements, partners by sector, success stories. The "why didn't we think of this" page — currently their placements page has Lorem Ipsum.
5. **about.html** — BONUS. Founder story, mission, accreditations done justice.

---

## Content Inventory (scraped from live site)

### Stats (current claims)
- 197,683 followers
- 11,223 classes completed
- 8,592 students enrolled
- 46 certified teachers

### Courses
**Certificate (4)**
- PACCCT — Cabin Crew Training (6 months, age 17-27, HSC/Graduation)
- PACTTM — Travel & Tourism Management
- PACAMGS — Airport Management & Ground Staff
- PACHM — Hotel Management

**Diploma (1)**
- PADATM — Aviation/Tourism/Hospitality Management

**Degrees**
- BBA — Airlines/Tourism/Hotel Management
- MBA — Airlines/Tourism/Hospitality Management

**Specialized**
- PAFCPG — Finishing Course (English / Personality Development / Grooming)
- Cruise Ship Management
- IATA
- Modeling
- BPO Training
- Personality Development
- Special Course for Home Makers

### Placement Partners
Cox & Kings · Emirates · Gujarat Tourism · IndiGo · Kuoni · Marriott · Qatar Airways · Radisson Blu · Taj Group · The Oberoi Group · Air India · Etihad Airways · GoAir · Hilton · Malaysian Airlines · SpiceJet · VFS Global · Vistara · Worldwide DMC · Jet Airways · ITC · Club Mahindra · Baywatch Resort

### Testimonials (verbatim quotes available)
1. **Aditi Vyas** — Senior Cabin Crew, Qatar Airways (2020, PACCCT)
2. **Deepali Raval** — Senior Cabin Crew, Emirates (2020, PACCCT)
3. **Himanshu Bhatt** — Cabin Crew Instructor, IndiGo
4. **Javnika More** — Cabin Crew, GoAir
5. **Poonam Mantha** — Cabin Crew, GoAir
6. **Hiral Dave** — Cabin Crew, GoAir
7. **Kaniz Kanani** — Cabin Crew, Jet Airways
8. **Rahul Sharma** — Aviation (2020)
9. **Simran Dhillon** — Cabin Crew, SpiceJet

### Key Copy (verbatim, reusable)
- "Panaché. It's a word that amalgamates style with substance. It best encapsulates what we intend our students to acquire once they pass out from our academy."
- "At our academy, our goal is to nurture the dreams and to provide students the skill sets necessary to transform those dreams into reality."
- Vision: "To create a Learning Environment, where students of today are transformed to Professionals of tomorrow"

---

## Project Folder Structure

```
D:\Panache Website\
├── MEMORY.md
├── index.html
├── courses.html
├── contact.html
├── placements.html
├── about.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── (images sourced from external URLs — Panache CDN + Unsplash)
```

---

## Build Decisions

- **Sticky transparent header** that gets a solid backdrop on scroll (`.scrolled` class added by JS).
- **Hero** uses a 3-stack CSS background: dark overlay → navy gradient → Unsplash photo. If the URL ever fails, the gradient still renders — no broken image tags.
- **Animated counters** triggered via IntersectionObserver at 40% threshold; respects `prefers-reduced-motion`.
- **Partner marquee** is a CSS keyframe animation (50s linear) with duplicated content for seamless loop; masked with edge fade.
- **Testimonial carousel** auto-rotates every 6s, pauses on hover, dot navigation.
- **Course cards** use category-specific CSS backgrounds (`.card-cabin`, `.card-hotel`, etc) — each with its own Unsplash photo + tinted gradient fallback.
- **All pages share** `css/style.css` and `js/main.js`. The JS file detects which page it's on by element presence (no routing).

## Progress Log

- **2026-05-14 — Step 1 complete.** Scraped panacheacademy.com — homepage, about, contact, certificate courses, placements, 9 testimonials. Content inventory captured above.
- **2026-05-15 — Step 2 complete: Homepage.** Built `index.html` + shared `css/style.css` (700+ lines, mobile-first) + `js/main.js` (sticky header, mobile nav drawer, animated counters, testimonial carousel, reveal-on-scroll, course filter logic ready for courses.html, contact form validator ready for contact.html).
- **2026-05-15 — Patch.** Downloaded Khushnum's founder photo to `images/khushnum-avari.jpg` (12.8KB JPEG) and pointed CSS to the local path instead of the WordPress CDN — guaranteed to load.
- **2026-05-15 — Step 3 complete: Courses page.** Built `courses.html` with all 13 programs (4 Certificate, 1 Diploma, 2 Degree, 6 Specialized). Sticky filter bar with category chips + live search input. Each course card is full-width on mobile, horizontal split on tablet+ (image left, body right). New CSS sections: `.page-hero`, `.filter-section` (sticky under header), `.course-card-full`, 7 new category image variants (`.card-diploma`, `.card-mba`, `.card-iata`, `.card-pd`, `.card-modeling`, `.card-bpo`, `.card-homemakers`). Filter JS was already in `main.js`, now activates via `#courseFilter` + `#courseSearch` IDs.
- **2026-05-15 — Step 4 complete: Contact page.** Built `contact.html` with: working form (Name, Phone, Email, Course interest with all 13 programs in optgroups, City with all 6 campuses, Message), real-time validation, mailto fallback that pre-fills body. Form validator in main.js extended to require city. Right rail: phone/email/WhatsApp aside cards. Map placeholder section: stylised India outline mock with CSS grid background, pulsing gold pins for each city, "Map coming soon" callout — no Google API needed. Six location cards (Ahmedabad-Shyamal, Ahmedabad-Nikol, Vadodara, Indore, Goa, Udaipur) — each with click-to-call phones, mailto links, district badges. Single column on mobile → 2 cols on tablet → 3 cols on desktop.
- **2026-05-15 — Step 5 complete: Placements page (THE WEDGE).** Built `placements.html` — designed to make the current Lorem Ipsum version visibly embarrassing. Sections: (1) dark hero with 8 real airline ribbons; (2) KPI band; (3) 6 verbatim success-story cards with airline-branded headers (Qatar maroon, Emirates red, IndiGo navy, GoAir blue, Jet Airways blue); (4) Hiring partners grouped by sector; (5) Global reach canvas — stylized world map with pulsing gold pins; (6) 4-step Placement System; (7) Dark CTA band.
- **2026-05-15 — Step 5 correction: stat audit.** First pass had fabricated metrics. User flagged this. Replaced ALL invented numbers across the site:
  - KPI band: 5,000+ placed → **8,500+ trained** (scraped). 25+ partners → **23+ partners** (real count). 8 countries → **46 certified faculty** (scraped). 87% placement rate → **6 campuses** (scraped). ₹3.5–18L salary range → removed entirely. Grid now 4 cols.
  - Reach map: removed `data-count` (Mumbai 850+, Dubai 420+ etc. all fabricated). Trimmed pins from 11 to 8 cities — kept only those that are operating bases of named hiring partners (Mumbai/Delhi/Ahmedabad/Goa/Dubai/Doha/Abu Dhabi/KL). Section headline changed from "From Ahmedabad to 8 countries" → "From our campuses to global careers".
  - Partners section: removed Cruise & Maritime sector (Royal Caribbean + Carnival — no scraped cruise partners). Eyebrow "25+ HIRING PARTNERS" → "OUR HIRING PARTNERS".
  - Process step 3: "4× a year" → removed. Step 4: "year one" → "first job and beyond".
  - Success stories: Himanshu "Gurgaon" → "India". Poonam "Delhi" → "India". (Doha/Dubai/Mumbai retained — those are stated airline HQs.)
  - Hero subhead: "Verifiable placements" claim toned to "Thousands placed across top brands".
  - index.html: hero-meta strip rewritten (5,000+ Placed → 23+ Named Hiring Partners; 20+ Partners → 6 Campuses; "15 yrs Industry Legacy" → "ISO 9001 Certified · CIAC Grade A"). Meta description updated.

## Ground rule for any further edits

**Every number on the site must trace to the scrape, or use qualitative language.** Approved numbers: 8,592 students · 11,223 classes · 46 faculty · 6 cities · 23 named partners · ISO 9001 · CIAC Grade A · 1 founder (Khushnum Avari) · 9 verbatim testimonials · 13 courses. Anything else needs to be qualitative ("thousands", "top global brands", "named airlines and hotels", etc.) or removed.

## Progress Log (continued)

- **2026-05-15 — Step 6 complete: About page.** Built `about.html` with five sections: (1) page hero "Style with substance"; (2) Founder section — local photo of Khushnum Avari with gold offset frame, nameplate, lead quote, two-paragraph bio, italic signature; (3) Mission & Vision two-card grid with gold top accent — both use verbatim scraped copy; (4) Accreditations grid — three certificate-style cards with circular conic-gradient gold seals (ISO 9001, CIAC Grade A is "FEATURED", KCG with Hindi character "गुज"); (5) Timeline — 6 chapter cards with vertical gold gradient connector line and pulsing "Today" dot, NO INVENTED YEARS — uses "Chapter 01" through "Chapter 05" + "Today" instead. Patched index.html hero eyebrow to remove unscraped "EST. 2010".
- **2026-05-15 — Step 7 complete: Cross-page audit.**
  - 5 pages: index, about, courses, placements, contact — all present.
  - 122 internal `href`s across the site; all targets resolve to existing files. Breakdown: courses.html×46, contact.html#apply×24, index.html×20, placements.html×11, about.html×11, contact.html×10, css/style.css×5.
  - `#apply` anchor verified present on contact.html — all 24 deep links land correctly.
  - Active nav class correct on each of the 5 pages (Home/About/Courses/Placements/Contact).
  - Nav structure byte-identical across all 5 pages (same brand, 5 links in same order, Apply Now button).
  - Image refs: 1 local file (khushnum-avari.jpg, verified exists) + 13 Unsplash CDN URLs each wrapped in CSS background-image stack with linear-gradient fallbacks under the url() — no `<img>` tag can produce a broken-image icon.
  - JS deps: all 5 pages reference `js/main.js`; CSS deps: all 5 reference `css/style.css`.
  - Final structure: 5 HTML + 1 CSS + 1 JS + 1 image + MEMORY.md.

## Project Complete

All 5 pages built. All scraped content used verbatim where possible. All metrics traceable to source or qualitative. No broken links, no broken images, mobile-first throughout, sticky header on all pages, working form with mailto fallback, no frameworks, no build step — opens directly in a browser.

- **2026-05-15 — Asset localization.** Browser preview was not rendering Unsplash CDN images (CDN blocked / hotlink issue). Downloaded all 14 remote photos via curl to `images/` folder and replaced all 14 CSS `background-image: url(https://images.unsplash.com/...)` references with `url('../images/<name>.jpg')` paths. Also re-fetched founder photo from panacheacademy.com CDN at native 768×1024 resolution (99KB) — the previous 225×300 thumb was 12.6KB which was technically valid JPEG but below the 50KB sanity threshold. Final image inventory: 15 files in `/images/`, all 99KB+, all referenced from `css/style.css`, no external image URLs remaining anywhere in the project.
- **2026-05-15 — Image render bug fix (the real one).** Files were downloaded and paths were correct, but no photos were visible — only navy gradients. Root cause: each image `background` was a 3-layer stack `[semi-transparent tint] / [SOLID navy gradient] / [image]`. The middle layer was fully opaque and covering the photo. Removed the opaque middle gradient from all 15 declarations (`.hero-bg`, `.about-img` for Khushnum, and the 13 `.card-*` course-image variants). Photos now show through the semi-transparent dark tint as designed.
- **2026-05-15 — Courses-page selector bug fix.** After the image render fix, photos showed on the homepage but 6 cards on courses.html were still blank (Cabin, Hotel, Airport, Travel, Degree, Cruise). Root cause: those 6 cards use selector pattern `.card-X .course-img` which targets a child `.course-img` inside `.card-X`. That structure exists on `index.html` (outer link + inner div) but on `courses.html` the `.card-X` class is applied directly to the image element (combined with `.course-full-img`). Added alternate selector `.course-full-img.card-X` to all 6 rules so they match both page structures. The other 7 specialized cards (Diploma, MBA, IATA, PD, Modeling, BPO, Homemakers) already used direct `.card-X` selectors and were unaffected.
- **Verified in browser preview** (python http.server on :5500) — all 5 pages, all 15 images rendering correctly through the navy tint.
- **2026-05-15 — Round-2 polish pass (9 fixes).**
  1. **Filter JS** — selector was `.course-card` but courses page cards use `.course-card-full`; updated to `.course-card-full, .course-card` so filter chips actually filter.
  2. **Arrow overlap** — homepage course-card descriptions were getting clipped by the bottom-right arrow circle. Added `padding: 24px 24px 64px` to `.course-body` and `padding-right: 56px` on description `p`.
  3. **WhatsApp button** — new `.aside-card-whatsapp` variant with WhatsApp green gradient (`#25D366 → #128C7E`), inline WhatsApp SVG icon, white text, decorative corner circle.
  4. **Contact form smaller** — `.form-wrap` padding `32px 24px → 24px 20px` (mobile) and `40px 36px → 28px 28px` (desktop); fields, gaps and labels all trimmed proportionally.
  5. **SVG icons everywhere** — replaced unicode `✈ ★ ◎ ⌘` in homepage Why-Panache with proper stroke-based SVG icons (plane, trophy, sparkles, globe). Same treatment for placements page sector cards.
  6. **Hero background images** — added `.hero-courses`, `.hero-contact`, `.hero-about` modifier classes. Each `.page-hero::after` shows a low-opacity (22% desktop / 18% mobile) themed photo with `mix-blend-mode: lighten` over the navy gradient. Mobile uses `background-attachment: scroll` (iOS Safari incompatibility with `fixed`).
  7. **Subtle parallax backgrounds** — `.why`, `.process-section`, `.mv-section` now have `::before` pseudo-elements with 4–6% opacity background photos and `background-attachment: fixed` for CSS-only parallax on desktop.
  8. **Marquee chips upgraded** — partner names retained as text but visually transformed: bigger height (56px), gold left-border accent, gold bullet dot, gradient inset, Poppins 600 typography. Reads as logo-style cards now.
  9. **Reach map pins** — repositioned all 8 pins to spread across the canvas: Doha (40,50%), Dubai (50,36%), Abu Dhabi (54,44%), Ahmedabad (62,52%), Delhi (64,35%), Mumbai (64,60%), Goa (66,68%), Kuala Lumpur (78,68%). No more label overlaps.

  All 9 changes verified in browser preview at :5500. Filter clicks work, arrow no longer clips description, WhatsApp button is green with logo, form is compact, icons look proper, hero/section backgrounds visible with parallax on scroll, map readable.
- **2026-05-15 — Real brand logo + Google Maps.**
  - User provided two real brand SVGs: `Panache_Logo-01.svg` (blue/navy version for light backgrounds) and `Panache_Logo-02.svg` (white version for dark backgrounds). Copied both to `images/panache-logo-01.svg` and `images/panache-logo-02.svg`. Each file is the academy's actual circular emblem + "Panaché Academy" wordmark at viewBox 500×166 (3:1 ratio).
  - Replaced the temporary letterform "P" placeholder + text in every page's brand markup (10 occurrences across 5 HTML files — both header and footer per page). Used two `<img>` tags per brand with CSS show/hide based on `.brand-light` parent class.
  - CSS: removed old `.brand-mark / .brand-text / .brand-name / .brand-sub` rules; added `.brand-img` at 42px height (header) / 48px (footer), with `.brand .brand-img-light { display: none }` and `.brand.brand-light .brand-img-dark { display: none }` to swap variants automatically.
  - Replaced the contact-page map placeholder with a live Google Maps iframe embed: `<iframe src="https://maps.google.com/maps?q=Panache+Academy+Ahmedabad&t=&z=11&output=embed">`. No API key needed for this basic embed. The iframe fills the `.map-wrap` (360px height, full width).
  - DOM-verified in preview: header logo loads at 127×42, footer logo at 145×48 over navy `rgb(6,15,34)`, Google Maps iframe loaded at 885×419 with src=`maps.google.com`. Note: Chrome's screenshot capture hangs when the cross-origin Maps iframe is in the DOM — a known limitation; the iframe itself renders fine for users.
- **2026-05-15 — Partner logo integration.** User dropped 22 logo files into `D:\Panache Website\logos\`. Renamed all to URL-friendly slugs (e.g. `Air_India_logo_(2007–2023).svg` → `air-india.svg`, `Go Air Logo Vector.svg` → `goair.svg`). Replaced text-chip marquee on homepage with `<img>` tags for each logoed partner. Replaced text-chip sector lists on placements page with logo cards. CSS: added `.marquee-logos` and `.brand-chips-logos` variants that render each chip as a white card (150×72 marquee, 150×68 placements) with the partner logo inside (height 36px, contain).
  - **Removed names due to missing logos** (3 total):
    - **Vistara** — from homepage marquee + placements Aviation sector
    - **Worldwide DMC** — from placements Travel & Tourism sector
    - **Gujarat Tourism** — from placements Travel & Tourism sector
  - **Adjusted counts to match reality:**
    - Aviation sector: 10 → 9 partners
    - Travel & Tourism sector: 5 → 3 partners
    - Hotels & Resorts sector: 8 (unchanged)
    - Total: 23 → 20 partners. Updated KPI counter from 23+ to 20+ on placements, and homepage hero meta strip from "23+ Named Hiring Partners" to "20+".
  - **Two extra logo files were not used** because their filenames (`Og2.png`, `idUVfgCKoQ_logos.png`) didn't identify a specific brand — kept in folder but unreferenced.
  - **All 20 partners with logos used in both homepage marquee + placements sector cards** (counts: Aviation 9, Hotels 8, Travel 3).
- **2026-05-15 — Brand color migration: beige → brand yellow.** User pointed out Panache brand is blue + yellow (per the logo SVG which uses `#fdc900`). Migrated:
  - `--gold: #D4A574` (beige) → `--gold: #FDC900` (brand yellow)
  - `--gold-bright: #E8BC85` → `#FFD633` (slightly brighter for hover)
  - Added `--gold-deep: #C89D00` — used for yellow text on light backgrounds where bright yellow has poor contrast
  - Replaced all `rgba(212,165,116,X)` derivatives (30+ occurrences) with `rgba(253,201,0,X)`
  - Replaced inline gradient end colors `#c2925f` and `#b88958` with `#C89D00` for consistency
  - **Contrast fixes for yellow-on-light-bg readability:**
    - `.course-tag`: yellow text → navy text on stronger yellow tint (was 0.12 alpha, now 0.22)
    - `.location-area`: same treatment — navy on yellow tint
    - `.quote-mark` (testimonials): bright yellow → gold-deep (`#C89D00`) for visibility on cream
    - `.story-role` (placements cards): bright yellow → gold-deep on white card
    - `.accred-issuer` (about page accreditations): bright yellow → gold-deep
    - `.timeline-phase` (about page chapters): bright yellow → gold-deep
    - `.story-badge` already had its bg upped and color set to navy
  - All elements where yellow appears on dark navy backgrounds (hero, KPI band, eyebrows in dark sections, partner ribbons, footer headings) kept as brand yellow — high contrast and on-brand.
  - DOM-verified: course-tag now navy(11,30,63) on yellow tint(253,201,0,0.22) ✓ readable. Story-role gold-deep(200,157,0) on white ✓ readable.
