import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Compass,
  Heart,
  Mountain,
  Sparkles,
  UsersRound,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import { TRAVEL_STYLES_DATA } from "@/data/travelStyles";

export const Route = createFileRoute("/travel-styles")({
  head: () => ({
    meta: [
      { title: "Travel Styles — Mana Trips | Hyderabad" },
      {
        name: "description",
        content:
          "Explore travel styles by Mana Trips: Weekend Getaways, Family Journeys, Group Adventures, Honeymoons, and Customized Packages.",
      },
      { property: "og:title", content: "Travel Styles — Mana Trips" },
    ],
  }),
  component: TravelStylesPage,
});

function TravelStylesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("Custom Style");

  const handleInquire = (title: string) => {
    setSelectedStyle(title);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => handleInquire("Custom Trip")} />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Tailored For You</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Travel Styles & Experiences
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Whether you need a brisk weekend beach break, a multi-generational family holiday, or
              a high-altitude expedition with friends, we have an experience designed for your pace.
            </p>
          </div>
        </section>

        {/* Styles Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 space-y-12">
            {TRAVEL_STYLES_DATA.map((style, idx) => (
              <div
                key={style.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-xs grid lg:grid-cols-12 gap-0"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-5 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-muted ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={style.image}
                    alt={style.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:hidden" />
                  <div className="absolute bottom-3 left-3 text-white lg:hidden">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">
                      {style.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="hidden lg:block text-xs font-bold uppercase tracking-wider text-orange-600">
                      {style.subtitle}
                    </span>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-foreground">
                      {style.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {style.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2.5">
                        Key Experience Features:
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                        {style.features.map((feat, fidx) => (
                          <li key={fidx} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-orange-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Popular tours in this style */}
                    <div className="mt-6 pt-4 border-t border-border">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                        Popular Tours:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {style.popularTours.map((pt) => (
                          <Link
                            key={pt.id}
                            to="/tours/$tourId"
                            params={{ tourId: pt.id }}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground hover:border-orange-600 transition-colors"
                          >
                            <span>{pt.name}</span>
                            <span className="text-orange-600 font-bold">({pt.duration})</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-muted-foreground italic">{style.idealFor}</span>
                    <Button
                      onClick={() => handleInquire(`${style.title} Inquiry`)}
                      className="rounded-lg bg-orange-600 px-5 font-bold text-white hover:bg-orange-700"
                    >
                      Plan {style.title} <ArrowRight className="ml-1.5 size-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} initialTrip={selectedStyle} />
    </div>
  );
}
