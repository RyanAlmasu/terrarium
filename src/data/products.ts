export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Moss Garden Terrarium",
    description: "A tranquil moss terrarium showcasing the subtle beauty of forest floors. Multiple moss varieties arranged to celebrate natural imperfection.",
    price: 89,
    image: "/8.-terrarium-bahagia.webp"
  },
  {
    id: 2,
    name: "Mountain Path Terrarium",
    description: "Inspired by misty mountain paths, this terrarium features carefully placed stones and vibrant moss creating a meditative atmosphere.",
    price: 105,
    image: "/20231212_105747-PhotoRoom-3.webp"
  },
  {
    id: 3,
    name: "Desert Gem House",
    description: "A geometric glass house filled with an artful arrangement of succulents, creating a stunning display of colors and textures.",
    price: 129,
    image: "/images (1).jpg"
  },
  {
    id: 4,
    name: "Forest Floor Terrarium",
    description: "Our most serene terrarium embodies natural balance with lush moss, miniature plants, and a peaceful arrangement.",
    price: 159,
    image: "/images (2).jpg"
  }
];