# 🌿 ECOLOOP — Circular Economy Marketplace MVP

[![Theme](https://img.shields.io/badge/Theme-Environment%20%26%20Sustainability-1F6B4F.svg)](#)
[![Sub-Theme](https://img.shields.io/badge/Sub--Theme-Circular%20Economy%20for%20Zero%20Waste%20Schools-5D8A72.svg)](#)
[![Institution](https://img.shields.io/badge/School-Swami%20Sant%20Dass%20Public%20School%2C%20Jalandhar-171A18.svg)](#)

> **"Waste is not the end of a product's life. It is the beginning of a new one."**  
> *A student-led circular economy model that transforms school waste into useful products, practical skills, and sustainable value.*

---

## 📌 Product Overview

**ECOLOOP** is an innovative circular economy initiative developed at **Swami Sant Dass Public School, Jalandhar**.

The physical project demonstrates how waste generated on a school campus can be:
1. **Collected** at source
2. **Segregated** into pure material streams
3. **Processed** through student-led workshops
4. **Converted** into functional, high-utility goods
5. **Used** internally within the school
6. **Offered** to the wider community
7. **Generate** self-sustaining ethical revenue
8. **Reinvest** 100% of proceeds back into sustainability infrastructure

This web application serves as the **Digital Business & Marketplace Layer** of the ECOLOOP initiative, making the entrepreneurial and resource-recovery model tangible for exhibition judges, teachers, students, parents, and community members.

```
WASTE → RESOURCE RECOVERY → PRODUCT CREATION → CUSTOMER → REVENUE → REINVESTMENT → SUSTAINABILITY ↺
```

---

## 🚀 Key Website Features

- **🏠 Page 1: Landing / Home (`/`)**
  - **Hero Section:** Value proposition, tagline *"FROM WASTE TO WORTH."*, school credentials, and direct CTAs.
  - **Foundational Statement:** High-impact ethos statement.
  - **Product Showcase:** Featured catalogue grid with material source tags.
  - **Interactive Circular Process Wheel:** Clickable 8-stage interactive visual wheel.
  - **The ECOLOOP Business Loop:** Visual economic sequence and 5 value streams.
  - **Purpose & Impact:** 4 pillars on zero-waste campuses, green skills, and student entrepreneurship.

- **🛍️ Page 2: Products Catalogue (`/products`)**
  - Responsive **3-column desktop / 2-column tablet / 1-column mobile** grid.
  - Filterable by 6 product categories.
  - Real-time search by product name, description, or recovered input material.

- **🔍 Page 3: Dynamic Product Detail Pages (`/products/:slug`)**
  - High-resolution product showcase with automatic error fallback.
  - Sections: *Made From*, *How It Creates Value*, *Where It Can Be Used (Applications)*, and *Circular Impact*.
  - Specification & honesty notices (e.g. non-structural Eco-Bricks notice, non-medical Bio-Enzyme notice).
  - Direct *"Enquire / Order"* CTA pre-populating the enquiry portal.
  - Related circular products carousel.

- **🔄 Page 4: How It Works (`/how-it-works`)**
  - Deep-dive into campus collection, color-coded bins, student workshop stations, and the closed reinvestment loop.

- **🏫 Page 5: About ECOLOOP (`/about`)**
  - School context, zero-waste campus vision, and green skill competencies.

- **💼 Page 6: Business Model (`/business-model`)**
  - 5 Revenue streams distinguishing between **Current Demonstration** and **Future Scope**.
  - **100% Reinvestment Mandate:** 40% Tool Upgrades, 35% Biological Beds, 25% Green Skills Lab.

- **📝 Page 7: Enquiry / Order Portal (`/enquire`)**
  - Real-time **Google Sheets Live Sync** integration.
  - Offline-safe `localStorage` storage backup for exhibition reliability.
  - Built-in **Exhibition Admin Modal** to view submissions and **Download Excel / CSV** with 1 click.

---

## 📦 Complete Product Catalogue (10 Circular Products)

| # | Product Name | Category | Recovered Material Input | Application |
|---|---|---|---|---|
| 1 | **Seed Paper** | Paper & Plantable Products | Discarded notebook/office paper + seeds | Greeting cards, bookmarks, tags, certificates |
| 2 | **Bio-Enzyme Cleaner** | Organic Resource Recovery | Citrus fruit & vegetable peels + jaggery | Campus maintenance & cleaning demonstrations |
| 3 | **Recycled Uniform Bags** | Upcycled Textiles | Outgrown uniforms & textile offcuts | Shopping, book carry, everyday tote bags |
| 4 | **Eco-Bricks** | Recycled Material Products | Clean soft plastics + PET bottles | Garden edging, landscaping borders (non-structural) |
| 5 | **Organic Compost** | Organic Resource Recovery | Canteen scraps + dry garden leaves | School gardens, botanical beds, plantation |
| 6 | **Vermicompost** | Organic Resource Recovery | Pre-composted organic waste + *Eisenia fetida* | High-potency organic fertilizer for potted plants & gardens |
| 7 | **Vertical Garden Systems** | Green Campus Products | Recovered containers, bottles, frames | Wall gardens, corridor greening, micro-plantation |
| 8 | **Teaching-Learning Aids** | Educational Products | Cardboard boxes, bottle caps, scrap wire | STEM models, geometry kits, physics demonstrators |
| 9 | **Recycled Decorative Products**| Recycled Material Products | Jars, scrap paper rolls, jute twine | Desk organizers, pen stands, eco-displays |
| 10| **Recycled Furniture / Stools** | Green Campus Products | Wooden pallets, rubber rings, fabric scraps | Eco-corners, activity zones, exhibition seating |

---

## 📊 Google Sheets Live Integration

Enquiries submitted through the `/enquire` page automatically append to the connected Google Sheet via Google Apps Script:

- **Webhook Configuration:** [`src/config/enquiry.ts`](./src/config/enquiry.ts)
- **Google Apps Script Template:** [`google_apps_script.js`](./google_apps_script.js)

---

## 🖼️ Image Assets Structure

All photos are stored in [`/public/images/`](./public/images/):
- **Logo:** `/public/images/logo/ecoloop-logo.png`
- **Favicon:** `/public/favicon.svg` (Green Infinity Loop)
- **Model Diagrams:** `/public/images/model/circular-loop-diagram.svg`
- **Product Photos & Fallback SVGs:** `/public/images/products/`

---

## 💻 Tech Stack

- **Framework:** React 18 with TypeScript
- **Bundler / Dev Server:** Vite 6
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Styling:** Custom Vanilla CSS Design System with CSS Tokens
- **Fonts:** *Plus Jakarta Sans* & *Space Grotesk* (Google Fonts)

---

## 🛠️ Local Development & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Harman209/ecoloop.git
cd ecoloop

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build production bundle
npm run build
```

---

## 🏫 Credits & Acknowledgements

- **Initiative:** ECOLOOP
- **Institution:** Swami Sant Dass Public School, Jalandhar
- **Theme:** Environment & Sustainability
- **Sub-Theme:** Circular Economy for Zero Waste Schools
