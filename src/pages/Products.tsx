import React, { useState, useMemo } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, Info, Sparkles } from 'lucide-react';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.madeFrom.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="eyebrow">
            <Sparkles size={13} />
            ECOLOOP CATALOGUE
          </span>
          <h1 className="section-title">Products from Recovered Resources</h1>
          <p className="section-subtitle">
            Browse goods created through our student-led circular economy processing cycles. Every product diverts waste and delivers tangible utility.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Search Input */}
          <div
            style={{
              position: 'relative',
              maxWidth: '520px',
              margin: '0 auto',
              width: '100%',
            }}
          >
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-text-muted)',
              }}
            />
            <input
              type="text"
              placeholder="Search by product name, waste material, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{
                width: '100%',
                paddingLeft: '2.75rem',
                borderRadius: 'var(--radius-full)',
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div className="filter-tabs">
            <button
              className={`filter-tab-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Products ({PRODUCTS.length})
            </button>
            {PRODUCT_CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  className={`filter-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.75rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--color-card-border)',
            fontSize: '0.875rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <span>
            Showing <strong style={{ color: 'var(--color-primary-dark)' }}>{filteredProducts.length}</strong> of {PRODUCTS.length} circular products
          </span>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-primary-green)',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.8125rem',
              }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              backgroundColor: '#ffffff',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-card-border)',
            }}
          >
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>
              No products found matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Clear Search &amp; Show All Products
            </button>
          </div>
        )}

        {/* Informative Note regarding Exhibition Image Replacement */}
        <div
          style={{
            marginTop: '4rem',
            padding: '1.5rem 2rem',
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-card-border)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <Info size={22} style={{ color: 'var(--color-secondary-green)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', color: 'var(--color-primary-dark)' }}>
              Product Catalogue Note
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
              All 10 listed products represent physical items produced by student participants at Swami Sant Dass Public School. To replace any product image with actual project photographs, simply place corresponding JPEG/PNG files in <code style={{ backgroundColor: 'var(--color-surface-subtle)', padding: '2px 6px', borderRadius: '4px' }}>/public/images/products/[filename].jpg</code>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
