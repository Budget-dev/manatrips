import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Calendar, Clock, Sparkles, Tag, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import { TRAVEL_GUIDES_DATA } from "@/data/guides";

export const Route = createFileRoute("/travel-guides/")({
  head: () => ({
    meta: [
      { title: "Travel Guides & Practical Notes — Mana Trips" },
      {
        name: "description",
        content:
          "Practical travel guides, honest tips, and itinerary blueprints for travelers departing from Hyderabad. Written by the Mana Trips team.",
      },
      { property: "og:title", content: "Mana Trips Travel Guides & Tips" },
    ],
  }),
  component: TravelGuidesIndexPage,
});

function TravelGuidesIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [bookingOpen, setBookingOpen] = useState(false);

  const categories = [
    "all",
    "Weekend Notes",
    "Mountain Guides",
    "Family Travel",
    "Budget Travel",
    "Destination Guides",
  ];

  const filteredGuides = useMemo(() => {
    if (selectedCategory === "all") return TRAVEL_GUIDES_DATA;
    return TRAVEL_GUIDES_DATA.filter((g) => g.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => setBookingOpen(true)} />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Field Notes & Blueprints</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Mana Travel Guides
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Clear, honest advice on flight timing, packing lists, permits, and off-beat local
              food. Written directly by our Hyderabad travel desk.
            </p>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="sticky top-[68px] z-30 border-b border-border bg-card/95 py-3 backdrop-blur-md">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? "bg-orange-600 text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {cat === "all" ? "All Categories" : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Guides Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredGuides.map((guide) => (
                <article
                  key={guide.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-all hover:shadow-md"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-16/10 overflow-hidden bg-muted">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 rounded-md bg-slate-950/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                        {guide.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} /> {guide.date}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {guide.readTime}
                        </span>
                      </div>

                      <h2 className="text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-orange-600 transition-colors">
                        <Link to="/travel-guides/$guideId" params={{ guideId: guide.id }}>
                          {guide.title}
                        </Link>
                      </h2>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                        {guide.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-border/50 mt-3 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium">{guide.author}</span>
                    <Link
                      to="/travel-guides/$guideId"
                      params={{ guideId: guide.id }}
                      className="font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
                    >
                      Read Guide <ArrowRight size={12} />
                    </Link>
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
        initialTrip="Custom Trip Inquiry"
      />
    </div>
  );
}
