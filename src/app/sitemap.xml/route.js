// app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = "https://teamexe.tech";
  const now = new Date();

  const staticPages = [
    { path: "/", changeFreq: "weekly", priority: 1 },
    { path: "/AboutUs", changeFreq: "monthly", priority: 0.8 },
    { path: "/Events", changeFreq: "weekly", priority: 0.9 },
    { path: "/Projects", changeFreq: "monthly", priority: 0.8 },
    { path: "/Team", changeFreq: "monthly", priority: 0.7 },
    { path: "/ContactUs", changeFreq: "yearly", priority: 0.6 },
    { path: "/Faqs", changeFreq: "yearly", priority: 0.6 },
  ];

  const routes = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now.toISOString(),
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}
