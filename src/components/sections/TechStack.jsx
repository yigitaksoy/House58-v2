import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import logoAws from "@/images/logos/aws.svg";
import logoGcp from "@/images/logos/gcp.svg";
import logoNext from "@/images/logos/nextjs.svg";
import logoNodejs from "@/images/logos/nodejs.svg";
import logoDjango from "@/images/logos/django.svg";
import logoShopify from "@/images/logos/shopify.svg";
import logoWoocommerce from "@/images/logos/woocommerce.svg";
import logoWordpress from "@/images/logos/wordpress.svg";
import logoGA from "@/images/logos/google_analytics.svg";
import logoGtm from "@/images/logos/gtm.svg";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { img: logoAws, alt: "AWS logo", width: 110 },
  { img: logoGcp, alt: "Google Cloud Platform (GCP) logo", width: 110 },
  { img: logoNext, alt: "Next.js React framework logo", width: 80 },
  { img: logoNodejs, alt: "Node.js JavaScript runtime logo", width: 80 },
  { img: logoDjango, alt: "Django web framework logo", width: 100 },
  { img: logoShopify, alt: "Shopify e-commerce platform logo", width: 110 },
  {
    img: logoWoocommerce,
    alt: "WooCommerce e-commerce plugin logo",
    width: 120,
  },
  {
    img: logoWordpress,
    alt: "WordPress content management system logo",
    width: 115,
  },
  { img: logoGA, alt: "Google Analytics service logo", width: 110 },
  { img: logoGtm, alt: "Google Tag Manager logo", width: 110 },
];

export default function TechStack() {
  const stackRef = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(stackRef.current, { opacity: 1 });

      gsap.to(stackRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: stackRef.current,
          start: "bottom 30%",
          end: "top 40%",
          reverse: true,
          toggleActions: "play none none reverse",
        },
      });
    });

    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={stackRef}
      id="tech-stack"
      className="relative isolate bg-white md:py-32"
    >
      <div className="lg:rounded-3xl bg-house-black px-5 lg:px-8 py-20 lg:max-w-7xl mx-auto mt-10">
        <FadeIn>
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-2xl">
              <h2>
                <span className="mb-6 pt-7 block font-display font-heavy text-4xl text-house-bluelight">
                  Our Tech Stack
                </span>
              </h2>
              <div className="mt-6 text-xl">
                <p className="text-white font-bold">
                  We&apos;ll carefully pair the right frameworks and platforms
                  with your business objectives.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
        <Container>
          <FadeInStagger faster>
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <ul
              role="list"
              aria-label="Our Technology Stack"
              className="mt-10 grid grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-5"
            >
              {techStack.map((tech) => (
                <li key={tech.alt}>
                  <FadeIn>
                    <Image
                      src={tech.img}
                      alt={tech.alt}
                      style={{ width: `${tech.width}px` }}
                      className="w-full h-auto opacity-90"
                    />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
        </Container>
      </div>
    </section>
  );
}
