import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { CustomerType, EnquiryFormData } from '../types/product';
import { ENQUIRY_CONFIG } from '../config/enquiry';
import { 
  Send, 
  CheckCircle2, 
  ArrowLeft,
  Download,
  FileSpreadsheet,
  Table,
  X
} from 'lucide-react';

const CUSTOMER_TYPES: CustomerType[] = [
  'Student',
  'Parent',
  'School',
  'Organisation',
  'Individual',
  'Other',
];

interface StoredEnquiry extends EnquiryFormData {
  id: string;
  timestamp: string;
  productName: string;
}

const STORAGE_KEY = 'ecoloop_exhibition_enquiries';

export const Enquire: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProductSlug = searchParams.get('product') || PRODUCTS[0].slug;

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    productSlug: initialProductSlug,
    quantity: '1',
    customerType: 'Individual',
    address: '',
    city: 'Jalandhar',
    pinCode: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedEnquiries, setSavedEnquiries] = useState<StoredEnquiry[]>([]);
  const [showAdminModal, setShowAdminModal] = useState(false);

  // Load existing stored enquiries from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setSavedEnquiries(JSON.parse(stored));
      }
    } catch {
      // LocalStorage error ignore
    }
  }, [isSubmitted]);

  useEffect(() => {
    const productFromUrl = searchParams.get('product');
    if (productFromUrl && PRODUCTS.some((p) => p.slug === productFromUrl)) {
      setFormData((prev) => ({ ...prev, productSlug: productFromUrl }));
    }
  }, [searchParams]);

  const selectedProduct = PRODUCTS.find((p) => p.slug === formData.productSlug) || PRODUCTS[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newEnquiry: StoredEnquiry = {
      ...formData,
      id: 'ENC-' + Date.now().toString().slice(-6),
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      productName: selectedProduct.name,
    };

    // 1. Save to browser LocalStorage as an offline-safe backup
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      const parsed: StoredEnquiry[] = existing ? JSON.parse(existing) : [];
      const updated = [newEnquiry, ...parsed];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setSavedEnquiries(updated);
    } catch {
      // ignore storage limits
    }

    // 2. Transmit to Google Sheets Webhook if configured
    if (ENQUIRY_CONFIG.GOOGLE_SHEET_WEBHOOK_URL) {
      try {
        await fetch(ENQUIRY_CONFIG.GOOGLE_SHEET_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors', // standard for Google Apps Script Web Apps
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({
            timestamp: newEnquiry.timestamp,
            id: newEnquiry.id,
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber,
            email: formData.email || 'N/A',
            product: selectedProduct.name,
            quantity: formData.quantity,
            customerType: formData.customerType,
            address: formData.address || 'N/A',
            city: formData.city || 'Jalandhar',
            pinCode: formData.pinCode || 'N/A',
            message: formData.message || 'N/A',
          }),
        });
      } catch (err) {
        console.warn('Google Sheets transmission warning (saved locally):', err);
      }
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      productSlug: PRODUCTS[0].slug,
      quantity: '1',
      customerType: 'Individual',
      address: '',
      city: 'Jalandhar',
      pinCode: '',
      message: '',
    });
  };

  const exportCSV = () => {
    if (savedEnquiries.length === 0) {
      alert('No enquiries recorded yet.');
      return;
    }

    const headers = [
      'Timestamp',
      'Enquiry ID',
      'Full Name',
      'Phone Number',
      'Email',
      'Product',
      'Quantity',
      'Customer Type',
      'Address',
      'City',
      'PIN Code',
      'Message',
    ];

    const rows = savedEnquiries.map((enq) => [
      `"${enq.timestamp}"`,
      `"${enq.id}"`,
      `"${enq.fullName.replace(/"/g, '""')}"`,
      `"${enq.phoneNumber.replace(/"/g, '""')}"`,
      `"${(enq.email || '').replace(/"/g, '""')}"`,
      `"${enq.productName.replace(/"/g, '""')}"`,
      `"${enq.quantity.replace(/"/g, '""')}"`,
      `"${enq.customerType}"`,
      `"${(enq.address || '').replace(/"/g, '""')}"`,
      `"${(enq.city || '').replace(/"/g, '""')}"`,
      `"${(enq.pinCode || '').replace(/"/g, '""')}"`,
      `"${(enq.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `ECOLOOP_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main style={{ padding: '3.5rem 0 5rem 0' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="eyebrow eyebrow-accent">
            <Send size={13} />
            ORDER / ENQUIRY PORTAL
          </span>
          <h1 className="section-title">Product Enquiry &amp; Order Request</h1>
          <p className="section-subtitle">
            Submit a request for our student-crafted circular products. Our team will verify batch availability and contact you directly.
          </p>
        </div>

        {/* Live Sheet Status Banner */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-card-border)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <FileSpreadsheet size={22} style={{ color: 'var(--color-primary-green)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>Google Sheet Live Sync Ready</span>
                <span className="badge badge-current" style={{ fontSize: '0.7rem' }}>
                  {ENQUIRY_CONFIG.GOOGLE_SHEET_WEBHOOK_URL ? 'Connected' : 'Offline Backup Active'}
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                All submissions are instantly recorded with offline safety and transmitted to the ECOLOOP Order Sheet.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowAdminModal(true)}
            className="btn btn-secondary btn-sm"
            style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
          >
            <Table size={14} />
            <span>View Enquiries ({savedEnquiries.length})</span>
          </button>
        </div>

        {isSubmitted ? (
          /* Submission Feedback State (PRD Section 10) */
          <div className="form-feedback-card">
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#dcfce7',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h2 style={{ fontSize: '1.75rem', color: '#14532d', marginBottom: '1rem' }}>
              Enquiry Successfully Received
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#166534',
                maxWidth: '560px',
                margin: '0 auto 2rem auto',
                lineHeight: '1.6',
              }}
            >
              &ldquo;Thank you. Your enquiry has been received. The ECOLOOP team will contact you regarding availability and next steps.&rdquo;
            </p>

            {/* Summary Box */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #bbf7d0',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                maxWidth: '480px',
                margin: '0 auto 2rem auto',
                textAlign: 'left',
                fontSize: '0.875rem',
              }}
            >
              <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '0.75rem', borderBottom: '1px solid var(--color-surface-subtle)', paddingBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>Enquiry Summary</span>
                <span style={{ color: 'var(--color-primary-green)' }}>Recorded in Sheet</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Customer Name:</span>
                <strong>{formData.fullName}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Product Requested:</span>
                <strong>{selectedProduct.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Quantity:</span>
                <strong>{formData.quantity} unit(s)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Phone Contact:</span>
                <strong>{formData.phoneNumber}</strong>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/products" className="btn btn-primary">
                <span>Browse More Products</span>
              </Link>
              <button onClick={handleReset} className="btn btn-secondary">
                <span>Submit Another Enquiry</span>
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="form-card">
            <div className="form-grid">
              {/* Product Selection Dropdown */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="productSlug">
                  Select Product <span className="required">*</span>
                </label>
                <select
                  id="productSlug"
                  name="productSlug"
                  value={formData.productSlug}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  {PRODUCTS.map((prod) => (
                    <option key={prod.slug} value={prod.slug}>
                      {prod.name} ({prod.category})
                    </option>
                  ))}
                </select>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                  Selected product is automatically loaded from the product catalogue page.
                </span>
              </div>

              {/* Quantity */}
              <div className="form-group">
                <label className="form-label" htmlFor="quantity">
                  Quantity / Units Required <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 5, 20 sheets, 2 kg"
                  required
                  className="form-input"
                />
              </div>

              {/* Customer Type */}
              <div className="form-group">
                <label className="form-label" htmlFor="customerType">
                  Customer Type <span className="required">*</span>
                </label>
                <select
                  id="customerType"
                  name="customerType"
                  value={formData.customerType}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  {CUSTOMER_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="form-input"
                />
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label className="form-label" htmlFor="phoneNumber">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91 Mobile number"
                  required
                  className="form-input"
                />
              </div>

              {/* Email Address */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="email">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="form-input"
                />
              </div>

              {/* Address */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="address">
                  Delivery / Contact Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House/School/Office, Street, Area"
                  className="form-input"
                />
              </div>

              {/* City */}
              <div className="form-group">
                <label className="form-label" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Jalandhar"
                  className="form-input"
                />
              </div>

              {/* PIN Code */}
              <div className="form-group">
                <label className="form-label" htmlFor="pinCode">
                  PIN Code
                </label>
                <input
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="e.g. 144001"
                  className="form-input"
                />
              </div>

              {/* Message / Requirements */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="message">
                  Additional Notes / Custom Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify any custom embossing, event dates, seed type preferences, or special school requirements..."
                  className="form-textarea"
                />
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <Link
                to="/products"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-text-secondary)',
                }}
              >
                <ArrowLeft size={16} />
                <span>Back to Catalogue</span>
              </Link>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                <Send size={16} />
                <span>{isSubmitting ? 'Recording Enquiry...' : 'Submit Enquiry'}</span>
              </button>
            </div>
          </form>
        )}

        {/* Exhibition Coordinator / Admin Modal for Viewing & Exporting Enquiries */}
        {showAdminModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(23, 26, 24, 0.65)',
              backdropFilter: 'blur(4px)',
              zIndex: 999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                maxWidth: '750px',
                width: '100%',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileSpreadsheet size={22} style={{ color: 'var(--color-primary-green)' }} />
                  <h3 style={{ fontSize: '1.25rem' }}>Project Enquiries Record</h3>
                </div>
                <button
                  onClick={() => setShowAdminModal(false)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
                >
                  <X size={20} />
                </button>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                Total <strong>{savedEnquiries.length}</strong> enquiry submissions stored locally on this device.
              </p>

              {/* Table or Empty State */}
              <div style={{ flexGrow: 1, overflowY: 'auto', marginBottom: '1.5rem', border: '1px solid var(--color-card-border)', borderRadius: 'var(--radius-sm)' }}>
                {savedEnquiries.length > 0 ? (
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
                    <thead style={{ backgroundColor: 'var(--color-surface-subtle)', position: 'sticky', top: 0 }}>
                      <tr>
                        <th style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--color-card-border)' }}>Time</th>
                        <th style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--color-card-border)' }}>Name</th>
                        <th style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--color-card-border)' }}>Product</th>
                        <th style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--color-card-border)' }}>Qty</th>
                        <th style={{ padding: '0.6rem 0.75rem', borderBottom: '1px solid var(--color-card-border)' }}>Phone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {savedEnquiries.map((enq) => (
                        <tr key={enq.id} style={{ borderBottom: '1px solid var(--color-surface-subtle)' }}>
                          <td style={{ padding: '0.55rem 0.75rem', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>{enq.timestamp}</td>
                          <td style={{ padding: '0.55rem 0.75rem', fontWeight: 600 }}>{enq.fullName}</td>
                          <td style={{ padding: '0.55rem 0.75rem', color: 'var(--color-primary-green)' }}>{enq.productName}</td>
                          <td style={{ padding: '0.55rem 0.75rem' }}>{enq.quantity}</td>
                          <td style={{ padding: '0.55rem 0.75rem' }}>{enq.phoneNumber}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
                    No enquiries submitted yet. When judges or visitors submit the form, their responses will populate here.
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  onClick={exportCSV}
                  className="btn btn-primary btn-sm"
                  disabled={savedEnquiries.length === 0}
                >
                  <Download size={15} />
                  <span>Download Excel / CSV ({savedEnquiries.length})</span>
                </button>

                <button
                  onClick={() => setShowAdminModal(false)}
                  className="btn btn-secondary btn-sm"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
