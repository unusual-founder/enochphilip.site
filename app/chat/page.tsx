import { Metadata } from "next";
import { useTranslations } from "next-intl";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import { METADATA } from "@/common/constants/metadata";
import ChatRoom from "@/modules/chat";

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  description: `Reach out to ${METADATA.creator} for collaboration, project inquiries, or professional networking. Let's connect and create something amazing!`,
  keywords: [
    "contact",
    "get in touch",
    "connect with developer",
    "hire a developer",
    "software engineer contact",
    "collaboration opportunities",
    "freelance web developer",
    `${METADATA.creator}`,
  ],
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`,
  },
  openGraph: {
    title: `Contact ${METADATA.exTitle}`,
    description: `Have a project idea or want to collaborate? Get in touch with ${METADATA.creator} today!`,
    url: `${METADATA.openGraph.url}/contact`,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Contact ${METADATA.exTitle}`,
    description: `Looking to collaborate or need a developer? Connect with ${METADATA.creator}.`,
    site: "@earhyel",
  },
};


const ContactPage = () => {
  const t = useTranslations("ChatRoomPage");

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <ChatRoom />
    </Container>
  );
};

export default ContactPage;
