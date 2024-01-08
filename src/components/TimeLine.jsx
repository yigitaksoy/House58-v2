"use client";

import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Container } from "@/components/Container";

const TimeLine = () => {
  const timelineRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      let timelineContainer = timelineRef.current;
      let mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        gsap.fromTo(
          timelineContainer,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineContainer,
              start: "top 60%",
              end: "bottom 30%",
              onEnter: () => gsap.to(timelineContainer, { opacity: 1 }),
              onEnterBack: () => gsap.to(timelineContainer, { opacity: 1 }),
              onLeaveBack: () => gsap.to(timelineContainer, { opacity: 0 }),
            },
          },
        );
      });

      mm.add("(max-width: 799px)", () => {
        gsap.fromTo(
          timelineContainer,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineContainer,
              start: "top 70%",
              end: "bottom 30%",
              onEnter: () => gsap.to(timelineContainer, { opacity: 1 }),
              onEnterBack: () => gsap.to(timelineContainer, { opacity: 1 }),
              onLeaveBack: () => gsap.to(timelineContainer, { opacity: 0 }),
            },
          },
        );
      });

      gsap.to(".draw-line", {
        height: () =>
          document.querySelector(".timeline-container").offsetHeight,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 50%",
          end: "bottom 50%",
          scrub: 0.5,
        },
      });

      const sections = gsap.utils.toArray(".timeline");
      sections.forEach((section) => {
        const h1 = section.querySelector("h1");
        const h2 = section.querySelector("h2");
        const text = section.querySelector("p");

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            h1.classList.replace("text-house-dim", "text-white");
            h2.classList.replace("text-house-dim", "text-house-green");
            text.classList.replace("text-house-dim", "text-house-whitewarm");
          },

          onEnterBack: () => {
            h1.classList.replace("text-house-dim", "text-white");
            h2.classList.replace("text-house-dim", "text-house-green");
            text.classList.replace("text-house-dim", "text-house-whitewarm");
          },
          onLeaveBack: () => {
            h1.classList.replace("text-white", "text-house-dim");
            h2.classList.replace("text-house-green", "text-house-dim");
            text.classList.replace("text-house-whitewarm", "text-house-dim");
          },
        });
      });

      // Cleanup
      return () => mm.revert();
    },
    { scope: timelineRef },
  );
  return (
    <Container>
      <div
        ref={timelineRef}
        className="relative grid grid-cols-4 grid-rows-4 md:gap-10 gap-2 mt-20 timeline-container"
      >
        <span className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-[#3f3f46] h-full rounded-lg z-0"></span>
        <span className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-[#e0a4ff] rounded-lg h-0 draw-line z-10"></span>
        <div className="col-span-2 md:flex min-h-[30vh] gap-x-8 gap-y-8 timeline">
          <h1 className="md:text-9xl text-2xl font-heavy md:mb-5 text-house-dim transition duration-1000">
            1
          </h1>
          <div className="md:mt-2">
            <h2 className="font-heavy md:text-3xl text-lg md:mb-5 mb-2 text-house-dim transition duration-1000">
              Discovery call
            </h2>
            <p className="text-house-dim transition duration-1000">
              Briefing call to understand your goals and needs.
            </p>
          </div>
        </div>
        <div className="col-span-2 col-start-3 row-start-2 md:flex ml-3 min-h-[30vh] gap-x-8 gap-y-8 timeline ">
          <h1 className="md:text-9xl text-2xl font-heavy md:mb-5 text-house-dim transition duration-1000">
            2
          </h1>
          <div className="md:mt-2">
            <h2 className="font-heavy md:text-3xl text-lg md:mb-5 mb-2 text-house-dim transition duration-1000">
              Strategy
            </h2>
            <p className="text-house-dim transition duration-1000">
              <span className="block">❏ Budget</span>
              <span className="block">❏ Scope of Work</span>
              <span className="block">❏ Timelines</span>
              <span className="block">❏ Billing Plan</span>
            </p>
          </div>
        </div>
        <div className="col-span-2 row-start-3 md:flex min-h-[30vh] gap-x-8 gap-y-8 timeline ">
          <h1 className="md:text-9xl text-2xl font-heavy md:mb-5 text-house-dim transition duration-1000">
            3
          </h1>
          <div className="md:mt-2">
            <h2 className="font-heavy md:text-3xl text-lg md:mb-5 mb-2 text-house-dim transition duration-1000">
              Agreement
            </h2>
            <p className="text-house-dim transition duration-1000">
              Once the proposal has been received and given the green light,
              we&apos;ll forward an agreement for electronic signature to
              formalize our partnership.
            </p>
          </div>
        </div>
        <div className="col-span-2 col-start-3 row-start-4 ml-3 md:flex min-h-[30vh] gap-x-8 gap-y-8 timeline ">
          <h1 className="md:text-9xl text-2xl font-heavy md:mb-5 text-house-dim transition duration-1000">
            4
          </h1>
          <div className="md:mt-2">
            <h2 className="font-heavy md:text-3xl text-lg md:mb-5 mb-2 text-house-dim transition duration-1000">
              Project Kick-off
            </h2>
            <p className="text-house-dim transition duration-1000">
              To kickstart the project, we operate on a deposit basis. The
              specific deposit amount will be outlined in the billing plan
              section of the proposal.
            </p>
          </div>
        </div>
        <div className="col-span-2 row-start-5 md:flex min-h-[30vh] gap-x-8 gap-y-8 timeline ">
          <h1 className="md:text-9xl text-2xl font-heavy md:mb-5 text-house-dim transition duration-1000">
            5
          </h1>
          <div className="md:mt-2">
            <h2 className="font-heavy md:text-3xl text-lg md:mb-5 mb-2 text-house-dim transition duration-1000">
              Work Begins
            </h2>
            <p className="text-house-dim transition duration-1000">
              The project development begins and continues as per scope of work
              outlined in the proposal.
            </p>
          </div>
        </div>
        <div className="col-span-2 row-start-6 col-start-3 ml-3 md:flex min-h-[30vh] gap-x-8 gap-y-8 timeline ">
          <h1 className="md:text-9xl text-2xl font-heavy md:mb-5 text-house-dim transition duration-1000">
            6
          </h1>
          <div className="md:mt-2">
            <h2 className="font-heavy md:text-3xl text-lg md:mb-5 mb-2 text-house-dim transition duration-1000">
              Touch-ups
            </h2>
            <p className="text-house-dim transition duration-1000">
              Testing, proofreading, final edits to make sure that your project
              looks perfect.
            </p>
          </div>
        </div>
        <div className="col-span-2 row-start-7 md:flex min-h-[30vh] gap-x-8 gap-y-8 timeline ">
          <h1 className="md:text-9xl text-2xl font-heavy md:mb-5 text-house-dim transition duration-1000">
            7
          </h1>
          <div className="md:mt-2">
            <h2 className="font-heavy md:text-3xl text-lg md:mb-5 mb-2 text-house-dim transition duration-1000">
              Delivery
            </h2>
            <p className="text-house-dim transition duration-1000">
              Upon approval of the final deliverables, we&apos;ll issue the
              closing invoice. With just a few clicks, we&apos;ll be poised to
              send you all the completed assets.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TimeLine;
