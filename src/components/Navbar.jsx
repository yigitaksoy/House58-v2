"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicEffect";
import { gsap } from "gsap/dist/gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import MobileNav from "./MobileNav";
import Logo from "@/images/logos/house58.png";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const navRef = useRef();
  const [navBackground, setNavBackground] = useState("bg-transparent");
  const prevScrollY = useRef(0);
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    // GSAP animation for fade in on mount
    gsap.set(navRef.current, { autoAlpha: 1 });

    gsap.from(navRef.current, {
      autoAlpha: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "power4.out",
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isTop = currentScrollY < 50;
      const isScrollingDown = currentScrollY > prevScrollY.current;
      const hideNavbar = currentScrollY > 500;

      // Always set the navbar background based on scroll position
      setNavBackground(
        currentScrollY > 50 ? "bg-house-black" : "bg-transparent",
      );

      if (isTop) {
        gsap.to(navRef.current, {
          paddingTop: "3.5rem",
          paddingBottom: "3.5rem",
          autoAlpha: 1,
          yPercent: 0,
          ease: "power1.out",
          duration: 0.6,
        });
      } else {
        gsap.to(navRef.current, {
          paddingTop: "1.6rem",
          paddingBottom: "1.6rem",
          autoAlpha: 1,
          ease: "power1.out",
          duration: 0.6,
        });

        // After a certain amount of scroll, hide or show the navbar based on the direction
        if (hideNavbar) {
          gsap.to(navRef.current, {
            yPercent: isScrollingDown ? -100 : 0,
            autoAlpha: isScrollingDown ? 0 : 1,
            ease: "power1.out",
            duration: 1,
          });
        }
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      gsap.killTweensOf(navRef.current); // Kills any ongoing animations on the navbar
    };
  }, []);

  const handleLogoClick = (event) => {
    if (router.pathname === "/") {
      event.preventDefault();

      // Check if the scroll position is already at the top
      if (window.scrollY !== 0) {
        // If not at the top, then scroll to the top with animation
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: 0, autoKill: false },
          ease: "expo.inOut",
        });
      }
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <nav
        id="navbar"
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 md:flex hidden justify-between items-center px-10 lg:px-16 lg:py-14 py-7 transition-colors duration-300 ${navBackground}`}
        role="navigation"
      >
        <Link href="/" aria-label="Home" onClick={handleLogoClick}>
          <Image src={Logo} alt="Company logo" className="w-36 h-auto" />
        </Link>
        <div className="flex gap-6 lg:gap-20 text-md">
          <Link
            href="/about"
            aria-label="About"
            className="text-white hover:text-house-bluelight transition duration-200"
          >
            About
          </Link>
          <Link
            href="/services"
            aria-label="Services"
            className="text-white hover:text-house-bluelight transition duration-200"
          >
            Services
          </Link>
          <Link
            href="/"
            aria-label="Contact"
            className="text-white  hover:text-house-bluelight transition duration-200"
          >
            Contact
          </Link>
        </div>
      </nav>
      <nav className="md:hidden">
        <MobileNav />
      </nav>
    </>
  );
};

export default Navbar;
