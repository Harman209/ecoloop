import React from 'react';
import { CircularProcessWheel } from '../components/CircularProcessWheel';
import { BusinessLoopGraphic } from '../components/BusinessLoopGraphic';
import { Link } from 'react-router-dom';
import { 
  RotateCcw, 
  Layers, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <main style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="eyebrow eyebrow-accent">
            <RotateCcw size={13} />
            CIRCULAR PROCESS
          </span>
          <h1 className="section-title">The Complete ECOLOOP System</h1>
          <p className="section-subtitle">
            A step-by-step breakdown of how school waste is segregated, transformed into high-value products, distributed, and reinvested into continuous green improvements.
          </p>
        </div>

        {/* Visual Circular Wheel Diagram & Detail Interactivity */}
        <div style={{ marginBottom: '5rem' }}>
          <CircularProcessWheel />
        </div>

        {/* Deep Dive Stage Breakdown Grid */}
        <section style={{ marginTop: '4rem' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">
              <Layers size={13} />
              SYSTEM PROTOCOLS
            </span>
            <h2 style={{ fontSize: '2rem' }}>Detailed Stage Protocols</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Step 1 & 2 */}
            <div className="feature-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge badge-current">Stages 1 &amp; 2</span>
                <h3 style={{ fontSize: '1.25rem' }}>Collection &amp; Segregation</h3>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                Color-coded collection units are established across Swami Sant Dass Public School. Students ensure strict segregation at source, dividing waste into dry cellulosic paper, organic kitchen peelings, textile discards, and rigid PET containers.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>Blue Bins: Clean used notebooks, print sheets, exam papers</li>
                <li>Green Bins: Fruit rinds, canteen raw scraps, garden leaves</li>
                <li>Grey Bins: Outgrown uniforms and textile fabric offcuts</li>
              </ul>
            </div>

            {/* Step 3 & 4 */}
            <div className="feature-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge badge-current">Stages 3 &amp; 4</span>
                <h3 style={{ fontSize: '1.25rem' }}>Processing &amp; Product Creation</h3>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                Student makers operate decentralized workshop stations: paper is macerated into seed pulp, organic scraps undergo aerobic composting and cold bio-fermentation, and fabrics are tailored into utility carry bags.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>Handmade Seed Paper drying racks &amp; screens</li>
                <li>90-Day anaerobic citrus bio-enzyme fermenters</li>
                <li>Eisenia fetida vermicomposting culture beds</li>
              </ul>
            </div>

            {/* Step 5 & 6 */}
            <div className="feature-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge badge-current">Stages 5 &amp; 6</span>
                <h3 style={{ fontSize: '1.25rem' }}>School Use &amp; Surplus Marketplace</h3>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                Finished outputs first supply the school&apos;s own operational needs (gardens, administrative stationery, botanical plantation). Surplus batches are catalogued here on the ECOLOOP digital marketplace for community distribution.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>Campus greening and classroom demonstration usage</li>
                <li>Digital enquiry and custom batch fulfillment</li>
                <li>Parent and local community engagement</li>
              </ul>
            </div>

            {/* Step 7 & 8 */}
            <div className="feature-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span className="badge badge-current">Stages 7 &amp; 8</span>
                <h3 style={{ fontSize: '1.25rem' }}>Revenue &amp; Green Reinvestment</h3>
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                All surplus revenues flow directly back into school sustainability equipment—funding enhanced paper presses, expanded vermiculture beds, and skill workshops. This closes the loop into better waste management.
              </p>
              <ul style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                <li>100% transparent circular reinvestment mechanism</li>
                <li>Capital self-sufficiency without continuous donor dependency</li>
                <li>Direct scalability for zero-waste school campuses</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Business Loop Graphic Section */}
        <section style={{ marginTop: '5rem', backgroundColor: '#ffffff', border: '1px solid var(--color-card-border)', borderRadius: 'var(--radius-lg)', padding: '3rem 2rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">
              <ShieldCheck size={13} />
              THE CLOSED-LOOP ADVANTAGE
            </span>
            <h3 style={{ fontSize: '1.85rem' }}>From Linear Discard to Circular Value</h3>
          </div>

          <BusinessLoopGraphic />

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/products" className="btn btn-primary">
              <span>Explore Products Created In This Loop</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
