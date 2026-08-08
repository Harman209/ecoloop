import { Product, ProductCategory } from '../types/product';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Paper & Plantable Products',
  'Upcycled Textiles',
  'Organic Resource Recovery',
  'Recycled Material Products',
  'Green Campus Products',
  'Educational Products',
];

export const PRODUCTS: Product[] = [
  {
    slug: 'seed-paper',
    name: 'Seed Paper',
    category: 'Paper & Plantable Products',
    tagline: 'Paper that can become a plant instead of becoming waste.',
    description:
      'Paper waste can be transformed into plantable seed paper, giving discarded paper a second purpose while creating a product that can return nutrients and life to the environment.',
    madeFrom: 'Recovered waste paper + organic plant seeds',
    applications: [
      'Greeting cards',
      'Bookmarks',
      'Tags & Badges',
      'Certificates',
      'Educational activities',
    ],
    howItCreatesValue:
      'Recovered school notebooks and office sheets are segregated, shredded, pulped, embedded with native botanical seeds, and manually pressed into biodegradable, germinable sheets.',
    circularImpact:
      'Prevents post-consumer paper from reaching incinerators or landfills, transforming discarded cellulose into a living plant.',
    image: '/images/products/seed-paper.jpg',
    fallbackImage: '/images/products/seed-paper.svg',
    indicativePrice: 'Batch orders / Price on enquiry',
    featured: true,
  },
  {
    slug: 'bio-enzyme-cleaner',
    name: 'Bio-Enzyme Cleaner',
    category: 'Organic Resource Recovery',
    tagline: 'Natural cleaning solution fermented from citrus fruit peels.',
    description:
      'Selected fruit and vegetable peels can be processed through fermentation to create a bio-enzyme based cleaning solution, demonstrating the productive reuse of organic waste.',
    madeFrom: 'Suitable organic / fruit peel waste, jaggery, and water',
    applications: [
      'Cleaning demonstrations',
      'School maintenance applications where appropriate',
      'Sustainability education & lab workshops',
    ],
    howItCreatesValue:
      'Citrus peels from school canteens undergo anaerobic microbial fermentation over 90 days, releasing natural organic acids and plant enzymes that break down grease and surface grime.',
    circularImpact:
      'Diverts methane-generating citrus peels from landfills into a functional, non-toxic maintenance product for school spaces.',
    image: '/images/products/bio-enzyme.jpg',
    fallbackImage: '/images/products/bio-enzyme.svg',
    indicativePrice: 'Campus batches / Price on enquiry',
    cautionNotice:
      'Formulated for educational demonstrations and appropriate school surface maintenance. Does not make unsupported medical, disinfectant, or chemical performance claims.',
    featured: true,
  },
  {
    slug: 'recycled-uniform-bags',
    name: 'Recycled Uniform Bags',
    category: 'Upcycled Textiles',
    tagline: 'An old uniform gets a new life.',
    description:
      'Old school uniforms and suitable textile waste can be repurposed into reusable bags, extending the useful life of fabric that might otherwise be discarded.',
    madeFrom: 'Old school uniforms / segregated textile waste',
    applications: [
      'Shopping & Groceries',
      'School supplies & Book carry',
      'Everyday reusable tote bags',
      'Exhibition kit carriers',
    ],
    howItCreatesValue:
      'Durable, high-tensile cotton-polyester school uniforms are collected during annual uniform turnover, sanitized, patterned, and tailored into sturdy multi-compartment utility bags.',
    circularImpact:
      'Keeps high-embodied-energy fabrics in active daily circulation for years while displacing single-use polythene bags across the school community.',
    image: '/images/products/uniform-bag.jpg',
    fallbackImage: '/images/products/uniform-bag.svg',
    indicativePrice: 'Price on enquiry',
    featured: true,
  },
  {
    slug: 'eco-bricks',
    name: 'Eco-Bricks',
    category: 'Recycled Material Products',
    tagline: 'Dense plastic encapsulation for landscaping and boundaries.',
    description:
      'Suitable plastic waste can be repurposed into eco-brick style units for non-structural applications and sustainability demonstrations.',
    madeFrom: 'Clean, dry non-biodegradable soft plastics packed into PET bottles',
    applications: [
      'Landscaping & Planter edging',
      'Garden boundaries & walkways',
      'Demonstration structures',
      'Awareness & STEM activities',
    ],
    howItCreatesValue:
      'Non-recyclable wrappers, clean packaging films, and lightweight plastics are densely compacted into standardized PET bottles to achieve uniform structural rigidity.',
    circularImpact:
      'Safely encapsulates unrecyclable multi-layered plastics, keeping them out of open drains and waste streams while building functional garden borders.',
    image: '/images/products/eco-bricks.jpg',
    fallbackImage: '/images/products/eco-bricks.svg',
    indicativePrice: 'Demonstration units / On enquiry',
    cautionNotice:
      'Designed strictly for non-structural landscaping borders, garden perimeter elements, and awareness installations. Not for load-bearing civil construction.',
    featured: false,
  },
  {
    slug: 'compost',
    name: 'Organic Compost',
    category: 'Organic Resource Recovery',
    tagline: 'Organic waste becomes a useful resource.',
    description:
      'Biodegradable waste such as suitable food scraps and garden waste can be processed through composting to produce organic compost for soil and gardening applications.',
    madeFrom: 'Canteen organic scraps, dry foliage, garden clippings, raw food waste',
    applications: [
      'School gardens & Botanical beds',
      'Campus plantation drives',
      'Soil conditioning & Landscaping',
      'Community tree-care initiatives',
    ],
    howItCreatesValue:
      'Balanced layering of nitrogen-rich green waste and carbon-rich dry leaves in aerated campus compost pits produces dark, rich humus filled with beneficial soil microbes.',
    circularImpact:
      'Eliminates organic waste transport emissions and completes the campus nutrient cycle by restoring fertility directly to school grounds without synthetic inputs.',
    image: '/images/products/compost.jpg',
    fallbackImage: '/images/products/compost.svg',
    indicativePrice: 'Available per batch / Price on enquiry',
    featured: true,
  },
  {
    slug: 'vermicompost',
    name: 'Vermicompost',
    category: 'Organic Resource Recovery',
    tagline: 'Nutrient-rich natural bio-fertilizer processed by earthworms.',
    description:
      'Organic waste can be processed using vermicomposting to produce nutrient-rich vermicompost for gardening and soil applications.',
    madeFrom: 'Pre-composted biodegradable waste + specialized earthworms (Eisenia fetida)',
    applications: [
      'School gardens & herbal patches',
      'Plant nurseries & Potted plants',
      'Home gardening enthusiasts',
      'Horticulture workshops',
    ],
    howItCreatesValue:
      'Red worms ingest partially decomposed organic matter, excreting uniform micro-granular castings packed with plant-ready nitrogen, phosphorus, and potassium.',
    circularImpact:
      'Rapidly bio-converts campus organic residues into top-tier organic fertilizer, replacing chemical fertilizers with biologically active soil nutrition.',
    image: '/images/products/vermicompost.jpg',
    fallbackImage: '/images/products/vermicompost.svg',
    indicativePrice: 'Available per kg / Price on enquiry',
    featured: false,
  },
  {
    slug: 'vertical-garden',
    name: 'Vertical Garden Systems',
    category: 'Green Campus Products',
    tagline: 'Transforming barren walls into green micro-ecosystems.',
    description:
      'Recovered containers and suitable discarded materials can be repurposed into vertical gardening systems, combining waste reduction with greener school spaces.',
    madeFrom: 'Recovered plastic containers, crates, discarded mounting frames',
    applications: [
      'School corridors & verandas',
      'Campus boundary walls',
      'Classroom balcony spaces',
      'Small-space urban plantation',
    ],
    howItCreatesValue:
      'Discarded containers are fitted with drainage, filled with ECOLOOP compost, and arranged modularly along walls to maximize foliage in compact footprint areas.',
    circularImpact:
      'Reclaims rigid plastics while expanding vertical green canopy, improving school microclimate and indoor air freshness.',
    image: '/images/products/vertical-garden.jpg',
    fallbackImage: '/images/products/vertical-garden.svg',
    indicativePrice: 'Custom modular setups on enquiry',
    featured: false,
  },
  {
    slug: 'teaching-learning-aids',
    name: 'Teaching-Learning Aids',
    category: 'Educational Products',
    tagline: 'Discarded materials transformed into tactile educational tools.',
    description:
      'Recovered and reusable materials can be transformed into educational aids, demonstrating how discarded materials can become useful resources for learning.',
    madeFrom: 'Cardboard boxes, bottle caps, wire scraps, discarded plastics, wooden offcuts',
    applications: [
      'Classroom STEM demonstrations',
      'Science exhibition models',
      'Environmental education activities',
      'Hands-on mathematics manipulatives',
    ],
    howItCreatesValue:
      'Students design and assemble interactive pedagogical models, abacuses, pulley demonstrators, and geometric solids utilizing materials rescued from recycling bins.',
    circularImpact:
      'Replaces factory-manufactured plastic teaching kits with locally crafted, repairable educational instruments while cultivating practical maker skills.',
    image: '/images/products/teaching-aids.jpg',
    fallbackImage: '/images/products/teaching-aids.svg',
    indicativePrice: 'Kit sets on enquiry',
    featured: false,
  },
  {
    slug: 'recycled-decorative-products',
    name: 'Recycled Decorative Products',
    category: 'Recycled Material Products',
    tagline: 'Creative upcycling demonstrating aesthetic reuse.',
    description:
      'Suitable discarded materials can be redesigned into decorative and awareness products, demonstrating creative reuse and sustainable product design.',
    madeFrom: 'Glass jars, fabric remnants, reclaimed paper rolls, jute twine',
    applications: [
      'Desk organizers & Pen stands',
      'Exhibition & Event mementos',
      'School reception eco-displays',
      'Handcrafted home decor accents',
    ],
    howItCreatesValue:
      'Discarded containers and scrap materials are redesigned with geometric texturing, eco-friendly finishes, and natural twines into premium functional desk pieces.',
    circularImpact:
      'Extends the utility of glass and rigid cardboard items by transitioning them from single-use packaging to permanent aesthetic fixtures.',
    image: '/images/products/decorative-products.jpg',
    fallbackImage: '/images/products/decorative-products.svg',
    indicativePrice: 'Handmade sets on enquiry',
    featured: false,
  },
  {
    slug: 'recycled-furniture-stools',
    name: 'Recycled Furniture / Stools',
    category: 'Green Campus Products',
    tagline: 'Extending material lifespan through functional furniture design.',
    description:
      'Suitable recovered materials can be repurposed into useful furniture or stool designs, demonstrating the possibility of extending material life through creative reuse.',
    madeFrom: 'Recovered wooden pallets, discarded tire rings, reinforced textile padding',
    applications: [
      'Campus eco-corners & Reading nooks',
      'Activity zones & Exhibition seating',
      'Green classroom demonstration areas',
      'Outdoor covered seating pavilions',
    ],
    howItCreatesValue:
      'Heavy discarded components such as shipping pallets and clean rubber rings are sanded, structurally bound, and cushioned with upcycled uniform fabric to create modular seating.',
    circularImpact:
      'Prevents bulky durable materials from burning or dumping, demonstrating that institutional seating can be created without virgin timber or metal harvesting.',
    image: '/images/products/furniture-stools.jpg',
    fallbackImage: '/images/products/furniture-stools.svg',
    indicativePrice: 'Demonstration prototypes on enquiry',
    cautionNotice:
      'Demonstration units built for creative reuse exploration in monitored, non-critical educational spaces. Not rated for commercial load-bearing.',
    featured: false,
  },
];
