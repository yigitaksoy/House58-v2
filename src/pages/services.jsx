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

const services = () => {
  return (
    <section id="hero" className="h-screen">
      <Container className="mt-36 sm:mt-32 md:mt-50">
        <div className="max-w-7xl">
          <h1 className="font-display text-center text-4xl mb-14 font-heavy tracking-tight text-white [text-wrap:balance] sm:text-6xl">
            Services
          </h1>
        </div>
        <InfiniteMarquee
          className="text-white md:text-6xl text-3xl md:py-5 py-3 font-heavy"
          texts={texts}
          hollow
        />
      </Container>
    </section>
  );
};

export default services;
