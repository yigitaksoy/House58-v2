"use client";

import { useRouter } from "next/router";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import { SiLinkedin } from "react-icons/si";
import { TbMailFast } from "react-icons/tb";
import WeatherWidget from "./WeatherWidget";

const Footer = () => {
  const router = useRouter();

  const handleRouteClick = (event, targetRoute) => {
    event.preventDefault();
    if (router.pathname === targetRoute) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: 0, autoKill: false },
        ease: "expo.inOut",
      });
    } else {
      router.push(targetRoute);
    }
  };

  return (
    <footer id="footer" className="h-[70vh] bg-[#b2ff44]">
      <div className="border-t-4 border-house-black"></div>
      <div className="absolute bottom-0 w-full">
        <div className="border-t border-house-black bg-house-black pb-12 xl:pb-20">
          <div className="mx-auto max-w-screen-section px-4 sm:px-8 lg:px-24 lg:text-left">
            <div className="flex flex-col pt-12 xl:flex-row xl:items-center xl:justify-between xl:pt-20">
              <div className="order-2 flex gap-4 xl:mt-0 items-center justify-center">
                <Magnetic>
                  <Link
                    href="https://www.linkedin.com/company/house-58-digital/"
                    aria-label="Follow us on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-house-whitewarm"
                  >
                    <SiLinkedin className="text-house-bluelight" />
                    <span className="text-sm font-thin ml-1">Linkedin</span>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a
                    href="mailto:hello@house58.nl?subject=Lets%20Start%20a%20Project"
                    aria-label="Email us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-house-whitewarm"
                  >
                    <TbMailFast className="text-house-bluelight w-7 h-7" />
                    <span className="text-sm font-thin ml-1">Email</span>
                  </a>
                </Magnetic>
              </div>
              <div className="order-2 inline-flex text-sm font-thin text-house-whitewarm xl:mt-0 mt-8 items-center justify-center">
                <WeatherWidget />
              </div>
              <div className="order-1 mb-8 flex flex-row gap-6 xl:order-2 xl:mb-0 xl:flex items-center justify-center">
                <Magnetic>
                  <Link
                    href="/"
                    onClick={(e) => handleRouteClick(e, "/")}
                    className="group"
                  >
                    <span className="text-white duration-300 bg-bottom bg-gradient-to-r from-house-bluelight to-house-bluelight bg-[length:0%_2px] bg-no-repeat transform transition-all ease-out group-hover:bg-[length:100%_1.5px] font-thin text-sm">
                      Home
                    </span>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="/"
                    onClick={(e) => handleRouteClick(e, "/")}
                    className="group"
                  >
                    <span className="text-white duration-300 bg-bottom bg-gradient-to-r from-house-bluelight to-house-bluelight bg-[length:0%_2px] bg-no-repeat transform transition-all ease-out group-hover:bg-[length:100%_1.5px] font-thin text-sm">
                      About
                    </span>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="/services"
                    onClick={(e) => handleRouteClick(e, "/services")}
                    className="group"
                  >
                    <span className="text-white duration-300 bg-bottom bg-gradient-to-r from-house-bluelight to-house-bluelight bg-[length:0%_2px] bg-no-repeat transform transition-all ease-out group-hover:bg-[length:100%_1.5px] font-thin text-sm">
                      Services
                    </span>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="/"
                    onClick={(e) => handleRouteClick(e, "/")}
                    className="group"
                  >
                    <span className="text-white duration-300 bg-bottom bg-gradient-to-r from-house-bluelight to-house-bluelight bg-[length:0%_2px] bg-no-repeat transform transition-all ease-out group-hover:bg-[length:100%_1.5px] font-thin text-sm">
                      Contact
                    </span>
                  </Link>
                </Magnetic>
              </div>
              <div className="order-2 mt-14 inline-flex gap-4 xl:mt-0 items-center justify-center">
                <p className="order-2 inline-flex text-sm font-thin text-house-whitewarm text-center">
                  © 2023{" "}
                  <span className="pl-1 font-heavy">House 58 Digital</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
