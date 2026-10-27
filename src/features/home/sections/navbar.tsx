"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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
        {/* Brand Group: Crystal Shield Logo + Madico Authorized Partner Logo */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          <a
            href="#home"
            className="group flex items-center gap-2 rounded-lg py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lagoon"
            onClick={() => setOpen(false)}
          >
            <span className="text-xl font-bold tracking-tight text-ink sm:text-[1.35rem] 2xl:text-2xl">
              Crystal Shield
            </span>
            <div className="relative h-7 w-7 transition-transform duration-200 group-hover:scale-105 sm:h-8 sm:w-8 2xl:h-9 2xl:w-9">
              <Image
                src="/crystal_sheild_logo.png"
                alt="Crystal Shield emblem logo"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Vertical Divider */}
          <span className="h-6 w-px bg-line" aria-hidden="true" />

          {/* Madico Brand Logo SVG */}
          <div className="flex items-center" title="Madico Authorized Partner">
            <svg
              className="h-4.5 w-auto text-ink/85 transition-opacity hover:opacity-100 sm:h-5 2xl:h-6"
              viewBox="0 0 175 49"
              fill="currentColor"
              aria-label="Madico logo"
            >
              <path d="M85.797.774H75.032c-.752 0-1.238.576-1.238 1.22V47.22c0 .645.589 1.273 1.238 1.273h10.492c5.498-.207 11.354-4.067 11.593-9.768V10.541c-.299-6.096-5.13-9.329-11.32-9.767Zm3.415 16.714V35.2c.068 4.549-3.347 5.013-3.347 5.013-1.272.275-3.688.954-4.294-.869V10.111c.598-1.814 3.022-1.143 4.294-.868 0 0 3.415.464 3.347 5.013v3.232ZM152.377 9.312c.358 0 3.568.387 3.893 15.003.111 4.875-.88 12.897-3.415 15.477-.461.472-.802.567-1.204.567-.256 0-.503-.034-.896-.438-1.998-2.064-3.21-8.538-3.073-16.491v-.138c.111-8.074 2.083-13.955 4.686-13.98h.009Zm-13.275 13.971c-.128 7.61.726 17.72 5.506 22.665 1.904 1.969 4.747 3.026 7.393 3.052 2.792.026 4.926-1.057 6.958-3.138 5.916-6.045 5.933-19.174 5.873-21.745-.128-5.829-.52-23.575-12.558-23.455-8.178.086-12.984 8.289-13.181 22.501v.112l.009.008ZM39.646 47.367c0 .644-.461 1.203-.999 1.203h-5.549c-.487 0-1.059-.61-1.059-1.203V14.117c.086-.361-.256-5.417-4.055-5.365-4.072.06-4.2 4.101-4.2 4.101l-.017 34.504c0 .645-.461 1.204-.999 1.204h-5.83c-.487 0-1.06-.61-1.06-1.204l.026-34.512s-.128-4.041-4.2-4.102c-3.799-.051-4.14 5.004-4.046 5.366v33.17c0 .645-.47 1.204-1.008 1.204H1.06c-.487 0-1.059-.61-1.059-1.203l.026-36.396C.538 5.383 2.68 1.72 7.658.516c4.465-1.47 9.612.327 12.182 3.86C22.427.844 27.566-.953 32.03.517c4.978 1.212 7.12 4.867 7.641 10.37l-.017 36.472-.008.009ZM53.484 27.247V12.09c.035-1.806 1.819-3 3.45-3.027.802-.017 1.672.336 2.27.912.47.456.709.971.717 1.547v15.735h-6.437v-.009Zm14.3-15.812c-.051-2.949-.52-5.648-2.63-7.695C62.91 1.565 59.853.353 56.763.413 50.215.542 45.767 5.64 45.672 12.01v35.347c0 .593.572 1.204 1.059 1.204h5.78c.537 0 .998-.55.998-1.204l-.034-13.628h6.437c0 4.652.008 13.628.008 13.628 0 .593.572 1.204 1.059 1.204h5.822c.538 0 .999-.55.999-1.204l-.017-35.931v.008ZM110.904 2.02c0-.593-.572-1.195-1.058-1.195h-5.737c-.538 0-.999.55-.999 1.196l-.017 45.345c0 .594.572 1.204 1.058 1.204h5.754c.538 0 .999-.55.999-1.204V2.021ZM133.553 40.067c.64 0 1.195.473 1.195 1.006v6.594c0 .49-.171 1.066-.768 1.066l-.291.026c-3.397-.266-9.339-1.599-13.3-7.024-5.865-8.03-4.32-25.184-1.247-31.426 3.714-7.549 10.689-9.208 14.343-9.552l.042-.026c.649 0 1.195.473 1.195 1.006v6.612c0 .49-.606 1.066-1.195 1.066l-.042.043c-2.16.335-5.046 1.427-6.651 4.686-2.006 4.075-3.082 17.591.47 22.458 1.767 2.416 4.2 3.258 6.181 3.49l.076-.034-.008.009ZM170.458 1.281c.76 0 1.511.198 2.237.593a4.199 4.199 0 0 1 1.699 1.694c.41.731.606 1.496.606 2.296 0 .8-.196 1.548-.598 2.278a4.212 4.212 0 0 1-1.681 1.694 4.553 4.553 0 0 1-4.525 0 4.32 4.32 0 0 1-1.682-1.694c-.401-.73-.606-1.487-.606-2.278 0-.791.205-1.565.615-2.296.41-.73.973-1.298 1.699-1.694.725-.395 1.468-.593 2.236-.593Zm0 .757c-.64 0-1.263.163-1.861.498-.606.327-1.075.8-1.417 1.41a3.894 3.894 0 0 0-.512 1.918c0 .662.171 1.29.504 1.9a3.54 3.54 0 0 0 1.408 1.41 3.835 3.835 0 0 0 1.887.507c.657 0 1.28-.172 1.887-.507a3.521 3.521 0 0 0 1.4-1.41 3.88 3.88 0 0 0 .503-1.9c0-.662-.17-1.298-.512-1.917a3.505 3.505 0 0 0-1.417-1.41c-.606-.327-1.229-.5-1.861-.5h-.009Zm-1.989 6.354V3.465h1.682c.572 0 .99.043 1.246.138.256.094.461.249.615.472.154.224.231.465.231.723 0 .36-.129.67-.385.937-.256.266-.597.413-1.016.447.171.069.308.163.419.258.196.198.435.516.725.98l.598.963h-.965l-.435-.774c-.342-.61-.615-.989-.828-1.143-.145-.112-.359-.172-.632-.172h-.461v2.09h-.785l-.009.008Z" />
            </svg>
          </div>
        </div>

        {/* Desktop links to page sections */}
        <ul className="hidden items-center gap-1 lg:flex xl:gap-2 2xl:gap-3">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-soft transition-colors hover:bg-sea-glass/70 hover:text-ink focus-visible:outline-2 focus-visible:outline-lagoon xl:px-4 2xl:px-5 2xl:text-base"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: CTA + menu button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-lagoon px-5 py-2.5 text-sm font-semibold text-porcelain shadow-sm transition-all duration-200 hover:bg-lagoon-deep hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lagoon active:scale-95 sm:inline-flex 2xl:px-7 2xl:py-3 2xl:text-base"
          >
            Get a Free Quote
          </a>

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

      {/* Mobile menu: links to sections */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-porcelain px-4 pb-5 pt-2 shadow-md sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-sea-glass/60"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex w-full items-center justify-center rounded-full bg-lagoon px-6 py-3 text-sm font-semibold text-porcelain shadow-sm hover:bg-lagoon-deep sm:hidden"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  );
}