export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  hint?: string;
}

export const products: Product[] = [
  {
    id: "claw-hammer",
    name: "Claw Hammer",
    description: "A durable 16 oz. claw hammer, perfect for framing and general-purpose use. Forged steel head and a comfortable anti-vibration grip.",
    price: 24.99,
    image: "https://placehold.co/600x400.png",
    hint: "hammer tool",
    category: "Hand Tools",
    featured: true,
  },
  {
    id: "screwdriver-set",
    name: "Screwdriver Set",
    description: "6-piece screwdriver set with magnetic tips. Includes Phillips and flathead screwdrivers in various sizes. Ergonomic handles for better torque.",
    price: 29.99,
    image: "https://placehold.co/600x400.png",
    hint: "screwdrivers tools",
    category: "Hand Tools",
    featured: true,
  },
  {
    id: "power-drill",
    name: "20V Cordless Drill",
    description: "High-performance cordless drill with two batteries and a charger. Features a keyless chuck, variable speed, and an LED work light.",
    price: 119.99,
    image: "https://placehold.co/600x400.png",
    hint: "power drill",
    category: "Power Tools",
    featured: true,
  },
  {
    id: "plywood-sheet",
    name: "Plywood Sheet (4x8)",
    description: "Standard 4'x8' sheet of 1/2 inch thick plywood. Ideal for sheathing, roofing, and flooring projects. Smooth, sandable surface.",
    price: 35.50,
    image: "https://placehold.co/600x400.png",
    hint: "wood lumber",
    category: "Building Materials",
  },
  {
    id: "concrete-mix",
    name: "Concrete Mix (80 lb)",
    description: "High-strength, fast-setting concrete mix. Just add water. Perfect for setting posts, creating slabs, and other concrete work.",
    price: 8.99,
    image: "https://placehold.co/600x400.png",
    hint: "concrete powder",
    category: "Building Materials",
    featured: true,
  },
  {
    id: "safety-goggles",
    name: "Safety Goggles",
    description: "Anti-fog, scratch-resistant safety goggles. Provides full-coverage protection from dust and debris. Meets ANSI Z87.1 standards.",
    price: 12.99,
    image: "https://placehold.co/600x400.png",
    hint: "safety glasses",
    category: "Safety Gear",
  },
  {
    id: "tape-measure",
    name: "Tape Measure (25 ft)",
    description: "25-foot self-locking tape measure with a durable, rubberized case. Easy-to-read markings and a strong belt clip.",
    price: 15.99,
    image: "https://placehold.co/600x400.png",
    hint: "tape measure",
    category: "Hand Tools",
  },
  {
    id: "adjustable-wrench",
    name: "Adjustable Wrench",
    description: "10-inch adjustable wrench made from chrome vanadium steel for strength and durability. Laser-etched sizing for quick adjustments.",
    price: 18.99,
    image: "https://placehold.co/600x400.png",
    hint: "wrench tool",
    category: "Hand Tools",
  },
  {
    id: "circular-saw",
    name: "7-1/4 inch Circular Saw",
    description: "Powerful 15-Amp circular saw for fast, clean cuts. Includes a carbide-tipped blade and adjustable bevel for angled cuts.",
    price: 89.99,
    image: "https://placehold.co/600x400.png",
    hint: "circular saw",
    category: "Power Tools",
    featured: true,
  },
  {
    id: "latex-paint",
    name: "Interior Latex Paint (1 Gallon)",
    description: "One gallon of premium interior latex paint and primer. Low-VOC, durable, and washable finish. Available in 'Builder's Beige'.",
    price: 45.99,
    image: "https://placehold.co/600x400.png",
    hint: "paint can",
    category: "Paint & Supplies",
  },
   {
    id: "work-gloves",
    name: "Leather Work Gloves",
    description: "Durable leather work gloves for heavy-duty tasks. Provides excellent protection and grip for handling materials.",
    price: 19.99,
    image: "https://placehold.co/600x400.png",
    hint: "work gloves",
    category: "Safety Gear",
    featured: true,
  },
  {
    id: "level-tool",
    name: "24-Inch Box Level",
    description: "A professional-grade 24-inch box level with high-visibility vials. Milled surface for maximum accuracy.",
    price: 34.99,
    image: "https://placehold.co/600x400.png",
    hint: "level tool",
    category: "Hand Tools",
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
}
