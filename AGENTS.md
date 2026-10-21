# ECOLOOP — Agent Guidelines & Context

## 1. Project Overview
- **Name:** ECOLOOP
- **Origin:** Swami Sant Dass Public School, Jalandhar (student-led initiative)
- **Domain:** Circular economy, zero-waste management, waste-to-value
- **Current Stage:** MVP / early market validation (CBSE exhibition phase is complete; moving toward standalone brand and international educational showcases).
- **Core Premise:** *"We don't just manage waste, we create value from it."* Transforming waste from an expense/disposal problem into an input raw material for real, usable products.

## 2. Roles & Contributions
- **Teacher (Ms. Jasmine Shrivastav):** Built the physical demonstration model (segregation chamber, slurry mesh filtration, churning, composting/biogas pathways).
- **Harman (Creator / Tech & Strategy):** Ideated the circular business model, product strategy, unit economics, and built the entire digital platform / web marketplace.
- **Audience & Context:** Currently presenting to international peers and students (e.g., eTwinning environmental projects) focusing on the **digital and entrepreneurial** side of sustainability.

## 3. Product Portfolio Rules
Only include and reference the 6 verified real products:
1. **Eco-bricks:** Plastic bottles packed tight with non-recyclable wrappers.
2. **MLP Sheets:** Compressed Multi-Layered Plastic waste sheets for durable utility.
3. **Bottle Planters:** Upcycled plastic bottles converted into simple planters.
4. **Uniform Bags:** Repurposed old school uniforms and scrap fabric (always tied to uniforms, not generic tote bags).
5. **Seed Paper:** Handmade recycled paper embedded with plantable seeds.
6. **Bioenzymes:** Natural multi-purpose cleaners fermented from fruit and vegetable peels.

### Strict Portfolio Guardrails:
- **NEVER** treat the mesh pipeline filter as a product (it is strictly a wastewater process component).
- **NEVER** include furniture, stools, or decorative bottle crafts.
- **NEVER** invent revenue numbers, sales metrics, or unverified environmental claims (CO2 reduction, etc.).
- The platform is an **enquiry / order-lead flow**, not an automated payment gateway.

## 4. Voice, Tone & "Harman's Vibe"
- **Builder / Maker First:** Talk like students who got their hands dirty and built real things. Practical, grounded, and candid.
- **No Corporate Fluff:** Strictly avoid buzzwords like *"revolutionizing sustainability"*, *"paradigm shift"*, *"synergistic solutions"*, or *"disruptive impact"*.
- **No Stiff AI Formatting:** Avoid generic lists filled with robotic headings, em-dash spam, or preaching down to the audience about "saving Mother Earth".
- **Action Verbs:** Prefer direct statements: *"we collect"*, *"we process"*, *"we build"*, *"we test"*, *"we sell"*.
- **Peer-to-Peer:** Energetic, witty, honest, relatable to high school students and young makers.

## 5. Tech Stack & Architecture
- **Framework:** React 18 + TypeScript + Vite
- **Icons:** `lucide-react`
- **Routing:** `react-router-dom` (SPA routing with Netlify/Vercel rewrites)
- **Backend / Form Inquiries:** Google Apps Script web app endpoint (`google_apps_script.js`) forwarding order/enquiry leads directly to Google Sheets.
- **Hosting:** Vercel (`ecoloop-ssdps.vercel.app` or custom domain)

## 6. Development Workflow
- **Install dependencies:** `npm install`
- **Run dev server:** `npm run dev`
- **Build & verify:** `npm run build`
- **Typecheck:** `tsc --noEmit`

## 7. active engagements
- **linkedin post:** https://lnkd.in/p/d4qb2bsJ
- **upcoming presentation:** saturday, september 26, 2026.
- **audience:** high school students in reunion island (french overseas department) working on an etwinning environmental project.
- **contact:** madame jemina grondin (school partner of dr. sonia mago).
- **focus:** digital platform and circular entrepreneurship. see `docs/presentation-reunion-island.md` for full context.
