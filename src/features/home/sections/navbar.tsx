"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Window Films", href: "/window-films" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape, and lock it open only while visible
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the menu if the screen grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    // Height comes from --header-h (set on the page wrapper) so the hero can subtract it exactly
    <header className="sticky top-0 z-50 h-[var(--header-h)] w-full shrink-0 border-b border-line bg-porcelain">
      <nav
        aria-label="Main"
        className="mx-auto flex h-full max-w-[2400px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 min-[1920px]:px-28"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lagoon"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lagoon text-porcelain sm:h-10 sm:w-10">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </span>
          <span className="text-base font-extrabold tracking-tight text-ink sm:text-lg 2xl:text-xl">
            Crystal Shield
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex xl:gap-2 2xl:gap-3">
          {links.map(({ label, href }, i) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={i === 0 ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-lagoon xl:px-4 2xl:px-5 2xl:text-base ${
                  i === 0
                    ? "bg-sea-glass text-lagoon"
                    : "text-soft hover:bg-sea-glass/60 hover:text-ink"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side: CTA + menu button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-lagoon px-5 py-2.5 text-sm font-semibold text-porcelain shadow-sm transition-all duration-200 hover:bg-lagoon-deep hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lagoon active:scale-95 sm:inline-flex 2xl:px-7 2xl:py-3 2xl:text-base"
          >
            Get a Free Quote
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-sea-glass text-lagoon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lagoon lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu: overlays the page below the header, so it never changes the page height */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-porcelain px-4 pb-5 pt-2 shadow-md sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map(({ label, href }, i) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={i === 0 ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-base font-medium ${
                    i === 0 ? "bg-sea-glass text-lagoon" : "text-ink hover:bg-sea-glass/60"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex w-full items-center justify-center rounded-full bg-lagoon px-6 py-3 text-sm font-semibold text-porcelain shadow-sm hover:bg-lagoon-deep sm:hidden"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}