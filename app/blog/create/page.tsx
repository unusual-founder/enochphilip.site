import React from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { METADATA } from "@/common/constants/metadata";
import CreateBlogPage from "@/modules/blogs/components/CreateBlog";

export const metadata: Metadata = {
  title: `Create Blog Post ${METADATA.exTitle},`,
  description: "Write and publish new blog posts on software development, technology, and engineering.",
  keywords: [
    "create blog post",
    "publish articles",
    "developer blogging",
    "writing tutorials",
    "tech insights",
  ],
  alternates: {
    canonical: `${process.env.DOMAIN}/blog/create`,
  },
  openGraph: {
    title: "Create a New Blog Post",
    description: "Write and share your thoughts on software development and tech trends.",
    url: `${process.env.DOMAIN}/blog/create`,
    siteName: "Enoch Philip | Developer Blog",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Create Blog Post ${METADATA.exTitle},`,
    description: "Start writing your blog posts on software engineering and technology.",
    site: "@earhyel",
  },
};

function Page() {
    const t = useTranslations("CreateBlogPage");
    
  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <CreateBlogPage />
    </Container>
  );
}

export default Page;

