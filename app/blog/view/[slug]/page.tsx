import { Metadata } from "next";
import axios from "axios";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import BlogDetail from "@/modules/blogs/components/UI/blogDetail";

import { BlogItem as BlogPostItem } from "@/common/types/blogs";
import { METADATA } from "@/common/constants/metadata";

interface BlogPostDetailPageProps {
  params: { slug: string };
}

export const generateMetadata = async ({
  params,
}: BlogPostDetailPageProps): Promise<Metadata> => {
  const blogPost = await getBlogPostDetail(params.slug);

  return {
    title: `${blogPost.title} ${METADATA.exTitle}`,
    description: `Read the blog post titled "${blogPost.title}", where we dive into ${blogPost.description}. Explore in-depth insights and expert opinions.`,
    openGraph: {
      title: `${blogPost.title} ${METADATA.exTitle}`,
      description: `An in-depth blog post titled "${blogPost.title}", offering valuable insights and expert commentary on ${blogPost.description}.`,
      images: blogPost.cover_image,
      url: `${METADATA.openGraph.url}/blog/${blogPost.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: [
      blogPost.title,
      "blog post",
      "technology",
      "web development",
      "software engineering",
      "programming insights",
    ],
    alternates: {
      canonical: `${process.env.DOMAIN}/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${blogPost.title} ${METADATA.exTitle}`,
      description: `Explore the blog post titled "${blogPost.title}", diving into ${blogPost.description}.`,
      site: "@earhyel",
    },
  };
};

const getBlogPostDetail = async (slug: string): Promise<BlogPostItem> => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${slug}`,
    );
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch blog post data");
  }
};

const BlogPostDetailPage = async ({ params }: BlogPostDetailPageProps) => {
  const data = await getBlogPostDetail(params.slug);

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <BackButton url="/blog" />
      <PageHeading title={data.title} description={data.description} />
      <BlogDetail {...data} />
    </Container>
  );
};

export default BlogPostDetailPage;
