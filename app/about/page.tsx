import { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Nasir Siddiqui | Spec-Driven Developer & AI Engineer",
  description:
    "Learn about Nasir Siddiqui, a spec-driven developer and AI engineer specializing in Next.js SaaS products, AI agents, and full-time digital solutions. Discover my expertise in OpenAI Agents SDK and production-ready architectures.",
  authors: [{ name: "Owais Abdullah", url: "https://owaisabdullah.dev" }],
  keywords: [
    "About Nasir Siddiqui",
    "Spec-Driven Developer",
    "AI Agent Engineer",
    "AI-Driven Development",
    "Next.js SaaS Developer",
    "Full Stack Digital FTE",
    "OpenAI Agents SDK",
    "TypeScript Developer",
    "SaaS Architect",
    "AI Automation Engineer",
    "Professional Background",
    "Developer Portfolio",
  ],
  openGraph: {
    title: "About Nasir Siddiqui | Spec-Driven Developer & AI Engineer",
    description:
      "Discover Nasir Siddiqui's journey as a spec-driven developer and AI engineer. Expert in Next.js SaaS products, AI agents, OpenAI Agents SDK, and building production-ready architectures.",
    url: "https://owaisabdullah.dev/about",
    siteName: "Nasir Siddiqui Portfolio",
    type: "website",
    images: [
      {
        url: "/assets/Owais Abdullah (2).png",
        width: 1200,
        height: 630,
        alt: "About Nasir Siddiqui - Spec-Driven Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    title: "About Nasir Siddiqui | Spec-Driven Developer & AI Engineer",
    description:
      "Discover Nasir Siddiqui's journey as a spec-driven developer and AI engineer. Expert in Next.js SaaS products, AI agents, OpenAI Agents SDK, and building production-ready architectures.",
    card: "summary_large_image",
    images: ["/assets/Owais Abdullah (2).png"],
  },
  alternates: {
    canonical: "https://owaisabdullah.dev/about",
  },
};

const AboutPage = () => {
  return <AboutPageContent />;
};

export default AboutPage;
