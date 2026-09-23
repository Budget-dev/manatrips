import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  Filter,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TOURS_DATA } from "@/data/tours";

export const Route = createFileRoute("/tours/")({
  head: () => ({
    meta: [
      { title: "All Tour Packages — Mana Trips | Hyderabad Departures" },
      {
        name: "description",
        content:
          "Browse budget-friendly tour packages from Hyderabad. Explore curated itineraries for Goa, Kashmir, Kerala, Rajasthan, Himachal, Ladakh, Andaman, and Uttarakhand.",
      },
      { property: "og:title", content: "Curated Tours & Adventures — Mana Trips" },
      {
        property: "og:description",
        content:
          "Find your dream holiday. Transparent pricing, verified hotels, and seamless transfers departing from Hyderabad.",
      },
    ],
  }),
  component: ToursIndexPage,
});

function ToursIndexPage() {
  const [search, setSearch] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("all");
  const [selectedStyle, setSelectedStyle] = useState("all");
  const [maxPrice, setMaxPrice] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTourForBooking, setSelectedTourForBooking] = useState("Custom Trip");

  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter((tour) => {
      // Search text
      if (search.trim()) {
        const q = search.toLowerCase();
        const matches =
          tour.name.toLowerCase().includes(q) ||
          tour.place.toLowerCase().includes(q) ||
          tour.detail.toLowerCase().includes(q);
        if (!matches) return false;
      }

      // Destination
      if (selectedDestination !== "all") {
        if (!tour.place.toLowerCase().includes(selectedDestination.toLowerCase())) {
          return false;
        }
      }

      // Travel Style
      if (selectedStyle !== "all" && tour.travelStyle !== selectedStyle) {
        return false;
      }

      // Max price
      if (maxPrice !== "all") {
        const ceiling = parseInt(maxPrice, 10);
        if (tour.price > ceiling) return false;
      }

      // Duration
      if (selectedDuration !== "all") {
        const d = parseInt(selectedDuration, 10);
        if (d === 3 && tour.days > 3) return false;
        if (d === 4 && tour.days !== 4) return false;
        if (d === 5 && tour.days < 5) return false;
      }

      return true;
    });
  }, [search, selectedDestination, selectedStyle, maxPrice, selectedDuration]);

  const handleBookNow = (tourName: string) => {
    setSelectedTourForBooking(tourName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => handleBookNow("Custom Tour")} />

      <main className="flex-1 pb-16">
        {/* Page Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Curated Escapes</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Tours & Holiday Packages
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Thoughtfully organized, budget-friendly journeys starting from Hyderabad. Every tour
              includes verified hotels, dedicated transit, and zero hidden markups.
            </p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="sticky top-[68px] z-30 border-b border-border bg-card/95 py-4 backdrop-blur-md">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {/* Search */}
              <div className="relative">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search destinations, tours…"
                  className="pl-9 h-10 text-xs"
                />
              </div>

              {/* Destination */}
              <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                <SelectTrigger className="h-10 text-xs">
                  <SelectValue placeholder="All Destinations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Destinations</SelectItem>
                  <SelectItem value="goa">Goa</SelectItem>
                  <SelectItem value="kashmir">Kashmir</SelectItem>
                  <SelectItem value="kerala">Kerala</SelectItem>
                  <SelectItem value="rajasthan">Rajasthan</SelectItem>
                  <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                  <SelectItem value="ladakh">Ladakh</SelectItem>
                  <SelectItem value="andaman">Andaman</SelectItem>
                  <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                </SelectContent>
              </Select>

              {/* Travel Style */}
              <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                <SelectTrigger className="h-10 text-xs">
                  <SelectValue placeholder="All Travel Styles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Travel Styles</SelectItem>
                  <SelectItem value="weekend">Weekend Getaway</SelectItem>
                  <SelectItem value="family">Family Journey</SelectItem>
                  <SelectItem value="group">Group / Heritage</SelectItem>
                  <SelectItem value="adventure">Adventure & Mountains</SelectItem>
                </SelectContent>
              </Select>

              {/* Price Filter */}
              <Select value={maxPrice} onValueChange={setMaxPrice}>
                <SelectTrigger className="h-10 text-xs">
                  <SelectValue placeholder="Max Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Price</SelectItem>
                  <SelectItem value="10000">Under ₹10,000</SelectItem>
                  <SelectItem value="15000">Under ₹15,000</SelectItem>
                  <SelectItem value="20000">Under ₹20,000</SelectItem>
                </SelectContent>
              </Select>

              {/* Duration Filter */}
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="h-10 text-xs">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Duration</SelectItem>
                  <SelectItem value="3">Quick Break (2–3 Days)</SelectItem>
                  <SelectItem value="4">Standard (4 Days)</SelectItem>
                  <SelectItem value="5">Extended (5+ Days)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters Summary */}
            {(search ||
              selectedDestination !== "all" ||
              selectedStyle !== "all" ||
              maxPrice !== "all" ||
              selectedDuration !== "all") && (
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                <span>
                  Showing {filteredTours.length} of {TOURS_DATA.length} packages
                </span>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedDestination("all");
                    setSelectedStyle("all");
                    setMaxPrice("all");
                    setSelectedDuration("all");
                  }}
                  className="font-medium text-orange-600 hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Tour Cards Grid */}
        <section className="py-10">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            {filteredTours.length === 0 ? (
              <div className="py-20 text-center rounded-xl border border-dashed border-border bg-card p-8">
                <SlidersHorizontal size={36} className="mx-auto text-muted-foreground opacity-50" />
                <h3 className="mt-3 text-lg font-bold">No packages match your filters</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Try clearing some filter criteria, or get in touch for a fully customized trip.
                </p>
                <Button
                  onClick={() => handleBookNow("Custom Tour Request")}
                  className="mt-5 rounded-lg bg-orange-600 text-xs font-bold text-white hover:bg-orange-700"
                >
                  Plan a Custom Trip
                </Button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTours.map((tour) => (
                  <article
                    key={tour.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all hover:shadow-md"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-16/10 overflow-hidden bg-muted">
                        <img
                          src={tour.image}
                          alt={tour.name}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[11px] font-bold tracking-wider text-white backdrop-blur-xs">
                          {tour.tag}
                        </div>
                        <div className="absolute bottom-3 right-3 rounded-md bg-white/90 px-2 py-0.5 text-xs font-bold text-slate-900 shadow-xs flex items-center gap-1 backdrop-blur-xs">
                          <Star size={12} className="fill-orange-500 text-orange-500" />
                          <span>{tour.rating}</span>
                          <span className="text-[10px] text-muted-foreground font-normal">
                            ({tour.reviewsCount})
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
                          <span className="font-semibold text-orange-600">{tour.place}</span>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} /> {tour.duration}
                          </span>
                        </div>

                        <h2 className="text-lg font-bold tracking-tight text-foreground group-hover:text-orange-600 transition-colors">
                          <Link to="/tours/$tourId" params={{ tourId: tour.id }}>
                            {tour.name}
                          </Link>
                        </h2>

                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                          {tour.detail}
                        </p>

                        <div className="mt-4 pt-3 border-t border-border flex items-baseline justify-between">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block">
                              Starting from
                            </span>
                            <span className="text-xl font-extrabold text-foreground">
                              ₹{tour.price.toLocaleString("en-IN")}
                            </span>
                            <span className="text-[11px] text-muted-foreground font-normal">
                              {" "}
                              / person
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
                      <Link
                        to="/tours/$tourId"
                        params={{ tourId: tour.id }}
                        className="inline-flex items-center justify-center rounded-lg border border-border bg-card h-9 text-xs font-bold text-foreground hover:bg-accent transition-colors"
                      >
                        View Details
                      </Link>
                      <Button
                        onClick={() => handleBookNow(tour.name)}
                        className="rounded-lg bg-orange-600 h-9 text-xs font-bold text-white hover:bg-orange-700 transition-colors"
                      >
                        Book Now
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Custom Package CTA banner */}
        <section className="mt-8 mx-auto max-w-[1240px] px-4 sm:px-6">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-hand text-xl text-orange-400">Want Something Unique?</span>
              <h3 className="mt-1 text-2xl font-bold sm:text-3xl">Design your custom itinerary</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
                Traveling with a specific group size or celebrating a milestone? Our Hyderabad team
                will build a tailor-made package according to your budget.
              </p>
            </div>
            <Button
              onClick={() => handleBookNow("Custom Itinerary Request")}
              className="rounded-lg bg-orange-600 px-6 py-2.5 font-bold text-white shadow-sm hover:bg-orange-700 shrink-0"
            >
              Request Custom Quote <ArrowRight className="ml-1.5 size-4" />
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialTrip={selectedTourForBooking}
      />
    </div>
  );
}
