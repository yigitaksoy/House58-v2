import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { ContactDetails } from "@/components/ContactDetails";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | House 58 Digital</title>
        <meta
          name="description"
          content="Get in touch with House 58 Digital for your Web Design, Web Development, E-commerce, and Website Maintenance needs. Contact us today to discuss your project or inquiry."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://house58.nl/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ProfessionalService",
            name: "House 58 Digital",
            description:
              "Get in touch with House 58 Digital for personalized Web Design, Web Development, E-commerce, and Website Maintenance services. Let's bring your digital vision to life.",
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
              url: "https://house58.nl/contact",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Amsterdam",
              addressCountry: "NL",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "10:00",
              closes: "18:00",
            },
            sameAs: [
              "https://www.linkedin.com/company/house-58-digital/",
              "https://www.house58.nl/",
            ],
          })}
        </script>
        <meta property="og:title" content="House 58 Digital | Contact Us" />
        <meta
          property="og:description"
          content="Reach out to House 58 Digital for expert Web Design, Development, E-commerce, and Maintenance services. Contact us to start your project."
        />
        <meta property="og:url" content="https://house58.nl/contact" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="py-12 md:py-20 mt-40">
        <FadeIn>
          <div className="container mx-auto px-4">
            <div className="-mx-4 flex flex-wrap">
              <div className="mb-16 w-full px-4 lg:mb-0 lg:w-1/2">
                <div className="mx-auto max-w-xl lg:mx-0">
                  <div className="mb-10 max-w-lg">
                    <h1 className="font-heading xs:text-8xl xl:text-10xl mb-8 text-6xl font-bold tracking-tighter sm:text-9xl">
                      <span className="text-white font-heavy">
                        Let&apos;s talk!
                      </span>
                    </h1>
                    <p className="text-2xl">
                      <span className="text-house-whitewarm">
                        Starting a new project or want to collaborate with us?
                        We can&apos;t wait to hear from you!
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
              <ContactDetails />
              <ContactForm />
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
};

export default contact;
