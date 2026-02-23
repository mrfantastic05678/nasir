import React from "react";
import ProjectsTab from "@/components/ProjectsTab";
import JsonLdSchema from "@/components/JsonLdSchema";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Projects | Nasir Siddiqui - Spec-Driven Development & AI Solutions",
  description:
    "Explore Nasir Siddiqui's portfolio of spec-driven SaaS products, AI agents, and full-time digital solutions. Featuring Next.js, TypeScript, OpenAI Agents SDK, and production-ready architectures.",
  authors: [{ name: "Owais Abdullah", url: "https://owaisabdullah.dev" }],
  keywords: [
    "Nasir Siddiqui Projects",
    "Spec-Driven Development Projects",
    "AI Agent Developer Projects",
    "AI-Driven Development Projects",
    "Next.js SaaS Projects",
    "Full Stack Digital FTE",
    "OpenAI Agents SDK Projects",
    "TypeScript Projects",
    "SaaS Architecture Projects",
    "AI Automation Projects",
    "Production-Ready Applications",
    "Scalable Web Applications",
  ],
  openGraph: {
    title: "Projects | Nasir Siddiqui - Spec-Driven Developer & AI Engineer",
    description:
      "Explore Nasir Siddiqui's portfolio of spec-driven SaaS products, AI agents, and full-time digital solutions. Featuring Next.js, TypeScript, OpenAI Agents SDK, and production-ready architectures.",
    url: "https://owaisabdullah.dev/projects",
    siteName: "Nasir Siddiqui Portfolio",
    type: "website",
    images: [
      {
        url: "/assets/Owais Abdullah (2).png",
        width: 1200,
        height: 630,
        alt: "Projects by Nasir Siddiqui - Spec-Driven Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    title: "Projects | Nasir Siddiqui - Spec-Driven Developer & AI Engineer",
    description:
      "Explore Nasir Siddiqui's portfolio of spec-driven SaaS products, AI agents, and full-time digital solutions. Featuring Next.js, TypeScript, OpenAI Agents SDK, and production-ready architectures.",
    card: "summary_large_image",
    images: ["/assets/Owais Abdullah (2).png"],
  },
  alternates: {
    canonical: "https://owaisabdullah.dev/projects",
  },
};

const projects = () => {
  return (
    <>
      <JsonLdSchema
        type="projects"
        pageUrl="https://owaisabdullah.dev/projects"
      />
      <div className="pt-32">
        <ProjectsTab />
      </div>
    </>
  );
};

export default projects;
