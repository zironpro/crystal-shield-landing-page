import { Icon, PHONE_DISPLAY, PHONE_HREF, SectionHeader, body, container, ctaPrimary, ctaSecondary, EMAIL, icons, sectionPad } from "./shared";

const steps = [
  { title: "Design & Privacy Consultation", text: "Discuss your privacy level, decorative patterns, custom cut logos, or glass manifestation requirements." },
  { title: "Site Survey & Measurement", text: "We inspect your glass partitions, take accurate laser measurements, and evaluate lighting conditions." },
  { title: "Custom Mockups & Film Selection", text: "Choose from matte frosted, etched vinyl, gradient, or branded patterns with digital visual proofs." },
  { title: "Clean Room Precision Installation", text: "Our technicians thoroughly clean, decontaminate, and seamlessly apply the film with pinpoint alignment." },
  { title: "Quality Check & Handover", text: "Detailed inspection of edges, clarity, and bubble-free adhesion, accompanied by care guidelines." },
];

export function Process() {
  return (
    <section id="process" className={`scroll-mt-[var(--header-h)] bg-sea-glass/50 ${sectionPad}`}>
      <div className={container}>
        <SectionHeader title="Our Frosted Film Installation Process" />

        {/* Numbers are fine here: this really is a sequence */}
        <ol className="mt-10 grid gap-y-6 lg:mt-14 lg:grid-cols-5 lg:gap-x-6 2xl:gap-x-10">
          {steps.map(({ title, text }, i) => (
            <li
              key={title}
              className="relative flex gap-4 before:absolute before:bottom-[-1.5rem] before:left-5 before:top-11 before:w-px before:bg-lagoon/25 last:before:hidden lg:flex-col lg:gap-5 lg:before:bottom-auto lg:before:left-14 lg:before:right-[-1.5rem] lg:before:top-5 lg:before:h-px lg:before:w-auto 2xl:before:right-[-2.5rem]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lagoon text-sm font-bold text-porcelain 2xl:h-12 2xl:w-12 2xl:text-base">
                {i + 1}
              </span>
              <div>
                <h3 className="text-sm font-semibold tracking-[-0.01em] text-ink sm:text-base 2xl:text-lg">{title}</h3>
                <p className={`mt-1 text-xs leading-relaxed text-soft sm:text-sm 2xl:text-[0.95rem]`}>{text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Consultation call to action */}
        <div id="contact" className="mt-12 scroll-mt-[var(--header-h)] rounded-[2rem] bg-porcelain p-7 shadow-sm sm:p-10 lg:mt-20 lg:rounded-[2.5rem] lg:p-14 2xl:p-16">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-balance text-2xl font-semibold tracking-[-0.015em] text-ink sm:text-3xl lg:text-4xl">
                Book Your Frosted Film Consultation
              </h2>
              <p className={`mt-3 ${body}`}>
                Contact Crystal Shield Tint Insulation LLC to explore frosted, etched, and decorative glass
                designs for your office or residence in Abu Dhabi.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-5 lg:justify-end">
              <a href={PHONE_HREF} className={ctaPrimary}>
                <Icon d={icons.phone} className="h-4 w-4" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className={ctaSecondary}>
                <Icon d={icons.mail} className="h-4 w-4" />
                <span>Email us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}