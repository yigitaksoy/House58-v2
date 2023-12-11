"use client";

import { useRef } from "react";
import { Container } from "@/components/Container";
import { FadeIn } from "./FadeIn";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import InfiniteMarquee from "@/components/InfiniteMarquee";

gsap.registerPlugin(ScrollTrigger);

const texts = [
  [
    "Web Design",
    "E-commerce",
    "Web Development",
    "Wordpress",
    "Maintanence",
    "Shopify",
    "Backend",
    "Branding",
  ],
  [
    "UX/UI Design",
    "Optimization",
    "Redesigns",
    "Functionality",
    "Landing Pages",
    "Applications",
  ],
];

const ServicesIntro = () => {
  const main = useRef();
  const h1Ref = useRef();

  useIsomorphicLayoutEffect(() => {
    const moveText = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = main.current.getBoundingClientRect();
      const x = ((clientX - left - width / 2) / width) * 8;
      const y = ((clientY - top - height / 2) / height) * 15;

      gsap.to([h1Ref.current], {
        x,
        y,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    // Create a GSAP context
    let ctx = gsap.context(() => {
      let animate = gsap.utils.selector(main.current)(".animate");
      let animateTitle = gsap.utils.selector(main.current)(".animate-title");
      let mm = gsap.matchMedia();

      // Media query for screens wider than 800px
      mm.add("(min-width: 800px)", () => {
        gsap.to(animate, {
          y: -50,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: animate,
            start: "40% 40%",
            end: "bottom 25%",
            scrub: true,
          },
        });
        gsap.to(animateTitle, {
          y: -50,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: animateTitle,
            start: "40% 40%",
            end: "bottom 10%",
            scrub: true,
          },
        });
      });

      mm.add("(max-width: 799px)", () => {
        gsap.to(animate, {
          y: -10,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: animate,
            start: "bottom 40%",
            end: "top 25%",
            scrub: 1,
            reverse: true,
            smoothChildTiming: true,
          },
        });
        gsap.to(animateTitle, {
          y: -20,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: animateTitle,
            start: "40% 40%",
            end: "bottom 10%",
            scrub: true,
          },
        });
      });
    }, main.current);

    ctx.add("moveText", moveText);

    main.current.addEventListener("mousemove", (e) => ctx.moveText(e));

    // Cleanup
    return () => {
      ctx.revert();
      main.current.removeEventListener("mousemove", moveText);
    };
  }, []);

  return (
    <section id="services-intro" className="h-auto" ref={main}>
      <Container className="mt-36 sm:mt-32 md:mt-60">
        <FadeIn className="max-w-2xl pt-14">
          <h1
            ref={h1Ref}
            className="text-4xl font-heavy tracking-tight text-white [text-wrap:balance] sm:text-6xl md:leading-[4.5rem] animate-title"
          >
            Designing standout solutions using sound strategic thinking.
          </h1>
        </FadeIn>
        <div className="mt-32">
          <InfiniteMarquee
            className="text-white md:text-6xl text-3xl md:py-5 py-3 font-heavy animate"
            texts={texts}
            hollow
          />
        </div>
      </Container>
    </section>
  );
};

export default ServicesIntro;
