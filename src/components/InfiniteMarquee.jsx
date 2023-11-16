"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import horizontalLoop from "@/helpers/horizontalLoop";

gsap.registerPlugin(ScrollTrigger);

const InfiniteMarquee = ({ texts, className }) => {
  const marqueesRef = useRef([]);
  let globalIndex = 0;

  useIsomorphicLayoutEffect(() => {
    const timer = setTimeout(() => {
      const loops = marqueesRef.current.map((marquee, i) => {
        return horizontalLoop(marquee.querySelectorAll(".word"), {
          repeat: -1,
          speed: 1,
          paddingRight: 16,
          reversed: i % 2 !== 0,
        });
      });

      ScrollTrigger.create({
        trigger: marqueesRef.current[0],
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const scrollFactor = self.direction === 1 ? 1 : -1;
          loops.forEach((loop, i) => {
            gsap.to(loop, {
              timeScale: (i % 3 !== 0 ? -1 : 1) * scrollFactor,
              overwrite: true,
            });
          });
        },
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      {texts.map((text, marqueeIndex) => (
        <div
          key={marqueeIndex}
          ref={(el) => (marqueesRef.current[marqueeIndex] = el)}
          className={clsx("marquee-container", className)}
        >
          {text.map((word, wordIndex) => {
            const isHollow = globalIndex % 2 === 0;
            globalIndex++; // Increment the global index for the next word

            return (
              <div
                key={`${marqueeIndex}-${wordIndex}`}
                className={clsx("word", { "hollow-text": isHollow })}
              >
                {word}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default InfiniteMarquee;
