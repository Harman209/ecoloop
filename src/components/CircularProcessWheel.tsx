import React, { useState } from 'react';
import { 
  Trash2, 
  Layers, 
  Cpu, 
  Sparkles, 
  School, 
  ShoppingBag, 
  Coins, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  shortLabel: string;
  icon: React.ReactNode;
  stage: string;
  description: string;
  wasteStream: string;
  circularOutcome: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Waste Collection',
    shortLabel: '1. Waste',
    icon: <Trash2 size={24} />,
    stage: 'Source Collection on Campus',
    description:
      'Waste generated across classroom blocks, administrative offices, school canteen, and campus gardens is captured systematically at the generation point rather than mixed into municipal dumping.',
    wasteStream: 'Used worksheets, notebook paper, canteen citrus & food rinds, garden foliage, worn-out uniforms, clean plastic packaging.',
    circularOutcome: 'Prevents resource contamination and redirects materials from landfill streams.',
  },
  {
    id: 2,
    title: 'Source Segregation',
    shortLabel: '2. Segregation',
    icon: <Layers size={24} />,
    stage: 'Color-Coded Sorting Protocol',
    description:
      'Students manage dedicated segregation stations ensuring distinct material streams: dry paper waste, organic compostable matter, textile offcuts, and clean soft plastics.',
    wasteStream: 'Dry Paper, Organic Biomass, Fabric Textiles, Packaging Plastics.',
    circularOutcome: 'Ensures pure input streams for subsequent value-addition processes.',
  },
  {
    id: 3,
    title: 'Processing & Value Recovery',
    shortLabel: '3. Processing',
    icon: <Cpu size={24} />,
    stage: 'Student-Led Transformation Workshops',
    description:
      'Recovered materials undergo low-carbon mechanical and biological transformation: paper pulping, microbial fermentation, vermicomposting beds, and textile sanitization.',
    wasteStream: 'Bio-digestion, sheet pressing, cold fermentation, fabric cutting.',
    circularOutcome: 'Waste transforms into raw manufacturing inputs with zero toxic chemicals.',
  },
  {
    id: 4,
    title: 'Product Creation',
    shortLabel: '4. Product Creation',
    icon: <Sparkles size={24} />,
    stage: 'Eco-Product Manufacturing',
    description:
      'Students craft functional, high-utility goods: botanical seed paper stationery, natural bio-enzyme surface cleaners, upcycled uniform tote bags, compost packs, and modular vertical gardens.',
    wasteStream: 'Stationery, Campus Cleaners, Reusable Bags, Natural Fertilizers.',
    circularOutcome: 'Tangible products created with clear provenance and zero virgin resource extraction.',
  },
  {
    id: 5,
    title: 'School / Community Use',
    shortLabel: '5. School Use',
    icon: <School size={24} />,
    stage: 'Internal Campus Consumption',
    description:
      'The school itself is the primary consumer: ECOLOOP compost feeds school gardens, bio-enzymes support floor sanitation demonstrations, and seed paper is used for official school certificates.',
    wasteStream: 'School offices, botanical beds, science labs, campus events.',
    circularOutcome: 'Reduces school operational procurement costs and models circularity directly.',
  },
  {
    id: 6,
    title: 'Sale of Surplus',
    shortLabel: '6. Sale of Surplus',
    icon: <ShoppingBag size={24} />,
    stage: 'Marketplace & Community Outreach',
    description:
      'Surplus products beyond campus needs are catalogued on the ECOLOOP marketplace and presented to parents, local schools, and community sustainability enthusiasts.',
    wasteStream: 'Digital MVP marketplace, exhibition orders, community fairs.',
    circularOutcome: 'Connects student circular production with genuine market demand.',
  },
  {
    id: 7,
    title: 'Ethical Revenue Generation',
    shortLabel: '7. Revenue',
    icon: <Coins size={24} />,
    stage: 'Financial Sustainability Layer',
    description:
      'Proceeds from community orders establish a self-sustaining financial base, demonstrating that circular waste management can be economically viable.',
    wasteStream: 'Ethical transparent earnings from value-added product sales.',
    circularOutcome: 'Eliminates reliance on one-off grants or project funding.',
  },
  {
    id: 8,
    title: 'Green Reinvestment & Better Systems',
    shortLabel: '8. Reinvestment ↺',
    icon: <RotateCcw size={24} />,
    stage: 'Continuous Improvement Loop',
    description:
      '100% of generated revenue is reinvested into better waste-processing tools (improved paper screens, vermicompost beds, workshop tools) and student environmental education.',
    wasteStream: 'Infrastructure upgrades, student green-skill development, expanded capacity.',
    circularOutcome: 'The circular loop closes, enabling even higher waste recovery efficiency.',
  },
];

export const CircularProcessWheel: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const activeStep = PROCESS_STEPS.find((s) => s.id === activeStepId) || PROCESS_STEPS[0];

  return (
    <div className="process-flow-container">
      {/* Visual Step Selector Buttons */}
      <div className="process-steps-linear">
        {PROCESS_STEPS.map((step) => {
          const isActive = step.id === activeStepId;
          return (
            <button
              key={step.id}
              className={`process-step-pill ${isActive ? 'active' : ''}`}
              onClick={() => setActiveStepId(step.id)}
            >
              <span className="step-num">{step.id}</span>
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Details Panel */}
      <div className="process-active-card">
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-secondary-green-subtle)',
            color: 'var(--color-primary-green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {activeStep.icon}
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-current">Stage {activeStep.id} of 8</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
              {activeStep.stage}
            </span>
          </div>

          <h3 style={{ fontSize: '1.65rem', marginBottom: '0.85rem' }}>
            {activeStep.title}
          </h3>

          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
            {activeStep.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              backgroundColor: 'var(--color-surface-subtle)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-card-border)',
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-primary-green)', marginBottom: '0.25rem' }}>
                Material &amp; Action Flow
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                {activeStep.wasteStream}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-accent-orange)', marginBottom: '0.25rem' }}>
                Circular Impact
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-primary)' }}>
                {activeStep.circularOutcome}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                const nextId = activeStepId >= 8 ? 1 : activeStepId + 1;
                setActiveStepId(nextId);
              }}
            >
              <span>Next Stage ({activeStepId >= 8 ? 'Loop back to 1' : `Stage ${activeStepId + 1}`})</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
