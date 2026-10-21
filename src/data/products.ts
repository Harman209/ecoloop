import { Product, ProductCategory } from '../types/product';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Recycled Plastics',
  'Upcycled Containers',
  'Upcycled Textiles',
  'Paper & Plantable Products',
  'Organic Resource Recovery',
];

export const PRODUCTS: Product[] = [
  {
    slug: 'eco-bricks',
    name: 'Eco-Bricks',
    category: 'Recycled Plastics',
    tagline: 'Dense plastic encapsulation for non-structural landscaping and boundaries.',
    description:
      'Clean soft plastics and non-recyclable wrappers densely compacted into standardized PET bottles to safely contain difficult-to-recycle waste.',
    madeFrom: 'Clean, dry non-biodegradable soft plastics packed into PET bottles',
    applications: [
      'Landscaping & planter edging',
      'Garden boundaries & walkways',
      'Demonstration structures',
      'Awareness & eco-workshops',
    ],
    howItCreatesValue:
      'Non-recyclable wrappers, clean packaging films, and lightweight plastics are densely compacted into standardized PET bottles to achieve structural rigidity without burning or dumping.',
    circularImpact:
      'Safely encapsulates unrecyclable multi-layered plastics, keeping them out of open drains and municipal waste streams while creating functional garden perimeters.',
    image: '/images/products/eco-bricks.jpg',
    fallbackImage: '/images/products/eco-bricks.svg',
    indicativePrice: 'Demonstration units / Price on enquiry',
    cautionNotice:
      'Designed strictly for non-structural landscaping borders, garden perimeter elements, and awareness installations. Not for load-bearing civil construction.',
    featured: true,
  },
  {
    slug: 'mlp-sheets',
    name: 'MLP Sheets',
    category: 'Recycled Plastics',
    tagline: 'Durable utility boards heat-pressed from multi-layered plastic packaging.',
    description:
      'Multi-layered plastic wrappers and metalized films collected, shredded, and thermally compressed into resilient, water-resistant utility sheets.',
    madeFrom: 'Post-consumer multi-layered plastic (MLP) packaging, food wrappers, and clean laminated films',
    applications: [
      'Durable signboards & partition panels',
      'Outdoor tabletop surfaces',
      'Storage crate liners & partitions',
      'Waterproof work mats',
    ],
    howItCreatesValue:
      'Multi-layered plastics—normally impossible to recycle through conventional mechanical means—are segregated, shredded, and hot-pressed into dense, weather-proof composite boards.',
    circularImpact:
      'Diverts high-volume, low-value packaging from landfills and open burning, converting single-use wrappers into multi-year structural utility sheets.',
    image: '/images/products/mlp-sheets.jpg',
    fallbackImage: '/images/products/mlp-sheets.svg',
    indicativePrice: 'Custom dimensions / Price on enquiry',
    cautionNotice:
      'Thermal compression profile optimized for utility panels and partition boards. Keep away from direct high open flames.',
    featured: true,
  },
  {
    slug: 'bottle-planters',
    name: 'Bottle Planters',
    category: 'Upcycled Containers',
    tagline: 'Discarded plastic bottles repurposed into simple hanging and standing planters.',
    description:
      'Recovered single-use beverage bottles washed, perforated, and cut into modular planters for growing herbs, succulents, and nursery seedlings.',
    madeFrom: 'Discarded PET beverage bottles, cotton wicking cord, and soil compost mix',
    applications: [
      'Classroom windowsill greens',
      'Corridor & veranda hanging planters',
      'Seedling germination cups',
      'Balcony herb gardens',
    ],
    howItCreatesValue:
      'Single-use plastic bottles are rescued from disposal, trimmed, fitted with drainage and wicking lines, and filled with campus soil mix to host living plants.',
    circularImpact:
      'Keeps rigid beverage plastic in functional reuse for multiple growing cycles while expanding green coverage across school corridors.',
    image: '/images/products/bottle-planters.jpg',
    fallbackImage: '/images/products/bottle-planters.svg',
    indicativePrice: 'Individual units & batch sets / Price on enquiry',
    featured: true,
  },
  {
    slug: 'uniform-bags',
    name: 'Uniform Bags',
    category: 'Upcycled Textiles',
    tagline: 'Useful utility bags made by repurposing old school uniforms and fabric.',
    description:
      'Outgrown school uniforms and durable fabric offcuts collected during turnover, sanitized, and tailored into sturdy everyday tote and utility bags.',
    madeFrom: 'Outgrown school uniforms (cotton-polyester blends) and clean textile scrap',
    applications: [
      'Everyday tote & shopping bag',
      'School supply & book carry',
      'Exhibition kit bags',
      'Gym & extracurricular gear bag',
    ],
    howItCreatesValue:
      'High-tensile school uniform fabrics are collected, laundered, patterned, and hand-stitched into reinforced utility bags with sturdy load-bearing straps.',
    circularImpact:
      'Extends the active lifecycle of high-embodied-energy fabrics for years while displacing single-use plastic carry bags across the campus.',
    image: '/images/products/uniform-bag.jpg',
    fallbackImage: '/images/products/uniform-bag.svg',
    indicativePrice: 'Standard & custom sizes / Price on enquiry',
    featured: true,
  },
  {
    slug: 'seed-paper',
    name: 'Seed Paper',
    category: 'Paper & Plantable Products',
    tagline: 'Handmade recycled paper embedded with plantable native seeds.',
    description:
      'Discarded school notebook sheets and office paper pulped, pressed, and embedded with seeds to create biodegradable paper that grows instead of becoming waste.',
    madeFrom: 'Recovered waste paper, botanical pulp, and organic native plant seeds',
    applications: [
      'Greeting cards & invitations',
      'Bookmarks & gift tags',
      'Event certificates & badges',
      'Hands-on classroom plantation kits',
    ],
    howItCreatesValue:
      'Segregated paper scrap is shredded, water-pulped without toxic bleach, blended with hardy seeds, and hand-pressed into textured plantable stationery.',
    circularImpact:
      'Eliminates paper disposal to landfills and incinerators by transforming used cellulose into living plants and soil biomass.',
    image: '/images/products/seed-paper.jpg',
    fallbackImage: '/images/products/seed-paper.svg',
    indicativePrice: 'Batch orders / Price on enquiry',
    featured: true,
  },
  {
    slug: 'bioenzymes',
    name: 'Bioenzymes',
    category: 'Organic Resource Recovery',
    tagline: 'Natural multi-purpose cleaners fermented from citrus fruit and vegetable peels.',
    description:
      'Organic citrus peels and vegetable scraps fermented with jaggery and water to produce a natural, enzyme-rich cleaning solution for school surfaces.',
    madeFrom: 'Citrus fruit peels, canteen vegetable scraps, jaggery, and water',
    applications: [
      'Floor & hard surface cleaning',
      'Sink & tile sanitation demonstrations',
      'Odor neutralization in wash areas',
      'School biology & chemistry practicals',
    ],
    howItCreatesValue:
      'Canteen citrus peels undergo 90-day anaerobic fermentation, producing organic acids and natural enzymes that break down grease and grime.',
    circularImpact:
      'Prevents methane emissions from organic waste in dumps while replacing synthetic chemical cleaners with a locally fermented, biodegradable alternative.',
    image: '/images/products/bio-enzyme.jpg',
    fallbackImage: '/images/products/bio-enzyme.svg',
    indicativePrice: 'Campus batches / Price on enquiry',
    cautionNotice:
      'Formulated for surface maintenance and educational demonstrations. Natural fermentation product, not evaluated for medical or clinical disinfectant claims.',
    featured: true,
  },
];
