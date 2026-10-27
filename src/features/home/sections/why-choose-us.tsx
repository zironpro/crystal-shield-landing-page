import Image from "next/image";
import { Accent, container, h2, sectionPad } from "./shared";

const reasons = [
  {
    title: "Solutions tailored to Abu Dhabi's climate",
    icon: (
      // Sun icon
      <svg
        className="h-5 w-5 2xl:h-6 2xl:w-6"
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
    ),
    text: "Our recommendations consider intense sunlight and heat exposure in the UAE.",
  },
  {
    title: "Madico-backed film solutions",
    icon: (
      // Layers / film stack icon
      <svg
        className="h-5 w-5 2xl:h-6 2xl:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        />
      </svg>
    ),
    text: "Window film solutions powered by Madico technology for architectural, safety and specialist applications.",
  },
  {
    title: "Professional installation",
    icon: (
      // Tool / wrench icon
      <svg
        className="h-5 w-5 2xl:h-6 2xl:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        />
      </svg>
    ),
    text: "Careful preparation, accurate application and a clean finish.",
  },
  {
    title: "Quality-focused approach",
    icon: (
      // Gear / settings badge icon
      <svg
        className="h-5 w-5 2xl:h-6 2xl:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    text: "ISO 9001:2015 and ISO 14001 support our quality-management and environmental-management credentials.",
  },
];

export function WhyChoose() {
  return (
    <section id="why-us" className={`scroll-mt-[var(--header-h)] bg-porcelain ${sectionPad}`}>
      <div className={container}>
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column: Rounded Architectural Pictorial Image Card */}
          <div className="relative min-h-[340px] w-full overflow-hidden rounded-[2rem] bg-sea-glass p-2 shadow-sm sm:min-h-[420px] sm:rounded-[2.5rem] sm:p-3 lg:col-span-5 lg:min-h-[500px] xl:col-span-5 xl:min-h-[540px]">
            <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[1.6rem] bg-line/40 sm:rounded-[2.1rem]">
              <Image
                src="/why-choose-building.jpg"
                alt="Architectural building with Crystal Shield high performance window film"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Title, Intro text, 2x2 Feature Grid, and ISO Badges */}
          <div className="flex flex-col justify-between lg:col-span-7 xl:col-span-7">
            <div>
              <Accent />

              <h2 className={h2}>Why Choose Crystal Shield Tint Insulation LLC?</h2>

              <p className="mt-4 text-sm leading-relaxed text-soft sm:text-[0.95rem] 2xl:text-base">
                Choosing the right window film involves more than selecting a shade. The film must
                suit the glass, the building&apos;s exposure to sunlight and the outcome you want to
                achieve.
              </p>

              {/* 2x2 Feature Grid with circular icon containers matching design */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-10 lg:gap-8">
                {reasons.map(({ title, icon, text }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sea-glass text-lagoon shadow-sm sm:h-12 sm:w-12 2xl:h-14 2xl:w-14">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-[-0.01em] text-ink sm:text-[0.95rem] 2xl:text-base">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-soft sm:text-sm">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom ISO certifications */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line/60 pt-5 text-sm sm:gap-4 sm:pt-6">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-sea-glass/50 px-4 py-2 sm:px-5 sm:py-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sea-glass text-lagoon">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
                <span className="text-xs font-semibold text-ink sm:text-sm">
                  ISO 9001:2015 Certified
                </span>
              </div>

              <span className="hidden text-sm font-bold text-soft sm:inline-block">•</span>

              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-sea-glass/50 px-4 py-2 sm:px-5 sm:py-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sea-glass text-lagoon">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
                <span className="text-xs font-semibold text-ink sm:text-sm">
                  ISO 14001 Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}