import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/mana-hero.jpg";
import kashmirImage from "@/assets/trip-kashmir.jpg";
import keralaImage from "@/assets/trip-kerala.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mana Trips | Hyderabad's Budget-Friendly Travel Specialists" },
      {
        name: "description",
        content:
          "Learn about Mana Trips: our story, our budget-friendly travel philosophy, and why travelers from Hyderabad trust us for weekend getaways, family tours, and group adventures.",
      },
      { property: "og:title", content: "About Mana Trips — Travel More for Less" },
      {
        property: "og:description",
        content:
          "Rooted in Hyderabad, Mana Trips crafts honest, budget-friendly adventures across India without compromising comfort.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
          <div className="absolute inset-0 z-0 opacity-30">
            <img
              src={heroImage}
              alt="Himalayan mountain landscape"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="font-hand text-2xl text-orange-400">Our Story & Philosophy</span>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                Making memorable travel honest & accessible.
              </h1>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                Mana Trips was founded in Hyderabad with a simple conviction: you shouldn&apos;t
                have to burn through your savings or decipher hidden surge fees just to experience
                the incredible beauty of India.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="rounded-lg bg-orange-600 px-6 py-2.5 font-bold text-white shadow-sm hover:bg-orange-700"
                >
                  Plan Your Trip <ArrowRight className="ml-1.5 size-4" />
                </Button>
                <Link
                  to="/tours"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-xs hover:bg-slate-800"
                >
                  Explore Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Mana Trips Exists */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Why Mana Trips Exists
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                  Born in Hyderabad. Designed for real travelers.
                </h2>
                <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    Living in Hyderabad, we observed thousands of friends, colleagues, and families
                    facing the same dilemma: generic online travel portals charging exorbitant
                    commissions for mediocre hotels, or chaotic budget operators offering zero
                    accountability.
                  </p>
                  <p>
                    &ldquo;Mana&rdquo; in Telugu means <em>ours</em>. Mana Trips was built to be our
                    city&apos;s own friendly travel companion — an honest team that tests hotel
                    beds, verifies drivers, curates realistic itineraries, and answers phone calls
                    whenever you need help on the road.
                  </p>
                  <p>
                    From quick weekend escapes to Goa to multi-day family journeys in Kerala and
                    high-altitude Ladakh circuits, we negotiate direct rates with verified local
                    partners to bring premium travel within a sensible budget.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-card p-4">
                    <span className="text-2xl font-black text-orange-600">100%</span>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      Verified stays & direct local partner tie-ups
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <span className="text-2xl font-black text-orange-600">Zero</span>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      Hidden markups or last-minute surprise charges
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={kashmirImage}
                    alt="Travelers taking in scenic Kashmir mountain views"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 max-w-[260px] rounded-xl border border-border bg-card p-4 shadow-lg sm:p-5 hidden sm:block">
                  <div className="flex items-center gap-2 text-orange-600">
                    <MapPin size={18} />
                    <span className="text-xs font-bold uppercase tracking-wider">Hyderabad HQ</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Available for in-person consultations & WhatsApp trip planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our 4 Core Pillars */}
        <section className="bg-muted/40 py-16 sm:py-20 border-y border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                What We Specialize In
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Four Pillars of the Mana Trips Experience
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Tailored trip styles designed around how modern Indians actually love to travel.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex size-11 items-center justify-center rounded-lg bg-orange-100 text-orange-600 mb-4">
                    <Compass size={22} />
                  </div>
                  <h3 className="text-lg font-bold">Weekend Getaways</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Friday-to-Sunday escapes timed around direct Hyderabad flights and trains.
                    Return recharged for Monday morning.
                  </p>
                </div>
                <Link
                  to="/weekend-getaways"
                  className="mt-4 text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
                >
                  View Weekend Trips <ArrowRight size={12} />
                </Link>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex size-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 mb-4">
                    <Users size={22} />
                  </div>
                  <h3 className="text-lg font-bold">Family Vacations</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Paced travel with minimal road fatigue, clean dining, and comfortable
                    accommodations suitable for toddlers and grandparents.
                  </p>
                </div>
                <Link
                  to="/family-trips"
                  className="mt-4 text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
                >
                  View Family Tours <ArrowRight size={12} />
                </Link>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex size-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                    <HeartHandshake size={22} />
                  </div>
                  <h3 className="text-lg font-bold">Group Adventures</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    College reunions, corporate offsites, and friend squads. Enjoy wholesale group
                    discounts and shared transit savings.
                  </p>
                </div>
                <Link
                  to="/group-trips"
                  className="mt-4 text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
                >
                  View Group Trips <ArrowRight size={12} />
                </Link>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex size-11 items-center justify-center rounded-lg bg-purple-100 text-purple-600 mb-4">
                    <Sparkles size={22} />
                  </div>
                  <h3 className="text-lg font-bold">Customized Tours</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Your dates, your dream destinations, and your budget. Handcrafted itineraries
                    built with our Hyderabad team.
                  </p>
                </div>
                <Link
                  to="/customized-tours"
                  className="mt-4 text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
                >
                  Explore Customization <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Travelers Trust Us */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="aspect-4/3 overflow-hidden rounded-2xl shadow-xl order-2 lg:order-1">
                <img
                  src={keralaImage}
                  alt="Scenic Kerala backwaters and palms"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Our Service Promise
                </span>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Why travelers from Hyderabad choose Mana Trips
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We don&apos;t just sell itineraries — we manage the ground experience so you can
                  genuinely unwind.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Budget-First Transparency",
                      desc: "All inclusions, exclusions, and vehicle allowances are stated clearly in plain English before booking.",
                    },
                    {
                      title: "Direct Hyderabad Support",
                      desc: "You have a dedicated Hyderabad coordinator on call before and during your journey.",
                    },
                    {
                      title: "Handpicked, Verified Hotels",
                      desc: "We prioritize properties with high hygiene ratings, central locations, and delicious morning breakfasts.",
                    },
                    {
                      title: "Reliable Local Chauffeurs",
                      desc: "Our partnered drivers know the local roads, safety protocols, and best viewpoint stops.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-orange-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                  <Button
                    onClick={() => setBookingOpen(true)}
                    className="rounded-lg bg-orange-600 px-6 font-bold text-white hover:bg-orange-700"
                  >
                    Plan Your Trip
                  </Button>
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-foreground hover:text-orange-600"
                  >
                    Talk to our Hyderabad team →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialTrip="Custom Trip from Hyderabad"
      />
    </div>
  );
}
