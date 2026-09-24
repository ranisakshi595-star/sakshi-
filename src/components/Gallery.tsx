import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES, GalleryImage } from '../data/gallery';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<'all' | 'interior' | 'atmosphere' | 'architecture'>('all');

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (filter === 'all') return true;
    return img.category === filter;
  });

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="bg-[#171513] text-[#FAF8F3] py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-sans font-medium tracking-[0.25em] text-[#DED3C4] uppercase block mb-3">
              PHOTOGRAPHIC ESSAY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FAF8F3]">
              THE SPACE & ATMOSPHERE
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-sm">
            {(['all', 'interior', 'atmosphere', 'architecture'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-sans font-medium tracking-wider uppercase transition-colors rounded-sm ${
                  filter === cat
                    ? 'bg-[#FAF8F3] text-[#171513]'
                    : 'text-[#FAF8F3]/60 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, idx) => {
            // Apply varied heights to create organic editorial masonry rhythm
            const isTall = image.aspect === 'portrait';
            const isWide = image.aspect === 'wide';

            return (
              <figure
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`group cursor-pointer relative overflow-hidden bg-[#4A3930]/30 ${
                  isWide ? 'md:col-span-2 aspect-[16/9]' : isTall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 group-hover:brightness-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Hover Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#DED3C4] block mb-1">
                        {image.category}
                      </span>
                      <figcaption className="font-serif text-xl text-[#FAF8F3] font-light">
                        {image.title}
                      </figcaption>
                    </div>
                    <div className="p-2 rounded-full bg-white/10 backdrop-blur-xs text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-10 p-3 text-white/80 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-white/70 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image & Caption */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[75vh] w-auto object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-serif text-2xl text-[#FAF8F3] font-light tracking-wide">
                {selectedImage.title}
              </h3>
              <p className="font-sans text-xs text-[#DED3C4] tracking-widest uppercase mt-1">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
