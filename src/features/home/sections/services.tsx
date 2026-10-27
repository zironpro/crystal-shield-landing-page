import { IconBox, SectionHeader, body, container, icons, sectionPad } from "./shared";

const services = [
  {
    title: "Solar Control Window Film",
    icon: icons.sun,
    text: "Reduce solar heat gain and harsh sunlight entering through glass. Solar control films can improve indoor comfort, reduce glare and help lower air-conditioning demand, depending on the film and building.",
  },
  {
    title: "Safety and Security Window Film",
    icon: icons.shield,
    text: "Add a protective layer to suitable glass surfaces. Safety and security films are designed to help hold broken glass fragments together and may delay forced entry when installed as part of an appropriate system.",
  },
  {
    title: "UV Protection Window Film",
    icon: icons.eye,
    text: "Help protect furniture, flooring, curtains and merchandise from sun-related fading. Selected window films can reject up to 99% of UV rays while maintaining a bright interior.",
  },
  {
    title: "Commercial Window Film Installation",
    icon: icons.building,
    text: "Improve comfort in offices, retail stores, schools and other commercial buildings. Our solutions can help manage glare, sunlight and glass safety requirements according to each property's needs.",
  },
  {
    title: "Blast Mitigation Window Film",
    icon: icons.lock,
    text: "For projects with elevated security requirements, specialist film and attachment systems can help mitigate hazards from flying glass. The right solution depends on the glazing system, risk assessment and project specifications.",
  },
];

export function Services() {
  return (
    <section id="services" className={`scroll-mt-[var(--header-h)] bg-porcelain ${sectionPad} !pt-0`}>
      <div className={container}>
        <SectionHeader title="Our window film services" />

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