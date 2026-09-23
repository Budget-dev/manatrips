import goaImage from "@/assets/trip-goa.jpg";
import kashmirImage from "@/assets/trip-kashmir.jpg";
import keralaImage from "@/assets/trip-kerala.jpg";
import rajasthanImage from "@/assets/trip-rajasthan.jpg";
import himachalImage from "@/assets/images/destination_himachal_1790176930790.jpg";
import andamanImage from "@/assets/images/destination_andaman_1790176965579.jpg";

export interface TravelStyleCategory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
  idealFor: string;
  popularTours: { id: string; name: string; duration: string; price: number }[];
}

export const TRAVEL_STYLES_DATA: TravelStyleCategory[] = [
  {
    id: "weekend-getaways",
    slug: "weekend-getaways",
    title: "Weekend Getaways",
    subtitle: "Short breaks. Maximum recharge.",
    image: goaImage,
    description:
      "Crafted specifically for Hyderabad working professionals, tech teams, and couples looking for a frictionless 2 to 3-day getaway without using up valuable annual leave.",
    features: [
      "Optimized flight & overnight train itineraries",
      "Early check-in and late checkout assistance",
      "Handpicked stays close to major attractions",
      "Zero-hassle local private transit pre-arranged",
    ],
    idealFor: "Working professionals, couples, and friends seeking a quick Friday-Sunday recharge.",
    popularTours: [
      { id: "goa-weekend-escape", name: "Goa Weekend Escape", duration: "3D/2N", price: 7999 },
      {
        id: "rishikesh-river-foothills",
        name: "Rishikesh River & Soul",
        duration: "4D/3N",
        price: 10499,
      },
    ],
  },
  {
    id: "family-journeys",
    slug: "family-trips",
    title: "Family Journeys",
    subtitle: "Comfortable, paced & multigenerational friendly.",
    image: keralaImage,
    description:
      "Stress-free vacations designed for kids, parents, and grandparents alike. Relaxed pacing, verified child-friendly hotels, clean dining, and gentle nature experiences.",
    features: [
      "Spacious family rooms and interconnected cottages",
      "Private AC vehicle reserved exclusively for your family",
      "Comfortable pacing with minimal daily road transfers",
      "Safe, verified local restaurants accommodating all dietary needs",
    ],
    idealFor: "Parents traveling with children, family reunions, and senior citizens.",
    popularTours: [
      { id: "kerala-family-escape", name: "Kerala Family Escape", duration: "4D/3N", price: 12999 },
      { id: "andaman-island-escape", name: "Andaman Blue Lagoon", duration: "5D/4N", price: 19999 },
    ],
  },
  {
    id: "group-adventures",
    slug: "group-trips",
    title: "Group Adventures",
    subtitle: "More friends, shared memories, unbeatable budget.",
    image: rajasthanImage,
    description:
      "Travel with your college crew, office teammates, or hobby circles. Enjoy volume savings, group villa bookings, private bonfires, and shared expedition memories.",
    features: [
      "Significant group discounts and bundled packages",
      "Private tempo travellers / minivans with sound systems",
      "Dedicated group coordinator support",
      "Curated group activities: bonfires, barbecues, and team games",
    ],
    idealFor: "College alumni, corporate offsites, biking clubs, and friendship circles.",
    popularTours: [
      { id: "rajasthan-heritage", name: "Rajasthan Heritage", duration: "4D/3N", price: 14999 },
      {
        id: "himachal-manali-snow-trail",
        name: "Himachal Manali Snow Trail",
        duration: "5D/4N",
        price: 15499,
      },
    ],
  },
  {
    id: "adventure-trips",
    slug: "adventure-trips",
    title: "Adventure Trips",
    subtitle: "High passes, rushing rapids, and alpine trails.",
    image: himachalImage,
    description:
      "For those who crave the thrill of the outdoors. High-altitude mountain passes, white-water river rafting, camping under starlit Himalayan skies, and rugged trails.",
    features: [
      "Experienced certified mountain guides & safety escorts",
      "Quality camping equipment and high-altitude emergency kits",
      "Pre-trip fitness guidelines and acclimatization protocols",
      "Scenic off-beat routes away from tourist crowds",
    ],
    idealFor: "Thrill-seekers, trekking lovers, and outdoor photography enthusiasts.",
    popularTours: [
      {
        id: "ladakh-monasteries-high-passes",
        name: "Ladakh Monasteries & High Passes",
        duration: "6D/5N",
        price: 24999,
      },
      {
        id: "rishikesh-river-foothills",
        name: "Rishikesh River & Soul",
        duration: "4D/3N",
        price: 10499,
      },
    ],
  },
  {
    id: "honeymoon",
    slug: "honeymoon",
    title: "Honeymoon & Romantic Escapes",
    subtitle: "Quiet luxury, panoramic sunsets & intimate moments.",
    image: kashmirImage,
    description:
      "Cherish the beginning of a lifetime journey with thoughtful touches — candlelit dinners by the beach, private houseboats floating on calm waters, and secluded mountain chalets.",
    features: [
      "Complimentary honeymoon cake & floral room decor",
      "Intimate private candlelight dinners in scenic settings",
      "Premium view rooms with private balconies or plunge pools",
      "Paced itineraries allowing plenty of personal downtime",
    ],
    idealFor: "Newlyweds and couples celebrating anniversaries or milestone moments.",
    popularTours: [
      { id: "kashmir-adventure", name: "Kashmir Adventure", duration: "5D/4N", price: 16999 },
      { id: "andaman-island-escape", name: "Andaman Blue Lagoon", duration: "5D/4N", price: 19999 },
    ],
  },
  {
    id: "customized-tours",
    slug: "customized-tours",
    title: "Customized Tours",
    subtitle: "Your dates. Your pace. Handcrafted just for you.",
    image: andamanImage,
    description:
      "Don't see the exact combination you want? Our Hyderabad travel architects build personalized itineraries tailored to your dates, budget, hotel preferences, and dream stops.",
    features: [
      "1-on-1 itinerary consultation with Hyderabad travel specialists",
      "Flexible start dates and completely customizable durations",
      "Choice of budget, boutique, or heritage properties",
      "Transparent day-by-day cost breakdown with zero hidden fees",
    ],
    idealFor:
      "Travelers with specific bucket-list stops, flexible dates, or special dietary requirements.",
    popularTours: [
      { id: "kashmir-adventure", name: "Kashmir & Ladakh Combo", duration: "8D/7N", price: 34999 },
      { id: "kerala-family-escape", name: "Kerala Hills & Coast", duration: "6D/5N", price: 18999 },
    ],
  },
];
