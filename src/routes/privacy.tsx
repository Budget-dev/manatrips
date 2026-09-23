import { createFileRoute, Link } from "@tanstack/react-router";
import { Lock, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Mana Trips" },
      {
        name: "description",
        content:
          "Privacy policy of Mana Trips Hyderabad. How we collect, store, and protect your travel inquiry and contact details.",
      },
      { property: "og:title", content: "Privacy Policy — Mana Trips" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Data Protection</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Privacy Policy
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              How Mana Trips collects, processes, and protects your personal and travel information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="mx-auto max-w-[860px] px-4 sm:px-6 space-y-8 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                1. Information We Collect
              </h2>
              <p className="mt-2">
                When you interact with Mana Trips through our website forms, phone, or WhatsApp, we
                may collect the following details:
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Your name, email address, and phone / WhatsApp number</li>
                <li>Desired travel dates, destination choices, and traveler party size</li>
                <li>Specific dietary preferences, room preferences, and travel notes</li>
                <li>Government photo IDs when required for flight tickets or border permits</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                2. How We Use Your Information
              </h2>
              <p className="mt-2">We use collected information solely to:</p>
              <ul className="mt-2 list-disc list-inside space-y-1">
                <li>Prepare and coordinate your customized travel itinerary and quotes</li>
                <li>Secure hotel room reservations and book private chauffeurs</li>
                <li>Facilitate flight, train, or ferry ticketing on your behalf</li>
                <li>
                  Provide urgent customer assistance and flight delay coordination during your trip
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                3. Information Sharing & Third Parties
              </h2>
              <p className="mt-2">
                We do not sell, rent, or trade your contact information to third-party telemarketers
                or advertisers. Your contact information and guest names are shared strictly with
                confirmed service providers (such as the specific resort front desk, local driver,
                or airline) directly relevant to fulfilling your trip.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                4. Data Security & Storage
              </h2>
              <p className="mt-2">
                We implement industry-standard encryption, SSL transmission, and secure database
                controls to safeguard your data from unauthorized access or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                5. Your Rights & Contact Information
              </h2>
              <p className="mt-2">
                You have the right to request access to the data we hold regarding your bookings or
                ask for your contact information to be updated or removed from our inquiry records.
              </p>
              <p className="mt-3">
                For privacy inquiries, contact our data administrator at:
                <br />
                <strong className="text-foreground">Mana Trips</strong>
                <br />
                Hyderabad, Telangana, India
                <br />
                Email:{" "}
                <a href="mailto:hello@manatrips.in" className="text-orange-600 hover:underline">
                  hello@manatrips.in
                </a>
              </p>
            </div>

            <div className="pt-6 border-t border-border flex items-center justify-between text-xs">
              <span>Last updated: September 2026</span>
              <Link to="/contact" className="font-bold text-orange-600 hover:underline">
                Contact Hyderabad Office →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
