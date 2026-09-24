import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

interface NavbarProps {
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit', href: '#visit' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171513]/95 backdrop-blur-md py-4 border-b border-white/10 shadow-lg'
            : 'bg-gradient-to-b from-[#171513]/80 via-[#171513]/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FAF8F3]"
          >
            <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.2em] text-[#FAF8F3] group-hover:text-[#DED3C4] transition-colors uppercase">
              PERCH
            </span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] text-[#FAF8F3]/70 uppercase font-medium -mt-0.5">
              WINE & COFFEE BAR
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs tracking-[0.18em] uppercase text-[#FAF8F3]/80 hover:text-[#FAF8F3] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#DED3C4] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenMenu}
              className="px-5 py-2.5 bg-[#FAF8F3] hover:bg-[#DED3C4] text-[#171513] text-xs font-sans font-semibold tracking-[0.15em] uppercase transition-all duration-200 shadow-sm active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              VIEW MENU
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#FAF8F3] hover:text-[#DED3C4] focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
              aria-label="Open mobile menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#171513] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl tracking-[0.2em] text-[#FAF8F3] uppercase">
                    PERCH
                  </span>
                  <span className="font-sans text-[9px] tracking-[0.3em] text-[#FAF8F3]/70 uppercase">
                    WINE & COFFEE BAR
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#FAF8F3]/80 hover:text-white"
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-xl tracking-wider text-[#FAF8F3]/90 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMenu();
                }}
                className="w-full py-3 bg-[#FAF8F3] text-[#171513] text-xs font-semibold tracking-[0.18em] uppercase text-center hover:bg-[#DED3C4] transition-colors"
              >
                VIEW MENU
              </button>
              <p className="text-[11px] text-[#FAF8F3]/50 text-center tracking-wider">
                71, Khan Market · 1st Floor, New Delhi
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
