"use client";

import { Container } from "@/components/Container";
import { FadeIn } from "./FadeIn";
import InfiniteMarquee from "@/components/InfiniteMarquee";

const texts = [
  [
    "Web Design",
    "E-commerce",
    "Web Development",
    "Wordpress",
    "Maintanence",
    "Shopify",
    "Backend",
    "Branding",
  ],
  [
    "UX/UI Design",
    "Optimization",
    "Redesigns",
    "Functionality",
    "Landing Pages",
    "Applications",
  ],
];

const ServicesIntro = () => {
  return (
    <section id="services-intro" className="h-auto">
      <Container className="mt-36 sm:mt-32 md:mt-60">
        <FadeIn className="max-w-2xl pt-14">
          <h1 className="text-4xl font-heavy tracking-tight text-white [text-wrap:balance] sm:text-6xl animate">
            Designing standout solutions using sound strategic thinking.
          </h1>
        </FadeIn>
        <div className="mt-36">
          <InfiniteMarquee
            className="text-white md:text-6xl text-3xl md:py-5 py-3 font-heavy"
            texts={texts}
            hollow
          />
        </div>
      </Container>
    </section>
  );
};

export default ServicesIntro;
