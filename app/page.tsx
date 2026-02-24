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
  title: "Nasir Siddiqui | AI Automations, Chatbots & Digital Services",
  description:
    "AI automation expert and full-stack developer specializing in intelligent chatbots, business automation systems, and modern web solutions.",
  keywords: [
    "Nasir Siddiqui Portfolio",
    "AI Automation Expert",
    "Chatbot Developer",
    "Business Automation",
    "Next.js Developer",
    "Full Stack Developer",
    "TypeScript Developer",
    "Web Development",
    "E-commerce Solutions",
    "API Development",
    "WordPress Developer",
    "React Developer",
    "Python Developer",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/Nasir.png",
        width: 1200,
        height: 630,
        alt: "Nasir Siddiqui - AI Automation Expert",
      },
    ],
  },
  twitter: {
    title: "Nasir Siddiqui | AI Automations, Chatbots & Digital Services",
    description:
      "AI automation expert and full-stack developer specializing in intelligent chatbots, business automation systems, and modern web solutions.",
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
