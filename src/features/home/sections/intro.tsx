import { Accent, body, container, h2, sectionPad } from "./shared";

export function Intro() {
  return (
    <section id="about" className={`scroll-mt-[var(--header-h)] bg-porcelain ${sectionPad}`}>
      <div className={`${container} grid gap-8 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <Accent />
          <h2 className={h2}>Precision Frosted & Decorative Glass Film in Abu Dhabi</h2>
        </div>

        <div className="space-y-5 lg:col-span-7">
          <p className={`${body} text-ink sm:text-lg 2xl:text-xl`}>
            Modern commercial offices, healthcare facilities, and private residences require flexible
            privacy without blocking natural illumination or replacing architectural glass with costly
            sandblasted panels.
          </p>
          <p className={body}>
            Crystal Shield provides premium frosted, translucent, and decorative window film solutions
            engineered to provide tailored privacy, soften harsh light, and elevate your interior aesthetic.
          </p>
          <p className={body}>
            From full-coverage matte frost to contemporary patterned bands, gradient privacy transitions,
            and custom corporate logo manifestations, our certified team delivers seamless, bubble-free installations
            backed by industry-leading film technology.
          </p>
        </div>
      </div>
    </section>
  );
}