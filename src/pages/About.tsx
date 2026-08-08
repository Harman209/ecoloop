import React from 'react';
import { Link } from 'react-router-dom';
import { 
  School, 
  Award, 
  Leaf, 
  Sparkles, 
  Users, 
  BookOpen, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <main style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="eyebrow">
            <School size={13} />
            ABOUT THE INITIATIVE
          </span>
          <h1 className="section-title">ECOLOOP — Circular Economy Initiative</h1>
          <p className="section-subtitle">
            A pioneering student-led model developed at Swami Sant Dass Public School, Jalandhar, demonstrating how educational institutions can turn daily waste into high-value ecological and entrepreneurial assets.
          </p>
        </div>

        {/* School Context & Exhibition Banner */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-card-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            marginBottom: '4rem',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="badge badge-current">CBSE Skill Expo 2026</span>
              <span className="badge">Swami Sant Dass Public School</span>
            </div>

            <h2 style={{ fontSize: '1.85rem', marginBottom: '1rem' }}>
              Transforming Campus Waste into Tangible Worth
            </h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
              Every day, schools generate significant volumes of discarded paper, uniform textiles, cafeteria organic waste, and packaging plastics. Historically, these materials follow a linear disposal pattern: <em>Take → Use → Dump</em>.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>
              <strong>ECOLOOP</strong> alters this paradigm by instituting a closed-loop micro-factory within the school campus. By engaging students in segregation, pulping, biological fermentation, and crafting, waste is systematically converted into products needed right back in our classrooms and local community.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'var(--color-surface-subtle)',
              border: '1px solid var(--color-card-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.75rem',
            }}
          >
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={18} style={{ color: 'var(--color-accent-orange)' }} />
              CBSE Skill Expo Details
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <div>
                <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                  Institution
                </span>
                <strong style={{ color: 'var(--color-primary-dark)' }}>
                  Swami Sant Dass Public School, Jalandhar
                </strong>
              </div>

              <div>
                <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                  Exhibition Theme
                </span>
                <span style={{ color: 'var(--color-primary-dark)' }}>
                  Environment &amp; Sustainability
                </span>
              </div>

              <div>
                <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                  Sub-Theme
                </span>
                <span style={{ color: 'var(--color-primary-green)', fontWeight: 600 }}>
                  Circular Economy for Zero Waste Schools
                </span>
              </div>

              <div>
                <span style={{ color: 'var(--color-text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>
                  Project Role
                </span>
                <span style={{ color: 'var(--color-text-primary)' }}>
                  Physical Process Demonstration &amp; Digital Marketplace MVP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of the ECOLOOP Model */}
        <section style={{ marginBottom: '4rem' }}>
          <div className="section-header">
            <span className="eyebrow">
              <Sparkles size={13} />
              CORE PILLARS
            </span>
            <h2 className="section-title">The Four Pillars of ECOLOOP</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card-icon">
                <Leaf size={24} />
              </div>
              <h3 className="feature-card-title">1. Circular Ecology</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Transitioning school operations from linear landfills to cyclical resource retention, demonstrating that zero waste is achievable at campus scale.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <BookOpen size={24} />
              </div>
              <h3 className="feature-card-title">2. Green Skills Curriculum</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Hands-on training for students in biological composting, vermiculture, chemical-free enzyme fermentation, textile upcycling, and paper engineering.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon orange">
                <TrendingUp size={24} />
              </div>
              <h3 className="feature-card-title">3. Student Entrepreneurship</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Developing early business literacy: cost estimation, catalogue marketing, order processing, and managing ethical customer relationships.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <Users size={24} />
              </div>
              <h3 className="feature-card-title">4. Community Reinvestment</h3>
              <p style={{ fontSize: '0.9rem' }}>
                All surplus funds flow directly back into equipment upgrades and environmental activities, ensuring project perpetuity.
              </p>
            </div>
          </div>
        </section>

        {/* Honest Distinction Banner */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-card-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem 2.5rem',
            borderLeft: '5px solid var(--color-secondary-green)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
            <ShieldCheck size={20} style={{ color: 'var(--color-primary-green)' }} />
            <span>Honest Project Demonstration &amp; Future Scope</span>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
            This website serves as the <strong>digital business/marketplace layer</strong> of our CBSE Skill Expo physical demonstration. It demonstrates how student-led circular products can be discovered and ordered. Where advanced concepts (such as cluster school licensing and green skill workshops) are proposed, they represent our forward-looking roadmap to scale circular economy education across Indian schools.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/products" className="btn btn-primary">
            <span>Browse Products Catalogue</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
};
