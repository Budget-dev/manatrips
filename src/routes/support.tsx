import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileQuestion,
  HelpCircle,
  LifeBuoy,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support Center — Mana Trips Hyderabad" },
      {
        name: "description",
        content:
          "Mana Trips customer support center. Get help with existing bookings, flight delay coordination, emergency on-trip assistance, and travel inquiries.",
      },
      { property: "og:title", content: "Support Center — Mana Trips" },
    ],
  }),
  component: SupportCenterPage,
});

function SupportCenterPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const helpTopics = [
    {
      title: "Booking & Payment Help",
      desc: "Information regarding advance deposits, vouchers, GST invoices, and accepted payment modes.",
      link: "/booking-help",
      label: "View Booking Process",
    },
    {
      title: "Cancellations & Refunds",
      desc: "Detailed refund percentages, cancellation notice windows, and flight rescheduling guidelines.",
      link: "/cancellation-policy",
      label: "View Cancellation Terms",
    },
    {
      title: "Frequently Asked Questions",
      desc: "Common questions about hotel categories, private cabs, dietary accommodations, and flight bookings.",
      link: "/faq",
      label: "Read FAQs",
    },
    {
      title: "Terms & Conditions",
      desc: "Detailed legal guidelines regarding guest responsibilities, IDs, and service limitations.",
      link: "/terms",
      label: "Review Terms",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => setBookingOpen(true)} />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Assistance & Care</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Mana Trips Support Center
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              We&apos;re here to make sure your travel experience is smooth from the first
              conversation until you return safely home to Hyderabad.
            </p>
          </div>
        </section>

        {/* Quick Contact Bar */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                <div className="size-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                  <Phone size={20} />
                </div>
                <h3 className="text-base font-bold">Call Our Hyderabad Desk</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Direct voice support for booking inquiries and travel quotes.
                </p>
                <a
                  href="tel:+919000000000"
                  className="mt-3 inline-block text-sm font-bold text-orange-600 hover:underline"
                >
                  +91 90000 00000
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                <div className="size-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-base font-bold">WhatsApp Coordination</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Fast messaging for flight schedule changes and quick questions.
                </p>
                <a
                  href="tel:+919000000000"
                  className="mt-3 inline-block text-sm font-bold text-emerald-600 hover:underline"
                >
                  Chat with a Trip Planner
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                <div className="size-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Mail size={20} />
                </div>
                <h3 className="text-base font-bold">Email Inquiries</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Detailed itinerary requests and custom corporate offsite proposals.
                </p>
                <a
                  href="mailto:hello@manatrips.in"
                  className="mt-3 inline-block text-sm font-bold text-blue-600 hover:underline"
                >
                  hello@manatrips.in
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Help Guides Grid */}
        <section className="py-12 bg-muted/40 border-y border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Self-Help Topics
              </span>
              <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">
                Browse Popular Support Resources
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {helpTopics.map((topic, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{topic.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {topic.desc}
                    </p>
                  </div>
                  <Link
                    to={topic.link}
                    className="mt-5 text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1.5"
                  >
                    {topic.label} <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Assistance Notice */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-[880px] px-4 sm:px-6">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="size-6 text-orange-600" />
                <h3 className="text-lg font-bold text-foreground">On-Trip Emergency Assistance</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                If you are currently traveling on a Mana Trips package and face an immediate
                challenge with your hotel check-in, driver coordination, or flight cancellation,
                please use the direct 24/7 emergency phone number printed at the top of your Mana
                Trips Booking Voucher.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-lg bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
                >
                  Message Support
                </Link>
                <Link
                  to="/faq"
                  className="rounded-lg border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:bg-accent"
                >
                  Check FAQ Answers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialTrip="Support & Inquiry"
      />
    </div>
  );
}
