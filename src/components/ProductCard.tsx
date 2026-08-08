import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imgSrc, setImgSrc] = useState<string>(product.image);

  const handleImageError = () => {
    // If the .jpg image file is not yet replaced, fallback to our crafted SVG illustration
    if (imgSrc !== product.fallbackImage) {
      setImgSrc(product.fallbackImage);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card-image-wrap">
        <img
          src={imgSrc}
          alt={product.name}
          onError={handleImageError}
          loading="lazy"
        />
        <div className="product-card-category-pill">
          {product.category}
        </div>
      </div>

      <div className="product-card-content">
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-desc">{product.description}</p>

        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
            <strong>Made from:</strong> {product.madeFrom}
          </div>
        </div>

        <div className="product-card-footer">
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-secondary-green)' }}>
            {product.indicativePrice}
          </span>
          <Link
            to={`/products/${product.slug}`}
            className="btn btn-secondary btn-sm"
          >
            <span>View Product</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
