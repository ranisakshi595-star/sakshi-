import React from 'react';
import { ArrowDown, Compass } from 'lucide-react';

interface HeroProps {
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenu }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-ambience.jpg"
          alt="Perch Wine and Coffee Bar warm ambient interior in Khan Market"
          className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
          fetchPriority="high"
        />
        {/* Cinematic Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/55 to-[#171513]/40" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Typography & Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Subtle Location Marker */}
        <div className="inline-flex items-center gap-2 mb-6 text-[#DED3C4] text-[11px] md:text-xs tracking-[0.3em] uppercase font-sans">
          <span>71, KHAN MARKET</span>
          <span className="text-white/40">·</span>
          <span>1ST FLOOR</span>
          <span className="text-white/40">·</span>
          <span>NEW DELHI</span>
        </div>

        {/* Master Heading */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-[#FAF8F3] uppercase leading-none mb-3">
          PERCH
        </h1>

        {/* Brand Subtitle */}
        <p className="font-sans text-xs sm:text-sm md:text-base tracking-[0.35em] text-[#DED3C4] uppercase font-light mb-8">
          WINE & COFFEE BAR
        </p>

        {/* Fine Divider */}
        <div className="w-16 h-[1px] bg-[#DED3C4]/40 mb-8" />

        {/* Atmospheric Line */}
        <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#FAF8F3]/90 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          An easy-going wine bar that encourages you to explore the world of wine, coffee, and simple, delicious dishes.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenMenu}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF8F3] text-[#171513] hover:bg-[#DED3C4] text-xs font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-200 shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            VIEW MENU
          </button>
          <a
            href="#visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#FAF8F3]/40 hover:border-[#FAF8F3] text-[#FAF8F3] hover:bg-[#FAF8F3]/10 text-xs font-sans font-medium tracking-[0.2em] uppercase transition-all duration-200 backdrop-blur-xs"
          >
            <Compass className="w-3.5 h-3.5 text-[#DED3C4]" />
            <span>VISIT PERCH</span>
          </a>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#FAF8F3]/50 hover:text-[#FAF8F3] transition-colors group"
        aria-label="Scroll to introduction"
      >
        <span className="text-[9px] font-sans tracking-[0.25em] uppercase">DISCOVER</span>
        <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
      </a>
    </section>
  );
};
