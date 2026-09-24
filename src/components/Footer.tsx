import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenMenu: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMenu }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171513] text-[#FAF8F3] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <h3 className="font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase font-light text-[#FAF8F3] mb-1">
              PERCH
            </h3>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#DED3C4] font-medium mb-6">
              WINE & COFFEE BAR
            </p>

            <address className="not-italic text-xs md:text-sm font-sans text-[#FAF8F3]/70 leading-relaxed font-light mb-8 max-w-sm">
              71, Khan Market<br />
              1st Floor, Rabindra Nagar<br />
              Khan Market, New Delhi
            </address>

            <button
              onClick={onOpenMenu}
              className="px-6 py-2.5 bg-[#FAF8F3] text-[#171513] hover:bg-[#DED3C4] text-xs font-sans font-semibold tracking-[0.2em] uppercase transition-colors"
            >
              VIEW MENU
            </button>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-[#DED3C4] mb-6">
              NAVIGATION
            </h4>
            <ul className="space-y-3 font-sans text-xs tracking-[0.15em] uppercase text-[#FAF8F3]/70">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenMenu}
                  className="hover:text-white transition-colors uppercase tracking-[0.15em] text-left"
                >
                  Menu
                </button>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-white transition-colors">
                  Visit
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Philosophy / Atmosphere */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-[#DED3C4] mb-6">
                ATMOSPHERE
              </h4>
              <p className="font-serif italic text-base text-[#FAF8F3]/80 leading-relaxed font-light">
                “An oasis of delectable tranquility in the bustle of Delhi’s iconic Khan Market. Making room for solitude as well as social conviviality.”
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#DED3C4] hover:text-white transition-colors group self-start"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#FAF8F3]/40 tracking-wider gap-4">
          <p>© Perch Wine & Coffee Bar. All rights reserved.</p>
          <p className="uppercase text-[10px] tracking-[0.2em]">
            71, KHAN MARKET · NEW DELHI
          </p>
        </div>
      </div>
    </footer>
  );
};
