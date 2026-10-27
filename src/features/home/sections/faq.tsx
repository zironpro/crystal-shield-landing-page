import type { ReactNode } from "react";
import { Accent, EMAIL, Icon, PHONE_DISPLAY, PHONE_HREF, body, container, h2, icons, sectionPad } from "./shared";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "What is the best window film for heat reduction in Abu Dhabi?",
    a: "The best film depends on your glass type, sunlight exposure and desired balance between heat rejection and natural light. Solar control films are commonly used to manage solar heat gain and glare.",
  },
  {
    q: "Can window film help reduce electricity bills?",
    a: "Suitable solar control films can reduce heat entering through windows and may lower air-conditioning demand. The actual energy savings depend on the building and its cooling system.",
  },
  {
    q: "Does window film block UV rays?",
    a: "Many architectural window films offer high UV rejection. Selected products can block up to 99% of UV rays. Check the technical specifications of the film you choose.",
  },
  {
    q: "Can window film be installed on existing windows?",
    a: "Yes, many window films are designed for existing glass. However, the glass type, condition and film compatibility should be checked before installation.",
  },
  {
    q: "Does safety window film make glass unbreakable?",
    a: "No. Safety film does not make glass unbreakable. It is designed to help hold fragments together after breakage. The level of protection depends on the film, glass and installation system.",
  },
  {
    q: "Is window film suitable for villas and apartments?",
    a: "Yes. Suitable films can help residential properties manage heat, glare and UV exposure. The recommended film depends on the windows and the homeowner's priorities.",
  },
  {
    q: "How much does window film installation cost in Abu Dhabi?",
    a: "The cost depends on the glass area, selected film, installation conditions and project requirements. Contact Crystal Shield for a quotation based on your property.",
  },
  {
    q: "How can I request a window film consultation?",
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
        to discuss your requirements and request a consultation.
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
            <h2 className={h2}>Frequently Asked Questions About Window Film in Abu Dhabi</h2>
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