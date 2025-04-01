import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Dashboard from "@/modules/dashboard/components/Dashboard";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Dashboard ${METADATA.exTitle},`,
  description: `Explore my development journey, achievements, and ongoing projects in my personal activity dashboard.`,
  keywords: [
    "software engineer dashboard",
    "developer progress tracker",
    "coding achievements",
    "software development insights",
    "engineering projects overview",
    "programming activity log",
  ],
  alternates: {
    canonical: `${process.env.DOMAIN}/dashboard`,
  },
  openGraph: {
    title: "My Developer Dashboard",
    description:
      "A detailed view of my work, contributions, and progress as a software engineer.",
    url: `${process.env.DOMAIN}/dashboard`,
    siteName: "Enoch Philip | Developer Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `Dashboard ${METADATA.exTitle},`,
    description:
      "Stay updated with my latest projects, coding challenges, and professional growth.",
    site: "@earhyel",
  },
};


const DashboardPage = () => {
  const t = useTranslations("DashboardPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Dashboard />
    </Container>
  );
};

export default DashboardPage;
