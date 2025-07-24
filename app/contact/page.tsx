import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Contact from "@/modules/contact";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  description: `Get in touch with ${METADATA.creator} for collaborations, inquiries, or just to connect. Let's build something great together!`,
  keywords: [
    "contact",
    "get in touch",
    "collaborate",
    "software engineer",
    "developer inquiries",
    "freelance projects",
    `${METADATA.creator}`,
  ],
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`,
  },
  openGraph: {
    title: `Contact ${METADATA.exTitle}`,
    description: `Reach out to ${METADATA.creator} for partnerships, tech discussions, or project opportunities.`,
    url: `${METADATA.openGraph.url}/contact`,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Contact ${METADATA.exTitle}`,
    description: `Looking to collaborate or have a question? Connect with ${METADATA.creator}.`,
    site: "@earhyel",
  },
};


const ContactPage = () => {
  const t = useTranslations("ContactPage");

  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <PageHeading title={t("title")} description={t("description")} />
      <Contact />
    </Container>
  );
};

export default ContactPage;
