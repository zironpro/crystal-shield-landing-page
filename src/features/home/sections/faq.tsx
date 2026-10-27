import type { ReactNode } from "react";
import { Accent, EMAIL, Icon, PHONE_DISPLAY, PHONE_HREF, body, container, h2, icons, sectionPad } from "./shared";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Does frosted window film provide complete two-way privacy?",
    a: "Yes. Premium frosted window films obscure vision from both sides day and night while still transmitting up to 70–80% of natural daylight into the room, making them ideal for bathrooms, offices, and meeting areas.",
  },
  {
    q: "Can frosted window films have custom patterns or company logos?",
    a: "Absolutely. We utilize precision digital cutting plotters to produce bespoke logos, company branding, linear bands, frosted gradients, and decorative motifs tailored precisely to your glass dimensions.",
  },
  {
    q: "Can frosted film be removed or replaced without damaging the glass?",
    a: "Yes. Unlike permanent chemical acid etching or sandblasting, high-grade architectural frosted films can be cleanly removed or replaced if branding changes, leases expire, or updates are needed, leaving your glass intact.",
  },
  {
    q: "Can frosted window film be installed on existing glass?",
    a: "Yes, frosted window films can be retrofitted onto virtually any flat, smooth architectural glass surface, including office partitions, shower enclosures, conference rooms, entry doors, and external windows.",
  },
  {
    q: "How durable is frosted window film in high humidity like bathrooms?",
    a: "Our architectural frosted films are engineered with water-resistant adhesives specifically designed to withstand steam, humidity, and regular glass cleaning without peeling or bubbling.",
  },
  {
    q: "Does frosted film also help with UV and solar glare?",
    a: "Yes. High-quality frosted films diffuse harsh direct glare into gentle ambient light and block up to 99% of harmful UV rays, protecting occupants and interior furnishings.",
  },
  {
    q: "How does frosted film compare in cost to acid-etched or sandblasted glass?",
    a: "Frosted window film delivers an identical high-end matte aesthetic at a fraction of the cost, requires zero glazing downtime, and provides full flexibility for future design changes.",
  },
  {
    q: "How can I request a frosted film consultation and quote in Abu Dhabi?",
    a: (
      <>
        Contact Crystal Shield Tint Insulation LLC by phone at{" "}
        <a href={PHONE_HREF} className="font-semibold text-lagoon underline-offset-4 hover:underline">
          {PHONE_DISPLAY}
        </a>{" "}
        or email{" "}
        <a href={`mailto:${EMAIL}`} className="font-semibold text-lagoon underline-offset-4 hover:underline">
          {EMAIL}
        </a>{" "}
        for glass measurement, pattern consultation, and a customized quotation.
      </>
    ),
  },
];

export function Faq() {
  return (
    <section id="faq" className={`scroll-mt-[var(--header-h)] bg-sea-glass/50 ${sectionPad}`}>
      <div className={`${container} grid gap-10 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <Accent />
            <h2 className={h2}>Frequently Asked Questions About Frosted Window Film in Abu Dhabi</h2>
          </div>
        </div>

        {/* Native <details> = accessible accordion with no JavaScript */}
        <div className="space-y-3 lg:col-span-8 2xl:space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-[1.25rem] bg-porcelain shadow-sm open:shadow-md sm:rounded-[1.5rem]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[inherit] px-5 py-4 text-left text-sm font-medium text-ink focus-visible:outline-2 focus-visible:outline-lagoon sm:px-7 sm:py-5 sm:text-base 2xl:px-9 2xl:py-6 2xl:text-lg [&::-webkit-details-marker]:hidden">
                {q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sea-glass text-lagoon motion-safe:transition-transform group-open:rotate-180">
                  <Icon d={icons.chevron} className="h-4 w-4" />
                </span>
              </summary>
              <p className={`px-5 pb-5 sm:px-7 sm:pb-6 2xl:px-9 ${body}`}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}