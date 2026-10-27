import { Accent, IconBox, body, container, h2, icons } from "./shared";

export function ServiceArea() {
  return (
    <section className="bg-porcelain py-12 sm:py-16 lg:py-20 2xl:py-24">
      <div className={`${container} flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 lg:gap-12`}>
        <IconBox d={icons.pin} />
        <div className="max-w-4xl 2xl:max-w-5xl">
          <Accent />
          <h2 className="text-balance text-2xl font-semibold tracking-[-0.015em] text-ink sm:text-3xl lg:text-4xl">
            Frosted & Decorative Window Film Services in Abu Dhabi
          </h2>
          <p className={`mt-3 ${body}`}>
            Crystal Shield provides premier frosted glass and decorative window film installations across Abu Dhabi,
            serving corporate towers, government entities, medical centers, commercial spaces, and luxury residences.
          </p>
        </div>
      </div>
    </section>
  );
}