"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { PremiumButton } from "./ui/PremiumButton";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto text-gray-600 body-font scroll-smooth">
      <div
        id="about"
        className="px-5 py-24 grid content-center scroll-smooth duration-300"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-base text-center md:text-left text-accent font-medium sm:text-lg">
            About Me:
          </h3>
          <h2 className="sm:text-3xl text-center text-2xl md:text-left text-foreground font-medium title-font mb-2 md:w-2/5">
            AI & Automation Architect
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:-mt-24 md:w-3/5 md:pl-6 justify-self-end"
        >
          <p className="leading-relaxed text-center md:text-left text-base text-muted-foreground transition-colors duration-300">
            I build the bridge between innovative code and business value. As a Full-Stack Developer and AI Specialist, I design custom chatbots and automated workflows that solve complex operational problems. By combining technical development with strategic business insight, I help teams work smarter not harder through intelligent process optimization and bespoke AI solutions.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 md:mt-4 mt-8"
          >
            <Link href="/contact">
              <PremiumButton>
                Contact Me
              </PremiumButton>
            </Link>
            <Link
              href={"/projects"}
              className="group text-foreground hover:text-primary font-medium inline-flex items-center transition-colors duration-300 text-sm tracking-wide"
            >
              Learn More
              <span
                className="ml-2 transition-transform duration-300 group-hover:-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 inline-block"
              >
                <FaArrowRight />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
