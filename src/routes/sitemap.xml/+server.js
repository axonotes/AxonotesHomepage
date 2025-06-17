// src/routes/sitemap.xml/+server.js

const site = "https://axonotes.ch";

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ setHeaders }) => {
    // Use Vite's glob import to find all +page.svelte files
    const pages = import.meta.glob("/src/routes/**/+page.svelte");

    const paths = Object.keys(pages).map((path) => {
        return (
            path
                .replace("/src/routes", "")
                .replace("/+page.svelte", "")
                .replace(/\/$/, "") || "/"
        );
    });

    const urlEntries = paths
        .map((path) => {
            const priority = path === "/" ? "1.0" : "0.7";
            return `
    <url>
      <loc>${site}${path}</loc>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>
  `;
        })
        .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
    >
      ${urlEntries}
    </urlset>`;

    setHeaders({
        "Content-Type": "application/xml",
        "Cache-Control": `max-age=0, s-maxage=${60 * 60 * 24}`,
    });

    return new Response(xml);
};