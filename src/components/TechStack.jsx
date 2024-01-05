import Image from "next/image";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import StackIntro from "@/components/StackIntro";
import logoAws from "@/images/logos/aws.svg";
import logoGcp from "@/images/logos/gcp.svg";
import logoReact from "@/images/logos/reactjs.svg";
import logoNodejs from "@/images/logos/nodejs.svg";
import logoDjango from "@/images/logos/django.svg";
import logoShopify from "@/images/logos/shopify.svg";
import logoWoocommerce from "@/images/logos/woocommerce.svg";
import logoWordpress from "@/images/logos/wordpress.svg";
import logoGA from "@/images/logos/google_analytics.svg";
import logoGtm from "@/images/logos/gtm.svg";

const techStack = [
  { img: logoAws, alt: "AWS logo", width: 110 },
  { img: logoGcp, alt: "Google Cloud Platform (GCP) logo", width: 110 },
  { img: logoReact, alt: "React JavaScript library logo", width: 110 },
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
  return (
    <section
      id="tech-stack"
      className="relative isolate bg-house-whitewarm py-16 sm:py-28 md:py-32"
    >
      <FadeIn>
        <StackIntro title="Our Tech Stack" hollow>
          <p>
            We&apos;ll carefully pair the right frameworks and platforms with
            your business objectives.
          </p>
        </StackIntro>
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
                    className="w-full h-auto grayscale hover:grayscale-0"
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </section>
  );
}
