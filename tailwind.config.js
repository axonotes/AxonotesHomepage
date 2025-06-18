import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts,svx}"],

    theme: {
        extend: {
            typography: () => ({
                axonotes: {
                    css: {
                        // --- LIGHT MODE MAPPING ---
                        "--tw-prose-body": "var(--color-surface-800)",
                        "--tw-prose-headings": "var(--color-primary-600)",
                        "--tw-prose-lead": "var(--color-surface-700)",
                        "--tw-prose-links": "var(--color-primary-700)",
                        "--tw-prose-bold": "var(--color-surface-900)",
                        "--tw-prose-counters": "var(--color-primary-600)",
                        "--tw-prose-bullets": "var(--color-primary-500)",
                        "--tw-prose-hr": "var(--color-surface-300)",
                        "--tw-prose-quotes": "var(--color-surface-600)",
                        "--tw-prose-quote-borders":
                            "var(--color-secondary-300)",
                        "--tw-prose-captions": "var(--color-surface-500)",
                        "--tw-prose-code": "var(--color-tertiary-700)",
                        "--tw-prose-pre-code": "var(--color-tertiary-200)",
                        "--tw-prose-pre-bg": "var(--color-tertiary-800)",
                        "--tw-prose-th-borders": "var(--color-surface-400)",
                        "--tw-prose-td-borders": "var(--color-surface-300)",

                        // --- DARK MODE MAPPING ---
                        "--tw-prose-invert-body": "var(--color-surface-200)",
                        "--tw-prose-invert-headings":
                            "var(--color-primary-400)",
                        "--tw-prose-invert-lead": "var(--color-surface-300)",
                        "--tw-prose-invert-links": "var(--color-primary-400)",
                        "--tw-prose-invert-bold": "var(--color-surface-100)",
                        "--tw-prose-invert-counters":
                            "var(--color-primary-400)",
                        "--tw-prose-invert-bullets": "var(--color-primary-500)",
                        "--tw-prose-invert-hr": "var(--color-surface-700)",
                        "--tw-prose-invert-quotes": "var(--color-surface-400)",
                        "--tw-prose-invert-quote-borders":
                            "var(--color-secondary-700)",
                        "--tw-prose-invert-captions":
                            "var(--color-surface-500)",
                        "--tw-prose-invert-code": "var(--color-tertiary-400)",
                        "--tw-prose-invert-pre-code":
                            "var(--color-tertiary-200)",
                        "--tw-prose-invert-pre-bg": "var(--color-tertiary-900)",
                        "--tw-prose-invert-th-borders":
                            "var(--color-surface-600)",
                        "--tw-prose-invert-td-borders":
                            "var(--color-surface-700)",
                    },
                },
            }),
        },
    },

    plugins: [typography],
};
