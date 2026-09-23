import { useMemo, useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Heart,
  MapPin,
  Menu,
  Mountain,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards,
  X,
} from "lucide-react";
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
import { ManaTripsLogo } from "@/components/brand/ManaTripsLogo";
import { SiteFooter } from "@/components/layout/SiteFooter";
import logo from "@/assets/mana-trips-logo.png.asset.json";
import heroImage from "@/assets/mana-hero.jpg";
import goaImage from "@/assets/trip-goa.jpg";
import kashmirImage from "@/assets/trip-kashmir.jpg";
import keralaImage from "@/assets/trip-kerala.jpg";
import rajasthanImage from "@/assets/trip-rajasthan.jpg";

const trips = [
  {
    id: "goa-weekend-escape",
    name: "Goa Weekend Escape",
    place: "Goa",
    duration: "3 days · 2 nights",
    detail: "Beaches, nightlife & slow mornings",
    price: 7999,
    rating: "4.8",
    tag: "WEEKEND",
    image: goaImage,
  },
  {
    id: "kashmir-adventure",
    name: "Kashmir Adventure",
    place: "Kashmir",
    duration: "5 days · 4 nights",
    detail: "Mountain air & still-blue lakes",
    price: 16999,
    rating: "4.9",
    tag: "FAVOURITE",
    image: kashmirImage,
  },
  {
    id: "kerala-family-escape",
    name: "Kerala Family Escape",
    place: "Kerala",
    duration: "4 days · 3 nights",
    detail: "Houseboats, palms & spice gardens",
    price: 12999,
    rating: "4.7",
    tag: "FAMILY",
    image: keralaImage,
  },
  {
    id: "rajasthan-heritage",
    name: "Rajasthan Heritage",
    place: "Rajasthan",
    duration: "4 days · 3 nights",
    detail: "Golden forts & old-world charm",
    price: 14999,
    rating: "4.6",
    tag: "CULTURE",
    image: rajasthanImage,
  },
];

const categories = [
  { title: "Weekend escapes", icon: Compass },
  { title: "Family journeys", icon: UsersRound },
  { title: "Group adventures", icon: Mountain },
  { title: "Made for you", icon: Sparkles },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mana Trips — Budget-friendly tours & adventures from Hyderabad" },
      {
        name: "description",
        content:
          "Discover budget-friendly trips from Hyderabad. Explore Goa, Kashmir, Kerala and Rajasthan with Mana Trips.",
      },
      { property: "og:title", content: "Mana Trips — Discover. Travel. Make memories." },
      {
        property: "og:description",
        content:
          "Find your next budget-friendly adventure, with curated journeys departing from Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [destination, setDestination] = useState("all");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [activeCategory, setActiveCategory] = useState("All journeys");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTrip, setSelectedTrip] = useState("Goa Weekend Escape");
  const [bookingSending, setBookingSending] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [isSaved, setIsSaved] = useState<string[]>([]);

  const visibleTrips = useMemo(() => {
    const search = searchText.trim().toLowerCase();
    return trips.filter((trip) => {
      const matchesQuery =
        !search || `${trip.name} ${trip.place} ${trip.detail}`.toLowerCase().includes(search);
      const matchesDestination = destination === "all" || trip.place.toLowerCase() === destination;
      return matchesQuery && matchesDestination;
    });
  }, [searchText, destination]);

  const showBooking = (tripName = "") => {
    setSelectedTrip(
      tripName ||
        (destination !== "all"
          ? `${destination[0]?.toUpperCase()}${destination.slice(1)} — custom trip`
          : "Custom trip from Hyderabad"),
    );
    setBookingComplete(false);
    setBookingOpen(true);
  };

  const handleBooking = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const fullName = String(form.get("fullName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (fullName.length < 2 || email.length < 5 || !email.includes("@") || phone.length < 7) {
      toast.error("Please check your name, email and phone number.");
      return;
    }

    setBookingSending(true);
    try {
      const { error } = await supabase.from("trip_inquiries").insert({
        full_name: fullName,
        email,
        phone,
        trip_name: selectedTrip,
        travel_date: travelDate || null,
        travelers: Number(travelers),
        message,
      });
      if (error) throw error;
      setBookingComplete(true);
      toast.success("Your trip request has been sent.");
    } catch {
      toast.error("We couldn't send your request. Please try again.");
    } finally {
      setBookingSending(false);
    }
  };

  const toggleSave = (name: string) =>
    setIsSaved((saved) =>
      saved.includes(name) ? saved.filter((item) => item !== name) : [...saved, name],
    );

  const searchSection = () =>
    document.getElementById("tours")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main className="min-h-screen overflow-x-clip bg-background pb-24 text-foreground md:pb-0">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1360px] items-center justify-between gap-5 px-4 sm:px-6">
          <Link to="/" className="flex shrink-0 items-center" aria-label="Mana Trips home">
            <ManaTripsLogo variant="dark" size="md" />
          </Link>
          <nav className="hidden items-center gap-6 text-[13px] font-semibold md:flex">
            <Link className="transition-colors hover:text-primary" to="/discover">
              Discover
            </Link>
            <Link className="transition-colors hover:text-primary" to="/tours">
              Tours
            </Link>
            <Link className="transition-colors hover:text-primary" to="/destinations">
              Destinations
            </Link>
            <Link className="transition-colors hover:text-primary" to="/travel-styles">
              Travel Styles
            </Link>
            <Link className="transition-colors hover:text-primary" to="/travel-guides">
              Travel Guides
            </Link>
            <Link className="transition-colors hover:text-primary" to="/about">
              About
            </Link>
            <Link className="transition-colors hover:text-primary" to="/contact">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Find a trip"
              onClick={searchSection}
              className="size-10 rounded-full"
            >
              <Search />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={isSaved.length ? `Saved trips: ${isSaved.length}` : "Saved trips"}
              onClick={() => {
                document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
                toast.message(
                  isSaved.length
                    ? `${isSaved.length} trip${isSaved.length === 1 ? "" : "s"} saved for later.`
                    : "Tap the heart on a tour to save it.",
                );
              }}
              className="hidden size-10 rounded-full sm:inline-flex"
            >
              <Heart className={isSaved.length ? "fill-primary text-primary" : ""} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="size-10 rounded-full md:hidden"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
            <Button
              onClick={() => showBooking()}
              className="hidden h-10 rounded-full px-5 md:inline-flex"
            >
              Plan a trip <ArrowRight />
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="grid gap-1 border-t border-border bg-background px-5 py-3 text-sm font-medium md:hidden">
            {[
              ["Discover", "/discover"],
              ["Tours", "/tours"],
              ["Destinations", "/destinations"],
              ["Travel styles", "/travel-styles"],
              ["Travel guides", "/travel-guides"],
              ["About Mana Trips", "/about"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <Link
                className="rounded-lg px-3 py-2.5 hover:bg-muted font-semibold text-sm transition-colors"
                to={href}
                key={label}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button
              className="mt-2 w-full font-bold"
              onClick={() => {
                setMobileMenuOpen(false);
                showBooking();
              }}
            >
              Plan a trip <ArrowRight />
            </Button>
          </nav>
        )}
      </header>

      <section id="home" className="relative">
        <div className="hero-landscape relative isolate flex min-h-[590px] items-center overflow-hidden md:min-h-[620px]">
          <img
            className="absolute inset-0 -z-20 size-full object-cover object-[58%_49%]"
            src={heroImage}
            alt="Morning light over a Himalayan lake and mountain peaks"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="hero-shade absolute inset-0 -z-10" />
          <div className="mx-auto w-full max-w-[1360px] px-5 pb-24 pt-12 sm:px-8 md:pb-28">
            <div className="max-w-[660px]">
              <span className="mb-3 block font-hand text-3xl text-sunlight sm:text-4xl">
                Travel more, live brighter
              </span>
              <h1 className="mb-5 max-w-[630px] text-balance text-5xl font-extrabold leading-[1.01] text-hero-foreground sm:text-6xl md:text-[72px]">
                Discover India.
                <br />
                <span className="text-primary">Make memories.</span>
              </h1>
              <p className="max-w-[500px] text-base font-medium leading-relaxed text-hero-muted sm:text-lg">
                Good trips, good people, great places — starting right here in Hyderabad.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-medium text-hero-muted">
                <span>Weekend escapes</span>
                <span aria-hidden="true">·</span>
                <span>Family trips</span>
                <span aria-hidden="true">·</span>
                <span>Made-for-you journeys</span>
              </div>
            </div>
          </div>
          <a
            href="#tours"
            aria-label="Explore tours"
            className="absolute bottom-[118px] right-6 hidden items-center gap-2 text-xs text-hero-muted sm:flex md:right-[max(2rem,calc((100vw-1360px)/2))]"
          >
            <span>Find your next place</span>
            <ArrowDown size={15} />
          </a>
        </div>

        <section
          aria-label="Find your next tour"
          className="booking-search relative z-10 mx-auto -mt-[78px] max-w-[1232px] px-4 sm:px-6"
        >
          <div className="grid gap-3 rounded-xl border border-border bg-card p-4 shadow-travel md:grid-cols-[1fr_0.95fr_0.72fr_auto] md:items-end md:gap-0 md:p-5">
            <div className="px-1 md:px-3 md:pr-5">
              <label
                htmlFor="search-destination"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.13em] text-muted-foreground"
              >
                Where to?
              </label>
              <div className="flex h-11 items-center gap-2 rounded-md border border-border bg-muted/55 px-3">
                <MapPin size={17} className="shrink-0 text-primary" />
                <Input
                  id="search-destination"
                  value={searchText}
                  onChange={(event) => {
                    setSearchText(event.target.value);
                    setDestination("all");
                  }}
                  list="mana-destinations"
                  placeholder="Any destination"
                  className="h-full border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
                />
                <datalist id="mana-destinations">
                  {trips.map((trip) => (
                    <option key={trip.place} value={trip.place} />
                  ))}
                </datalist>
              </div>
            </div>
            <div className="px-1 md:border-l md:border-border md:px-4 md:pr-5">
              <label
                htmlFor="search-date"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.13em] text-muted-foreground"
              >
                Travel date
              </label>
              <div className="flex h-11 items-center gap-2 rounded-md border border-border bg-muted/55 px-3">
                <CalendarDays size={17} className="shrink-0 text-primary" />
                <Input
                  id="search-date"
                  type="date"
                  value={travelDate}
                  onChange={(event) => setTravelDate(event.target.value)}
                  min={new Date().toISOString().slice(0, 10)}
                  aria-label="Choose travel date"
                  className="h-full border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
                />
              </div>
            </div>
            <div className="px-1 md:border-l md:border-border md:px-4 md:pr-5">
              <label
                htmlFor="search-travelers"
                className="mb-2 block text-[10px] font-bold uppercase tracking-[0.13em] text-muted-foreground"
              >
                Travelers
              </label>
              <Select value={travelers} onValueChange={setTravelers}>
                <SelectTrigger
                  id="search-travelers"
                  className="h-11 rounded-md border-border bg-muted/55"
                >
                  <UsersRound className="mr-1 text-primary" />
                  <SelectValue placeholder="Travelers" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 8 }, (_, index) => (
                    <SelectItem key={index + 1} value={String(index + 1)}>
                      {index + 1} {index === 0 ? "traveler" : "travelers"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="px-0 pt-1 md:px-0 md:pl-4">
              <Button
                onClick={searchSection}
                className="h-12 w-full rounded-md px-6 font-bold md:min-w-[172px]"
              >
                Find my trip <Search />
              </Button>
            </div>
          </div>
        </section>
      </section>

      <section className="mx-auto grid max-w-[1232px] grid-cols-2 border-b border-border px-4 py-7 sm:px-6 md:grid-cols-4 md:py-8">
        {[
          { icon: WalletCards, title: "Good value", line: "Trips within budget" },
          { icon: Compass, title: "Thoughtfully picked", line: "Lovely places to stay" },
          { icon: ShieldCheck, title: "Here to help", line: "A real team, always" },
          { icon: Heart, title: "Made for memories", line: "Trips worth talking about" },
        ].map(({ icon: Icon, title, line }) => (
          <div
            key={title}
            className="flex min-h-[74px] items-center gap-3 border-border px-2 py-3 even:border-l sm:gap-4 sm:px-5 md:justify-center md:border-l md:first:border-l-0"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary sm:size-11">
              <Icon size={19} />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-bold text-foreground">{title}</span>
              <span className="mt-0.5 block text-[11px] leading-snug text-muted-foreground">
                {line}
              </span>
            </span>
          </div>
        ))}
      </section>

      <section
        id="tours"
        className="scroll-mt-24 mx-auto max-w-[1320px] px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20"
      >
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
              The good stuff
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-[40px]">
              Popular <span className="text-primary">tours</span>
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              Handpicked adventures from Hyderabad to some wonderful corners of India.
            </p>
          </div>
          <a
            href="#styles"
            className="mb-1 hidden shrink-0 items-center gap-1 text-[13px] font-bold text-foreground transition-colors hover:text-primary sm:flex"
          >
            Explore by style <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {visibleTrips.map((trip) => (
            <article
              key={trip.name}
              className="trip-card group flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-travel-hover"
            >
              <div className="relative aspect-[1.22/1] overflow-hidden">
                <img
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                  src={trip.image}
                  alt={`${trip.place} landscape`}
                  width={1008}
                  height={752}
                  loading="lazy"
                />
                <span className="absolute left-2.5 top-2.5 rounded-sm bg-foreground px-2 py-1 text-[9px] font-bold tracking-[0.08em] text-background sm:left-3 sm:top-3 sm:text-[10px]">
                  {trip.tag}
                </span>
                <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-sm bg-background/95 px-2 py-1 text-[10px] font-bold sm:right-3 sm:top-3">
                  <span className="text-primary">★</span>
                  {trip.rating}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={
                    isSaved.includes(trip.name)
                      ? `Remove ${trip.name} from saved trips`
                      : `Save ${trip.name}`
                  }
                  onClick={() => toggleSave(trip.name)}
                  className="absolute bottom-2 right-2 size-9 rounded-full bg-background/90 shadow-sm hover:bg-background"
                >
                  <Heart
                    className={isSaved.includes(trip.name) ? "fill-primary text-primary" : ""}
                  />
                </Button>
              </div>
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <div className="flex items-start justify-between gap-1">
                  <h3 className="text-[14px] font-bold leading-snug sm:text-[16px]">{trip.name}</h3>
                </div>
                <p className="mt-1.5 flex items-center gap-1.5 text-[10px] text-muted-foreground sm:text-[11px]">
                  <Clock3 size={12} />
                  {trip.duration}
                </p>
                <p className="mt-2 hidden text-xs text-muted-foreground sm:block">{trip.detail}</p>
                <div className="mt-auto flex items-center justify-between gap-1.5 border-t border-border pt-3 sm:mt-4 sm:pt-3.5">
                  <span className="min-w-0">
                    <span className="block text-[9px] font-medium uppercase tracking-wider text-muted-foreground">
                      From
                    </span>
                    <span className="block whitespace-nowrap text-[15px] font-extrabold leading-tight sm:text-xl">
                      ₹{trip.price.toLocaleString("en-IN")}
                    </span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Link
                      to="/tours/$tourId"
                      params={{ tourId: trip.id }}
                      className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-card px-2.5 text-xs font-bold text-foreground hover:bg-accent transition-colors"
                    >
                      Details
                    </Link>
                    <Button
                      aria-label={`Book ${trip.name}`}
                      onClick={() => showBooking(trip.name)}
                      className="h-9 shrink-0 rounded-md px-2.5 text-xs sm:px-3.5 sm:text-xs font-bold"
                    >
                      Book <ArrowRight size={13} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
          {visibleTrips.length === 0 && (
            <div className="col-span-full flex flex-col items-center gap-3 rounded-lg border border-border bg-muted/45 px-5 py-12 text-center">
              <MapPin className="text-primary" />
              <h3 className="font-bold">No trips found just yet</h3>
              <p className="text-sm text-muted-foreground">
                Try another destination or clear your search.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchText("");
                  setDestination("all");
                }}
              >
                Show all tours
              </Button>
            </div>
          )}
        </div>
      </section>

      <section
        id="styles"
        className="scroll-mt-20 border-y border-border bg-muted/45 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                How do you like to travel?
              </p>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Find your <span className="text-primary">travel style</span>
              </h2>
            </div>
            <span className="hidden text-sm text-muted-foreground sm:block">
              A trip that feels like you.
            </span>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {categories.map(({ title, icon: Icon }, index) => (
              <button
                type="button"
                key={title}
                onClick={() => {
                  setActiveCategory(title);
                  if (index === 0) {
                    setDestination("all");
                    setSearchText("Goa");
                  } else if (index === 1) {
                    setDestination("all");
                    setSearchText("Kerala");
                  } else {
                    setDestination("all");
                    setSearchText("");
                  }
                  document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group flex min-h-[112px] items-center gap-3 rounded-md border p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/50 sm:min-h-[125px] sm:gap-4 sm:p-5 ${activeCategory === title ? "border-primary/45 bg-primary/5" : "border-border bg-card"}`}
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/10 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:size-14">
                  <Icon size={22} />
                </span>
                <span className="min-w-0 text-[13px] font-bold leading-snug sm:text-sm">
                  {title}
                  <ArrowUpRight size={14} className="mt-1 block text-primary" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1232px] items-center gap-7 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.83fr_1.17fr] lg:gap-14">
        <div className="relative min-h-[215px] overflow-hidden rounded-lg sm:min-h-[310px]">
          <img
            className="absolute inset-0 size-full object-cover"
            src={kashmirImage}
            alt="A boat making its way across a quiet Kashmir lake"
            width={1008}
            height={752}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/25" />
          <span className="absolute bottom-4 left-4 rounded-sm bg-background/90 px-3 py-1.5 text-xs font-bold">
            Journeys from Hyderabad
          </span>
        </div>
        <div>
          <p className="mb-2 font-hand text-3xl text-primary">A little more than just a trip</p>
          <h2 className="max-w-[550px] text-3xl font-extrabold leading-tight sm:text-4xl">
            Good journeys begin with <span className="text-primary">good people.</span>
          </h2>
          <p className="mt-4 max-w-[490px] text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            A weekend by the sea, a cool morning up in the hills, or a family adventure to remember.
            Tell us what you have in mind and we’ll help find the right way there.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 sm:gap-x-8">
            <div className="flex items-center gap-2.5">
              <Check size={17} className="shrink-0 text-primary" />
              <span className="text-xs font-semibold sm:text-sm">Trips at your pace</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check size={17} className="shrink-0 text-primary" />
              <span className="text-xs font-semibold sm:text-sm">Friendly local team</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check size={17} className="shrink-0 text-primary" />
              <span className="text-xs font-semibold sm:text-sm">Thoughtful trip ideas</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check size={17} className="shrink-0 text-primary" />
              <span className="text-xs font-semibold sm:text-sm">Easy to get in touch</span>
            </div>
          </div>
          <Button onClick={() => showBooking()} className="mt-7 rounded-md">
            Tell us where you want to go <ArrowRight />
          </Button>
        </div>
      </section>

      <section
        id="guides"
        className="scroll-mt-16 border-y border-border bg-muted/45 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
          <div className="mb-7 flex items-end justify-between gap-3 sm:mb-9">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                A note from the road
              </p>
              <h2 className="text-3xl font-extrabold sm:text-[38px]">
                Travel stories <span className="text-primary">& guides</span>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A little inspiration for that trip you keep thinking about.
              </p>
            </div>
            <a
              className="mb-1 hidden items-center gap-1 text-[13px] font-bold sm:flex"
              href="#tours"
            >
              Find a trip <ArrowRight size={15} />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {[
              {
                id: "weekend-escapes-near-hyderabad",
                title: "Good little escapes near Hyderabad",
                place: "WEEKEND NOTES",
                image: rajasthanImage,
                sub: "Forts, food, and a change of scenery.",
              },
              {
                id: "first-timers-guide-to-kashmir",
                title: "A first-timer’s guide to Kashmir",
                place: "MOUNTAIN GUIDE",
                image: kashmirImage,
                sub: "Quiet lakes, cool air, and where to begin.",
              },
              {
                id: "kerala-backwaters-slow-travel",
                title: "Slow down by Kerala’s backwaters",
                place: "SLOW TRAVEL",
                image: keralaImage,
                sub: "A few days among palms and calm waters.",
              },
            ].map((story) => (
              <article
                key={story.title}
                className="overflow-hidden rounded-lg border border-border bg-card flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[1.8/1] overflow-hidden">
                    <img
                      className="size-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      src={story.image}
                      alt={story.title}
                      width={1008}
                      height={752}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <span className="text-[9px] font-bold tracking-[0.15em] text-primary">
                      {story.place}
                    </span>
                    <h3 className="mt-2 text-[15px] font-bold leading-snug sm:text-base">
                      {story.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {story.sub}
                    </p>
                  </div>
                </div>
                <div className="p-4 pt-0 sm:p-5 sm:pt-0">
                  <Link
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    to="/travel-guides/$guideId"
                    params={{ guideId: story.id }}
                  >
                    Read field guide <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 sm:py-16">
        <div className="adventure-banner relative isolate overflow-hidden rounded-lg px-5 py-10 sm:px-10 sm:py-14 lg:px-14">
          <img
            className="absolute inset-0 -z-20 size-full object-cover object-center"
            src={heroImage}
            alt="A bright sunrise over the mountains"
            width={1920}
            height={1080}
            loading="lazy"
          />
          <div className="adventure-shade absolute inset-0 -z-10" />
          <div className="max-w-[620px]">
            <span className="font-hand text-3xl text-sunlight">
              Your next adventure starts here
            </span>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-hero-foreground sm:text-4xl">
              The best stories
              <br className="hidden sm:block" /> start somewhere.
            </h2>
            <p className="mt-2 max-w-[410px] text-sm leading-relaxed text-hero-muted">
              Share an idea. We’ll help turn it into a trip worth remembering.
            </p>
            <Button onClick={() => showBooking()} className="mt-5 rounded-md">
              Let’s plan your trip <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-border border-b border-border py-6 sm:grid-cols-4 sm:py-7">
          {[
            { title: "From Hyderabad", icon: MapPin },
            { title: "Small or big group", icon: UsersRound },
            { title: "For every budget", icon: WalletCards },
            { title: "Here when you need us", icon: ShieldCheck },
          ].map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="flex min-h-[52px] items-center justify-center gap-2 px-1 text-center sm:gap-2.5"
            >
              <Icon size={17} className="shrink-0 text-primary sm:size-5" />
              <span className="text-[10px] font-semibold leading-snug sm:text-xs">{title}</span>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/96 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-2 backdrop-blur-md md:hidden">
        <Button
          onClick={() => showBooking()}
          className="h-12 w-full rounded-md text-sm font-bold shadow-sm"
        >
          Plan your next trip <ArrowRight />
        </Button>
      </div>

      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="max-h-[92dvh] overflow-y-auto rounded-lg border-border bg-card p-5 sm:max-w-[510px] sm:p-7">
          <DialogHeader className="mb-2 pr-6 text-left">
            <span className="mb-2 font-hand text-2xl text-primary">A good trip starts here</span>
            <DialogTitle className="text-2xl font-extrabold">Let’s plan your getaway.</DialogTitle>
            <DialogDescription>
              Tell us a little about your trip. Our Hyderabad team will be in touch.
            </DialogDescription>
          </DialogHeader>
          {bookingComplete ? (
            <div className="py-7 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-primary/10 text-primary">
                <Check size={26} />
              </span>
              <h3 className="mt-4 text-xl font-extrabold">It’s on our list.</h3>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Thanks for reaching out. The Mana Trips team has received your request and will be
                in touch.
              </p>
              <Button className="mt-5 w-full" onClick={() => setBookingOpen(false)}>
                Lovely, thanks <Check />
              </Button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="grid gap-4">
              <div className="rounded-md border border-border bg-muted/45 p-3">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Your journey
                </span>
                <span className="mt-1 block text-sm font-bold">{selectedTrip}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="booking-travelers">Travelers</Label>
                  <Select value={travelers} onValueChange={setTravelers}>
                    <SelectTrigger id="booking-travelers" className="h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 8 }, (_, index) => (
                        <SelectItem key={index + 1} value={String(index + 1)}>
                          {index + 1} {index === 0 ? "traveler" : "travelers"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="booking-date">Travel date</Label>
                  <Input
                    id="booking-date"
                    type="date"
                    value={travelDate}
                    onChange={(event) => setTravelDate(event.target.value)}
                    min={new Date().toISOString().slice(0, 10)}
                    className="h-11"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="booking-name">Your name</Label>
                <Input
                  id="booking-name"
                  name="fullName"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Full name"
                  className="h-11"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid min-w-0 gap-2">
                  <Label htmlFor="booking-email">Email</Label>
                  <Input
                    id="booking-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-11"
                  />
                </div>
                <div className="grid min-w-0 gap-2">
                  <Label htmlFor="booking-phone">Phone</Label>
                  <Input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    required
                    minLength={7}
                    maxLength={30}
                    autoComplete="tel"
                    placeholder="Your phone number"
                    className="h-11"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="booking-message">
                  Anything else we should know?{" "}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                </Label>
                <Textarea
                  id="booking-message"
                  name="message"
                  maxLength={2000}
                  placeholder="A little about the trip you have in mind…"
                  rows={3}
                />
              </div>
              <Button
                disabled={bookingSending}
                type="submit"
                className="mt-1 h-12 w-full font-bold"
              >
                {bookingSending ? (
                  <>
                    <span className="loader-dots" aria-hidden="true" /> Sending your request…
                  </>
                ) : (
                  <>
                    Send my trip request <ArrowRight />
                  </>
                )}
              </Button>
              <p className="text-center text-[10px] text-muted-foreground">
                <ShieldCheck size={12} className="mr-1 inline align-[-2px]" />
                Your details stay with the Mana Trips team.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
