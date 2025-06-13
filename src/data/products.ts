export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  featured: boolean;
  details: string;
}

// Mock product data with prices in UGX
export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Premium Wool Collection",
    description: "High-quality natural wool from organic sheep farms",
    price: 180000,
    image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Natural Fibers",
    inStock: true,
    featured: true,
    details: "Our premium wool collection features the finest natural fibers from organically-raised sheep. Each batch is carefully processed to maintain the wool's natural properties including softness, warmth retention, and durability. Perfect for textile manufacturing, crafts, and insulation. The wool is ethically sourced from farms that practice sustainable and humane animal care."
  },
  {
    id: "2",
    name: "Premium Leather Skins & Hides",
    description: "Naturally processed leather hides from sustainable farms",
    price: 450000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Leather Products",
    inStock: true,
    featured: true,
    details: "Our premium leather collection includes naturally processed hides from sustainably-raised cattle. Each hide is carefully tanned using traditional methods without harmful chemicals. The leather is perfect for furniture, clothing, accessories, and craft projects. We ensure ethical sourcing and environmentally-friendly processing methods."
  },
  {
    id: "3",
    name: "Premium Feather Collection",
    description: "Soft natural feathers for various applications",
    price: 95000,
    image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Natural Materials",
    inStock: true,
    featured: false,
    details: "Our premium feather collection includes duck, goose, and chicken feathers of various sizes and qualities. These naturally-sourced feathers are cleaned and sanitized for use in pillows, comforters, decorative items, and craft projects. The feathers are ethically sourced from farms that maintain high standards of animal welfare."
  },
  {
    id: "4",
    name: "Organic Animal Fat",
    description: "Pure organic animal fat for soap making and cooking",
    price: 75000,
    image: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Organic Products",
    inStock: true,
    featured: false,
    details: "Our organic animal fat is rendered from grass-fed cattle and free-range animals. This pure, clean fat is perfect for traditional soap making, candle production, and cooking applications. The fat is processed without chemicals and maintains its natural properties. It's an excellent sustainable alternative for various household and commercial uses."
  },
  {
    id: "5",
    name: "Premium Chicken Manure",
    description: "High-quality organic chicken manure fertilizer",
    price: 85000,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Fertilizers",
    inStock: true,
    featured: true,
    details: "Our premium chicken manure is composted and aged to perfection, providing one of the richest natural fertilizers available. High in nitrogen, phosphorus, and potassium, it's ideal for vegetable gardens, flower beds, and fruit trees. The manure is fully composted to eliminate pathogens and reduce odor while maximizing nutrient content."
  },
  {
    id: "6",
    name: "Organic Sheep Wool Insulation",
    description: "Natural wool insulation for eco-friendly construction",
    price: 320000,
    image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Construction Materials",
    inStock: true,
    featured: false,
    details: "Our organic sheep wool insulation provides excellent thermal and acoustic properties for sustainable building projects. This natural insulation is fire-resistant, moisture-regulating, and completely biodegradable. It's perfect for eco-friendly homes and buildings that prioritize health and environmental sustainability."
  },
  {
    id: "7",
    name: "Premium Goose Down",
    description: "Ultra-soft goose down for luxury bedding",
    price: 280000,
    image: "https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Natural Materials",
    inStock: true,
    featured: true,
    details: "Our premium goose down is the finest quality available, sourced from ethically-raised geese. This ultra-soft down provides exceptional warmth-to-weight ratio and is perfect for luxury bedding, outerwear, and high-end textile applications. Each batch is carefully cleaned and sorted to ensure consistent quality."
  },
  {
    id: "8",
    name: "Natural Beeswax",
    description: "Pure beeswax from sustainable apiaries",
    price: 120000,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Natural Products",
    inStock: true,
    featured: false,
    details: "Our natural beeswax is harvested from sustainable apiaries that prioritize bee health and environmental conservation. This pure, unprocessed wax is perfect for candle making, wood finishing, leather conditioning, and cosmetic applications. The beeswax retains its natural honey scent and golden color."
  },
  {
    id: "9",
    name: "Organic Compost",
    description: "Rich organic compost for healthy soil",
    price: 65000,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Fertilizers",
    inStock: true,
    featured: true,
    details: "Our organic compost is made from carefully selected organic materials including kitchen scraps, yard waste, and animal manures. This nutrient-rich soil amendment improves soil structure, water retention, and provides essential nutrients for plant growth. The compost is fully decomposed and ready to use."
  },
  {
    id: "10",
    name: "Premium Cashmere Fiber",
    description: "Luxury cashmere fiber from Himalayan goats",
    price: 650000,
    image: "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Luxury Fibers",
    inStock: true,
    featured: false,
    details: "Our premium cashmere fiber is sourced from Himalayan goats raised in pristine mountain environments. This ultra-fine fiber is incredibly soft, lightweight, and provides excellent insulation. Perfect for luxury textile production, the cashmere is carefully combed and processed to maintain its natural properties and exceptional quality."
  },
  {
    id: "11",
    name: "Premium Bone Meal",
    description: "Organic bone meal fertilizer from grass-fed livestock",
    price: 95000,
    image: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Organic Fertilizers",
    inStock: true,
    featured: true,
    details: "Our premium bone meal is made from bones of organically-raised, grass-fed cattle. This slow-release fertilizer is rich in phosphorus and calcium, making it ideal for flowering plants, bulbs, and fruit trees. The bones are steam-processed to ensure safety and to concentrate nutrients. Perfect for promoting strong root development and vibrant blooms."
  },
  {
    id: "12",
    name: "Organic Blood Meal",
    description: "High-nitrogen blood meal from ethically sourced livestock",
    price: 110000,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Organic Fertilizers",
    inStock: true,
    featured: false,
    details: "Our organic blood meal is a premium nitrogen-rich fertilizer made from the blood of organically-raised animals. With a nitrogen content of 12-15%, it provides quick-release nutrition for leafy greens, vegetables, and nitrogen-hungry plants. The blood is carefully dried and processed to create a fine powder that's easy to apply and fast-acting."
  },
  {
    id: "13",
    name: "Premium Meat Meal",
    description: "Concentrated protein fertilizer from organic livestock",
    price: 125000,
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Organic Fertilizers",
    inStock: true,
    featured: true,
    details: "Our premium meat meal is a concentrated organic fertilizer made from rendered meat and organs of organically-raised livestock. This high-protein fertilizer provides sustained nitrogen release along with essential amino acids. It's excellent for vegetable gardens, fruit trees, and any plants requiring long-term nutrition. The rendering process ensures pathogen-free, nutrient-dense fertilizer."
  },
  {
    id: "14",
    name: "Horn and Hoof Meal",
    description: "Slow-release nitrogen fertilizer from organic cattle",
    price: 135000,
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2874&q=80",
    category: "Organic Fertilizers",
    inStock: true,
    featured: false,
    details: "Our horn and hoof meal is made from the horns and hooves of organically-raised cattle. This premium slow-release fertilizer provides consistent nitrogen over 6-12 months, making it perfect for perennial plants, trees, and long-season crops. The keratin-rich material breaks down gradually, feeding plants throughout the growing season while improving soil structure."
  }
];
