"use client";

import { useRef } from "react";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TimeLine from "@/components/ui/TimeLine";

const OurProcess = ({ className }) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      let animateTitle = gsap.utils.selector(sectionRef.current)(
        ".animate-title",
      );

      let mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        animateTitle.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: animateTitle,
                start: "top 41%",
                end: "bottom 40%",
                onEnter: () =>
                  gsap.to(animateTitle, { opacity: 1, duration: 0.6 }),
                onEnterBack: () =>
                  gsap.to(animateTitle, { opacity: 1, duration: 0.6 }),
                onLeaveBack: () =>
                  gsap.to(animateTitle, { opacity: 0, duration: 0.6 }),
              },
            },
          );
        });
      });

      mm.add("(max-width: 799px)", () => {
        animateTitle.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: animateTitle,
                start: "top 61%",
                end: "bottom 40%",
                onEnter: () =>
                  gsap.to(animateTitle, { opacity: 1, duration: 0.6 }),
                onEnterBack: () =>
                  gsap.to(animateTitle, { opacity: 1, duration: 0.6 }),
                onLeaveBack: () =>
                  gsap.to(animateTitle, { opacity: 0, duration: 0.6 }),
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="our-process"
      ref={sectionRef}
      className={clsx(`relative bg-house-black`, className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-2xl">
            <h2>
              <span className="mb-6 block font-display font-heavy text-4xl text-house-bluelight animate-title">
                Our Process
              </span>
              <span className="sr-only"> - </span>
              <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-heavy sm:text-5xl text-white animate-title">
                Guiding you from design to launch
              </span>
            </h2>
            <div className="mt-6 text-xl">
              <p className="text-house-whitewarm animate-title">
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
