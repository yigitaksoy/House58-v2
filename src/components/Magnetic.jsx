import React, { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { gsap } from "gsap/dist/gsap";

export default function Magnetic({ children }) {
  const magneticRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const magnetic = magneticRef.current;
      const xTo = gsap.quickTo(magnetic, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magnetic, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = magnetic.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      magnetic.addEventListener("mousemove", handleMouseMove);
      magnetic.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        magnetic.removeEventListener("mousemove", handleMouseMove);
        magnetic.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    return () => ctx.revert();
  }, []);

  return React.cloneElement(children, { ref: magneticRef });
}
