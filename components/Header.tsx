"use client";
import Image from "next/image";


import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ui/ThemeToggle";
import { PremiumButton } from "./ui/PremiumButton";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "PROJECTS", path: "/projects" },
  { name: "SKILLS", path: "/skills" },
  { name: "SERVICES", path: "/services" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection for sticky pill effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "pt-4" : "pt-6"
        }`}
      >
        <div className="absolute top-[-50%] left-[-10%] w-[30%] h-[150%] bg-primary rounded-full blur-[100px] opacity-20 pointer-events-none -z-10" />

        <div
          className={`mx-auto max-w-7xl flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-card/80 backdrop-blur-md shadow-lg shadow-black/20 border border-border rounded-full px-8 py-3 mx-4 lg:mx-auto"
              : "bg-transparent px-5 py-2"
          }`}
        >
          {/* Logo */}
          <Link href={"/"} className="flex z-10 relative items-center gap-3 group" onClick={handleLinkClick}>
            <Image
              src="/assets/logo.svg"
              width={scrolled ? 36 : 44}
              height={scrolled ? 36 : 44}
              alt={"Nasir Siddiqui Logo"}
              className="relative z-10 transition-all duration-300 drop-shadow-lg rounded-xl group-hover:scale-105"
              unoptimized
            />
            <span className={`font-montserrat font-bold tracking-tight text-foreground transition-all duration-300 ${scrolled ? "text-lg" : "text-xl"}`}>
              Nasir Siddiqui
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-muted-foreground hover:text-foreground text-sm font-medium tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Hire Me Button - Desktop */}
            <Link href="/contact" className="hidden lg:block">
              <PremiumButton icon={<FaArrowRight />}>
                HIRE ME
              </PremiumButton>
            </Link>

            {/* Mobile Hamburger Menu */}
            <button
              className="lg:hidden flex items-center justify-center text-3xl text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <CgMenuRight />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-[300px] sm:w-[350px] bg-card border-l border-white/10 z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="text-foreground font-montserrat font-bold tracking-widest text-sm">
                  MENU
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground p-2 transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.path}
                      onClick={handleLinkClick}
                      className="text-2xl font-montserrat font-medium text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 border-t border-white/5 bg-black/20 flex flex-col gap-4">
                <Link href="/contact" onClick={handleLinkClick} className="w-full">
                  <PremiumButton className="w-full" icon={<FaArrowRight />}>
                    HIRE ME
                  </PremiumButton>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;