import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { HelpCircle, MessageSquare, Phone, Search } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Mana Trips Hyderabad" },
      {
        name: "description",
        content:
          "Find answers to common questions about booking, payments, cancellations, flights from Hyderabad, and customized itineraries with Mana Trips.",
      },
      { property: "og:title", content: "FAQs — Mana Trips" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [search, setSearch] = useState("");
  const [bookingOpen, setBookingOpen] = useState(false);

  const faqCategories = [
    {
      category: "Booking & Payments",
      items: [
        {
          q: "How do I book a tour package with Mana Trips?",
          a: "You can book by clicking 'Plan Your Trip' or 'Book Now' on any tour page. Fill in your preferred travel dates and traveler count. Our Hyderabad travel team will verify hotel availability, draft your customized itinerary, and share payment details for confirmation.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all standard Indian payment methods: UPI (Google Pay, PhonePe, Paytm), net banking (NEFT/IMPS), and major credit/debit cards. A partial deposit (typically 30–50%) confirms your booking, with the remaining balance due prior to departure or on arrival depending on the package.",
        },
        {
          q: "Are flights included in the package prices?",
          a: "The base starting prices listed on the site include land arrangements (hotel stays, daily breakfast, private sightseeing cab, and transfers). We can add direct flights departing from Rajiv Gandhi International Airport (HYD) at current airline fares upon request.",
        },
      ],
    },
    {
      category: "On-Trip Experience & Stays",
      items: [
        {
          q: "What types of hotels and accommodations are provided?",
          a: "We handpick verified 3-star boutique hotels, heritage homestays, and quality resorts. We prioritize clean washrooms, central locations, strong safety ratings, and good morning breakfasts. Upgrades to 4-star or luxury resorts are available on request.",
        },
        {
          q: "Is transportation private or shared?",
          a: "Most of our packages include private AC vehicles (Sedan for 2–3 guests, Innova/Ertiga for 4–6 guests, or Tempo Traveller for groups) reserved exclusively for your party throughout the sightseeing itinerary.",
        },
        {
          q: "Can you accommodate dietary needs like Pure Veg or Jain food?",
          a: "Yes! When planning your trip, inform us of your dietary requirements. We select hotels with vegetarian kitchens and arrange meals tailored to pure veg and Jain preferences.",
        },
      ],
    },
    {
      category: "Modifications & Support",
      items: [
        {
          q: "Can I customize the day-to-day itinerary?",
          a: "Absolutely! All our packages can be extended, shortened, or customized. If you want to add an extra day in Munnar or swap an activity in Goa, our Hyderabad desk will modify the route for you.",
        },
        {
          q: "What happens if our flight is delayed or rescheduled?",
          a: "Our ground coordinators monitor your flight status from Hyderabad. If delays happen, we adjust your airport pickup time so your driver is waiting when you land.",
        },
        {
          q: "Who do I contact if I need help during my journey?",
          a: "You will be provided a dedicated Hyderabad on-trip manager's direct WhatsApp and phone number before departure, along with your driver's contact details.",
        },
      ],
    },
  ];

  const filteredCategories = faqCategories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          !search.trim() ||
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => setBookingOpen(true)} />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Clear Answers</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Everything you need to know about booking, package inclusions, customized itineraries,
              and travel support with Mana Trips.
            </p>

            <div className="mt-6 max-w-md relative">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions (e.g., flights, veg food, booking)…"
                className="pl-10 h-11 bg-slate-900 border-slate-700 text-white placeholder:text-slate-400 text-xs sm:text-sm"
              />
            </div>
          </div>
        </section>

        {/* FAQ Accordions */}
        <section className="py-12">
          <div className="mx-auto max-w-[880px] px-4 sm:px-6 space-y-10">
            {filteredCategories.length === 0 ? (
              <div className="py-12 text-center rounded-xl border border-dashed border-border p-6">
                <HelpCircle size={32} className="mx-auto text-muted-foreground opacity-60" />
                <h3 className="mt-3 text-base font-bold">
                  No results found for &ldquo;{search}&rdquo;
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Have a question not listed here? Our Hyderabad team is just a call or message
                  away.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center rounded-lg bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
                >
                  Contact Hyderabad Desk
                </Link>
              </div>
            ) : (
              filteredCategories.map((cat, idx) => (
                <div key={idx}>
                  <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="size-2 rounded-full bg-orange-600" />
                    {cat.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {cat.items.map((item, qidx) => (
                      <AccordionItem
                        key={qidx}
                        value={`item-${idx}-${qidx}`}
                        className="rounded-xl border border-border bg-card px-4 shadow-2xs"
                      >
                        <AccordionTrigger className="text-left text-xs sm:text-sm font-semibold hover:no-underline py-3.5">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-xs sm:text-sm leading-relaxed text-muted-foreground pb-4">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            )}

            {/* Still have questions card */}
            <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8 text-center">
              <h3 className="text-lg font-bold text-foreground">Still have questions?</h3>
              <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto">
                Speak directly with our Hyderabad trip planners. We are here to answer specific
                queries about your travel dates and group preferences.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+919000000000"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
                >
                  <Phone size={14} /> Call +91 90000 00000
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:bg-accent"
                >
                  <MessageSquare size={14} /> Send a Message
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialTrip="Custom Trip Inquiry"
      />
    </div>
  );
}
