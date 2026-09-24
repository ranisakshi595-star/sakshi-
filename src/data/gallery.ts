export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'interior' | 'atmosphere' | 'architecture';
  aspect: 'landscape' | 'portrait' | 'wide';
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g-1',
    src: '/images/hero-ambience.jpg',
    alt: 'Ambient interior warmth and communal counter at Perch Khan Market',
    title: 'Evening Bar & Counter',
    category: 'interior',
    aspect: 'landscape',
  },
  {
    id: 'g-2',
    src: '/images/interior-bar-stools.jpg',
    alt: 'High-stool seating along shared ledge counters and tree-lined windows',
    title: 'Window Ledge Seating',
    category: 'architecture',
    aspect: 'portrait',
  },
  {
    id: 'g-3',
    src: '/images/interior-communal.jpg',
    alt: 'The communal log table arranged for social conviviality',
    title: 'Communal Log Table',
    category: 'interior',
    aspect: 'landscape',
  },
  {
    id: 'g-4',
    src: '/images/interior-nook.jpg',
    alt: 'Intimate reading and dining corner at Perch',
    title: 'Quiet Nooks',
    category: 'atmosphere',
    aspect: 'portrait',
  },
  {
    id: 'g-5',
    src: '/images/interior-panoramic.jpg',
    alt: 'Panoramic view of Perch Wine & Coffee Bar interior',
    title: 'Architectural Panorama',
    category: 'architecture',
    aspect: 'wide',
  },
  {
    id: 'g-6',
    src: '/images/interior-dining.jpg',
    alt: 'Artisanal dining woodwork and custom furniture',
    title: 'Dining Craft & Woodwork',
    category: 'interior',
    aspect: 'portrait',
  },
  {
    id: 'g-7',
    src: '/images/interior-wide.jpg',
    alt: 'Upper floor intimate dining space with comfortable seating',
    title: 'Upper Dining Room',
    category: 'interior',
    aspect: 'landscape',
  },
  {
    id: 'g-8',
    src: '/images/interior-evening.jpg',
    alt: 'Cozy evening lighting with wine bar atmosphere',
    title: 'Evening Wine Ambience',
    category: 'atmosphere',
    aspect: 'portrait',
  },
  {
    id: 'g-9',
    src: '/images/interior-natural-light.jpg',
    alt: 'Natural sunlight filtering through Khan Market greenery',
    title: 'Afternoon Light',
    category: 'atmosphere',
    aspect: 'portrait',
  },
];
