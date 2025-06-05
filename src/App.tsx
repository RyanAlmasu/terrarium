import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Story from './components/Story';
import CareGuide from './components/CareGuide';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { AnimationProvider } from './context/AnimationContext';

function App() {
  return (
    <AnimationProvider>
      <div className="min-h-screen bg-beige text-charcoal font-sans">
        <Header />
        <main>
          <Hero />
          <ProductShowcase />
          <Story />
          <CareGuide />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  );
}

export default App;