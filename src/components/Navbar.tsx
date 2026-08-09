import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles, Send, Recycle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="navbar">
        <div className="container navbar-container">
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            <img
              src="/images/logo/ecoloop-logo.png"
              alt="ECOLOOP — From Waste to Worth"
              style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/logo/ecoloop-logo.svg';
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav>
            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={`nav-link ${isActive('/products') ? 'active' : ''}`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className={`nav-link ${isActive('/how-it-works') ? 'active' : ''}`}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/business-model"
                  className={`nav-link ${isActive('/business-model') ? 'active' : ''}`}
                >
                  Business Model
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="nav-actions">
            <Link to="/products" className="btn btn-primary btn-sm nav-desktop-cta">
              <span>Explore Products</span>
              <ArrowRight size={15} />
            </Link>
            <button
              className="mobile-menu-btn"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Standalone Mobile Drawer Outside Header Backdrop Filter */}
      {isOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-card-border)' }}>
              <span className="eyebrow eyebrow-accent" style={{ fontSize: '0.75rem', margin: 0 }}>
                <Sparkles size={12} />
                Circular Economy Initiative
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                Navigation
              </span>
            </div>

            <nav className="mobile-nav-list">
              <Link
                to="/"
                className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>Home</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/products"
                className={`mobile-nav-link ${isActive('/products') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>Products Catalogue (10 Items)</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/how-it-works"
                className={`mobile-nav-link ${isActive('/how-it-works') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>How ECOLOOP Works</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>About &amp; Green Skills</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/business-model"
                className={`mobile-nav-link ${isActive('/business-model') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>Business Model &amp; Revenue</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/enquire"
                className={`mobile-nav-link ${isActive('/enquire') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>Enquire / Order MVP</span>
                <Send size={18} style={{ color: 'var(--color-accent-orange)' }} />
              </Link>
            </nav>

            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                to="/products"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={closeMenu}
              >
                <Recycle size={16} />
                <span>Explore Products</span>
              </Link>
              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                Swami Sant Dass Public School, Jalandhar
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
