"use client";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";

const AboutPageContent = () => {
  return (
    <div className="pt-32">
      <About />
      <Experience />
      <Skill />
    </div>
  );
};

export default AboutPageContent;
