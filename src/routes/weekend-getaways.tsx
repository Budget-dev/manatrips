import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Compass, MapPin, Sparkles, Star, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import { TOURS_DATA } from "@/data/tours";
import goaImage from "@/assets/trip-goa.jpg";

export const Route = createFileRoute("/weekend-getaways")({
  head: () => ({
    meta: [
      { title: "Weekend Getaways from Hyderabad — Mana Trips" },
      {
        name: "description",
        content:
          "Quick 2-day and 3-day weekend trips departing from Hyderabad. Relax in Goa, unwind in Coorg, or experience Rishikesh without burning annual leaves.",
      },
      { property: "og:title", content: "Weekend Getaways — Mana Trips" },
    ],
  }),
  component: WeekendGetawaysPage,
});

function WeekendGetawaysPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("Weekend Getaway");

  const weekendTours = TOURS_DATA.filter((t) => t.travelStyle === "weekend" || t.days <= 4);

  const handleBook = (name: string) => {
    setSelectedTour(name);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => handleBook("Weekend Getaway")} />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 text-white border-b border-border">
          <div className="absolute inset-0 z-0 opacity-30">
            <img
              src={goaImage}
              alt="Weekend beach getaway"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="font-hand text-2xl text-orange-400">Short Breaks. Maximum Joy.</span>
              <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
                Weekend Getaways from Hyderabad
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-300">
                Designed for busy working professionals and couples. Seamless Friday evening to
                Sunday night departures with verified boutique stays and zero transit stress.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  onClick={() => handleBook("Custom Weekend Getaway")}
                  className="rounded-lg bg-orange-600 px-6 font-bold text-white hover:bg-orange-700"
                >
                  Plan a Weekend Escape
                </Button>
                <Link
                  to="/tours"
                  className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/60 px-5 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  View All Tours
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight Tours Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Quick Turnaround Escapes
                </span>
                <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl text-foreground">
                  Popular Weekend Packages
                </h2>
              </div>
              <p className="text-xs text-muted-foreground">
                Optimized for Friday night / Saturday morning departures from Rajiv Gandhi
                International Airport.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {weekendTours.map((tour) => (
                <article
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
                      <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                        {tour.tag}
                      </div>
                      <div className="absolute bottom-3 right-3 rounded-md bg-white/90 px-2 py-0.5 text-xs font-bold text-slate-900 shadow-xs flex items-center gap-1 backdrop-blur-xs">
                        <Star size={12} className="fill-orange-500 text-orange-500" />
                        <span>{tour.rating}</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1.5">
                        <span className="font-semibold text-orange-600">{tour.place}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {tour.duration}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-orange-600 transition-colors">
                        <Link to="/tours/$tourId" params={{ tourId: tour.id }}>
                          {tour.name}
                        </Link>
                      </h3>

                      <p className="mt-2 text-xs text-muted-foreground line-clamp-2">
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
                          <span className="text-xs text-muted-foreground"> / person</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 grid grid-cols-2 gap-2.5">
                    <Link
                      to="/tours/$tourId"
                      params={{ tourId: tour.id }}
                      className="inline-flex items-center justify-center rounded-lg border border-border bg-card h-9 text-xs font-bold text-foreground hover:bg-accent"
                    >
                      Details
                    </Link>
                    <Button
                      onClick={() => handleBook(tour.name)}
                      className="rounded-lg bg-orange-600 h-9 text-xs font-bold text-white hover:bg-orange-700"
                    >
                      Book Now
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} initialTrip={selectedTour} />
    </div>
  );
}
