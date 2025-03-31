export const METADATA = {
  creator: "Enoch Philip",
  description: "Personal website, portfolio, blog, and developer profile. Showcasing expertise in full-stack development, web technologies, and software engineering.",
  keyword: "enoch, enoch philip, full-stack developer, software engineer, web development, javascript, react, nextjs, typescript, blockchain, developer portfolio, programming, coding, tech blog, freelance developer",
  authors: {
    name: "Enoch Philip",
    url: process.env.DOMAIN,
  },
  openGraph: {
    url: process.env.DOMAIN,
    siteName: "Enoch Philip - Developer Portfolio",
    locale: "en-US",
    type: "website",
    title: "Enoch Philip - Full-Stack Developer & Tech Enthusiast",
    description: "Explore my personal portfolio and blog, where I share my latest projects, coding tutorials, and tech insights.",
    image: "/images/enoch.png", // Make sure this image is optimized for sharing (1200x630px)
  },
  twitterCard: {
    cardType: "summary_large_image", 
    site: "@earhyel",
    title: "Enoch Philip - Developer Portfolio",
    description: "Explore my personal website and portfolio for all things related to full-stack development, web technologies, and more.",
    image: "/images/enoch.png", // Same image as openGraph for consistency
  },
  exTitle: "| Enoch Philip",
  profile: "/images/enoch.png",
  robots: "index, follow",
  canonical: process.env.DOMAIN,
  keywords: "Enoch Philip, full-stack developer, web developer, JavaScript, React, Node.js, TypeScript, blockchain, freelance, software engineering, developer portfolio, coding tutorials, blog, tech insights",
};
