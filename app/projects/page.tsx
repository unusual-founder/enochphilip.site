import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Projects from "@/modules/projects";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Projects ${METADATA.exTitle}`,
  description:
    "Explore my portfolio of software engineering projects, showcasing my skills in frontend development and beyond.",
  keywords: [
    "software engineer portfolio",
    "frontend development projects",
    "full-stack development",
    "JavaScript projects",
    "TypeScript applications",
    "React and Next.js portfolio",
    "web development showcase",
  ],
  alternates: {
    canonical: `${process.env.DOMAIN}/projects`,
  },
  openGraph: {
    title: `Projects ${METADATA.exTitle}`,
    description:
      "A collection of my development projects, covering frontend, backend, and full-stack applications.",
    url: `${process.env.DOMAIN}/projects`,
    siteName: "Enoch Philip | Developer Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects ${METADATA.exTitle}`,
    description:
      "Browse my latest software engineering projects, including web and mobile applications.",
    site: "@your_twitter_handle",
  },
};


const ProjectsPage = () => {
  const t = useTranslations("ProjectsPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
