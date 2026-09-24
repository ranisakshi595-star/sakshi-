import React from 'react';
import { MapPin, Navigation, Clock, Building } from 'lucide-react';

export const Location: React.FC = () => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=Perch+Wine+%26+Coffee+Bar+71+Khan+Market+New+Delhi';

  return (
    <section id="visit" className="bg-[#FAF8F3] text-[#171513] py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#DED3C4] shadow-xl">
              <img
                src="/images/interior-nook.jpg"
                alt="Perch Khan Market window seating and tranquil corner"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
            {/* Architectural Label */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-sans tracking-widest text-[#4A3930]/60 uppercase">
              <span>INTERIOR DESIGN: ANAGRAM ARCHITECTS</span>
              <span>1ST FLOOR OVERLOOK</span>
            </div>
          </div>

          {/* Right Column: Exact Location Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-sans font-medium tracking-[0.25em] text-[#6E3034] uppercase block mb-3">
              VISIT OUR SANCTUARY
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#171513] font-light tracking-tight mb-8">
              FIND YOUR WAY TO PERCH
            </h2>

            {/* Address Card */}
            <div className="bg-[#F3EEE5] p-8 md:p-10 border-l-4 border-[#6E3034] mb-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#6E3034] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xs font-sans tracking-[0.2em] uppercase font-semibold text-[#4A3930] mb-2">
                    EXACT LOCATION
                  </h3>
                  <address className="not-italic font-serif text-2xl md:text-3xl text-[#171513] leading-snug">
                    71, Khan Market<br />
                    1st Floor, Rabindra Nagar<br />
                    Khan Market, New Delhi
                  </address>
                </div>
              </div>

              <div className="pt-6 border-t border-[#4A3930]/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-[#4A3930]">
                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-[#596052] shrink-0 mt-0.5" />
                  <span>
                    <strong className="block text-[#171513] uppercase tracking-wider text-[10px] mb-0.5">Setting:</strong>
                    First-floor oasis above the tree-lined market arcade
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#596052] shrink-0 mt-0.5" />
                  <span>
                    <strong className="block text-[#171513] uppercase tracking-wider text-[10px] mb-0.5">Atmosphere:</strong>
                    Daylight coffee & quiet evening wine bar
                  </span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#171513] hover:bg-[#4A3930] text-[#FAF8F3] text-xs font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-200 shadow-md active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-[#DED3C4]" />
                <span>GET DIRECTIONS</span>
              </a>
              <span className="text-xs font-sans text-[#4A3930]/70 tracking-wider">
                Opens in Google Maps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
