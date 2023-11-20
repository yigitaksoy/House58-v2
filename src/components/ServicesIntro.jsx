"use client";

import { Container } from "@/components/Container";
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
    <section id="services-intro" className="h-screen">
      <Container className="mt-36 sm:mt-32 md:mt-60">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl mb-14 font-heavy tracking-tight text-white [text-wrap:balance] sm:text-5xl leading-5">
            Designing standout solutions using sound strategic thinking.
          </h1>
        </div>
        <div className="mt-10">
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
