import { body, container, h2, sectionPad } from "./shared";

const text =
  "Residential window film helps keep your home cooler, reduces harsh sunlight and glare, protects furniture and flooring from UV damage, and adds an extra layer of glass safety while maintaining your home's natural light and appearance.";

export function Residential() {
  return (
    <section id="residential" className={`scroll-mt-[var(--header-h)] bg-porcelain ${sectionPad}`}>
      <div className={container}>
        <div className="rounded-[2rem] bg-lagoon p-7 sm:rounded-[2.5rem] sm:p-12 lg:p-16 2xl:p-20">

          <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-16">
            <h2 className={`${h2} !text-porcelain lg:col-span-5`}>Why Choose Residential Window Film?</h2>
            <p className={`${body} !text-porcelain/90 sm:!text-lg lg:col-span-7 2xl:!text-xl`}>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}