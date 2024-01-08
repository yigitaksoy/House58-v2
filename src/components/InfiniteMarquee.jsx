"use client";

import clsx from "clsx";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import horizontalLoop from "@/helpers/horizontalLoop";

const InfiniteMarquee = ({ texts, className, hollow }) => {
  const marqueesRef = useRef([]);
  let globalIndex = 0;

  useIsomorphicLayoutEffect(() => {
    if (marqueesRef.current.length === 0) {
      return;
    }

    marqueesRef.current.forEach((marquee, i) => {
      horizontalLoop(marquee.querySelectorAll(".word"), {
        repeat: -1,
        speed: 0.5,
        paddingRight: 16,
        reversed: i % 2 === 0,
      });
    });
  }, [texts]);

  return (
    <>
      {texts.map((text, marqueeIndex) => (
        <div
          key={marqueeIndex}
          ref={(el) => (marqueesRef.current[marqueeIndex] = el)}
          className={clsx("marquee-container", className)}
          style={{ position: "relative" }}
        >
          <div className="marquee-fade start"></div>
          {text.map((word, wordIndex) => {
            const isHollow = hollow && globalIndex % 2 === 0;
            globalIndex++;

            return (
              <div
                key={`${marqueeIndex}-${wordIndex}`}
                className={clsx("word", { "hollow-text": isHollow })}
              >
                {word}
              </div>
            );
          })}
          <div className="marquee-fade end"></div>
        </div>
      ))}
    </>
  );
};

export default InfiniteMarquee;
