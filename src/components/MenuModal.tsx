import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menu';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCategories = MENU_CATEGORIES.map((category) => {
    if (activeCategory !== 'all' && category.id !== activeCategory) {
      return null;
    }
    const matchingItems = category.items.filter((item) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const inName = item.name.toLowerCase().includes(q);
      const inDesc = item.description?.toLowerCase().includes(q);
      const inVariants = item.variants?.some((v) => v.label.toLowerCase().includes(q));
      return inName || inDesc || inVariants;
    });

    if (matchingItems.length === 0) return null;

    return {
      ...category,
      items: matchingItems,
    };
  }).filter(Boolean);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Perch Wine & Coffee Bar Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#F3EEE5] text-[#171513] animate-fadeIn"
    >
      {/* Sticky Header */}
      <header className="sticky top-0 z-20 bg-[#F3EEE5]/95 backdrop-blur-md border-b border-[#4A3930]/15 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.2em] text-[#171513] uppercase">
            PERCH
          </span>
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#6E3034] uppercase font-semibold">
            THE MENU · KHAN MARKET
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 text-xs font-sans tracking-[0.2em] uppercase font-semibold text-[#171513] hover:text-[#6E3034] hover:bg-[#DED3C4]/40 transition-colors rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-[#171513]"
          aria-label="Close menu"
        >
          <span>CLOSE</span>
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Filter & Category Bar */}
      <div className="bg-[#FAF8F3] border-b border-[#4A3930]/10 px-6 md:px-12 py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1" aria-label="Menu categories">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-sans font-medium tracking-wider uppercase whitespace-nowrap transition-colors rounded-sm ${
                activeCategory === 'all'
                  ? 'bg-[#171513] text-[#FAF8F3]'
                  : 'text-[#4A3930] hover:text-[#171513] hover:bg-[#DED3C4]/40'
              }`}
            >
              All Items
            </button>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-sans font-medium tracking-wider uppercase whitespace-nowrap transition-colors rounded-sm ${
                  activeCategory === cat.id
                    ? 'bg-[#171513] text-[#FAF8F3]'
                    : 'text-[#4A3930] hover:text-[#171513] hover:bg-[#DED3C4]/40'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </nav>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#4A3930]/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, coffee, wine..."
              className="w-full pl-9 pr-3 py-1.5 text-xs font-sans bg-transparent border border-[#4A3930]/20 focus:border-[#171513] rounded-sm text-[#171513] placeholder-[#4A3930]/50 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#4A3930]/60 hover:text-[#171513]"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Menu Body - Independently Scrollable */}
      <main className="flex-1 overflow-y-auto px-6 md:px-12 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-[#4A3930] italic mb-2">
                No menu items match your search
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="text-xs font-sans tracking-widest text-[#6E3034] uppercase underline mt-2"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => {
              if (!category) return null;
              return (
                <section key={category.id} className="pt-2">
                  {/* Category Header */}
                  <div className="border-b-2 border-[#171513] pb-4 mb-8 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                    <div>
                      <h2 className="font-serif text-3xl md:text-4xl text-[#171513] font-light tracking-wide uppercase">
                        {category.title}
                      </h2>
                      {category.subtitle && (
                        <p className="font-sans text-xs tracking-[0.2em] text-[#6E3034] uppercase font-medium mt-1">
                          {category.subtitle}
                        </p>
                      )}
                    </div>
                    {category.notes && (
                      <p className="text-xs font-sans text-[#4A3930]/75 italic max-w-sm text-left md:text-right">
                        {category.notes}
                      </p>
                    )}
                  </div>

                  {/* Item List */}
                  <div className="divide-y divide-[#4A3930]/10">
                    {category.items.map((item) => (
                      <div key={item.name} className="py-5 first:pt-0 last:pb-0">
                        {/* Primary Item Row */}
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-sans text-base md:text-lg font-semibold text-[#171513] tracking-tight">
                            {item.name}
                          </h3>
                          {item.price && (
                            <span className="font-sans font-medium text-sm md:text-base text-[#171513] tabular-nums shrink-0">
                              {item.price}
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        {item.description && (
                          <p className="font-sans text-xs md:text-sm text-[#4A3930]/80 font-normal leading-relaxed mt-1 max-w-2xl">
                            {item.description}
                          </p>
                        )}

                        {/* Variants (e.g. Avocado Tartine or Burrito choices) */}
                        {item.variants && item.variants.length > 0 && (
                          <div className="mt-3 pl-3 border-l-2 border-[#596052]/30 space-y-1.5">
                            {item.variants.map((v) => (
                              <div
                                key={v.label}
                                className="flex items-center justify-between text-xs text-[#4A3930]"
                              >
                                <span className="font-sans">{v.label}</span>
                                <span className="font-sans font-medium tabular-nums text-[#171513]">
                                  {v.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Add-ons */}
                        {item.addOns && item.addOns.length > 0 && (
                          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6E3034]">
                            <span className="font-medium uppercase tracking-wider text-[10px]">
                              Add-on:
                            </span>
                            {item.addOns.map((add) => (
                              <span key={add.label} className="font-sans">
                                {add.label} (+{add.price})
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              );
            })
          )}

          {/* Menu Editorial Footnote */}
          <footer className="pt-12 pb-8 border-t border-[#4A3930]/15 text-center text-xs font-sans text-[#4A3930]/65 space-y-1">
            <p>Government taxes as applicable. Please inform your server of any dietary allergies.</p>
            <p className="tracking-widest uppercase text-[10px]">
              PERCH WINE & COFFEE BAR · 71, KHAN MARKET, NEW DELHI
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};
