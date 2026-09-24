import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SEOAudit } from "@/components/seo/SEOAudit";
import { Sparkles, BarChart3, Search } from "lucide-react";

export const Route = createFileRoute("/seo-audit")({
  head: () => ({
    meta: [
      { title: "SEO Health & Metadata Audit — Mana Trips" },
      {
        name: "description",
        content:
          "Internal SEO diagnostics and metadata scanner for Mana Trips. Verifies missing meta tags, canonical URLs, Open Graph sharing cards, and search snippet health.",
      },
      { property: "og:title", content: "SEO Health & Metadata Audit — Mana Trips" },
      {
        property: "og:description",
        content:
          "Internal SEO diagnostics and metadata scanner for Mana Trips. Verifies missing meta tags, canonical URLs, and Open Graph images.",
      },
      { property: "og:image", content: "https://manatrips.in/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "https://manatrips.in/seo-audit" }],
  }),
  component: SEOAuditPage,
});

function SEOAuditPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-gradient-to-b from-muted/60 to-background py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-orange-600">
              <BarChart3 className="size-4" />
              <span>Technical SEO & Metadata Center</span>
            </div>
            <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Site-Wide SEO Health & Open Graph Auditor
            </h1>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Verify tag coverage, search snippet formatting, canonical URL consistency, and social
              preview cards across all Hyderabad travel pages.
            </p>
          </div>
        </section>

        {/* Audit Component */}
        <section className="py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SEOAudit />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
