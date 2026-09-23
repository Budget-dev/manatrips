import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
  Users,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/customized-tours")({
  head: () => ({
    meta: [
      { title: "Customized Tour Packages — Mana Trips Hyderabad" },
      {
        name: "description",
        content:
          "Handcraft your dream itinerary with Mana Trips. Choose your destination, dates, hotel tiers, and travel pace departing from Hyderabad.",
      },
      { property: "og:title", content: "Customized Tours — Mana Trips" },
    ],
  }),
  component: CustomizedToursPage,
});

function CustomizedToursPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => setBookingOpen(true)} />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-16 sm:py-24 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="font-hand text-2xl text-orange-400">Your Trip. Your Rules.</span>
              <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
                Handcrafted Customized Tours
              </h1>
              <p className="mt-3 text-base sm:text-lg text-slate-300">
                Don&apos;t settle for cookie-cutter schedules. Tell our Hyderabad trip designers how
                you like to travel, and we&apos;ll assemble the exact stays, routes, and experiences
                for your budget.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  onClick={() => setBookingOpen(true)}
                  className="rounded-lg bg-orange-600 px-6 py-2.5 font-bold text-white hover:bg-orange-700"
                >
                  Start Customizing <ArrowRight className="ml-1.5 size-4" />
                </Button>
                <Link
                  to="/destinations"
                  className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/60 px-5 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  Explore Destinations First
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What Can You Customize */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Total Flexibility
              </span>
              <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl text-foreground">
                What Can You Personalize?
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-5 shadow-2xs">
                <div className="size-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                  <Calendar size={20} />
                </div>
                <h3 className="text-base font-bold">Dates & Duration</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Start any day of the week. Add leisure buffer days or fast-track highlights based
                  on your holiday balance.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 shadow-2xs">
                <div className="size-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <MapPin size={20} />
                </div>
                <h3 className="text-base font-bold">Stays & Resorts</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Pick boutique homestays, pool villas, treehouses in Wayanad, or heritage havelis
                  in Jaipur.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 shadow-2xs">
                <div className="size-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Users size={20} />
                </div>
                <h3 className="text-base font-bold">Vehicles & Drivers</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Choose from Sedans, Innova Crysta, Urbania, or luxury coaches based on your family
                  comfort.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 shadow-2xs">
                <div className="size-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-base font-bold">Exclusive Experiences</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  Candlelight beach dinners, scuba dives, tea estate visits, or sunrise photography
                  viewpoints.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Timeline */}
        <section className="py-12 bg-muted/40 border-y border-border">
          <div className="mx-auto max-w-[860px] px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold sm:text-3xl text-foreground text-center mb-8">
              How Customization Works
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: "1. Tell Us Your Dream Trip",
                  desc: "Submit your travel dates, preferred destinations (e.g., Kashmir, Kerala, Ladakh), number of guests, and approximate per-person budget.",
                },
                {
                  step: "2. 1-on-1 Consultation",
                  desc: "A Mana Trips coordinator from Hyderabad calls or WhatsApps you to clarify pace, dining, and stay preferences.",
                },
                {
                  step: "3. Draft Itinerary & Direct Pricing",
                  desc: "We deliver a detailed day-by-day blueprint with hotel names, room categories, and a transparent price quote.",
                },
                {
                  step: "4. Confirmation & Support",
                  desc: "Fine-tune any leg of the journey, lock it with a confirmation deposit, and relax knowing our Hyderabad desk has your back.",
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl border border-border bg-card p-5 shadow-xs">
                  <h4 className="text-base font-bold text-foreground">{item.step}</h4>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={() => setBookingOpen(true)}
                className="rounded-lg bg-orange-600 px-8 py-3 text-sm font-bold text-white hover:bg-orange-700"
              >
                Submit Custom Itinerary Request
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialTrip="Customized Tour Proposal"
      />
    </div>
  );
}
