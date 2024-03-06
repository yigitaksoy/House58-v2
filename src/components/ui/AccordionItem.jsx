"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { PiPlusBold } from "react-icons/pi";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, {
        height: isOpen ? "auto" : 0,
      });
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    const currentHeight = isOpen ? contentRef.current.scrollHeight + "px" : 0;
    const newHeight = isOpen ? 0 : contentRef.current.scrollHeight + "px";

    setIsOpen(!isOpen);
    gsap.fromTo(
      contentRef.current,
      { height: currentHeight },
      { height: newHeight, duration: 0.4, ease: "Circ.out" },
    );

    gsap.to(indicatorRef.current, {
      rotate: isOpen ? 0 : 45,
      duration: 0.4,
      ease: "Circ.out",
    });
  };

  return (
    <div
      ref={containerRef}
      id="accordion-collapse"
      data-accordion="collapse"
      className={`border-b-[2px] h-auto transition duration-700 ${
        isOpen ? "border-house-bluelight" : "border-house-dim"
      }`}
    >
      <div className="h-auto">
        <button
          className="flex justify-between items-start w-full focus:outline-none py-7"
          onClick={toggleAccordion}
          aria-label="toggle accordion"
        >
          <div className="flex flex-1 items-center mr-5">
            <span className="text-white md:text-lg text-md font-bold text-left">
              {title}
            </span>
          </div>
          <div className="flex justify-end flex-none z-50">
            <span
              ref={indicatorRef}
              className={`text-xl ${
                isOpen ? "text-house-bluelight" : "text-house-dim"
              } `}
            >
              <PiPlusBold />
            </span>
          </div>
        </button>
        <div
          id="accordion-collapse-body"
          ref={contentRef}
          className="overflow-hidden text-house-whitewarm"
        >
          <div className="pb-7">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
