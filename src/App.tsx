import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { HowItWorks } from './pages/HowItWorks';
import { About } from './pages/About';
import { BusinessModel } from './pages/BusinessModel';
import { Enquire } from './pages/Enquire';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/business-model" element={<BusinessModel />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
