import React from 'react';

export const Atmosphere: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/interior-panoramic.jpg"
          alt="Atmospheric interior panorama of Perch Wine & Coffee Bar"
          className="w-full h-full object-cover object-center scale-100 hover:scale-[1.03] transition-transform duration-1000 ease-out"
          loading="lazy"
        />
        {/* Scrim Overlay */}
        <div className="absolute inset-0 bg-[#171513]/60 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-transparent to-[#171513]" />
      </div>

      {/* Typography Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[11px] md:text-xs font-sans font-medium tracking-[0.3em] uppercase text-[#DED3C4] block mb-4">
          AN ATMOSPHERE OF TRANQUILITY
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.08em] text-[#FAF8F3] uppercase leading-tight mb-6 text-balance">
          GOOD COFFEE. GOOD WINE. GOOD COMPANY.
        </h2>

        <div className="w-12 h-[1px] bg-[#DED3C4]/60 mx-auto mb-6" />

        <p className="font-sans text-xs md:text-sm tracking-[0.25em] text-[#FAF8F3]/80 uppercase font-light">
          71, KHAN MARKET · 1ST FLOOR · NEW DELHI
        </p>
      </div>
    </section>
  );
};
