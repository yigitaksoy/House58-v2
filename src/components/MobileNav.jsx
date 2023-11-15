"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Logo from "@/images/logos/house58.png";

gsap.registerPlugin(ScrollToPlugin);

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const tl = useRef(null);
  const tl2 = useRef(null);
  const router = useRouter();

  const handleLogoClick = (event) => {
    if (router.pathname === "/") {
      event.preventDefault();

      if (open) {
        toggleNav();
      }

      if (window.scrollY !== 0) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: 0, autoKill: false },
          ease: "expo.inOut",
        });
      }
    } else {
      if (open) {
        toggleNav();
        setTimeout(() => {
          router.push("/");
        }, 500); // Timeout for animation duration
      } else {
        router.push("/");
      }
    }
  };

  useIsomorphicLayoutEffect(() => {
    tl2.current = gsap
      .timeline()
      .fromTo(
        el.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1, ease: "power3.out" },
        0.5,
      );

    tl.current = gsap
      .timeline({ reversed: true })
      .to(
        q(".nav-side"),
        { translateX: 0, duration: 0.5, ease: "power2.inOut" },
        0,
      )
      .to(
        q(".nav-round"),
        { scaleX: 0, duration: 0.5, ease: "power2.inOut" },
        0,
      )
      .to(
        q(".nav-bg"),
        {
          autoAlpha: 0.2,
          duration: 0.5,
          ease: "power2.inOut",
          pointerEvents: "auto",
        },
        0,
      )
      .to(
        q(".nav-links"),
        { autoAlpha: 1, duration: 0.4, ease: "power2.inOut" },
        0.1,
      );

    return () => {
      // Clean up
      tl2.current.kill();
      tl.current.kill();
    };
  }, []);

  const toggleNav = useCallback(() => {
    if (tl.current) {
      tl.current.reversed() ? tl.current.play() : tl.current.reverse();
    }
    setOpen((prevOpen) => !prevOpen);
  }, [tl]);

  useIsomorphicLayoutEffect(() => {
    // Handling route changes
    const handleRouteChange = () => {
      if (open) toggleNav();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [open, router.events, toggleNav]);

  return (
    <div id="mobile-nav" ref={el} className="fixed top-0 left-0 w-full">
      <div className="nav-bg fixed top-0 left-0 bg-house-black w-full h-screen opacity-0 pointer-events-none"></div>
      <div className="fixed right-0 top-0 w-full md:w-[500px] h-screen pointer-events-none overflow-y-scroll">
        <div
          id="overlay-nav-layout"
          className="nav-side bg-house-black w-full h-full translate-x-[140%] relative pointer-events-auto"
        >
          <div className="nav-round absolute left-0 -translate-x-1/2 h-[110vh] translate-y-[-5vh] rounded-[100%/100%] w-[80%] bg-house-bluelight top-0"></div>
          <div className="nav-links pointer-events-auto fixed top-0 right-0 z-20 flex h-full w-full max-w-lg flex-col justify-between bg-house-black pt-[clamp(3.5rem,10vh,5rem)] pb-12 text-6xl text-white">
            <div className="px-[clamp(1.25rem,3vw,2.5rem)]">
              <span className="text-sm text-neutral-500">Navigation</span>
              <div className="mt-4 mb-4 h-[1px] w-full bg-neutral-600"></div>
            </div>
            {/* Navigation Links */}
            <div className="text-[clamp(3rem,10vw,3.75rem)] absolute top-[40%] -translate-y-1/2  w-full items-center">
              <Link
                href="/about"
                aria-label="About"
                className="group flex items-center justify-between p-3 cursor-pointer"
                onClick={toggleNav}
              >
                <p
                  className={`group-hover:translate-x-[20px] transition font-heavy ${
                    open ? "" : "translate-x-40px] duration-300 "
                  }`}
                >
                  About
                </p>
              </Link>
              <Link
                href="/services"
                aria-label="Services"
                className="group flex items-center justify-between p-3 cursor-pointer"
                onClick={toggleNav}
              >
                <p
                  className={`group-hover:translate-x-[20px] transition font-heavy ${
                    open ? "" : "translate-x-[50px] duration-300"
                  }`}
                >
                  Services
                </p>
              </Link>
              <Link
                href="/contact"
                aria-label="Contact"
                className="group flex items-center justify-between p-3 cursor-pointer"
                onClick={toggleNav}
              >
                <p
                  className={`group-hover:translate-x-[20px] transition font-heavy ${
                    open ? "" : "translate-x-[60px] duration-300 "
                  }`}
                >
                  Contact
                </p>
              </Link>
            </div>
            <div className="px-4 mt-[25vh]">
              <span className="text-sm text-neutral-500">Links</span>
              <div className="mt-4 mb-4 h-[1px] bg-neutral-600"></div>
              <div className="flex text-sm">
                <a
                  href="https://www.linkedin.com/company/house-58-digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`group transition mr-5 ${
                    open ? "" : "translate-x-[40px] duration-300"
                  }`}
                >
                  <p>LinkedIn</p>
                </a>
                <a
                  href="mailto:hello@house58.nl?subject=Lets%20Start%20a%20Project"
                  aria-label="Email"
                  className={`group transition ${
                    open ? "" : "translate-x-[40px] duration-300"
                  }`}
                >
                  <p>Email</p>
                </a>
              </div>
            </div>
            <div className="px-4"></div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] fixed top-0 left-0 bg-house-black flex items-center pt-2 px-[5vw] justify-between">
        <Link
          href="/"
          aria-label="Home"
          className="pointer-events-auto"
          onClick={handleLogoClick}
        >
          <Image
            src={Logo}
            alt="Company logo"
            className="object-fit w-36 h-18"
          />{" "}
        </Link>
        <div
          role="button"
          tabIndex="0"
          className={`w-16 h-16 bg-house-black rounded relative cursor-pointer grid place-items-center transition duration-300 pointer-events-auto ${
            open ? "bg-house-black hover:none" : "hover:bg-none"
          }`}
          onClick={() => toggleNav()}
          onKeyDown={(e) => e.key === "Enter" && toggleNav()}
        >
          <div
            className={`w-5 h-1 bg-neutral-100 rounded-full absolute [transition:transform_0.5s_cubic-bezier(0.3,1.3,0.6,1)] ${
              open ? "rotate-[225deg]" : "-translate-y-[125%]"
            }`}
          ></div>
          <div
            className={`w-5 h-1 bg-neutral-100 rounded-full absolute [transition:transform_0.5s_cubic-bezier(0.3,1.3,0.6,1)] ${
              open ? "rotate-[135deg]" : "translate-y-[125%]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
