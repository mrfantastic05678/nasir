"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
            About Me!
          </h3>
          <h2 className="sm:text-3xl text-center text-2xl md:text-left text-foreground font-medium title-font mb-2 md:w-2/5">
            AI Solutions Developer & Full-Stack Developer
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:-mt-24 md:w-3/5 md:pl-6 justify-self-end"
        >
          <p className="leading-relaxed text-center md:text-left text-base text-gray-500">
            As a freelance developer, I <span className="text-accent font-semibold">spearhead intelligent automation systems</span> and modern web applications. I lead AI model integration into client-facing products, building chatbots that handle complex queries and automate repetitive tasks. As a <span className="text-accent font-semibold">bridge between technical teams and clients</span>, I ensure every solution is strategically aligned with business goals,delivering measurable results in efficiency and conversion rates.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-start md:mt-4 mt-6"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex font-semibold text-white bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-950 hover:bg-blue-500 hover:bg-gradient-to-tr border-0 py-2 px-4 focus:outline-none rounded-full"
              >
                Contact Me
              </motion.button>
            </Link>
            <Link
              href={"/projects"}
              className="group text-accent-500 inline-flex items-center ml-4 relative"
            >
              Learn More
              <motion.span
                className="group-hover:rotate-90 ml-2 duration-300 group-hover:text-accent inline-block absolute -top-2 -right-4"
              >
                <FaArrowRight />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
