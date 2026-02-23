import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectsTab from "@/components/ProjectsTab";
import JsonLdSchema from "@/components/JsonLdSchema";
import type { Metadata } from "next";
import SkillSlider from "@/components/SkillSlider";
import Services from "@/components/Services";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Nasir Siddiqui | Spec-Driven Developer & AI Agent Engineer",
  description:
    "Spec-driven developer and AI engineer specializing in Next.js SaaS products, AI agents, and full-time digital solutions. Building production-ready web applications with TypeScript, OpenAI Agents SDK, and modern architectures.",
  keywords: [
    "Nasir Siddiqui Portfolio",
    "Spec-Driven Developer",
    "AI Agent Developer",
    "AI-Driven Development",
    "Next.js SaaS Developer",
    "Full Stack Digital FTE",
    "OpenAI Agents SDK Developer",
    "TypeScript Developer",
    "AI Automation Engineer",
    "SaaS Architect",
    "WordPress Developer",
    "Full Stack Developer",
    "React Developer",
    "Python Developer",
  ],
  openGraph: {
    title: "Nasir Siddiqui | Spec-Driven Developer & AI Agent Engineer",
    description:
      "Spec-driven developer and AI engineer building Next.js SaaS products, AI agents, and full-time digital solutions. Expert in TypeScript, OpenAI Agents SDK, and production-ready web architectures.",
    url: "https://owaisabdullah.dev",
    siteName: "Nasir Siddiqui Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/owais-abdullah-og.png",
        width: 1200,
        height: 630,
        alt: "Nasir Siddiqui - Spec-Driven Developer & AI Agent Engineer",
      },
    ],
  },
  twitter: {
    title: "Nasir Siddiqui | Spec-Driven Developer & AI Agent Engineer",
    description:
      "Spec-driven developer and AI engineer building Next.js SaaS products, AI agents, and full-time digital solutions. Expert in TypeScript, OpenAI Agents SDK, and production-ready web architectures.",
    card: "summary_large_image",
    images: ["/assets/Owais Abdullah (2).png"],
  },
  alternates: {
    canonical: "https://owaisabdullah.dev/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <JsonLdSchema type="home" pageUrl="https://owaisabdullah.dev" />
      <Hero />
      <About />
      <Services />
      <div className="flex flex-wrap w-full mt-10 mb-20 flex-col items-center text-center">
        <h3 className="text-base text-accent font-medium sm:text-lg">
          Areas of Expertise
        </h3>
        <h2 className="text-5xl text-foreground font-semibold sm:text-6xl">
          Tech Stack
        </h2>
      </div>
      <SkillSlider />
      <ProjectsTab />
      <Experience />
      <Contact />
    </>
  );
}
