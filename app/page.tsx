import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectsTab from "@/components/ProjectsTab";
import JsonLdSchema from "@/components/JsonLdSchema";
import type { Metadata } from "next";
import SkillSlider from "@/components/SkillSlider";
import Services from "@/components/Services";
import { siteConfig, getAbsolutePath } from "@/lib/config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Nasir Siddiqui | AI Solutions Developer & Full-Stack Developer",
  description:
    "AI Solutions Developer and Full-Stack Developer specializing in intelligent automation systems, AI model integration, chatbots that handle complex queries, and business workflow optimization with measurable results.",
  keywords: [
    "Nasir Siddiqui Portfolio",
    "AI Solutions Developer",
    "Full-Stack Developer",
    "Chatbot Developer",
    "AI Model Integration",
    "Business Workflow Automation",
    "Next.js Developer",
    "TypeScript Developer",
    "Python Developer",
    "Web Development",
    "API Development",
    "WordPress Developer",
    "React Developer",
  ],
  openGraph: {
    title: "Nasir Siddiqui | AI Solutions Developer & Full-Stack Developer",
    description:
      "AI Solutions Developer and Full-Stack Developer specializing in intelligent automation systems, AI model integration, and business workflow optimization.",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/Nasir.png",
        width: 1200,
        height: 630,
        alt: "Nasir Siddiqui - AI Solutions & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    title: "Nasir Siddiqui | AI Solutions Developer & Full-Stack Developer",
    description:
      "AI Solutions Developer and Full-Stack Developer specializing in intelligent automation systems, AI model integration, and business workflow optimization.",
    card: "summary_large_image",
    images: ["/assets/Nasir.png"],
    creator: "@nasirsiddiqui",
  },
  alternates: {
    canonical: getAbsolutePath('/'),
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
      <JsonLdSchema type="home" pageUrl={getAbsolutePath('/')} />
      <Hero />
      <About />
      <Services />
      <div className="flex flex-wrap w-full mt-10 mb-20 flex-col items-center text-center">
        <h3 className="text-base text-accent font-medium sm:text-lg">
          Technical Expertise
        </h3>
        <h2 className="text-5xl text-foreground font-semibold sm:text-6xl">
          AI & Full-Stack Tech Stack
        </h2>
      </div>
      <SkillSlider />
      <ProjectsTab />
      <Experience />
      <Contact />
    </>
  );
}
