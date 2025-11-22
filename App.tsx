import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import SpecialFeature from './components/SpecialFeature';
import Ambience from './components/Ambience';
import Philosophy from './components/Philosophy';
import Reviews from './components/Reviews';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-dark">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <MenuHighlights />
        <SpecialFeature />
        <Ambience />
        <Philosophy />
        <Reviews />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;