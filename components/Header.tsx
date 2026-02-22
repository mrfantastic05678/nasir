"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

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
          className={`mx-auto max-w-[1200px] flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-card/80 backdrop-blur-md shadow-lg shadow-black/20 border border-white/10 rounded-full px-6 py-3 mx-4 lg:mx-auto"
              : "bg-transparent px-6 py-2"
          }`}
        >
          {/* Logo */}
          <Link href={"/"} className="flex z-10 relative items-center" onClick={handleLinkClick}>
            <Image
              src="/assets/owais_logo.png"
              width={scrolled ? 70 : 80}
              height={scrolled ? 35 : 40}
              alt={"logo"}
              className="relative z-10 transition-all duration-300"
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-gray-300 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Hire Me Button - Desktop */}
            <Link href="/contact" className="hidden lg:block">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center text-center font-semibold bg-gradient-to-r from-primary to-accent border border-white/10 py-2.5 px-6 rounded-full text-sm text-white shadow-lg"
              >
                HIRE ME
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            {/* Mobile Hamburger Menu */}
            <button
              className="lg:hidden flex items-center justify-center text-3xl text-gray-300 hover:text-white transition-colors"
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
                <span className="text-white font-montserrat font-bold tracking-widest text-sm">
                  MENU
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white p-2 transition-colors rounded-full hover:bg-white/5"
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
                      className="text-2xl font-montserrat font-medium text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 border-t border-white/5 bg-black/20 flex flex-col gap-4">
                <Link href="/contact" onClick={handleLinkClick} className="w-full">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center font-bold bg-gradient-to-r from-primary to-accent py-4 rounded-xl text-white shadow-lg shadow-primary/20"
                  >
                    HIRE ME
                    <FaArrowRight className="ml-2" />
                  </motion.button>
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