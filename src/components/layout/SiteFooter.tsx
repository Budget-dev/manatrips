import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ManaTripsLogo } from "@/components/brand/ManaTripsLogo";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-slate-950 text-slate-200 px-4 pb-8 pt-12 sm:px-6 sm:pb-10 sm:pt-16">
      <div className="mx-auto max-w-[1280px]">
        {/* Top 4-Column Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="lg:col-span-1.5 flex flex-col gap-3">
            <Link to="/" className="inline-block" aria-label="Mana Trips Homepage">
              <ManaTripsLogo variant="light" size="md" />
            </Link>
            <p className="mt-2 text-xs leading-relaxed text-slate-400 max-w-[280px]">
              Budget-friendly tours, thoughtfully planned weekend getaways, and memorable travel
              adventures departing from Hyderabad.
            </p>
            <div className="mt-3 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-500 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-orange-500 shrink-0" />
                <a
                  href="mailto:hello@manatrips.in"
                  className="hover:text-orange-400 transition-colors"
                >
                  hello@manatrips.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-orange-500 shrink-0" />
                <a href="tel:+919000000000" className="hover:text-orange-400 transition-colors">
                  +91 90000 00000
                </a>
              </div>
            </div>
          </div>

          {/* 1. Explore */}
          <div>
            <h3 className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-100">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/discover" className="hover:text-orange-400 transition-colors">
                  Discover
                </Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-orange-400 transition-colors">
                  Tours & Packages
                </Link>
              </li>
              <li>
                <Link to="/travel-styles" className="hover:text-orange-400 transition-colors">
                  Travel Styles
                </Link>
              </li>
              <li>
                <Link to="/travel-guides" className="hover:text-orange-400 transition-colors">
                  Travel Guides & Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Travel Categories */}
          <div>
            <h3 className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-100">
              Travel
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/destinations" className="hover:text-orange-400 transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link to="/weekend-getaways" className="hover:text-orange-400 transition-colors">
                  Weekend Getaways
                </Link>
              </li>
              <li>
                <Link to="/family-trips" className="hover:text-orange-400 transition-colors">
                  Family Trips
                </Link>
              </li>
              <li>
                <Link to="/group-trips" className="hover:text-orange-400 transition-colors">
                  Group Trips
                </Link>
              </li>
              <li>
                <Link to="/customized-tours" className="hover:text-orange-400 transition-colors">
                  Customized Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Company & Careers */}
          <div>
            <h3 className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-100">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-orange-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-orange-400 transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Support & Policies */}
          <div>
            <h3 className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-100">
              Support & Policies
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/faq" className="hover:text-orange-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/booking-help" className="hover:text-orange-400 transition-colors">
                  Booking Help & Process
                </Link>
              </li>
              <li>
                <Link to="/cancellation-policy" className="hover:text-orange-400 transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-orange-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Note Box */}
        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-orange-500 shrink-0" />
            <span>
              Prices shown on Mana Trips are transparent starting estimates per person. Exact quotes
              are customized based on traveler count, seasonal dates, and room selection.
            </span>
          </div>
          <span className="shrink-0 text-slate-500 text-[11px]">Based in Hyderabad, India</span>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Mana Trips. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <span>·</span>
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link to="/cancellation-policy" className="hover:text-slate-300 transition-colors">
              Cancellations
            </Link>
            <span>·</span>
            <Link to="/support" className="hover:text-slate-300 transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
