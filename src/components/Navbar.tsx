import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <img
            src="/images/logo/ecoloop-logo.png"
            alt="ECOLOOP — From Waste to Worth"
            style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => {
              // Fallback to SVG if PNG fails
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

        {/* Desktop CTA */}
        <div className="nav-actions">
          <Link to="/products" className="btn btn-primary btn-sm">
            <span>Explore Products</span>
            <ArrowRight size={15} />
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="mobile-drawer">
          <div style={{ marginBottom: '0.5rem' }}>
            <span className="eyebrow eyebrow-accent" style={{ fontSize: '0.75rem' }}>
              <Sparkles size={12} />
              CBSE Skill Expo 2026
            </span>
          </div>

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
            <span>Products</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/how-it-works"
            className={`mobile-nav-link ${isActive('/how-it-works') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>How It Works</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>About ECOLOOP</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/business-model"
            className={`mobile-nav-link ${isActive('/business-model') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>Business Model</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/enquire"
            className={`mobile-nav-link ${isActive('/enquire') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <span>Enquire / Order</span>
            <ArrowRight size={18} />
          </Link>

          <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
            <Link
              to="/products"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={closeMenu}
            >
              <span>Explore All Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
