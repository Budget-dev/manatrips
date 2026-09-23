import goaImage from "@/assets/trip-goa.jpg";
import kashmirImage from "@/assets/trip-kashmir.jpg";
import keralaImage from "@/assets/trip-kerala.jpg";
import rajasthanImage from "@/assets/trip-rajasthan.jpg";
import himachalImage from "@/assets/images/destination_himachal_1790176930790.jpg";
import ladakhImage from "@/assets/images/destination_ladakh_1790176949108.jpg";
import andamanImage from "@/assets/images/destination_andaman_1790176965579.jpg";
import uttarakhandImage from "@/assets/images/destination_uttarakhand_1790176985237.jpg";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  stay?: string;
  meals?: string;
}

export interface TourPackage {
  id: string;
  name: string;
  place: string;
  duration: string;
  days: number;
  nights: number;
  detail: string;
  price: number;
  rating: string;
  reviewsCount: number;
  tag: string;
  travelStyle: "weekend" | "family" | "group" | "customized" | "adventure";
  image: string;
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  thingsToKnow: string[];
  faqs: { question: string; answer: string }[];
}

export const TOURS_DATA: TourPackage[] = [
  {
    id: "goa-weekend-escape",
    name: "Goa Weekend Escape",
    place: "Goa",
    duration: "3 days · 2 nights",
    days: 3,
    nights: 2,
    detail: "Sun-drenched beaches, coastal dining & relaxed colonial lanes",
    price: 7999,
    rating: "4.8",
    reviewsCount: 142,
    tag: "WEEKEND",
    travelStyle: "weekend",
    image: goaImage,
    overview:
      "A quick Friday-to-Sunday recharge designed especially for working professionals and small groups departing from Hyderabad. Experience northern beach sunsets, handpicked beachside cafes in Anjuna, quiet Portuguese villas in Fontainhas, and seamless airport or railway station transfers.",
    highlights: [
      "Curated boutique resort stay in North/Central Goa with breakfast",
      "Sunset dolphin cruise along the Mandovi estuary",
      "Heritage walking trail through colourful Fontainhas, Panaji",
      "Dedicated two-wheeler or shared private vehicle for local exploration",
      "Sunset hangout at Vagator and relaxed seaside lunch at Morjim",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa & North Coast Sunset",
        description:
          "Arrive at Goa Airport / Thivim Station from Hyderabad. Meet our representative for a comfortable transfer to your hotel. Check in and unwind. In the late afternoon, head to Vagator Beach for a golden hour cliffside view followed by dinner at a lively seaside bistro.",
        stay: "Selected 3-star boutique resort near Calangute/Candolim",
        meals: "Dinner recommended at local Goan shack",
      },
      {
        day: 2,
        title: "Fontainhas Latin Quarter & Mandovi River Cruise",
        description:
          "Enjoy a leisurely breakfast before taking an escorted walking route across Fontainhas in Panaji. Capture vibrant terracotta houses, century-old bakeries, and quaint art galleries. In the evening, embark on a sunset Mandovi river cruise with live Konkani folk music.",
        stay: "Selected boutique resort",
        meals: "Breakfast included",
      },
      {
        day: 3,
        title: "Morjim Beach Stroll, Souvenirs & Departure",
        description:
          "Start your morning with a tranquil beach walk along peaceful Morjim. Sample traditional Goan poi and tea. Pick up spices and cashews from Mapusa before your evening return flight or train to Hyderabad.",
        meals: "Breakfast included",
      },
    ],
    inclusions: [
      "2 nights accommodation in verified 3-star property",
      "Daily breakfast at the hotel",
      "Return airport / railway station transfers (Dabolim / MOPA / Thivim)",
      "1 evening sunset cruise ticket on Mandovi river",
      "Fontainhas self-guided route map & curated dining list",
      "24/7 telephonic on-trip support by Hyderabad desk",
    ],
    exclusions: [
      "Airfare / train tickets to and from Goa",
      "Water sports and extra adventure activities",
      "Personal expenses, room service, alcoholic beverages",
      "GST (5%) on final package value",
    ],
    thingsToKnow: [
      "Two-wheeler rental requires a valid original driving license.",
      "Check-in time is typically 2:00 PM; early check-in is subject to room availability.",
      "Pack light cotton clothes, comfortable sandals, sunscreen, and sunglasses.",
    ],
    faqs: [
      {
        question: "Can I add flights from Hyderabad to this package?",
        answer:
          "Yes! We can bundle direct Hyderabad-Goa flights at actual market fares with no hidden surcharge.",
      },
      {
        question: "Can we customize this for a couple or family?",
        answer:
          "Absolutely. We can switch to South Goa luxury resorts or quiet beach huts according to your preference.",
      },
    ],
  },
  {
    id: "kashmir-adventure",
    name: "Kashmir Adventure",
    place: "Kashmir",
    duration: "5 days · 4 nights",
    days: 5,
    nights: 4,
    detail: "Dal Lake houseboats, snow peaks of Gulmarg & green Pahalgam meadows",
    price: 16999,
    rating: "4.9",
    reviewsCount: 218,
    tag: "FAVOURITE",
    travelStyle: "adventure",
    image: kashmirImage,
    overview:
      "Journey into paradise on earth. Breathe in crisp pine-scented air, glide over lotus-fringed Dal Lake on a traditional Shikara, witness the snowline on the Gulmarg Gondola, and stroll along the cascading Lidder River in Pahalgam.",
    highlights: [
      "1 night authentic handcrafted Dal Lake wooden houseboat experience",
      "Shikara ride at sunset with Kahwa tea tasting",
      "Day excursion to Gulmarg with Phase-1 Gondola pass assistance",
      "Pahalgam Lidder valley visit & Aru / Betaab valley stopovers",
      "Private sanitized cab with experienced local Kashmiri driver throughout",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Srinagar & Houseboat Check-in",
        description:
          "Fly from Hyderabad to Srinagar. Receive a warm traditional welcome at Sheikh ul-Alam Airport. Check in to your heritage houseboat on Dal Lake. Relax with hot Kashmiri saffron Kahwa. In the evening, take a 1-hour sunset Shikara ride across floating markets.",
        stay: "Deluxe Wooden Houseboat on Dal Lake",
        meals: "Dinner included",
      },
      {
        day: 2,
        title: "Srinagar Mughal Gardens to Gulmarg Meadows",
        description:
          "Visit Nishat Bagh and Shalimar Bagh before driving across scenic apple orchards towards Gulmarg (8,690 ft). Check into your mountain hotel and take in panoramic views of Apharwat peak.",
        stay: "Standard Valley Hotel, Gulmarg/Tangmarg",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 3,
        title: "Gulmarg Gondola Ride & Scenic Drive to Pahalgam",
        description:
          "Board the famed Gulmarg Gondola cable car up to Kungdoor. Play in fresh snow or take photos against Himalayan backdrops. Post-lunch, embark on a picturesque journey to Pahalgam (Valley of Shepherds) through saffron fields of Pampore.",
        stay: "Riverside Resort, Pahalgam",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 4,
        title: "Pahalgam Valleys & Return to Srinagar",
        description:
          "Explore the emerald pine valleys of Betaab Valley and Chandanwari. Walk along the crystal clear Lidder river. In the afternoon, return to Srinagar hotel for walnut wood and pashmina souvenir shopping.",
        stay: "Comfort Hotel, Srinagar",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 5,
        title: "Departure from Srinagar",
        description:
          "After breakfast, bid farewell to the valley. Transfer to Srinagar airport for your journey back home to Hyderabad with lasting memories.",
        meals: "Breakfast included",
      },
    ],
    inclusions: [
      "4 nights accommodation (1N Houseboat + 1N Gulmarg + 1N Pahalgam + 1N Srinagar)",
      "Daily breakfast and dinner (MAP meal plan)",
      "Private dedicated non-AC cab throughout the trip",
      "1-hour Shikara ride on Dal Lake",
      "Toll taxes, parking fees, and driver allowances",
      "Assistance on arrival and departure at Srinagar",
    ],
    exclusions: [
      "Airfare between Hyderabad and Srinagar",
      "Gondola cable car ticket and pony rides in Gulmarg/Pahalgam",
      "Entry fees to Mughal Gardens and heritage monuments",
      "5% GST",
    ],
    thingsToKnow: [
      "Prepaid mobile SIM cards from outside J&K do not work; postpaid connections (Jio/Airtel/BSNL) work well.",
      "Gondola tickets must be booked online well in advance during peak season.",
      "Keep woollen thermal wear even in summer evenings.",
    ],
    faqs: [
      {
        question: "Is Kashmir safe for families and solo women travelers?",
        answer:
          "Yes, Kashmir is very welcoming and hospitable. Thousands of families from Hyderabad travel with us every season.",
      },
    ],
  },
  {
    id: "kerala-family-escape",
    name: "Kerala Family Escape",
    place: "Kerala",
    duration: "4 days · 3 nights",
    days: 4,
    nights: 3,
    detail: "Munnar tea mist, spice plant walks & serene Alleppey backwaters",
    price: 12999,
    rating: "4.7",
    reviewsCount: 189,
    tag: "FAMILY",
    travelStyle: "family",
    image: keralaImage,
    overview:
      "A soothing nature break tailored for families, couples, and seniors. Drift through emerald backwaters bordered by swaying palms, inhale fresh cardamom mist on Munnar hillsides, and taste genuine Kerala sadhya.",
    highlights: [
      "2 nights in Munnar nestled among rolling tea plantations",
      "1 night private Alleppey houseboat with all meals on board",
      "Cheeyappara and Valara waterfalls photo stops",
      "Guided tour through an authentic spice and Ayurvedic herb garden",
      "Kathakali and Kalaripayattu martial art performance visit option",
    ],
    itinerary: [
      {
        day: 1,
        title: "Cochin Arrival & Scenic Ascent to Munnar",
        description:
          "Arrive at Cochin International Airport from Hyderabad. Drive through misty mountain curves, stopping at Cheeyappara and Valara waterfalls. Check in to your plantation resort in Munnar.",
        stay: "Valley View Resort, Munnar",
        meals: "Dinner included",
      },
      {
        day: 2,
        title: "Munnar Tea Gardens, Mattupetty & Echo Point",
        description:
          "Explore the famous Tata Tea Museum, Mattupetty Dam, and picturesque Echo Point. Stroll through emerald tea terraces and sample local homemade chocolates.",
        stay: "Valley View Resort, Munnar",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 3,
        title: "Munnar to Alleppey Houseboat Cruise",
        description:
          "Head downhill to Alleppey backwaters. Board your private traditional kettuvallam houseboat by 12:30 PM. Enjoy traditional Kerala lunch while cruising along narrow canals, coir villages, and paddy fields.",
        stay: "Deluxe AC Houseboat, Alleppey",
        meals: "Lunch, Evening Tea & Snacks, Dinner included",
      },
      {
        day: 4,
        title: "Alleppey Sunrise & Cochin Departure",
        description:
          "Wake up to gentle bird songs on the backwaters. Savor Kerala appam and stew. Disembark at 9:00 AM and transfer back to Cochin for your Hyderabad flight.",
        meals: "Breakfast included",
      },
    ],
    inclusions: [
      "2 nights Munnar hotel stay with breakfast & dinner",
      "1 night Alleppey private houseboat stay with all meals (Lunch, Tea, Dinner, Breakfast)",
      "Private AC Sedan/SUV for all transfers and sightseeing",
      "Spice plantation walk and tea estate viewpoints",
      "Driver batta, toll taxes, and parking",
    ],
    exclusions: [
      "Hyderabad-Cochin flight / train tickets",
      "Optional boating fees in Mattupetty and cultural show tickets",
      "Personal laundry, phone calls, room service",
      "5% GST",
    ],
    thingsToKnow: [
      "Houseboat AC operates from 9:00 PM to 6:00 AM in standard deluxe houseboats.",
      "Munnar climate is cool year-round; light jackets or shawls are recommended.",
    ],
    faqs: [
      {
        question: "Can meals on the houseboat be vegetarian / Jain?",
        answer:
          "Yes! The on-board chef prepares freshly cooked, hot meals tailored to your dietary preferences (pure veg / Jain / non-veg).",
      },
    ],
  },
  {
    id: "rajasthan-heritage",
    name: "Rajasthan Heritage",
    place: "Rajasthan",
    duration: "4 days · 3 nights",
    days: 4,
    nights: 3,
    detail: "Royal Jaipur palaces, Amer fort grandeur & vibrant bazaar trails",
    price: 14999,
    rating: "4.6",
    reviewsCount: 165,
    tag: "CULTURE",
    travelStyle: "group",
    image: rajasthanImage,
    overview:
      "Step back into an era of chivalry, vibrant pink sandstone, and opulent royal courtyards. Experience Jaipur's UNESCO heritage fortresses, Jantar Mantar, Hawa Mahal, and hearty Rajasthani Dal Baati Churma.",
    highlights: [
      "Detailed heritage walk of Amer Fort, Jaigarh & Nahargarh hilltops",
      "Photo stop at Hawa Mahal & Jal Mahal water palace",
      "Guided walk through City Palace courtyards and Jantar Mantar observatory",
      "Authentic Chokhi Dhani village evening with folk dances & traditional dinner",
      "Bapu Bazaar & Johari Bazaar shopping for block prints and blue pottery",
    ],
    itinerary: [
      {
        day: 1,
        title: "Jaipur Arrival & Pink City Bazaars",
        description:
          "Arrive at Jaipur Airport/Station from Hyderabad. Transfer to your heritage-style hotel. In the afternoon, visit Albert Hall Museum and wander through colourful Johari Bazaar for lac bangles and gems.",
        stay: "Heritage-styled hotel, Jaipur",
        meals: "Dinner included",
      },
      {
        day: 2,
        title: "Amer Fort, Jal Mahal & Royal Palaces",
        description:
          "Visit the monumental Amer Fort with its mirrored Sheesh Mahal. Pause at Jal Mahal in the middle of Man Sagar Lake. Tour City Palace and Maharaja Sawai Jai Singh's astronomical observatory Jantar Mantar.",
        stay: "Heritage-styled hotel, Jaipur",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 3,
        title: "Nahargarh Sunset & Cultural Evening",
        description:
          "Catch a panoramic golden hour view of Jaipur from Nahargarh Fort ramparts. Spend the evening immersed in traditional puppet shows, camel rides, and folk songs at a curated Rajasthani village dinner.",
        stay: "Heritage-styled hotel, Jaipur",
        meals: "Breakfast & Village Dinner included",
      },
      {
        day: 4,
        title: "Local Crafts, Fort Museum & Departure",
        description:
          "Morning visit to Sanganer block print artisans. Pick up souvenirs before transfer to Jaipur Airport for your direct Hyderabad flight.",
        meals: "Breakfast included",
      },
    ],
    inclusions: [
      "3 nights accommodation in heritage category 3/4-star property",
      "Daily breakfast at the hotel",
      "1 traditional cultural evening with gala dinner",
      "Private AC vehicle for all transfers and city sightseeing",
      "Experienced local driver with heritage route knowledge",
    ],
    exclusions: [
      "Flight tickets to/from Jaipur",
      "Monument entry tickets and camera fees",
      "Elephant or jeep rides at Amer Fort",
      "5% GST",
    ],
    thingsToKnow: [
      "Wear comfortable walking shoes with grip for fort cobblestone walkways.",
      "Respect photography guidelines inside museum galleries.",
    ],
    faqs: [
      {
        question: "Can we extend this trip to include Udaipur or Jodhpur?",
        answer:
          "Yes! We offer a 6-day Golden Triangle extension or 7-day Royal Rajasthan tour covering Udaipur and Jodhpur.",
      },
    ],
  },
  {
    id: "himachal-manali-snow-trail",
    name: "Himachal Manali Snow Trail",
    place: "Himachal Pradesh",
    duration: "5 days · 4 nights",
    days: 5,
    nights: 4,
    detail: "Snow valleys of Solang, pine trails of Old Manali & Atal Tunnel marvel",
    price: 15499,
    rating: "4.8",
    reviewsCount: 110,
    tag: "POPULAR",
    travelStyle: "adventure",
    image: himachalImage,
    overview:
      "A scenic mountain getaway to Himachal Pradesh. Experience pine-scented mountain air, rushing Beas River rapids, snowy high-altitude vistas through Atal Tunnel into Sissu, and the bohemian cafe culture of Old Manali.",
    highlights: [
      "Scenic transfer through Kullu valley with river rafting photo opportunity",
      "Day excursion to Solang Valley and Sissu through the engineering wonder Atal Tunnel",
      "Visit Hadimba Temple and Jogini Waterfall forest trek",
      "Riverside bonfire night with music under starry mountain skies",
      "Shopping for pure Kullu shawls and Himachal apple preserves on Mall Road",
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh Arrival & Drive to Manali",
        description:
          "Land in Chandigarh from Hyderabad and drive up through the foothills of the Himalayas. Watch the landscape transform as pine groves replace city plains.",
        stay: "Riverside Resort, Manali",
        meals: "Dinner included",
      },
      {
        day: 2,
        title: "Local Manali Sightseeing & Jogini Falls Trek",
        description:
          "Explore Hadimba Temple, Vashisht hot springs, and take an easy morning walk through cedar forests to scenic Jogini Waterfalls. Afternoon free to explore Old Manali cafes.",
        stay: "Riverside Resort, Manali",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 3,
        title: "Solang Valley, Atal Tunnel & Sissu Waterfalls",
        description:
          "Cross the world-famous Atal Tunnel at 10,000+ feet into Lahaul valley. Visit Sissu waterfall and return to Solang Valley for optional snow activities and zip lining.",
        stay: "Riverside Resort, Manali",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 4,
        title: "Naggar Castle Heritage & Kullu Valley",
        description:
          "Visit the historic wooden Naggar Castle and Nicholas Roerich Art Gallery. Stop in Kullu for shawl weaving demonstrations and river valley strolls.",
        stay: "Riverside Resort, Manali",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 5,
        title: "Departure to Chandigarh & Return to Hyderabad",
        description: "Drive down to Chandigarh Airport for your evening flight home to Hyderabad.",
        meals: "Breakfast included",
      },
    ],
    inclusions: [
      "4 nights hotel stay in Manali with mountain view rooms",
      "Daily breakfast and dinner",
      "Private AC transport from Chandigarh with hill-licensed driver",
      "Solang & Atal Tunnel excursion passes",
      "Toll, state border taxes, and driver parking",
    ],
    exclusions: [
      "Flight tickets (HYD-IXC-HYD)",
      "Adventure gear rentals, paragliding, skiing charges",
      "Rohtang Pass permit fees (if opted separately)",
      "5% GST",
    ],
    thingsToKnow: [
      "Weather can change quickly in the mountains; carry layered woollens.",
      "Road travel between Chandigarh and Manali is approximately 7-8 hours.",
    ],
    faqs: [
      {
        question: "Can we get direct flights to Kullu/Bhuntar from Hyderabad?",
        answer:
          "Yes, seasonal flights connect via Delhi to Bhuntar, though Chandigarh routing is generally the most budget-friendly option.",
      },
    ],
  },
  {
    id: "ladakh-monasteries-high-passes",
    name: "Ladakh Monasteries & High Passes",
    place: "Ladakh",
    duration: "6 days · 5 nights",
    days: 6,
    nights: 5,
    detail: "Shades of blue at Pangong Lake, Nubra dunes & highest motorable passes",
    price: 24999,
    rating: "4.9",
    reviewsCount: 94,
    tag: "BUCKET LIST",
    travelStyle: "adventure",
    image: ladakhImage,
    overview:
      "A life-changing expedition to the crown of India. Cross Khardung La, ride double-humped camels on the cold desert sand dunes of Hunder, gaze at changing turquoise waters of Pangong Tso, and experience Tibetan Buddhist monastic chanting.",
    highlights: [
      "Acclimatization day in Leh with Shanti Stupa sunset",
      "Drive across Khardung La pass (17,982 ft)",
      "Stay in luxury desert camps in Nubra Valley",
      "Overnight stay near magical Pangong Lake",
      "Visit Thiksey and Hemis monasteries with local guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh & Essential Acclimatization",
        description:
          "Fly from Hyderabad to Leh (11,500 ft). Transfer to hotel. Rest completely for the first 24 hours to acclimatize to high altitude. Evening gentle stroll around Leh Market.",
        stay: "Standard Leh Hotel",
        meals: "Dinner included",
      },
      {
        day: 2,
        title: "Hall of Fame, Magnetic Hill & Sangam Confluence",
        description:
          "Witness the mysterious Magnetic Hill and the stunning confluence of the Indus and Zanskar rivers. Visit Gurudwara Pathar Sahib and Spituk Gompa.",
        stay: "Standard Leh Hotel",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 3,
        title: "Leh to Nubra Valley via Khardung La",
        description:
          "Drive over Khardung La pass. Descend into Nubra Valley. Ride Bactrian double-humped camels on the white dunes of Hunder.",
        stay: "Deluxe Swiss Tent, Nubra Valley",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 4,
        title: "Nubra Valley to Pangong Lake via Shyok",
        description:
          "Follow the dramatic Shyok river canyon route to Pangong Lake. Witness the changing color palette of the lake as the sun sets.",
        stay: "Pangong Lake Eco Cottage / Camp",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 5,
        title: "Pangong Sunrise & Return to Leh via Chang La",
        description:
          "Witness the sunrise over Pangong. Drive back to Leh crossing Chang La (17,590 ft). Visit Thiksey Monastery on the way back.",
        stay: "Standard Leh Hotel",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 6,
        title: "Leh Departure",
        description:
          "Transfer to Kushok Bakula Rimpochee Airport for your flight back to Hyderabad.",
        meals: "Breakfast included",
      },
    ],
    inclusions: [
      "5 nights stay (3N Leh + 1N Nubra + 1N Pangong)",
      "Daily breakfast and dinner",
      "Inner Line Permits and Wildlife environmental fees",
      "Dedicated high-ground clearance SUV (Innova / Xylo / tempo)",
      "Oxygen cylinder in vehicle for high-altitude emergency safety",
    ],
    exclusions: [
      "Airfare between Hyderabad and Leh",
      "Camel ride and monument entry fees",
      "Personal travel insurance",
      "5% GST",
    ],
    thingsToKnow: [
      "Acclimatization is mandatory; drinking plenty of water and avoiding exertion on Day 1 is vital.",
      "Carry valid photo ID for army checkposts along the borders.",
    ],
    faqs: [
      {
        question: "What is the best time to visit Ladakh?",
        answer:
          "May to September provides clear roads, open passes, and pleasant daytime temperatures.",
      },
    ],
  },
  {
    id: "andaman-island-escape",
    name: "Andaman Blue Lagoon",
    place: "Andaman & Nicobar",
    duration: "5 days · 4 nights",
    days: 5,
    nights: 4,
    detail: "Radhanagar beach sands, Havelock coral reefs & Cellular Jail history",
    price: 19999,
    rating: "4.9",
    reviewsCount: 88,
    tag: "ISLAND",
    travelStyle: "family",
    image: andamanImage,
    overview:
      "A tropical island escape amidst crystal turquoise waters of the Bay of Bengal. Walk along Asia's cleanest beach at Radhanagar, snorkel through vibrant coral gardens at Elephant Beach, and discover India's freedom struggle history at Cellular Jail.",
    highlights: [
      "Cellular Jail light and sound show in Port Blair",
      "High-speed luxury catamaran cruise (Makruzz/Nautika) to Havelock Island",
      "Sunset at Radhanagar Beach (Beach No. 7)",
      "Snorkeling and water activities at Elephant Beach",
      "Neil Island natural coral bridge visit option",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair & Cellular Jail",
        description:
          "Arrive at Veer Savarkar International Airport from Hyderabad. Check in to your hotel. Visit the historic Cellular Jail and witness the patriotic Light & Sound show.",
        stay: "Standard Port Blair Hotel",
        meals: "Dinner included",
      },
      {
        day: 2,
        title: "Catamaran Cruise to Havelock Island",
        description:
          "Board a luxury catamaran cruise to Havelock Island. Check in to your beach resort. Spend a magical afternoon at Radhanagar Beach, rated among the finest in Asia.",
        stay: "Beachside Resort, Havelock Island",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 3,
        title: "Elephant Beach Coral Reefs & Water Sports",
        description:
          "Take a speed boat to Elephant Beach. Complimentary introductory snorkeling session to view corals and colourful reef fish. Relax under tropical palm shade.",
        stay: "Beachside Resort, Havelock Island",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 4,
        title: "Return to Port Blair & Local Souvenirs",
        description:
          "Cruise back to Port Blair. Visit Sagarika Emporium for genuine seashell handicrafts, pearl jewellery, and coconut shell crafts.",
        stay: "Standard Port Blair Hotel",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 5,
        title: "Port Blair Departure to Hyderabad",
        description:
          "Transfer to airport for your flight back to Hyderabad carrying memories of sun, sea, and sand.",
        meals: "Breakfast included",
      },
    ],
    inclusions: [
      "4 nights accommodation in 3-star quality resorts",
      "Daily breakfast and dinner",
      "Inter-island transfers via premium private AC catamaran",
      "All port transfers and airport pickup/drop in private AC cab",
      "Complimentary snorkeling experience at Elephant Beach",
    ],
    exclusions: [
      "Hyderabad-Port Blair airfare",
      "Scuba diving and sea karting activities (optional additions)",
      "Personal expenses and camera tickets",
      "5% GST",
    ],
    thingsToKnow: [
      "Ferry timings depend on sea weather conditions.",
      "Carry sunscreen, swimwear, hat, and waterproof phone pouches.",
    ],
    faqs: [
      {
        question: "Do Indian citizens need a passport or permit for Andaman?",
        answer:
          "No passport or permit is required for Indian citizens visiting standard Andaman tourist islands.",
      },
    ],
  },
  {
    id: "rishikesh-river-foothills",
    name: "Rishikesh River & Soul",
    place: "Uttarakhand",
    duration: "4 days · 3 nights",
    days: 4,
    nights: 3,
    detail: "Ganga Aarti spirituality, river rafting & peaceful mountain ashrams",
    price: 10499,
    rating: "4.7",
    reviewsCount: 76,
    tag: "WEEKEND",
    travelStyle: "weekend",
    image: uttarakhandImage,
    overview:
      "Recharge your spirit in the yoga capital of the world. Experience evening Ganga Aarti at Parmarth Niketan, navigate the thrilling rapids of the holy Ganges, walk across iconic suspension bridges, and relax at serene Himalayan foothills cafes.",
    highlights: [
      "Mesmerizing sunset Ganga Aarti with Vedic chanting",
      "16 km thrilling white-water river rafting from Shivpuri to Rishikesh",
      "Walk across Ram Jhula and Lakshman Jhula area",
      "Beatles Ashram (Chaurasi Kutia) guided visit",
      "Riverside camping or boutique mountain lodge stay",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dehradun Arrival & Rishikesh Ganga Aarti",
        description:
          "Land at Jolly Grant Airport (Dehradun) from Hyderabad. Short 40-minute drive to Rishikesh. Check in and witness the sublime evening Aarti at Triveni Ghat.",
        stay: "Riverside Lodge, Rishikesh",
        meals: "Dinner included",
      },
      {
        day: 2,
        title: "White Water Rafting & Cliff Jumping",
        description:
          "Morning briefing by certified river guides. Embark on the exhilarating 16 km rafting expedition through rapids like Roller Coaster and Golf Course. Optional body surfing and cliff jump.",
        stay: "Riverside Lodge, Rishikesh",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 3,
        title: "Beatles Ashram, Neer Garh Waterfall & Cafes",
        description:
          "Visit the tranquil Beatles Ashram to view graffiti art and meditation domes. Take a short hike to Neer Garh waterfall and spend the afternoon at vibrant organic cafes.",
        stay: "Riverside Lodge, Rishikesh",
        meals: "Breakfast & Dinner included",
      },
      {
        day: 4,
        title: "Morning Yoga & Departure",
        description:
          "Optional sunrise meditation session. After breakfast, transfer to Dehradun Airport for your return flight to Hyderabad.",
        meals: "Breakfast included",
      },
    ],
    inclusions: [
      "3 nights stay in riverside boutique accommodation",
      "Daily breakfast and dinner",
      "16 km river rafting session with life jackets and safety gear",
      "All transfers from Dehradun airport in private cab",
      "Guided local temple and ashram walking tour",
    ],
    exclusions: [
      "Airfare between Hyderabad and Dehradun",
      "Beatles Ashram monument ticket",
      "Bungee jumping or giant swing tickets (at Mohan Chatti)",
      "5% GST",
    ],
    thingsToKnow: [
      "Rafting is permitted for individuals aged 14 to 60 with basic physical fitness.",
      "Rishikesh is a strictly vegetarian and non-alcoholic holy city.",
    ],
    faqs: [
      {
        question: "Can beginners participate in river rafting?",
        answer:
          "Yes, professional rescue kayakers and certified guides escort every boat with strict safety gear.",
      },
    ],
  },
];
