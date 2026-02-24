import Skill from "@/components/Skill";
import React from "react";
import JsonLdSchema from "@/components/JsonLdSchema";
import type { Metadata } from "next";
import SkillSlider from "@/components/SkillSlider";
import { siteConfig, getAbsolutePath } from "@/lib/config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Skills of Nasir Siddiqui",
  description:
    "Discover the technical skills and expertise of Nasir Siddiqui, including AI Automations, Chatbot Development, Full Stack Development, Next.js, React, and more.",
  authors: [{ name: "Nasir Siddiqui" }],
  keywords: [
    "Nasir Siddiqui Skills",
    "AI Automation Skills",
    "Chatbot Development Skills",
    "Full Stack Developer Skills",
    "Next.js Developer Skills",
    "React Developer Skills",
    "Web Developer Skills",
    "Software Developer Skills",
    "Technical Skills",
    "Programming Languages",
    "Web Technologies",
    "Business Automation",
    "Frontend Development",
    "Backend Development",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python Programming",
    "Tailwind CSS",
    "Web Development Skills",
    "Portfolio Skills",
  ],
  openGraph: {
    title:
      "Skills | Nasir Siddiqui - AI Automation Expert & Full Stack Developer",
    description:
      "Discover Nasir Siddiqui's technical skills and expertise. AI automation expert, full-stack developer, and Next.js specialist proficient in React, TypeScript, chatbots, and modern web technologies.",
    url: getAbsolutePath('/skills'),
    images: [
      {
        url: "/assets/nasir-siddiqui-skills.png",
        width: 1200,
        height: 630,
        alt: "Skills of Nasir Siddiqui - AI Automation Expert",
      },
    ],
  },
  twitter: {
    title:
      "Skills | Nasir Siddiqui - AI Automation Expert & Full Stack Developer",
    description:
      "Discover Nasir Siddiqui's technical skills and expertise. AI automation expert and full-stack developer proficient in modern web technologies.",
  },
  alternates: {
    canonical: getAbsolutePath('/skills'),
  },
};

const skills = () => {
  return (
    <>
      <JsonLdSchema type="skills" pageUrl={getAbsolutePath('/skills')} />
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
