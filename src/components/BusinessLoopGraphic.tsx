import React from 'react';
import { 
  Trash2, 
  Recycle, 
  PackageCheck, 
  Users, 
  IndianRupee, 
  RefreshCw, 
  Leaf
} from 'lucide-react';

export const BusinessLoopGraphic: React.FC = () => {
  const loopNodes = [
    { label: 'WASTE', desc: 'School Waste Collected', icon: <Trash2 size={20} />, color: 'var(--color-primary-dark)' },
    { label: 'RESOURCE RECOVERY', desc: 'Segregated & Processed', icon: <Recycle size={20} />, color: 'var(--color-primary-green)' },
    { label: 'PRODUCT CREATION', desc: 'Handcrafted Goods', icon: <PackageCheck size={20} />, color: 'var(--color-primary-green)' },
    { label: 'CUSTOMER', desc: 'School & Community', icon: <Users size={20} />, color: 'var(--color-secondary-green)' },
    { label: 'REVENUE', desc: 'Ethical Financial Return', icon: <IndianRupee size={20} />, color: 'var(--color-accent-orange)' },
    { label: 'REINVESTMENT', desc: 'Tools & Green Skills', icon: <RefreshCw size={20} />, color: 'var(--color-primary-green)' },
    { label: 'SUSTAINABILITY', desc: 'Zero-Waste Future ↺', icon: <Leaf size={20} />, color: 'var(--color-primary-green)' },
  ];

  return (
    <div style={{ width: '100%' }}>
      {/* Visual Sequence Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          alignItems: 'stretch',
          position: 'relative',
        }}
      >
        {loopNodes.map((node) => (
          <div
            key={node.label}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-card-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem 1rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-surface-subtle)',
                color: node.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '0.75rem',
              }}
            >
              {node.icon}
            </div>

            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: node.color,
                letterSpacing: '0.04em',
                marginBottom: '0.25rem',
                fontFamily: 'var(--font-display)',
              }}
            >
              {node.label}
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
              {node.desc}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '1.75rem',
          backgroundColor: '#ffffff',
          border: '1px solid var(--color-card-border)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          borderLeft: '4px solid var(--color-primary-green)',
        }}
      >
        <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
          <strong>The Reinvestment Principle:</strong> Products created from recovered resources first satisfy internal school operational requirements. Surplus products are catalogued and offered to the wider community. Revenue generated is transparently reinvested into waste-processing equipment (paper pulp presses, composting tumblers, sewing workstations) and student green-skill development, creating a continuous loop where resources stay in active use longer.
        </p>
      </div>
    </div>
  );
};
