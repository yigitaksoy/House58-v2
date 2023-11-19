import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { SectionIntro } from "../components/SectionIntro";
import { List, ListItem } from "@/components/List";
import { StylizedImage } from "@/components/StylizedImage";
import servicesImg from "@/images/services.png";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef();
  const titleRef = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.to(servicesRef.current, {
      backgroundColor: "#f2efeb",
      ease: "none",
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 60%",
        end: "top 60%",
        reverse: true,
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(titleRef.current, {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 60%",
        end: "top 60%",
        reverse: true,
        onEnter: () => gsap.to(titleRef.current, { opacity: 1 }),
        onLeaveBack: () => gsap.to(titleRef.current, { opacity: 0 }),
      },
    });

    return () => {
      // Clean up the ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section ref={servicesRef} id="services" aria-labelledby="services-heading">
      <div ref={titleRef}>
        <SectionIntro
          eyebrow="Services"
          title="We give life
        to ideas, and create sustainable digital products with a story!"
          className="mt-24 sm:mt-32 lg:mt-40"
          hollow
        />
      </div>
      <Container className="mt-16 mb-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={servicesImg}
                alt="Illustrative image of digital services provided by House 58 Digital"
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Your digital handshake starts with your website—it's where first
              impressions are formed. At{" "}
              <span className="text-house-black font-heavy">House 58</span>, we
              create custom web solutions using latest tools and frameworks that
              resonate with your audience, ensuring a cohesive journey from
              UI/UX design to full-scale development and support.
            </ListItem>
            <ListItem title="Full Stack Development">
              A dynamic online presence is a cornerstone for business growth.
              We&apos;re dedicated to building you a modern web solutions not
              only tailored to your needs but also sets the stage for your
              future expansion
            </ListItem>
            <ListItem title="E-commerce">
              Step into online retail with a custom-designed e-commerce site on
              WordPress or Shopify. We focus on creating shopping experiences
              that are easy for both you and your customers, with all the tools
              you need to succeed.
            </ListItem>
            <ListItem title="Website Maintanence">
              At <span className="text-house-black font-heavy">House 58</span>,
              we handle the technicalities so you can focus on your business
              growth. We ensure your site is always secure, fast, and reliable,
              while keeping your content fresh and up-to-date.
            </ListItem>
          </List>
        </div>
      </Container>
    </section>
  );
};

export default Services;
