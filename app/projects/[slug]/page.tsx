import { Metadata } from "next";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";

import { ProjectItem } from "@/common/types/projects";
import { METADATA } from "@/common/constants/metadata";
import { loadMdxFiles } from "@/common/libs/mdx";
import axios from "axios";

interface ProjectDetailPageProps {
  params: { slug: string };
}

const getProjectDetail = async (slug: string): Promise<ProjectItem> => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  try {
    const response = await axios.get(`${baseUrl}/api/projects/${slug}`);
    const project = response.data;

    const contents = loadMdxFiles();
    const matchedContent = contents.find((item) => item.slug === slug);

    return {
      ...project,
      content: matchedContent?.content || null,
    };
  } catch (error) {
    console.error("Failed to fetch project:", error);
    throw new Error("Project not found or server error");
  }
};

export const generateMetadata = async ({
  params,
}: ProjectDetailPageProps): Promise<Metadata> => {
  const project = await getProjectDetail(params.slug);

  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: `Discover details about "${project.title}", a project focused on ${project.description}. Learn more about the technologies used, features, and development process.`,
    openGraph: {
      title: `${project.title} ${METADATA.exTitle}`,
      description: `In-depth overview of "${project.title}" – a project showcasing innovation, problem-solving, and technical expertise.`,
      images: project.image,
      url: `${METADATA.openGraph.url}/projects/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: METADATA.openGraph.locale,
      type: "article",
      authors: METADATA.creator,
    },
    keywords: [
      project.title,
      "software engineering",
      "web development",
      "frontend development",
      "full-stack projects",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "programming portfolio",
    ],
    alternates: {
      canonical: `${process.env.DOMAIN}/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} ${METADATA.exTitle}`,
      description: `Explore the project "${project.title}", featuring ${project.description}.`,
      site: "@earhyel",
    },
  };
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const data = await getProjectDetail(params.slug);

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <BackButton url="/projects" />
      <PageHeading title={data.title} description={data.description} />
      <ProjectDetail {...data} />
    </Container>
  );
};

export default ProjectDetailPage;
