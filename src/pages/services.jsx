"use client";

import ServicesDetails from "@/components/ServicesDetails";
import ServicesIntro from "@/components/ServicesIntro";

const services = () => {
  return (
    <div id="services">
      <ServicesIntro />
      <ServicesDetails />
    </div>
  );
};

export default services;
