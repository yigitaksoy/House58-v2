"use client";

import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AccordionItem from "@/components/AccordionItem";

import { faqList } from "@/data/faqList";

const Faq = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const leftSection = useRef(null);
  const rightSection = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const animateSection = sectionRef.current;
      const animateContainer = containerRef.current;

      const mm = gsap.matchMedia();

      // Set initial state
      gsap.set(animateContainer, {
        opacity: 0,
      });

      // Opacity animation
      gsap.to(animateContainer, {
        opacity: 1,
        ease: "Circ.out",
        scrollTrigger: {
          trigger: animateSection,
          start: "top 60%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
          // markers: true,
        },
      });

      mm.add("(min-width: 820px)", () => {
        gsap.to(animateSection, {
          backgroundColor: "#f2efeb",
          duration: 0.7,
          scrollTrigger: {
            trigger: animateSection,
            start: "top 30%",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
            // markers: true,
          },
        });
      });

      // Cleanup
      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="faq-section"
      className="mt-24 sm:mt-32 lg:mt-20 mb-40 lg:mb-20 lg:pb-10"
    >
      <div
        ref={containerRef}
        className="lg:rounded-3xl bg-house-black px-5 lg:px-8 lg:max-w-7xl mx-auto mt-10"
      >
        <div className="lg:hidden block">
          <div className="mx-auto max-w-2xl lg:max-w-none  mb-10">
            <div className="max-w-2xl">
              <h2>
                <span className="mb-6 block font-display font-heavy text-4xl text-house-bluelight">
                  FAQs
                </span>
                <span className="sr-only"> - </span>
                <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-heavy sm:text-5xl text-white">
                  You&apos;ve got questions?
                </span>
              </h2>
              <div className="mt-6 text-xl">
                <p className="text-house-whitewarm">
                  Check out our FAQ section to get the lowdown on what
                  you&apos;re curious about. If you can&apos;t find what
                  you&apos;re looking for, just hit us up. We&apos;re here to
                  help!
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden text-left lg:hidden md:px-12">
            {faqList.map((question) => (
              <AccordionItem key={question.id} title={question.question}>
                <p className="text-inline">{question.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-1 grid-rows-2 -mx-6 sm:mx-0 px-5 lg:py-20 hidden">
          <div ref={leftSection} className="lg:block col-span-2">
            <div className="mx-auto sticky top-24">
              <div className="max-w-lg mr-10">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                  <div className="max-w-2xl">
                    <h2>
                      <span className="mb-6 pt-7 block font-display font-heavy text-4xl text-house-bluelight">
                        FAQs
                      </span>
                      <span className="sr-only"> - </span>
                      <span className="block font-display tracking-tight [text-wrap:balance] text-4xl font-heavy sm:text-5xl text-white">
                        You&apos;ve got questions?
                      </span>
                    </h2>
                    <div className="mt-6 text-xl">
                      <p className="text-house-whitewarm">
                        Check out our FAQ section to get the lowdown on what
                        you&apos;re curious about. If you can&apos;t find what
                        you&apos;re looking for, just hit us up. We&apos;re here
                        to help!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={rightSection}
            className="lg:col-span-2 right-container overflow-hidden text-left"
          >
            {faqList.map((question) => (
              <AccordionItem key={question.id} title={question.question}>
                <p className="text-inline">{question.answer}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
