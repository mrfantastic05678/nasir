import React from "react";
import ProjectsTab from "@/components/ProjectsTab";
import JsonLdSchema from "@/components/JsonLdSchema";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Projects | Nasir Siddiqui - AI Automations & Web Development",
  description:
    "Explore Nasir Siddiqui's portfolio of AI automation projects, chatbot development, and web solutions. Featuring Next.js, TypeScript, and modern digital services.",
  authors: [{ name: "Nasir Siddiqui", url: "https://nasirsiddiqui.dev" }],
  keywords: [
    "Nasir Siddiqui Projects",
    "AI Automation Projects",
    "Chatbot Development Projects",
    "Web Development Projects",
    "Next.js Projects",
    "Full Stack Projects",
    "TypeScript Projects",
    "E-commerce Projects",
    "API Development Projects",
    "Business Automation",
    "Production Applications",
    "Scalable Web Applications",
  ],
  openGraph: {
    title: "Projects | Nasir Siddiqui - AI Automations & Web Development",
    description:
      "Explore Nasir Siddiqui's portfolio of AI automation projects, chatbot development, and web solutions.",
    url: "https://nasirsiddiqui.dev/projects",
    siteName: "Nasir Siddiqui Portfolio",
    type: "website",
    images: [
      {
        url: "/assets/nasir-siddiqui-projects.png",
        width: 1200,
        height: 630,
        alt: "Projects by Nasir Siddiqui - AI Automation Expert",
      },
    ],
  },
  twitter: {
    title: "Projects | Nasir Siddiqui - AI Automations & Web Development",
    description:
      "Explore Nasir Siddiqui's portfolio of AI automation projects, chatbot development, and web solutions.",
    card: "summary_large_image",
    images: ["/assets/nasir-siddiqui-projects.png"],
  },
  alternates: {
    canonical: "https://nasirsiddiqui.dev/projects",
  },
};

const projects = () => {
  return (
    <>
      <JsonLdSchema
        type="projects"
        pageUrl="https://nasirsiddiqui.dev/projects"
      />
      <div className="pt-32">
        <ProjectsTab />
      </div>
    </>
  );
};

export default projects;
