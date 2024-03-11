"use client";

import Head from "next/head";
import ServicesDetails from "@/components/sections/ServicesDetails";
import ServicesIntro from "@/components/sections/ServicesIntro";
import Calendar from "@/components/Calendar";
import OurProcess from "@/components/sections/OurProcess";
import Faq from "@/components/sections/Faq";

const services = () => {
  return (
    <>
      <Head>
        <title>
          Creative Web Design, Web Development, Website Maintenance & E-commerce
          Solutions in Amsterdam | House 58 Digital
        </title>
      </Head>
      <ServicesIntro />
      <ServicesDetails />
      <OurProcess dark className="mt-20 md:mt-24 mb-10" />
      <Faq />
      <Calendar />
    </>
  );
};

export default services;
