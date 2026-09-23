import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertCircle, Calendar, Clock, FileText, Info, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation & Refund Policy — Mana Trips" },
      {
        name: "description",
        content:
          "Read the cancellation and refund policy for Mana Trips. Structured timelines, hotel cancellation guidelines, and rescheduling procedures.",
      },
      { property: "og:title", content: "Cancellation Policy — Mana Trips" },
    ],
  }),
  component: CancellationPolicyPage,
});

function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Policies & Transparency</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Cancellation & Refund Policy
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Clear, structured cancellation rules and refund processing timelines for all tour
              packages booked through Mana Trips.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="mx-auto max-w-[860px] px-4 sm:px-6 space-y-8 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <div className="rounded-xl border border-amber-200 dark:border-amber-950/60 bg-amber-50/50 dark:bg-amber-950/20 p-4 text-xs text-foreground">
              <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-400 mb-1">
                <Info size={15} />
                <span>Notice regarding travel bookings</span>
              </div>
              <p>
                Specific cancellation percentages may vary slightly during peak holiday windows
                (e.g., Diwali, Christmas/New Year, or national festival weekends) depending on
                specific third-party hotel non-refundable terms. Exact terms will always be
                confirmed in your trip confirmation voucher.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                1. Standard Cancellation Timelines (Land Packages)
              </h2>
              <p className="mt-2">
                Unless otherwise explicitly specified on your booking voucher, standard land package
                cancellations made in writing to Mana Trips follow these timelines:
              </p>

              <div className="mt-4 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left text-xs">
                  <thead className="bg-muted text-foreground font-bold">
                    <tr>
                      <th className="p-3">Notice Period Prior to Travel</th>
                      <th className="p-3">Applicable Cancellation Charge</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-3">30 days or more before departure</td>
                      <td className="p-3 font-semibold text-foreground">
                        Administrative processing fee only (approx. 10% of total package)
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">15 to 29 days before departure</td>
                      <td className="p-3 font-semibold text-foreground">
                        25% of the total package value
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">7 to 14 days before departure</td>
                      <td className="p-3 font-semibold text-foreground">
                        50% of the total package value
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Less than 7 days before departure or No-Show</td>
                      <td className="p-3 font-semibold text-rose-600">
                        100% of package value (Non-refundable)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                2. Flight & Train Bookings
              </h2>
              <p className="mt-2">
                Flight and train tickets booked through Mana Trips as part of bundled itineraries
                are subject directly to the respective airline or railway cancellation and refund
                policies. Mana Trips passes through all airline refunds directly after deducting any
                airline cancellation fees.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                3. Date Rescheduling & Adjustments
              </h2>
              <p className="mt-2">
                We understand that emergencies and work scheduling conflicts happen. Whenever
                possible, we will attempt to reschedule your travel dates with hotels and transport
                providers instead of charging cancellation fees, subject to room availability and
                seasonal price differences.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                4. Unforeseen Events & Force Majeure
              </h2>
              <p className="mt-2">
                In circumstances where travel is prevented due to severe natural disasters,
                political instability, border closures, or airport shutdowns, Mana Trips will
                coordinate with suppliers to obtain credit notes or rescheduled dates for travelers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                5. Refund Processing Window
              </h2>
              <p className="mt-2">
                Approved refunds are credited back to the original payment source (bank account /
                UPI / card) within 7 to 10 working days following supplier reconciliation.
              </p>
            </div>

            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-foreground">
                  Have questions about an existing booking?
                </p>
                <p className="text-xs text-muted-foreground">
                  Email us at hello@manatrips.in with your booking reference.
                </p>
              </div>
              <Link
                to="/contact"
                className="rounded-lg bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700"
              >
                Contact Support Desk
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
