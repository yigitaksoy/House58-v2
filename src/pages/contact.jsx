import ContactForm from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { ContactDetails } from "@/components/ContactDetails";

const contact = () => {
  return (
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
                      Starting a new project or want to collaborate with us? We
                      can&apos;t wait to hear from you!
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
  );
};

export default contact;
