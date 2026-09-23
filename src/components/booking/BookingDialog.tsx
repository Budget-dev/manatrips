import { useState, type FormEvent } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialTrip?: string;
  initialDestination?: string;
}

export function BookingDialog({
  open,
  onOpenChange,
  initialTrip = "Custom trip from Hyderabad",
  initialDestination = "All destinations",
}: BookingDialogProps) {
  const [travelers, setTravelers] = useState("2");
  const [travelDate, setTravelDate] = useState("");
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const fullName = String(form.get("fullName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!fullName || !email || !phone) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }

    setSending(true);
    try {
      const { error } = await supabase.from("trip_inquiries").insert({
        full_name: fullName,
        email,
        phone,
        destination: initialDestination !== "All destinations" ? initialDestination : initialTrip,
        travel_date: travelDate || null,
        travelers: parseInt(travelers, 10) || 2,
        notes: message || null,
      });

      if (error) {
        console.error("Booking inquiry error:", error);
        toast.error("Could not save your request. Please try again or call us.");
        return;
      }

      setComplete(true);
      toast.success("Thank you! Your trip request has been recorded.");
    } catch (err) {
      console.error("Submission failed:", err);
      toast.error("Something went wrong. Please reach out to hello@manatrips.in.");
    } finally {
      setSending(false);
    }
  };

  const handleClose = (isOpen: boolean) => {
    onOpenChange(isOpen);
    if (!isOpen) {
      setTimeout(() => setComplete(false), 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[92dvh] overflow-y-auto rounded-xl border-border bg-card p-5 sm:max-w-[510px] sm:p-7">
        <DialogHeader className="mb-2 pr-6 text-left">
          <span className="mb-1 font-hand text-2xl text-orange-600">A good trip starts here</span>
          <DialogTitle className="text-2xl font-extrabold text-foreground">
            Let&apos;s plan your getaway.
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us a little about your trip. Our Hyderabad team will prepare custom options for
            you.
          </DialogDescription>
        </DialogHeader>

        {complete ? (
          <div className="py-7 text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-orange-100 text-orange-600">
              <Check size={26} />
            </span>
            <h3 className="mt-4 text-xl font-extrabold text-foreground">Request Received!</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Thanks for reaching out to Mana Trips. A travel specialist from our Hyderabad office
              will get in touch with you shortly.
            </p>
            <Button
              className="mt-6 w-full rounded-lg bg-orange-600 font-semibold text-white hover:bg-orange-700"
              onClick={() => handleClose(false)}
            >
              Done <Check className="ml-1 size-4" />
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="rounded-lg border border-border bg-muted/40 p-3">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Selected Journey / Package
              </span>
              <span className="mt-1 block text-sm font-bold text-foreground">{initialTrip}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="dlg-travelers" className="text-xs font-semibold">
                  Travelers
                </Label>
                <Select value={travelers} onValueChange={setTravelers}>
                  <SelectTrigger id="dlg-travelers" className="h-10 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, index) => (
                      <SelectItem key={index + 1} value={String(index + 1)}>
                        {index + 1} {index === 0 ? "traveler" : "travelers"}
                      </SelectItem>
                    ))}
                    <SelectItem value="11+">Group (11+ travelers)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="dlg-date" className="text-xs font-semibold">
                  Tentative travel date
                </Label>
                <Input
                  id="dlg-date"
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  min={new Date().toISOString().slice(0, 10)}
                  className="h-10 text-sm"
                />
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="dlg-name" className="text-xs font-semibold">
                Your name *
              </Label>
              <Input
                id="dlg-name"
                name="fullName"
                required
                minLength={2}
                maxLength={100}
                placeholder="e.g. Rahul Sharma"
                className="h-10 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="dlg-email" className="text-xs font-semibold">
                  Email address *
                </Label>
                <Input
                  id="dlg-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="h-10 text-sm"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="dlg-phone" className="text-xs font-semibold">
                  Phone (WhatsApp) *
                </Label>
                <Input
                  id="dlg-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="h-10 text-sm"
                />
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="dlg-message" className="text-xs font-semibold">
                Special requests / notes{" "}
                <span className="font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Textarea
                id="dlg-message"
                name="message"
                maxLength={2000}
                placeholder="Let us know about hotel preferences, kids traveling, dietary needs, or departure flights…"
                rows={3}
                className="text-sm"
              />
            </div>

            <Button
              disabled={sending}
              type="submit"
              className="mt-2 h-11 w-full rounded-lg bg-orange-600 font-bold text-white shadow-sm hover:bg-orange-700"
            >
              {sending ? (
                <>
                  <span className="loader-dots mr-2" aria-hidden="true" /> Saving your request…
                </>
              ) : (
                <>
                  Send Trip Request <ArrowRight className="ml-1.5 size-4" />
                </>
              )}
            </Button>

            <p className="text-center text-[11px] text-muted-foreground">
              <ShieldCheck size={13} className="mr-1 inline align-[-2px] text-emerald-600" />
              Your contact details are strictly used to coordinate your travel inquiry.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
