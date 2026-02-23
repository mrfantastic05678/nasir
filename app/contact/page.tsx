import React from "react";
import Contact from "@/components/Contact";
import JsonLdSchema from "@/components/JsonLdSchema";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Nasir Siddiqui | AI Automations & Web Development",
  description:
    "Get in touch with Nasir Siddiqui for AI automation projects, chatbot development, and web development services. Expert in Next.js, TypeScript, and intelligent automation solutions.",
  authors: [{ name: "Nasir Siddiqui", url: "https://nasirsiddiqui.dev" }],
  keywords: [
    "Contact Nasir Siddiqui",
    "Hire AI Automation Expert",
    "Chatbot Developer Contact",
    "AI Services Contact",
    "Next.js Developer Contact",
    "Full Stack Developer Contact",
    "Web Development Services",
    "Business Automation Contact",
    "TypeScript Developer Contact",
    "Freelance Developer",
    "Hire Developer",
    "WordPress Developer Contact",
    "E-commerce Solutions",
    "Digital Services",
    "Professional Contact",
  ],
  openGraph: {
    title: "Contact Nasir Siddiqui | AI Automations & Web Development",
    description:
      "Get in touch with Nasir Siddiqui for AI automation projects, chatbot development, and web development services.",
    url: "https://nasirsiddiqui.dev/contact",
    siteName: "Nasir Siddiqui Portfolio",
    type: "website",
    images: [
      {
        url: "/assets/nasir-siddiqui-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Nasir Siddiqui - AI Automation Expert",
      },
    ],
  },
  twitter: {
    title: "Contact Nasir Siddiqui | AI Automations & Web Development",
    description:
      "Get in touch with Nasir Siddiqui for AI automation projects, chatbot development, and web development services.",
    card: "summary_large_image",
    images: ["/assets/nasir-siddiqui-contact.png"],
  },
  alternates: {
    canonical: "https://nasirsiddiqui.dev/contact",
  },
};

const contact = () => {
  return (
    <>
      <JsonLdSchema
        type="contact"
        pageUrl="https://nasirsiddiqui.dev/contact"
      />
      <div className="pt-32">
        <Contact />
      </div>
    </>
  );
};

export default contact;
