import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase,
  Compass,
  Heart,
  Mail,
  MapPin,
  Sparkles,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Mana Trips — Join Our Hyderabad Team" },
      {
        name: "description",
        content:
          "Build honest, budget-friendly travel experiences across India. Explore career opportunities with Mana Trips in Hyderabad.",
      },
      { property: "og:title", content: "Careers — Mana Trips Hyderabad" },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const roles = [
    {
      title: "Travel Itinerary Designer (South & West India)",
      department: "Travel Operations",
      location: "Hyderabad, India (Hybrid)",
      type: "Full-Time",
      description:
        "Design customized travel packages for Goa, Kerala, and Rajasthan. Coordinate directly with verified local hotels and transport partners.",
      requirements: [
        "2+ years experience in domestic tour planning or guest operations",
        "Deep familiarity with popular Indian destinations and route logistics",
        "Fluent communication in English and Telugu (Hindi is a plus)",
      ],
    },
    {
      title: "Guest Experience & Ground Support Specialist",
      department: "Customer Success",
      location: "Hyderabad, India (On-site)",
      type: "Full-Time",
      description:
        "Serve as the primary on-trip lifeline for travelers. Handle flight updates, hotel check-in coordination, and emergency inquiries.",
      requirements: [
        "Passionate about delivering calm, empathetic guest support",
        "Ability to coordinate with hotel front-desks and transport chauffeurs under pressure",
        "Strong phone etiquette and prompt problem-solving mindset",
      ],
    },
    {
      title: "Travel Content & Community Creator",
      department: "Brand & Marketing",
      location: "Hyderabad, India",
      type: "Full-Time / Contract",
      description:
        "Document real travel routes, capture candid footage, and write practical guides that help travelers from Hyderabad travel smarter.",
      requirements: [
        "Proven portfolio of engaging travel photography, short-form video, or articles",
        "Hands-on experience traveling across diverse Indian states",
        "Authentic storytelling voice with zero hype or artificial buzzwords",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">Join Our Mission</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Careers at Mana Trips
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Help us reshape Indian travel into something accessible, honest, and unforgettable.
              We&apos;re a close-knit Hyderabad team passionate about genuine hospitality.
            </p>
          </div>
        </section>

        {/* Culture & Philosophy */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Life at Mana Trips
              </span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Why Work With Us</h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                We believe in genuine responsibility, travel perks to explore our routes firsthand,
                and an open culture.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                <div className="size-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                  <Compass size={20} />
                </div>
                <h3 className="text-base font-bold">Firsthand Route Testing</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Our team personally visits the resorts, rides the houseboats, and eats at the
                  cafes we recommend. Annual travel credits included.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                <div className="size-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <Heart size={20} />
                </div>
                <h3 className="text-base font-bold">Empathetic Culture</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  No toxic micromanagement. We value ownership, clear communication, and work-life
                  balance for our Hyderabad crew.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-2xs">
                <div className="size-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Users size={20} />
                </div>
                <h3 className="text-base font-bold">Tangible Customer Impact</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Every tour you coordinate gives a family or a group of young professionals a
                  milestone memory they will cherish for life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="py-12 bg-muted/40 border-y border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                  Current Openings
                </span>
                <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">
                  Explore Open Opportunities
                </h2>
              </div>
              <p className="text-xs text-muted-foreground">
                All roles based out of or hybrid with our Hyderabad office.
              </p>
            </div>

            <div className="space-y-6">
              {roles.map((role, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-border bg-card p-6 shadow-xs transition-colors hover:border-orange-500/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                          {role.department}
                        </span>
                        <span className="text-muted-foreground text-xs">•</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin size={12} /> {role.location}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{role.title}</h3>
                    </div>
                    <span className="inline-block rounded-md bg-muted px-2.5 py-1 text-xs font-semibold text-foreground shrink-0 w-fit">
                      {role.type}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {role.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border">
                    <span className="text-xs font-bold text-foreground block mb-2">
                      Key Qualifications:
                    </span>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {role.requirements.map((req, ridx) => (
                        <li key={ridx} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-orange-600 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Send CV with subject &quot;Application: {role.title}&quot;
                    </span>
                    <a
                      href={`mailto:careers@manatrips.in?subject=Application: ${encodeURIComponent(role.title)}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 px-4 py-2 text-xs font-bold text-white hover:bg-orange-700 transition-colors"
                    >
                      Apply Now <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* General Application Callout */}
            <div className="mt-10 rounded-xl border border-dashed border-border bg-card p-6 text-center">
              <h4 className="text-base font-bold">Don&apos;t see your exact role?</h4>
              <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto">
                We are always excited to hear from passionate travel coordinators, content
                storytellers, and logistics experts.
              </p>
              <a
                href="mailto:careers@manatrips.in?subject=General Career Inquiry - Mana Trips"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:underline"
              >
                <Mail size={13} /> Email us at careers@manatrips.in
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
