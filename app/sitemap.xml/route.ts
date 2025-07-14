import { NextResponse } from "next/server";
import axios from "axios";

const siteUrl = process.env.DOMAIN as string

const staticPages = ["/", "/about", "/dashboard", "/projects", "/contact", "/blog", "/achievements"];

async function fetchData(endpoint: string) {
    console.log("Fetching route:", `${siteUrl}/api/${endpoint}`)
  try {
    const { data } = await axios.get(`${siteUrl}/api/${endpoint}`);
    if (!Array.isArray(data) || data.length === 0) {
      console.warn(`⚠️ Warning: No data found for ${endpoint}`);
      return [];
    }
    return data;
  } catch (error) {
    console.error(`❌ Error fetching ${endpoint}:`, (error as Error).message);
    return [];
  }
}

export async function GET() {
  try {
    const [projects, blogs, achievements] = await Promise.all([
      fetchData("projects"),
      fetchData("blogs"),
      fetchData("achievements"),
    ]);

    const projectPaths = projects.length ? projects.map((p: { slug: string }) => `/projects/${p.slug}`) : [];
    const blogPaths = blogs.length ? blogs.map((b: { slug: string }) => `/blog/view/${b.slug}`) : [];
    const achievementPaths = achievements.length ? achievements.map((a: { slug: string }) => `/achievements/${a.slug}`) : [];

    const allPages = [...staticPages, ...projectPaths, ...blogPaths, ...achievementPaths];

    if (allPages.length === staticPages.length) {
      console.warn("⚠️ Warning: No dynamic content found. Sitemap will only contain static pages.");
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map(
          (page) => `
        <url>
          <loc>${siteUrl}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${page.startsWith("/projects") || page.startsWith("/blog") ? "weekly" : "monthly"}</changefreq>
          <priority>${page === "/" ? 1.0 : page.startsWith("/projects") || page.startsWith("/blog") ? 0.7 : 0.8}</priority>
        </url>`
        )
        .join("")}
    </urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
