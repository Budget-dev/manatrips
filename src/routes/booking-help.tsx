import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  CheckCircle2,
  CreditCard,
  FileText,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/booking-help")({
  head: () => ({
    meta: [
      { title: "Booking Help & Process — Mana Trips Hyderabad" },
      {
        name: "description",
        content:
          "Step-by-step guide to booking your tour package with Mana Trips. Transparent verification, clear payment milestones, and dedicated ground support.",
      },
      { property: "og:title", content: "Booking Help — Mana Trips" },
    ],
  }),
  component: BookingHelpPage,
});

function BookingHelpPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Select or Request Your Tour",
      desc: "Browse our curated packages (Goa, Kashmir, Kerala, Rajasthan, etc.) or submit a custom trip inquiry with your desired travel dates and group count.",
    },
    {
      num: "02",
      title: "Receive Customized Itinerary & Quote",
      desc: "Our Hyderabad trip planner reaches out via WhatsApp/email with confirmed hotel options, transport choices, day-by-day timing, and a clear, transparent cost breakdown.",
    },
    {
      num: "03",
      title: "Fine-tune and Confirm Details",
      desc: "Adjust hotel room categories, add specific activities (like Shikara rides, river rafting, or safari permits), and confirm meals according to your family's preferences.",
    },
    {
      num: "04",
      title: "Advance Deposit & Voucher Confirmation",
      desc: "Secure your hotels and driver with a standard confirmation deposit. You will receive an official Mana Trips booking confirmation voucher with hotel contacts.",
    },
    {
      num: "05",
      title: "Hassle-Free Travel with Dedicated Ground Support",
      desc: "Depart smoothly from Hyderabad. Your local chauffeur greets you on arrival, and your Hyderabad trip coordinator remains on call 24/7 throughout your journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => setBookingOpen(true)} />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Step-by-Step Guide</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              How Booking Works With Mana Trips
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Zero complicated forms, zero automated call trees. Experience personal, transparent
              travel planning from our Hyderabad office.
            </p>
          </div>
        </section>

        {/* Steps Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-[880px] px-4 sm:px-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-8">
              5 Simple Steps to Your Next Adventure
            </h2>

            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col sm:flex-row items-start gap-5"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 font-black text-lg">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment & Trust Box */}
            <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="size-5 text-orange-600" />
                Payment Milestones & Security
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 text-xs leading-relaxed text-muted-foreground">
                <div className="rounded-lg border border-border bg-card p-4">
                  <strong className="text-foreground block text-sm mb-1">
                    Advance Deposit (30%–50%)
                  </strong>
                  Required to hold verified hotel rooms and reserve your private sightseeing cab.
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <strong className="text-foreground block text-sm mb-1">Balance Payment</strong>
                  Cleared prior to departure or on hotel check-in as agreed in your written voucher.
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                All payments are receipted through formal invoices issued by Mana Trips in
                Hyderabad. We accept UPI, IMPS, NEFT, and major cards.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
              <div>
                <h4 className="text-sm font-bold text-foreground">
                  Need quick assistance right now?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Our Hyderabad team is on WhatsApp and phone.
                </p>
              </div>
              <Button
                onClick={() => setBookingOpen(true)}
                className="rounded-lg bg-orange-600 px-5 font-bold text-white hover:bg-orange-700"
              >
                Start Your Booking <ArrowRight className="ml-1.5 size-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialTrip="Custom Booking Inquiry"
      />
    </div>
  );
}
