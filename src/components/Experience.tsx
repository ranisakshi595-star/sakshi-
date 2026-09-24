import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceProps {
  onOpenMenu: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenMenu }) => {
  const experiences = [
    {
      title: 'COFFEE',
      subtitle: 'Specialty Roasts & Pure Extractions',
      description:
        'Sourced from select single-origin origins including Colombia Supremo and Indonesia Mandheling. From silky flat whites and double ristrettos to slow-steeped 18-hour cold brew and traditional Vietnamese iced coffee.',
      image: '/images/interior-bar-stools.jpg',
      aspect: 'aspect-[4/5]',
      accent: 'text-[#596052]',
    },
    {
      title: 'WINE',
      subtitle: 'A Vast, Well-Curated Cellar',
      description:
        'An easy-going wine bar that encourages you to explore wines by the glass or bottle. An extensive cellar featuring European classics and New World discoveries selected to accompany good conversation into the evening.',
      image: '/images/interior-evening.jpg',
      aspect: 'aspect-[4/5]',
      accent: 'text-[#6E3034]',
    },
    {
      title: 'FOOD',
      subtitle: 'European Dishes & Clean Flavours',
      description:
        'Culinary offerings designed around simple techniques, fresh ingredients, and seasonal produce. Featuring artisanal sourdough avocado tartines, scotch eggs, handmade gnocchi, comforting risottos, and delicate Basque cheesecake.',
      image: '/images/interior-communal.jpg',
      aspect: 'aspect-[4/5]',
      accent: 'text-[#DED3C4]',
    },
  ];

  return (
    <section id="experience" className="bg-[#171513] text-[#FAF8F3] py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-sans font-medium tracking-[0.25em] text-[#DED3C4] uppercase block mb-3">
              THE PILLARS OF PERCH
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#FAF8F3]">
              COFFEE · WINE · FOOD
            </h2>
          </div>
          <button
            onClick={onOpenMenu}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#FAF8F3]/80 hover:text-white transition-colors group cursor-pointer"
          >
            <span>DISCOVER THE FULL MENU</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 3 Editorial Magazine Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {experiences.map((exp, idx) => (
            <article key={exp.title} className="flex flex-col group">
              {/* Image Frame */}
              <div className={`w-full ${exp.aspect} overflow-hidden bg-[#4A3930]/30 mb-8 relative`}>
                <img
                  src={exp.image}
                  alt={`${exp.title} experience at Perch Wine & Coffee Bar`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 font-serif text-3xl font-light tracking-wider text-white">
                  0{idx + 1}
                </span>
              </div>

              {/* Title & Metadata */}
              <div className="flex flex-col flex-1">
                <h3 className="font-serif text-3xl md:text-4xl font-light tracking-widest text-[#FAF8F3] uppercase mb-2">
                  {exp.title}
                </h3>
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-[#DED3C4] font-medium mb-4">
                  {exp.subtitle}
                </h4>
                <p className="font-sans text-sm md:text-base text-[#FAF8F3]/75 leading-relaxed font-light mb-6 flex-1">
                  {exp.description}
                </p>

                {/* Subtle Action Link */}
                <button
                  onClick={onOpenMenu}
                  className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.15em] uppercase text-[#DED3C4] hover:text-white transition-colors pt-4 border-t border-white/10 group-hover:border-white/30"
                >
                  <span>EXPLORE {exp.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
