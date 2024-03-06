"use client";

import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";

const ServicesIntro = () => {
  const main = useRef();
  const h1Ref = useRef();
  const p1Ref = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const moveText = (event) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } =
          main.current.getBoundingClientRect();
        const x = ((clientX - left - width / 2) / width) * 8;
        const y = ((clientY - top - height / 2) / height) * 15;

        gsap.to([h1Ref.current, p1Ref.current], {
          x,
          y,
          duration: 0.5,
          ease: "power1.out",
        });
      };

      let mm = gsap.matchMedia();
      let animate = gsap.utils.selector(main.current)(".animate");
      let animateTitle = gsap.utils.selector(main.current)(".animate-title");

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

      main.current.addEventListener("mousemove", moveText);

      return () => {
        mm.revert();
        main.current.removeEventListener("mousemove", moveText);
      };
    },
    { scope: main },
  );

  return (
    <section id="services-intro" className="h-auto mb-32" ref={main}>
      <Container className="mt-36 sm:mt-32 md:mt-60">
        <FadeIn className="max-w-2xl pt-14">
          <h1
            ref={h1Ref}
            className="font-display text-4xl font-heavy  text-white [text-wrap:balance] sm:text-6xl animate-title"
          >
            Elevating ideas through strategic creativity.
          </h1>
          <div className="max-w-2xl">
            <p ref={p1Ref} className="mt-6 text-xl text-house-white animate">
              Blending innovative design with reliable technology, we create
              intuitive and engaging digital experiences.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default ServicesIntro;
