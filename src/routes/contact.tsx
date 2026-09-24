import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Mana Trips | Hyderabad, India" },
      {
        name: "description",
        content:
          "Reach the Mana Trips team in Hyderabad. Inquire about tour packages, customized weekend getaways, and group travel across India.",
      },
      { property: "og:title", content: "Contact Mana Trips — Hyderabad" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [destination, setDestination] = useState("Goa");
  const [travelers, setTravelers] = useState("2");
  const [travelDate, setTravelDate] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const fullName = String(form.get("fullName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!fullName || !email || !phone) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }

    setSubmitting(true);
    try {
      const tripName = `${destination} Holiday Inquiry`.slice(0, 120);
      const parsedTravelers = Math.min(Math.max(parseInt(travelers, 10) || 2, 1), 20);

      const { error } = await supabase.from("trip_inquiries").insert({
        full_name: fullName.slice(0, 100),
        email: email.slice(0, 254),
        phone: phone.slice(0, 30),
        trip_name: tripName,
        travel_date: travelDate || null,
        travelers: parsedTravelers,
        message: (message || "").slice(0, 2000),
        status: "pending",
      });

      if (error) {
        console.error("Submission error:", error);
        toast.error("Could not send your inquiry. Please try again or call us.");
        return;
      }

      setSubmitted(true);
      toast.success("Thank you! Your message has been received.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit message. Please email hello@manatrips.in.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-1 pb-16">
        {/* Banner */}
        <section className="bg-slate-950 py-14 sm:py-20 text-white border-b border-border">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <span className="font-hand text-2xl text-orange-400">We&apos;re Here To Help</span>
            <h1 className="mt-1 text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white">
              Contact Mana Trips
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Planning a trip from Hyderabad? Have questions about our tours or need a customized
              quote? Send us a message or call our team.
            </p>
          </div>
        </section>

        {/* Form and Contact Cards */}
        <section className="py-12">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* Left Column: Contact Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    Get in Touch
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Our team is based right here in Hyderabad. We assist with itinerary planning,
                    hotel selections, flight timing, and group logistics.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-orange-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Office Location</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Mana Trips
                        <br />
                        Hyderabad, Telangana, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-border">
                    <Mail className="size-5 text-orange-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Email Inquiries</h4>
                      <a
                        href="mailto:hello@manatrips.in"
                        className="text-xs text-orange-600 font-semibold hover:underline block mt-0.5"
                      >
                        hello@manatrips.in
                      </a>
                      <span className="text-[11px] text-muted-foreground">
                        Responses within 24 hours on business days
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-border">
                    <Phone className="size-5 text-orange-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Phone & WhatsApp</h4>
                      <a
                        href="tel:+919000000000"
                        className="text-xs text-orange-600 font-semibold hover:underline block mt-0.5"
                      >
                        +91 90000 00000
                      </a>
                      <span className="text-[11px] text-muted-foreground">
                        Mon to Sat: 9:30 AM – 7:30 PM IST
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-muted/40 p-5">
                  <div className="flex items-center gap-2 text-foreground font-bold text-sm mb-2">
                    <Clock size={16} className="text-orange-600" />
                    <span>Working Hours</span>
                  </div>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday – Friday:</span>
                      <span className="font-semibold text-foreground">9:30 AM – 7:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold text-foreground">10:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold text-foreground">
                        Emergency on-trip support only
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact & Inquiry Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="mt-4 text-2xl font-extrabold text-foreground">
                        Message Sent Successfully!
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
                        Thank you for reaching out to Mana Trips. One of our Hyderabad travel
                        specialists will review your requirements and get back to you promptly.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 rounded-lg bg-orange-600 text-xs font-bold text-white hover:bg-orange-700"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          Plan Your Trip or Send a Message
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Share your tentative dates and destination. We&apos;ll craft a
                          no-obligation quote.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 pt-2">
                        <div className="space-y-1.5">
                          <Label htmlFor="c-name" className="text-xs font-semibold">
                            Full Name *
                          </Label>
                          <Input
                            id="c-name"
                            name="fullName"
                            required
                            placeholder="e.g. Priya Reddy"
                            className="h-10 text-xs"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="c-phone" className="text-xs font-semibold">
                            Phone / WhatsApp *
                          </Label>
                          <Input
                            id="c-phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            className="h-10 text-xs"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="c-email" className="text-xs font-semibold">
                          Email Address *
                        </Label>
                        <Input
                          id="c-email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@domain.com"
                          className="h-10 text-xs"
                        />
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="c-dest" className="text-xs font-semibold">
                            Destination
                          </Label>
                          <Select value={destination} onValueChange={setDestination}>
                            <SelectTrigger id="c-dest" className="h-10 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Goa">Goa</SelectItem>
                              <SelectItem value="Kashmir">Kashmir</SelectItem>
                              <SelectItem value="Kerala">Kerala</SelectItem>
                              <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                              <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                              <SelectItem value="Ladakh">Ladakh</SelectItem>
                              <SelectItem value="Andaman">Andaman</SelectItem>
                              <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                              <SelectItem value="Custom Destination">Other / Custom</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="c-date" className="text-xs font-semibold">
                            Approx Travel Date
                          </Label>
                          <Input
                            id="c-date"
                            type="date"
                            value={travelDate}
                            onChange={(e) => setTravelDate(e.target.value)}
                            min={new Date().toISOString().slice(0, 10)}
                            className="h-10 text-xs"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="c-travelers" className="text-xs font-semibold">
                            Number of Travelers
                          </Label>
                          <Select value={travelers} onValueChange={setTravelers}>
                            <SelectTrigger id="c-travelers" className="h-10 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 8 }, (_, i) => (
                                <SelectItem key={i + 1} value={String(i + 1)}>
                                  {i + 1} {i === 0 ? "person" : "people"}
                                </SelectItem>
                              ))}
                              <SelectItem value="9+">Group (9+)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="c-msg" className="text-xs font-semibold">
                          Your Message / Specific Requirements
                        </Label>
                        <Textarea
                          id="c-msg"
                          name="message"
                          rows={4}
                          placeholder="Tell us what you have in mind: hotel preferences, special occasions, budget limits, or flight preferences from Hyderabad…"
                          className="text-xs"
                        />
                      </div>

                      <Button
                        disabled={submitting}
                        type="submit"
                        className="w-full h-11 rounded-lg bg-orange-600 font-bold text-white hover:bg-orange-700"
                      >
                        {submitting ? (
                          "Sending Message…"
                        ) : (
                          <>
                            Send Inquiry <Send className="ml-1.5 size-4" />
                          </>
                        )}
                      </Button>

                      <p className="text-center text-[10px] text-muted-foreground">
                        <ShieldCheck
                          size={12}
                          className="inline mr-1 text-emerald-600 align-[-1px]"
                        />
                        We respect your privacy. No spam. No third-party sharing.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
