import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  ScrollRestoration,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <span className="text-xs font-semibold tracking-wider text-orange-600 uppercase">
          404 Destination Unreached
        </span>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          The trail you are looking for does not exist or has been relocated. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700"
          >
            Return to Home
          </Link>
          <Link
            to="/tours"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Browse Tours
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We experienced an unexpected issue loading this page. You can try refreshing or returning
          to our homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mana Trips — Budget Friendly Tours & Adventures | Hyderabad, India" },
      {
        name: "description",
        content:
          "Mana Trips offers curated, budget-friendly tours, weekend getaways, family packages, and customized India trips from Hyderabad. Explore Goa, Kashmir, Kerala, Rajasthan and beyond.",
      },
      { name: "author", content: "Mana Trips" },
      { name: "theme-color", content: "#EA580C" },
      { property: "og:title", content: "Mana Trips — Budget Friendly Tours & Adventures" },
      {
        property: "og:description",
        content:
          "Thoughtfully planned tours from Hyderabad. Weekend getaways, family vacations, group trips and customized travel across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mana Trips" },
      { property: "og:url", content: "https://manatrips.in" },
      { property: "og:image", content: "https://manatrips.in/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mana Trips — Budget Friendly Tours & Adventures" },
      {
        name: "twitter:description",
        content:
          "Curated trips departing from Hyderabad. Affordable, verified stays, and memorable adventures across India.",
      },
      { name: "twitter:image", content: "https://manatrips.in/og-image.jpg" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://manatrips.in",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", href: "/favicon.png", sizes: "64x64", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Inter+Tight:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollRestoration />
      <div key={location.pathname} className="page-transition-container w-full flex-1">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
