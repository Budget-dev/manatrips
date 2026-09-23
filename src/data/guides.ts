import goaImage from "@/assets/trip-goa.jpg";
import kashmirImage from "@/assets/trip-kashmir.jpg";
import keralaImage from "@/assets/trip-kerala.jpg";
import rajasthanImage from "@/assets/trip-rajasthan.jpg";
import himachalImage from "@/assets/images/destination_himachal_1790176930790.jpg";
import ladakhImage from "@/assets/images/destination_ladakh_1790176949108.jpg";

export interface TravelGuide {
  id: string;
  slug: string;
  title: string;
  category:
    | "Weekend Notes"
    | "Mountain Guides"
    | "Family Travel"
    | "Budget Travel"
    | "Travel Tips"
    | "Destination Guides";
  readTime: string;
  date: string;
  image: string;
  author: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  relatedGuideIds: string[];
}

export const TRAVEL_GUIDES_DATA: TravelGuide[] = [
  {
    id: "hyderabad-to-goa-weekend-blueprint",
    slug: "hyderabad-to-goa-weekend-blueprint",
    title: "The Ultimate 3-Day Hyderabad to Goa Weekend Blueprint",
    category: "Weekend Notes",
    readTime: "5 min read",
    date: "September 18, 2026",
    image: goaImage,
    author: "Mana Trips Hyderabad Desk",
    excerpt:
      "How to maximize a 48-hour escape to Goa without burning through your leave or overspending on surge bookings.",
    content: [
      "For Hyderabad's busy tech professionals and founders, a weekend escape to Goa isn't just a holiday — it's an essential sanity reset. The key to making a 3-day trip feel like a week-long vacation lies in transit timing and neighborhood selection.",
      "Catch an early Friday flight (or the Thursday night sleeper train to Madgaon). By 10:00 AM, you're enjoying fresh coconut water and warm Goan poee in Vagator instead of sitting in traffic at Cyber Towers.",
      "Skip the overcrowded central strips of Baga and Calangute if you crave peace. Instead, split your time between the quieter shores of Ashwem / Morjim in the north, and an afternoon wandering the pastel heritage corridors of Fontainhas in Panaji.",
      "Pro Tip: Always pre-book your two-wheeler or local car before landing. Airport rental desks charge double during weekend surges.",
    ],
    keyTakeaways: [
      "Depart Friday morning on direct flights from RGIA Hyderabad.",
      "Base yourself in Mandrem, Ashwem, or quiet boutique hotels in Candolim.",
      "Reserve Fontainhas for Saturday morning light when heritage buildings look most vibrant.",
      "Carry an original driving license for reliable scooter rentals.",
    ],
    relatedGuideIds: ["budget-travel-hacks-india", "family-friendly-kerala-itinerary"],
  },
  {
    id: "first-timers-guide-to-kashmir",
    slug: "first-timers-guide-to-kashmir",
    title: "First-Timer's Complete Guide to Kashmir: What No One Tells You",
    category: "Mountain Guides",
    readTime: "7 min read",
    date: "September 10, 2026",
    image: kashmirImage,
    author: "Mana Trips Expedition Team",
    excerpt:
      "From SIM card restrictions to Gulmarg Gondola slot bookings, here is everything you must know before boarding your Srinagar flight.",
    content: [
      "Visiting Kashmir for the first time is an awe-inspiring experience, but there are practical logistics unique to Jammu & Kashmir that every traveler from South India should know beforehand.",
      "First: Prepaid mobile phone connections issued in Telangana, Andhra Pradesh, and other states outside J&K do not work in the valley due to telecommunications regulations. Make sure at least one person in your party carries an active postpaid SIM card (Jio and Airtel have the strongest coverage).",
      "Second: The Gulmarg Gondola is India's most sought-after cable car. Tickets for Phase 1 and Phase 2 sell out weeks in advance online. Never arrive expecting counter tickets on the day of travel.",
      "Third: Spend at least one night on a traditional wooden houseboat on Dal Lake or Nigeen Lake. The tranquility of waking up to misty water and floating flower vendors is an experience hotels cannot replicate.",
    ],
    keyTakeaways: [
      "Carry an active postpaid connection or buy a local prepaid SIM upon arrival.",
      "Secure online Gulmarg Gondola tickets at least 3 weeks prior.",
      "Opt for MAP meal plans (breakfast + dinner) as valley restaurants close early.",
      "Keep woollen thermals ready even in the middle of June.",
    ],
    relatedGuideIds: ["high-altitude-prep-ladakh", "family-friendly-kerala-itinerary"],
  },
  {
    id: "budget-travel-hacks-india",
    slug: "budget-travel-hacks-india",
    title: "7 Practical Hacks for High-Quality Budget Travel Across India",
    category: "Budget Travel",
    readTime: "6 min read",
    date: "August 28, 2026",
    image: rajasthanImage,
    author: "Mana Trips Hyderabad Desk",
    excerpt:
      "How Mana Trips structures tours that keep prices friendly without compromising on clean rooms, safety, or good food.",
    content: [
      "Budget travel does not mean sleeping in dingy dormitories or eating questionable street food. True budget-friendly travel is the art of eliminating avoidable middlemen, booking verified boutique stays, and traveling smart.",
      "Travel during the shoulder season: Visiting Rajasthan in early October or late February offers crisp weather without peak December room rates.",
      "Group economics: When 4 to 6 friends travel together, the per-person cost of private cabs and spacious suites drops by up to 35% compared to solo or couple bookings.",
      "Local dining over hotel buffets: You will eat infinitely tastier food and spend a fraction of the cost by eating where local residents eat.",
    ],
    keyTakeaways: [
      "Shoulder months offer 30-40% savings on identical properties.",
      "Travel in small squads of 4 to 6 for shared transport efficiency.",
      "Pre-bundle sightseeing with verified local operators.",
      "Focus your spending on experiences rather than overpriced hotel lobbies.",
    ],
    relatedGuideIds: ["hyderabad-to-goa-weekend-blueprint", "family-friendly-kerala-itinerary"],
  },
  {
    id: "family-friendly-kerala-itinerary",
    slug: "family-friendly-kerala-itinerary",
    title: "Planning a Peaceful Kerala Trip for Multi-Generational Families",
    category: "Family Travel",
    readTime: "5 min read",
    date: "August 15, 2026",
    image: keralaImage,
    author: "Mana Trips Family Concierge",
    excerpt:
      "Pacing your journey for toddlers and grandparents: why less travel time and more scenery makes the perfect family vacation.",
    content: [
      "When traveling with children and elderly parents, traditional fast-paced sightseeing itineraries quickly lead to exhaustion. Kerala is wonderfully suited for multi-generational travel because its natural beauty is best absorbed slowly.",
      "Instead of changing hotels every night, adopt a two-base strategy: 2 nights in a peaceful Munnar tea estate resort, followed by 1 night cruising on a private Alleppey houseboat.",
      "Ensure your vehicle is a comfortable AC Innova or Tempo with a patient, experienced driver. Mountain roads between Cochin and Munnar take 3.5 to 4 hours with tea stops.",
      "Houseboat dining: Notify the boat crew in advance about your family's spice tolerances. Kerala houseboat cooks are masters at tailoring fresh meals to children and seniors.",
    ],
    keyTakeaways: [
      "Adopt a two-hub itinerary rather than hopping hotels every 24 hours.",
      "Select private houseboats with dedicated cooks for personalized dining.",
      "Schedule frequent scenic breaks along the Cheeyappara waterfall ghats.",
      "Choose ground-floor rooms or resorts with ramp access for seniors.",
    ],
    relatedGuideIds: ["budget-travel-hacks-india", "first-timers-guide-to-kashmir"],
  },
  {
    id: "high-altitude-prep-ladakh",
    slug: "high-altitude-prep-ladakh",
    title: "The Essential High-Altitude Acclimatization Checklist for Ladakh",
    category: "Mountain Guides",
    readTime: "8 min read",
    date: "July 30, 2026",
    image: ladakhImage,
    author: "Mana Trips Medical & Safety Advisory",
    excerpt:
      "Everything you need to know about altitude sickness, hydration, and safe ascent protocols in the high Himalayas.",
    content: [
      "Stepping off an aircraft at Leh Airport (11,500 feet above sea level) exposes your body to significantly thinner air than Hyderabad's 1,770 feet. Understanding AMS (Acute Mountain Sickness) is the single most important factor for a successful expedition.",
      "Rule Number One: Day 1 is strictly for hotel bed rest. No market strolls, no stairs, and no heavy meals. Let your red blood cells adjust quietly.",
      "Hydration is critical: Drink 3 to 4 liters of water, garlic soup, or oral rehydration salts daily. Avoid caffeine and alcohol for the first 48 hours.",
      "Consult your physician in Hyderabad before departure regarding Diamox (acetazolamide) tablets.",
    ],
    keyTakeaways: [
      "Zero physical exertion on arrival day in Leh.",
      "Consume 3-4 liters of water and warm fluids daily.",
      "Travel with verified operators providing on-board oxygen in vehicles.",
      "Never rush an ascent over Khardung La or Chang La.",
    ],
    relatedGuideIds: ["first-timers-guide-to-kashmir", "himachal-road-trip-guide"],
  },
  {
    id: "himachal-road-trip-guide",
    slug: "himachal-road-trip-guide",
    title: "Exploring Manali, Atal Tunnel & Lahaul Valley by Road",
    category: "Destination Guides",
    readTime: "6 min read",
    date: "July 12, 2026",
    image: himachalImage,
    author: "Mana Trips Hyderabad Desk",
    excerpt:
      "How the Atal Tunnel revolutionized travel to the Himalayas, and how to craft an unforgettable 5-day circuit.",
    content: [
      "Until recently, visiting Lahaul and Spiti required crossing the treacherous Rohtang Pass, often closed by snow for half the year. The Atal Tunnel now connects Solang Valley to Sissu in just 15 minutes of subterranean driving.",
      "Drive through the tunnel and you instantly emerge from lush green pine forests into the stark, awe-inspiring, snow-capped amphitheater of the Chandra River valley.",
      "Stop at Sissu Waterfall for spectacular photographs, then return for warm wooden cafe evenings in Old Manali.",
    ],
    keyTakeaways: [
      "Atal Tunnel provides year-round access to the trans-Himalayan wonderland.",
      "Solang Valley offers zorbing, quad biking, and winter skiing.",
      "Old Manali is best explored on foot with light woollens.",
    ],
    relatedGuideIds: ["high-altitude-prep-ladakh", "budget-travel-hacks-india"],
  },
];
