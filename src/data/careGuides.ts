export interface CareGuide {
  id: number;
  title: string;
  icon: string;
  description: string;
  keyPoints: string[];
  image: string;
}

export const careGuides: CareGuide[] = [
  {
    id: 1,
    title: "Light Requirements",
    icon: "☀️",
    description: "Proper lighting is essential for the health of your terrarium. Most terrariums thrive in bright, indirect light, mimicking the dappled sunlight of a forest floor. Direct sunlight can create excessive heat inside the glass container, potentially harming your plants.",
    keyPoints: [
      "Place your terrarium near an east or north-facing window for optimal light",
      "Rotate your terrarium quarter-turns weekly for even growth",
      "If leaves begin to yellow or brown, move to a location with less direct light",
      "During winter months, you may need to supplement with a grow light"
    ],
    image: "https://images.pexels.com/photos/1029844/pexels-photo-1029844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Watering Wisdom",
    icon: "💧",
    description: "The enclosed nature of a terrarium creates its own microclimate, requiring minimal watering. Observing the moisture cycle within your terrarium is a meditative practice that connects you with the natural rhythms of your miniature ecosystem.",
    keyPoints: [
      "Water sparingly – most terrariums need watering only every 3-4 weeks",
      "Use a spray bottle or small watering can with a narrow spout",
      "Water the soil directly, avoiding the leaves when possible",
      "If condensation persists on glass for more than 24 hours, open the lid to allow excess moisture to escape"
    ],
    image: "https://images.pexels.com/photos/3220946/pexels-photo-3220946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Maintenance & Pruning",
    icon: "✂️",
    description: "Regular but minimal maintenance keeps your terrarium looking its best. Think of pruning as a bonsai practice – each small adjustment contributes to the overall harmony and balance of your miniature landscape.",
    keyPoints: [
      "Use small scissors or tweezers for precise pruning",
      "Remove any yellowing or dead leaves promptly",
      "Trim plants when they touch the glass or become too crowded",
      "Gently clean the inside glass with a soft brush if algae appears"
    ],
    image: "https://images.pexels.com/photos/6913712/pexels-photo-6913712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Seasonal Adjustments",
    icon: "🍂",
    description: "Like traditional Japanese gardens that celebrate seasonal changes, your terrarium may require subtle adjustments throughout the year. Embracing these seasonal rhythms connects your home to the natural world outside.",
    keyPoints: [
      "In summer, keep terrariums away from air conditioning vents",
      "During winter, move terrariums away from heaters and radiators",
      "Reduce watering by about 30% during dormant winter months",
      "Consider adding seasonal elements like small decorative stones to reflect the changing seasons"
    ],
    image: "https://images.pexels.com/photos/6913185/pexels-photo-6913185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];