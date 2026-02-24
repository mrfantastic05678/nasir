import { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";
import { siteConfig, getAbsolutePath } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Nasir Siddiqui | AI Automation Expert & Web Developer",
  description:
    "Learn about Nasir Siddiqui, an AI automation expert and full-stack developer specializing in intelligent chatbots, business automation, and modern web solutions.",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  keywords: [
    "About Nasir Siddiqui",
    "AI Automation Expert",
    "Chatbot Developer",
    "Web Development Specialist",
    "Next.js Developer",
    "Full Stack Developer",
    "TypeScript Developer",
    "WordPress Developer",
    "Business Automation",
    "Digital Solutions",
    "Professional Background",
    "Developer Portfolio",
  ],
  openGraph: {
    title: "About Nasir Siddiqui | AI Automation Expert & Web Developer",
    description:
      "Discover Nasir Siddiqui's journey as an AI automation expert and full-stack developer. Specializing in intelligent chatbots, business automation, and modern web solutions.",
    url: getAbsolutePath('/about'),
    siteName: `${siteConfig.name} Portfolio`,
    type: "website",
    images: [
      {
        url: "/assets/nasir-siddiqui-about.png",
        width: 1200,
        height: 630,
        alt: "About Nasir Siddiqui - AI Automation Expert",
      },
    ],
  },
  twitter: {
    title: "About Nasir Siddiqui | AI Automation Expert & Web Developer",
    description:
      "Discover Nasir Siddiqui's journey as an AI automation expert and full-stack developer.",
    card: "summary_large_image",
    images: ["/assets/nasir-siddiqui-about.png"],
  },
  alternates: {
    canonical: getAbsolutePath('/about'),
  },
};

const AboutPage = () => {
  return <AboutPageContent />;
};

export default AboutPage;
