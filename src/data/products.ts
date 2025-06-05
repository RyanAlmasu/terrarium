export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  kanji: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Koke Garden",
    description: "A tranquil moss terrarium showcasing the subtle beauty of Japanese forest floors. Featuring multiple moss varieties arranged in a wabi-sabi style that celebrates natural imperfection.",
    price: 89,
    image: "https://images.pexels.com/photos/4505167/pexels-photo-4505167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    kanji: "苔"
  },
  {
    id: 2,
    name: "Bamboo Sanctuary",
    description: "Miniature bamboo creates a serene atmosphere in this terrarium, reminiscent of Japan's famous bamboo forests. Includes small stone accents for a balanced composition.",
    price: 105,
    image: "https://images.pexels.com/photos/6913636/pexels-photo-6913636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    kanji: "竹"
  },
  {
    id: 3,
    name: "Stone & Water",
    description: "Inspired by traditional Japanese rock gardens, this terrarium features carefully placed stones and a small water element that creates a meditative atmosphere in any space.",
    price: 129,
    image: "https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    kanji: "石"
  },
  {
    id: 4,
    name: "Shizen Balance",
    description: "Our most complex terrarium embodies the Japanese principle of balance with five distinct plant species, miniature stone pathways, and a small raked sand area.",
    price: 159,
    image: "https://images.pexels.com/photos/4505159/pexels-photo-4505159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    kanji: "自然"
  }
];