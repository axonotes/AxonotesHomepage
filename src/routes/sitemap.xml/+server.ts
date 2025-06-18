import type {RequestHandler} from "./$types";

export const GET: RequestHandler = async ({setHeaders, url}) => {
    // Get the site's origin from the request URL
    const site: string = url.origin;

    // Use Vite's glob import to find all +page.svelte files
    // The type for import.meta.glob is generally { [key: string]: () => Promise<unknown> }
    const pages: Record<string, () => Promise<unknown>> = import.meta.glob(
        "/src/routes/**/+page.svelte"
    );

    const paths: string[] = Object.keys(pages).map((path) => {
        return (
            path
                .replace("/src/routes", "")
                .replace("/+page.svelte", "")
                .replace(/\/$/, "") || "/"
        );
    });

    const urlEntries: string = paths
        .map((path) => {
            const priority: string = path === "/" ? "1.0" : "0.7";
            return `
    <url>
      <loc>${site}${path}</loc>
      <changefreq>weekly</changefreq>
      <priority>${priority}</priority>
    </url>
  `;
        })
        .join("");

    const xml: string = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
    >
      ${urlEntries}
    </urlset>`;

    setHeaders({
        "Content-Type": "application/xml",
        "Cache-Control": `max-age=0, s-maxage=${60 * 60 * 24}`, // 24 hours
    });

    return new Response(xml);
};
