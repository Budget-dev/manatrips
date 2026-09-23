import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, MapPin, Sparkles, Star, Clock, ArrowRight, BookOpen } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import { TOURS_DATA } from "@/data/tours";
import { DESTINATIONS_DATA } from "@/data/destinations";
import { TRAVEL_GUIDES_DATA } from "@/data/guides";
import heroImage from "@/assets/mana-hero.jpg";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover Incredible Journeys — Mana Trips" },
      {
        name: "description",
        content:
          "Discover budget-friendly travel experiences from Hyderabad. Explore trending destinations, weekend blueprints, and mountain tours across India.",
      },
      { property: "og:title", content: "Discover India with Mana Trips" },
    ],
  }),
  component: DiscoverPage,
});

function DiscoverPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => setBookingOpen(true)} />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 text-white border-b border-border">
          <div className="absolute inset-0 z-0 opacity-35">
            <img src={heroImage} alt="Discover India" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="font-hand text-2xl text-orange-400">Discover More of India</span>
              <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
                Find Your Next Great Adventure
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-300">
                Departing from Hyderabad has never been easier. Explore handpicked holiday circuits,
                verified stays, and honest budget packages.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/tours"
                  className="rounded-lg bg-orange-600 px-6 py-2.5 font-bold text-white hover:bg-orange-700 transition-colors"
                >
                  Browse Tours
                </Link>
                <Link
                  to="/destinations"
                  className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  Browse Destinations
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Featured Tours */}
        <section className="py-12">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Curated Packages
                </span>
                <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl text-foreground">
                  Trending Tours
                </h2>
              </div>
              <Link to="/tours" className="text-xs font-bold text-orange-600 hover:underline">
                View all tours →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TOURS_DATA.slice(0, 4).map((tour) => (
                <div
                  key={tour.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-16/10 overflow-hidden bg-muted">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5 rounded-md bg-slate-950/80 px-2 py-0.5 text-[10px] font-bold text-white">
                        {tour.tag}
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                        <span className="font-semibold text-orange-600">{tour.place}</span>
                        <span>·</span>
                        <span>{tour.duration}</span>
                      </div>
                      <h3 className="text-sm font-bold text-foreground group-hover:text-orange-600 transition-colors line-clamp-1">
                        <Link to="/tours/$tourId" params={{ tourId: tour.id }}>
                          {tour.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {tour.detail}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 border-t border-border mt-2 flex items-center justify-between">
                    <span className="text-sm font-extrabold text-foreground">
                      ₹{tour.price.toLocaleString("en-IN")}
                    </span>
                    <Link
                      to="/tours/$tourId"
                      params={{ tourId: tour.id }}
                      className="text-xs font-bold text-orange-600 hover:underline"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Top Destinations */}
        <section className="py-12 bg-muted/40 border-y border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Where to Next?
                </span>
                <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl text-foreground">
                  Popular Destinations
                </h2>
              </div>
              <Link
                to="/destinations"
                className="text-xs font-bold text-orange-600 hover:underline"
              >
                All destinations →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DESTINATIONS_DATA.slice(0, 6).map((dest) => (
                <Link
                  key={dest.id}
                  to="/destinations/$destinationId"
                  params={{ destinationId: dest.id }}
                  className="group relative aspect-16/10 overflow-hidden rounded-xl bg-slate-950 shadow-xs"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-80"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                      {dest.state}
                    </span>
                    <h3 className="text-lg font-bold group-hover:text-orange-400 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1">{dest.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Field Guides */}
        <section className="py-12">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Practical Advice
                </span>
                <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl text-foreground">
                  Latest Travel Guides
                </h2>
              </div>
              <Link
                to="/travel-guides"
                className="text-xs font-bold text-orange-600 hover:underline"
              >
                View all guides →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {TRAVEL_GUIDES_DATA.slice(0, 3).map((guide) => (
                <div
                  key={guide.id}
                  className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-xs transition-all hover:border-orange-500"
                >
                  <div>
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                      {guide.category}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-foreground group-hover:text-orange-600 transition-colors">
                      <Link to="/travel-guides/$guideId" params={{ guideId: guide.id }}>
                        {guide.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground line-clamp-3">
                      {guide.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span>{guide.readTime}</span>
                    <Link
                      to="/travel-guides/$guideId"
                      params={{ guideId: guide.id }}
                      className="font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
                    >
                      Read Guide <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialTrip="Customized Journey"
      />
    </div>
  );
}
