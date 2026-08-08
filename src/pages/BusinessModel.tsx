import React from 'react';
import { Link } from 'react-router-dom';
import { BusinessLoopGraphic } from '../components/BusinessLoopGraphic';
import { 
  TrendingUp, 
  IndianRupee, 
  RotateCcw, 
  ShoppingBag, 
  School, 
  Users, 
  Lightbulb, 
  ArrowRight,
  Cpu
} from 'lucide-react';

export const BusinessModel: React.FC = () => {
  return (
    <main style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="eyebrow eyebrow-accent">
            <TrendingUp size={13} />
            ENTREPRENEURIAL SYSTEM
          </span>
          <h1 className="section-title">The ECOLOOP Business Loop</h1>
          <p className="section-subtitle">
            Demonstrating how a circular school initiative generates sustainable value, establishes viable revenue channels, and reinvests 100% into waste-processing infrastructure.
          </p>
        </div>

        {/* Core Business Loop Graphic */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-card-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            marginBottom: '4rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow">
              <RotateCcw size={13} />
              CONTINUOUS VALUE FLOW
            </span>
            <h2 style={{ fontSize: '2rem' }}>From Discarded Resource to Financial Perpetuity</h2>
          </div>

          <BusinessLoopGraphic />
        </div>

        {/* Revenue Streams: Current Demonstration vs Future Scope */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="section-header">
            <span className="eyebrow">
              <IndianRupee size={13} />
              REVENUE CHANNELS
            </span>
            <h2 className="section-title">5 Distinct Revenue &amp; Value Streams</h2>
            <p className="section-subtitle">
              Clearly delineating between our active campus demonstrations and our forward-looking expansion scope.
            </p>
          </div>

          <div className="revenue-grid">
            {/* Stream 1: Product Sales */}
            <div className="revenue-card">
              <div>
                <div className="revenue-card-header">
                  <span className="badge badge-current">Current Demonstration</span>
                  <ShoppingBag size={20} style={{ color: 'var(--color-primary-green)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>1. Product Sales</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Direct sale of batch-processed goods including seed paper bookmarks, greeting cards, certified organic vermicompost bags, and upcycled uniform tote bags.
                </p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-surface-subtle)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                <strong>Status:</strong> Active MVP catalogue items
              </div>
            </div>

            {/* Stream 2: School Supply Cost Offset */}
            <div className="revenue-card">
              <div>
                <div className="revenue-card-header">
                  <span className="badge badge-current">Internal Value Offset</span>
                  <School size={20} style={{ color: 'var(--color-primary-green)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>2. School Supply Offset</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Products are directly deployed across school operations—using ECOLOOP compost for campus greenery and seed paper for official commendation certificates, replacing outside procurement.
                </p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-surface-subtle)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                <strong>Status:</strong> Integrated into school maintenance
              </div>
            </div>

            {/* Stream 3: Community & Parent Orders */}
            <div className="revenue-card">
              <div>
                <div className="revenue-card-header">
                  <span className="badge badge-current">Community Reach</span>
                  <Users size={20} style={{ color: 'var(--color-primary-green)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>3. Community Orders</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Surplus capacity is offered to school parents, alumni, neighbourhood gardening groups, and event planners seeking sustainable corporate stationery and gifts.
                </p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-surface-subtle)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                <strong>Status:</strong> Active digital enquiry channel
              </div>
            </div>

            {/* Stream 4: Workshops (Future Scope) */}
            <div className="revenue-card" style={{ borderStyle: 'dashed' }}>
              <div>
                <div className="revenue-card-header">
                  <span className="badge badge-future">Future Scope</span>
                  <Lightbulb size={20} style={{ color: 'var(--color-accent-orange)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>4. Green Skill Workshops</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Future possibility: Student-conducted masterclasses for junior students, parents, and community clubs on hands-on home composting, bio-enzyme brewing, and paper making.
                </p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-surface-subtle)', fontSize: '0.8rem', color: 'var(--color-accent-orange)' }}>
                <strong>Status:</strong> Proposed educational revenue stream
              </div>
            </div>

            {/* Stream 5: Model Licensing (Future Scope) */}
            <div className="revenue-card" style={{ borderStyle: 'dashed' }}>
              <div>
                <div className="revenue-card-header">
                  <span className="badge badge-future">Future Scope</span>
                  <Cpu size={20} style={{ color: 'var(--color-accent-orange)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>5. School Adaptation &amp; Licensing</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Future possibility: Packaging the ECOLOOP toolkit (SOP manuals, segregation bin guidelines, recipe cards) for adoption by other CBSE schools seeking zero-waste campus status.
                </p>
              </div>
              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--color-surface-subtle)', fontSize: '0.8rem', color: 'var(--color-accent-orange)' }}>
                <strong>Status:</strong> Conceptual scale-up framework
              </div>
            </div>
          </div>
        </section>

        {/* 100% Reinvestment Model */}
        <section
          style={{
            backgroundColor: 'var(--color-primary-dark)',
            color: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '3.5rem 2.5rem',
            marginBottom: '4rem',
          }}
        >
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow eyebrow-accent" style={{ marginBottom: '1rem' }}>
              100% REINVESTMENT MANDATE
            </span>
            <h2 style={{ fontSize: '2.25rem', color: '#ffffff', marginBottom: '1.25rem' }}>
              How Revenue Fuels Campus Sustainability
            </h2>
            <p style={{ color: '#c4d1c9', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '2.5rem' }}>
              Unlike commercial ventures where profits extract value, every rupee earned through ECOLOOP product orders is channeled directly into upgrading physical processing tools.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
                textAlign: 'left',
              }}
            >
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-secondary-green)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  40% • TOOL UPGRADES
                </div>
                <div style={{ fontSize: '0.85rem', color: '#e0ece4' }}>
                  Hydraulic paper pulp presses, mesh mould deckles, and heavy-duty rotary shredders.
                </div>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-secondary-green)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  35% • BIOLOGICAL BEDS
                </div>
                <div style={{ fontSize: '0.85rem', color: '#e0ece4' }}>
                  Expanding vermicompost culture beds, aeration tumblers, and native seed banks.
                </div>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontWeight: 700, color: 'var(--color-secondary-green)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  25% • GREEN SKILLS LAB
                </div>
                <div style={{ fontSize: '0.85rem', color: '#e0ece4' }}>
                  Student maker toolkits, safety gear, and experiential sustainability workshops.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/enquire" className="btn btn-primary">
            <span>Submit a Product Order / Enquiry</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
};
