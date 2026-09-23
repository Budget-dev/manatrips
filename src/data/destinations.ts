import goaImage from "@/assets/trip-goa.jpg";
import kashmirImage from "@/assets/trip-kashmir.jpg";
import keralaImage from "@/assets/trip-kerala.jpg";
import rajasthanImage from "@/assets/trip-rajasthan.jpg";
import himachalImage from "@/assets/images/destination_himachal_1790176930790.jpg";
import ladakhImage from "@/assets/images/destination_ladakh_1790176949108.jpg";
import andamanImage from "@/assets/images/destination_andaman_1790176965579.jpg";
import uttarakhandImage from "@/assets/images/destination_uttarakhand_1790176985237.jpg";

export interface Destination {
  id: string;
  name: string;
  state: string;
  image: string;
  description: string;
  bestSeason: string;
  duration: string;
  startingPrice: number;
  popularExperiences: string[];
  overview: string;
  highlights: string[];
  quickTips: string[];
  relatedTourIds: string[];
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    image: goaImage,
    description: "Sun-kissed beaches, coastal Portuguese charm, and vibrant seaside bistros.",
    bestSeason: "October to April",
    duration: "3 to 4 days",
    startingPrice: 7999,
    popularExperiences: [
      "Sunset dolphin boat cruises",
      "Latin quarter walking trail in Fontainhas",
      "Authentic coastal seafood shacks",
      "Scooter rides through lush paddy roads",
    ],
    overview:
      "Goa offers the quintessential quick getaway from Hyderabad. With rapid 1-hour flight connections or comfortable overnight trains, you can transition from city life to golden sands and Arabian Sea breezes in no time.",
    highlights: [
      "Vagator and Anjuna cliffside sunset viewpoints",
      "Quiet North beaches like Morjim and Ashwem",
      "Historic Basilica of Bom Jesus and Se Cathedral in Old Goa",
      "Vibrant flea markets and local spice farms in Ponda",
    ],
    quickTips: [
      "Rent a two-wheeler with an original driving license for effortless navigation.",
      "Explore South Goa for tranquil heritage stays and North Goa for dining & music.",
      "Carry sunscreen, cotton resort wear, and cash for small beach stalls.",
    ],
    relatedTourIds: ["goa-weekend-escape"],
  },
  {
    id: "kashmir",
    name: "Kashmir",
    state: "Jammu & Kashmir",
    image: kashmirImage,
    description: "Serene Dal Lake houseboats, snow-clad pine valleys, and mountain meadows.",
    bestSeason: "April to October (Greenery) & Dec to Feb (Snow)",
    duration: "5 to 6 days",
    startingPrice: 16999,
    popularExperiences: [
      "Shikara sunset ride across Dal Lake",
      "Gulmarg Gondola cable car up to snowline",
      "Pahalgam Lidder river strolls",
      "Sipping hot Saffron Kahwa with almond flakes",
    ],
    overview:
      "Celebrated as paradise on earth, Kashmir enchants travelers with misty pine forests, historic wooden houseboats, and snow-dusted Himalayan peaks. Our curated itineraries ensure safe, comfortable family journeys from Hyderabad.",
    highlights: [
      "Authentic heritage stay in handcrafted cedar houseboats",
      "Mughal gardens of Shalimar, Nishat, and Chashme Shahi",
      "Scenic excursion into Betaab and Aru valleys in Pahalgam",
      "Local artisan encounters for Pashmina, carpets, and walnut carvings",
    ],
    quickTips: [
      "Prepaid mobile SIMs from other states do not work; keep a postpaid connection.",
      "Book Gondola Phase 2 tickets well in advance during peak holidays.",
      "Layering is key — even summer evenings can feel chilly.",
    ],
    relatedTourIds: ["kashmir-adventure"],
  },
  {
    id: "kerala",
    name: "Kerala",
    state: "Kerala",
    image: keralaImage,
    description: "Emerald tea plantations of Munnar, serene backwaters, and Ayurvedic calm.",
    bestSeason: "September to March",
    duration: "4 to 5 days",
    startingPrice: 12999,
    popularExperiences: [
      "Overnight stay on private Alleppey houseboat",
      "Tea plantation tours and spice estate walks",
      "Sampling traditional feast on banana leaves (Sadhya)",
      "Watching Kathakali dance and martial Kalaripayattu",
    ],
    overview:
      "God's Own Country presents a soothing retreat into tropical greenery. Breathe in clean mountain air in Munnar and cruise leisurely through the quiet backwaters of Alleppey and Kumarakom.",
    highlights: [
      "Misty tea terraces of Munnar and Mattupetty Dam",
      "Cruising past coir-making villages on a traditional kettuvallam",
      "Periyar wildlife sanctuary boat safari in Thekkady",
      "Historic Fort Kochi Chinese fishing nets and spice markets",
    ],
    quickTips: [
      "Opt for direct flights from Hyderabad to Cochin (COK).",
      "Houseboat check-in is typically at 12:30 PM with cruising until 5:30 PM.",
      "Buy certified spices and cold-pressed coconut oil directly from licensed estates.",
    ],
    relatedTourIds: ["kerala-family-escape"],
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    state: "Rajasthan",
    image: rajasthanImage,
    description: "Golden sand fortresses, royal Rajput palaces, and vibrant artisan markets.",
    bestSeason: "October to March",
    duration: "4 to 6 days",
    startingPrice: 14999,
    popularExperiences: [
      "Amer Fort hilltop architecture and Sheesh Mahal",
      "Sunset views of the Pink City from Nahargarh ramparts",
      "Folk dancing and hot Dal Baati Churma at a cultural village",
      "Shopping for block-printed fabrics and blue pottery",
    ],
    overview:
      "Step into the land of maharajas, timeless architecture, and vibrant desert warmth. From the majestic forts of Jaipur to the tranquil lakes of Udaipur, Rajasthan is an unforgettable sensory journey.",
    highlights: [
      "Pink City heritage monuments: City Palace, Hawa Mahal, and Jantar Mantar",
      "Panoramic views of Jaipur from hilltop forts",
      "Intricate mirror inlay work inside royal palace chambers",
      "Rich culinary traditions and sweet ghewar tastings",
    ],
    quickTips: [
      "Wear sturdy shoes with good grip for fort steps and cobblestones.",
      "Winter mornings and nights can be brisk, requiring a jacket.",
      "Carry valid student or senior IDs for discounted monument entrance fees.",
    ],
    relatedTourIds: ["rajasthan-heritage"],
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    state: "Himachal Pradesh",
    image: himachalImage,
    description: "Snow-peaked Himalayan ranges, pine forest trails, and rushing mountain rivers.",
    bestSeason: "March to June (Summer) & Dec to Feb (Snow)",
    duration: "5 to 6 days",
    startingPrice: 15499,
    popularExperiences: [
      "Crossing Atal Tunnel into snow-covered Sissu valley",
      "Jogini waterfall cedar forest hike",
      "White water river rafting in the Beas river",
      "Cafe hopping in Old Manali",
    ],
    overview:
      "Himachal Pradesh welcomes travelers with towering deodar forests, crisp Himalayan air, and thrilling mountain passes. Perfect for couples, groups of friends, and families seeking an escape from southern summer heat.",
    highlights: [
      "Solang Valley adventure sports and snow viewpoints",
      "Historic Naggar Castle wooden architecture",
      "Hadimba Temple amidst ancient cedar groves",
      "Vashisht natural sulphur hot springs",
    ],
    quickTips: [
      "Fly to Chandigarh from Hyderabad for the smoothest scenic mountain ascent.",
      "Carry layered woollens, thermal innerwear, and waterproof gloves for snow.",
      "Allow adequate travel time on winding mountain roads.",
    ],
    relatedTourIds: ["himachal-manali-snow-trail"],
  },
  {
    id: "ladakh",
    name: "Ladakh",
    state: "Ladakh",
    image: ladakhImage,
    description: "High-altitude desert wonderland, deep turquoise lakes, and ancient Gompas.",
    bestSeason: "May to September",
    duration: "6 to 7 days",
    startingPrice: 24999,
    popularExperiences: [
      "Watching the sunrise over 140km-long Pangong Lake",
      "Crossing the legendary Khardung La pass",
      "Double-humped camel safari on Nubra sand dunes",
      "Listening to early morning monastic chants at Thiksey",
    ],
    overview:
      "Known as the Land of High Passes, Ladakh delivers breathtaking landscapes that look like another planet. Barren brown mountain ridges contrast dramatically with deep blue skies and turquoise glacial waters.",
    highlights: [
      "Nubra Valley cold desert dunes surrounded by snow peaks",
      "Pangong Tso border lake changing colors throughout the day",
      "Magnetic Hill optical illusion and Indus-Zanskar confluence",
      "Shanti Stupa sunset overlooking Leh valley",
    ],
    quickTips: [
      "Complete rest on Day 1 is mandatory for altitude acclimatization.",
      "Drink 3-4 liters of water daily to prevent AMS (Acute Mountain Sickness).",
      "Carry cash as internet and card terminals are limited in remote valleys.",
    ],
    relatedTourIds: ["ladakh-monasteries-high-passes"],
  },
  {
    id: "andaman-nicobar",
    name: "Andaman & Nicobar",
    state: "Andaman & Nicobar Islands",
    image: andamanImage,
    description: "Powdery white beaches, turquoise waters, and vibrant coral marine life.",
    bestSeason: "October to May",
    duration: "5 to 6 days",
    startingPrice: 19999,
    popularExperiences: [
      "Basking in the sunset at Radhanagar Beach (Havelock)",
      "Snorkeling and scuba diving along living coral reefs",
      "High-speed catamaran cruise across the open Bay of Bengal",
      "Cellular Jail national memorial tour in Port Blair",
    ],
    overview:
      "India's premier island paradise beckons with warm tropical waters, swaying palms, and rich marine biodiversity. An exceptional choice for honeymoons, family holidays, and diving enthusiasts.",
    highlights: [
      "Elephant Beach water adventures and coral reef walks",
      "Neil Island natural rock bridge and quiet sunset viewpoints",
      "Historical walking trails through colonial Ross Island ruins",
      "Fresh coconut water and local seafood delicacies",
    ],
    quickTips: [
      "Direct or 1-stop flights operate regularly between Hyderabad and Port Blair.",
      "Always check ferry schedules in advance during inter-island travel.",
      "Protect coral reefs by using eco-friendly sunscreen and avoiding touching marine life.",
    ],
    relatedTourIds: ["andaman-island-escape"],
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    state: "Uttarakhand",
    image: uttarakhandImage,
    description: "The spiritual yoga capital, holy Ganges rapids, and misty Himalayan foothills.",
    bestSeason: "September to June",
    duration: "4 to 5 days",
    startingPrice: 10499,
    popularExperiences: [
      "Ganga Aarti with bells and oil lamps at Parmarth Niketan",
      "16 km white water rafting through grade III rapids",
      "Exploring the historic Beatles Ashram meditation domes",
      "Cafe culture overlooking the turquoise Ganges",
    ],
    overview:
      "Uttarakhand combines soulful spirituality with adrenaline-pumping outdoor adventure. From peaceful ashrams to exhilarating river rapids, Rishikesh and Haridwar provide a refreshing escape.",
    highlights: [
      "Evening prayer ceremonies along the sacred river banks",
      "Iconic suspension bridges of Ram Jhula and Lakshman Jhula",
      "Short scenic hikes to Neer Garh waterfalls",
      "Mountain view sunrise yoga sessions",
    ],
    quickTips: [
      "Fly to Dehradun Airport (DED) from Hyderabad for a quick 45-minute drive to Rishikesh.",
      "Rishikesh is a vegetarian town; alcohol is prohibited in holy zones.",
      "Rafting remains closed during peak monsoon (July-August).",
    ],
    relatedTourIds: ["rishikesh-river-foothills"],
  },
  {
    id: "karnataka",
    name: "Karnataka (Coorg & Hampi)",
    state: "Karnataka",
    image: keralaImage,
    description: "Misty coffee plantations in Coorg and UNESCO boulder temples in Hampi.",
    bestSeason: "October to March",
    duration: "3 to 4 days",
    startingPrice: 8499,
    popularExperiences: [
      "Waking up to birdsong in a Coorg coffee estate homestay",
      "Exploring the boulder ruins of the Vijayanagara Empire in Hampi",
      "Bathing with elephants at Dubare Elephant Camp",
      "Watching the sunset from Matanga Hill",
    ],
    overview:
      "Karnataka presents an accessible weekend paradise from Hyderabad. Travel back in time through the monumental stone temples of Hampi or unwind in the misty hills of Coorg with fresh estate brew.",
    highlights: [
      "Abbey Falls and Raja's Seat in Madikeri (Coorg)",
      "Virupaksha Temple and Vitthala stone chariot in Hampi",
      "Tibetan Golden Temple monastery in Bylakuppe",
      "Aromatic Coorg pandi curry and fresh filter coffee",
    ],
    quickTips: [
      "Hampi is an easy overnight sleeper train or 6-hour road trip from Hyderabad.",
      "Rent a bicycle to explore the vast Hampi ruins leisurely.",
      "Coorg homestays provide the most authentic Kodava cuisine and hospitality.",
    ],
    relatedTourIds: ["goa-weekend-escape"],
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu (Ooty & Kodaikanal)",
    state: "Tamil Nadu",
    image: himachalImage,
    description: "Nilgiri toy train heritage, rolling eucalyptus hills, and serene lakes.",
    bestSeason: "October to May",
    duration: "3 to 4 days",
    startingPrice: 8999,
    popularExperiences: [
      "Riding the historic Nilgiri Mountain Railway toy train",
      "Boating across Ooty and Kodaikanal lakes",
      "Walking through botanical gardens and pine forests",
      "Buying homemade fudge, chocolates, and Nilgiri eucalyptus oils",
    ],
    overview:
      "The Queen of Hill Stations (Ooty) and Princess of Hill Stations (Kodaikanal) offer cool weather and colonial charm nestled in the Western Ghats. A beloved choice for family retreats and budget weekend getaways.",
    highlights: [
      "Doddabetta Peak panoramic valley views",
      "Coonoor tea factory tours and Dolphin's Nose viewpoint",
      "Pillar Rocks and Coaker's Walk in Kodaikanal",
      "Centuries-old botanical and rose gardens",
    ],
    quickTips: [
      "Take an overnight train from Hyderabad to Coimbatore, followed by a short hill drive.",
      "Nilgiri toy train tickets should be reserved well ahead on IRCTC.",
      "Pack light warm clothing, as temperatures drop noticeably after sunset.",
    ],
    relatedTourIds: ["kerala-family-escape"],
  },
];
