import { Metadata } from "next";

import Container from "@/common/components/elements/Container";
import Home from "@/modules/home";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Software Engineer & Developer Portfolio`,
  description: `Explore ${METADATA.creator}'s personal website, featuring a portfolio of projects, blog posts, and professional experience in web development and software engineering.`,
  keywords: [
    `${METADATA.creator}`,
    `${METADATA.keywords}`,
    `${METADATA.keyword}`,
    "software engineer portfolio",
    "web developer",
    "full-stack developer",
    "frontend development",
    "backend development",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "freelance developer",
    "hire a developer",
  ],
  alternates: {
    canonical: `${process.env.DOMAIN}`,
  },
  openGraph: {
    title: `${METADATA.creator} | Software Engineer & Developer`,
    description: `Discover ${METADATA.creator}'s work, skills, and experience in software development. Browse projects, blog posts, and more.`,
    url: `${METADATA.openGraph.url}`,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
    images: [METADATA.profile],
  },
  twitter: {
    card: "summary_large_image",
    title: `${METADATA.creator} | Software Engineer`,
    description: `Check out ${METADATA.creator}'s portfolio, blog, and projects in web development and software engineering.`,
    site: "@your_twitter_handle",
    images: [METADATA.profile],
  },
};


const HomePage = () => {
  return (
    <Container data-aos="fade-up">
      <Home />
    </Container>
  );
};

export default HomePage;
