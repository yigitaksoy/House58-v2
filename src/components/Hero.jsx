"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const main = useRef();
  const h1Ref = useRef();
  const pRef = useRef();

  useIsomorphicLayoutEffect(() => {
    const moveText = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = main.current.getBoundingClientRect();
      const x = ((clientX - left - width / 2) / width) * 8;
      const y = ((clientY - top - height / 2) / height) * 15;

      gsap.to([h1Ref.current, pRef.current], {
        x,
        y,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    let ctx = gsap.context(() => {
      let animate = gsap.utils.selector(main.current)(".animate");
      let mm = gsap.matchMedia();

      // Desktop animations
      mm.add("(min-width: 800px)", () => {
        gsap.to(animate, {
          y: -50,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: animate,
            start: "40% 40%",
            end: "bottom 5%",
            scrub: true,
          },
        });
      });

      // Mobile animations
      mm.add("(max-width: 799px)", () => {
        gsap.to(animate, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: animate,
            start: "bottom 10%",
            end: "top 20%",
            scrub: 1,
            reverse: true,
            smoothChildTiming: true,
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
    <section id="hero" className="h-screen" ref={main}>
      <Container className="mt-36 sm:mt-32 md:mt-60">
        <FadeIn className="max-w-2xl pt-14">
          <h1
            ref={h1Ref}
            className="font-display text-4xl font-heavy tracking-tight text-white [text-wrap:balance] sm:text-6xl animate"
          >
            Crafting Digital Experiences in the heart of Amsterdam.
          </h1>
          <p ref={pRef} className="mt-6 text-xl text-house-white animate">
            We focus on clear design and dependable technology to develop
            easy-to-use web and e-commerce platforms.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;
