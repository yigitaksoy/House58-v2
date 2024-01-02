"use client";

import { useEffect, useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { getCalApi } from "@calcom/embed-react";
import { CiCalendar } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

export default function Calendar() {
  const buttonRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const animateButton = buttonRef.current;

      if (animateButton) {
        gsap.set(animateButton, { opacity: 0, scale: 0.5 });

        ScrollTrigger.create({
          trigger: document.body,
          start: "top+=200 top",
          onEnter: () =>
            gsap.to(animateButton, {
              opacity: 1,
              scale: 1,
              duration: 0.1,
              ease: "back.inOut(1.7)",
            }),
          onLeave: () =>
            gsap.to(animateButton, {
              opacity: 0,
              scale: 0.5,
              duration: 0.1,
              ease: "back.inOut(1.7)",
            }),
          onEnterBack: () =>
            gsap.to(animateButton, {
              opacity: 1,
              scale: 1,
              duration: 0.1,
              ease: "back.inOut(1.7)",
            }),
          onLeaveBack: () =>
            gsap.to(animateButton, {
              opacity: 0,
              scale: 0.5,
              duration: 0.1,
              ease: "back.inOut(1.7)",
            }),
        });
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
      });
    })();
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        data-cal-link="house58/30"
        className="z-[999999999999] fixed md:bottom-4 bottom-4 md:right-6 right-4 flex h-11 bg-house-bluelight font-objektiv transform cursor-pointer items-center text-sm rounded-full py-5 px-6 drop-shadow-lg transition duration-300 hover:bg-house-black hover:text-white book-a-call"
      >
        <CiCalendar className="mr-2 h-5 w-5" />
        Book a call
      </button>
    </div>
  );
}
