export interface PageSEOConfig {
  path: string;
  name: string;
  category: "Core" | "Catalog" | "Theme" | "Destination" | "Guide" | "Legal" | "Support";
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: "summary" | "summary_large_image";
  hasJsonLd?: boolean;
  targetKeywords?: string[];
}

export const SITE_BASE_URL = "https://manatrips.in";
export const DEFAULT_OG_IMAGE = `${SITE_BASE_URL}/og-image.jpg`;

export const KNOWN_PAGES_REGISTRY: PageSEOConfig[] = [
  {
    path: "/",
    name: "Homepage",
    category: "Core",
    title: "Mana Trips — Budget Friendly Tours & Adventures | Hyderabad",
    description:
      "Curated budget-friendly weekend getaways, family tours, group trips and customized holiday packages from Hyderabad. Verified boutique stays and zero transit stress.",
    canonicalUrl: `${SITE_BASE_URL}/`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Mana Trips — Budget Friendly Tours & Adventures | Hyderabad",
    ogDescription:
      "Curated budget-friendly weekend getaways, family tours, group trips and customized holiday packages from Hyderabad.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: [
      "tours from hyderabad",
      "budget friendly packages",
      "weekend getaways hyderabad",
      "mana trips",
    ],
  },
  {
    path: "/discover",
    name: "Discover Journeys",
    category: "Core",
    title: "Discover Incredible Journeys — Mana Trips",
    description:
      "Discover budget-friendly travel experiences from Hyderabad. Explore trending destinations, weekend blueprints, and mountain tours across India.",
    canonicalUrl: `${SITE_BASE_URL}/discover`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Discover India with Mana Trips",
    ogDescription:
      "Discover budget-friendly travel experiences from Hyderabad. Explore trending destinations and mountain tours.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: ["discover india", "budget travel discovery", "trending tours hyderabad"],
  },
  {
    path: "/tours",
    name: "Tours Catalog",
    category: "Catalog",
    title: "All Tour Packages from Hyderabad — Mana Trips",
    description:
      "Browse handpicked, budget-friendly tour packages departing from Hyderabad. Weekend trips, mountain treks, family escapes, and group tours with verified stays.",
    canonicalUrl: `${SITE_BASE_URL}/tours`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Explore All Tours — Mana Trips Hyderabad",
    ogDescription:
      "Browse handpicked, budget-friendly tour packages departing from Hyderabad with verified boutique stays.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: [
      "tour packages from hyderabad",
      "hyderabad holiday packages",
      "budget trips india",
    ],
  },
  {
    path: "/tours/goa-weekend-escape",
    name: "Tour: Goa Weekend Escape",
    category: "Catalog",
    title: "Goa Weekend Escape (3D/2N) from Hyderabad — Mana Trips",
    description:
      "Unwind on the sunlit shores of North and South Goa. Verified beachfront boutique stay, private airport transfers, and sunset boat cruise departing from Hyderabad.",
    canonicalUrl: `${SITE_BASE_URL}/tours/goa-weekend-escape`,
    ogImage: `${SITE_BASE_URL}/og-image.jpg`,
    ogTitle: "Goa Weekend Escape from Hyderabad — Mana Trips",
    ogDescription:
      "Relax in Goa for 3 days and 2 nights. Verified boutique stay and airport transfers included.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: ["goa trip from hyderabad", "goa weekend package", "goa budget tour"],
  },
  {
    path: "/tours/kashmir-adventure",
    name: "Tour: Kashmir Adventure",
    category: "Catalog",
    title: "Kashmir Adventure (5D/4N) from Hyderabad — Mana Trips",
    description:
      "Experience Srinagar Dal Lake shikara rides, Gulmarg gondola, and pristine Pahalgam valleys with private chauffeurs and verified deluxe houseboats.",
    canonicalUrl: `${SITE_BASE_URL}/tours/kashmir-adventure`,
    ogImage: `${SITE_BASE_URL}/og-image.jpg`,
    ogTitle: "Kashmir Adventure from Hyderabad — Mana Trips",
    ogDescription:
      "5-day Kashmir circuit with Dal Lake shikara, Gulmarg snow and Pahalgam valleys.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: [
      "kashmir package from hyderabad",
      "gulmarg pahalgam tour",
      "kashmir budget trip",
    ],
  },
  {
    path: "/destinations",
    name: "Destinations Hub",
    category: "Destination",
    title: "Destinations Across India — Mana Trips Hyderabad",
    description:
      "Explore handpicked travel destinations across India with seamless departures from Hyderabad. From Goa beaches to Kashmir valleys, Kerala backwaters, and Rajasthan forts.",
    canonicalUrl: `${SITE_BASE_URL}/destinations`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Destinations Across India — Mana Trips",
    ogDescription:
      "Explore handpicked travel destinations across India with seamless departures from Hyderabad.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: [
      "holiday destinations india",
      "travel from hyderabad",
      "places to visit in india",
    ],
  },
  {
    path: "/destinations/goa",
    name: "Destination: Goa",
    category: "Destination",
    title: "Travel Guide to Goa from Hyderabad — Mana Trips",
    description:
      "Complete guide for traveling from Hyderabad to Goa. Flight options, top beaches, coastal dining, heritage Portuguese quarters, and budget-friendly weekend packages.",
    canonicalUrl: `${SITE_BASE_URL}/destinations/goa`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Goa Travel Circuit — Mana Trips",
    ogDescription:
      "Complete guide for traveling from Hyderabad to Goa with flight tips and verified stays.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: ["hyderabad to goa", "goa beaches", "goa tour packages"],
  },
  {
    path: "/destinations/kerala",
    name: "Destination: Kerala",
    category: "Destination",
    title: "Travel Guide to Kerala from Hyderabad — Mana Trips",
    description:
      "Plan your holiday to God's Own Country. Alleppey backwater houseboats, Munnar tea hills, and Fort Kochi heritage with comfortable family-friendly pacing.",
    canonicalUrl: `${SITE_BASE_URL}/destinations/kerala`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Kerala Travel Circuit — Mana Trips",
    ogDescription:
      "Alleppey houseboats, Munnar tea hills, and Fort Kochi departing from Hyderabad.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: ["kerala tour from hyderabad", "munnar alleppey package", "kerala family trip"],
  },
  {
    path: "/travel-styles",
    name: "Travel Styles & Themes",
    category: "Theme",
    title: "Travel Styles & Themes — Mana Trips Hyderabad",
    description:
      "Explore curated travel styles: quick weekend getaways, comfortable family tours, spirited group squad trips, mountain treks, and romantic honeymoons from Hyderabad.",
    canonicalUrl: `${SITE_BASE_URL}/travel-styles`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Travel Styles & Themes — Mana Trips",
    ogDescription:
      "Find the travel style that fits your tempo: weekend getaways, family holidays, group adventures, and romantic escapes.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: [
      "travel styles",
      "weekend getaways",
      "family vacations hyderabad",
      "group squad trips",
    ],
  },
  {
    path: "/travel-guides",
    name: "Travel Guides & Field Notes",
    category: "Guide",
    title: "Travel Guides & Field Notes — Mana Trips Hyderabad",
    description:
      "Practical travel advice, packing checklists, seasonal itineraries, and honest recommendations written for travelers departing from Hyderabad.",
    canonicalUrl: `${SITE_BASE_URL}/travel-guides`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Travel Guides & Field Notes — Mana Trips",
    ogDescription:
      "Practical travel advice, packing checklists, and honest recommendations from Hyderabad.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: ["india travel tips", "hyderabad flight advice", "travel itineraries"],
  },
  {
    path: "/travel-guides/weekend-escapes-near-hyderabad",
    name: "Guide: Escapes Near Hyderabad",
    category: "Guide",
    title: "Quick Weekend Escapes Near Hyderabad — Mana Trips Guide",
    description:
      "Discover road trips and short flights within 1 to 5 hours from Hyderabad. Ananthagiri hills, Nagarjuna Sagar, Gandikota canyon, and Hampi ruins.",
    canonicalUrl: `${SITE_BASE_URL}/travel-guides/weekend-escapes-near-hyderabad`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Quick Weekend Escapes Near Hyderabad — Mana Trips",
    ogDescription: "Road trips and short getaways within 1 to 5 hours from Hyderabad.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: [
      "weekend getaways near hyderabad",
      "ananthagiri hills",
      "gandikota",
      "hampi from hyderabad",
    ],
  },
  {
    path: "/weekend-getaways",
    name: "Weekend Getaways",
    category: "Theme",
    title: "Weekend Getaways from Hyderabad — Mana Trips",
    description:
      "Quick 2-day and 3-day weekend trips departing from Hyderabad. Relax in Goa, unwind in Coorg, or experience Rishikesh without burning annual leaves.",
    canonicalUrl: `${SITE_BASE_URL}/weekend-getaways`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Weekend Getaways — Mana Trips",
    ogDescription:
      "Quick 2-day and 3-day weekend trips departing from Hyderabad with verified boutique stays.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: ["weekend trips from hyderabad", "short vacations", "friday night departures"],
  },
  {
    path: "/family-trips",
    name: "Family Vacations",
    category: "Theme",
    title: "Family Tour Packages from Hyderabad — Mana Trips",
    description:
      "Paced, comfortable family vacations across India departing from Hyderabad. Verified child-friendly hotels, clean dining, private AC vehicles, and gentle sightseeing.",
    canonicalUrl: `${SITE_BASE_URL}/family-trips`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Family Trips — Mana Trips",
    ogDescription:
      "Comfortable family vacations departing from Hyderabad with private AC vehicles and verified child-friendly hotels.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: [
      "family tour packages from hyderabad",
      "kid friendly trips",
      "senior citizen tour",
    ],
  },
  {
    path: "/group-trips",
    name: "Group Trips & Squads",
    category: "Theme",
    title: "Group Trips & Squad Adventures from Hyderabad — Mana Trips",
    description:
      "Group tour packages for college alumni, corporate retreats, and friend circles departing from Hyderabad. Volume pricing, private tempo travellers, and shared adventures.",
    canonicalUrl: `${SITE_BASE_URL}/group-trips`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Group Trips — Mana Trips",
    ogDescription:
      "Group packages for alumni, corporate retreats, and squads with private tempo travellers and shared discounts.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: [
      "group trips from hyderabad",
      "corporate retreat hyderabad",
      "tempo traveller tours",
    ],
  },
  {
    path: "/customized-tours",
    name: "Customized Packages",
    category: "Theme",
    title: "Customized Tour Packages — Mana Trips Hyderabad",
    description:
      "Handcraft your dream itinerary with Mana Trips. Choose your destination, dates, hotel tiers, and travel pace departing from Hyderabad.",
    canonicalUrl: `${SITE_BASE_URL}/customized-tours`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Customized Tours — Mana Trips",
    ogDescription:
      "Handcraft your dream itinerary with verified stays and transparent pricing from Hyderabad.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: [
      "customized tour packages",
      "tailormade holiday india",
      "private travel planner hyderabad",
    ],
  },
  {
    path: "/about",
    name: "About Mana Trips",
    category: "Core",
    title: "About Mana Trips — Hyderabad's Budget-Friendly Travel Specialist",
    description:
      "Learn about Mana Trips: our Hyderabad roots, honest travel philosophy, verified boutique hotel standards, and commitment to making India exploration joyful and affordable.",
    canonicalUrl: `${SITE_BASE_URL}/about`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "About Mana Trips — Hyderabad",
    ogDescription:
      "Our story, values, and mission to deliver honest, memorable, and budget-friendly travel across India.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: ["about mana trips", "hyderabad travel agency", "trusted travel planner"],
  },
  {
    path: "/contact",
    name: "Contact Us",
    category: "Core",
    title: "Contact Mana Trips — Hyderabad Travel Desk & Inquiries",
    description:
      "Reach the Mana Trips team in Hyderabad. Inquire about tour packages, customized weekend getaways, and group travel across India. Fast responses via WhatsApp and phone.",
    canonicalUrl: `${SITE_BASE_URL}/contact`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Contact Mana Trips — Hyderabad",
    ogDescription:
      "Reach the Mana Trips team in Hyderabad. Inquire about tours and customized getaways.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: ["contact mana trips", "mana trips phone number", "hyderabad travel desk"],
  },
  {
    path: "/faq",
    name: "Frequently Asked Questions",
    category: "Support",
    title: "Frequently Asked Questions — Mana Trips Hyderabad",
    description:
      "Find answers to common questions regarding tour bookings, payment schedules, flight coordination from Hyderabad, verified hotel standards, and cancellation policies.",
    canonicalUrl: `${SITE_BASE_URL}/faq`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "FAQ — Mana Trips",
    ogDescription:
      "Find answers to common questions about booking, payments, cancellations, and trip coordination.",
    twitterCard: "summary_large_image",
    hasJsonLd: true,
    targetKeywords: ["mana trips faq", "tour booking help", "hyderabad travel questions"],
  },
  {
    path: "/booking-help",
    name: "Booking Help & Guide",
    category: "Support",
    title: "Booking Help & How It Works — Mana Trips Hyderabad",
    description:
      "Step-by-step guide to reserving your holiday with Mana Trips. Clear payment milestones, transparent invoicing, pre-trip preparation, and dedicated WhatsApp support.",
    canonicalUrl: `${SITE_BASE_URL}/booking-help`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Booking Help & How It Works — Mana Trips",
    ogDescription: "Step-by-step guide to planning and confirming your trip with Mana Trips.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: ["how to book mana trips", "tour booking steps", "payment milestones"],
  },
  {
    path: "/cancellation-policy",
    name: "Cancellation Policy",
    category: "Legal",
    title: "Cancellation & Refund Policy — Mana Trips Hyderabad",
    description:
      "Transparent cancellation timeline and refund procedures for Mana Trips holiday packages. Review fee tiers, airline credit terms, and emergency postponement options.",
    canonicalUrl: `${SITE_BASE_URL}/cancellation-policy`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Cancellation Policy — Mana Trips",
    ogDescription:
      "Clear terms and refund schedules for tour cancellations and date modifications.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: ["cancellation policy", "refund schedule", "travel terms"],
  },
  {
    path: "/terms",
    name: "Terms & Conditions",
    category: "Legal",
    title: "Terms & Conditions — Mana Trips Hyderabad",
    description:
      "Read the terms and conditions governing booking, travel services, traveler responsibilities, and itinerary modifications with Mana Trips.",
    canonicalUrl: `${SITE_BASE_URL}/terms`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Terms & Conditions — Mana Trips",
    ogDescription: "Terms of service and booking conditions for Mana Trips customers.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: ["terms and conditions", "travel terms", "booking agreement"],
  },
  {
    path: "/privacy",
    name: "Privacy Policy",
    category: "Legal",
    title: "Privacy Policy — Mana Trips Hyderabad",
    description:
      "Mana Trips privacy policy outlining how customer contact information, travel preferences, and payment records are collected, securely handled, and never sold.",
    canonicalUrl: `${SITE_BASE_URL}/privacy`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Privacy Policy — Mana Trips",
    ogDescription: "How Mana Trips protects traveler privacy and contact information.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: ["privacy policy", "data protection", "customer confidentiality"],
  },
  {
    path: "/careers",
    name: "Careers & Culture",
    category: "Core",
    title: "Careers at Mana Trips — Join Our Hyderabad Team",
    description:
      "Work with Mana Trips in Hyderabad. We're hiring passionate Trip Designers, Tour Coordinators, and Travel Storytellers committed to delivering unforgettable experiences.",
    canonicalUrl: `${SITE_BASE_URL}/careers`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Careers at Mana Trips — Hyderabad",
    ogDescription: "Join our travel team in Hyderabad as a Trip Designer or Coordinator.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: ["travel jobs hyderabad", "mana trips careers", "trip designer job"],
  },
  {
    path: "/support",
    name: "Support Desk",
    category: "Support",
    title: "Support Desk & Traveler Assistance — Mana Trips Hyderabad",
    description:
      "Need help with an upcoming journey or need assistance? Contact the 24/7 Mana Trips support team in Hyderabad via WhatsApp, phone, or email.",
    canonicalUrl: `${SITE_BASE_URL}/support`,
    ogImage: DEFAULT_OG_IMAGE,
    ogTitle: "Support Desk — Mana Trips",
    ogDescription: "Direct support channels for booked travelers and prospective inquiries.",
    twitterCard: "summary_large_image",
    hasJsonLd: false,
    targetKeywords: ["customer support", "travel helpline hyderabad", "emergency trip support"],
  },
];
