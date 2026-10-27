import { Accent, body, container, h2, sectionPad } from "./shared";

export function Intro() {
  return (
    <section id="about" className={`scroll-mt-[var(--header-h)] bg-porcelain ${sectionPad}`}>
      <div className={`${container} grid gap-8 lg:grid-cols-12 lg:gap-16`}>
        <div className="lg:col-span-5">
          <Accent />
          <h2 className={h2}>Reliable Window Film Installation in Abu Dhabi</h2>
        </div>

        <div className="space-y-5 lg:col-span-7">
          <p className={`${body} text-ink sm:text-lg 2xl:text-xl`}>
            The intense sunlight in Abu Dhabi can make indoor spaces uncomfortable, increase
            cooling demands and cause furniture, flooring and displays to fade over time. Large
            glass windows can also present safety concerns when they break.
          </p>
          <p className={body}>
            Crystal Shield provides professional window film solutions designed to address these
            challenges without requiring a complete window replacement in suitable applications.
          </p>
          <p className={body}>
            From residential villas to commercial offices and specialised facilities, our goal is
            to improve comfort, protect interiors and support the long-term performance of your
            property.
          </p>
        </div>
      </div>
    </section>
  );
}