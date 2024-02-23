import { FadeIn } from "@/components/FadeIn";
import { Border } from "@/components/Border";
import { SiLinkedin } from "react-icons/si";

export const ContactDetails = () => {
  return (
    <FadeIn>
      <Border invert className="mt-16 pt-16">
        <div className="max-w-sm">
          <h2 className="text-2xl font-semibold text-white">
            Want to skip to in-person?
          </h2>
          <p className="text-lg text-house-whitewarm mt-5">
            If you&rsquo;re ready for a face-to-face, just put some time on our
            calendar and we&rsquo;ll see you soon!{" "}
          </p>
          <p className="text-lg text-house-bluelight mt-10 font-bold">
            Schedule a call for
          </p>
          <div className="mt-2 grid grid-cols-2 text-sm">
            <div className="mt-5">
              <button
                data-cal-link="house58/15"
                aria-label="Open calendar to book a meeting"
                className="flex h-11 bg-house-800 text-house-white transform cursor-pointer items-center text-sm font-bold rounded-xl py-5 px-10 drop-shadow-lg transition duration-300 border border-house-dim hover:bg-house-black hover:text-white uppercase"
              >
                15 minutes
              </button>
            </div>
            <div className="mt-5">
              <button
                data-cal-link="house58/15"
                aria-label="Open calendar to book a meeting"
                className="flex h-11 bg-house-800 text-house-white transform cursor-pointer items-center text-sm font-bold rounded-xl py-5 px-10 drop-shadow-lg transition duration-300 border border-house-dim hover:bg-house-black hover:text-white uppercase"
              >
                30 minutes
              </button>
            </div>
          </div>
        </div>
      </Border>

      <Border invert className="mt-16 pt-16">
        <div className="mt-6 grid grid-cols-2 gap-8 text-sm">
          <div>
            <h2 className="font-display text-base font-semibold text-house-bluelight">
              Email us
            </h2>
            <div className="mt-6 text-sm">
              <a
                href="mailto:hello@house58.nl?subject=Lets%20Start%20a%20Project"
                aria-label="Email us"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-house-whitewarm"
              >
                hello@house58.nl
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-display text-base font-semibold text-house-bluelight">
              Follow us
            </h2>
            <div className="mt-6 text-sm">
              <a
                href="https://www.linkedin.com/company/house-58-digital/"
                aria-label="Follow us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-house-whitewarm"
              >
                <SiLinkedin className="text-house-bluelight" />
                <span className="text-sm ml-1">Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </Border>
    </FadeIn>
  );
};
