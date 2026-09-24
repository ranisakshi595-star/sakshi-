import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Experience } from './components/Experience';
import { Atmosphere } from './components/Atmosphere';
import { MenuModal } from './components/MenuModal';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#171513] text-[#FAF8F3] font-sans selection:bg-[#6E3034] selection:text-white relative">
      {/* Refined Sticky Navigation */}
      <Navbar onOpenMenu={() => setIsMenuOpen(true)} />

      <main>
        {/* Full-screen Cinematic Hero */}
        <Hero onOpenMenu={() => setIsMenuOpen(true)} />

        {/* Editorial Introduction Section */}
        <Intro />

        {/* Coffee / Wine / Food Editorial Section */}
        <Experience onOpenMenu={() => setIsMenuOpen(true)} />

        {/* Full-width Atmosphere Section */}
        <Atmosphere />

        {/* Authentic Photo Gallery (Masonry & Lightbox) */}
        <Gallery />

        {/* Visit & Location Section */}
        <Location />

        {/* Contact & Table Inquiries Section */}
        <Contact />
      </main>

      {/* Dark Sophisticated Footer */}
      <Footer onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Full-Screen Menu Overlay */}
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
