import { Metadata } from "next";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { BlogItem as BlogPostItem } from "@/common/types/blogs";
import { METADATA } from "@/common/constants/metadata";
import { loadMdxFiles } from "@/common/libs/mdx";
import { getBlogsDataBySlug } from "@/services/blogs"; 
import BlogDetail from "@/modules/blogs/components/UI/blogDetail";

interface BlogPostDetailPageProps {
  params: { slug: string };
}

export const generateMetadata = async ({
  params,
}: BlogPostDetailPageProps): Promise<Metadata> => {
  const blogPost = await getBlogPostDetail(params?.slug);

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
  const data = await getBlogsDataBySlug(slug);
  return data;
};

const BlogPostDetailPage = async ({ params }: BlogPostDetailPageProps) => {
  const data = await getBlogPostDetail(params?.slug);

  const PAGE_TITLE = data?.title;
  const PAGE_DESCRIPTION = data?.description;

  return (
    <Container data-aos="fade-up">
      <BackButton url="/blog" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <BlogDetail {...data} />
    </Container>
  );
};

export default BlogPostDetailPage;
