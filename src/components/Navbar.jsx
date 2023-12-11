"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MobileNav from "./MobileNav";
import Magnetic from "./Magnetic";
import Logo from "@/images/logos/house58.png";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Navbar = () => {
  const navRef = useRef();
  const [navBackground, setNavBackground] = useState("bg-transparent");
  const isInitialMount = useRef(true);
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set navbar background based on scroll position
      setNavBackground(
        currentScrollY > 50 ? "bg-house-black" : "bg-transparent",
      );

      // Adjust navbar padding based on scroll position
      gsap.to(navRef.current, {
        paddingTop: currentScrollY < 50 ? "3.5rem" : "1.6rem",
        paddingBottom: currentScrollY < 50 ? "3.5rem" : "1.6rem",
        ease: "power1.out",
        duration: 0.6,
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // GSAP context for managing animations
    const context = gsap.context(() => {
      // Fade-in animation for navbar
      if (isInitialMount.current) {
        // Fade-in animation only on initial load
        gsap.from(navRef.current, {
          autoAlpha: 0,
          duration: 0.5,
          delay: 0.5,
          ease: "power4.out",
        });
      }

      // ScrollTrigger for hide/show animation
      const showAnim = gsap
        .from(navRef.current, {
          yPercent: -100,
          paused: true,
          duration: 0.4,
          ease: "power1.inOut",
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          const scrollY = window.scrollY;
          // After a certain amount of scroll, hide or show the navbar based on the direction
          if (scrollY > 500) {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
          }
        },
      });
    }, navRef.current);

    // Indicate that the component is no longer on its initial mount
    isInitialMount.current = false;

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      context.revert();
      ScrollTrigger.refresh();
    };
  }, [router.asPath]);

  const handleLogoClick = (event) => {
    if (router.pathname === "/") {
      event.preventDefault();
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: 0, autoKill: false },
        ease: "expo.inOut",
      });
    } else {
      router.push("/");
    }
  };

  const handleRouteClick = (event, targetRoute) => {
    event.preventDefault(); // Always prevent default action
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
    <>
      <nav
        id="navbar"
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 md:flex hidden justify-between items-center px-10 lg:px-16 lg:py-14 py-7 ${navBackground}`}
        role="navigation"
      >
        <Link href="/" aria-label="Home" onClick={handleLogoClick}>
          <Image src={Logo} alt="Company logo" className="w-36 h-auto" />
        </Link>
        <div className="flex gap-6 lg:gap-20 text-md">
          <Magnetic>
            <Link href="/about" onClick={(e) => handleRouteClick(e, "/about")}>
              <span className="text-white hover:text-house-bluelight transition duration-200">
                About
              </span>
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/services"
              onClick={(e) => handleRouteClick(e, "/services")}
            >
              <span className="text-white hover:text-house-bluelight transition duration-200">
                Services
              </span>
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/contact"
              onClick={(e) => handleRouteClick(e, "/contact")}
            >
              <span className="text-white hover:text-house-bluelight transition duration-200">
                Contact
              </span>
            </Link>
          </Magnetic>
        </div>
      </nav>
      <nav className="md:hidden">
        <MobileNav />
      </nav>
    </>
  );
};

export default Navbar;
