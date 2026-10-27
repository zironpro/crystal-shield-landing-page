import { IconBox, SectionHeader, body, container, icons, sectionPad } from "./shared";

const services = [
  {
    title: "Matte & Acid-Etched Frosted Film",
    icon: icons.shield,
    text: "Simulate luxurious sandblasted or acid-etched glass at a fraction of the cost. Ideal for continuous privacy on bathroom windows, office cabins, and clinic consultation rooms.",
  },
  {
    title: "Decorative Patterns & Linear Manifestations",
    icon: icons.building,
    text: "Enhance glass visibility and style with geometric lines, dot matrices, and custom privacy bands that meet statutory glass manifestation safety codes in commercial workspaces.",
  },
  {
    title: "Custom Cut Logos & Graphic Manifestation",
    icon: icons.badge,
    text: "Incorporate branded corporate identity, precision-cut frosted logos, and unique custom designs directly onto conference room partitions and reception entrance glazing.",
  },
  {
    title: "Gradient & Translucent Privacy Films",
    icon: icons.sun,
    text: "Achieve seamless transitions from opaque frost to crystal-clear glass. Balances confidential seated sightlines with open, bright architectural daylighting.",
  },
  {
    title: "Dual Privacy & Solar Glare Control Film",
    icon: icons.eye,
    text: "Combine matte frosted privacy aesthetics with high UV rejection and solar glare reduction for exterior-facing windows and sunny atrium perimeters.",
  },
];

export function Services() {
  return (
    <section id="services" className={`scroll-mt-[var(--header-h)] bg-porcelain ${sectionPad} !pt-0`}>
      <div className={container}>
        <SectionHeader title="Our Frosted & Decorative Film Services" />

        {/* 3 cards on the first row, 2 wider cards on the second (desktop) */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-6 lg:gap-6 2xl:gap-8">
          {services.map(({ title, icon, text }, i) => (
            <li
              key={title}
              className={`flex flex-col gap-5 rounded-[1.75rem] bg-sea-glass p-6 shadow-sm motion-safe:transition-shadow motion-safe:duration-300 hover:shadow-md sm:p-8 lg:rounded-[2.25rem] 2xl:p-10 ${
                i < 3 ? "lg:col-span-2" : "lg:col-span-3"
              } ${i === 4 ? "sm:col-span-2" : ""}`}
            >
              <IconBox d={icon} tone="porcelain" />
              <div>
                <h3 className="text-base font-semibold tracking-[-0.01em] text-ink 2xl:text-lg">{title}</h3>
                <p className={`mt-1.5 ${body}`}>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}