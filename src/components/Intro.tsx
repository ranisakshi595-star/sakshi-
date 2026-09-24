import React from 'react';

export const Intro: React.FC = () => {
  return (
    <section id="about" className="bg-[#F3EEE5] text-[#171513] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Editorial Kicker */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-sans font-medium tracking-[0.25em] text-[#6E3034] uppercase">
            ESTABLISHED IN KHAN MARKET
          </span>
          <div className="flex-1 h-[1px] bg-[#4A3930]/15" />
          <span className="text-xs font-sans tracking-[0.2em] text-[#4A3930]/60 uppercase">
            NEW DELHI
          </span>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171513] font-light tracking-tight leading-[1.1] mb-8 text-balance">
              A PLACE TO STAY A WHILE
            </h2>

            <div className="space-y-6 text-[#4A3930] font-sans font-normal text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Perch Wine & Coffee Bar was conceived as an oasis of delectable tranquility amidst the bustling energy of Delhi’s iconic Khan Market. Designed around a large and thoughtfully curated selection of both wine and coffee, it offers an unhurried sanctuary from morning through late evening.
              </p>
              <p>
                Our culinary offerings emphasize European dishes, clean flavours, simple techniques, and seasonal freshness. The space welcomes both quick replenishment and long, idyllic repose — inviting solitude with a book or convivial conversation over a bottle of wine.
              </p>
            </div>

            {/* Design & Architecture Callout */}
            <div className="mt-10 pt-8 border-t border-[#4A3930]/15 grid grid-cols-2 gap-6 max-w-xl">
              <div>
                <span className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#596052] font-semibold mb-1">
                  THE LOWER FLOOR
                </span>
                <p className="text-xs md:text-sm text-[#4A3930]/80 leading-normal">
                  High-stool seating along shared ledge counters and a communal log table with views of tree-lined storefronts.
                </p>
              </div>
              <div>
                <span className="block text-[11px] font-sans tracking-[0.2em] uppercase text-[#6E3034] font-semibold mb-1">
                  THE UPPER FLOOR
                </span>
                <p className="text-xs md:text-sm text-[#4A3930]/80 leading-normal">
                  Populated with comfortable couches and wide dining chairs crafted for intimate evening dining and wine.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Large Editorial Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 aspect-[3/4] overflow-hidden shadow-2xl bg-[#DED3C4]">
              <img
                src="/images/interior-dining.jpg"
                alt="Architectural woodwork and dining atmosphere at Perch Khan Market"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>

            {/* Subtle Offset Border Accent */}
            <div
              className="absolute -inset-4 border border-[#596052]/30 pointer-events-none -z-0 hidden sm:block"
              style={{ transform: 'translate(12px, 12px)' }}
            />

            {/* Editorial Caption */}
            <div className="mt-4 flex items-center justify-between text-[11px] font-sans tracking-widest text-[#4A3930]/60 uppercase">
              <span>PHOTO: ANDRE J. FANTHOME</span>
              <span>71 KHAN MARKET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
