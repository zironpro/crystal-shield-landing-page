import { Faq } from "./sections/faq";
import { Footer } from "./sections/footer";
import { Hero } from "./sections/hero";
import { Intro } from "./sections/intro";
import { Navbar } from "./sections/navbar";
import { Process } from "./sections/process";
import { Residential } from "./sections/residential";
import { ServiceArea } from "./sections/service-area";
import { Services } from "./sections/services";
import { WhyChoose } from "./sections/why-choose-us";

export function HomeView() {
  return (
    // --header-h is shared by the sticky navbar and the hero (100svh minus this),
    // so the first screen is always navbar + hero; the rest of the page scrolls normally.
    <div className="flex min-h-svh flex-col bg-porcelain [--header-h:4rem] sm:[--header-h:4.25rem] lg:[--header-h:4.5rem] 2xl:[--header-h:5.25rem]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Services />
        <WhyChoose />
        <Residential />
        <Process />
        <ServiceArea />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}