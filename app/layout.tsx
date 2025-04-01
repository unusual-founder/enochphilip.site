import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { getServerSession } from "next-auth";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata } from "next";
import "./globals.css";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import NextAuthProvider from "@/SessionProvider";
import { METADATA } from "@/common/constants/metadata";
import { onestSans, soraSans } from "@/common/styles/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || "",
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};


export const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Enoch Philip",
      "url": "https://enochphilip.site",
      "image": "/images/enoch.png",
      "description": "Personal website, portfolio, blog, and developer profile. Showcasing expertise in full-stack development, web technologies, and software engineering.",
      "sameAs": [
        "https://twitter.com/earhyel", 
        "https://www.linkedin.com/in/earhyel", 
        "https://github.com/arhyel24"
      ],
      "mainEntityOfPage": "https://enochphilip.site",
      "creator": {
        "@type": "Person",
        "name": "Enoch Philip",
        "url": "https://enochphilip.site"
      },
      "keywords": "enoch, enoch philip, full-stack developer, software engineer, web development, javascript, react, nextjs, typescript, blockchain, developer portfolio, programming, coding, tech blog, freelance developer",
      "openGraph": {
        "@type": "WebPage",
        "url": "https://enochphilip.site",
        "name": "Enoch Philip - Full-Stack Developer & Tech Enthusiast",
        "description": "Explore my personal portfolio and blog, where I share my latest projects, coding tutorials, and tech insights.",
        "image": "/images/enoch.png"
      },
      "twitter": {
        "@type": "WebPage",
        "url": "https://enochphilip.site",
        "name": "Enoch Philip - Developer Portfolio",
        "description": "Explore my personal website and portfolio for all things related to full-stack development, web technologies, and more.",
        "image": "/images/enoch.png",
        "creator": "@earhyel"
      }
    }

const RootLayout = async ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) => {
  const messages = await getMessages();
  const session = await getServerSession();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </head>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="8e2c9f27-a12b-48ca-8130-808ebe377aca"
      ></Script>
      <body className={`${soraSans.variable} ${onestSans.variable}`}>
        <NextTopLoader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          // showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <NextIntlClientProvider messages={messages}>
          <NextAuthProvider session={session}>
            <ThemeProviderContext>
              <Layouts>{children}</Layouts>
            </ThemeProviderContext>
          </NextAuthProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
