import Head from "next/head";
import GridPattern from "@/components/GridPattern";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Calendar from "@/components/Calendar";
import OurProcess from "@/components/sections/OurProcess";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          House 58 Digital - Innovative Digital Solutions in Amsterdam
        </title>
        <meta
          name="description"
          content="House 58 Digital provides innovative digital solutions, specializing in web design, development, and e-commerce. Located in the heart of Amsterdam."
        />
        <link rel="canonical" href="https://house58.nl" />
        <meta
          property="og:image:alt"
          content="House 58 Digital - Your Partner in Innovative Digital Solutions"
        />
        <meta
          property="og:title"
          content="House 58 Digital - Innovative Digital Solutions in Amsterdam"
        />
        <meta
          property="og:description"
          content="House 58 Digital provides innovative digital solutions, specializing in web design, development, and e-commerce. Located in the heart of Amsterdam."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            name: "House 58 Digital",
            description:
              "Leading provider of innovative digital solutions, including web design, development, and e-commerce.",
          })}
        </script>
      </Head>
      <GridPattern
        className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-house-bluelight [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
        yOffset={-96}
        interactive
      />
      <Hero />
      <Services />
      <TechStack />
      <OurProcess dark className="mt-32 md:mt-20 mb-10" />
      <Faq />
      <Calendar />
    </>
  );
}
