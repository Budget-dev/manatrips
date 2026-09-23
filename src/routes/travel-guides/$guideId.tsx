import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  Share2,
  Sparkles,
  Tag,
  User,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BookingDialog } from "@/components/booking/BookingDialog";
import { Button } from "@/components/ui/button";
import { TRAVEL_GUIDES_DATA } from "@/data/guides";

export const Route = createFileRoute("/travel-guides/$guideId")({
  loader: ({ params }) => {
    const guide = TRAVEL_GUIDES_DATA.find((g) => g.id === params.guideId);
    if (!guide) {
      throw notFound();
    }
    const relatedGuides = TRAVEL_GUIDES_DATA.filter((g) => guide.relatedGuideIds.includes(g.id));
    return { guide, relatedGuides };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.guide?.title} — Mana Trips` },
      {
        name: "description",
        content: loaderData?.guide?.excerpt,
      },
      { property: "og:title", content: loaderData?.guide?.title },
    ],
  }),
  component: GuideDetailPage,
});

function GuideDetailPage() {
  const { guide, relatedGuides } = Route.useLoaderData();
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Article link copied!");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader onPlanTripClick={() => setBookingOpen(true)} />

      <main className="flex-1 pb-16">
        {/* Header Breadcrumb & Title */}
        <section className="bg-slate-950 py-14 text-white sm:py-20 border-b border-border">
          <div className="mx-auto max-w-[860px] px-4 sm:px-6">
            <Link
              to="/travel-guides"
              className="inline-flex items-center gap-1.5 text-xs text-orange-400 font-semibold hover:underline mb-4"
            >
              <ArrowLeft size={14} /> Back to all guides
            </Link>

            <div className="inline-flex items-center rounded-md bg-orange-600/90 px-2.5 py-1 text-xs font-bold text-white mb-3">
              {guide.category}
            </div>

            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white leading-tight">
              {guide.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-4 text-xs text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-white">
                  <User size={13} className="text-orange-400" /> {guide.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {guide.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> {guide.readTime}
                </span>
              </div>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 text-xs font-medium hover:text-white transition-colors"
              >
                <Share2 size={13} /> Share article
              </button>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="mx-auto max-w-[860px] px-4 sm:px-6 -mt-8 sm:-mt-12 relative z-10">
          <div className="aspect-16/9 overflow-hidden rounded-2xl shadow-xl bg-muted border border-border">
            <img src={guide.image} alt={guide.title} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Body Article Content */}
        <article className="mx-auto max-w-[860px] px-4 sm:px-6 pt-10">
          {/* Key Takeaways Box */}
          <div className="rounded-xl border border-orange-200 dark:border-orange-950/60 bg-orange-50/50 dark:bg-orange-950/20 p-5 mb-8">
            <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400 font-bold text-sm mb-3">
              <Sparkles size={16} />
              <span>Key Takeaways & Quick Tips</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm leading-relaxed text-foreground">
              {guide.keyTakeaways.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-orange-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base leading-relaxed text-foreground/90 font-normal">
            {guide.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Mid-Article Trip Planning CTA */}
          <div className="my-10 rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Ready to explore?
              </span>
              <h3 className="mt-1 text-xl font-bold text-foreground sm:text-2xl">
                Let Mana Trips handle the logistics.
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Get custom hotel and transport options departing directly from Hyderabad.
              </p>
            </div>
            <Button
              onClick={() => setBookingOpen(true)}
              className="rounded-lg bg-orange-600 px-5 font-bold text-white hover:bg-orange-700 shrink-0"
            >
              Plan Your Trip
            </Button>
          </div>

          {/* Related Articles */}
          {relatedGuides.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">Related Travel Guides</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedGuides.map((rel) => (
                  <Link
                    key={rel.id}
                    to="/travel-guides/$guideId"
                    params={{ guideId: rel.id }}
                    className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-orange-500 shadow-2xs"
                  >
                    <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="mt-1 text-sm font-bold text-foreground group-hover:text-orange-600 transition-colors">
                      {rel.title}
                    </h4>
                    <span className="mt-2 text-xs text-muted-foreground block">{rel.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <SiteFooter />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        initialTrip="Customized Trip Inquiry"
      />
    </div>
  );
}
