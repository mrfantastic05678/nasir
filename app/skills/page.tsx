import Skill from "@/components/Skill";
import React from "react";
import JsonLdSchema from "@/components/JsonLdSchema";
import type { Metadata } from "next";
import SkillSlider from "@/components/SkillSlider";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Skills of Nasir Siddiqui ",
  description:
    "Discover the technical skills and expertise of Nasir Siddiqui, including AI Agents Development, Full Stack Development, Next.js, React, and more.",
  authors: [{ name: "Owais Abdullah" }],
  keywords: [
    "Nasir Siddiqui Skills",
    "AI Agents Developer Skills",
    "Full Stack Developer Skills",
    "Next.js Developer Skills",
    "React Developer Skills",
    "Web Developer Skills",
    "AI Developer Skills",
    "Software Developer Skills",
    "Technical Skills",
    "Programming Languages",
    "Web Technologies",
    "AI Integration Skills",
    "Frontend Development",
    "Backend Development",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "OpenAI Agents SDK",
    "Python Programming",
    "Tailwind CSS",
    "Web Development Skills",
    "Portfolio Skills",
    "Chatbot Development",
  ],
  openGraph: {
    title:
      "Skills | Nasir Siddiqui - AI Agents Developer & Full Stack Developer",
    description:
      "Discover Nasir Siddiqui's technical skills and expertise. AI Agents Developer, Full Stack Developer, and Next.js specialist proficient in React, TypeScript, AI integration, and modern web technologies.",
    url: "https://owaisabdullah.dev/skills",
    images: [
      {
        url: "/assets/Owais Abdullah (2).png",
        width: 1200,
        height: 630,
        alt: "Skills of Nasir Siddiqui - AI Agents Developer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    title:
      "Skills | Nasir Siddiqui - AI Agents Developer & Full Stack Developer",
    description:
      "Discover Nasir Siddiqui's technical skills and expertise. AI Agents Developer, Full Stack Developer, and Next.js specialist proficient in React, TypeScript, AI integration, and modern web technologies.",
  },
  alternates: {
    canonical: "https://owaisabdullah.dev/skills",
  },
};

const skills = () => {
  return (
    <>
      <JsonLdSchema type="skills" pageUrl="https://owaisabdullah.dev/skills" />
      <div className="pt-32">
        <div className="mb-10">
          <SkillSlider />
        </div>
        <Skill />
      </div>
    </>
  );
};

export default skills;
