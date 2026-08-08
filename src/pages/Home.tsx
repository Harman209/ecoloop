import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CircularProcessWheel } from '../components/CircularProcessWheel';
import { BusinessLoopGraphic } from '../components/BusinessLoopGraphic';
import { 
  ArrowRight, 
  Sparkles, 
  School, 
  Recycle, 
  Leaf, 
  TrendingUp, 
  ShieldCheck, 
  Lightbulb, 
  Layers,
  Award
} from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <span className="eyebrow">
                <Leaf size={13} />
                ENVIRONMENT &amp; SUSTAINABILITY
              </span>
              <span className="eyebrow eyebrow-accent">
                <Award size={13} />
                CBSE SKILL EXPO
              </span>
            </div>

            <h1 className="hero-tagline">
              ECOLOOP<br />
              <span style={{ color: 'var(--color-primary-green)' }}>FROM WASTE TO WORTH.</span>
            </h1>

            <p className="hero-description">
              A student-led circular economy model that transforms school waste into useful products, practical skills and sustainable value.
            </p>

            <div className="hero-cta-group">
              <Link to="/products" className="btn btn-primary">
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary">
                <span>How ECOLOOP Works</span>
              </Link>
            </div>

            <div className="hero-school-badge">
              <School size={16} style={{ color: 'var(--color-primary-green)' }} />
              <span>Swami Sant Dass Public School, Jalandhar</span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="/images/model/circular-loop-diagram.svg"
              alt="ECOLOOP Circular Economy Process Diagram"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div
              style={{
                marginTop: '1rem',
                padding: '0.85rem 1.15rem',
                backgroundColor: 'var(--color-surface-subtle)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.85rem',
                border: '1px solid var(--color-card-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-primary-green)' }}></span>
                <span style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                  Continuous Circular Loop
                </span>
              </div>
              <span style={{ color: 'var(--color-primary-green)', fontWeight: 700 }}>
                Zero Waste to Landfill ↺
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE STATEMENT BANNER */}
      <section style={{ padding: '0 0 3rem 0' }}>
        <div className="container">
          <div className="statement-banner">
            <div style={{ maxWidth: '850px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--color-accent-orange)',
                  fontWeight: 700,
                  fontSize: '0.8125rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                <Sparkles size={14} />
                THE FOUNDATIONAL ETHOS
              </div>
              <h2 className="statement-quote">
                &ldquo;Waste is not the end of a product&apos;s life. It is the beginning of a new one.&rdquo;
              </h2>
              <p className="statement-subcopy">
                ECOLOOP connects responsible waste management with product creation and entrepreneurship, creating a continuous cycle in which resources stay in use for longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SHOWCASE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">
              <Recycle size={13} />
              PRODUCT CATALOGUE
            </span>
            <h2 className="section-title">Created from School Resources</h2>
            <p className="section-subtitle">
              Every product demonstrates tangible material transformation, moving from campus waste to functional utility.
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/products" className="btn btn-primary">
              <span>View All 10 Circular Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. HOW ECOLOOP WORKS (INTERACTIVE PROCESS WHEEL) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow eyebrow-accent">
              <Layers size={13} />
              THE CIRCULAR SYSTEM
            </span>
            <h2 className="section-title">How ECOLOOP Works</h2>
            <p className="section-subtitle">
              Waste → Segregation → Processing → Product Creation → School/Community Use → Sale of Surplus → Revenue → Reinvestment
            </p>
          </div>

          <CircularProcessWheel />
        </div>
      </section>

      {/* 5. THE BUSINESS LOOP & REVENUE MODEL */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">
              <TrendingUp size={13} />
              ENTREPRENEURIAL LAYER
            </span>
            <h2 className="section-title">The ECOLOOP Business Loop</h2>
            <p className="section-subtitle">
              Demonstrating how a circular school initiative generates ethical revenue and reinvests 100% into sustainability infrastructure.
            </p>
          </div>

          <BusinessLoopGraphic />

          <div style={{ marginTop: '3.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Revenue Streams &amp; Value Pathways
            </h3>

            <div className="revenue-grid">
              <div className="revenue-card">
                <div>
                  <div className="revenue-card-header">
                    <span className="badge badge-current">Current Demonstration</span>
                    <Recycle size={20} style={{ color: 'var(--color-primary-green)' }} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Product Sales</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    Sale of recovered-material goods (seed paper stationery, upcycled bags, organic compost packs).
                  </p>
                </div>
              </div>

              <div className="revenue-card">
                <div>
                  <div className="revenue-card-header">
                    <span className="badge badge-current">Internal Value</span>
                    <School size={20} style={{ color: 'var(--color-primary-green)' }} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>School Supply</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    Products directly substitute institutional procurement for garden fertilizers, cleaning demonstrators, and certificate papers.
                  </p>
                </div>
              </div>

              <div className="revenue-card">
                <div>
                  <div className="revenue-card-header">
                    <span className="badge badge-current">Community Reach</span>
                    <Sparkles size={20} style={{ color: 'var(--color-primary-green)' }} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Community Orders</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    Surplus products offered to parents, alumni, and local eco-conscious citizens through our enquiry portal.
                  </p>
                </div>
              </div>

              <div className="revenue-card">
                <div>
                  <div className="revenue-card-header">
                    <span className="badge badge-future">Future Scope</span>
                    <Lightbulb size={20} style={{ color: 'var(--color-accent-orange)' }} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Green Skill Workshops</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    Future possibility: Student-led sustainability workshops teaching paper-making, composting, and textile upcycling.
                  </p>
                </div>
              </div>

              <div className="revenue-card">
                <div>
                  <div className="revenue-card-header">
                    <span className="badge badge-future">Future Scope</span>
                    <TrendingUp size={20} style={{ color: 'var(--color-accent-orange)' }} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Model Adaptation &amp; Licensing</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                    Future possibility: The ECOLOOP operational blueprint could be adapted by partner schools across CBSE clusters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PURPOSE & IMPACT */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">
              <ShieldCheck size={13} />
              PURPOSE &amp; GREEN SKILLS
            </span>
            <h2 className="section-title">Built by Students, Designed for Impact</h2>
            <p className="section-subtitle">
              Bridging academic concepts of zero-waste with hands-on maker skills and entrepreneurial execution.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card-icon">
                <Recycle size={24} />
              </div>
              <h3 className="feature-card-title">Zero-Waste Campus Model</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Demonstrates how an educational institution can divert organic scraps, scrap paper, and textile waste away from city dumps.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon orange">
                <Sparkles size={24} />
              </div>
              <h3 className="feature-card-title">Practical Green Skills</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Equips students with hands-on competencies in biological waste decomposition, pulp engineering, and sustainable manufacturing.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <TrendingUp size={24} />
              </div>
              <h3 className="feature-card-title">Micro-Entrepreneurship</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Fosters financial literacy and business acumen by managing customer acquisition, unit cost analysis, and ethical reinvestment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION */}
      <section className="section-dark" style={{ padding: '5rem 0' }}>
        <div className="container text-center">
          <span className="eyebrow eyebrow-accent" style={{ marginBottom: '1.25rem' }}>
            CBSE SKILL EXPO 2026
          </span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>
            Experience the ECOLOOP Circular Model
          </h2>
          <p style={{ fontSize: '1.125rem', maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
            Explore our product catalogue, learn how each item is created from recovered waste, or submit an enquiry to support our school initiative.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary">
              <span>Explore Products</span>
              <ArrowRight size={16} />
            </Link>
            <Link to="/enquire" className="btn btn-secondary">
              <span>Submit Project Enquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
