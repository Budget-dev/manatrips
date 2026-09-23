import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, Sparkles, X } from "lucide-react";
import { ManaTripsLogo } from "@/components/brand/ManaTripsLogo";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/booking/BookingDialog";

interface SiteHeaderProps {
  onPlanTripClick?: () => void;
}

export function SiteHeader({ onPlanTripClick }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const handlePlanTrip = () => {
    if (onPlanTripClick) {
      onPlanTripClick();
    } else {
      setBookingDialogOpen(true);
    }
  };

  const navLinks = [
    { label: "Discover", href: "/discover" },
    { label: "Tours", href: "/tours" },
    { label: "Destinations", href: "/destinations" },
    { label: "Travel Styles", href: "/travel-styles" },
    { label: "Travel Guides", href: "/travel-guides" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center focus-visible:outline-none"
            aria-label="Mana Trips Home"
          >
            <ManaTripsLogo variant="dark" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:gap-7 text-[13px] font-semibold md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? "text-orange-600 font-bold border-b-2 border-orange-600"
                      : "text-foreground/80 hover:text-orange-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="tel:+919000000000"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground mr-1"
            >
              <Phone size={13} className="text-orange-600" />
              <span>+91 90000 00000</span>
            </a>

            <Button
              onClick={handlePlanTrip}
              className="hidden sm:inline-flex h-9 items-center gap-1.5 rounded-lg bg-orange-600 px-4 text-xs font-bold text-white shadow-xs hover:bg-orange-700 transition-colors"
            >
              <Sparkles size={14} />
              <span>Plan Your Trip</span>
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="size-10 rounded-lg md:hidden"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-b border-border bg-card px-5 py-5 md:hidden animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/" ? currentPath === "/" : currentPath.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-semibold py-1.5 transition-colors ${
                      isActive
                        ? "text-orange-600 font-bold"
                        : "text-foreground hover:text-orange-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-border flex flex-col gap-2.5">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handlePlanTrip();
                  }}
                  className="w-full h-11 rounded-lg bg-orange-600 font-bold text-white hover:bg-orange-700"
                >
                  <Sparkles size={16} className="mr-1.5" />
                  Plan Your Trip
                </Button>
                <div className="flex items-center justify-between text-xs text-muted-foreground px-1 pt-1">
                  <span>Hyderabad, India</span>
                  <a href="tel:+919000000000" className="text-orange-600 font-medium">
                    +91 90000 00000
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <BookingDialog
        open={bookingDialogOpen}
        onOpenChange={setBookingDialogOpen}
        initialTrip="Customized Trip from Hyderabad"
      />
    </>
  );
}
