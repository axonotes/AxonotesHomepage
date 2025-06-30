import {paraglide} from "@inlang/paraglide-sveltekit/vite";
import tailwindcss from "@tailwindcss/vite";
import {sveltekit} from "@sveltejs/kit/vite";
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [
        paraglide({project: "./project.inlang", outdir: "./src/lib/paraglide"}),
        tailwindcss(),
        sveltekit(),
    ],
    preview: {
        allowedHosts: [".axonotes.ch"],
    },
});
