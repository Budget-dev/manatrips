import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ShieldAlert } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Mana Trips" },
      {
        name: "description",
        content:
          "Terms and conditions governing tour bookings, passenger responsibilities, inclusions, and services with Mana Trips Hyderabad.",
      },
      { property: "og:title", content: "Terms & Conditions — Mana Trips" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Legal Agreements</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Terms & Conditions
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Please review the basic terms and mutual understandings regarding bookings, service
              deliverables, and travel operations with Mana Trips.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-[860px] px-4 sm:px-6 space-y-8 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                1. General Overview & Scope
              </h2>
              <p className="mt-2">
                Mana Trips (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates travel
                booking, vacation planning, and tour coordination services based in Hyderabad,
                India. By requesting an itinerary, placing a deposit, or accepting a trip voucher,
                you agree to comply with these terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                2. Inclusions & Price Quotations
              </h2>
              <p className="mt-2">
                All itinerary proposals outline specific inclusions (such as room category, meal
                plans, vehicle type, and scheduled excursions) and exclusions. Any personal
                expenses, laundry, optional adventure rides, monument entry fees not specified, or
                room upgrades remain the responsibility of the traveler.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                3. Booking Deposits & Confirmation
              </h2>
              <p className="mt-2">
                A booking is confirmed only once the required initial deposit has been credited and
                an official written itinerary voucher has been dispatched by Mana Trips. Rates
                quoted prior to deposit payment are subject to availability and seasonal tariff
                adjustments.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                4. Identity Verification & Documentation
              </h2>
              <p className="mt-2">
                All Indian adult travelers are required to carry a valid government-issued photo ID
                (Aadhaar Card, Passport, Voter ID, or Driving License; PAN cards are not accepted by
                hotels for check-in purposes). For regions requiring Inner Line Permits (such as
                Ladakh or border zones in the North East), copies of valid IDs must be provided
                ahead of travel.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                5. Health, Safety & Conduct
              </h2>
              <p className="mt-2">
                Travelers are responsible for assessing their personal fitness for specific
                activities (such as high-altitude travel in Ladakh or river rafting in Rishikesh).
                Mana Trips expects travelers to treat local hosts, hotel staff, and drivers with
                respect and courtesy.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                6. Limitation of Liability
              </h2>
              <p className="mt-2">
                Mana Trips acts as an organizer coordinating third-party airlines, hotels, and
                transport operators. While we meticulously vet and partner with reputable providers,
                we cannot be held liable for personal injury, property loss, delays, or disruptions
                caused by external airlines, weather conditions, or unforeseen road closures.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">7. Jurisdiction</h2>
              <p className="mt-2">
                Any legal disputes or claims arising out of services provided by Mana Trips shall be
                subject to the exclusive jurisdiction of the competent courts in Hyderabad,
                Telangana, India.
              </p>
            </div>

            <div className="pt-6 border-t border-border flex items-center justify-between text-xs">
              <span>Last updated: September 2026</span>
              <Link to="/contact" className="font-bold text-orange-600 hover:underline">
                Questions? Contact Us →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
