export interface MenuItem {
  name: string;
  description?: string;
  price?: string | number;
  variants?: { label: string; price: string | number }[];
  addOns?: { label: string; price: string | number }[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  notes?: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    subtitle: 'Served morning to afternoon',
    notes: 'Dishes prepared fresh to order using seasonal ingredients.',
    items: [
      {
        name: 'Chia Seed Pudding',
        description: 'With fresh seasonal fruit and toasted seeds',
        price: '₹375',
      },
      {
        name: 'Housemade 5-Grain Granola',
        description: 'Served with artisanal yogurt and fresh seasonal fruits',
        price: '₹375',
      },
      {
        name: 'Sourdough Avocado Tartine',
        description: 'Toasted artisan sourdough with seasoned crushed avocado',
        variants: [
          { label: 'Natural', price: '₹475' },
          { label: 'Spiced Asparagus', price: '₹645' },
          { label: 'Poached Egg', price: '₹645' },
          { label: 'Parma Ham / Cured Salmon', price: '₹670' },
        ],
      },
      {
        name: 'Choice of Eggs',
        description: 'Poached or scrambled, served with grilled vine tomato and herb baby potatoes',
        price: '₹395',
        addOns: [
          { label: 'Chicken sausage', price: '₹175' },
          { label: 'Bacon rasher', price: '₹175' },
        ],
      },
      {
        name: 'Green & White Omelette',
        description: 'Egg whites whisked with seasonal greens and herbs',
        price: '₹395',
      },
      {
        name: 'Eggs Royale',
        description: 'Poached eggs on toasted brioche with house-cured salmon and hollandaise',
        price: '₹525',
      },
      {
        name: 'Eggs Benedict',
        description: 'Poached eggs with Prosciutto di Parma on toasted brioche',
        price: '₹495',
      },
      {
        name: 'Eggs Florentine',
        description: 'Poached eggs served over sautéed tender garden spinach',
        price: '₹445',
      },
      {
        name: 'Turkish Eggs',
        description: 'Poached eggs nestled in garlic-infused yoghurt with warm paprika butter',
        price: '₹445',
      },
      {
        name: 'Shakshuka',
        description: 'Eggs gently poached in spiced tomato, capsicum, and herb reduction',
        price: '₹445',
        addOns: [{ label: 'Goat cheese', price: '₹175' }],
      },
      {
        name: 'French Toast',
        description: 'Toasted brioche bread, berry coulis, salted caramel chantilly cream, and fresh fruit',
        price: '₹445',
      },
      {
        name: 'Breakfast Burrito',
        description: 'Toasted grains, refried beans, tomato rice, fresh guacamole, and salsa verde',
        variants: [
          { label: 'Seasonal Vegetables', price: '₹445' },
          { label: 'Paprika Grilled Chicken & Fried Egg', price: '₹475' },
        ],
      },
    ],
  },
  {
    id: 'coffee',
    title: 'Specialty Coffee',
    subtitle: 'Carefully roasted & prepared',
    notes: 'Single-origin beans: Colombia Supremo, Indonesia Mandheling. Served hot or iced.',
    items: [
      {
        name: 'Vietnamese Cold Coffee',
        description: 'Slow-dripped dark roast blended over condensed milk and ice',
        price: '₹325 / ₹425',
      },
      {
        name: 'Flat White',
        description: 'Double ristretto with silky microfoam and signature latte art',
        price: '₹170 / ₹190 / ₹210',
      },
      {
        name: 'Espresso',
        description: 'Pure extracted rich shot with hazelnut crema',
        price: '₹130 / ₹150 / ₹170',
      },
      {
        name: 'Americano',
        description: 'Double shot espresso lengthened with hot filtered water',
        price: '₹170 / ₹190 / ₹210',
      },
      {
        name: 'Cappuccino',
        description: 'Balanced espresso, steamed milk, and dense velvety froth',
        price: '₹170 / ₹190 / ₹210',
      },
      {
        name: 'Caffè Latte',
        description: 'Smooth espresso with textured steamed milk',
        price: '₹170 / ₹190 / ₹210',
      },
      {
        name: 'Cortado',
        description: 'Equal parts espresso and warm silky milk',
        price: '₹170 / ₹190 / ₹210',
      },
      {
        name: 'Macchiato',
        description: 'Bold espresso marked with a dollop of milk foam',
        price: '₹170 / ₹190 / ₹210',
      },
      {
        name: 'Cold Brew',
        description: 'Steeped for 18 hours for a sweet, low-acidity clean profile',
        price: '₹200 / ₹250',
      },
      {
        name: 'Iced Latte',
        description: 'Chilled espresso and cold milk served over rock ice',
        price: '₹200 / ₹250',
      },
    ],
  },
  {
    id: 'mains',
    title: 'Small Plates & Mains',
    subtitle: 'European-inspired dining',
    notes: 'Clean flavours, simple techniques, and seasonal freshness.',
    items: [
      {
        name: 'Scotch Egg',
        description: 'Crisp golden panko crust, soft yolk, served with seasoned fresh herbs',
        price: '₹475',
      },
      {
        name: 'Handmade Potato Gnocchi',
        description: 'Hand-rolled tender gnocchi with fresh herbs, olive oil, and shaved parmesan',
        price: '₹545',
      },
      {
        name: 'Calamari',
        description: 'Lightly seared calamari with citrus garlic aioli and garden microgreens',
        price: '₹595',
      },
      {
        name: 'Burrata',
        description: 'Creamy artisanal burrata paired with vine tomatoes and extra virgin olive oil',
        price: '₹625',
      },
      {
        name: 'Mushroom & Herb Risotto',
        description: 'Slow-simmered arborio rice with wild mushrooms, white wine, and aged parmesan',
        price: '₹645',
      },
      {
        name: 'Grilled Fillet & Root Purée',
        description: 'Pan-seared fillet served with carrot-pumpkin purée and charred baby vegetables',
        price: '₹725',
      },
      {
        name: 'Artisanal Toasted Sandwich',
        description: 'Rustic crusty bread with gourmet fillings and house-made crisps',
        price: '₹495',
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    subtitle: 'Sweet finishes',
    notes: 'Handcrafted in-house daily.',
    items: [
      {
        name: 'Basque Cheesecake',
        description: 'Caramelized burnt exterior with a luscious, creamy center',
        price: '₹580',
      },
      {
        name: 'Double Chocolate Mousse',
        description: 'Rich dark chocolate mousse with berry compote reduction',
        price: '₹450',
      },
      {
        name: 'Mango Sorbet',
        description: 'Silky, refreshing seasonal mango fruit sorbet with fresh mint',
        price: '₹380',
      },
      {
        name: 'Perch Coffee Bar',
        description: 'Signature coffee-infused layered dessert with dark chocolate accents',
        price: '₹480',
      },
    ],
  },
  {
    id: 'wine',
    title: 'Wine Selection',
    subtitle: 'Curated cellars',
    notes: 'Explore by the glass or by the bottle. Ask our team for current vintages.',
    items: [
      {
        name: 'House White by the Glass',
        description: 'Crisp, mineral-driven European white with bright orchard notes',
        price: 'Glass / Bottle',
      },
      {
        name: 'House Red by the Glass',
        description: 'Medium-bodied, supple tannins with dark berry and subtle oak notes',
        price: 'Glass / Bottle',
      },
      {
        name: 'Sparkling Wine & Prosecco',
        description: 'Fine effervescence with green apple and floral aromatics',
        price: 'Glass / Bottle',
      },
      {
        name: 'Curated Rosé',
        description: 'Pale dry rosé with delicate wild strawberry notes and clean acidity',
        price: 'Glass / Bottle',
      },
      {
        name: 'Reserve Cellar Bottles',
        description: 'Hand-selected European and New World wines from our Khan Market cellar',
        price: 'Ask Sommelier',
      },
    ],
  },
];
