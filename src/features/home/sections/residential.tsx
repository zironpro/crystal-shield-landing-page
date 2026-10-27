import Image from "next/image";
import { body, container, h2, sectionPad } from "./shared";

const text =
  "Frosted window film provides ideal 24/7 visual privacy for bathroom shower screens, street-facing ground windows, front entrance sidelights, and glass balustrades — creating modern elegance and blocking unwanted views while filling your living space with bright, soft diffused light.";

export function Residential() {
  return (
    <section id="residential" className={`scroll-mt-[var(--header-h)] bg-porcelain ${sectionPad}`}>
      <div className={container}>
        <div className="overflow-hidden rounded-[2rem] bg-lagoon sm:rounded-[2.5rem]">
          <div className="grid lg:grid-cols-12">
            <div className="relative p-7 sm:p-12 lg:col-span-7 lg:p-16 2xl:p-20">
              <h2 className={`${h2} !text-porcelain`}>Why Choose Frosted Film for Residential & Villa Spaces?</h2>
              <p className={`mt-6 ${body} !text-porcelain/90 sm:!text-lg 2xl:!text-xl`}>{text}</p>
            </div>
            <div className="relative min-h-[260px] sm:min-h-[320px] lg:col-span-5 lg:min-h-full">
              <Image
                src="/images/frosted-film.png"
                alt="Elegant translucent frosted glass architectural exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}