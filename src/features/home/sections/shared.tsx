import type { ReactNode } from "react";

// Same width + side padding as the navbar and hero, so every section lines up
export const container =
  "mx-auto w-full max-w-[2400px] px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20 min-[1920px]:px-28";
export const sectionPad = "py-14 sm:py-20 lg:py-24 2xl:py-32";
export const h2 =
  "text-balance text-2xl font-semibold tracking-[-0.015em] text-ink sm:text-3xl lg:text-4xl 2xl:text-[2.6rem] 2xl:leading-[1.2]";
export const body = "text-sm leading-relaxed text-soft sm:text-[0.95rem] 2xl:text-base";

// Same pill button as the hero
export const ctaPrimary =
  "inline-flex w-full items-center justify-center gap-3 rounded-full bg-lagoon px-6 py-3 text-center text-sm font-semibold text-porcelain shadow-sm transition-all duration-200 hover:bg-lagoon-deep hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lagoon active:scale-95 sm:w-auto sm:px-8 sm:py-3.5 2xl:px-10 2xl:py-4 2xl:text-base";
export const ctaSecondary =
  "inline-flex w-full items-center justify-center gap-3 rounded-full border border-lagoon/40 bg-porcelain px-6 py-3 text-center text-sm font-semibold text-lagoon transition-all duration-200 hover:border-lagoon hover:bg-sea-glass focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lagoon active:scale-95 sm:w-auto sm:px-8 sm:py-3.5 2xl:px-10 2xl:py-4 2xl:text-base";

export const PHONE_DISPLAY = "+971 50 385 8785";
export const PHONE_HREF = "tel:+971503858785";
export const EMAIL = "Enquiry@crystalshield.ae";

export const icons = {
  sun: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  shield:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  eye: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  building:
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1",
  lock: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  badge:
    "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  clipboard:
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  phone:
    "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z",
  mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  chevron: "M19 9l-7 7-7-7",
  pin: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
};

export function Icon({ d, className = "h-5 w-5 2xl:h-6 2xl:w-6" }: { d: string; className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

// Rounded icon tile, same as the property-type icons in the hero
export function IconBox({ d, tone = "glass" }: { d: string; tone?: "glass" | "porcelain" }) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lagoon 2xl:h-14 2xl:w-14 ${
        tone === "glass" ? "bg-sea-glass" : "bg-porcelain"
      }`}
    >
      <Icon d={d} />
    </div>
  );
}

export function Accent() {
  return <div className="mb-5 h-1 w-14 rounded-full bg-lagoon/30 sm:w-16" />;
}

export function SectionHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <div className="max-w-3xl 2xl:max-w-4xl">
      <Accent />
      <h2 className={h2}>{title}</h2>
      {children && <p className={`mt-4 ${body}`}>{children}</p>}
    </div>
  );
}