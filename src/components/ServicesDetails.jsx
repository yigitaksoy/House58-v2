import React from "react";
import Head from "next/head";
import Section from "@/components/Section";
import { TagList, TagListItem } from "@/components/TagList";
import { data as services } from "@/data/services";

const ServicesDetails = () => {
  const renderParagraph = (text) => {
    const parts = text.split(/(House 58)/);
    return parts.map((part, index) =>
      part === "House 58" ? (
        <span key={index} className="font-heavy text-white">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <>
      <Head>
        <title>
          <title>
            House 58 Digital | Expert Web Design, Development, Website
            Maintenance & E-commerce Solutions in Amsterdam
          </title>
        </title>
        <meta
          name="description"
          content="Explore House 58 Digital's specialized services in Web Design, Web Development, E-commerce, and Website Maintenance. Discover custom solutions for web design, online retail platforms, and ongoing site support."
        />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ProfessionalService",
            name: "House 58 Digital Services",
            description:
              "Offering specialized Web Design, Web Development, E-commerce solutions, and comprehensive Website Maintenance services. Tailored digital solutions for businesses of all sizes.",
            serviceType: [
              "Web Design",
              "Web Development",
              "E-commerce Solutions",
              "Website Maintenance",
            ],
            areaServed: ["Worldwide"],
            provider: {
              "@type": "Organization",
              name: "House 58 Digital",
              url: "https://house58.vercel.app/services",
            },
          })}
        </script>
      </Head>
      <div className="pb-20 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40 bg-house-black">
        <div className="pt-10">
          <h1 className="text-center text-white md:text-8xl text-5xl font-heavy">
            SERVICES
          </h1>
        </div>
        {services.map((service) => (
          <Section
            key={service.id}
            title={service.title}
            image={{ src: service.image }}
            className="h-screen"
          >
            <div className="space-y-6 text-base text-neutral-300">
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
          </Section>
        ))}
      </div>
    </>
  );
};

export default ServicesDetails;
