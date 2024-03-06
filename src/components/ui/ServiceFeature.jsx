"use-client";

import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StylizedImage } from "@/components/ui/StylizedImage";

gsap.registerPlugin(ScrollTrigger);

const ServiceFeature = ({ title, children, sectionId, alt, image }) => {
  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let animateSection = gsap.utils.toArray(".animate-section");

      animateSection.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(section, { y: -50, opacity: 1, duration: 0.6 }),
              onEnterBack: () =>
                gsap.to(section, { opacity: 1, y: 0, duration: 0.6 }),
              onLeaveBack: () =>
                gsap.to(section, { y: 50, opacity: 0, duration: 0.6 }),
            },
          },
        );
      });
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section
      id={sectionId}
      className="mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section]  animate-section"
    >
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-2 lg:group-even/section:justify-start xl:gap-x-20 ">
          <div className="flex justify-center">
            <div className="w-[33.75rem] flex-none lg:w-[40rem]">
              <StylizedImage
                {...image}
                alt={alt}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end lg:group-even/section:justify-start opacity-80"
              />
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
            <div>
              <div
                className="font-display text-base font-semibold italic before:text-house-500 before:content-['/_'] after:text-house-500 after:content-[counter(section,decimal-leading-zero)]"
                aria-hidden="true"
              />
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-house-500 sm:text-4xl">
                {title}
              </h2>
              <div className="mt-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;
