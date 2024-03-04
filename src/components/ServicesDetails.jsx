"use-client";

import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServiceFeature from "./ServiceFeature";
import { TagList, TagListItem } from "@/components/TagList";
import { data as services } from "@/data/services";

const ServicesDetails = () => {
  const sectionRef = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      let animateTitle = gsap.utils.selector(sectionRef.current)(
        ".animate-title",
      );

      gsap.to(sectionRef.current, {
        backgroundColor: "#ffff",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 60%",
          reverse: true,
          toggleActions: "play none none reverse",
        },
      });

      let mm = gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {
        gsap.fromTo(
          animateTitle,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: animateTitle,
              start: "top 50%",
              end: "bottom 40%",
              onEnter: () => gsap.to(animateTitle, { opacity: 1 }),
              onEnterBack: () => gsap.to(animateTitle, { opacity: 1 }),
              onLeaveBack: () => gsap.to(animateTitle, { opacity: 0 }),
            },
          },
        );
      });

      mm.add("(max-width: 799px)", () => {
        gsap.fromTo(
          animateTitle,
          { opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: animateTitle,
              start: "top 85%",
              end: "bottom 50%",
              scrub: true,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const renderParagraph = (text) => {
    const parts = text.split(/(House 58)/);
    return parts.map((part, index) =>
      part === "House 58" ? (
        <span key={index} className="font-heavy text-house-500">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <section
      id="services-details"
      ref={sectionRef}
      className="pb-20 space-y-24 [counter-reset:section] mt-24 sm:space-y-32 lg:mt-14 lg:space-y-40 bg-white"
    >
      <div className="pt-40 pb-10">
        <h1 className="text-center text-house-500 md:text-8xl text-6xl font-heavy animate-title">
          SERVICES
        </h1>
      </div>

      {services.map((service) => (
        <ServiceFeature
          key={service.id}
          sectionId={service.sectionId}
          title={service.title}
          image={{ src: service.image }}
          alt={service.alt}
        >
          <div className="space-y-6 text-base text-house-500">
            <p>{renderParagraph(service.paragraph1)}</p>
            <p>{renderParagraph(service.paragraph2)}</p>
            <p>{renderParagraph(service.paragraph3)}</p>
          </div>
          <div className="mt-8" />
          <TagList className="mt-4">
            {service.tags.map((tag) => (
              <TagListItem key={tag}>{tag}</TagListItem>
            ))}
          </TagList>
        </ServiceFeature>
      ))}
    </section>
  );
};

export default ServicesDetails;
