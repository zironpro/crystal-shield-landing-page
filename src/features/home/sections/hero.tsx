import Image from "next/image";

const propertyTypes = [
  {
    label: ["Residential", "Properties"],
    path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: ["Villa"],
    path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    label: ["Commercial", "Buildings"],
    path: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
  },
  {
    label: ["Corporate", "Offices"],
    path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1",
  },
];

// Shared card styles for the collage frames
const card =
  "relative min-h-0 rounded-[1.25rem] bg-sea-glass p-1.5 shadow-sm sm:rounded-[1.75rem] sm:p-2 lg:rounded-[2.25rem] lg:p-2.5 2xl:p-3";
const frame =
  "relative h-full w-full overflow-hidden rounded-[0.9rem] bg-line/40 sm:rounded-[1.3rem] lg:rounded-[1.75rem]";

export function Hero() {
  return (
    // Exactly one screen minus the navbar. --header-h is set on the page wrapper (see home-view.tsx).
    <section id="home" className="relative flex h-[calc(100svh-var(--header-h))] w-full items-center overflow-hidden bg-porcelain px-4 py-4 sm:px-6 sm:py-6 lg:px-12 lg:py-8 xl:px-16 2xl:px-20 2xl:py-10 min-[1920px]:px-28">
      <div className="mx-auto grid h-full w-full max-w-[2400px] grid-rows-[auto_minmax(0,1fr)] gap-4 sm:gap-5 lg:grid-cols-12 lg:grid-rows-1 lg:gap-8 2xl:gap-16">
        {/* Left column: text content, vertically centred on desktop */}
        <div className="flex flex-col items-start justify-center lg:col-span-6 xl:col-span-5">
          <div className="mb-[clamp(0.5rem,1.6vh,1.5rem)] h-1 w-14 rounded-full bg-lagoon/30 sm:w-16" />

          {/* Modern balanced heading without oversized bold weight */}
          <h1 className="text-balance text-2xl font-semibold leading-[1.18] tracking-[-0.02em] text-ink sm:text-3xl md:text-4xl lg:text-[2.75rem] 2xl:text-5xl">
            Protect Your Property from Heat, Glare and Sun Damage
          </h1>

          <p className="mt-[clamp(0.5rem,1.4vh,1rem)] text-sm font-medium tracking-tight text-ink sm:text-base lg:text-lg">
            Window Film Solutions In Abu Dhabi for Every Property
          </p>

          {/* Hidden on short screens so everything still fits without scrolling */}
          <p className="mt-3 hidden max-w-xl text-sm leading-relaxed text-soft sm:text-base lg:max-w-lg 2xl:max-w-2xl 2xl:text-lg min-[1920px]:text-xl [@media(min-height:760px)]:block">
            Protect and enhance your property with advanced Madico window film
            solutions from Crystal Shield in Abu Dhabi. Reduce solar heat,
            minimise glare, help protect interiors from UV exposure and enjoy
            greater indoor comfort with the right film for your space.
          </p>

          <ul className="mt-[clamp(0.75rem,2.4vh,2rem)] grid w-full grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4 sm:gap-x-3 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-4 [@media(max-height:620px)]:hidden">
            {propertyTypes.map(({ label, path }) => (
              <li key={label.join(" ")} className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sea-glass text-lagoon sm:h-10 sm:w-10 2xl:h-12 2xl:w-12">
                  <svg
                    className="h-5 w-5 2xl:h-6 2xl:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                  </svg>
                </div>
                <span className="text-xs font-medium leading-tight text-ink sm:text-sm 2xl:text-base">
                  {label.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-[clamp(0.75rem,3vh,2.5rem)] w-full sm:w-auto">
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-lagoon px-6 py-3 text-center text-sm font-semibold text-porcelain shadow-sm transition-all duration-200 hover:bg-lagoon-deep hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lagoon active:scale-95 sm:w-auto sm:px-8 sm:py-3.5 2xl:px-10 2xl:py-4 2xl:text-base"
            >
              <span>Explore Our Window Film Solutions</span>
              <svg
                className="h-4 w-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right column: collage stretches to fill whatever height is left */}
        <div className="relative h-full min-h-0 lg:col-span-6 xl:col-span-7">
          <div className="pointer-events-none absolute right-0 top-4 z-10 h-5 w-5 rounded-full bg-sea-glass/90 sm:h-6 sm:w-6 lg:-right-3" />
          <div className="pointer-events-none absolute -left-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-2xl bg-sea-glass/80 lg:block" />

          <div className="grid h-full grid-cols-12 grid-rows-[minmax(0,3fr)_minmax(0,2fr)] gap-3 sm:gap-4 lg:gap-5 2xl:gap-6">
            {/* Villa */}
            <div className={`${card} col-span-7`}>
              <div className={frame}>
                <Image
                  src="/hero-villa.jpg"
                  alt="Modern luxury villa with architectural sun protection window film"
                  fill
                  sizes="(max-width: 1024px) 60vw, 420px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-porcelain bg-sea-glass text-lagoon shadow-sm sm:h-12 sm:w-12 sm:border-4 lg:h-14 lg:w-14">
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path
                    strokeLinecap="round"
                    d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                  />
                </svg>
              </div>
            </div>

            {/* Skyline */}
            <div className={`${card} col-span-5`}>
              <div className={frame}>
                <Image
                  src="/hero-skyline.jpg"
                  alt="Abu Dhabi skyline commercial architecture"
                  fill
                  sizes="(max-width: 1024px) 40vw, 300px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Interior */}
            <div className={`${card} col-span-12`}>
              <div className={frame}>
                <Image
                  src="/hero-interior.jpg"
                  alt="Interior living space with panoramic UV and glare protected window film"
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -top-3 right-5 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-porcelain bg-sea-glass text-lagoon shadow-sm sm:right-8 sm:h-14 sm:w-14 sm:border-4 lg:h-16 lg:w-16">
                <svg
                  className="h-5 w-5 sm:h-7 sm:w-7"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}