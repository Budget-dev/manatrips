import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Compass, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import { DESTINATIONS_DATA } from "@/data/destinations";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Destinations Across India — Mana Trips | Hyderabad" },
      {
        name: "description",
        content:
          "Discover incredible India destinations departing from Hyderabad: Goa, Kashmir, Kerala, Rajasthan, Himachal, Ladakh, Andaman, and Uttarakhand.",
      },
      { property: "og:title", content: "Explore Destinations — Mana Trips" },
      {
        property: "og:description",
        content:
          "Find best travel seasons, curated tour packages, and travel guides for top Indian destinations.",
      },
    ],
  }),
  component: DestinationsIndexPage,
});

function DestinationsIndexPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("Custom Destination");

  const handleInquire = (destName: string) => {
    setSelectedDestination(destName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => handleInquire("Custom Trip")} />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Discover India</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Destinations from Hyderabad
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              From tranquil backwaters in the South to towering snow passes in the North, discover
              handpicked travel circuits with direct connectivity from Hyderabad.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DESTINATIONS_DATA.map((dest) => (
                <article
                  key={dest.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all hover:shadow-md"
                >
                  <div>
                    {/* Destination Image */}
                    <div className="relative aspect-16/10 overflow-hidden bg-muted">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs flex items-center gap-1">
                        <MapPin size={12} className="text-orange-400" />
                        {dest.state}
                      </div>
                      <div className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-bold text-slate-900 shadow-xs flex items-center gap-1 backdrop-blur-xs">
                        <Calendar size={12} className="text-orange-600" />
                        <span>Best: {dest.bestSeason}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h2 className="text-xl font-bold tracking-tight text-foreground group-hover:text-orange-600 transition-colors">
                        <Link to="/destinations/$destinationId" params={{ destinationId: dest.id }}>
                          {dest.name}
                        </Link>
                      </h2>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {dest.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-border">
                        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider block mb-2">
                          Popular Experiences:
                        </span>
                        <ul className="space-y-1 text-xs text-foreground/90">
                          {dest.popularExperiences.slice(0, 3).map((exp, idx) => (
                            <li key={idx} className="flex items-center gap-1.5 truncate">
                              <span className="text-orange-600 font-bold shrink-0">•</span>
                              <span className="truncate">{exp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 border-t border-border/60 mt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block">
                        Packages From
                      </span>
                      <span className="text-base font-extrabold text-foreground">
                        ₹{dest.startingPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        to="/destinations/$destinationId"
                        params={{ destinationId: dest.id }}
                        className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-3.5 h-8 text-xs font-bold text-foreground hover:bg-accent"
                      >
                        Explore
                      </Link>
                      <Button
                        onClick={() => handleInquire(`${dest.name} Tour Package`)}
                        className="rounded-lg bg-orange-600 px-3.5 h-8 text-xs font-bold text-white hover:bg-orange-700"
                      >
                        Inquire
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialDestination={selectedDestination}
      />
    </div>
  );
}
