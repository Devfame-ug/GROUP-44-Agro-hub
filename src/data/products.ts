
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
    name: "Organic Fertilizer",
    description: "Premium organic fertilizer for all types of plants",
    price: 75000, // Converted from $19.99 (approx. rate)
    image: "/lovable-uploads/d91f8ae7-713e-4049-845c-f43465a13785.png",
    category: "Fertilizers",
    inStock: true,
    featured: true,
    details: "Our premium organic fertilizer is made from 100% natural ingredients, providing essential nutrients to your plants without harmful chemicals. It's perfect for vegetables, flowers, and herbs, and helps improve soil structure and microbial activity. This slow-release formula ensures continuous nutrition for up to 3 months."
  },
  {
    id: "2",
    name: "Heirloom Tomato Seeds",
    description: "Non-GMO heirloom tomato seed variety pack",
    price: 33000, // Converted from $8.99
    image: "/lovable-uploads/f39dc204-b4c8-481a-acb5-d18523522ec1.png",
    category: "Seeds",
    inStock: true,
    featured: true,
    details: "Our heirloom tomato seed pack includes 5 different varieties of non-GMO, open-pollinated tomatoes that have been passed down through generations. Each packet contains 25 seeds with high germination rates. Varieties include Brandywine, Cherokee Purple, Green Zebra, Black Krim, and San Marzano."
  },
  {
    id: "3",
    name: "Bamboo Garden Tools Set",
    description: "Sustainable bamboo handled garden tool collection",
    price: 130000, // Converted from $34.99
    image: "/lovable-uploads/88cb7586-f29b-4534-949d-449cd4905d9a.png",
    category: "Tools",
    inStock: true,
    featured: false,
    details: "This 5-piece bamboo garden tool set includes a trowel, cultivator, weeder, pruner, and transplanter. Each tool features a sustainable bamboo handle and durable stainless steel working parts. The ergonomic design reduces hand fatigue during long gardening sessions, and the included canvas storage bag keeps everything organized."
  },
  {
    id: "4",
    name: "Compost Bin",
    description: "Outdoor compost bin for organic waste",
    price: 185000, // Converted from $49.99
    image: "/lovable-uploads/1e42d7ed-6250-44ab-a30b-ff4f05e5e702.png",
    category: "Equipment",
    inStock: true,
    featured: false,
    details: "Our 80-gallon outdoor compost bin is made from recycled plastic and features a secure lid, ventilation holes, and a bottom door for easy compost removal. Its double-wall construction helps maintain heat for faster decomposition, and the UV-resistant material ensures durability in all weather conditions."
  },
  {
    id: "5",
    name: "Natural Pest Control Spray",
    description: "Plant-based pest control solution",
    price: 48000, // Converted from $12.99
    image: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
    category: "Pest Control",
    inStock: true,
    featured: true,
    details: "Our natural pest control spray is made from essential oils and plant extracts that effectively deter common garden pests without harming beneficial insects or contaminating your crops. The 16oz bottle comes with a trigger sprayer for easy application and is safe to use on edible plants right up to harvest day."
  },
  {
    id: "6",
    name: "Rain Barrel Collection System",
    description: "50 gallon rainwater collection barrel",
    price: 300000, // Converted from $79.99
    image: "https://images.unsplash.com/photo-1560885673-2cdc12600ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
    category: "Water Management",
    inStock: true,
    featured: false,
    details: "Our rain barrel collection system captures rainwater from your gutters for garden use, reducing water bills and promoting sustainable water usage. The 50-gallon food-grade plastic barrel includes a spigot, overflow valve, mesh screen to keep out debris, and a connection kit for standard downspouts."
  },
  {
    id: "7",
    name: "Worm Composting Kit",
    description: "Indoor vermicomposting system",
    price: 240000, // Converted from $64.99
    image: "https://images.unsplash.com/photo-1596467172252-04c3294502b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2825&q=80",
    category: "Composting",
    inStock: true,
    featured: true,
    details: "Turn your kitchen scraps into nutrient-rich vermicompost with our indoor worm composting kit. The 3-tray system includes a base with spigot for collecting worm tea, three working trays, a lid, bedding material, and comprehensive instructions. Worms sold separately or available with kit for an additional fee."
  },
  {
    id: "8",
    name: "Herb Garden Starter Kit",
    description: "Complete indoor herb growing set",
    price: 110000, // Converted from $29.99
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2833&q=80",
    category: "Kits",
    inStock: true,
    featured: false,
    details: "Our herb garden starter kit contains everything you need to grow fresh herbs indoors. The package includes 6 biodegradable pots, organic potting soil, 6 different herb seed varieties (basil, parsley, cilantro, chives, thyme, and mint), plant markers, and a comprehensive growing guide for year-round herbs."
  }
];
