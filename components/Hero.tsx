"use client";
import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { RiNextjsLine, RiWordpressLine } from "react-icons/ri";
import { TbBrandTypescript, TbBrandPython } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/HeroHighlight";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { Github, Linkedin, Mail } from "lucide-react";
import dynamic from "next/dynamic";

const Typewriter = dynamic(
  () => import("nextjs-simple-typewriter").then((mod) => mod.Typewriter),
  {
    ssr: false,
    loading: () => <span>AI Automation Expert</span>,
  }
);

const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden z-0">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none z-[-1]" />
      <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-accent rounded-full blur-[150px] opacity-10 pointer-events-none z-[-1]" />

      <HeroHighlight>
        <div className="max-w-7xl mx-auto flex px-5 pt-24 py-10 md:flex-row flex-col items-center min-h-screen">
          <div className="sm:entrance-left lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:w-3/5">
            {/* Available Badge with Live Indicator */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-gray-300 border border-white/10 bg-card shadow-xl backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                Available for AI Projects & Web Development
              </span>
            </div>

            <div className="min-h-60 xs:min-h-44 md:min-h-0">
              <h1 className="sm:text-5xl text-4xl mb-4 font-montserrat font-bold text-white tracking-tight">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Nasir Siddiqui</span><span className="text-accent">.</span>
                <br />
                <span className="text-gray-200 font-semibold tracking-normal mt-2 inline-block">
                  <Typewriter
                    words={[
                      "an AI Automation Expert.",
                      "a Chatbot Developer.",
                      "a Web Development Specialist.",
                      "a Full Stack Developer.",
                      "a TypeScript Expert.",
                      "a Digital Solutions Provider.",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </div>
            <p className="mb-8 leading-relaxed font-poppins text-gray-400">
              I build intelligent chatbots, automation systems, and modern web applications that help businesses work smarter. Specializing in AI-powered solutions, full-stack development, and digital services that drive real results.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="#contact" className="scroll-smooth duration-300">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden flex items-center text-white px-8 py-3.5 rounded-full font-medium text-sm tracking-wide bg-gradient-to-r from-primary to-accent border-0"
                >
                  <span className="relative z-10 flex items-center">
                    Get In Touch
                    <FaChevronRight className="ml-3 group-hover:translate-x-1 duration-300 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </Link>
              <Link href="#projects" className="scroll-smooth duration-300">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center text-white bg-transparent border border-white/20 hover:border-white/50 py-3.5 rounded-full font-medium text-sm px-8 transition-all duration-300"
                >
                  View Projects
                  <FaChevronRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center mt-8">
              <div>
                <p className="mb-2 font-bold md:ml-4 text-xs tracking-widest text-gray-500 uppercase">TECH STACK:</p>
                <div className="container flex flex-row items-center gap-3 justify-center md:justify-start flex-wrap">
                  <AnimatedTooltip tooltipTitle="Next.js" tooltipDescription="SaaS & Full-Stack">
                    <div className="shadow-xl shadow-black/50 opacity-80 hover:opacity-100 rounded-lg bg-card border border-primary/30 p-3 text-2xl text-gray-300 hover:text-white transition-all">
                      <RiNextjsLine />
                    </div>
                  </AnimatedTooltip>
                  <AnimatedTooltip tooltipTitle="TypeScript" tooltipDescription="Type-Safe Development">
                    <div className="shadow-xl shadow-black/50 opacity-80 hover:opacity-100 rounded-lg bg-card border border-primary/30 p-3 text-2xl text-gray-300 hover:text-white transition-all">
                      <TbBrandTypescript />
                    </div>
                  </AnimatedTooltip>
                  <AnimatedTooltip tooltipTitle="Python" tooltipDescription="Chatbots & Automation">
                    <div className="shadow-xl shadow-black/50 opacity-80 hover:opacity-100 rounded-lg bg-card border border-primary/30 p-3 text-2xl text-gray-300 hover:text-white transition-all">
                      <TbBrandPython />
                    </div>
                  </AnimatedTooltip>
                  <AnimatedTooltip tooltipTitle="WordPress" tooltipDescription="CMS & E-commerce">
                    <div className="shadow-xl shadow-black/50 opacity-80 hover:opacity-100 rounded-lg bg-card border border-primary/30 p-3 text-2xl text-gray-300 hover:text-white transition-all">
                      <RiWordpressLine />
                    </div>
                  </AnimatedTooltip>
                </div>
              </div>

              <div>
                <p className="mt-8 lg:mt-0 mb-2 font-bold md:ml-4 text-xs tracking-widest text-gray-500 uppercase">CONNECT WITH ME:</p>
                <div className="container flex flex-row items-center gap-3 justify-center md:justify-start">
                  <AnimatedTooltip tooltipTitle="Linkedin" tooltipDescription="Connect with me on Linkedin">
                    <Link href={"https://www.linkedin.com/in/nasirsiddiqui/"} target="_blank">
                      <div className="shadow-xl shadow-black/50 opacity-80 hover:opacity-100 rounded-lg bg-card border border-primary/30 p-3 text-2xl text-gray-300 hover:text-white transition-all">
                        <Linkedin />
                      </div>
                    </Link>
                  </AnimatedTooltip>
                  <AnimatedTooltip tooltipTitle="Github" tooltipDescription="View my repositories on Github">
                    <Link href={"https://github.com/nasirsiddiqui"} target="_blank">
                      <div className="shadow-xl shadow-black/50 opacity-80 hover:opacity-100 rounded-lg bg-card border border-primary/30 p-3 text-2xl text-gray-300 hover:text-white transition-all">
                        <Github />
                      </div>
                    </Link>
                  </AnimatedTooltip>
                  <AnimatedTooltip tooltipTitle="Email" tooltipDescription="Send me an email">
                    <Link href={"mailto:nasirsiddiqui@example.com"} target="_blank">
                      <div className="shadow-xl shadow-black/50 opacity-80 hover:opacity-100 rounded-lg bg-card border border-primary/30 p-3 text-2xl text-gray-300 hover:text-white transition-all">
                        <Mail />
                      </div>
                    </Link>
                  </AnimatedTooltip>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:entrance-right lg:max-w-lg md:w-2/5 sm:-ml-16 sm:pt-0 relative lg:mt-4 xl:mt-0 md:ml-20 md:-mt-20">
            <div className="-mt-56 -mr-[155px] w-11/12 sm:w-[24rem] h-[70%] shadow-2xl opacity-40 shadow-indigo-900/30 rounded-xl absolute bottom-0 right-40 z-0 md:w-11/12 md:h-[75%] md:-mr-28 md:bottom-0 xs:h-[75%] xs:bottom-0 sm:bottom-0 sm:-mr-32 sm:w-10/12 lg:-mr-40 xl:w-10/12 xl:-mr-30 xl:h-[75%] xl:bottom-0 bg-card border border-white/5"></div>
            <AnimatedTooltip
              tooltipTitle="Nasir Siddiqui"
              tooltipDescription="AI Automation & Web Developer"
            >
              <Image
                src="/assets/Nasir.png"
                className="relative object-contain object-center -mt-4 xs:ml-5 xs:-mt-2 z-10 md:mt-24 md:-ml-10 sm:-mt-2 sm:ml-16 lg:ml-4 lg:mt-8 xl:ml-12 drop-shadow-2xl"
                width={450}
                height={350}
                quality={100}
                unoptimized
                priority
                alt="Nasir Siddiqui - AI Automation & Web Developer"
              />
            </AnimatedTooltip>
          </div>
        </div>
        <div className="h-px bg-white/10 justify-center flex m-auto mt-10"></div>
      </HeroHighlight>
    </section>
  );
};

export default Hero;
