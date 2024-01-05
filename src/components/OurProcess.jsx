import clsx from "clsx";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TimeLine from "./TimeLine";

gsap.registerPlugin(ScrollTrigger);

const OurProcess = ({ className }) => {
  return (
    <section
      id="our-process"
      className={clsx(`relative bg-house-black`, className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2>
              <span className="mb-6 block font-display font-heavy text-4xl text-house-bluelight">
                Our Process
              </span>
              <span className="sr-only"> - </span>
              <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-heavy sm:text-5xl text-white">
                Guiding you from design to launch
              </span>
            </h2>
            <div className="mt-6 text-xl">
              <p className="text-house-whitewarm">
                We will handle the entire development lifecycle of your project,
                from your website idea to the web development services needed to
                publishing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TimeLine />
    </section>
  );
};

export default OurProcess;
