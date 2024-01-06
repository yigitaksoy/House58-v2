"use client";

import Head from "next/head";
import ServicesDetails from "@/components/ServicesDetails";
import ServicesIntro from "@/components/ServicesIntro";
import Calendar from "@/components/Calendar";
import OurProcess from "@/components/OurProcess";

const services = () => {
  return (
    <>
      <Head>
        <title>
          House 58 Digital | Creative Web Design, Web Development, Website
          Maintenance & E-commerce Solutions in Amsterdam
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
      <div id="services">
        <ServicesIntro />
        <ServicesDetails />
        <OurProcess dark className="mt-20 md:mt-24 mb-10" />
        <Calendar />
      </div>
    </>
  );
};

export default services;
