import adapter from "svelte-adapter-bun";
import {vitePreprocess} from "@sveltejs/vite-plugin-svelte";
import {mdsvex} from "mdsvex";
import {createHighlighter} from "shiki";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".svx"],

    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: [".svx"],
            highlight: {
                highlighter: async (code, lang = "bash") => {
                    const highlighter = await createHighlighter({
                        themes: ["monokai"],
                        langs: [
                            "javascript",
                            "typescript",
                            "css",
                            "html",
                            "svelte",
                            "rust",
                            "markdown",
                            "json",
                            "toml",
                        ],
                    });

                    const html = highlighter.codeToHtml(code, {
                        lang,
                        theme: "monokai",
                    });
                    return `{@html \`${html}\` }`;
                },
            },
        }),
    ],

    kit: {
        adapter: adapter({
            out: "build",
            precompress: true,
            dynamic_origin: true,
            xff_depth: 1,
        }),
    },
};

export default config;
