import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Calendar,
  Check,
  Clock,
  HelpCircle,
  Info,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
  X,
  ArrowRight,
  Share2,
} from "lucide-react";
import { toast } from "sonner";
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
import { TOURS_DATA } from "@/data/tours";

export const Route = createFileRoute("/tours/$tourId")({
  loader: ({ params }) => {
    const tour = TOURS_DATA.find((t) => t.id === params.tourId);
    if (!tour) {
      throw notFound();
    }
    return { tour };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.tour?.name} — Mana Trips Hyderabad` },
      {
        name: "description",
        content: `${loaderData?.tour?.name}: ${loaderData?.tour?.overview?.slice(0, 150)}... Starting at ₹${loaderData?.tour?.price} from Hyderabad.`,
      },
      { property: "og:title", content: `${loaderData?.tour?.name} | Mana Trips` },
      {
        property: "og:description",
        content: loaderData?.tour?.detail,
      },
    ],
  }),
  component: TourDetailPage,
});

function TourDetailPage() {
  const { tour } = Route.useLoaderData();
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => setBookingOpen(true)} />

      <main className="flex-1 pb-20">
        {/* Tour Hero */}
        <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
          <div className="absolute inset-0 z-0 opacity-40">
            <img src={tour.image} alt={tour.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-orange-400 font-semibold mb-3">
              <Link to="/tours" className="hover:underline">
                Tours
              </Link>
              <span>/</span>
              <span>{tour.place}</span>
              <span>/</span>
              <span className="text-white/80">{tour.name}</span>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md bg-orange-600/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xs mb-3">
                  {tour.tag} PACKAGE
                </div>
                <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
                  {tour.name}
                </h1>
                <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-2xl">{tour.detail}</p>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-orange-400" /> {tour.place}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={16} className="text-orange-400" /> {tour.duration}
                  </span>
                  <span className="flex items-center gap-1.5 font-bold text-white">
                    <Star size={16} className="fill-orange-400 text-orange-400" /> {tour.rating}
                    <span className="font-normal text-slate-400">
                      ({tour.reviewsCount} reviews)
                    </span>
                  </span>
                </div>
              </div>

              {/* Price & CTA mini box */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-md">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Starting Price
                    </span>
                    <div className="text-2xl sm:text-3xl font-black text-white">
                      ₹{tour.price.toLocaleString("en-IN")}
                      <span className="text-xs font-normal text-slate-400"> / person</span>
                    </div>
                  </div>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Share this package"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="mt-4 w-full h-11 rounded-lg bg-orange-600 font-bold text-white hover:bg-orange-700"
                >
                  Book This Tour <ArrowRight className="ml-1.5 size-4" />
                </Button>
                <p className="mt-2 text-center text-[10px] text-slate-400">
                  Direct support from our Hyderabad desk. No booking fee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="py-12">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
              {/* Left Column: Overview, Highlights, Itinerary, Inclusions/Exclusions, FAQs */}
              <div className="space-y-12">
                {/* 1. Overview */}
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Tour Overview
                  </h2>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {tour.overview}
                  </p>
                </div>

                {/* 2. Key Highlights */}
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    Trip Highlights
                  </h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {tour.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 rounded-lg border border-border bg-card p-3.5 shadow-2xs"
                      >
                        <Sparkles size={16} className="text-orange-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Day-by-Day Itinerary */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                      Day-by-Day Itinerary
                    </h3>
                    <span className="text-xs text-muted-foreground font-medium">
                      {tour.days} Days / {tour.nights} Nights
                    </span>
                  </div>

                  <div className="space-y-4">
                    {tour.itinerary.map((day) => (
                      <div
                        key={day.day}
                        className="rounded-xl border border-border bg-card p-5 shadow-xs transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-orange-600 text-xs font-black text-white">
                            D{day.day}
                          </span>
                          <div className="flex-1">
                            <h4 className="text-base font-bold text-foreground">{day.title}</h4>
                            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                              {day.description}
                            </p>

                            {(day.stay || day.meals) && (
                              <div className="mt-3 pt-3 border-t border-border flex flex-wrap gap-4 text-xs text-muted-foreground">
                                {day.stay && (
                                  <span className="flex items-center gap-1 font-medium">
                                    <MapPin size={13} className="text-orange-600" />
                                    {day.stay}
                                  </span>
                                )}
                                {day.meals && (
                                  <span className="flex items-center gap-1">
                                    <Clock size={13} className="text-orange-600" />
                                    {day.meals}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Inclusions & Exclusions */}
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl mb-4">
                    What&apos;s Included & Excluded
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Inclusions */}
                    <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 p-5">
                      <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm mb-3">
                        <Check size={18} />
                        <span>Package Inclusions</span>
                      </div>
                      <ul className="space-y-2 text-xs leading-relaxed text-foreground">
                        {tour.inclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-600 shrink-0 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusions */}
                    <div className="rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/40 dark:bg-rose-950/20 p-5">
                      <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm mb-3">
                        <X size={18} />
                        <span>Not Included</span>
                      </div>
                      <ul className="space-y-2 text-xs leading-relaxed text-foreground">
                        {tour.exclusions.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-rose-600 shrink-0 font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 5. Things to Know */}
                <div className="rounded-xl border border-border bg-muted/40 p-5">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm mb-3">
                    <Info size={16} className="text-orange-600" />
                    <span>Important Things to Know</span>
                  </div>
                  <ul className="space-y-2 text-xs leading-relaxed text-muted-foreground">
                    {tour.thingsToKnow.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-600 shrink-0 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 6. FAQs Accordion */}
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl mb-3">
                    Frequently Asked Questions
                  </h3>
                  <Accordion type="single" collapsible className="w-full">
                    {tour.faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-left text-sm font-semibold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Right Sidebar: Sticky Booking & Support Box */}
              <div>
                <div className="sticky top-[90px] space-y-5">
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Starting Price
                    </div>
                    <div className="mt-1 text-3xl font-black text-foreground">
                      ₹{tour.price.toLocaleString("en-IN")}
                      <span className="text-xs font-normal text-muted-foreground"> / person</span>
                    </div>

                    <div className="mt-4 space-y-2.5 pt-4 border-t border-border text-xs text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Duration</span>
                        <span className="font-semibold text-foreground">{tour.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Departure From</span>
                        <span className="font-semibold text-foreground">Hyderabad</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Hotel Category</span>
                        <span className="font-semibold text-foreground">
                          Verified 3★ / Boutique
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Vehicle</span>
                        <span className="font-semibold text-foreground">Private AC Cab</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => setBookingOpen(true)}
                      className="mt-6 w-full h-11 rounded-lg bg-orange-600 font-bold text-white hover:bg-orange-700"
                    >
                      Book Now / Inquire
                    </Button>

                    <Link
                      to="/contact"
                      className="mt-2.5 inline-flex w-full items-center justify-center rounded-lg border border-border bg-card h-10 text-xs font-bold text-foreground hover:bg-accent"
                    >
                      Ask a Question
                    </Link>

                    <p className="mt-4 text-center text-[10px] text-muted-foreground">
                      <Shield size={12} className="inline mr-1 text-emerald-600 align-[-1px]" />
                      Pay directly after itinerary confirmation.
                    </p>
                  </div>

                  {/* Need Assistance Card */}
                  <div className="rounded-xl border border-border bg-muted/40 p-5">
                    <h4 className="text-sm font-bold text-foreground">Have Questions?</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Our Hyderabad trip designers are happy to customize dates, group sizes, and
                      vehicle choices.
                    </p>
                    <div className="mt-4 space-y-2 text-xs">
                      <a
                        href="tel:+919000000000"
                        className="flex items-center gap-2 font-semibold text-foreground hover:text-orange-600"
                      >
                        <Phone size={14} className="text-orange-600" />
                        +91 90000 00000
                      </a>
                      <a
                        href="mailto:hello@manatrips.in"
                        className="flex items-center gap-2 font-semibold text-foreground hover:text-orange-600"
                      >
                        <MessageSquare size={14} className="text-orange-600" />
                        hello@manatrips.in
                      </a>
                    </div>
                  </div>
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
        initialTrip={tour.name}
        initialDestination={tour.place}
      />
    </div>
  );
}
