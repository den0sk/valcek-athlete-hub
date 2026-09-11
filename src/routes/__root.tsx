import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { FolkRibbon, FolkRosette, FolkHeart } from "../components/folk";

const NAV = [
  { to: "/", label: "ABOUT ME" },
  { to: "/triathlon", label: "TRIATHLON" },
  { to: "/movement", label: "MOVEMENT" },
  { to: "/stories", label: "STORIES" },
  { to: "/interviews", label: "INTERVIEWS" },
  { to: "/coaching", label: "COACHING" },
  { to: "/advice", label: "ADVICE" },
  { to: "/contact", label: "CONTACT" },
] as const;

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <FolkRosette className="text-clay" size={110} />
      <h1 className="mt-6 text-5xl font-semibold">404</h1>
      <p className="mt-3 text-muted-foreground">Táto stránka sa stratila na trati.</p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-clay px-6 py-3 text-sm font-medium text-primary-foreground"
      >
        Späť na úvod
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold">Stránka sa nenačítala</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Niečo sa pokazilo. Skús to prosím znova.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-clay px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Skúsiť znova
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium"
          >
            Na úvod
          </a>
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
      { title: "VALČEK — trénerka triatlonu a pohybu" },
      {
        name: "description",
        content:
          "VALČEK — osobná stránka trénerky triatlonu a pohybu: úspechy, príbehy, rozhovory a koučing.",
      },
      { property: "og:site_name", content: "VALČEK" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="sk">
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

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <FolkRibbon className="h-1.5" />
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <FolkRosette className="text-clay" size={30} />
          <span className="font-display text-2xl font-semibold tracking-tight">
            VALČEK
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs font-semibold tracking-[0.12em] lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative py-1 text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-clay" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-clay transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
          className="rounded-full border border-border px-4 py-2 text-xs font-semibold tracking-widest lg:hidden"
        >
          {open ? "ZAVRIEŤ" : "MENU"}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-cream px-6 py-4 lg:hidden">
          <ul className="grid gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold tracking-[0.12em]"
                  activeProps={{ className: "text-clay" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <FolkRibbon className="h-2" />
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">VALČEK</p>
          <p className="mt-2 max-w-[32ch] text-sm text-muted-foreground">
            Triatlon, pohyb a tréning s dušou — s rešpektom k slovenskej tradícii
            a k tvojmu telu.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Sekcie
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-foreground/75 hover:text-clay">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Kontakt
          </p>
          <p className="mt-4 font-mono text-sm">ahoj@valcek.sk</p>
          <p className="font-mono text-sm text-muted-foreground">
            Bratislava · online celý svet
          </p>
          <FolkHeart className="mt-5 text-clay" />
        </div>
      </div>
      <div className="border-t border-border py-5 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        © {new Date().getFullYear()} VALČEK · Vyrobené s čičmianskym vzorom
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
