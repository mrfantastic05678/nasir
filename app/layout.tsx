import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter, poppins, montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Script from "next/script";
import { siteConfig } from "@/lib/config";


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | AI Automations & Web Development",
  },
  description: siteConfig.description,
  keywords: [
    "Nasir Siddiqui",
    "Nasir",
    "AI Automation Expert",
    "Chatbot Developer",
    "AI Chatbots",
    "Business Automation",
    "Web Development",
    "Next.js Developer",
    "Full Stack Developer",
    "TypeScript Developer",
    "WordPress Developer",
    "E-commerce Solutions",
    "API Development",
    "Digital Services",
    "React Developer",
    "Python Developer",
    "Portfolio",
    "Web Development Services",
    "Software Development",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: "Nasir Siddiqui",
  publisher: "Nasir Siddiqui",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/logo.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/assets/logo.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nasir Siddiqui Portfolio",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: "/assets/nasir-siddiqui-og.png",
        width: 1200,
        height: 630,
        alt: "Nasir Siddiqui - AI Automation & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasir Siddiqui | AI Automations, Chatbots & Digital Services",
    description:
      "Nasir Siddiqui is an AI automation expert and full-stack developer specializing in intelligent chatbots, business automation systems, and modern web solutions.",
    images: ["/assets/nasir-siddiqui-og.png"],
    creator: "@nasirsiddiqui",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "92FJDtkgr_fHL9xYV5k_H0WlCjrZbHdrJq5I43pw7Zk",
  },
  other: {
    "msapplication-TileColor": "#212428",
    "theme-color": "#3a69ff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Nasir Siddiqui Portfolio",
    "application-name": "Nasir Siddiqui Portfolio",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3a69ff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Nasir Siddiqui Portfolio"
        />
        <meta name="application-name" content="Nasir Siddiqui Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={cn(
          inter.variable,
          poppins.variable,
          montserrat.variable,
          "font-sans antialiased"
        )}
      >
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
