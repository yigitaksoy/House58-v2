import Head from "next/head";
import GridPattern from "@/components/GridPattern";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Calendar from "@/components/Calendar";
import OurProcess from "@/components/OurProcess";

export default function Home() {
  return (
    <>
      <Head>
        <title>House 58 Digital - Innovative Digital Solutions</title>
        <meta
          name="description"
          content="House 58 Digital provides innovative digital solutions, specializing in web design, development, and e-commerce. Located in the heart of Amsterdam."
        />
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebPage",
            name: "House 58 Digital",
            description:
              "Leading provider of innovative digital solutions, including web design, development, and digital marketing services.",
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
      <OurProcess dark className="mt-20 mb-10" />
      <Calendar />
    </>
  );
}
