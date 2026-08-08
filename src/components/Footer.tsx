import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, School, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & School Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <img
                src="/images/logo/ecoloop-logo.png"
                alt="ECOLOOP"
                style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/logo/ecoloop-logo.svg';
                }}
              />
            </div>
            
            <p style={{ marginBottom: '1.25rem', maxWidth: '360px' }}>
              A student-led circular economy model that transforms school waste into useful products, practical green skills, and sustainable value.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '0.5rem 0.85rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.85rem',
                color: '#d4e0d8',
              }}
            >
              <School size={16} style={{ color: 'var(--color-secondary-green)' }} />
              <span>Swami Sant Dass Public School, Jalandhar</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products Catalogue</Link>
              </li>
              <li>
                <Link to="/how-it-works">How ECOLOOP Works</Link>
              </li>
              <li>
                <Link to="/business-model">Business Loop &amp; Revenue</Link>
              </li>
              <li>
                <Link to="/about">About &amp; Green Skills</Link>
              </li>
              <li>
                <Link to="/enquire">Enquire / Order MVP</Link>
              </li>
            </ul>
          </div>

          {/* Exhibition Theme & Context */}
          <div>
            <h4 className="footer-heading">Exhibition</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#9eb0a4' }}>
                <Award size={14} style={{ color: 'var(--color-accent-orange)' }} />
                <span>CBSE Skill Expo</span>
              </li>
              <li style={{ color: '#9eb0a4' }}>
                <strong style={{ color: '#ffffff', display: 'block' }}>Theme:</strong>
                Environment &amp; Sustainability
              </li>
              <li style={{ color: '#9eb0a4' }}>
                <strong style={{ color: '#ffffff', display: 'block' }}>Sub-theme:</strong>
                Circular Economy for Zero Waste Schools
              </li>
            </ul>
          </div>

          {/* Circular Ethos */}
          <div>
            <h4 className="footer-heading">Circular Ethos</h4>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#9eb0a4', marginBottom: '1rem' }}>
              &ldquo;Waste is not the end of a product&apos;s life. It is the beginning of a new one.&rdquo;
            </p>
            <Link
              to="/enquire"
              className="btn btn-secondary btn-sm"
              style={{
                fontSize: '0.75rem',
                padding: '0.45rem 0.85rem',
                backgroundColor: 'transparent',
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.2)',
              }}
            >
              <span>Submit Project Enquiry</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} ECOLOOP • Swami Sant Dass Public School, Jalandhar. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Circular Economy MVP</span>
            <span>Digital Marketplace Layer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
