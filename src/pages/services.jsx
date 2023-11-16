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

const services = () => {
  return (
    <section id="hero" className="h-screen">
      <Container className="mt-36 sm:mt-32 md:mt-50">
        <div className="max-w-7xl">
          <h1 className="font-display text-center text-4xl mb-10 font-heavy tracking-tight text-white [text-wrap:balance] sm:text-6xl">
            Services
          </h1>
        </div>
        <InfiniteMarquee
          className="text-white text-5xl font-heavy md:text-7xl"
          texts={texts}
          hollow
        />
      </Container>
    </section>
  );
};

export default services;
