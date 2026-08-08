import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Recycle, 
  CheckCircle2, 
  AlertTriangle,
  Send,
  Leaf
} from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Product Not Found</h2>
        <p style={{ marginBottom: '2rem' }}>The requested circular product could not be located in our catalogue.</p>
        <Link to="/products" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Back to Products</span>
        </Link>
      </div>
    );
  }

  const [imgSrc, setImgSrc] = useState<string>(product.image);

  const handleImageError = () => {
    if (imgSrc !== product.fallbackImage) {
      setImgSrc(product.fallbackImage);
    }
  };

  // Related products from same or adjacent categories
  const relatedProducts = PRODUCTS.filter(
    (p) => p.slug !== product.slug
  ).slice(0, 3);

  return (
    <main style={{ padding: '3rem 0 5rem 0' }}>
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            to="/products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-primary-green)',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Products</span>
          </Link>
        </div>

        {/* Product Detail Grid */}
        <div className="product-detail-grid">
          {/* Left Column: Image & Provenance */}
          <div>
            <div className="product-detail-image">
              <img
                src={imgSrc}
                alt={product.name}
                onError={handleImageError}
              />
            </div>

            <div
              style={{
                marginTop: '1.25rem',
                padding: '1rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-card-border)',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.8125rem',
                color: 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Asset File: <code>{product.image}</code></span>
              <span className="badge badge-current">Verified School Creation</span>
            </div>

            {/* Caution/Honesty Notice if specified in PRD */}
            {product.cautionNotice && (
              <div className="caution-callout">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  <AlertTriangle size={16} />
                  <span>Specification Notice</span>
                </div>
                <div>{product.cautionNotice}</div>
              </div>
            )}
          </div>

          {/* Right Column: Information & Specifications */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span className="badge">{product.category}</span>
            </div>

            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              {product.name}
            </h1>

            {product.tagline && (
              <p
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--color-primary-green)',
                  marginBottom: '1.25rem',
                }}
              >
                &ldquo;{product.tagline}&rdquo;
              </p>
            )}

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: '1.65', marginBottom: '2rem' }}>
              {product.description}
            </p>

            {/* PRD Section 9: MADE FROM */}
            <div className="spec-block">
              <h4>
                <Layers size={17} />
                MADE FROM (RECOVERED RESOURCE)
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-primary)', fontWeight: 500 }}>
                {product.madeFrom}
              </p>
            </div>

            {/* PRD Section 9: HOW IT CREATES VALUE */}
            <div className="spec-block">
              <h4>
                <Sparkles size={17} />
                HOW IT CREATES VALUE
              </h4>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-primary)', lineHeight: '1.6' }}>
                {product.howItCreatesValue}
              </p>
            </div>

            {/* PRD Section 9: WHERE IT CAN BE USED / APPLICATIONS */}
            <div className="spec-block">
              <h4>
                <CheckCircle2 size={17} />
                WHERE IT CAN BE USED (APPLICATIONS)
              </h4>
              <div className="app-pill-list">
                {product.applications.map((app) => (
                  <span key={app} className="app-pill">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* PRD Section 9: CIRCULAR IMPACT */}
            <div
              style={{
                marginTop: '1.75rem',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--color-secondary-green-subtle)',
                border: '1px solid #c8dcd0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary-green)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.35rem' }}>
                <Leaf size={16} />
                <span>CIRCULAR IMPACT</span>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-primary)', fontWeight: 500, lineHeight: '1.5' }}>
                {product.circularImpact}
              </p>
            </div>

            {/* Price & Primary CTA */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--color-card-border)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 700 }}>
                  Pricing Model
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                  {product.indicativePrice}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link
                  to={`/enquire?product=${product.slug}`}
                  className="btn btn-primary"
                >
                  <Send size={16} />
                  <span>Enquire / Order</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Loop */}
        <section style={{ marginTop: '6rem', paddingTop: '3.5rem', borderTop: '1px solid var(--color-card-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div>
              <span className="eyebrow">
                <Recycle size={13} />
                MORE CIRCULAR PRODUCTS
              </span>
              <h3 style={{ fontSize: '1.75rem' }}>Other Recovered Goods</h3>
            </div>
            <Link to="/products" className="btn btn-secondary btn-sm">
              <span>View All Catalogue</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="product-grid">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
