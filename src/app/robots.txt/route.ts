// app/robots.txt/route.js

export function GET() {
  const content = `User-agent: *
Allow: /
Sitemap: https://teamexe.tech/sitemap.xml`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
