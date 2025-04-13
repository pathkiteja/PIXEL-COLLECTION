export interface Color {
  name: string;
  hex: string;
}

export interface Variant {
  id: string;
  name: string;
  colors: Color[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  featured: boolean;
  variants: Variant[];
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

// Categories for our pixel art
export const categories: Category[] = [
  {
    id: 'gaming',
    name: 'Gaming',
    description: 'Pixel art inspired by classic video games and gaming culture',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800',
  },
  {
    id: 'landscapes',
    name: 'Landscapes',
    description: 'Beautiful pixel art landscapes and scenery',
    image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=800',
  },
  {
    id: 'characters',
    name: 'Characters',
    description: 'Unique pixel art character designs and portraits',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800',
  },
  {
    id: 'crypto-art',
    name: 'Crypto Art',
    description: 'NFT-ready pixel art for collectors and enthusiasts',
    image: 'https://images.unsplash.com/photo-1626162953675-544bf5a32c01?q=80&w=800',
  },
  {
    id: 'retro',
    name: 'Retro',
    description: 'Nostalgic pixel art inspired by the 80s and 90s',
    image: 'https://images.unsplash.com/photo-1569017388730-020b5f80a004?q=80&w=800',
  },
  {
    id: 'custom',
    name: 'Custom',
    description: 'Personalized pixel art creations made to order',
    image: 'https://images.unsplash.com/photo-1636642491825-9eb73016bed2?q=80&w=800',
  },
];

// Standard color options
const standardColors: Color[] = [
  { name: 'Classic', hex: '#3c44a9' },
  { name: 'Vibrant', hex: '#ff5252' },
  { name: 'Monochrome', hex: '#2c2c2c' },
  { name: 'Pastel', hex: '#a5d8ff' },
];

// Standard print variants
const standardPrintVariants: Variant[] = [
  {
    id: 'digital',
    name: 'Digital File',
    colors: standardColors,
  },
  {
    id: 'small-print',
    name: 'Small Print (8x10")',
    colors: standardColors,
  },
  {
    id: 'medium-print',
    name: 'Medium Print (12x16")',
    colors: standardColors,
  },
  {
    id: 'large-print',
    name: 'Large Print (18x24")',
    colors: standardColors,
  },
];

// Sample products
export const products: Product[] = [
  {
    id: 'pixel-art-1',
    title: 'Pixel Adventure Hero',
    description: 'Embark on a nostalgic journey with our Pixel Adventure Hero. This meticulously crafted pixel art piece captures the essence of classic 16-bit adventure games. Each pixel has been placed with care to create a character that evokes the golden age of gaming.',
    price: 49.99,
    images: [
      'https://images.unsplash.com/photo-1569017388730-020b5f80a004?q=80&w=800',
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=800',
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800',
    ],
    category: 'gaming',
    featured: true,
    variants: standardPrintVariants,
    tags: ['adventure', 'hero', 'game', 'character', 'retro'],
  },
  {
    id: 'pixel-art-2',
    title: 'Retrowave Sunset City',
    description: 'Experience the vibrant aesthetic of 80s retrowave with this stunning pixel art cityscape. The neon-soaked sunset creates a dramatic backdrop for the silhouetted skyline, perfect for anyone who loves synthwave and retro futuristic art.',
    price: 59.99,
    images: [
      'https://images.unsplash.com/photo-1604334104107-a2ea3c2a9b8a?q=80&w=800',
      'https://images.unsplash.com/photo-1569017388730-020b5f80a004?q=80&w=800',
    ],
    category: 'landscapes',
    featured: false,
    variants: standardPrintVariants,
    tags: ['cityscape', 'retrowave', 'synthwave', 'sunset', 'neon'],
  },
  {
    id: 'pixel-art-3',
    title: 'Crypto Pixel Punk',
    description: 'Own a piece of digital history with this unique Crypto Pixel Punk. Inspired by the blockchain revolution and early pixel art avatars, this collectible is perfect for NFT enthusiasts and collectors who appreciate digital art with attitude.',
    price: 199.99,
    images: [
      'https://images.unsplash.com/photo-1626162953675-544bf5a32c01?q=80&w=800',
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800',
    ],
    category: 'crypto-art',
    featured: true,
    variants: standardPrintVariants,
    tags: ['crypto', 'punk', 'nft', 'blockchain', 'avatar'],
  },
  {
    id: 'pixel-art-4',
    title: 'Retro Gaming Console',
    description: 'Celebrate gaming history with this detailed pixel art rendering of a classic gaming console. Every button, vent, and curve has been lovingly recreated in pixel form, making this a must-have for any gaming enthusiast or collector.',
    price: 39.99,
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800',
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=800',
    ],
    category: 'gaming',
    featured: false,
    variants: standardPrintVariants,
    tags: ['console', 'vintage', 'controller', 'classic', 'gaming'],
  },
  {
    id: 'pixel-art-5',
    title: 'Forest Guardian',
    description: 'Meet the Forest Guardian, a mystical pixel art character inspired by fantasy RPGs. This woodland protector stands watch among ancient trees, with glowing eyes and an enchanted staff. Perfect for fans of fantasy art and role-playing games.',
    price: 44.99,
    images: [
      'https://images.unsplash.com/photo-1633525594858-9773da0395ee?q=80&w=800',
      'https://images.unsplash.com/photo-1633525595837-864be94ffdfe?q=80&w=800',
    ],
    category: 'characters',
    featured: false,
    variants: standardPrintVariants,
    tags: ['fantasy', 'guardian', 'forest', 'character', 'rpg'],
  },
  {
    id: 'pixel-art-6',
    title: 'Pixel City Skyline',
    description: 'This expansive pixel art cityscape captures the bustling energy of a metropolitan skyline. From tiny apartments to towering skyscrapers, every building comes alive with miniature stories waiting to be discovered.',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1604334104107-a2ea3c2a9b8a?q=80&w=800',
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800',
    ],
    category: 'landscapes',
    featured: false,
    variants: standardPrintVariants,
    tags: ['city', 'urban', 'skyline', 'architecture', 'metropolis'],
  },
  {
    id: 'pixel-art-7',
    title: '80s Arcade Cabinet',
    description: 'Step back in time with this detailed pixel art recreation of a classic 80s arcade cabinet. Complete with glowing screen, colorful joystick, and period-accurate details, this piece captures the magic of arcade gaming\'s golden era.',
    price: 69.99,
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800',
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=800',
    ],
    category: 'retro',
    featured: true,
    variants: standardPrintVariants,
    tags: ['arcade', '80s', 'gaming', 'cabinet', 'retro'],
  },
  {
    id: 'pixel-art-8',
    title: 'Cyber Samurai',
    description: 'The Cyber Samurai blends feudal Japanese warrior aesthetics with futuristic cyberpunk elements. This striking character design features neon accents, a pixel-perfect katana, and a mysterious masked face that tells a story of honor in a digital age.',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1633525594858-9773da0395ee?q=80&w=800',
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800',
    ],
    category: 'characters',
    featured: false,
    variants: standardPrintVariants,
    tags: ['cyberpunk', 'samurai', 'warrior', 'neon', 'futuristic'],
  },
  {
    id: 'pixel-art-9',
    title: 'Moonlit Pixel Kingdom',
    description: 'Gaze upon a peaceful kingdom bathed in moonlight with this serene pixel art landscape. Tiny castles, villages, and forests create a miniature world full of wonder and adventure waiting to be explored.',
    price: 54.99,
    images: [
      'https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=800',
      'https://images.unsplash.com/photo-1604334104107-a2ea3c2a9b8a?q=80&w=800',
    ],
    category: 'landscapes',
    featured: false,
    variants: standardPrintVariants,
    tags: ['kingdom', 'castle', 'fantasy', 'moonlight', 'medieval'],
  },
  {
    id: 'pixel-art-10',
    title: 'Space Explorer Series',
    description: 'Journey through the cosmos with our Space Explorer Series. This pixel art collection features retro-futuristic spaceships, mysterious planets, and the vast emptiness of space rendered in beautiful pixel art style.',
    price: 149.99,
    images: [
      'https://images.unsplash.com/photo-1636642491825-9eb73016bed2?q=80&w=800',
      'https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=800',
    ],
    category: 'crypto-art',
    featured: true,
    variants: standardPrintVariants,
    tags: ['space', 'explorer', 'scifi', 'planets', 'cosmos'],
  },
  {
    id: 'pixel-art-11',
    title: 'Pixel Pet Portrait',
    description: 'Immortalize your beloved pet in pixel art form with our custom pet portrait service. Each portrait is carefully crafted to capture your pet\'s unique personality and characteristics in the charming style of pixel art.',
    price: 99.99,
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800',
      'https://images.unsplash.com/photo-1568265112889-c9d3fc50a281?q=80&w=800',
    ],
    category: 'custom',
    featured: false,
    variants: standardPrintVariants,
    tags: ['pet', 'portrait', 'custom', 'animal', 'personalized'],
  },
  {
    id: 'pixel-art-12',
    title: 'Retro Desktop Computer',
    description: 'This nostalgic pixel art piece showcases a vintage desktop computer complete with chunky monitor, keyboard, and floppy disk drive. A perfect tribute to the early days of personal computing that started it all.',
    price: 49.99,
    images: [
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=800',
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800',
    ],
    category: 'retro',
    featured: false,
    variants: standardPrintVariants,
    tags: ['computer', 'desktop', 'vintage', 'technology', 'retro'],
  },
  {
    id: 'pixel-art-13',
    title: 'Pixel Art Fantasy Map',
    description: 'Explore a beautifully crafted pixel art fantasy map, complete with mountains, rivers, and hidden treasures. This intricate design is perfect for tabletop gamers, storytellers, and anyone who loves to imagine new worlds.',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1633525595837-864be94ffdfe?q=80&w=800',
      'https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=800',
    ],
    category: 'landscapes',
    featured: false,
    variants: standardPrintVariants,
    tags: ['map', 'fantasy', 'exploration', 'adventure', 'tabletop'],
  },
  {
    id: 'pixel-art-14',
    title: 'Pixel Art Underwater Scene',
    description: 'Dive into the depths of the ocean with this vibrant pixel art underwater scene. Colorful fish, coral reefs, and mysterious sea creatures come together to create a lively aquatic world.',
    price: 59.99,
    images: [
      'https://i.pinimg.com/736x/06/fc/4e/06fc4ec87de5fa45f34917e47f0e81eb.jpg',
      'https://images4.alphacoders.com/134/thumb-1920-1349553.jpeg',
      'https://i.pinimg.com/736x/06/fc/4e/06fc4ec87de5fa45f34917e47f0e81eb.jpg',
      'https://images4.alphacoders.com/134/thumb-1920-1349553.jpeg',
      'https://i.pinimg.com/736x/06/fc/4e/06fc4ec87de5fa45f34917e47f0e81eb.jpg',
      'https://images4.alphacoders.com/134/thumb-1920-1349553.jpeg',
      'https://i.pinimg.com/736x/06/fc/4e/06fc4ec87de5fa45f34917e47f0e81eb.jpg',
      'https://images4.alphacoders.com/134/thumb-1920-1349553.jpeg',
      'https://i.pinimg.com/736x/06/fc/4e/06fc4ec87de5fa45f34917e47f0e81eb.jpg',
      'https://images4.alphacoders.com/134/thumb-1920-1349553.jpeg',
      'https://i.pinimg.com/736x/06/fc/4e/06fc4ec87de5fa45f34917e47f0e81eb.jpg',
      'https://images4.alphacoders.com/134/thumb-1920-1349553.jpeg',
      'https://i.pinimg.com/736x/06/fc/4e/06fc4ec87de5fa45f34917e47f0e81eb.jpg',
      'https://images4.alphacoders.com/134/thumb-1920-1349553.jpeg',
    ],
    category: 'landscapes',
    featured: false,
    variants: standardPrintVariants,
    tags: ['underwater', 'ocean', 'sea', 'marine', 'aquatic'],
  },
  {
    id: 'pixel-art-15',
    title: 'Pixel Art Dragon',
    description: 'Unleash your imagination with this stunning pixel art dragon. This mythical creature is depicted in vibrant colors and intricate details, making it a perfect addition to any fantasy lover\'s collection.',
    price: 89.99,
    images: [
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800',
      'https://images.unsplash.com/photo-1568265112889-c9d3fc50a281?q=80&w=800',
    ],
    category: 'characters',
    featured: false,
    variants: standardPrintVariants,
    tags: ['dragon', 'fantasy', 'mythical', 'creature', 'art'],
  },
  {
    id: 'pixel-art-16',
    title: 'Pixel Art Space Battle',
    description: 'Join the intergalactic conflict with this action-packed pixel art scene of a space battle. Spaceships, lasers, and explosions come together in a dynamic composition that captures the thrill of sci-fi warfare.',
    price: 99.99,
    images: [
      'https://static.vecteezy.com/system/resources/previews/023/530/834/non_2x/8bit-pixel-art-game-asset-space-planets-rockets-vector.jpg',
      'https://cdn.vectorstock.com/i/1000v/48/60/arcade-shooter-8-bit-pixel-art-game-space-invaders-vector-43994860.jpg',
    ],
    category: 'crypto-art',
    featured: true,
    variants: standardPrintVariants,
    tags: ['space', 'battle', 'sci-fi', 'spaceship', 'action'],
  }
];

// Featured products (subset of all products)
export const featuredProducts = products.filter(product => product.featured);

// Function to get a product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Function to get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

// Function to get related products (same category, excluding the current product)
export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};

// Function to get products by ids
export const getProductsByIds = (ids: string[]): Product[] => {
  return products.filter(product => ids.includes(product.id));
};