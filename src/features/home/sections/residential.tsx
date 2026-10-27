import { body, container, h2, sectionPad } from "./shared";

const text =
  "Residential window film helps keep your home cooler, reduces harsh sunlight and glare, protects furniture and flooring from UV damage, and adds an extra layer of glass safety while maintaining your home's natural light and appearance.";

export function Residential() {
  return (
    <section id="residential" className={`scroll-mt-[var(--header-h)] bg-porcelain ${sectionPad}`}>
      <div className={container}>
        <div className="relative overflow-hidden rounded-[2rem] bg-lagoon p-7 sm:rounded-[2.5rem] sm:p-12 lg:p-16 2xl:p-20">
          {/* Decorative circles, same shapes as the hero collage */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-porcelain/10 sm:h-48 sm:w-48" />
          <div className="pointer-events-none absolute -bottom-6 right-1/3 h-16 w-16 rounded-full bg-porcelain/10" />

          <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-16">
            <h2 className={`${h2} !text-porcelain lg:col-span-5`}>Why Choose Residential Window Film?</h2>
            <p className={`${body} !text-porcelain/90 sm:!text-lg lg:col-span-7 2xl:!text-xl`}>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}