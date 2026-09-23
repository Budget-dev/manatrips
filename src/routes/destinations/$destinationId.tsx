import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  Compass,
  Info,
  MapPin,
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import { DESTINATIONS_DATA } from "@/data/destinations";
import { TOURS_DATA } from "@/data/tours";

export const Route = createFileRoute("/destinations/$destinationId")({
  loader: ({ params }) => {
    const destination = DESTINATIONS_DATA.find((d) => d.id === params.destinationId);
    if (!destination) {
      throw notFound();
    }
    const matchingTours = TOURS_DATA.filter(
      (tour) =>
        tour.place.toLowerCase().includes(destination.name.toLowerCase()) ||
        destination.relatedTourIds.includes(tour.id),
    );
    return { destination, matchingTours };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.destination?.name} Travel Guide & Packages — Mana Trips` },
      {
        name: "description",
        content: `Plan your trip to ${loaderData?.destination?.name} from Hyderabad. Best season: ${loaderData?.destination?.bestSeason}. Tours starting from ₹${loaderData?.destination?.startingPrice}.`,
      },
      { property: "og:title", content: `${loaderData?.destination?.name} Tours | Mana Trips` },
    ],
  }),
  component: DestinationDetailPage,
});

function DestinationDetailPage() {
  const { destination, matchingTours } = Route.useLoaderData();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => setBookingOpen(true)} />

      <main className="flex-1 pb-16">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src={destination.image}
              alt={destination.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="flex items-center gap-2 text-xs text-orange-400 font-semibold mb-3">
              <Link to="/destinations" className="hover:underline">
                Destinations
              </Link>
              <span>/</span>
              <span className="text-white/80">{destination.name}</span>
            </div>

            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-md bg-orange-600/90 px-3 py-1 text-xs font-bold text-white mb-3">
                <MapPin size={13} /> {destination.state}
              </div>
              <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
                {destination.name}
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-300">{destination.description}</p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Calendar size={16} className="text-orange-400" />
                  <strong>Best Season:</strong> {destination.bestSeason}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={16} className="text-orange-400" />
                  <strong>Ideal Duration:</strong> {destination.duration}
                </span>
              </div>

              <div className="mt-8 flex gap-3">
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="rounded-lg bg-orange-600 px-6 font-bold text-white hover:bg-orange-700"
                >
                  Plan Trip to {destination.name}
                </Button>
                <Link
                  to="/tours"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 px-5 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  Browse All Tours
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview & Highlights */}
        <section className="py-12">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
              <div className="space-y-10">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    About {destination.name}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {destination.overview}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    Top Experiences in {destination.name}
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {destination.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3.5 shadow-2xs"
                      >
                        <Sparkles size={16} className="text-orange-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Travel Tips */}
                <div className="rounded-xl border border-border bg-muted/40 p-5">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm mb-3">
                    <Info size={16} className="text-orange-600" />
                    <span>Travel Tips for Visitors from Hyderabad</span>
                  </div>
                  <ul className="space-y-2 text-xs leading-relaxed text-muted-foreground">
                    {destination.quickTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-orange-600 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Available Tours for this destination */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                      Available Tours for {destination.name}
                    </h3>
                    <Link to="/tours" className="text-xs font-bold text-orange-600 hover:underline">
                      View all tours →
                    </Link>
                  </div>

                  {matchingTours.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {matchingTours.map((tour) => (
                        <div
                          key={tour.id}
                          className="flex flex-col justify-between rounded-xl border border-border bg-card p-4 shadow-xs"
                        >
                          <div>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                              <span className="font-semibold text-orange-600">{tour.duration}</span>
                              <span className="flex items-center gap-1 font-bold text-foreground">
                                <Star size={12} className="fill-orange-500 text-orange-500" />{" "}
                                {tour.rating}
                              </span>
                            </div>
                            <h4 className="text-sm font-bold text-foreground">{tour.name}</h4>
                            <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                              {tour.detail}
                            </p>
                          </div>
                          <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                            <span className="text-sm font-extrabold">
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
                  ) : (
                    <div className="rounded-xl border border-dashed border-border p-6 text-center">
                      <p className="text-xs text-muted-foreground">
                        Custom packages available on request for this destination.
                      </p>
                      <Button
                        onClick={() => setBookingOpen(true)}
                        className="mt-3 rounded-lg bg-orange-600 text-xs font-bold text-white hover:bg-orange-700"
                      >
                        Inquire Custom Itinerary
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="sticky top-[90px] rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h4 className="text-base font-bold text-foreground">
                    Plan Your {destination.name} Trip
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    Tell us your travel month and traveler count. We&apos;ll send tailored hotel and
                    vehicle options from Hyderabad.
                  </p>

                  <div className="mt-4 space-y-2 text-xs text-muted-foreground border-y border-border py-3">
                    <div className="flex justify-between">
                      <span>Packages From:</span>
                      <strong className="text-foreground">
                        ₹{destination.startingPrice.toLocaleString("en-IN")}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Best Season:</span>
                      <strong className="text-foreground">{destination.bestSeason}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Departure:</span>
                      <strong className="text-foreground">Hyderabad, India</strong>
                    </div>
                  </div>

                  <Button
                    onClick={() => setBookingOpen(true)}
                    className="mt-5 w-full rounded-lg bg-orange-600 h-10 font-bold text-white hover:bg-orange-700"
                  >
                    Inquire for {destination.name}
                  </Button>

                  <Link
                    to="/contact"
                    className="mt-2.5 inline-flex w-full items-center justify-center rounded-lg border border-border bg-card h-9 text-xs font-bold text-foreground hover:bg-accent"
                  >
                    Contact Hyderabad Desk
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
        initialDestination={destination.name}
        initialTrip={`${destination.name} Tour Package`}
      />
    </div>
  );
}
