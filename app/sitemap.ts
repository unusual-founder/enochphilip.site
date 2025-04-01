// app/sitemap.ts

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: "https://enochphilip.site",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 1,
    },
    {
      url: "https://enochphilip.site/dashboard",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://enochphilip.site/projects",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://enochphilip.site/contact",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    },
  ];

  const projectPages = [
    {
      url: "https://enochphilip.site/projects/project1",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://enochphilip.site/projects/project2",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  return [...staticPages, ...projectPages];
}
