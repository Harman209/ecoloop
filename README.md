# ecoloop

> a student-led circular economy model that turns school waste into useful products, practical skills, and sustainable value.

live deployment: [ecoloop-ssdps.vercel.app](https://ecoloop-ssdps.vercel.app)  
institution: swami sant dass public school, jalandhar  
author: [harman](https://h4rman.com)

---

## essential documents

- **one-page project brief:** [docs/ecoloop-project-brief.pdf](docs/ecoloop-project-brief.pdf) ([web view](docs/ecoloop-project-brief.html))
- **student setup guide:** [docs/setup-guide.pdf](docs/setup-guide.pdf) ([web view](docs/setup-guide.html))
- **presentation deck (annotated):** [docs/presentation/ecoloop-presentation-deck_annotated.pdf](docs/presentation/ecoloop-presentation-deck_annotated.pdf)
- **speaker pointers & notes:** [docs/presentation-pointers.html](docs/presentation-pointers.html)

---

## overview

ecoloop bridges physical school waste recovery with a digital storefront and self-funding financial model.

instead of letting campus plastic end up in landfills or sitting in storage closets as unsold exhibition crafts, ecoloop closes the loop:

```
waste collected -> segregated -> pressed sheets / raw inputs -> student goods -> storefront -> revenue -> reinvested into materials ↺
```

1. **collection:** students collect clean soft plastics, packaging wrappers, bottles, and uniform scraps.
2. **processing & bulk exchange:** soft multi-layered plastic (mlp) packaging wrappers are exchanged by weight for compressed, heat-pressed mlp utility sheets.
3. **fabrication:** students turn the sheets and materials into functional products (stationery, bags, planters).
4. **digital storefront:** this web application lets the school community, parents, and partners browse products and submit enquiries.
5. **100% reinvestment:** every rupee collected from sales goes back into purchasing raw sheets, thread, and workshop tools. zero private profit.

---

## verified product portfolio

| # | product | category | recovered input material | primary application |
|---|---|---|---|---|
| 1 | **mlp sheets** | recycled plastics | post-consumer food wrappers & laminated films | waterproof utility boards, signboards, work mats |
| 2 | **eco-bricks** | recycled plastics | soft plastics packed tight into pet bottles | garden boundaries, perimeter edging, walkways |
| 3 | **bottle planters** | upcycled containers | recovered beverage bottles & wicking cord | classroom windowsill herbs, nursery cups |
| 4 | **uniform bags** | upcycled textiles | outgrown school uniforms & durable offcuts | book carry, daily tote bags, event kits |
| 5 | **seed paper** | paper & plantable | notebook paper scrap embedded with seeds | greeting cards, bookmarks, plantation kits |
| 6 | **bioenzymes** | organic recovery | citrus fruit peels, canteen scraps, jaggery | natural multi-purpose surface cleaning |

---

## zero-dollar architecture

the platform runs with zero monthly server bills:

- **frontend:** react 18 + typescript + vite, hosted on vercel's free hobby tier with automatic ssl.
- **icons & styling:** lucide-react with a lightweight vanilla css design token system.
- **backend & database:** an enquiry form posting to a google apps script webhook (`google_apps_script.js`), appending orders directly into a free google sheet.
- **offline reliability:** localstorage fallback caching in the browser to ensure zero data loss during offline presentations or spotty school wi-fi.

---

## download & run locally

### 1. download options

**option a: clone with git (recommended)**
```bash
git clone https://github.com/Harman209/ecoloop.git
cd ecoloop
```

**option b: download zip**
1. click the green **code** button at the top of the github page.
2. click **download zip**.
3. extract the zip file and open your terminal in the extracted folder.

### 2. install dependencies

make sure you have [node.js](https://nodejs.org) (v18 or higher) installed, then run:

```bash
npm install
```

### 3. start development server

```bash
npm run dev
```

open your browser and navigate to `http://localhost:5173`.

### 4. production build & preview

```bash
# typecheck and compile to dist/
npm run build

# preview local production build
npm run preview
```

---

## repository structure

```
ecoloop/
├── docs/                     # project briefs, setup guides, presentations
│   ├── ecoloop-project-brief.pdf
│   ├── setup-guide.pdf
│   ├── presentation/         # slide deck, annotated pdf, build scripts
│   └── archive/              # historical project handoffs
├── public/                   # static images, icons, logos, diagrams
│   └── images/
│       ├── products/         # product photographs & fallback svgs
│       └── model/            # circular loop diagrams
├── src/
│   ├── components/           # navbar, footer, process wheel, business loop
│   ├── config/               # enquiry endpoints and webhook urls
│   ├── data/                 # verified product definitions & specifications
│   ├── pages/                # home, products, detail, business model, enquiry
│   ├── styles/               # design tokens and layout css
│   └── types/                # typescript schemas
├── google_apps_script.js     # webhook backend template for google sheets
├── AGENTS.md                 # autonomous coding agent instructions & boundaries
└── README.md
```

---

## credits & license

- **school:** swami sant dass public school, jalandhar
- **teacher mentor:** ms. jasmine shrivastav (physical model & mechanical process)
- **concept, business model & digital platform:** [harman](https://h4rman.com)
