import React from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { METADATA } from "@/common/constants/metadata";
import Blogs from "@/modules/blogs";

export const metadata: Metadata = {
  title: `Blog ${METADATA.exTitle},`,
  description: `Discover insightful articles, tutorials, and thoughts on software development, technology, and engineering.`,
  keywords: [
    "software development blog",
    "tech articles",
    "coding tutorials",
    "developer insights",
    "programming tips",
    "engineering blog",
  ],
  alternates: {
    canonical: `${process.env.DOMAIN}/blog`,
  },
  openGraph: {
    title: "My Tech Blog",
    description:
      "Explore my latest articles, insights, and tutorials on software development, programming, and technology trends.",
    url: `${process.env.DOMAIN}/blog`,
    siteName: "Enoch Philip | Developer Blog",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog ${METADATA.exTitle},`,
    description:
      "Read my latest blog posts on software engineering, coding best practices, and industry trends.",
    site: "@earhyel",
  },
};

function Page() {
  const t = useTranslations("BlogPage");

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <PageHeading title={t("title")} description={t("description")} />
      <Blogs />
    </Container>
  );
}

export default Page;
