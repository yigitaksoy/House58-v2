import { FadeIn } from "@/components/shared/FadeIn";
import { Border } from "@/components/layout/Border";
import { SiLinkedin } from "react-icons/si";
import { RxCalendar } from "react-icons/rx";

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
            Schedule a call
          </p>
          <div className="mt-2 grid grid-cols-2 text-sm gap-5">
            <div data-cal-link="house58/15" className="mt-5">
              <button
                data-cal-link="house58/15"
                aria-label="Open calendar to book a meeting"
                className="flex group relative md:w-44 w-40 items-center justify-between rounded-lg h-12 text-house-white hover:text-white transition duration-300 bg-house-800 border border-house-dim hover:border-house-whitewarm"
              >
                <span
                  data-cal-link="house58/15"
                  className="text-sm font-bold ml-5"
                >
                  15 MINUTES
                </span>
                <div
                  data-cal-link="house58/15"
                  className="absolute group right-[13%] hover:right-[13%] translate-x-1/2 top-1/2 -translate-y-1/2 h-2 w-2 group-hover:h-6 group-hover:w-6  overflow-hidden bg-house-green rounded-full ml-7 flex items-center justify-center transition-all duration-300"
                >
                  <span
                    data-cal-link="house58/15"
                    className="group-hover:visible invisible calender-icon"
                  >
                    <RxCalendar
                      data-cal-link="house58/15"
                      className="w-4 h-4"
                    />
                  </span>
                </div>
              </button>
            </div>
            <div className="mt-5">
              <button
                data-cal-link="house58/30"
                aria-label="Open calendar to book a meeting"
                className="flex group relative md:w-44 w-40 items-center justify-between rounded-lg h-12 text-house-white hover:text-white transition duration-300 bg-house-800 border border-house-dim hover:border-house-whitewarm"
              >
                <span
                  data-cal-link="house58/30"
                  className="text-sm font-bold ml-5"
                >
                  30 MINUTES
                </span>
                <div
                  data-cal-link="house58/30"
                  className="absolute group right-[13%] hover:right-[13%] translate-x-1/2 top-1/2 -translate-y-1/2 h-2 w-2 group-hover:h-6 group-hover:w-6  overflow-hidden bg-house-green rounded-full ml-7 flex items-center justify-center transition-all duration-300"
                >
                  <span
                    data-cal-link="house58/30"
                    className="group-hover:visible invisible calender-icon"
                  >
                    <RxCalendar
                      data-cal-link="house58/30"
                      className="w-4 h-4"
                    />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Border>

      <Border invert className="mt-16 pt-16">
        <div className="mt-6 grid grid-cols-2 gap-8">
          <div className="w-20">
            <h2 className="font-display text-base font-semibold text-house-bluelight">
              Email us
            </h2>
            <div className="mt-6 text-md">
              <a
                href="mailto:hello@house58.nl?subject=Lets%20Start%20a%20Project"
                aria-label="Email us"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-house-whitewarm"
              >
                <span className="bg-bottom bg-gradient-to-r from-house-bluelight to-house-bluelight bg-[length:0%_2px] bg-no-repeat transform transition-all ease-out group-hover:bg-[length:100%_1.5px] duration-300">
                  hello@house58.nl
                </span>
              </a>
            </div>
          </div>
          <div className="w-24">
            <h2 className="font-display text-base font-semibold text-house-bluelight">
              Follow us
            </h2>
            <div className="mt-6 text-md">
              <a
                href="https://www.linkedin.com/company/house-58-digital/"
                aria-label="Follow us on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-house-whitewarm"
              >
                <SiLinkedin className="text-house-bluelight" />
                <span className="text-md ml-1 bg-bottom bg-gradient-to-r from-house-bluelight to-house-bluelight bg-[length:0%_2px] bg-no-repeat transform transition-all ease-out group-hover:bg-[length:100%_1.5px] duration-300">
                  Linkedin
                </span>
              </a>
            </div>
          </div>
        </div>
      </Border>
    </FadeIn>
  );
};
