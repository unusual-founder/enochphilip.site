import { Metadata } from "next";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { ProjectItem } from "@/common/types/projects";
import { METADATA } from "@/common/constants/metadata";
import { loadMdxFiles } from "@/common/libs/mdx";
import { getProjectsDataBySlug } from "@/services/projects";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export const generateMetadata = async ({
  params,
}: ProjectDetailPageProps): Promise<Metadata> => {
  const project = await getProjectDetail(params?.slug);

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
      canonical: `${process.env.DOMAIN}/projects/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} ${METADATA.exTitle}`,
      description: `Explore the project "${project.title}", featuring ${project.description}.`,
      site: "@earhyel",
    },
  };
};


const getProjectDetail = async (slug: string): Promise<ProjectItem> => {
  const projects = await getProjectsDataBySlug(slug);
  const contents = loadMdxFiles();
  const content = contents.find((item) => item.slug === slug);
  const response = { ...projects, content: content?.content };
  const data = JSON.parse(JSON.stringify(response));
  return data;
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const data = await getProjectDetail(params?.slug);

  const PAGE_TITLE = data?.title;
  const PAGE_DESCRIPTION = data?.description;

  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <ProjectDetail {...data} />
    </Container>
  );
};

export default ProjectDetailPage;
