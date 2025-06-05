export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sora Yamamoto",
    location: "Tokyo, Japan",
    quote: "My Koke Garden terrarium has become the focal point of my apartment. Each morning, I spend a few moments contemplating its miniature landscape while enjoying my tea. It brings a sense of peace that I didn't know was missing from my urban lifestyle.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Emma Chen",
    location: "San Francisco, USA",
    quote: "As someone who travels frequently for work, I wanted a low-maintenance way to bring nature into my home. The Bamboo Sanctuary has exceeded my expectations—it thrives with minimal care and creates a meditative atmosphere in my living room.",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Thomas Laurent",
    location: "Paris, France",
    quote: "The attention to detail in my Stone & Water terrarium is extraordinary. I've placed it in my home office, and it serves as a constant reminder to find balance amidst the chaos of deadlines. The craftsmanship speaks to the centuries-old tradition of Japanese gardening.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Olivia Jensen",
    location: "Copenhagen, Denmark",
    quote: "I purchased the Shizen Balance as a gift for my mother, who has always admired Japanese aesthetics. She was moved to tears by its beauty and the philosophy behind it. Now I'm ordering one for myself—these terrariums truly embody the elegance of simplicity.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];